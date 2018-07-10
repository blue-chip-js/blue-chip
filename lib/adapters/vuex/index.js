"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateResources = exports.resourcesMutations = undefined;

var _resourcesMutations = require("./resourcesMutations");

var _resourcesMutations2 = _interopRequireDefault(_resourcesMutations);

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.resourcesMutations = _resourcesMutations2.default;
exports.updateResources = _actions.updateResources;
