"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearResources = exports.removeResources = exports.removeResource = exports.updateResource = exports.updateResources = undefined;

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
      } else if (_isSetState(storeUpdater)) {
        Object.entries(resourcesById).forEach(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              id = _ref8[0],
              resource = _ref8[1];

          storeUpdater(function (state) {
            if (!state.resources[resourceType]) {
              state.resources[resourceType] = {};
            }

            state.resources[resourceType][id] = resource;
            return state;
          });
        });
      }
    });
  }
};

var updateResource = function updateResource(_ref9, storeUpdater) {
  var id = _ref9.id,
      type = _ref9.type,
      attributes = _ref9.attributes,
      links = _ref9.links,
      relationships = _ref9.relationships;

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
  } else if (_isSetState(storeUpdater)) {
    storeUpdater(function (state) {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type: type,
        id: id,
        attributes: attributes,
        links: links,
        relationships: relationships || _buildRelationships(type, attributes)
      };
      return state;
    });
  }
};

var removeResource = function removeResource(_ref10, storeUpdater) {
  var id = _ref10.id,
      type = _ref10.type;

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

var removeResources = function removeResources(resources, storeUpdater) {
  if (_isRedux(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCES_BY_ID",
      resources: resources
    });
  } else if (_isMobx(storeUpdater)) {
    resources.forEach(function (_ref11) {
      var type = _ref11.type,
          id = _ref11.id;

      delete storeUpdater[type][id];
    });
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
  return storeUpdater.name === "dispatch";
};

var _isMobx = function _isMobx(storeUpdater) {
  return (typeof storeUpdater === "undefined" ? "undefined" : _typeof(storeUpdater)) === "object";
};

var _isSetState = function _isSetState(storeUpdater) {
  return typeof storeUpdater === "function";
};

var _isGraphQl = function _isGraphQl(payload) {
  return payload["data"] && payload["data"][0] && "__typename" in payload["data"][0];
};

var _buildRelationships = function _buildRelationships(type, resource) {
  return Object.entries(resource).reduce(function (newObject, _ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
        key = _ref13[0],
        value = _ref13[1];

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
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
        id = _ref15[0],
        resource = _ref15[1];

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
exports.removeResources = removeResources;
exports.clearResources = clearResources;