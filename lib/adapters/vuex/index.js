"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourcesMutations = exports.actions = undefined;

var _resourcesMutations = require("./resourcesMutations");

var _resourcesMutations2 = _interopRequireDefault(_resourcesMutations);

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = actions;
exports.resourcesMutations = _resourcesMutations2.default;