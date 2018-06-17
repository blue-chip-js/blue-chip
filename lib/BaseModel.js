"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluralize = require("pluralize");

var _pluralize2 = _interopRequireDefault(_pluralize);

var _QueryObject = require("./QueryObject");

var _QueryObject2 = _interopRequireDefault(_QueryObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = function () {
  _createClass(BaseModel, null, [{
    key: "query",
    value: function query(resources) {
      return new _QueryObject2.default(this, (0, _pluralize2.default)(this.name.toLowerCase()), resources, this.hasMany, this.belongsTo);
    }
  }]);

  function BaseModel(resources, attributes) {
    var _this = this;

    var hasMany = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var belongsTo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, BaseModel);

    Object.entries(attributes).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      _this[key] = value;
    });

    if (hasMany.forEach) {
      hasMany.forEach(function (relationship) {
        return _this._buildHasManyQueryObject(_this, resources, relationship);
      });
    }

    if (belongsTo.forEach) {
      belongsTo.forEach(function (relationship) {
        var relationshipKey = relationship.name.toLowerCase();
        _this[relationshipKey] = function () {
          // needs to return the related model
        };
      });
    }
  }

  _createClass(BaseModel, [{
    key: "_filterResources",
    value: function _filterResources(resource, resources, relationship, relationshipKey) {
      var _extends2;

      var currentResourceKey = (0, _pluralize2.default)(resource.constructor.name.toLowerCase());
      var resourceClass = resource.constructor;
      var relationshipClass = relationship;
      return _extends({}, resources, (_extends2 = {}, _defineProperty(_extends2, currentResourceKey, resources[currentResourceKey][resource.id]), _defineProperty(_extends2, relationshipKey, relationshipClass.query(resources).whereRelated(resourceClass, {
        id: resource.id
      }).currentResources), _extends2));
    }
  }, {
    key: "_buildHasManyQueryObject",
    value: function _buildHasManyQueryObject(resource, resources, relationship) {
      var relationshipKey = (0, _pluralize2.default)(relationship.name.toLowerCase());
      if (!resource[relationshipKey]) {
        resource[relationshipKey] = function () {
          var newResouces = resource._filterResources(resource, resources, relationship, relationshipKey);

          return new _QueryObject2.default(relationship, relationshipKey, newResouces, relationship.hasMany, relationship.belongsTo);
        };
      }
    }
  }]);

  return BaseModel;
}();

exports.default = BaseModel;