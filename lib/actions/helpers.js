"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var GraphQL = exports.GraphQL = "GraphQL";
var JsonAPI = exports.JsonAPI = "JsonAPI";

var isGraphQl = exports.isGraphQl = function isGraphQl(payload) {
  return payload["data"] && payload["data"][0] && "__typename" in payload["data"][0];
};

var isRedux = exports.isRedux = function isRedux(storeUpdater) {
  return storeUpdater.name === "dispatch" || typeof storeUpdater.toString() === "string" && !!storeUpdater.toString().match(/dispatch/);
};

var isMobx = exports.isMobx = function isMobx(storeUpdater) {
  return (typeof storeUpdater === "undefined" ? "undefined" : _typeof(storeUpdater)) === "object";
};

var isSetState = exports.isSetState = function isSetState(storeUpdater) {
  return typeof storeUpdater === "function";
};

var toJsonApiSpec = exports.toJsonApiSpec = function toJsonApiSpec(resourceType, resourcesById) {
  return Object.entries(resourcesById).reduce(function (formattedResourcesById, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        id = _ref2[0],
        resource = _ref2[1];

    formattedResourcesById[id] = {
      type: resourceType,
      id: id,
      attributes: _removeRelationships(resource),
      links: null,
      relationships: _buildRelationships(resource)
    };

    return formattedResourcesById;
  }, {});
};

var _buildRelationships = function _buildRelationships(resource) {
  return Object.entries(resource).reduce(function (newObject, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    if (value && Array.isArray(value)) {
      if (!newObject[key]) {
        newObject[key] = { data: [] };
      }

      newObject[key].data = value.map(function (id) {
        return { type: key, id: id };
      });
    }

    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
      // TODO: handle hasOne and belongsTo
    }
    return newObject;
  }, {});
};

var _removeRelationships = function _removeRelationships(resource) {
  return Object.entries(resource).reduce(function (newObject, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    if (!(value && Array.isArray(value)) || !(value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object")) {
      newObject[key] = value;
    }
    return newObject;
  }, {});
};