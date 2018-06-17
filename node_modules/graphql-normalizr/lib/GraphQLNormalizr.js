'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var pluralize = require('pluralize');

var _require = require('graphql'),
    visit = _require.visit,
    gql = _require.parse,
    Kind = _require.Kind;

var _require2 = require('./utils'),
    map = _require2.map,
    prop = _require2.prop,
    isNil = _require2.isNil,
    isArray = _require2.isArray,
    isObject = _require2.isObject;

var CACHE_READ_ERROR = '[GraphQLNormalizr]: Could not read from cache';
var CACHE_WRITE_ERROR = '[GraphQLNormalizr]: Could not write to cache';

var buildNoTypenameError = function buildNoTypenameError(node) {
  return '[GraphQLNormalizr]: No "__typename" field found on node ' + JSON.stringify(node);
};

function hasField(name) {
  return function (set) {
    return set.some(function (_ref) {
      var value = _ref.name.value;
      return value === name;
    });
  };
}

function createField(name) {
  return {
    kind: 'Field',
    alias: undefined,
    name: {
      kind: 'Name',
      value: name
    },
    arguments: [],
    directives: [],
    selectionSet: undefined
  };
}

function toLists() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.entries(object).reduce(function (acc, _ref2) {
    var _extends2;

    var key = _ref2[0],
        value = _ref2[1];
    return _extends({}, acc, (_extends2 = {}, _extends2[key] = Object.values(value), _extends2));
  }, {});
}

module.exports = function GraphQLNormalizr() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$idKey = _ref3.idKey,
      idKey = _ref3$idKey === undefined ? 'id' : _ref3$idKey,
      _ref3$typeMap = _ref3.typeMap,
      typeMap = _ref3$typeMap === undefined ? {} : _ref3$typeMap,
      _ref3$caching = _ref3.caching,
      caching = _ref3$caching === undefined ? false : _ref3$caching,
      _ref3$lists = _ref3.lists,
      lists = _ref3$lists === undefined ? false : _ref3$lists,
      _ref3$typenames = _ref3.typenames,
      typenames = _ref3$typenames === undefined ? false : _ref3$typenames;

  var hasIdField = hasField(idKey);
  var hasTypeNameField = hasField('__typename');

  var idField = createField(idKey);
  var typeNameField = createField('__typename');

  var cache = new Map();

  function mapNestedValue(obj) {
    var object = _extends({}, obj);
    !typenames && delete object.__typename;

    return Object.entries(object).reduce(function (acc, _ref4) {
      var _extends3;

      var key = _ref4[0],
          value = _ref4[1];

      return _extends({}, acc, (_extends3 = {}, _extends3[key] = isObject(value) ? prop(idKey)(value) : isArray(value) ? map(prop(idKey))(value) : value, _extends3));
    }, {});
  }

  function assoc(entity, value, normalized) {
    if (isNil(entity)) throw new Error(buildNoTypenameError(value));
    var id = value[idKey];

    var existingEntities = normalized[entity];
    normalized[entity] = existingEntities || {};

    var existing = normalized[entity][id] || {};
    normalized[entity][id] = _extends({}, existing, value);
  }

  function normalize(_ref5) {
    var data = _ref5.data;

    var paths = {};
    var entities = {};
    var stack = {};
    var normalized = {};

    try {
      var cached = void 0;
      caching && (cached = cache.get(JSON.stringify(data)));
      if (cached) {
        return cached;
      }
    } catch (e) {
      // eslint-disable-next-line
      process.env.NODE_ENV !== 'production' && console.warn(CACHE_READ_ERROR);
    }

    ;(function visit(root) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      for (var _iterator = Object.entries(root), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref6 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref6 = _i.value;
        }

        var _ref7 = _ref6,
            key = _ref7[0],
            value = _ref7[1];

        if (isObject(value) || isArray(value)) {
          var type = value.__typename;
          type && (entities[type] = typeMap[type] || entities[type] || pluralize(type).toLowerCase());

          stack.value = value;
          stack.entity = entities[type];

          visit(_extends({}, value), '' + (path ? path + '.' : '') + key);
        } else {
          if (!paths[path]) {
            assoc(stack.entity, mapNestedValue(stack.value), normalized);
            paths[path] = { done: true };
          }
        }
      }
    })(data);

    try {
      caching && cache.set(JSON.stringify(data), normalized);
    } catch (e) {
      // eslint-disable-next-line
      process.env.NODE_ENV !== 'production' && console.warn(CACHE_WRITE_ERROR);
    }

    normalized = lists ? toLists(normalized) : normalized || {};

    return normalized;
  }

  function addRequiredFields(query) {
    return visit(query, {
      SelectionSet: function SelectionSet(node, key, parent, path) {
        if (parent.kind === Kind.OPERATION_DEFINITION) return;

        !hasIdField(node.selections) && node.selections.unshift(idField);
        !hasTypeNameField(node.selections) && node.selections.unshift(typeNameField);

        return node;
      }
    });
  }

  function parse(qs) {
    return addRequiredFields(gql(qs, { noLocation: true }));
  }

  return { normalize: normalize, addRequiredFields: addRequiredFields, parse: parse };
};