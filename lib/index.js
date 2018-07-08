"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStateAdapter = exports.mobxAdapter = exports.reduxAdapter = exports.vuexAdapter = exports.BaseModel = exports.Actions = undefined;

var _actions = require("./actions");

var _BaseModel = require("./BaseModel");

var _BaseModel2 = _interopRequireDefault(_BaseModel);

var _redux = require("./adapters/redux");

var _redux2 = _interopRequireDefault(_redux);

var _mobx = require("./adapters/mobx");

var _mobx2 = _interopRequireDefault(_mobx);

var _setState = require("./adapters/setState");

var _setState2 = _interopRequireDefault(_setState);

var _vuex = require("./adapters/vuex");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove to adapters
exports.Actions = _actions.Actions;
exports.BaseModel = _BaseModel2.default;
exports.vuexAdapter = _vuex2.default;
exports.reduxAdapter = _redux2.default;
exports.mobxAdapter = _mobx2.default;
exports.setStateAdapter = _setState2.default;