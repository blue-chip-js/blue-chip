'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function isType(type) {
  return function (value) {
    if (value === null) return type.toLowerCase() === 'null';
    if (typeof value === 'undefined') return type.toLowerCase() === 'undefined';

    return type.toLowerCase() === typeOf(value).toLowerCase();
  };
}

function isArray(value) {
  return isType('array')(value);
}

function isObject(value) {
  return isType('object')(value);
}

function isEmpty(value) {
  if (typeof value === 'string') return !value;
  if (isType('object', value)) return !Object.values(value).length;
  if (isType('array', value)) return !value.length;
  if (isType('Map', value)) return !value.size;
  if (isType('Set', value)) return !value.size;
  return false;
}

function isNil(value) {
  return value == null;
}

function prop(path) {
  return function (obj) {
    return path.split('.').reduce(function (acc, curr) {
      try {
        return typeof acc[curr] !== 'undefined' ? acc[curr] : undefined;
      } catch (e) {
        return undefined;
      }
    }, obj);
  };
}

function map(transform) {
  return function (list) {
    return list.map(transform);
  };
}

function mapObject(transform) {
  return function (obj) {
    return Object.entries(obj).reduce(function (acc, _ref) {
      var _extends2;

      var key = _ref[0],
          value = _ref[1];
      return _extends({}, acc, (_extends2 = {}, _extends2[key] = transform(value), _extends2));
    }, {});
  };
}

module.exports = {
  isArray: isArray,
  isEmpty: isEmpty,
  isNil: isNil,
  isObject: isObject,
  isType: isType,
  map: map,
  mapObject: mapObject,
  prop: prop,
  typeOf: typeOf
};