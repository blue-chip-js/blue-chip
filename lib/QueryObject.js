"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluralize = require("pluralize");

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryObject = function () {
  function QueryObject(klass, resourceName, resources) {
    var hasMany = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var belongsTo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    _classCallCheck(this, QueryObject);

    this.klass = klass;
    this.resourceName = resourceName;
    this.resources = resources;
    this.currentIncludes = [];
    this.currentResources = {};
    this.hasMany = hasMany;
    this.belongsTo = belongsTo;
    this._setCurrentResources();
  }

  _createClass(QueryObject, [{
    key: "find",
    value: function find(id) {
      var resources = this.resources,
          resourceName = this.resourceName,
          klass = this.klass,
          _convertToModel = this._convertToModel,
          hasMany = this.hasMany,
          belongsTo = this.belongsTo;

      var _ref = resources[resourceName] && resources[resourceName][id],
          attributes = _ref.attributes;

      return _convertToModel(klass, resources, _extends({ id: id }, attributes), hasMany, belongsTo);
    }
  }, {
    key: "first",
    value: function first() {
      var resources = this.resources,
          resourceName = this.resourceName;

      var _resources = resources[resourceName];
      return _resources && _resources[Object.keys(_resources)[0]];
    }
  }, {
    key: "all",
    value: function all() {
      return this;
    }
  }, {
    key: "where",
    value: function where(params) {
      this._filterAndSetCurrentResourcesByParams(params);
      return this;
    }
  }, {
    key: "whereRelated",
    value: function whereRelated(relationship, params) {
      var resourceName = this.resourceName;


      this.currentResources = relationship.query(this.resources).where(params).includes([resourceName]).toObjects().reduce(function (newResource, relatedResource) {
        var relation = relatedResource[resourceName];
        relation.forEach(function (_ref2) {
          var type = _ref2.type,
              id = _ref2.id,
              attributes = _objectWithoutProperties(_ref2, ["type", "id"]);

          newResource[id] = { type: type, id: id, attributes: attributes };
        });
        return newResource;
      }, {});
      return this;
    }
  }, {
    key: "includes",
    value: function includes(relationshipTypes) {
      this.currentIncludes = relationshipTypes;
      return this;
    }
  }, {
    key: "toModels",
    value: function toModels() {
      if (!this.currentResources) return [];
      return this._reduceCurrentResources("models");
    }
  }, {
    key: "toObjects",
    value: function toObjects() {
      if (!this.currentResources) return [];
      return this._reduceCurrentResources("objects");
    }

    // Private

  }, {
    key: "_reduceCurrentResources",
    value: function _reduceCurrentResources(reducerType) {
      var _this = this;

      // TODO: needs to be refactored
      var conversion = reducerType === "models" ? this._convertToModel : this._convertToObject;
      var currentIncludes = this.currentIncludes,
          currentResources = this.currentResources,
          resources = this.resources,
          _flattenRelationships = this._flattenRelationships,
          hasMany = this.hasMany,
          belongsTo = this.belongsTo;


      return Object.values(currentResources).map(function (_ref3) {
        var id = _ref3.id,
            attributes = _ref3.attributes,
            relationships = _ref3.relationships,
            types = _ref3.types,
            links = _ref3.links;

        var newFormattedResource = conversion(_this.klass, resources, _extends({
          id: id
        }, attributes), hasMany, belongsTo);

        if (!currentIncludes.length) return newFormattedResource;
        return conversion(_this.klass, resources, _extends({}, newFormattedResource, _flattenRelationships(relationships).reduce(function (nextRelationshipObjects, _ref4) {
          var id = _ref4.id,
              type = _ref4.type;

          if (!currentIncludes.includes(type)) return nextRelationshipObjects;
          if (!(type in nextRelationshipObjects)) {
            nextRelationshipObjects[type] = [];
          }

          if (!resources[type]) return nextRelationshipObjects;
          var relationData = resources[type][id];
          if (!relationData) return nextRelationshipObjects;
          var relationClass = _this.hasMany.find(function (klass) {
            return (0, _pluralize2.default)(klass.name.toLowerCase()) === type;
          });

          nextRelationshipObjects[type].push(conversion(relationClass, resources, _extends({
            id: id
          }, relationData.attributes)));

          return nextRelationshipObjects;
        }, {})), hasMany, belongsTo);
      });
    }
  }, {
    key: "_convertToModel",
    value: function _convertToModel(klass, resources, resource, hasMany, belongsTo) {
      return new klass(resources, resource, hasMany, belongsTo);
    }
  }, {
    key: "_convertToObject",
    value: function _convertToObject(klass, resources, resource, hasMany, belongsTo) {
      return resource;
    }
  }, {
    key: "_flattenRelationships",
    value: function _flattenRelationships(relationships) {
      return Object.values(relationships).reduce(function (nextRelationships, _ref5) {
        var data = _ref5.data;

        return [].concat(_toConsumableArray(nextRelationships), _toConsumableArray(data));
      }, []);
    }
  }, {
    key: "_setCurrentResources",
    value: function _setCurrentResources() {
      if (this._isEmpty(this.currentResources) && this.resources) {
        this.currentResources = this.resources[this.resourceName];
      }
    }
  }, {
    key: "_filterAndSetCurrentResourcesByParams",
    value: function _filterAndSetCurrentResourcesByParams(params) {
      var _this2 = this;

      var resourcesByID = Object.entries(this.currentResources).reduce(function (newResource, _ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            id = _ref7[0],
            resource = _ref7[1];

        _this2._filterResourceByParams(params, newResource, resource, id);
        return newResource;
      }, {});
      this.currentResources = resourcesByID;
    }
  }, {
    key: "_filterResourceByParams",
    value: function _filterResourceByParams(params, newResource, resource, id) {
      Object.entries(params).forEach(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            key = _ref9[0],
            value = _ref9[1];

        if (key === "id" && resource.id === value) {
          newResource[id] = resource;
        } else if (resource.attributes[key] === value) {
          newResource[id] = resource;
        }
      });
    }
  }, {
    key: "_isEmpty",
    value: function _isEmpty(obj) {
      if (obj === null || obj === undefined || Array.isArray(obj) || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
        return true;
      }
      return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
    }
  }]);

  return QueryObject;
}();

exports.default = QueryObject;