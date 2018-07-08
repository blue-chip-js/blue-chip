"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonApiNormalizer = require("json-api-normalizer");

var _jsonApiNormalizer2 = _interopRequireDefault(_jsonApiNormalizer);

var _graphqlNormalizr = require("graphql-normalizr");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var graphQLNormalizr = new _graphqlNormalizr.GraphQLNormalizr();
var graphQlNormalize = graphQLNormalizr.normalize;

var Actions = function () {
  _createClass(Actions, null, [{
    key: "config",
    value: function config(_ref) {
      var adapter = _ref.adapter,
          mutator = _ref.mutator;

      return new Actions(adapter, mutator);
    }
  }]);

  function Actions(adapter, mutator) {
    _classCallCheck(this, Actions);

    this.actions = adapter.actions;
    this.mutator = mutator;
  }

  _createClass(Actions, [{
    key: "updateResources",
    value: function updateResources(payload) {
      var _this = this;

      Object.entries((0, _helpers.isGraphQl)(payload) ? graphQlNormalize(payload) : (0, _jsonApiNormalizer2.default)(payload)).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            resourceType = _ref3[0],
            resourcesById = _ref3[1];

        var rById = (0, _helpers.isGraphQl)(payload) ? (0, _helpers.toJsonApiSpec)(resourceType, resourcesById) : resourcesById;

        _this.actions.updateResources(_this.mutator, resourceType, rById);
      });
    }
  }, {
    key: "updateResource",
    value: function updateResource(resource) {
      this.actions.updateResource(this.mutator, resource);
    }
  }, {
    key: "removeResources",
    value: function removeResources(resources) {
      this.actions.removeResources(this.mutator, resources);
    }
  }, {
    key: "removeResource",
    value: function removeResource(resource) {
      this.actions.removeResource(this.mutator, resource);
    }
  }, {
    key: "clearResources",
    value: function clearResources(resourceTypes) {
      this.actions.clearResources(this.mutator, resourceTypes);
    }
  }]);

  return Actions;
}();

exports.default = Actions;