"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchUpdateResourcesByID = exports.normalizeAndMergePayload = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonApiNormalizer = require("json-api-normalizer");

var _jsonApiNormalizer2 = _interopRequireDefault(_jsonApiNormalizer);

var _graphqlNormalizr = require("graphql-normalizr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphQLNormalizr = new _graphqlNormalizr.GraphQLNormalizr();
var graphQlNormalize = graphQLNormalizr.normalize;

var normalizeAndMergePayload = function normalizeAndMergePayload(dispatch, _ref) {
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

var dispatchUpdateResourcesByID = function dispatchUpdateResourcesByID(dispatch, _ref4) {
  var jsonApiPayload = _ref4.jsonApiPayload,
      graphQlPayload = _ref4.graphQlPayload;

  if (jsonApiPayload) {
    _dispatchAddOrReplaceAllJsonApiResources(dispatch, (0, _jsonApiNormalizer2.default)(jsonApiPayload));
  }

  if (graphQlPayload) {
    _dispatchAddOrReplaceAllGraphQlResources(dispatch,
    // TODO: fix this hard coded value
    "<resource-name>", graphQlNormalize(graphQlPayload));
  }
};

var _dispatchAddOrReplaceAllJsonApiResources = function _dispatchAddOrReplaceAllJsonApiResources(dispatch, resourcesById) {
  Object.entries(resourcesById).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        resourceType = _ref6[0],
        resources = _ref6[1];

    Object.entries(resources).forEach(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          id = _ref8[0],
          _ref8$ = _ref8[1],
          type = _ref8$.type,
          attributes = _ref8$.attributes,
          links = _ref8$.links,
          relationships = _ref8$.relationships;

      dispatch({
        type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
        resourceType: resourceType,
        id: id,
        attributes: attributes,
        links: links,
        relationships: relationships
      });
    });
  });
};

// TODO: this is not quite done parsing the graphql
var _dispatchAddOrReplaceAllGraphQlResources = function _dispatchAddOrReplaceAllGraphQlResources(dispatch, type, resourcesById) {
  Object.entries(resourcesById).forEach(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        resourceType = _ref10[0],
        resources = _ref10[1];

    Object.entries(resources).forEach(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          id = _ref12[0],
          resource = _ref12[1];

      dispatch({
        type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
        resourceType: resourceType,
        id: id,
        attributes: resource,
        links: null,
        relationships: _buildRelationships(resourceType, resource)
      });
    });
  });
};

var _buildRelationships = function _buildRelationships(type, resource) {
  return Object.entries(resource).reduce(function (newObject, _ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
        key = _ref14[0],
        value = _ref14[1];

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
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
        id = _ref16[0],
        resource = _ref16[1];

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

exports.normalizeAndMergePayload = normalizeAndMergePayload;
exports.dispatchUpdateResourcesByID = dispatchUpdateResourcesByID;