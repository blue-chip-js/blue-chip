"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateResources = exports.updateResources = function updateResources(mutator, resourceType, resourcesById) {
  mutator("UPDATE_RESOURCES", { resourceType: resourceType, resourcesById: resourcesById });
};

var updateResource = exports.updateResource = function updateResource(mutator, _ref) {
  var id = _ref.id,
      type = _ref.type,
      attributes = _ref.attributes,
      links = _ref.links,
      relationships = _ref.relationships;

  console.log("Not Implemented Yet");
};

var removeResources = exports.removeResources = function removeResources(mutator, resources) {
  console.log("Not Implemented Yet");
};

var removeResource = exports.removeResource = function removeResource(mutator, _ref2) {
  var id = _ref2.id,
      type = _ref2.type;

  console.log("Not Implemented Yet");
};

var clearResources = exports.clearResources = function clearResources(mutator, resourceTypes) {
  console.log("Not Implemented Yet");
};