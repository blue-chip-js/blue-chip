"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require("./helpers");

exports.default = function (resources, storeUpdater) {
  if ((0, _helpers.isRedux)(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCES_BY_ID",
      resources: resources
    });
  } else if ((0, _helpers.isMobx)(storeUpdater)) {
    resources.forEach(function (_ref) {
      var type = _ref.type,
          id = _ref.id;

      delete storeUpdater[type][id];
    });
  } else if ((0, _helpers.isSetState)(storeUpdater)) {
    // TODO: need to implement
  }
};