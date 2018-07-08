"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = resourcesReducer;

var _immer = require("immer");

var _immer2 = _interopRequireDefault(_immer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function resourcesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      id = action.id,
      attributes = action.attributes,
      links = action.links,
      relationships = action.relationships,
      resourcesById = action.resourcesById,
      resourceTypes = action.resourceTypes,
      resourceType = action.resourceType,
      resources = action.resources;

  return (0, _immer2.default)(state, function (draft) {
    switch (type) {
      case "ADD_OR_REPLACE_RESOURCE_BY_ID":
        _initializeResource(draft, resourceType);

        draft[resourceType][id] = {
          type: resourceType,
          id: id,
          attributes: attributes,
          links: links,
          relationships: relationships
        };
        break;
      case "MERGE_RESOURCES":
        _initializeResource(draft, resourceType);

        Object.entries(resourcesById).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              id = _ref2[0],
              resource = _ref2[1];

          return draft[resourceType][id] = resource;
        });
        break;
      case "REMOVE_RESOURCE_BY_ID":
        delete draft[resourceType][id];
        break;
      case "REMOVE_RESOURCES_BY_ID":
        resources.forEach(function (resource) {
          delete draft[resource.type][resource.id];
        });
        break;
      case "CLEAR_RESOURCES":
        resourceTypes.forEach(function (resourceType) {
          draft[resourceType] = {};
        });
        break;
    }
  });
}

var _initializeResource = function _initializeResource(draft, resourceType) {
  if (resourceType in draft) return;
  draft[resourceType] = {};
};