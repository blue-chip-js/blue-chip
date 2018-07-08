"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearResources = exports.removeResource = exports.removeResources = exports.updateResource = exports.updateResources = undefined;

var _helpers = require("../../actions/helpers");

var updateResources = exports.updateResources = function updateResources(mutator, resourceType, resourcesById) {
  mutator({ type: "UPDATE_RESOURCES", resourceType: resourceType, resourcesById: resourcesById });
};

var updateResource = exports.updateResource = function updateResource(mutator, _ref) {
  var id = _ref.id,
      type = _ref.type,
      attributes = _ref.attributes,
      links = _ref.links,
      relationships = _ref.relationships;

  mutator({
    type: "ADD_OR_REPLACE_RESOURCE_BY_ID",
    resourceType: type,
    id: id,
    attributes: attributes,
    links: links,
    relationships: relationships || (0, _helpers.buildRelationships)(type, attributes)
  });
};

var removeResources = exports.removeResources = function removeResources(mutator, resources) {
  mutator({
    type: "REMOVE_RESOURCES_BY_ID",
    resources: resources
  });
};

var removeResource = exports.removeResource = function removeResource(mutator, _ref2) {
  var id = _ref2.id,
      type = _ref2.type;

  mutator({
    type: "REMOVE_RESOURCE_BY_ID",
    resourceType: type,
    id: id
  });
};

var clearResources = exports.clearResources = function clearResources(mutator, resourceTypes) {
  mutator({
    type: "CLEAR_RESOURCES",
    resourceTypes: resourceTypes
  });
};