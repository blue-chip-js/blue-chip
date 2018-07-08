"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseModel = exports.mutations = exports.resourcesReducer = exports.clearResources = exports.removeResources = exports.removeResource = exports.updateResource = exports.updateResources = undefined;

var _resourcesReducer = require("./resourcesReducer");

var _resourcesReducer2 = _interopRequireDefault(_resourcesReducer);

var _resourcesMutations = require("./resourcesMutations");

var _resourcesMutations2 = _interopRequireDefault(_resourcesMutations);

var _actions = require("./actions");

var _BaseModel = require("./BaseModel");

var _BaseModel2 = _interopRequireDefault(_BaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.updateResources = _actions.updateResources;
exports.updateResource = _actions.updateResource;
exports.removeResource = _actions.removeResource;
exports.removeResources = _actions.removeResources;
exports.clearResources = _actions.clearResources;
exports.resourcesReducer = _resourcesReducer2.default;
exports.mutations = _resourcesMutations2.default;
exports.BaseModel = _BaseModel2.default;