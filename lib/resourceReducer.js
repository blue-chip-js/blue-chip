"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resources;

var _deepmerge = require("deepmerge");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

function resources() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var resourceType = action.resourceType;

  switch (action.type) {
    case "ADD_OR_REPLACE_RESOURCE_BY_ID":
      var newState = _extends({}, state);
      var type = action.type,
          spec = action.spec,
          id = action.id,
          attributes = action.attributes,
          links = action.links,
          relationships = action.relationships;


      _initializeResource(newState, resourceType);

      newState[resourceType][id] = {
        resourceType: resourceType,
        id: id,
        attributes: attributes,
        links: links,
        relationships: relationships
      };

      return newState;
    case "MERGE_RESOURCES":
      var resourcesById = action.resourcesById;

      exports.default = resources = _extends({}, state);
      if (!resources[resourceType]) {
        resources[resourceType] = {};
      }

      return _extends({}, state, _defineProperty({}, resourceType, (0, _deepmerge2.default)(resources[resourceType], resourcesById)));
    default:
      return state;
  }
}

var _initializeResource = function _initializeResource(newState, resourceType) {
  if (resourceType in newState) return;
  newState[resourceType] = {};
};