"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require("./helpers");

exports.default = function (resourceTypes, storeUpdater) {
  if ((0, _helpers.isRedux)(storeUpdater)) {
    storeUpdater({
      type: "CLEAR_RESOURCES",
      resourceTypes: resourceTypes
    });
  } else if ((0, _helpers.isMobx)(storeUpdater)) {
    resourceTypes.forEach(function (resourceType) {
      storeUpdater[resourceType] = {};
    });
  } else if ((0, _helpers.isSetState)(storeUpdater)) {
    // TODO: need to implement
  }
};