"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeResource = exports.updateResource = exports.updateResources = undefined;

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

var updateResources = function updateResources(payload, dispatch) {
  if (_isGraphQl(payload)) {
    _tryNormalizingGraphQl(payload, dispatch);
  } else {
    _tryNormalizingJsonAPi(payload, dispatch);
  }
};

var updateResource = function updateResource(_ref, dispatch) {
  var id = _ref.id,
      type = _ref.type,
      attributes = _ref.attributes,
      links = _ref.links,
      relationships = _ref.relationships;

  dispatch({
    type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
    resourceType: type,
    id: id,
    attributes: attributes,
    links: links,
    relationships: relationships || _buildRelationships(type, attributes)
  });
};

var removeResource = function removeResource(_ref2, dispatch) {
  var id = _ref2.id,
      type = _ref2.type;

  dispatch({
    type: "REMOVE_RESOURCE_BY_ID",
    resourceType: type,
    id: id
  });
};

var _isGraphQl = function _isGraphQl(payload) {
  return payload["data"] && payload["data"][0] && payload["data"][0] && "__typename" in payload["data"][0];
};

var _tryNormalizingJsonAPi = function _tryNormalizingJsonAPi(payload, dispatch) {
  try {
    Object.entries((0, _jsonApiNormalizer2.default)(payload)).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          resourceType = _ref4[0],
          resourcesById = _ref4[1];

      dispatch({
        type: "MERGE_RESOURCES",
        resourceType: resourceType,
        resourcesById: resourcesById
      });
    });
  } catch (error) {
    console.log(error);
  }
};

var _tryNormalizingGraphQl = function _tryNormalizingGraphQl(payload, dispatch) {
  try {
    Object.entries(graphQlNormalize(payload)).forEach(function (array) {
      var _array = _slicedToArray(array, 2),
          resourceType = _array[0],
          resourcesById = _array[1];

      dispatch({
        type: "MERGE_RESOURCES",
        resourceType: resourceType,
        resourcesById: _convertToJsonApiSpec(resourceType, resourcesById)
      });
    });
  } catch (error) {
    console.log(error);
  }
};

var _buildRelationships = function _buildRelationships(type, resource) {
  return Object.entries(resource).reduce(function (newObject, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

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
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        id = _ref8[0],
        resource = _ref8[1];

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