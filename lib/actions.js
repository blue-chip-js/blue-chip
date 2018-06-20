"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteResource = exports.updateResourceById = exports.updateResources = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonApiNormalizer = require("json-api-normalizer");

var _jsonApiNormalizer2 = _interopRequireDefault(_jsonApiNormalizer);

var _graphqlNormalizr = require("graphql-normalizr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphQLNormalizr = new _graphqlNormalizr.GraphQLNormalizr();
var graphQlNormalize = graphQLNormalizr.normalize;

var updateResources = function updateResources(dispatch, _ref) {
  var jsonApiPayload = _ref.jsonApiPayload,
      graphQlPayload = _ref.graphQlPayload;

  if (jsonApiPayload) {
    Object.entries((0, _jsonApiNormalizer2.default)(jsonApiPayload)).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          resourceType = _ref3[0],
          resourcesById = _ref3[1];

      dispatch({
        type: "MERGE_RESOURCES",
        resourceType: resourceType,
        resourcesById: resourcesById
      });
    });
  }

  if (graphQlPayload) {
    Object.entries(graphQlNormalize(graphQlPayload)).forEach(function (array) {
      var _array = _slicedToArray(array, 2),
          resourceType = _array[0],
          resourcesById = _array[1];

      dispatch({
        type: "MERGE_RESOURCES",
        resourceType: resourceType,
        resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
      });
    });
  }
};

var updateResourceById = function updateResourceById(dispatch, _ref4) {
  var id = _ref4.id,
      type = _ref4.type,
      attributes = _ref4.attributes,
      links = _ref4.links,
      relationships = _ref4.relationships;

  dispatch({
    type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
    resourceType: type,
    id: id,
    attributes: attributes,
    links: links,
    relationships: relationships || _buildRelationships(type, attributes)
  });
};

var deleteResource = function deleteResource(dispatch, _ref5) {
  var id = _ref5.id,
      type = _ref5.type;

  dispatch({
    type: "REMOVE_RESOURCE_BY_ID",
    resourceType: type,
    id: id
  });
};

var _buildRelationships = function _buildRelationships(type, resource) {
  return Object.entries(resource).reduce(function (newObject, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        key = _ref7[0],
        value = _ref7[1];

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
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        id = _ref9[0],
        resource = _ref9[1];

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
exports.updateResourceById = updateResourceById;
exports.deleteResource = deleteResource;