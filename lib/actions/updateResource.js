"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require("./helpers");

exports.default = function (_ref, storeUpdater) {
  var id = _ref.id,
      type = _ref.type,
      attributes = _ref.attributes,
      links = _ref.links,
      relationships = _ref.relationships;

  if ((0, _helpers.isRedux)(storeUpdater)) {
    storeUpdater({
      type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
      resourceType: type,
      id: id,
      attributes: attributes,
      links: links,
      relationships: relationships || (0, _helpers.buildRelationships)(type, attributes)
    });
  } else if ((0, _helpers.isMobx)(storeUpdater)) {
    if (!(type in storeUpdater)) {
      storeUpdater[type] = {};
    }

    storeUpdater[type][id] = {
      type: type,
      id: id,
      attributes: attributes,
      links: links,
      relationships: relationships || (0, _helpers.buildRelationships)(type, attributes)
    };
  } else if ((0, _helpers.isSetState)(storeUpdater)) {
    storeUpdater(function (state) {
      if (!(type in state.resources)) {
        state.resources[type] = {};
      }

      state.resources[type][id] = {
        type: type,
        id: id,
        attributes: attributes,
        links: links,
        relationships: relationships || (0, _helpers.buildRelationships)(type, attributes)
      };
      return state;
    });
  }
};