"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearResources = exports.removeResource = exports.updateResource = exports.updateResources = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonApiNormalizer = require("json-api-normalizer");

var _jsonApiNormalizer2 = _interopRequireDefault(_jsonApiNormalizer);

var _graphqlNormalizr = require("graphql-normalizr");

var _jsonapiValidator = require("jsonapi-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonApiValidator = new _jsonapiValidator.Validator();
var graphQLNormalizr = new _graphqlNormalizr.GraphQLNormalizr();
var graphQlNormalize = graphQLNormalizr.normalize;

var updateResources = function updateResources(payload, storeUpdater) {
  if (_isGraphQl(payload)) {
    // TODO: refactor and abstract these.  Several functions can be pulled out
    Object.entries(graphQlNormalize(payload)).forEach(function (array) {
      var _array = _slicedToArray(array, 2),
          resourceType = _array[0],
          resourcesById = _array[1];

      if (_isRedux(storeUpdater)) {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType: resourceType,
          resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
        });
      } else if (_isMobx(storeUpdater)) {
        // if it is a function asume it is MobX resources store
        // TODO: pull out into a helper function.  Same method used in the reducer
        Object.entries(_convertToJsonApiSpec(resourceType, resourcesById)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              resource = _ref2[1];

          if (!storeUpdater[resourceType]) {
            storeUpdater[resourceType] = {};
          }
          storeUpdater[resourceType][id] = resource;
        });
      }
    });
  } else {
    Object.entries((0, _jsonApiNormalizer2.default)(payload)).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          resourceType = _ref4[0],
          resourcesById = _ref4[1];

      if (_isRedux(storeUpdater)) {
        // if it is a function asume it is Redux dispatch
        storeUpdater({
          type: "MERGE_RESOURCES",
          resourceType: resourceType,
          resourcesById: resourcesById
        });
      } else if (_isMobx(storeUpdater)) {
        // TODO: pull out into a helper function.  Same method used in the reducer
        Object.entries(resourcesById).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              id = _ref6[0],
              resource = _ref6[1];

          if (!storeUpdater[resourceType]) {
            storeUpdater[resourceType] = {};
          }
          storeUpdater[resourceType][id] = resource;
        });
      }
    });
  }
};

var updateResource = function updateResource(_ref7, storeUpdater) {
  var id = _ref7.id,
      type = _ref7.type,
      attributes = _ref7.attributes,
      links = _ref7.links,
      relationships = _ref7.relationships;

  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id: id,
      attributes: attributes,
      links: links,
      relationships: relationships || _buildRelationships(type, attributes)
    });
  } else if (_isMobx(storeUpdater)) {
    if (!(type in storeUpdater)) {
      storeUpdater[type] = {};
    }

    storeUpdater[type][id] = {
      type: type,
      id: id,
      attributes: attributes,
      links: links,
      relationships: relationships || _buildRelationships(type, attributes)
    };
  }
};

var removeResource = function removeResource(_ref8, storeUpdater) {
  var id = _ref8.id,
      type = _ref8.type;

  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id: id
    });
  } else if (_isMobx(storeUpdater)) {
    delete storeUpdater[type][id];
  }
};

var clearResources = function clearResources(resourceTypes, storeUpdater) {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "CLEAR_RESOURCES",
      resourceTypes: resourceTypes
    });
  } else if (_isMobx(storeUpdater)) {
    resourceTypes.forEach(function (resourceType) {
      storeUpdater[resourceType] = {};
    });
  }
};

var _isRedux = function _isRedux(storeUpdater) {
  return typeof storeUpdater === "function";
};

var _isMobx = function _isMobx(storeUpdater) {
  return (typeof storeUpdater === "undefined" ? "undefined" : _typeof(storeUpdater)) === "object";
};

var _isGraphQl = function _isGraphQl(payload) {
  return payload["data"] && payload["data"][0] && payload["data"][0] && "__typename" in payload["data"][0];
};

var _buildRelationships = function _buildRelationships(type, resource) {
  return Object.entries(resource).reduce(function (newObject, _ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        key = _ref10[0],
        value = _ref10[1];

    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = { data: [] };
      }

      newObject[key].data = value.map(function (id) {
        return { type: key, id: id };
      });
    }

    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
      // TODO: handle hasOne and belongsTo
    }
    return newObject;
  }, {});
};

var _convertToJsonApiSpec = function _convertToJsonApiSpec(resourceType, resourcesById) {
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        id = _ref12[0],
        resource = _ref12[1];

    formattedResourcesById[id] = {
      type: resourceType,
      id: id,
      attributes: resource,
      links: null,
      relationships: _buildRelationships(resourceType, resource)
    };

    return formattedResourcesById;
  }, {});
};

exports.updateResources = updateResources;
exports.updateResource = updateResource;
exports.removeResource = removeResource;
exports.clearResources = clearResources;