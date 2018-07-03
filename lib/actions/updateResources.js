"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonApiNormalizer = require("json-api-normalizer");

var _jsonApiNormalizer2 = _interopRequireDefault(_jsonApiNormalizer);

var _graphqlNormalizr = require("graphql-normalizr");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphQLNormalizr = new _graphqlNormalizr.GraphQLNormalizr();
var graphQlNormalize = graphQLNormalizr.normalize;

exports.default = function (payload, storeUpdater) {
  (0, _helpers.isGraphQl)(payload) ? _updateResourcesByStateManger(_helpers.GraphQL, payload, storeUpdater) : _updateResourcesByStateManger(_helpers.JsonAPI, payload, storeUpdater);
};

var _updateResourcesByStateManger = function _updateResourcesByStateManger(spec, payload, storeUpdater) {
  Object.entries(spec === _helpers.GraphQL ? graphQlNormalize(payload) : (0, _jsonApiNormalizer2.default)(payload)).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        resourceType = _ref2[0],
        resourcesById = _ref2[1];

    var rById = spec === _helpers.GraphQL ? (0, _helpers.toJsonApiSpec)(resourceType, resourcesById) : resourcesById;
    if ((0, _helpers.isRedux)(storeUpdater)) {
      _updateResourcesRedux(storeUpdater, resourceType, rById);
    } else if ((0, _helpers.isMobx)(storeUpdater)) {
      _updateResourcesMobx(storeUpdater, resourceType, rById);
    } else if ((0, _helpers.isSetState)(storeUpdater)) {
      _updateResourcesSetState(storeUpdater, resourceType, rById);
    }
  });
};

var _updateResourcesRedux = function _updateResourcesRedux(storeUpdater, resourceType, resourcesById) {
  storeUpdater({ type: "MERGE_RESOURCES", resourceType: resourceType, resourcesById: resourcesById });
};

var _updateResourcesMobx = function _updateResourcesMobx(storeUpdater, resourceType, resourcesById) {
  Object.entries(resourcesById).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        id = _ref4[0],
        resource = _ref4[1];

    if (!storeUpdater[resourceType]) {
      storeUpdater[resourceType] = {};
    }
    storeUpdater[resourceType][id] = resource;
  });
};

var _updateResourcesSetState = function _updateResourcesSetState(storeUpdater, resourceType, resourcesById) {
  Object.entries(resourcesById).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        id = _ref6[0],
        resource = _ref6[1];

    storeUpdater(function (state) {
      if (!state.resources[resourceType]) {
        state.resources[resourceType] = {};
      }

      state.resources[resourceType][id] = resource;
      return state;
    });
  });
};