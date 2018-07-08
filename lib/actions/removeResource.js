"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require("./helpers");

exports.default = function (_ref, storeUpdater) {
  var id = _ref.id,
      type = _ref.type;

  if ((0, _helpers.isRedux)(storeUpdater)) {
    storeUpdater({
      type: "REMOVE_RESOURCE_BY_ID",
      resourceType: type,
      id: id
    });
  } else if ((0, _helpers.isMobx)(storeUpdater)) {
    delete storeUpdater[type][id];
  } else if ((0, _helpers.isSetState)(storeUpdater)) {
    // TODO: need to implement
  }
};