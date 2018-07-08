"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearResources = exports.removeResource = exports.removeResources = exports.updateResource = exports.updateResources = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _helpers = require("../../actions/helpers");

var updateResources = exports.updateResources = function updateResources(mutator, resourceType, resourcesById) {
  Object.entries(resourcesById).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        id = _ref2[0],
        resource = _ref2[1];

    if (!mutator[resourceType]) {
      mutator[resourceType] = {};
    }
    mutator[resourceType][id] = resource;
  });
};

var updateResource = exports.updateResource = function updateResource(mutator, _ref3) {
  var id = _ref3.id,
      type = _ref3.type,
      attributes = _ref3.attributes,
      links = _ref3.links,
      relationships = _ref3.relationships;

  if (!(type in mutator)) {
    mutator[type] = {};
  }

  mutator[type][id] = {
    type: type,
    id: id,
    attributes: attributes,
    links: links,
    relationships: relationships || (0, _helpers.buildRelationships)(type, attributes)
  };
};

var removeResources = exports.removeResources = function removeResources(mutator, resources) {
  resources.forEach(function (_ref4) {
    var type = _ref4.type,
        id = _ref4.id;

    delete mutator[type][id];
  });
};

var removeResource = exports.removeResource = function removeResource(mutator, _ref5) {
  var id = _ref5.id,
      type = _ref5.type;

  delete mutator[type][id];
};

var clearResources = exports.clearResources = function clearResources(mutator, resourceTypes) {
  resourceTypes.forEach(function (resourceType) {
    mutator[resourceType] = {};
  });
};