"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

var _resourcesReducer = require("./resourcesReducer");

var _resourcesReducer2 = _interopRequireDefault(_resourcesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = { actions: actions, resourcesReducer: _resourcesReducer2.default };