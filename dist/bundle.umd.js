(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.bundle = global.bundle || {}, global.bundle.js = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof commonjsGlobal === 'undefined' ? 'undefined' : _typeof(commonjsGlobal)) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$1(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var _Symbol = _root.Symbol;

	var _Symbol_1 = _Symbol;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol_1 ? _Symbol_1.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol_1 ? _Symbol_1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$2(value)) == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof$3(value)) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol_1 ? _Symbol_1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : end - start >>> 0;
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return !start && end >= length ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo = '[' + rsComboRange$1 + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange$1 + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange$1 + ']?',
	    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	    return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	    return _hasUnicode(string) ? _unicodeToArray(string) : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function (string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string) ? _stringToArray(string) : undefined;

	    var chr = strSymbols ? strSymbols[0] : string.charAt(0);

	    var trailing = strSymbols ? _castSlice(strSymbols, 1).join('') : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst_1(toString_1(string).toLowerCase());
	}

	var capitalize_1 = capitalize;

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function (key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C', '\xe7': 'c',
	  '\xd0': 'D', '\xf0': 'd',
	  '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N', '\xf1': 'n',
	  '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A', '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a', '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C', '\u0108': 'C', '\u010A': 'C', '\u010C': 'C',
	  '\u0107': 'c', '\u0109': 'c', '\u010B': 'c', '\u010D': 'c',
	  '\u010E': 'D', '\u0110': 'D', '\u010F': 'd', '\u0111': 'd',
	  '\u0112': 'E', '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011A': 'E',
	  '\u0113': 'e', '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011B': 'e',
	  '\u011C': 'G', '\u011E': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011D': 'g', '\u011F': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H', '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I', '\u012A': 'I', '\u012C': 'I', '\u012E': 'I', '\u0130': 'I',
	  '\u0129': 'i', '\u012B': 'i', '\u012D': 'i', '\u012F': 'i', '\u0131': 'i',
	  '\u0134': 'J', '\u0135': 'j',
	  '\u0136': 'K', '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L', '\u013B': 'L', '\u013D': 'L', '\u013F': 'L', '\u0141': 'L',
	  '\u013A': 'l', '\u013C': 'l', '\u013E': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N', '\u0145': 'N', '\u0147': 'N', '\u014A': 'N',
	  '\u0144': 'n', '\u0146': 'n', '\u0148': 'n', '\u014B': 'n',
	  '\u014C': 'O', '\u014E': 'O', '\u0150': 'O',
	  '\u014D': 'o', '\u014F': 'o', '\u0151': 'o',
	  '\u0154': 'R', '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r', '\u0157': 'r', '\u0159': 'r',
	  '\u015A': 'S', '\u015C': 'S', '\u015E': 'S', '\u0160': 'S',
	  '\u015B': 's', '\u015D': 's', '\u015F': 's', '\u0161': 's',
	  '\u0162': 'T', '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't', '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U', '\u016A': 'U', '\u016C': 'U', '\u016E': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u', '\u016B': 'u', '\u016D': 'u', '\u016F': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W', '\u0175': 'w',
	  '\u0176': 'Y', '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z', '\u017B': 'Z', '\u017D': 'Z',
	  '\u017A': 'z', '\u017C': 'z', '\u017E': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017F': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

	/** Used to compose unicode capture groups. */
	var rsCombo$1 = '[' + rsComboRange$2 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$1, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = '[\'\u2019]',
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	    return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = '[\'\u2019]';

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function (string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = _createCompounder(function (result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize_1(word) : word);
	});

	var camelCase_1 = camelCase;

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}

	var isNull_1 = isNull;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function () {
	    return arguments;
	}()) ? _baseIsArguments : function (value) {
	    return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/** Detect free variable `exports`. */
	var freeExports = (_typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && (_typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof$4(value);
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/** Detect free variable `exports`. */
	var freeExports = (_typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && (_typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    _isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$4;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof$5(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	    if (!isObject_1(value)) {
	        return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = _baseGetTag(value);
	    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache();
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$6 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$6.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash(),
	    'map': new (_Map || _ListCache)(),
	    'string': new _Hash()
	  };
	}

	var _mapCacheClear = mapCacheClear;

	var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof$6(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	var defineProperty = function () {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if (value !== undefined && !eq_1(object[key], value) || value === undefined && !(key in object)) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignMergeValue = assignMergeValue;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = _createBaseFor();

	var _baseFor = baseFor;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/** Detect free variable `exports`. */
	var freeExports = (_typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && (_typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = function () {
	  function object() {}
	  return function (proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	var _baseCreate = baseCreate;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	    return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
	}

	var _initCloneObject = initCloneObject;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike_1(value) && isArrayLike_1(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject;

	/** `Object#toString` result references. */
	var objectTag$1 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$9 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString$2.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$7.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	/**
	 * Gets the value at `key`, unless `key` is "__proto__".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	var _safeGet = safeGet;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$8.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return _copyObject(value, keysIn_1(value));
	}

	var toPlainObject_1 = toPlainObject;

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = _safeGet(object, key),
	      srcValue = _safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    _assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray_1(srcValue),
	        isBuff = !isArr && isBuffer_1(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray_1(objValue)) {
	        newValue = objValue;
	      } else if (isArrayLikeObject_1(objValue)) {
	        newValue = _copyArray(objValue);
	      } else if (isBuff) {
	        isCommon = false;
	        newValue = _cloneBuffer(srcValue, true);
	      } else if (isTyped) {
	        isCommon = false;
	        newValue = _cloneTypedArray(srcValue, true);
	      } else {
	        newValue = [];
	      }
	    } else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
	      newValue = objValue;
	      if (isArguments_1(objValue)) {
	        newValue = toPlainObject_1(objValue);
	      } else if (!isObject_1(objValue) || isFunction_1(objValue)) {
	        newValue = _initCloneObject(srcValue);
	      }
	    } else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  _assignMergeValue(object, key, newValue);
	}

	var _baseMergeDeep = baseMergeDeep;

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  _baseFor(source, function (srcValue, key) {
	    if (isObject_1(srcValue)) {
	      stack || (stack = new _Stack());
	      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    } else {
	      var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      _assignMergeValue(object, key, newValue);
	    }
	  }, keysIn_1);
	}

	var _baseMerge = baseMerge;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
	  return _defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return _setToString(_overRest(func, start, identity_1), func + '');
	}

	var _baseRest = baseRest;

	var _typeof$7 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject_1(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof$7(index);
	  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq_1(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall;

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return _baseRest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

	    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	var _createAssigner = createAssigner;

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = _createAssigner(function (object, source, srcIndex) {
	  _baseMerge(object, source, srcIndex);
	});

	var merge_1 = merge;

	var bundle = createCommonjsModule(function (module) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (e) {
	  function t(i) {
	    if (a[i]) return a[i].exports;var n = a[i] = { exports: {}, id: i, loaded: !1 };return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
	  }var a = {};return t.m = e, t.c = a, t.p = "", t(0);
	}([function (e, t, a) {
	  e.exports = a(1);
	}, function (e, t, a) {
	  function i(e) {
	    return e && e.__esModule ? e : { default: e };
	  }function n(e) {
	    return (0, h.default)(e) ? e : [e];
	  }function l(e) {
	    return "[object Date]" === Object.prototype.toString.call(e);
	  }function r(e) {
	    if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : c(e)) || l(e)) return e;if ((0, h.default)(e)) return e.map(r);var t = {};return (0, k.default)(e).forEach(function (a) {
	      t[(0, y.default)(a)] = r(e[a]);
	    }), t;
	  }function u(e, t) {
	    var a = t.camelizeKeys,
	        i = t.camelizeTypeValues,
	        n = {};return (0, k.default)(e).forEach(function (t) {
	      var l = e[t],
	          u = a ? (0, y.default)(t) : t;n[u] = {}, "undefined" != typeof l.data && ((0, h.default)(l.data) ? n[u].data = l.data.map(function (e) {
	        return { id: e.id, type: i ? (0, y.default)(e.type) : e.type };
	      }) : (0, z.default)(l.data) ? n[u].data = l.data : n[u].data = { id: l.data.id, type: i ? (0, y.default)(l.data.type) : l.data.type }, "undefined" != typeof l.meta && (n[u].meta = r(l.meta))), l.links && (n[u].links = a ? r(l.links) : l.links);
	    }), n;
	  }function o(e, t) {
	    var a = t.camelizeKeys,
	        i = t.camelizeTypeValues,
	        l = {};return n(e).forEach(function (e) {
	      var t = a ? (0, y.default)(e.type) : e.type;l[t] = l[t] || {}, l[t][e.id] = l[t][e.id] || { id: e.id }, l[t][e.id].type = i ? (0, y.default)(e.type) : e.type, a ? (l[t][e.id].attributes = {}, (0, k.default)(e.attributes).forEach(function (a) {
	        l[t][e.id].attributes[(0, y.default)(a)] = r(e.attributes[a]);
	      })) : l[t][e.id].attributes = e.attributes, e.links && (l[t][e.id].links = {}, (0, k.default)(e.links).forEach(function (i) {
	        var n = a ? (0, y.default)(i) : i;l[t][e.id].links[n] = e.links[i];
	      })), e.relationships && (l[t][e.id].relationships = u(e.relationships, { camelizeKeys: a, camelizeTypeValues: i })), e.meta && (a ? (l[t][e.id].meta = {}, (0, k.default)(e.meta).forEach(function (a) {
	        l[t][e.id].meta[(0, y.default)(a)] = r(e.meta[a]);
	      })) : l[t][e.id].meta = e.meta);
	    }), l;
	  }function d(e) {
	    return e.replace(/\?.*$/, "");
	  }function f(e, t, a) {
	    var i = a.camelizeKeys,
	        l = a.camelizeTypeValues,
	        r = a.filterEndpoint,
	        o = {};o.meta = {};var f = void 0;if (r) o.meta[t] = {}, f = o.meta[t];else {
	      var s = d(t);o.meta[s] = {}, o.meta[s][t.slice(s.length)] = {}, f = o.meta[s][t.slice(s.length)];
	    }if (f.data = {}, e.data) {
	      var c = [];n(e.data).forEach(function (e) {
	        var t = { id: e.id, type: l ? (0, y.default)(e.type) : e.type };e.relationships && (t.relationships = u(e.relationships, { camelizeKeys: i, camelizeTypeValues: l })), c.push(t);
	      }), f.data = c;
	    }return e.links && (f.links = e.links, o.meta[d(t)].links = e.links), e.meta && (f.meta = e.meta), o;
	  }function s(e) {
	    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
	        a = {},
	        i = t.endpoint,
	        n = t.filterEndpoint,
	        l = t.camelizeKeys,
	        r = t.camelizeTypeValues;if ("undefined" == typeof n && (n = !0), "undefined" == typeof l && (l = !0), "undefined" == typeof r && (r = !0), e.data && (0, E.default)(a, o(e.data, { camelizeKeys: l, camelizeTypeValues: r })), e.included && (0, E.default)(a, o(e.included, { camelizeKeys: l, camelizeTypeValues: r })), i) {
	      var u = n ? d(i) : i;(0, E.default)(a, f(e, u, { camelizeKeys: l, camelizeTypeValues: r, filterEndpoint: n }));
	    }return a;
	  }Object.defineProperty(t, "__esModule", { value: !0 });var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	  };t.default = s;var p = a(2),
	      y = i(p),
	      m = a(3),
	      h = i(m),
	      v = a(4),
	      z = i(v),
	      b = a(5),
	      k = i(b),
	      x = a(6),
	      E = i(x);
	}, function (e, t) {
	  e.exports = camelCase_1;
	}, function (e, t) {
	  e.exports = isArray_1;
	}, function (e, t) {
	  e.exports = isNull_1;
	}, function (e, t) {
	  e.exports = keys_1;
	}, function (e, t) {
	  e.exports = merge_1;
	}]);
	});

	var jsonApiNormalize = unwrapExports(bundle);

	var pluralize = createCommonjsModule(function (module, exports) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* global define */

	(function (root, pluralize) {
	  /* istanbul ignore else */
	  if (typeof commonjsRequire === 'function' && (_typeof(exports)) === 'object' && (_typeof(module)) === 'object') {
	    // Node.
	    module.exports = pluralize();
	  } else {
	    // Browser global.
	    root.pluralize = pluralize();
	  }
	})(commonjsGlobal, function () {
	  // Rule storage - pluralize and singularize need to be run sequentially,
	  // while other rules can be optimized using an object for instant lookups.
	  var pluralRules = [];
	  var singularRules = [];
	  var uncountables = {};
	  var irregularPlurals = {};
	  var irregularSingles = {};

	  /**
	   * Sanitize a pluralization rule to a usable regular expression.
	   *
	   * @param  {(RegExp|string)} rule
	   * @return {RegExp}
	   */
	  function sanitizeRule(rule) {
	    if (typeof rule === 'string') {
	      return new RegExp('^' + rule + '$', 'i');
	    }

	    return rule;
	  }

	  /**
	   * Pass in a word token to produce a function that can replicate the case on
	   * another word.
	   *
	   * @param  {string}   word
	   * @param  {string}   token
	   * @return {Function}
	   */
	  function restoreCase(word, token) {
	    // Tokens are an exact match.
	    if (word === token) return token;

	    // Upper cased words. E.g. "HELLO".
	    if (word === word.toUpperCase()) return token.toUpperCase();

	    // Title cased words. E.g. "Title".
	    if (word[0] === word[0].toUpperCase()) {
	      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
	    }

	    // Lower cased words. E.g. "test".
	    return token.toLowerCase();
	  }

	  /**
	   * Interpolate a regexp string.
	   *
	   * @param  {string} str
	   * @param  {Array}  args
	   * @return {string}
	   */
	  function interpolate(str, args) {
	    return str.replace(/\$(\d{1,2})/g, function (match, index) {
	      return args[index] || '';
	    });
	  }

	  /**
	   * Replace a word using a rule.
	   *
	   * @param  {string} word
	   * @param  {Array}  rule
	   * @return {string}
	   */
	  function replace(word, rule) {
	    return word.replace(rule[0], function (match, index) {
	      var result = interpolate(rule[1], arguments);

	      if (match === '') {
	        return restoreCase(word[index - 1], result);
	      }

	      return restoreCase(match, result);
	    });
	  }

	  /**
	   * Sanitize a word by passing in the word and sanitization rules.
	   *
	   * @param  {string}   token
	   * @param  {string}   word
	   * @param  {Array}    rules
	   * @return {string}
	   */
	  function sanitizeWord(token, word, rules) {
	    // Empty string or doesn't need fixing.
	    if (!token.length || uncountables.hasOwnProperty(token)) {
	      return word;
	    }

	    var len = rules.length;

	    // Iterate over the sanitization rules and use the first one to match.
	    while (len--) {
	      var rule = rules[len];

	      if (rule[0].test(word)) return replace(word, rule);
	    }

	    return word;
	  }

	  /**
	   * Replace a word with the updated word.
	   *
	   * @param  {Object}   replaceMap
	   * @param  {Object}   keepMap
	   * @param  {Array}    rules
	   * @return {Function}
	   */
	  function replaceWord(replaceMap, keepMap, rules) {
	    return function (word) {
	      // Get the correct token and case restoration functions.
	      var token = word.toLowerCase();

	      // Check against the keep object map.
	      if (keepMap.hasOwnProperty(token)) {
	        return restoreCase(word, token);
	      }

	      // Check against the replacement map for a direct word replacement.
	      if (replaceMap.hasOwnProperty(token)) {
	        return restoreCase(word, replaceMap[token]);
	      }

	      // Run all the rules against the word.
	      return sanitizeWord(token, word, rules);
	    };
	  }

	  /**
	   * Check if a word is part of the map.
	   */
	  function checkWord(replaceMap, keepMap, rules, bool) {
	    return function (word) {
	      var token = word.toLowerCase();

	      if (keepMap.hasOwnProperty(token)) return true;
	      if (replaceMap.hasOwnProperty(token)) return false;

	      return sanitizeWord(token, token, rules) === token;
	    };
	  }

	  /**
	   * Pluralize or singularize a word based on the passed in count.
	   *
	   * @param  {string}  word
	   * @param  {number}  count
	   * @param  {boolean} inclusive
	   * @return {string}
	   */
	  function pluralize(word, count, inclusive) {
	    var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);

	    return (inclusive ? count + ' ' : '') + pluralized;
	  }

	  /**
	   * Pluralize a word.
	   *
	   * @type {Function}
	   */
	  pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);

	  /**
	   * Check if a word is plural.
	   *
	   * @type {Function}
	   */
	  pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);

	  /**
	   * Singularize a word.
	   *
	   * @type {Function}
	   */
	  pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);

	  /**
	   * Check if a word is singular.
	   *
	   * @type {Function}
	   */
	  pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);

	  /**
	   * Add a pluralization rule to the collection.
	   *
	   * @param {(string|RegExp)} rule
	   * @param {string}          replacement
	   */
	  pluralize.addPluralRule = function (rule, replacement) {
	    pluralRules.push([sanitizeRule(rule), replacement]);
	  };

	  /**
	   * Add a singularization rule to the collection.
	   *
	   * @param {(string|RegExp)} rule
	   * @param {string}          replacement
	   */
	  pluralize.addSingularRule = function (rule, replacement) {
	    singularRules.push([sanitizeRule(rule), replacement]);
	  };

	  /**
	   * Add an uncountable word rule.
	   *
	   * @param {(string|RegExp)} word
	   */
	  pluralize.addUncountableRule = function (word) {
	    if (typeof word === 'string') {
	      uncountables[word.toLowerCase()] = true;
	      return;
	    }

	    // Set singular and plural references for the word.
	    pluralize.addPluralRule(word, '$0');
	    pluralize.addSingularRule(word, '$0');
	  };

	  /**
	   * Add an irregular word definition.
	   *
	   * @param {string} single
	   * @param {string} plural
	   */
	  pluralize.addIrregularRule = function (single, plural) {
	    plural = plural.toLowerCase();
	    single = single.toLowerCase();

	    irregularSingles[single] = plural;
	    irregularPlurals[plural] = single;
	  };

	  /**
	   * Irregular rules.
	   */
	  [
	  // Pronouns.
	  ['I', 'we'], ['me', 'us'], ['he', 'they'], ['she', 'they'], ['them', 'them'], ['myself', 'ourselves'], ['yourself', 'yourselves'], ['itself', 'themselves'], ['herself', 'themselves'], ['himself', 'themselves'], ['themself', 'themselves'], ['is', 'are'], ['was', 'were'], ['has', 'have'], ['this', 'these'], ['that', 'those'],
	  // Words ending in with a consonant and `o`.
	  ['echo', 'echoes'], ['dingo', 'dingoes'], ['volcano', 'volcanoes'], ['tornado', 'tornadoes'], ['torpedo', 'torpedoes'],
	  // Ends with `us`.
	  ['genus', 'genera'], ['viscus', 'viscera'],
	  // Ends with `ma`.
	  ['stigma', 'stigmata'], ['stoma', 'stomata'], ['dogma', 'dogmata'], ['lemma', 'lemmata'], ['schema', 'schemata'], ['anathema', 'anathemata'],
	  // Other irregular rules.
	  ['ox', 'oxen'], ['axe', 'axes'], ['die', 'dice'], ['yes', 'yeses'], ['foot', 'feet'], ['eave', 'eaves'], ['goose', 'geese'], ['tooth', 'teeth'], ['quiz', 'quizzes'], ['human', 'humans'], ['proof', 'proofs'], ['carve', 'carves'], ['valve', 'valves'], ['looey', 'looies'], ['thief', 'thieves'], ['groove', 'grooves'], ['pickaxe', 'pickaxes'], ['whiskey', 'whiskies']].forEach(function (rule) {
	    return pluralize.addIrregularRule(rule[0], rule[1]);
	  });

	  /**
	   * Pluralization rules.
	   */
	  [[/s?$/i, 's'], [/[^\u0000-\u007F]$/i, '$0'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/(m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], ['thou', 'you']].forEach(function (rule) {
	    return pluralize.addPluralRule(rule[0], rule[1]);
	  });

	  /**
	   * Singularization rules.
	   */
	  [[/s$/i, ''], [/(ss)$/i, '$1'], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'], [/ies$/i, 'y'], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'], [/\b(mon|smil)ies$/i, '$1ey'], [/(m|l)ice$/i, '$1ouse'], [/(seraph|cherub)im$/i, '$1'], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'], [/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i, '$1sis'], [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'], [/(test)(?:is|es)$/i, '$1is'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'], [/(alumn|alg|vertebr)ae$/i, '$1a'], [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'], [/(matr|append)ices$/i, '$1ix'], [/(pe)(rson|ople)$/i, '$1rson'], [/(child)ren$/i, '$1'], [/(eau)x?$/i, '$1'], [/men$/i, 'man']].forEach(function (rule) {
	    return pluralize.addSingularRule(rule[0], rule[1]);
	  });

	  /**
	   * Uncountable rules.
	   */
	  [
	  // Singular words with no plurals.
	  'adulthood', 'advice', 'agenda', 'aid', 'alcohol', 'ammo', 'anime', 'athletics', 'audio', 'bison', 'blood', 'bream', 'buffalo', 'butter', 'carp', 'cash', 'chassis', 'chess', 'clothing', 'cod', 'commerce', 'cooperation', 'corps', 'debris', 'diabetes', 'digestion', 'elk', 'energy', 'equipment', 'excretion', 'expertise', 'flounder', 'fun', 'gallows', 'garbage', 'graffiti', 'headquarters', 'health', 'herpes', 'highjinks', 'homework', 'housework', 'information', 'jeans', 'justice', 'kudos', 'labour', 'literature', 'machinery', 'mackerel', 'mail', 'media', 'mews', 'moose', 'music', 'manga', 'news', 'pike', 'plankton', 'pliers', 'pollution', 'premises', 'rain', 'research', 'rice', 'salmon', 'scissors', 'series', 'sewage', 'shambles', 'shrimp', 'species', 'staff', 'swine', 'tennis', 'traffic', 'transporation', 'trout', 'tuna', 'wealth', 'welfare', 'whiting', 'wildebeest', 'wildlife', 'you',
	  // Regexes.
	  /[^aeiou]ese$/i, // "chinese", "japanese"
	  /deer$/i, // "deer", "reindeer"
	  /fish$/i, // "fish", "blowfish", "angelfish"
	  /measles$/i, /o[iu]s$/i, // "carnivorous"
	  /pox$/i, // "chickpox", "smallpox"
	  /sheep$/i].forEach(pluralize.addUncountableRule);

	  return pluralize;
	});
	});

	var instanceOf = process && process.env.NODE_ENV !== 'production' ? // eslint-disable-next-line no-shadow
	function instanceOf(value, constructor) {
	  if (value instanceof constructor) {
	    return true;
	  }
	  if (value) {
	    var valueClass = value.constructor;
	    var className = constructor.name;
	    if (valueClass && valueClass.name === className) {
	      throw new Error('Cannot use ' + className + ' "' + value + '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.');
	    }
	  }
	  return false;
	} : // eslint-disable-next-line no-shadow
	function instanceOf(value, constructor) {
	  return value instanceof constructor;
	}; /**
	    * Copyright (c) 2015-present, Facebook, Inc.
	    *
	    * This source code is licensed under the MIT license found in the
	    * LICENSE file in the root directory of this source tree.
	    *
	    * 
	    */

	/**
	 * A replacement for instanceof which includes an error warning when multi-realm
	 * constructors are detected.
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function invariant(condition, message) {
	  /* istanbul ignore else */
	  if (!condition) {
	    throw new Error(message);
	  }
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Returns true if a value is undefined, or NaN.
	 */
	function isInvalid(value) {
	  return value === undefined || value !== value;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * The set of allowed kind values for AST nodes.
	 */
	var Kind = Object.freeze({
	  // Name
	  NAME: 'Name',

	  // Document
	  DOCUMENT: 'Document',
	  OPERATION_DEFINITION: 'OperationDefinition',
	  VARIABLE_DEFINITION: 'VariableDefinition',
	  VARIABLE: 'Variable',
	  SELECTION_SET: 'SelectionSet',
	  FIELD: 'Field',
	  ARGUMENT: 'Argument',

	  // Fragments
	  FRAGMENT_SPREAD: 'FragmentSpread',
	  INLINE_FRAGMENT: 'InlineFragment',
	  FRAGMENT_DEFINITION: 'FragmentDefinition',

	  // Values
	  INT: 'IntValue',
	  FLOAT: 'FloatValue',
	  STRING: 'StringValue',
	  BOOLEAN: 'BooleanValue',
	  NULL: 'NullValue',
	  ENUM: 'EnumValue',
	  LIST: 'ListValue',
	  OBJECT: 'ObjectValue',
	  OBJECT_FIELD: 'ObjectField',

	  // Directives
	  DIRECTIVE: 'Directive',

	  // Types
	  NAMED_TYPE: 'NamedType',
	  LIST_TYPE: 'ListType',
	  NON_NULL_TYPE: 'NonNullType',

	  // Type System Definitions
	  SCHEMA_DEFINITION: 'SchemaDefinition',
	  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',

	  // Type Definitions
	  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
	  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
	  FIELD_DEFINITION: 'FieldDefinition',
	  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
	  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
	  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
	  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
	  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
	  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',

	  // Type Extensions
	  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
	  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
	  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
	  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
	  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
	  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',

	  // Directive Definitions
	  DIRECTIVE_DEFINITION: 'DirectiveDefinition'
	});

	/**
	 * The enum type representing the possible kind values of AST nodes.
	 */

	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * and a function to produce the values from each item in the array.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: '555-1234', Jenny: '867-5309' }
	 *     const phonesByName = keyValMap(
	 *       phoneBook,
	 *       entry => entry.name,
	 *       entry => entry.num
	 *     )
	 *
	 */
	function keyValMap(list, keyFn, valFn) {
	  return list.reduce(function (map, item) {
	    return map[keyFn(item)] = valFn(item), map;
	  }, Object.create(null));
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

	/**
	 * Produces a JavaScript value given a GraphQL Value AST.
	 *
	 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
	 * will reflect the provided GraphQL value AST.
	 *
	 * | GraphQL Value        | JavaScript Value |
	 * | -------------------- | ---------------- |
	 * | Input Object         | Object           |
	 * | List                 | Array            |
	 * | Boolean              | Boolean          |
	 * | String / Enum        | String           |
	 * | Int / Float          | Number           |
	 * | Null                 | null             |
	 *
	 */
	function valueFromASTUntyped(valueNode, variables) {
	  switch (valueNode.kind) {
	    case Kind.NULL:
	      return null;
	    case Kind.INT:
	      return parseInt(valueNode.value, 10);
	    case Kind.FLOAT:
	      return parseFloat(valueNode.value);
	    case Kind.STRING:
	    case Kind.ENUM:
	    case Kind.BOOLEAN:
	      return valueNode.value;
	    case Kind.LIST:
	      return valueNode.values.map(function (node) {
	        return valueFromASTUntyped(node, variables);
	      });
	    case Kind.OBJECT:
	      return keyValMap(valueNode.fields, function (field) {
	        return field.name.value;
	      }, function (field) {
	        return valueFromASTUntyped(field.value, variables);
	      });
	    case Kind.VARIABLE:
	      var variableName = valueNode.name.value;
	      return variables && !isInvalid(variables[variableName]) ? variables[variableName] : undefined;
	  }
	  /* istanbul ignore next */
	  throw new Error('Unexpected value kind: ' + valueNode.kind);
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * List Type Wrapper
	 *
	 * A list is a wrapping type which points to another type.
	 * Lists are often created within the context of defining the fields of
	 * an object type.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         parents: { type: GraphQLList(PersonType) },
	 *         children: { type: GraphQLList(PersonType) },
	 *       })
	 *     })
	 *
	 */

	// eslint-disable-next-line no-redeclare
	function GraphQLList(ofType) {
	  if (this instanceof GraphQLList) {
	    this.ofType = assertType(ofType);
	  } else {
	    return new GraphQLList(ofType);
	  }
	}

	// Also provide toJSON and inspect aliases for toString.
	var listProto = GraphQLList.prototype;
	listProto.toString = listProto.toJSON = listProto.inspect = function toString() {
	  return '[' + String(this.ofType) + ']';
	};

	/**
	 * Non-Null Type Wrapper
	 *
	 * A non-null is a wrapping type which points to another type.
	 * Non-null types enforce that their values are never null and can ensure
	 * an error is raised if this ever occurs during a request. It is useful for
	 * fields which you can make a strong guarantee on non-nullability, for example
	 * usually the id field of a database row will never be null.
	 *
	 * Example:
	 *
	 *     const RowType = new GraphQLObjectType({
	 *       name: 'Row',
	 *       fields: () => ({
	 *         id: { type: GraphQLNonNull(GraphQLString) },
	 *       })
	 *     })
	 *
	 * Note: the enforcement of non-nullability occurs within the executor.
	 */

	// eslint-disable-next-line no-redeclare
	function GraphQLNonNull(ofType) {
	  if (this instanceof GraphQLNonNull) {
	    this.ofType = assertNullableType(ofType);
	  } else {
	    return new GraphQLNonNull(ofType);
	  }
	}

	// Also provide toJSON and inspect aliases for toString.
	var nonNullProto = GraphQLNonNull.prototype;
	nonNullProto.toString = nonNullProto.toJSON = nonNullProto.inspect = function toString() {
	  return String(this.ofType) + '!';
	};

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$8 = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	// Predicates & Assertions

	/**
	 * These are all of the possible kinds of types.
	 */

	function isType(type) {
	  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
	}

	function assertType(type) {
	  !isType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL type.') : void 0;
	  return type;
	}

	/**
	 * There are predicates for each kind of GraphQL type.
	 */

	// eslint-disable-next-line no-redeclare
	function isScalarType(type) {
	  return instanceOf(type, GraphQLScalarType);
	}

	function assertScalarType(type) {
	  !isScalarType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Scalar type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isObjectType(type) {
	  return instanceOf(type, GraphQLObjectType);
	}

	function assertObjectType(type) {
	  !isObjectType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Object type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isInterfaceType(type) {
	  return instanceOf(type, GraphQLInterfaceType);
	}

	function assertInterfaceType(type) {
	  !isInterfaceType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Interface type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isUnionType(type) {
	  return instanceOf(type, GraphQLUnionType);
	}

	function assertUnionType(type) {
	  !isUnionType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Union type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isEnumType(type) {
	  return instanceOf(type, GraphQLEnumType);
	}

	function assertEnumType(type) {
	  !isEnumType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Enum type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isInputObjectType(type) {
	  return instanceOf(type, GraphQLInputObjectType);
	}

	function assertInputObjectType(type) {
	  !isInputObjectType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Input Object type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isListType(type) {
	  return instanceOf(type, GraphQLList);
	}

	function assertListType(type) {
	  !isListType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL List type.') : void 0;
	  return type;
	}

	// eslint-disable-next-line no-redeclare
	function isNonNullType(type) {
	  return instanceOf(type, GraphQLNonNull);
	}

	function assertNonNullType(type) {
	  !isNonNullType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL Non-Null type.') : void 0;
	  return type;
	}

	/**
	 * These types may be used as input types for arguments and directives.
	 */

	function isInputType(type) {
	  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
	}

	function assertInputType(type) {
	  !isInputType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL input type.') : void 0;
	  return type;
	}

	/**
	 * These types may be used as output types as the result of fields.
	 */

	function isOutputType(type) {
	  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
	}

	function assertOutputType(type) {
	  !isOutputType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL output type.') : void 0;
	  return type;
	}

	/**
	 * These types may describe types which may be leaf values.
	 */

	function isLeafType(type) {
	  return isScalarType(type) || isEnumType(type);
	}

	function assertLeafType(type) {
	  !isLeafType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL leaf type.') : void 0;
	  return type;
	}

	/**
	 * These types may describe the parent context of a selection set.
	 */

	function isCompositeType(type) {
	  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
	}

	function assertCompositeType(type) {
	  !isCompositeType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL composite type.') : void 0;
	  return type;
	}

	/**
	 * These types may describe the parent context of a selection set.
	 */

	function isAbstractType(type) {
	  return isInterfaceType(type) || isUnionType(type);
	}

	function assertAbstractType(type) {
	  !isAbstractType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL abstract type.') : void 0;
	  return type;
	}

	/**
	 * These types wrap and modify other types
	 */

	function isWrappingType(type) {
	  return isListType(type) || isNonNullType(type);
	}

	function assertWrappingType(type) {
	  !isWrappingType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL wrapping type.') : void 0;
	  return type;
	}

	/**
	 * These types can all accept null as a value.
	 */

	function isNullableType(type) {
	  return isType(type) && !isNonNullType(type);
	}

	function assertNullableType(type) {
	  !isNullableType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL nullable type.') : void 0;
	  return type;
	}

	/* eslint-disable no-redeclare */

	function getNullableType(type) {
	  /* eslint-enable no-redeclare */
	  if (type) {
	    return isNonNullType(type) ? type.ofType : type;
	  }
	}

	/**
	 * These named types do not include modifiers like List or NonNull.
	 */

	function isNamedType(type) {
	  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
	}

	function assertNamedType(type) {
	  !isNamedType(type) ? invariant(0, 'Expected ' + String(type) + ' to be a GraphQL named type.') : void 0;
	  return type;
	}

	/* eslint-disable no-redeclare */

	function getNamedType(type) {
	  /* eslint-enable no-redeclare */
	  if (type) {
	    var unwrappedType = type;
	    while (isWrappingType(unwrappedType)) {
	      unwrappedType = unwrappedType.ofType;
	    }
	    return unwrappedType;
	  }
	}

	/**
	 * Used while defining GraphQL types to allow for circular references in
	 * otherwise immutable type definitions.
	 */

	function resolveThunk(thunk) {
	  return typeof thunk === 'function' ? thunk() : thunk;
	}

	/**
	 * Scalar Type Definition
	 *
	 * The leaf values of any request and input values to arguments are
	 * Scalars (or Enums) and are defined with a name and a series of functions
	 * used to parse input from ast or variables and to ensure validity.
	 *
	 * If a type's serialize function does not return a value (i.e. it returns
	 * `undefined`) then an error will be raised and a `null` value will be returned
	 * in the response. If the serialize function returns `null`, then no error will
	 * be included in the response.
	 *
	 * Example:
	 *
	 *     const OddType = new GraphQLScalarType({
	 *       name: 'Odd',
	 *       serialize(value) {
	 *         if (value % 2 === 1) {
	 *           return value;
	 *         }
	 *       }
	 *     });
	 *
	 */
	var GraphQLScalarType = function () {
	  function GraphQLScalarType(config) {
	    _classCallCheck(this, GraphQLScalarType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this._scalarConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	    !(typeof config.serialize === 'function') ? invariant(0, this.name + ' must provide "serialize" function. If this custom Scalar ' + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;
	    if (config.parseValue || config.parseLiteral) {
	      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? invariant(0, this.name + ' must provide both "parseValue" and "parseLiteral" ' + 'functions.') : void 0;
	    }
	  }

	  // Serializes an internal value to include in a response.


	  GraphQLScalarType.prototype.serialize = function serialize(value) {
	    var serializer = this._scalarConfig.serialize;
	    return serializer(value);
	  };

	  // Parses an externally provided value to use as an input.


	  GraphQLScalarType.prototype.parseValue = function parseValue(value) {
	    var parser = this._scalarConfig.parseValue;
	    if (isInvalid(value)) {
	      return undefined;
	    }
	    return parser ? parser(value) : value;
	  };

	  // Parses an externally provided literal value to use as an input.


	  GraphQLScalarType.prototype.parseLiteral = function parseLiteral(valueNode, variables) {
	    var parser = this._scalarConfig.parseLiteral;
	    return parser ? parser(valueNode, variables) : valueFromASTUntyped(valueNode, variables);
	  };

	  GraphQLScalarType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLScalarType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

	/**
	 * Object Type Definition
	 *
	 * Almost all of the GraphQL types you define will be object types. Object types
	 * have a name, but most importantly describe their fields.
	 *
	 * Example:
	 *
	 *     const AddressType = new GraphQLObjectType({
	 *       name: 'Address',
	 *       fields: {
	 *         street: { type: GraphQLString },
	 *         number: { type: GraphQLInt },
	 *         formatted: {
	 *           type: GraphQLString,
	 *           resolve(obj) {
	 *             return obj.number + ' ' + obj.street
	 *           }
	 *         }
	 *       }
	 *     });
	 *
	 * When two types need to refer to each other, or a type needs to refer to
	 * itself in a field, you can use a function expression (aka a closure or a
	 * thunk) to supply the fields lazily.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         name: { type: GraphQLString },
	 *         bestFriend: { type: PersonType },
	 *       })
	 *     });
	 *
	 */
	var GraphQLObjectType = function () {
	  function GraphQLObjectType(config) {
	    _classCallCheck(this, GraphQLObjectType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this.extensionASTNodes = config.extensionASTNodes;
	    this.isTypeOf = config.isTypeOf;
	    this._typeConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	    if (config.isTypeOf) {
	      !(typeof config.isTypeOf === 'function') ? invariant(0, this.name + ' must provide "isTypeOf" as a function.') : void 0;
	    }
	  }

	  GraphQLObjectType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	  };

	  GraphQLObjectType.prototype.getInterfaces = function getInterfaces() {
	    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
	  };

	  GraphQLObjectType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLObjectType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

	function defineInterfaces(type, interfacesThunk) {
	  var interfaces = resolveThunk(interfacesThunk) || [];
	  !Array.isArray(interfaces) ? invariant(0, type.name + ' interfaces must be an Array or a function which returns ' + 'an Array.') : void 0;
	  return interfaces;
	}

	function defineFieldMap(type, fieldsThunk) {
	  var fieldMap = resolveThunk(fieldsThunk) || {};
	  !isPlainObj(fieldMap) ? invariant(0, type.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;

	  var resultFieldMap = Object.create(null);
	  Object.keys(fieldMap).forEach(function (fieldName) {
	    var fieldConfig = fieldMap[fieldName];
	    !isPlainObj(fieldConfig) ? invariant(0, type.name + '.' + fieldName + ' field config must be an object') : void 0;
	    !!fieldConfig.hasOwnProperty('isDeprecated') ? invariant(0, type.name + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
	    var field = _extends({}, fieldConfig, {
	      isDeprecated: Boolean(fieldConfig.deprecationReason),
	      name: fieldName
	    });
	    !isValidResolver(field.resolve) ? invariant(0, type.name + '.' + fieldName + ' field resolver must be a function if ' + ('provided, but got: ' + String(field.resolve) + '.')) : void 0;
	    var argsConfig = fieldConfig.args;
	    if (!argsConfig) {
	      field.args = [];
	    } else {
	      !isPlainObj(argsConfig) ? invariant(0, type.name + '.' + fieldName + ' args must be an object with argument ' + 'names as keys.') : void 0;
	      field.args = Object.keys(argsConfig).map(function (argName) {
	        var arg = argsConfig[argName];
	        return {
	          name: argName,
	          description: arg.description === undefined ? null : arg.description,
	          type: arg.type,
	          defaultValue: arg.defaultValue,
	          astNode: arg.astNode
	        };
	      });
	    }
	    resultFieldMap[fieldName] = field;
	  });
	  return resultFieldMap;
	}

	function isPlainObj(obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof$8(obj)) === 'object' && !Array.isArray(obj);
	}

	// If a resolver is defined, it must be a function.
	function isValidResolver(resolver) {
	  return resolver == null || typeof resolver === 'function';
	}

	/**
	 * Interface Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Interface type
	 * is used to describe what types are possible, what fields are in common across
	 * all types, as well as a function to determine which type is actually used
	 * when the field is resolved.
	 *
	 * Example:
	 *
	 *     const EntityType = new GraphQLInterfaceType({
	 *       name: 'Entity',
	 *       fields: {
	 *         name: { type: GraphQLString }
	 *       }
	 *     });
	 *
	 */
	var GraphQLInterfaceType = function () {
	  function GraphQLInterfaceType(config) {
	    _classCallCheck(this, GraphQLInterfaceType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this.extensionASTNodes = config.extensionASTNodes;
	    this.resolveType = config.resolveType;
	    this._typeConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	    if (config.resolveType) {
	      !(typeof config.resolveType === 'function') ? invariant(0, this.name + ' must provide "resolveType" as a function.') : void 0;
	    }
	  }

	  GraphQLInterfaceType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	  };

	  GraphQLInterfaceType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLInterfaceType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

	/**
	 * Union Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Union type
	 * is used to describe what types are possible as well as providing a function
	 * to determine which type is actually used when the field is resolved.
	 *
	 * Example:
	 *
	 *     const PetType = new GraphQLUnionType({
	 *       name: 'Pet',
	 *       types: [ DogType, CatType ],
	 *       resolveType(value) {
	 *         if (value instanceof Dog) {
	 *           return DogType;
	 *         }
	 *         if (value instanceof Cat) {
	 *           return CatType;
	 *         }
	 *       }
	 *     });
	 *
	 */
	var GraphQLUnionType = function () {
	  function GraphQLUnionType(config) {
	    _classCallCheck(this, GraphQLUnionType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this.resolveType = config.resolveType;
	    this._typeConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	    if (config.resolveType) {
	      !(typeof config.resolveType === 'function') ? invariant(0, this.name + ' must provide "resolveType" as a function.') : void 0;
	    }
	  }

	  GraphQLUnionType.prototype.getTypes = function getTypes() {
	    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
	  };

	  GraphQLUnionType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLUnionType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

	function defineTypes(unionType, typesThunk) {
	  var types = resolveThunk(typesThunk) || [];
	  !Array.isArray(types) ? invariant(0, 'Must provide Array of types or a function which returns ' + ('such an array for Union ' + unionType.name + '.')) : void 0;
	  return types;
	}

	/**
	 * Enum Type Definition
	 *
	 * Some leaf values of requests and input values are Enums. GraphQL serializes
	 * Enum values as strings, however internally Enums can be represented by any
	 * kind of type, often integers.
	 *
	 * Example:
	 *
	 *     const RGBType = new GraphQLEnumType({
	 *       name: 'RGB',
	 *       values: {
	 *         RED: { value: 0 },
	 *         GREEN: { value: 1 },
	 *         BLUE: { value: 2 }
	 *       }
	 *     });
	 *
	 * Note: If a value is not provided in a definition, the name of the enum value
	 * will be used as its internal value.
	 */
	var GraphQLEnumType /* <T> */ = function () {
	  function GraphQLEnumType(config /* <T> */) {
	    _classCallCheck(this, GraphQLEnumType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this._enumConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	  }

	  GraphQLEnumType.prototype.getValues = function getValues() {
	    return this._values || (this._values = defineEnumValues(this, this._enumConfig.values));
	  };

	  GraphQLEnumType.prototype.getValue = function getValue(name) {
	    return this._getNameLookup()[name];
	  };

	  GraphQLEnumType.prototype.serialize = function serialize(value /* T */) {
	    var enumValue = this._getValueLookup().get(value);
	    if (enumValue) {
	      return enumValue.name;
	    }
	  };

	  GraphQLEnumType.prototype.parseValue = function parseValue(value) /* T */{
	    if (typeof value === 'string') {
	      var enumValue = this._getNameLookup()[value];
	      if (enumValue) {
	        return enumValue.value;
	      }
	    }
	  };

	  GraphQLEnumType.prototype.parseLiteral = function parseLiteral(valueNode, _variables) /* T */{
	    // Note: variables will be resolved to a value before calling this function.
	    if (valueNode.kind === Kind.ENUM) {
	      var enumValue = this._getNameLookup()[valueNode.value];
	      if (enumValue) {
	        return enumValue.value;
	      }
	    }
	  };

	  GraphQLEnumType.prototype._getValueLookup = function _getValueLookup() {
	    if (!this._valueLookup) {
	      var lookup = new Map();
	      this.getValues().forEach(function (value) {
	        lookup.set(value.value, value);
	      });
	      this._valueLookup = lookup;
	    }
	    return this._valueLookup;
	  };

	  GraphQLEnumType.prototype._getNameLookup = function _getNameLookup() {
	    if (!this._nameLookup) {
	      var lookup = Object.create(null);
	      this.getValues().forEach(function (value) {
	        lookup[value.name] = value;
	      });
	      this._nameLookup = lookup;
	    }
	    return this._nameLookup;
	  };

	  GraphQLEnumType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLEnumType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

	function defineEnumValues(type, valueMap /* <T> */
	) {
	  !isPlainObj(valueMap) ? invariant(0, type.name + ' values must be an object with value names as keys.') : void 0;
	  return Object.keys(valueMap).map(function (valueName) {
	    var value = valueMap[valueName];
	    !isPlainObj(value) ? invariant(0, type.name + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + String(value) + '.')) : void 0;
	    !!value.hasOwnProperty('isDeprecated') ? invariant(0, type.name + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".') : void 0;
	    return {
	      name: valueName,
	      description: value.description,
	      isDeprecated: Boolean(value.deprecationReason),
	      deprecationReason: value.deprecationReason,
	      astNode: value.astNode,
	      value: value.hasOwnProperty('value') ? value.value : valueName
	    };
	  });
	} /* <T> */

	/**
	 * Input Object Type Definition
	 *
	 * An input object defines a structured collection of fields which may be
	 * supplied to a field argument.
	 *
	 * Using `NonNull` will ensure that a value must be provided by the query
	 *
	 * Example:
	 *
	 *     const GeoPoint = new GraphQLInputObjectType({
	 *       name: 'GeoPoint',
	 *       fields: {
	 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
	 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
	 *         alt: { type: GraphQLFloat, defaultValue: 0 },
	 *       }
	 *     });
	 *
	 */
	var GraphQLInputObjectType = function () {
	  function GraphQLInputObjectType(config) {
	    _classCallCheck(this, GraphQLInputObjectType);

	    this.name = config.name;
	    this.description = config.description;
	    this.astNode = config.astNode;
	    this._typeConfig = config;
	    !(typeof config.name === 'string') ? invariant(0, 'Must provide name.') : void 0;
	  }

	  GraphQLInputObjectType.prototype.getFields = function getFields() {
	    return this._fields || (this._fields = this._defineFieldMap());
	  };

	  GraphQLInputObjectType.prototype._defineFieldMap = function _defineFieldMap() {
	    var _this = this;

	    var fieldMap = resolveThunk(this._typeConfig.fields) || {};
	    !isPlainObj(fieldMap) ? invariant(0, this.name + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.') : void 0;
	    var resultFieldMap = Object.create(null);
	    Object.keys(fieldMap).forEach(function (fieldName) {
	      var field = _extends({}, fieldMap[fieldName], {
	        name: fieldName
	      });
	      !!field.hasOwnProperty('resolve') ? invariant(0, _this.name + '.' + fieldName + ' field type has a resolve property, but ' + 'Input Types cannot define resolvers.') : void 0;
	      resultFieldMap[fieldName] = field;
	    });
	    return resultFieldMap;
	  };

	  GraphQLInputObjectType.prototype.toString = function toString() {
	    return this.name;
	  };

	  return GraphQLInputObjectType;
	}();

	// Also provide toJSON and inspect aliases for toString.
	GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.toString;
	GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	// As per the GraphQL Spec, Integers are only treated as valid when a valid
	// 32-bit signed integer, providing the broadest support across platforms.
	//
	// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
	// they are internally represented as IEEE 754 doubles.
	var MAX_INT = 2147483647;
	var MIN_INT = -2147483648;

	function coerceInt(value) {
	  if (value === '') {
	    throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
	  }
	  var num = Number(value);
	  if (num !== num || num > MAX_INT || num < MIN_INT) {
	    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + String(value));
	  }
	  var int = Math.floor(num);
	  if (int !== num) {
	    throw new TypeError('Int cannot represent non-integer value: ' + String(value));
	  }
	  return int;
	}

	var GraphQLInt = new GraphQLScalarType({
	  name: 'Int',
	  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
	  serialize: coerceInt,
	  parseValue: coerceInt,
	  parseLiteral: function parseLiteral(ast) {
	    if (ast.kind === Kind.INT) {
	      var num = parseInt(ast.value, 10);
	      if (num <= MAX_INT && num >= MIN_INT) {
	        return num;
	      }
	    }
	    return undefined;
	  }
	});

	function coerceFloat(value) {
	  if (value === '') {
	    throw new TypeError('Float cannot represent non numeric value: (empty string)');
	  }
	  var num = Number(value);
	  if (num === num) {
	    return num;
	  }
	  throw new TypeError('Float cannot represent non numeric value: ' + String(value));
	}

	var GraphQLFloat = new GraphQLScalarType({
	  name: 'Float',
	  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
	  serialize: coerceFloat,
	  parseValue: coerceFloat,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : undefined;
	  }
	});

	function coerceString(value) {
	  if (Array.isArray(value)) {
	    throw new TypeError('String cannot represent an array value: [' + String(value) + ']');
	  }
	  return String(value);
	}

	var GraphQLString = new GraphQLScalarType({
	  name: 'String',
	  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
	  serialize: coerceString,
	  parseValue: coerceString,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.STRING ? ast.value : undefined;
	  }
	});

	var GraphQLBoolean = new GraphQLScalarType({
	  name: 'Boolean',
	  description: 'The `Boolean` scalar type represents `true` or `false`.',
	  serialize: Boolean,
	  parseValue: Boolean,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.BOOLEAN ? ast.value : undefined;
	  }
	});

	var GraphQLID = new GraphQLScalarType({
	  name: 'ID',
	  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
	  serialize: String,
	  parseValue: String,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : undefined;
	  }
	});

	var specifiedScalarTypes = [GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID];

	function isSpecifiedScalarType(type) {
	  return isNamedType(type) && (
	  // Would prefer to use specifiedScalarTypes.some(), however %checks needs
	  // a simple expression.
	  type.name === GraphQLString.name || type.name === GraphQLInt.name || type.name === GraphQLFloat.name || type.name === GraphQLBoolean.name || type.name === GraphQLID.name);
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * The set of allowed directive location values.
	 */
	var DirectiveLocation = Object.freeze({
	  // Request Definitions
	  QUERY: 'QUERY',
	  MUTATION: 'MUTATION',
	  SUBSCRIPTION: 'SUBSCRIPTION',
	  FIELD: 'FIELD',
	  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
	  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
	  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
	  // Type System Definitions
	  SCHEMA: 'SCHEMA',
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  FIELD_DEFINITION: 'FIELD_DEFINITION',
	  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  ENUM_VALUE: 'ENUM_VALUE',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
	});

	/**
	 * The enum type representing the directive location values.
	 */

	function _classCallCheck$1(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Test if the given value is a GraphQL directive.
	 */

	// eslint-disable-next-line no-redeclare
	function isDirective(directive) {
	  return instanceOf(directive, GraphQLDirective);
	}

	/**
	 * Directives are used by the GraphQL runtime as a way of modifying execution
	 * behavior. Type system creators will usually not create these directly.
	 */
	var GraphQLDirective = function GraphQLDirective(config) {
	  _classCallCheck$1(this, GraphQLDirective);

	  this.name = config.name;
	  this.description = config.description;
	  this.locations = config.locations;
	  this.astNode = config.astNode;
	  !config.name ? invariant(0, 'Directive must be named.') : void 0;
	  !Array.isArray(config.locations) ? invariant(0, 'Must provide locations for directive.') : void 0;

	  var args = config.args;
	  if (!args) {
	    this.args = [];
	  } else {
	    !!Array.isArray(args) ? invariant(0, '@' + config.name + ' args must be an object with argument names as keys.') : void 0;
	    this.args = Object.keys(args).map(function (argName) {
	      var arg = args[argName];
	      return {
	        name: argName,
	        description: arg.description === undefined ? null : arg.description,
	        type: arg.type,
	        defaultValue: arg.defaultValue,
	        astNode: arg.astNode
	      };
	    });
	  }
	};

	/**
	 * Used to conditionally include fields or fragments.
	 */
	var GraphQLIncludeDirective = new GraphQLDirective({
	  name: 'include',
	  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
	  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
	  args: {
	    if: {
	      type: GraphQLNonNull(GraphQLBoolean),
	      description: 'Included when true.'
	    }
	  }
	});

	/**
	 * Used to conditionally skip (exclude) fields or fragments.
	 */
	var GraphQLSkipDirective = new GraphQLDirective({
	  name: 'skip',
	  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
	  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
	  args: {
	    if: {
	      type: GraphQLNonNull(GraphQLBoolean),
	      description: 'Skipped when true.'
	    }
	  }
	});

	/**
	 * Constant string used for default reason for a deprecation.
	 */
	var DEFAULT_DEPRECATION_REASON = 'No longer supported';

	/**
	 * Used to declare element of a GraphQL schema as deprecated.
	 */
	var GraphQLDeprecatedDirective = new GraphQLDirective({
	  name: 'deprecated',
	  description: 'Marks an element of a GraphQL schema as no longer supported.',
	  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
	  args: {
	    reason: {
	      type: GraphQLString,
	      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
	      defaultValue: DEFAULT_DEPRECATION_REASON
	    }
	  }
	});

	/**
	 * The full list of specified directives.
	 */
	var specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];

	function isSpecifiedDirective(directive) {
	  return specifiedDirectives.some(function (specifiedDirective) {
	    return specifiedDirective.name === directive.name;
	  });
	}

	/* eslint-disable no-redeclare */
	// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var objectValues = Object.values || function (obj) {
	  return Object.keys(obj).map(function (key) {
	    return obj[key];
	  });
	};

	/**
	 * Copyright (c) 2016, Lee Byron
	 * All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @ignore
	 */

	/**
	 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
	 * is a *protocol* which describes a standard way to produce a sequence of
	 * values, typically the values of the Iterable represented by this Iterator.
	 *
	 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @external Iterator
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
	 */

	/**
	 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	 * is a *protocol* which when implemented allows a JavaScript object to define
	 * their iteration behavior, such as what values are looped over in a
	 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
	 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
	 * implement the Iterable protocol, including `Array` and `Map`.
	 *
	 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @external Iterable
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
	 */

	// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
	var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator;

	/**
	 * Returns true if the provided object implements the Iterator protocol via
	 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
	 *
	 * @example
	 *
	 * var isIterable = require('iterall').isIterable
	 * isIterable([ 1, 2, 3 ]) // true
	 * isIterable('ABC') // true
	 * isIterable({ length: 1, 0: 'Alpha' }) // false
	 * isIterable({ key: 'value' }) // false
	 * isIterable(new Map()) // true
	 *
	 * @param obj
	 *   A value which might implement the Iterable protocol.
	 * @return {boolean} true if Iterable.
	 */
	function isIterable(obj) {
	  return !!getIteratorMethod(obj);
	}

	/**
	 * Returns true if the provided object implements the Array-like protocol via
	 * defining a positive-integer `length` property.
	 *
	 * @example
	 *
	 * var isArrayLike = require('iterall').isArrayLike
	 * isArrayLike([ 1, 2, 3 ]) // true
	 * isArrayLike('ABC') // true
	 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
	 * isArrayLike({ key: 'value' }) // false
	 * isArrayLike(new Map()) // false
	 *
	 * @param obj
	 *   A value which might implement the Array-like protocol.
	 * @return {boolean} true if Array-like.
	 */
	function isArrayLike$1(obj) {
	  var length = obj != null && obj.length;
	  return typeof length === 'number' && length >= 0 && length % 1 === 0;
	}

	/**
	 * Returns true if the provided object is an Object (i.e. not a string literal)
	 * and is either Iterable or Array-like.
	 *
	 * This may be used in place of [Array.isArray()][isArray] to determine if an
	 * object should be iterated-over. It always excludes string literals and
	 * includes Arrays (regardless of if it is Iterable). It also includes other
	 * Array-like objects such as NodeList, TypedArray, and Buffer.
	 *
	 * @example
	 *
	 * var isCollection = require('iterall').isCollection
	 * isCollection([ 1, 2, 3 ]) // true
	 * isCollection('ABC') // false
	 * isCollection({ length: 1, 0: 'Alpha' }) // true
	 * isCollection({ key: 'value' }) // false
	 * isCollection(new Map()) // true
	 *
	 * @example
	 *
	 * var forEach = require('iterall').forEach
	 * if (isCollection(obj)) {
	 *   forEach(obj, function (value) {
	 *     console.log(value)
	 *   })
	 * }
	 *
	 * @param obj
	 *   An Object value which might implement the Iterable or Array-like protocols.
	 * @return {boolean} true if Iterable or Array-like Object.
	 */
	function isCollection(obj) {
	  return Object(obj) === obj && (isArrayLike$1(obj) || isIterable(obj));
	}
	var isCollection_1 = isCollection;

	/**
	 * If the provided object implements the Iterator protocol, its Iterator object
	 * is returned. Otherwise returns undefined.
	 *
	 * @example
	 *
	 * var getIterator = require('iterall').getIterator
	 * var iterator = getIterator([ 1, 2, 3 ])
	 * iterator.next() // { value: 1, done: false }
	 * iterator.next() // { value: 2, done: false }
	 * iterator.next() // { value: 3, done: false }
	 * iterator.next() // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>} iterable
	 *   An Iterable object which is the source of an Iterator.
	 * @return {Iterator<T>} new Iterator instance.
	 */
	function getIterator(iterable) {
	  var method = getIteratorMethod(iterable);
	  if (method) {
	    return method.call(iterable);
	  }
	}

	/**
	 * If the provided object implements the Iterator protocol, the method
	 * responsible for producing its Iterator object is returned.
	 *
	 * This is used in rare cases for performance tuning. This method must be called
	 * with obj as the contextual this-argument.
	 *
	 * @example
	 *
	 * var getIteratorMethod = require('iterall').getIteratorMethod
	 * var myArray = [ 1, 2, 3 ]
	 * var method = getIteratorMethod(myArray)
	 * if (method) {
	 *   var iterator = method.call(myArray)
	 * }
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>} iterable
	 *   An Iterable object which defines an `@@iterator` method.
	 * @return {function(): Iterator<T>} `@@iterator` method.
	 */
	function getIteratorMethod(iterable) {
	  if (iterable != null) {
	    var method = SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR] || iterable['@@iterator'];
	    if (typeof method === 'function') {
	      return method;
	    }
	  }
	}

	/**
	 * Given an object which either implements the Iterable protocol or is
	 * Array-like, iterate over it, calling the `callback` at each iteration.
	 *
	 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
	 * However `forEach` adheres to the behavior of [Array#forEach][] described in
	 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
	 * also delegate to a `forEach` method on `collection` if one is defined,
	 * ensuring native performance for `Arrays`.
	 *
	 * Similar to [Array#forEach][], the `callback` function accepts three
	 * arguments, and is provided with `thisArg` as the calling context.
	 *
	 * Note: providing an infinite Iterator to forEach will produce an error.
	 *
	 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	 *
	 * @example
	 *
	 * var forEach = require('iterall').forEach
	 *
	 * forEach(myIterable, function (value, index, iterable) {
	 *   console.log(value, index, iterable === myIterable)
	 * })
	 *
	 * @example
	 *
	 * // ES6:
	 * for (let value of myIterable) {
	 *   console.log(value)
	 * }
	 *
	 * // Any JavaScript environment:
	 * forEach(myIterable, function (value) {
	 *   console.log(value)
	 * })
	 *
	 * @template T the type of each iterated value
	 * @param {Iterable<T>|{ length: number }} collection
	 *   The Iterable or array to iterate over.
	 * @param {function(T, number, object)} callback
	 *   Function to execute for each iteration, taking up to three arguments
	 * @param [thisArg]
	 *   Optional. Value to use as `this` when executing `callback`.
	 */
	function forEach(collection, callback, thisArg) {
	  if (collection != null) {
	    if (typeof collection.forEach === 'function') {
	      return collection.forEach(callback, thisArg);
	    }
	    var i = 0;
	    var iterator = getIterator(collection);
	    if (iterator) {
	      var step;
	      while (!(step = iterator.next()).done) {
	        callback.call(thisArg, step.value, i++, collection);
	        // Infinite Iterators could cause forEach to run forever.
	        // After a very large number of iterations, produce an error.
	        /* istanbul ignore if */
	        if (i > 9999999) {
	          throw new TypeError('Near-infinite iteration.');
	        }
	      }
	    } else if (isArrayLike$1(collection)) {
	      for (; i < collection.length; i++) {
	        if (collection.hasOwnProperty(i)) {
	          callback.call(thisArg, collection[i], i, collection);
	        }
	      }
	    }
	  }
	}
	var forEach_1 = forEach;

	/////////////////////////////////////////////////////
	//                                                 //
	//                 ASYNC ITERATORS                 //
	//                                                 //
	/////////////////////////////////////////////////////

	/**
	 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
	 * is a *protocol* which when implemented allows a JavaScript object to define
	 * an asynchronous iteration behavior, such as what values are looped over in
	 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
	 * loop or `iterall`'s {@link forAwaitEach} function.
	 *
	 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @external AsyncIterable
	 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
	 * @template T The type of each iterated value
	 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
	 *   A method which produces an AsyncIterator for this AsyncIterable.
	 */

	/**
	 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
	 * is a *protocol* which describes a standard way to produce and consume an
	 * asynchronous sequence of values, typically the values of the
	 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
	 *
	 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
	 * also as a `next()` method, however instead of an IteratorResult,
	 * calling this method returns a {@link Promise} for a IteratorResult.
	 *
	 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
	 * it can be utilized by any version of JavaScript.
	 *
	 * @external AsyncIterator
	 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
	 */

	// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
	var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator;

	/**
	 * A property name to be used as the name of an AsyncIterable's method
	 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
	 * Typically represents the value `Symbol.asyncIterator` but falls back to the
	 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
	 *
	 * Use `$$asyncIterator` for defining new AsyncIterables instead of
	 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
	 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
	 *
	 * @example
	 *
	 * var $$asyncIterator = require('iterall').$$asyncIterator
	 *
	 * function Chirper (to) {
	 *   this.to = to
	 * }
	 *
	 * Chirper.prototype[$$asyncIterator] = function () {
	 *   return {
	 *     to: this.to,
	 *     num: 0,
	 *     next () {
	 *       return new Promise(resolve => {
	 *         if (this.num >= this.to) {
	 *           resolve({ value: undefined, done: true })
	 *         } else {
	 *           setTimeout(() => {
	 *             resolve({ value: this.num++, done: false })
	 *           }, 1000)
	 *         }
	 *       })
	 *     }
	 *   }
	 * }
	 *
	 * var chirper = new Chirper(3)
	 * for await (var number of chirper) {
	 *   console.log(number) // 0 ...wait... 1 ...wait... 2
	 * }
	 *
	 * @type {Symbol|string}
	 */
	var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator';
	var $$asyncIterator_1 = $$asyncIterator;

	/**
	 * Returns true if the provided object implements the AsyncIterator protocol via
	 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
	 *
	 * @example
	 *
	 * var isAsyncIterable = require('iterall').isAsyncIterable
	 * isAsyncIterable(myStream) // true
	 * isAsyncIterable('ABC') // false
	 *
	 * @param obj
	 *   A value which might implement the AsyncIterable protocol.
	 * @return {boolean} true if AsyncIterable.
	 */
	function isAsyncIterable(obj) {
	  return !!getAsyncIteratorMethod(obj);
	}
	var isAsyncIterable_1 = isAsyncIterable;

	/**
	 * If the provided object implements the AsyncIterator protocol, its
	 * AsyncIterator object is returned. Otherwise returns undefined.
	 *
	 * @example
	 *
	 * var getAsyncIterator = require('iterall').getAsyncIterator
	 * var asyncIterator = getAsyncIterator(myStream)
	 * asyncIterator.next().then(console.log) // { value: 1, done: false }
	 * asyncIterator.next().then(console.log) // { value: 2, done: false }
	 * asyncIterator.next().then(console.log) // { value: 3, done: false }
	 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>} asyncIterable
	 *   An AsyncIterable object which is the source of an AsyncIterator.
	 * @return {AsyncIterator<T>} new AsyncIterator instance.
	 */
	function getAsyncIterator(asyncIterable) {
	  var method = getAsyncIteratorMethod(asyncIterable);
	  if (method) {
	    return method.call(asyncIterable);
	  }
	}
	var getAsyncIterator_1 = getAsyncIterator;

	/**
	 * If the provided object implements the AsyncIterator protocol, the method
	 * responsible for producing its AsyncIterator object is returned.
	 *
	 * This is used in rare cases for performance tuning. This method must be called
	 * with obj as the contextual this-argument.
	 *
	 * @example
	 *
	 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
	 * var method = getAsyncIteratorMethod(myStream)
	 * if (method) {
	 *   var asyncIterator = method.call(myStream)
	 * }
	 *
	 * @template T the type of each iterated value
	 * @param {AsyncIterable<T>} asyncIterable
	 *   An AsyncIterable object which defines an `@@asyncIterator` method.
	 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
	 */
	function getAsyncIteratorMethod(asyncIterable) {
	  if (asyncIterable != null) {
	    var method = SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR] || asyncIterable['@@asyncIterator'];
	    if (typeof method === 'function') {
	      return method;
	    }
	  }
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Returns true if a value is null, undefined, or NaN.
	 */
	function isNullish(value) {
	  return value === null || value === undefined || value !== value;
	}

	var _typeof2$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$9 = typeof Symbol === "function" && _typeof2$1(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2$1(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$1(obj);
	};

	/**
	 * Produces a GraphQL Value AST given a JavaScript value.
	 *
	 * A GraphQL type must be provided, which will be used to interpret different
	 * JavaScript values.
	 *
	 * | JSON Value    | GraphQL Value        |
	 * | ------------- | -------------------- |
	 * | Object        | Input Object         |
	 * | Array         | List                 |
	 * | Boolean       | Boolean              |
	 * | String        | String / Enum Value  |
	 * | Number        | Int / Float          |
	 * | Mixed         | Enum Value           |
	 * | null          | NullValue            |
	 *
	 */
	function astFromValue(value, type) {
	  // Ensure flow knows that we treat function params as const.
	  var _value = value;

	  if (isNonNullType(type)) {
	    var astValue = astFromValue(_value, type.ofType);
	    if (astValue && astValue.kind === Kind.NULL) {
	      return null;
	    }
	    return astValue;
	  }

	  // only explicit null, not undefined, NaN
	  if (_value === null) {
	    return { kind: Kind.NULL };
	  }

	  // undefined, NaN
	  if (isInvalid(_value)) {
	    return null;
	  }

	  // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
	  // the value is not an array, convert the value using the list's item type.
	  if (isListType(type)) {
	    var itemType = type.ofType;
	    if (isCollection_1(_value)) {
	      var valuesNodes = [];
	      forEach_1(_value, function (item) {
	        var itemNode = astFromValue(item, itemType);
	        if (itemNode) {
	          valuesNodes.push(itemNode);
	        }
	      });
	      return { kind: Kind.LIST, values: valuesNodes };
	    }
	    return astFromValue(_value, itemType);
	  }

	  // Populate the fields of the input object by creating ASTs from each value
	  // in the JavaScript object according to the fields in the input type.
	  if (isInputObjectType(type)) {
	    if (_value === null || (typeof _value === 'undefined' ? 'undefined' : _typeof$9(_value)) !== 'object') {
	      return null;
	    }
	    var fields = objectValues(type.getFields());
	    var fieldNodes = [];
	    fields.forEach(function (field) {
	      var fieldValue = astFromValue(_value[field.name], field.type);
	      if (fieldValue) {
	        fieldNodes.push({
	          kind: Kind.OBJECT_FIELD,
	          name: { kind: Kind.NAME, value: field.name },
	          value: fieldValue
	        });
	      }
	    });
	    return { kind: Kind.OBJECT, fields: fieldNodes };
	  }

	  if (isScalarType(type) || isEnumType(type)) {
	    // Since value is an internally represented value, it must be serialized
	    // to an externally represented value before converting into an AST.
	    var serialized = type.serialize(_value);
	    if (isNullish(serialized)) {
	      return null;
	    }

	    // Others serialize based on their corresponding JavaScript scalar types.
	    if (typeof serialized === 'boolean') {
	      return { kind: Kind.BOOLEAN, value: serialized };
	    }

	    // JavaScript numbers can be Int or Float values.
	    if (typeof serialized === 'number') {
	      var stringNum = String(serialized);
	      return integerStringRegExp.test(stringNum) ? { kind: Kind.INT, value: stringNum } : { kind: Kind.FLOAT, value: stringNum };
	    }

	    if (typeof serialized === 'string') {
	      // Enum types use Enum literals.
	      if (isEnumType(type)) {
	        return { kind: Kind.ENUM, value: serialized };
	      }

	      // ID types can use Int literals.
	      if (type === GraphQLID && integerStringRegExp.test(serialized)) {
	        return { kind: Kind.INT, value: serialized };
	      }

	      return {
	        kind: Kind.STRING,
	        value: serialized
	      };
	    }

	    throw new TypeError('Cannot convert value to AST: ' + String(serialized));
	  }

	  /* istanbul ignore next */
	  throw new Error('Unknown type: ' + type + '.');
	}

	/**
	 * IntValue:
	 *   - NegativeSign? 0
	 *   - NegativeSign? NonZeroDigit ( Digit+ )?
	 */
	var integerStringRegExp = /^-?(0|[1-9][0-9]*)$/;

	/**
	 * A visitor is comprised of visit functions, which are called on each node
	 * during the visitor's traversal.
	 */

	/**
	 * A visitor is provided to visit, it contains the collection of
	 * relevant functions to be called during the visitor's traversal.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var QueryDocumentKeys = {
	  Name: [],

	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],

	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name',
	  // Note: fragment variable definitions are experimental and may be changed
	  // or removed in the future.
	  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  NullValue: [],
	  EnumValue: [],
	  ListValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],

	  Directive: ['name', 'arguments'],

	  NamedType: ['name'],
	  ListType: ['type'],
	  NonNullType: ['type'],

	  SchemaDefinition: ['directives', 'operationTypes'],
	  OperationTypeDefinition: ['type'],

	  ScalarTypeDefinition: ['description', 'name', 'directives'],
	  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
	  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
	  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
	  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
	  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
	  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
	  EnumValueDefinition: ['description', 'name', 'directives'],
	  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

	  ScalarTypeExtension: ['name', 'directives'],
	  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
	  InterfaceTypeExtension: ['name', 'directives', 'fields'],
	  UnionTypeExtension: ['name', 'directives', 'types'],
	  EnumTypeExtension: ['name', 'directives', 'values'],
	  InputObjectTypeExtension: ['name', 'directives', 'fields'],

	  DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
	};

	/**
	 * A KeyMap describes each the traversable properties of each kind of node.
	 */

	var BREAK = {};

	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traversal, and calling the
	 * leave function after visiting that node and all of its child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     const editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */
	function visit(root, visitor) {
	  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

	  /* eslint-disable no-undef-init */
	  var stack = undefined;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var node = undefined;
	  var key = undefined;
	  var parent = undefined;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;
	  /* eslint-enable no-undef-init */

	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var isEdited = isLeaving && edits.length !== 0;
	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path[path.length - 1];
	      node = parent;
	      parent = ancestors.pop();
	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};
	          for (var k in node) {
	            if (node.hasOwnProperty(k)) {
	              clone[k] = node[k];
	            }
	          }
	          node = clone;
	        }
	        var editOffset = 0;
	        for (var ii = 0; ii < edits.length; ii++) {
	          var editKey = edits[ii][0];
	          var editValue = edits[ii][1];
	          if (inArray) {
	            editKey -= editOffset;
	          }
	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }
	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;
	      if (node === null || node === undefined) {
	        continue;
	      }
	      if (parent) {
	        path.push(key);
	      }
	    }

	    var result = void 0;
	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
	      }
	      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);

	        if (result === BREAK) {
	          break;
	        }

	        if (result === false) {
	          if (!isLeaving) {
	            path.pop();
	            continue;
	          }
	        } else if (result !== undefined) {
	          edits.push([key, result]);
	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }

	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }

	    if (isLeaving) {
	      path.pop();
	    } else {
	      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];
	      if (parent) {
	        ancestors.push(parent);
	      }
	      parent = node;
	    }
	  } while (stack !== undefined);

	  if (edits.length !== 0) {
	    newRoot = edits[edits.length - 1][1];
	  }

	  return newRoot;
	}

	function isNode(maybeNode) {
	  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
	}

	/**
	 * Creates a new visitor instance which delegates to many visitors to run in
	 * parallel. Each visitor will be visited for each node before moving on.
	 *
	 * If a prior visitor edits a node, no following visitors will see that node.
	 */
	function visitInParallel(visitors) {
	  var skipping = new Array(visitors.length);

	  return {
	    enter: function enter(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === false) {
	              skipping[i] = node;
	            } else if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined) {
	              return result;
	            }
	          }
	        }
	      }
	    },
	    leave: function leave(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined && result !== false) {
	              return result;
	            }
	          }
	        } else if (skipping[i] === node) {
	          skipping[i] = null;
	        }
	      }
	    }
	  };
	}

	/**
	 * Creates a new visitor instance which maintains a provided TypeInfo instance
	 * along with visiting visitor.
	 */
	function visitWithTypeInfo(typeInfo, visitor) {
	  return {
	    enter: function enter(node) {
	      typeInfo.enter(node);
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
	      if (fn) {
	        var result = fn.apply(visitor, arguments);
	        if (result !== undefined) {
	          typeInfo.leave(node);
	          if (isNode(result)) {
	            typeInfo.enter(result);
	          }
	        }
	        return result;
	      }
	    },
	    leave: function leave(node) {
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
	      var result = void 0;
	      if (fn) {
	        result = fn.apply(visitor, arguments);
	      }
	      typeInfo.leave(node);
	      return result;
	    }
	  };
	}

	/**
	 * Given a visitor instance, if it is leaving or not, and a node kind, return
	 * the function the visitor runtime should call.
	 */
	function getVisitFn(visitor, kind, isLeaving) {
	  var kindVisitor = visitor[kind];
	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }
	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	  } else {
	    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
	    if (specificVisitor) {
	      if (typeof specificVisitor === 'function') {
	        // { enter() {}, leave() {} }
	        return specificVisitor;
	      }
	      var specificKindVisitor = specificVisitor[kind];
	      if (typeof specificKindVisitor === 'function') {
	        // { enter: { Kind() {} }, leave: { Kind() {} } }
	        return specificKindVisitor;
	      }
	    }
	  }
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */
	function print(ast) {
	  return visit(ast, { leave: printDocASTReducer });
	}

	var printDocASTReducer = {
	  Name: function Name(node) {
	    return node.value;
	  },
	  Variable: function Variable(node) {
	    return '$' + node.name;
	  },

	  // Document

	  Document: function Document(node) {
	    return join(node.definitions, '\n\n') + '\n';
	  },

	  OperationDefinition: function OperationDefinition(node) {
	    var op = node.operation;
	    var name = node.name;
	    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
	    var directives = join(node.directives, ' ');
	    var selectionSet = node.selectionSet;
	    // Anonymous queries with no directives or variable definitions can use
	    // the query short form.
	    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
	  },

	  VariableDefinition: function VariableDefinition(_ref) {
	    var variable = _ref.variable,
	        type = _ref.type,
	        defaultValue = _ref.defaultValue;
	    return variable + ': ' + type + wrap(' = ', defaultValue);
	  },

	  SelectionSet: function SelectionSet(_ref2) {
	    var selections = _ref2.selections;
	    return block(selections);
	  },

	  Field: function Field(_ref3) {
	    var alias = _ref3.alias,
	        name = _ref3.name,
	        args = _ref3.arguments,
	        directives = _ref3.directives,
	        selectionSet = _ref3.selectionSet;
	    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
	  },

	  Argument: function Argument(_ref4) {
	    var name = _ref4.name,
	        value = _ref4.value;
	    return name + ': ' + value;
	  },

	  // Fragments

	  FragmentSpread: function FragmentSpread(_ref5) {
	    var name = _ref5.name,
	        directives = _ref5.directives;
	    return '...' + name + wrap(' ', join(directives, ' '));
	  },

	  InlineFragment: function InlineFragment(_ref6) {
	    var typeCondition = _ref6.typeCondition,
	        directives = _ref6.directives,
	        selectionSet = _ref6.selectionSet;
	    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
	  },

	  FragmentDefinition: function FragmentDefinition(_ref7) {
	    var name = _ref7.name,
	        typeCondition = _ref7.typeCondition,
	        variableDefinitions = _ref7.variableDefinitions,
	        directives = _ref7.directives,
	        selectionSet = _ref7.selectionSet;
	    return (
	      // Note: fragment variable definitions are experimental and may be changed
	      // or removed in the future.
	      'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
	    );
	  },

	  // Value

	  IntValue: function IntValue(_ref8) {
	    var value = _ref8.value;
	    return value;
	  },
	  FloatValue: function FloatValue(_ref9) {
	    var value = _ref9.value;
	    return value;
	  },
	  StringValue: function StringValue(_ref10, key) {
	    var value = _ref10.value,
	        isBlockString = _ref10.block;
	    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
	  },
	  BooleanValue: function BooleanValue(_ref11) {
	    var value = _ref11.value;
	    return value ? 'true' : 'false';
	  },
	  NullValue: function NullValue() {
	    return 'null';
	  },
	  EnumValue: function EnumValue(_ref12) {
	    var value = _ref12.value;
	    return value;
	  },
	  ListValue: function ListValue(_ref13) {
	    var values = _ref13.values;
	    return '[' + join(values, ', ') + ']';
	  },
	  ObjectValue: function ObjectValue(_ref14) {
	    var fields = _ref14.fields;
	    return '{' + join(fields, ', ') + '}';
	  },
	  ObjectField: function ObjectField(_ref15) {
	    var name = _ref15.name,
	        value = _ref15.value;
	    return name + ': ' + value;
	  },

	  // Directive

	  Directive: function Directive(_ref16) {
	    var name = _ref16.name,
	        args = _ref16.arguments;
	    return '@' + name + wrap('(', join(args, ', '), ')');
	  },

	  // Type

	  NamedType: function NamedType(_ref17) {
	    var name = _ref17.name;
	    return name;
	  },
	  ListType: function ListType(_ref18) {
	    var type = _ref18.type;
	    return '[' + type + ']';
	  },
	  NonNullType: function NonNullType(_ref19) {
	    var type = _ref19.type;
	    return type + '!';
	  },

	  // Type System Definitions

	  SchemaDefinition: function SchemaDefinition(_ref20) {
	    var directives = _ref20.directives,
	        operationTypes = _ref20.operationTypes;
	    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
	  },

	  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
	    var operation = _ref21.operation,
	        type = _ref21.type;
	    return operation + ': ' + type;
	  },

	  ScalarTypeDefinition: addDescription(function (_ref22) {
	    var name = _ref22.name,
	        directives = _ref22.directives;
	    return join(['scalar', name, join(directives, ' ')], ' ');
	  }),

	  ObjectTypeDefinition: addDescription(function (_ref23) {
	    var name = _ref23.name,
	        interfaces = _ref23.interfaces,
	        directives = _ref23.directives,
	        fields = _ref23.fields;
	    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
	  }),

	  FieldDefinition: addDescription(function (_ref24) {
	    var name = _ref24.name,
	        args = _ref24.arguments,
	        type = _ref24.type,
	        directives = _ref24.directives;
	    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
	  }),

	  InputValueDefinition: addDescription(function (_ref25) {
	    var name = _ref25.name,
	        type = _ref25.type,
	        defaultValue = _ref25.defaultValue,
	        directives = _ref25.directives;
	    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
	  }),

	  InterfaceTypeDefinition: addDescription(function (_ref26) {
	    var name = _ref26.name,
	        directives = _ref26.directives,
	        fields = _ref26.fields;
	    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
	  }),

	  UnionTypeDefinition: addDescription(function (_ref27) {
	    var name = _ref27.name,
	        directives = _ref27.directives,
	        types = _ref27.types;
	    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
	  }),

	  EnumTypeDefinition: addDescription(function (_ref28) {
	    var name = _ref28.name,
	        directives = _ref28.directives,
	        values = _ref28.values;
	    return join(['enum', name, join(directives, ' '), block(values)], ' ');
	  }),

	  EnumValueDefinition: addDescription(function (_ref29) {
	    var name = _ref29.name,
	        directives = _ref29.directives;
	    return join([name, join(directives, ' ')], ' ');
	  }),

	  InputObjectTypeDefinition: addDescription(function (_ref30) {
	    var name = _ref30.name,
	        directives = _ref30.directives,
	        fields = _ref30.fields;
	    return join(['input', name, join(directives, ' '), block(fields)], ' ');
	  }),

	  ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
	    var name = _ref31.name,
	        directives = _ref31.directives;
	    return join(['extend scalar', name, join(directives, ' ')], ' ');
	  },

	  ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
	    var name = _ref32.name,
	        interfaces = _ref32.interfaces,
	        directives = _ref32.directives,
	        fields = _ref32.fields;
	    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
	  },

	  InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
	    var name = _ref33.name,
	        directives = _ref33.directives,
	        fields = _ref33.fields;
	    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
	  },

	  UnionTypeExtension: function UnionTypeExtension(_ref34) {
	    var name = _ref34.name,
	        directives = _ref34.directives,
	        types = _ref34.types;
	    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
	  },

	  EnumTypeExtension: function EnumTypeExtension(_ref35) {
	    var name = _ref35.name,
	        directives = _ref35.directives,
	        values = _ref35.values;
	    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
	  },

	  InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
	    var name = _ref36.name,
	        directives = _ref36.directives,
	        fields = _ref36.fields;
	    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
	  },

	  DirectiveDefinition: addDescription(function (_ref37) {
	    var name = _ref37.name,
	        args = _ref37.arguments,
	        locations = _ref37.locations;
	    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
	  })
	};

	function addDescription(cb) {
	  return function (node) {
	    return join([node.description, cb(node)], '\n');
	  };
	}

	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print all items together separated by separator if provided
	 */
	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return x;
	  }).join(separator || '') : '';
	}

	/**
	 * Given array, print each item on its own line, wrapped in an
	 * indented "{ }" block.
	 */
	function block(array) {
	  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
	}

	/**
	 * If maybeString is not null or empty, then wrap with start and end, otherwise
	 * print an empty string.
	 */
	function wrap(start, maybeString, end) {
	  return maybeString ? start + maybeString + (end || '') : '';
	}

	function indent(maybeString) {
	  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
	}

	/**
	 * Print a block string in the indented block form by adding a leading and
	 * trailing blank line. However, if a block string starts with whitespace and is
	 * a single-line, adding a leading blank line would strip that whitespace.
	 */
	function printBlockString(value, isDescription) {
	  var escaped = value.replace(/"""/g, '\\"""');
	  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + escaped.replace(/"$/, '"\n') + '"""' : '"""\n' + (isDescription ? escaped : indent(escaped)) + '\n"""';
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var __Schema = new GraphQLObjectType({
	  name: '__Schema',
	  isIntrospection: true,
	  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
	  fields: function fields() {
	    return {
	      types: {
	        description: 'A list of all types supported by this server.',
	        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Type))),
	        resolve: function resolve(schema) {
	          return objectValues(schema.getTypeMap());
	        }
	      },
	      queryType: {
	        description: 'The type that query operations will be rooted at.',
	        type: GraphQLNonNull(__Type),
	        resolve: function resolve(schema) {
	          return schema.getQueryType();
	        }
	      },
	      mutationType: {
	        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getMutationType();
	        }
	      },
	      subscriptionType: {
	        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getSubscriptionType();
	        }
	      },
	      directives: {
	        description: 'A list of all directives supported by this server.',
	        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Directive))),
	        resolve: function resolve(schema) {
	          return schema.getDirectives();
	        }
	      }
	    };
	  }
	});

	var __Directive = new GraphQLObjectType({
	  name: '__Directive',
	  isIntrospection: true,
	  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + "\n\nIn some cases, you need to provide options to alter GraphQL's " + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
	  fields: function fields() {
	    return {
	      name: { type: GraphQLNonNull(GraphQLString) },
	      description: { type: GraphQLString },
	      locations: {
	        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__DirectiveLocation)))
	      },
	      args: {
	        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
	        resolve: function resolve(directive) {
	          return directive.args || [];
	        }
	      },
	      // NOTE: the following three fields are deprecated and are no longer part
	      // of the GraphQL specification.
	      onOperation: {
	        deprecationReason: 'Use `locations`.',
	        type: GraphQLNonNull(GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(DirectiveLocation.SUBSCRIPTION) !== -1;
	        }
	      },
	      onFragment: {
	        deprecationReason: 'Use `locations`.',
	        type: GraphQLNonNull(GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
	        }
	      },
	      onField: {
	        deprecationReason: 'Use `locations`.',
	        type: GraphQLNonNull(GraphQLBoolean),
	        resolve: function resolve(d) {
	          return d.locations.indexOf(DirectiveLocation.FIELD) !== -1;
	        }
	      }
	    };
	  }
	});

	var __DirectiveLocation = new GraphQLEnumType({
	  name: '__DirectiveLocation',
	  isIntrospection: true,
	  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
	  values: {
	    QUERY: {
	      value: DirectiveLocation.QUERY,
	      description: 'Location adjacent to a query operation.'
	    },
	    MUTATION: {
	      value: DirectiveLocation.MUTATION,
	      description: 'Location adjacent to a mutation operation.'
	    },
	    SUBSCRIPTION: {
	      value: DirectiveLocation.SUBSCRIPTION,
	      description: 'Location adjacent to a subscription operation.'
	    },
	    FIELD: {
	      value: DirectiveLocation.FIELD,
	      description: 'Location adjacent to a field.'
	    },
	    FRAGMENT_DEFINITION: {
	      value: DirectiveLocation.FRAGMENT_DEFINITION,
	      description: 'Location adjacent to a fragment definition.'
	    },
	    FRAGMENT_SPREAD: {
	      value: DirectiveLocation.FRAGMENT_SPREAD,
	      description: 'Location adjacent to a fragment spread.'
	    },
	    INLINE_FRAGMENT: {
	      value: DirectiveLocation.INLINE_FRAGMENT,
	      description: 'Location adjacent to an inline fragment.'
	    },
	    SCHEMA: {
	      value: DirectiveLocation.SCHEMA,
	      description: 'Location adjacent to a schema definition.'
	    },
	    SCALAR: {
	      value: DirectiveLocation.SCALAR,
	      description: 'Location adjacent to a scalar definition.'
	    },
	    OBJECT: {
	      value: DirectiveLocation.OBJECT,
	      description: 'Location adjacent to an object type definition.'
	    },
	    FIELD_DEFINITION: {
	      value: DirectiveLocation.FIELD_DEFINITION,
	      description: 'Location adjacent to a field definition.'
	    },
	    ARGUMENT_DEFINITION: {
	      value: DirectiveLocation.ARGUMENT_DEFINITION,
	      description: 'Location adjacent to an argument definition.'
	    },
	    INTERFACE: {
	      value: DirectiveLocation.INTERFACE,
	      description: 'Location adjacent to an interface definition.'
	    },
	    UNION: {
	      value: DirectiveLocation.UNION,
	      description: 'Location adjacent to a union definition.'
	    },
	    ENUM: {
	      value: DirectiveLocation.ENUM,
	      description: 'Location adjacent to an enum definition.'
	    },
	    ENUM_VALUE: {
	      value: DirectiveLocation.ENUM_VALUE,
	      description: 'Location adjacent to an enum value definition.'
	    },
	    INPUT_OBJECT: {
	      value: DirectiveLocation.INPUT_OBJECT,
	      description: 'Location adjacent to an input object type definition.'
	    },
	    INPUT_FIELD_DEFINITION: {
	      value: DirectiveLocation.INPUT_FIELD_DEFINITION,
	      description: 'Location adjacent to an input object field definition.'
	    }
	  }
	});

	var __Type = new GraphQLObjectType({
	  name: '__Type',
	  isIntrospection: true,
	  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
	  fields: function fields() {
	    return {
	      kind: {
	        type: GraphQLNonNull(__TypeKind),
	        resolve: function resolve(type) {
	          if (isScalarType(type)) {
	            return TypeKind.SCALAR;
	          } else if (isObjectType(type)) {
	            return TypeKind.OBJECT;
	          } else if (isInterfaceType(type)) {
	            return TypeKind.INTERFACE;
	          } else if (isUnionType(type)) {
	            return TypeKind.UNION;
	          } else if (isEnumType(type)) {
	            return TypeKind.ENUM;
	          } else if (isInputObjectType(type)) {
	            return TypeKind.INPUT_OBJECT;
	          } else if (isListType(type)) {
	            return TypeKind.LIST;
	          } else if (isNonNullType(type)) {
	            return TypeKind.NON_NULL;
	          }
	          throw new Error('Unknown kind of type: ' + type);
	        }
	      },
	      name: { type: GraphQLString },
	      description: { type: GraphQLString },
	      fields: {
	        type: GraphQLList(GraphQLNonNull(__Field)),
	        args: {
	          includeDeprecated: { type: GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref) {
	          var includeDeprecated = _ref.includeDeprecated;

	          if (isObjectType(type) || isInterfaceType(type)) {
	            var fields = objectValues(type.getFields());
	            if (!includeDeprecated) {
	              fields = fields.filter(function (field) {
	                return !field.deprecationReason;
	              });
	            }
	            return fields;
	          }
	          return null;
	        }
	      },
	      interfaces: {
	        type: GraphQLList(GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (isObjectType(type)) {
	            return type.getInterfaces();
	          }
	        }
	      },
	      possibleTypes: {
	        type: GraphQLList(GraphQLNonNull(__Type)),
	        resolve: function resolve(type, args, context, _ref2) {
	          var schema = _ref2.schema;

	          if (isAbstractType(type)) {
	            return schema.getPossibleTypes(type);
	          }
	        }
	      },
	      enumValues: {
	        type: GraphQLList(GraphQLNonNull(__EnumValue)),
	        args: {
	          includeDeprecated: { type: GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref3) {
	          var includeDeprecated = _ref3.includeDeprecated;

	          if (isEnumType(type)) {
	            var values = type.getValues();
	            if (!includeDeprecated) {
	              values = values.filter(function (value) {
	                return !value.deprecationReason;
	              });
	            }
	            return values;
	          }
	        }
	      },
	      inputFields: {
	        type: GraphQLList(GraphQLNonNull(__InputValue)),
	        resolve: function resolve(type) {
	          if (isInputObjectType(type)) {
	            return objectValues(type.getFields());
	          }
	        }
	      },
	      ofType: { type: __Type }
	    };
	  }
	});

	var __Field = new GraphQLObjectType({
	  name: '__Field',
	  isIntrospection: true,
	  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
	  fields: function fields() {
	    return {
	      name: { type: GraphQLNonNull(GraphQLString) },
	      description: { type: GraphQLString },
	      args: {
	        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
	        resolve: function resolve(field) {
	          return field.args || [];
	        }
	      },
	      type: { type: GraphQLNonNull(__Type) },
	      isDeprecated: { type: GraphQLNonNull(GraphQLBoolean) },
	      deprecationReason: {
	        type: GraphQLString
	      }
	    };
	  }
	});

	var __InputValue = new GraphQLObjectType({
	  name: '__InputValue',
	  isIntrospection: true,
	  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
	  fields: function fields() {
	    return {
	      name: { type: GraphQLNonNull(GraphQLString) },
	      description: { type: GraphQLString },
	      type: { type: GraphQLNonNull(__Type) },
	      defaultValue: {
	        type: GraphQLString,
	        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
	        resolve: function resolve(inputVal) {
	          return isInvalid(inputVal.defaultValue) ? null : print(astFromValue(inputVal.defaultValue, inputVal.type));
	        }
	      }
	    };
	  }
	});

	var __EnumValue = new GraphQLObjectType({
	  name: '__EnumValue',
	  isIntrospection: true,
	  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
	  fields: function fields() {
	    return {
	      name: { type: GraphQLNonNull(GraphQLString) },
	      description: { type: GraphQLString },
	      isDeprecated: { type: GraphQLNonNull(GraphQLBoolean) },
	      deprecationReason: {
	        type: GraphQLString
	      }
	    };
	  }
	});

	var TypeKind = {
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  LIST: 'LIST',
	  NON_NULL: 'NON_NULL'
	};

	var __TypeKind = new GraphQLEnumType({
	  name: '__TypeKind',
	  isIntrospection: true,
	  description: 'An enum describing what kind of type a given `__Type` is.',
	  values: {
	    SCALAR: {
	      value: TypeKind.SCALAR,
	      description: 'Indicates this type is a scalar.'
	    },
	    OBJECT: {
	      value: TypeKind.OBJECT,
	      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
	    },
	    INTERFACE: {
	      value: TypeKind.INTERFACE,
	      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
	    },
	    UNION: {
	      value: TypeKind.UNION,
	      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
	    },
	    ENUM: {
	      value: TypeKind.ENUM,
	      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
	    },
	    INPUT_OBJECT: {
	      value: TypeKind.INPUT_OBJECT,
	      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
	    },
	    LIST: {
	      value: TypeKind.LIST,
	      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
	    },
	    NON_NULL: {
	      value: TypeKind.NON_NULL,
	      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
	    }
	  }
	});

	/**
	 * Note that these are GraphQLField and not GraphQLFieldConfig,
	 * so the format for args is different.
	 */

	var SchemaMetaFieldDef = {
	  name: '__schema',
	  type: GraphQLNonNull(__Schema),
	  description: 'Access the current type schema of this server.',
	  args: [],
	  resolve: function resolve(source, args, context, _ref4) {
	    var schema = _ref4.schema;
	    return schema;
	  }
	};

	var TypeMetaFieldDef = {
	  name: '__type',
	  type: __Type,
	  description: 'Request the type information of a single type.',
	  args: [{ name: 'name', type: GraphQLNonNull(GraphQLString) }],
	  resolve: function resolve(source, _ref5, context, _ref6) {
	    var name = _ref5.name;
	    var schema = _ref6.schema;
	    return schema.getType(name);
	  }
	};

	var TypeNameMetaFieldDef = {
	  name: '__typename',
	  type: GraphQLNonNull(GraphQLString),
	  description: 'The name of the current Object type at runtime.',
	  args: [],
	  resolve: function resolve(source, args, context, _ref7) {
	    var parentType = _ref7.parentType;
	    return parentType.name;
	  }
	};

	var introspectionTypes = [__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind];

	function isIntrospectionType(type) {
	  return isNamedType(type) && (
	  // Would prefer to use introspectionTypes.some(), however %checks needs
	  // a simple expression.
	  type.name === __Schema.name || type.name === __Directive.name || type.name === __DirectiveLocation.name || type.name === __Type.name || type.name === __Field.name || type.name === __InputValue.name || type.name === __EnumValue.name || type.name === __TypeKind.name);
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function find(list, predicate) {
	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return list[i];
	    }
	  }
	}

	var _typeof2$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$a = typeof Symbol === "function" && _typeof2$2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2$2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$2(obj);
	};

	function _classCallCheck$2(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Test if the given value is a GraphQL schema.
	 */

	// eslint-disable-next-line no-redeclare
	function isSchema(schema) {
	  return instanceOf(schema, GraphQLSchema);
	}

	/**
	 * Schema Definition
	 *
	 * A Schema is created by supplying the root types of each type of operation,
	 * query and mutation (optional). A schema definition is then supplied to the
	 * validator and executor.
	 *
	 * Example:
	 *
	 *     const MyAppSchema = new GraphQLSchema({
	 *       query: MyAppQueryRootType,
	 *       mutation: MyAppMutationRootType,
	 *     })
	 *
	 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
	 * the exact list of directives represented and allowed. If `directives` is not
	 * provided then a default set of the specified directives (e.g. @include and
	 * @skip) will be used. If you wish to provide *additional* directives to these
	 * specified directives, you must explicitly declare them. Example:
	 *
	 *     const MyAppSchema = new GraphQLSchema({
	 *       ...
	 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
	 *     })
	 *
	 */
	var GraphQLSchema = function () {
	  // Used as a cache for validateSchema().
	  function GraphQLSchema(config) {
	    var _this = this;

	    _classCallCheck$2(this, GraphQLSchema);

	    // If this schema was built from a source known to be valid, then it may be
	    // marked with assumeValid to avoid an additional type system validation.
	    if (config && config.assumeValid) {
	      this.__validationErrors = [];
	    } else {
	      // Otherwise check for common mistakes during construction to produce
	      // clear and early error messages.
	      !((typeof config === 'undefined' ? 'undefined' : _typeof$a(config)) === 'object') ? invariant(0, 'Must provide configuration object.') : void 0;
	      !(!config.types || Array.isArray(config.types)) ? invariant(0, '"types" must be Array if provided but got: ' + String(config.types) + '.') : void 0;
	      !(!config.directives || Array.isArray(config.directives)) ? invariant(0, '"directives" must be Array if provided but got: ' + (String(config.directives) + '.')) : void 0;
	      !(!config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames)) ? invariant(0, '"allowedLegacyNames" must be Array if provided but got: ' + (String(config.allowedLegacyNames) + '.')) : void 0;
	      this.__allowedLegacyNames = config.allowedLegacyNames;
	    }

	    this._queryType = config.query;
	    this._mutationType = config.mutation;
	    this._subscriptionType = config.subscription;
	    // Provide specified directives (e.g. @include and @skip) by default.
	    this._directives = config.directives || specifiedDirectives;
	    this.astNode = config.astNode;

	    // Build type map now to detect any errors within this schema.
	    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), __Schema];

	    var types = config.types;
	    if (types) {
	      initialTypes = initialTypes.concat(types);
	    }

	    // Keep track of all types referenced within the schema.
	    var typeMap = Object.create(null);

	    // First by deeply visiting all initial types.
	    typeMap = initialTypes.reduce(typeMapReducer, typeMap);

	    // Then by deeply visiting all directive types.
	    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap);

	    // Storing the resulting map for reference by the schema.
	    this._typeMap = typeMap;

	    // Keep track of all implementations by interface name.
	    this._implementations = Object.create(null);
	    Object.keys(this._typeMap).forEach(function (typeName) {
	      var type = _this._typeMap[typeName];
	      if (isObjectType(type)) {
	        type.getInterfaces().forEach(function (iface) {
	          var impls = _this._implementations[iface.name];
	          if (impls) {
	            impls.push(type);
	          } else {
	            _this._implementations[iface.name] = [type];
	          }
	        });
	      }
	    });
	  }
	  // Referenced by validateSchema().


	  GraphQLSchema.prototype.getQueryType = function getQueryType() {
	    return this._queryType;
	  };

	  GraphQLSchema.prototype.getMutationType = function getMutationType() {
	    return this._mutationType;
	  };

	  GraphQLSchema.prototype.getSubscriptionType = function getSubscriptionType() {
	    return this._subscriptionType;
	  };

	  GraphQLSchema.prototype.getTypeMap = function getTypeMap() {
	    return this._typeMap;
	  };

	  GraphQLSchema.prototype.getType = function getType(name) {
	    return this.getTypeMap()[name];
	  };

	  GraphQLSchema.prototype.getPossibleTypes = function getPossibleTypes(abstractType) {
	    if (isUnionType(abstractType)) {
	      return abstractType.getTypes();
	    }
	    return this._implementations[abstractType.name];
	  };

	  GraphQLSchema.prototype.isPossibleType = function isPossibleType(abstractType, possibleType) {
	    var possibleTypeMap = this._possibleTypeMap;
	    if (!possibleTypeMap) {
	      this._possibleTypeMap = possibleTypeMap = Object.create(null);
	    }

	    if (!possibleTypeMap[abstractType.name]) {
	      var possibleTypes = this.getPossibleTypes(abstractType);
	      !Array.isArray(possibleTypes) ? invariant(0, 'Could not find possible implementing types for ' + abstractType.name + ' ' + 'in schema. Check that schema.types is defined and is an array of ' + 'all possible types in the schema.') : void 0;
	      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
	        return map[type.name] = true, map;
	      }, Object.create(null));
	    }

	    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
	  };

	  GraphQLSchema.prototype.getDirectives = function getDirectives() {
	    return this._directives;
	  };

	  GraphQLSchema.prototype.getDirective = function getDirective(name) {
	    return find(this.getDirectives(), function (directive) {
	      return directive.name === name;
	    });
	  };

	  return GraphQLSchema;
	}();

	function typeMapReducer(map, type) {
	  if (!type) {
	    return map;
	  }
	  if (isWrappingType(type)) {
	    return typeMapReducer(map, type.ofType);
	  }
	  if (map[type.name]) {
	    !(map[type.name] === type) ? invariant(0, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type.name + '".')) : void 0;
	    return map;
	  }
	  map[type.name] = type;

	  var reducedMap = map;

	  if (isUnionType(type)) {
	    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
	  }

	  if (isObjectType(type)) {
	    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
	  }

	  if (isObjectType(type) || isInterfaceType(type)) {
	    objectValues(type.getFields()).forEach(function (field) {
	      if (field.args) {
	        var fieldArgTypes = field.args.map(function (arg) {
	          return arg.type;
	        });
	        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
	      }
	      reducedMap = typeMapReducer(reducedMap, field.type);
	    });
	  }

	  if (isInputObjectType(type)) {
	    objectValues(type.getFields()).forEach(function (field) {
	      reducedMap = typeMapReducer(reducedMap, field.type);
	    });
	  }

	  return reducedMap;
	}

	function typeMapDirectiveReducer(map, directive) {
	  // Directives are not validated until validateSchema() is called.
	  if (!isDirective(directive)) {
	    return map;
	  }
	  return directive.args.reduce(function (_map, arg) {
	    return typeMapReducer(_map, arg.type);
	  }, map);
	}

	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function getLocation(source, position) {
	  var lineRegexp = /\r\n|[\n\r]/g;
	  var line = 1;
	  var column = position + 1;
	  var match = void 0;
	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }
	  return { line: line, column: column };
	}

	/**
	 * Represents a location in a Source.
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Prints a GraphQLError to a string, representing useful location information
	 * about the error's position in the source.
	 */
	function printError(error) {
	  var printedLocations = [];
	  if (error.nodes) {
	    error.nodes.forEach(function (node) {
	      if (node.loc) {
	        printedLocations.push(highlightSourceAtLocation(node.loc.source, getLocation(node.loc.source, node.loc.start)));
	      }
	    });
	  } else if (error.source && error.locations) {
	    var source = error.source;
	    error.locations.forEach(function (location) {
	      printedLocations.push(highlightSourceAtLocation(source, location));
	    });
	  }
	  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
	}

	/**
	 * Render a helpful description of the location of the error in the GraphQL
	 * Source document.
	 */
	function highlightSourceAtLocation(source, location) {
	  var line = location.line;
	  var lineOffset = source.locationOffset.line - 1;
	  var columnOffset = getColumnOffset(source, location);
	  var contextLine = line + lineOffset;
	  var contextColumn = location.column + columnOffset;
	  var prevLineNum = (contextLine - 1).toString();
	  var lineNum = contextLine.toString();
	  var nextLineNum = (contextLine + 1).toString();
	  var padLen = nextLineNum.length;
	  var lines = source.body.split(/\r\n|[\n\r]/g);
	  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
	  var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
	  return outputLines.filter(Boolean).join('\n');
	}

	function getColumnOffset(source, location) {
	  return location.line === 1 ? source.locationOffset.column - 1 : 0;
	}

	function whitespace(len) {
	  return Array(len + 1).join(' ');
	}

	function lpad(len, str) {
	  return whitespace(len - str.length) + str;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * A GraphQLError describes an Error found during the parse, validate, or
	 * execute phases of performing a GraphQL operation. In addition to a message
	 * and stack trace, it also includes information about the locations in a
	 * GraphQL document and/or execution result that correspond to the Error.
	 */

	function GraphQLError( // eslint-disable-line no-redeclare
	message, nodes, source, positions, path, originalError, extensions) {
	  // Compute list of blame nodes.
	  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

	  // Compute locations in the source for the given nodes/positions.
	  var _source = source;
	  if (!_source && _nodes) {
	    var node = _nodes[0];
	    _source = node && node.loc && node.loc.source;
	  }

	  var _positions = positions;
	  if (!_positions && _nodes) {
	    _positions = _nodes.reduce(function (list, node) {
	      if (node.loc) {
	        list.push(node.loc.start);
	      }
	      return list;
	    }, []);
	  }
	  if (_positions && _positions.length === 0) {
	    _positions = undefined;
	  }

	  var _locations = void 0;
	  if (positions && source) {
	    var providedSource = source;
	    _locations = positions.map(function (pos) {
	      return getLocation(providedSource, pos);
	    });
	  } else if (_nodes) {
	    _locations = _nodes.reduce(function (list, node) {
	      if (node.loc) {
	        list.push(getLocation(node.loc.source, node.loc.start));
	      }
	      return list;
	    }, []);
	  }

	  Object.defineProperties(this, {
	    message: {
	      value: message,
	      // By being enumerable, JSON.stringify will include `message` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true,
	      writable: true
	    },
	    locations: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: _locations || undefined,
	      // By being enumerable, JSON.stringify will include `locations` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true
	    },
	    path: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: path || undefined,
	      // By being enumerable, JSON.stringify will include `path` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true
	    },
	    nodes: {
	      value: _nodes || undefined
	    },
	    source: {
	      value: _source || undefined
	    },
	    positions: {
	      value: _positions || undefined
	    },
	    originalError: {
	      value: originalError
	    },
	    extensions: {
	      value: extensions || originalError && originalError.extensions
	    }
	  });

	  // Include (non-enumerable) stack trace.
	  if (originalError && originalError.stack) {
	    Object.defineProperty(this, 'stack', {
	      value: originalError.stack,
	      writable: true,
	      configurable: true
	    });
	  } else if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, GraphQLError);
	  } else {
	    Object.defineProperty(this, 'stack', {
	      value: Error().stack,
	      writable: true,
	      configurable: true
	    });
	  }
	}

	GraphQLError.prototype = Object.create(Error.prototype, {
	  constructor: { value: GraphQLError },
	  name: { value: 'GraphQLError' },
	  toString: {
	    value: function toString() {
	      return printError(this);
	    }
	  }
	});

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

	/**
	 * Upholds the spec rules about naming.
	 */
	function assertValidName(name) {
	  var error = isValidNameError(name);
	  if (error) {
	    throw error;
	  }
	  return name;
	}

	/**
	 * Returns an Error if a name is invalid.
	 */
	function isValidNameError(name, node) {
	  !(typeof name === 'string') ? invariant(0, 'Expected string') : void 0;
	  if (name.length > 1 && name[0] === '_' && name[1] === '_' &&
	  // Note: this special case is not part of the spec and exists only to
	  // support legacy server configurations. Do not rely on this special case
	  // as it may be removed at any time.
	  name !== '__configs__') {
	    return new GraphQLError('Name "' + name + '" must not begin with "__", which is reserved by ' + 'GraphQL introspection.', node);
	  }
	  if (!NAME_RX.test(name)) {
	    return new GraphQLError('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.', node);
	  }
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Provided two types, return true if the types are equal (invariant).
	 */
	function isEqualType(typeA, typeB) {
	  // Equivalent types are equal.
	  if (typeA === typeB) {
	    return true;
	  }

	  // If either type is non-null, the other must also be non-null.
	  if (isNonNullType(typeA) && isNonNullType(typeB)) {
	    return isEqualType(typeA.ofType, typeB.ofType);
	  }

	  // If either type is a list, the other must also be a list.
	  if (isListType(typeA) && isListType(typeB)) {
	    return isEqualType(typeA.ofType, typeB.ofType);
	  }

	  // Otherwise the types are not equal.
	  return false;
	}

	/**
	 * Provided a type and a super type, return true if the first type is either
	 * equal or a subset of the second super type (covariant).
	 */
	function isTypeSubTypeOf(schema, maybeSubType, superType) {
	  // Equivalent type is a valid subtype
	  if (maybeSubType === superType) {
	    return true;
	  }

	  // If superType is non-null, maybeSubType must also be non-null.
	  if (isNonNullType(superType)) {
	    if (isNonNullType(maybeSubType)) {
	      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
	    }
	    return false;
	  }
	  if (isNonNullType(maybeSubType)) {
	    // If superType is nullable, maybeSubType may be non-null or nullable.
	    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
	  }

	  // If superType type is a list, maybeSubType type must also be a list.
	  if (isListType(superType)) {
	    if (isListType(maybeSubType)) {
	      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
	    }
	    return false;
	  }
	  if (isListType(maybeSubType)) {
	    // If superType is not a list, maybeSubType must also be not a list.
	    return false;
	  }

	  // If superType type is an abstract type, maybeSubType type may be a currently
	  // possible object type.
	  if (isAbstractType(superType) && isObjectType(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
	    return true;
	  }

	  // Otherwise, the child type is not a valid subtype of the parent type.
	  return false;
	}

	/**
	 * Provided two composite types, determine if they "overlap". Two composite
	 * types overlap when the Sets of possible concrete types for each intersect.
	 *
	 * This is often used to determine if a fragment of a given type could possibly
	 * be visited in a context of another type.
	 *
	 * This function is commutative.
	 */
	function doTypesOverlap(schema, typeA, typeB) {
	  // So flow is aware this is constant
	  var _typeB = typeB;

	  // Equivalent types overlap
	  if (typeA === _typeB) {
	    return true;
	  }

	  if (isAbstractType(typeA)) {
	    if (isAbstractType(_typeB)) {
	      // If both types are abstract, then determine if there is any intersection
	      // between possible concrete types of each.
	      return schema.getPossibleTypes(typeA).some(function (type) {
	        return schema.isPossibleType(_typeB, type);
	      });
	    }
	    // Determine if the latter type is a possible concrete type of the former.
	    return schema.isPossibleType(typeA, _typeB);
	  }

	  if (isAbstractType(_typeB)) {
	    // Determine if the former type is a possible concrete type of the latter.
	    return schema.isPossibleType(_typeB, typeA);
	  }

	  // Otherwise the types do not overlap.
	  return false;
	}

	function _classCallCheck$3(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Implements the "Type Validation" sub-sections of the specification's
	 * "Type System" section.
	 *
	 * Validation runs synchronously, returning an array of encountered errors, or
	 * an empty array if no errors were encountered and the Schema is valid.
	 */
	function validateSchema(schema) {
	  // First check to ensure the provided value is in fact a GraphQLSchema.
	  !isSchema(schema) ? invariant(0, 'Expected ' + String(schema) + ' to be a GraphQL schema.') : void 0;

	  // If this Schema has already been validated, return the previous results.
	  if (schema.__validationErrors) {
	    return schema.__validationErrors;
	  }

	  // Validate the schema, producing a list of errors.
	  var context = new SchemaValidationContext(schema);
	  validateRootTypes(context);
	  validateDirectives(context);
	  validateTypes(context);

	  // Persist the results of validation before returning to ensure validation
	  // does not run multiple times for this schema.
	  var errors = context.getErrors();
	  schema.__validationErrors = errors;
	  return errors;
	}

	/**
	 * Utility function which asserts a schema is valid by throwing an error if
	 * it is invalid.
	 */
	function assertValidSchema(schema) {
	  var errors = validateSchema(schema);
	  if (errors.length !== 0) {
	    throw new Error(errors.map(function (error) {
	      return error.message;
	    }).join('\n\n'));
	  }
	}

	var SchemaValidationContext = function () {
	  function SchemaValidationContext(schema) {
	    _classCallCheck$3(this, SchemaValidationContext);

	    this._errors = [];
	    this.schema = schema;
	  }

	  SchemaValidationContext.prototype.reportError = function reportError(message, nodes) {
	    var _nodes = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
	    this.addError(new GraphQLError(message, _nodes));
	  };

	  SchemaValidationContext.prototype.addError = function addError(error) {
	    this._errors.push(error);
	  };

	  SchemaValidationContext.prototype.getErrors = function getErrors() {
	    return this._errors;
	  };

	  return SchemaValidationContext;
	}();

	function validateRootTypes(context) {
	  var schema = context.schema;
	  var queryType = schema.getQueryType();
	  if (!queryType) {
	    context.reportError('Query root type must be provided.', schema.astNode);
	  } else if (!isObjectType(queryType)) {
	    context.reportError('Query root type must be Object type, it cannot be ' + String(queryType) + '.', getOperationTypeNode(schema, queryType, 'query'));
	  }

	  var mutationType = schema.getMutationType();
	  if (mutationType && !isObjectType(mutationType)) {
	    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + (String(mutationType) + '.'), getOperationTypeNode(schema, mutationType, 'mutation'));
	  }

	  var subscriptionType = schema.getSubscriptionType();
	  if (subscriptionType && !isObjectType(subscriptionType)) {
	    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + (String(subscriptionType) + '.'), getOperationTypeNode(schema, subscriptionType, 'subscription'));
	  }
	}

	function getOperationTypeNode(schema, type, operation) {
	  var astNode = schema.astNode;
	  var operationTypeNode = astNode && astNode.operationTypes.find(function (operationType) {
	    return operationType.operation === operation;
	  });
	  return operationTypeNode ? operationTypeNode.type : type && type.astNode;
	}

	function validateDirectives(context) {
	  var directives = context.schema.getDirectives();
	  directives.forEach(function (directive) {
	    // Ensure all directives are in fact GraphQL directives.
	    if (!isDirective(directive)) {
	      context.reportError('Expected directive but got: ' + String(directive) + '.', directive && directive.astNode);
	      return;
	    }

	    // Ensure they are named correctly.
	    validateName(context, directive);

	    // TODO: Ensure proper locations.

	    // Ensure the arguments are valid.
	    var argNames = Object.create(null);
	    directive.args.forEach(function (arg) {
	      var argName = arg.name;

	      // Ensure they are named correctly.
	      validateName(context, arg);

	      // Ensure they are unique per directive.
	      if (argNames[argName]) {
	        context.reportError('Argument @' + directive.name + '(' + argName + ':) can only be defined once.', getAllDirectiveArgNodes(directive, argName));
	        return; // continue loop
	      }
	      argNames[argName] = true;

	      // Ensure the type is an input type.
	      if (!isInputType(arg.type)) {
	        context.reportError('The type of @' + directive.name + '(' + argName + ':) must be Input Type ' + ('but got: ' + String(arg.type) + '.'), getDirectiveArgTypeNode(directive, argName));
	      }
	    });
	  });
	}

	function validateName(context, node) {
	  // If a schema explicitly allows some legacy name which is no longer valid,
	  // allow it to be assumed valid.
	  if (context.schema.__allowedLegacyNames && context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
	    return;
	  }
	  // Ensure names are valid, however introspection types opt out.
	  var error = isValidNameError(node.name, node.astNode || undefined);
	  if (error) {
	    context.addError(error);
	  }
	}

	function validateTypes(context) {
	  var typeMap = context.schema.getTypeMap();
	  objectValues(typeMap).forEach(function (type) {
	    // Ensure all provided types are in fact GraphQL type.
	    if (!isNamedType(type)) {
	      context.reportError('Expected GraphQL named type but got: ' + String(type) + '.', type && type.astNode);
	      return;
	    }

	    // Ensure it is named correctly (excluding introspection types).
	    if (!isIntrospectionType(type)) {
	      validateName(context, type);
	    }

	    if (isObjectType(type)) {
	      // Ensure fields are valid
	      validateFields(context, type);

	      // Ensure objects implement the interfaces they claim to.
	      validateObjectInterfaces(context, type);
	    } else if (isInterfaceType(type)) {
	      // Ensure fields are valid.
	      validateFields(context, type);
	    } else if (isUnionType(type)) {
	      // Ensure Unions include valid member types.
	      validateUnionMembers(context, type);
	    } else if (isEnumType(type)) {
	      // Ensure Enums have valid values.
	      validateEnumValues(context, type);
	    } else if (isInputObjectType(type)) {
	      // Ensure Input Object fields are valid.
	      validateInputFields(context, type);
	    }
	  });
	}

	function validateFields(context, type) {
	  var fields = objectValues(type.getFields());

	  // Objects and Interfaces both must define one or more fields.
	  if (fields.length === 0) {
	    context.reportError('Type ' + type.name + ' must define one or more fields.', getAllObjectOrInterfaceNodes(type));
	  }

	  fields.forEach(function (field) {
	    // Ensure they are named correctly.
	    validateName(context, field);

	    // Ensure they were defined at most once.
	    var fieldNodes = getAllFieldNodes(type, field.name);
	    if (fieldNodes.length > 1) {
	      context.reportError('Field ' + type.name + '.' + field.name + ' can only be defined once.', fieldNodes);
	      return; // continue loop
	    }

	    // Ensure the type is an output type
	    if (!isOutputType(field.type)) {
	      context.reportError('The type of ' + type.name + '.' + field.name + ' must be Output Type ' + ('but got: ' + String(field.type) + '.'), getFieldTypeNode(type, field.name));
	    }

	    // Ensure the arguments are valid
	    var argNames = Object.create(null);
	    field.args.forEach(function (arg) {
	      var argName = arg.name;

	      // Ensure they are named correctly.
	      validateName(context, arg);

	      // Ensure they are unique per field.
	      if (argNames[argName]) {
	        context.reportError('Field argument ' + type.name + '.' + field.name + '(' + argName + ':) can only ' + 'be defined once.', getAllFieldArgNodes(type, field.name, argName));
	      }
	      argNames[argName] = true;

	      // Ensure the type is an input type
	      if (!isInputType(arg.type)) {
	        context.reportError('The type of ' + type.name + '.' + field.name + '(' + argName + ':) must be Input ' + ('Type but got: ' + String(arg.type) + '.'), getFieldArgTypeNode(type, field.name, argName));
	      }
	    });
	  });
	}

	function validateObjectInterfaces(context, object) {
	  var implementedTypeNames = Object.create(null);
	  object.getInterfaces().forEach(function (iface) {
	    if (implementedTypeNames[iface.name]) {
	      context.reportError('Type ' + object.name + ' can only implement ' + iface.name + ' once.', getAllImplementsInterfaceNodes(object, iface));
	      return; // continue loop
	    }
	    implementedTypeNames[iface.name] = true;
	    validateObjectImplementsInterface(context, object, iface);
	  });
	}

	function validateObjectImplementsInterface(context, object, iface) {
	  if (!isInterfaceType(iface)) {
	    context.reportError('Type ' + String(object) + ' must only implement Interface types, ' + ('it cannot implement ' + String(iface) + '.'), getImplementsInterfaceNode(object, iface));
	    return;
	  }

	  var objectFieldMap = object.getFields();
	  var ifaceFieldMap = iface.getFields();

	  // Assert each interface field is implemented.
	  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
	    var objectField = objectFieldMap[fieldName];
	    var ifaceField = ifaceFieldMap[fieldName];

	    // Assert interface field exists on object.
	    if (!objectField) {
	      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expected but ' + (object.name + ' does not provide it.'), [getFieldNode(iface, fieldName), object.astNode]);
	      // Continue loop over fields.
	      return;
	    }

	    // Assert interface field type is satisfied by object field type, by being
	    // a valid subtype. (covariant)
	    if (!isTypeSubTypeOf(context.schema, objectField.type, ifaceField.type)) {
	      context.reportError('Interface field ' + iface.name + '.' + fieldName + ' expects type ' + (String(ifaceField.type) + ' but ' + object.name + '.' + fieldName + ' ') + ('is type ' + String(objectField.type) + '.'), [getFieldTypeNode(iface, fieldName), getFieldTypeNode(object, fieldName)]);
	    }

	    // Assert each interface field arg is implemented.
	    ifaceField.args.forEach(function (ifaceArg) {
	      var argName = ifaceArg.name;
	      var objectArg = find(objectField.args, function (arg) {
	        return arg.name === argName;
	      });

	      // Assert interface field arg exists on object field.
	      if (!objectArg) {
	        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expected but ' + object.name + '.' + fieldName + ' does not provide it.'), [getFieldArgNode(iface, fieldName, argName), getFieldNode(object, fieldName)]);
	        // Continue loop over arguments.
	        return;
	      }

	      // Assert interface field arg type matches object field arg type.
	      // (invariant)
	      // TODO: change to contravariant?
	      if (!isEqualType(ifaceArg.type, objectArg.type)) {
	        context.reportError('Interface field argument ' + iface.name + '.' + fieldName + '(' + argName + ':) ' + ('expects type ' + String(ifaceArg.type) + ' but ') + (object.name + '.' + fieldName + '(' + argName + ':) is type ') + (String(objectArg.type) + '.'), [getFieldArgTypeNode(iface, fieldName, argName), getFieldArgTypeNode(object, fieldName, argName)]);
	      }

	      // TODO: validate default values?
	    });

	    // Assert additional arguments must not be required.
	    objectField.args.forEach(function (objectArg) {
	      var argName = objectArg.name;
	      var ifaceArg = find(ifaceField.args, function (arg) {
	        return arg.name === argName;
	      });
	      if (!ifaceArg && isNonNullType(objectArg.type)) {
	        context.reportError('Object field argument ' + object.name + '.' + fieldName + '(' + argName + ':) ' + ('is of required type ' + String(objectArg.type) + ' but is not also ') + ('provided by the Interface field ' + iface.name + '.' + fieldName + '.'), [getFieldArgTypeNode(object, fieldName, argName), getFieldNode(iface, fieldName)]);
	      }
	    });
	  });
	}

	function validateUnionMembers(context, union) {
	  var memberTypes = union.getTypes();

	  if (memberTypes.length === 0) {
	    context.reportError('Union type ' + union.name + ' must define one or more member types.', union.astNode);
	  }

	  var includedTypeNames = Object.create(null);
	  memberTypes.forEach(function (memberType) {
	    if (includedTypeNames[memberType.name]) {
	      context.reportError('Union type ' + union.name + ' can only include type ' + (memberType.name + ' once.'), getUnionMemberTypeNodes(union, memberType.name));
	      return; // continue loop
	    }
	    includedTypeNames[memberType.name] = true;
	    if (!isObjectType(memberType)) {
	      context.reportError('Union type ' + union.name + ' can only include Object types, ' + ('it cannot include ' + String(memberType) + '.'), getUnionMemberTypeNodes(union, String(memberType)));
	    }
	  });
	}

	function validateEnumValues(context, enumType) {
	  var enumValues = enumType.getValues();

	  if (enumValues.length === 0) {
	    context.reportError('Enum type ' + enumType.name + ' must define one or more values.', enumType.astNode);
	  }

	  enumValues.forEach(function (enumValue) {
	    var valueName = enumValue.name;

	    // Ensure no duplicates.
	    var allNodes = getEnumValueNodes(enumType, valueName);
	    if (allNodes && allNodes.length > 1) {
	      context.reportError('Enum type ' + enumType.name + ' can include value ' + valueName + ' only once.', allNodes);
	    }

	    // Ensure valid name.
	    validateName(context, enumValue);
	    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
	      context.reportError('Enum type ' + enumType.name + ' cannot include value: ' + valueName + '.', enumValue.astNode);
	    }
	  });
	}

	function validateInputFields(context, inputObj) {
	  var fields = objectValues(inputObj.getFields());

	  if (fields.length === 0) {
	    context.reportError('Input Object type ' + inputObj.name + ' must define one or more fields.', inputObj.astNode);
	  }

	  // Ensure the arguments are valid
	  fields.forEach(function (field) {
	    // Ensure they are named correctly.
	    validateName(context, field);

	    // TODO: Ensure they are unique per field.

	    // Ensure the type is an input type
	    if (!isInputType(field.type)) {
	      context.reportError('The type of ' + inputObj.name + '.' + field.name + ' must be Input Type ' + ('but got: ' + String(field.type) + '.'), field.astNode && field.astNode.type);
	    }
	  });
	}

	function getAllObjectNodes(type) {
	  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
	}

	function getAllObjectOrInterfaceNodes(type) {
	  return type.astNode ? type.extensionASTNodes ? [type.astNode].concat(type.extensionASTNodes) : [type.astNode] : type.extensionASTNodes || [];
	}

	function getImplementsInterfaceNode(type, iface) {
	  return getAllImplementsInterfaceNodes(type, iface)[0];
	}

	function getAllImplementsInterfaceNodes(type, iface) {
	  var implementsNodes = [];
	  var astNodes = getAllObjectNodes(type);
	  for (var i = 0; i < astNodes.length; i++) {
	    var _astNode = astNodes[i];
	    if (_astNode && _astNode.interfaces) {
	      _astNode.interfaces.forEach(function (node) {
	        if (node.name.value === iface.name) {
	          implementsNodes.push(node);
	        }
	      });
	    }
	  }
	  return implementsNodes;
	}

	function getFieldNode(type, fieldName) {
	  return getAllFieldNodes(type, fieldName)[0];
	}

	function getAllFieldNodes(type, fieldName) {
	  var fieldNodes = [];
	  var astNodes = getAllObjectOrInterfaceNodes(type);
	  for (var i = 0; i < astNodes.length; i++) {
	    var _astNode2 = astNodes[i];
	    if (_astNode2 && _astNode2.fields) {
	      _astNode2.fields.forEach(function (node) {
	        if (node.name.value === fieldName) {
	          fieldNodes.push(node);
	        }
	      });
	    }
	  }
	  return fieldNodes;
	}

	function getFieldTypeNode(type, fieldName) {
	  var fieldNode = getFieldNode(type, fieldName);
	  return fieldNode && fieldNode.type;
	}

	function getFieldArgNode(type, fieldName, argName) {
	  return getAllFieldArgNodes(type, fieldName, argName)[0];
	}

	function getAllFieldArgNodes(type, fieldName, argName) {
	  var argNodes = [];
	  var fieldNode = getFieldNode(type, fieldName);
	  if (fieldNode && fieldNode.arguments) {
	    fieldNode.arguments.forEach(function (node) {
	      if (node.name.value === argName) {
	        argNodes.push(node);
	      }
	    });
	  }
	  return argNodes;
	}

	function getFieldArgTypeNode(type, fieldName, argName) {
	  var fieldArgNode = getFieldArgNode(type, fieldName, argName);
	  return fieldArgNode && fieldArgNode.type;
	}

	function getAllDirectiveArgNodes(directive, argName) {
	  var argNodes = [];
	  var directiveNode = directive.astNode;
	  if (directiveNode && directiveNode.arguments) {
	    directiveNode.arguments.forEach(function (node) {
	      if (node.name.value === argName) {
	        argNodes.push(node);
	      }
	    });
	  }
	  return argNodes;
	}

	function getDirectiveArgTypeNode(directive, argName) {
	  var argNode = getAllDirectiveArgNodes(directive, argName)[0];
	  return argNode && argNode.type;
	}

	function getUnionMemberTypeNodes(union, typeName) {
	  return union.astNode && union.astNode.types && union.astNode.types.filter(function (type) {
	    return type.name.value === typeName;
	  });
	}

	function getEnumValueNodes(enumType, valueName) {
	  return enumType.astNode && enumType.astNode.values && enumType.astNode.values.filter(function (value) {
	    return value.name.value === valueName;
	  });
	}

	function _classCallCheck$4(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * A representation of source input to GraphQL.
	 * `name` and `locationOffset` are optional. They are useful for clients who
	 * store GraphQL documents in source files; for example, if the GraphQL input
	 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
	 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
	 * line and column in locationOffset are 1-indexed
	 */
	var Source = function Source(body, name, locationOffset) {
	  _classCallCheck$4(this, Source);

	  this.body = body;
	  this.name = name || 'GraphQL request';
	  this.locationOffset = locationOffset || { line: 1, column: 1 };
	  !(this.locationOffset.line > 0) ? invariant(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
	  !(this.locationOffset.column > 0) ? invariant(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
	};

	/**
	 * Produces a GraphQLError representing a syntax error, containing useful
	 * descriptive information about the syntax error's position in the source.
	 */
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function syntaxError(source, position, description) {
	  return new GraphQLError('Syntax Error: ' + description, undefined, source, [position]);
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Given an arbitrary Error, presumably thrown while attempting to execute a
	 * GraphQL operation, produce a new GraphQLError aware of the location in the
	 * document responsible for the original Error.
	 */
	function locatedError(originalError, nodes, path) {
	  // Note: this uses a brand-check to support GraphQL errors originating from
	  // other contexts.
	  if (originalError && Array.isArray(originalError.path)) {
	    return originalError;
	  }

	  return new GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
	}

	var _extends$1 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	/**
	 * Given a GraphQLError, format it according to the rules described by the
	 * Response Format, Errors section of the GraphQL Specification.
	 */
	function formatError(error) {
	  !error ? invariant(0, 'Received null or undefined error.') : void 0;
	  return _extends$1({}, error.extensions, {
	    message: error.message || 'An unknown error occurred.',
	    locations: error.locations,
	    path: error.path
	  });
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Produces the value of a block string from its parsed raw value, similar to
	 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
	 *
	 * This implements the GraphQL spec's BlockStringValue() static algorithm.
	 */
	function blockStringValue(rawString) {
	  // Expand a block string's raw value into independent lines.
	  var lines = rawString.split(/\r\n|[\n\r]/g);

	  // Remove common indentation from all lines but first.
	  var commonIndent = null;
	  for (var i = 1; i < lines.length; i++) {
	    var line = lines[i];
	    var indent = leadingWhitespace(line);
	    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
	      commonIndent = indent;
	      if (commonIndent === 0) {
	        break;
	      }
	    }
	  }

	  if (commonIndent) {
	    for (var _i = 1; _i < lines.length; _i++) {
	      lines[_i] = lines[_i].slice(commonIndent);
	    }
	  }

	  // Remove leading and trailing blank lines.
	  while (lines.length > 0 && isBlank(lines[0])) {
	    lines.shift();
	  }
	  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
	    lines.pop();
	  }

	  // Return a string of the lines joined with U+000A.
	  return lines.join('\n');
	}

	function leadingWhitespace(str) {
	  var i = 0;
	  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
	    i++;
	  }
	  return i;
	}

	function isBlank(str) {
	  return leadingWhitespace(str) === str.length;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a stateful stream generator in that every time
	 * it is advanced, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token emitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return the same EOF token
	 * whenever called.
	 */
	function createLexer(source, options) {
	  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
	  var lexer = {
	    source: source,
	    options: options,
	    lastToken: startOfFileToken,
	    token: startOfFileToken,
	    line: 1,
	    lineStart: 0,
	    advance: advanceLexer,
	    lookahead: lookahead
	  };
	  return lexer;
	}

	function advanceLexer() {
	  this.lastToken = this.token;
	  var token = this.token = this.lookahead();
	  return token;
	}

	function lookahead() {
	  var token = this.token;
	  if (token.kind !== TokenKind.EOF) {
	    do {
	      // Note: next is only mutable during parsing, so we cast to allow this.
	      token = token.next || (token.next = readToken(this, token));
	    } while (token.kind === TokenKind.COMMENT);
	  }
	  return token;
	}

	/**
	 * The return type of createLexer.
	 */

	/**
	 * An exported enum describing the different kinds of tokens that the
	 * lexer emits.
	 */
	var TokenKind = Object.freeze({
	  SOF: '<SOF>',
	  EOF: '<EOF>',
	  BANG: '!',
	  DOLLAR: '$',
	  AMP: '&',
	  PAREN_L: '(',
	  PAREN_R: ')',
	  SPREAD: '...',
	  COLON: ':',
	  EQUALS: '=',
	  AT: '@',
	  BRACKET_L: '[',
	  BRACKET_R: ']',
	  BRACE_L: '{',
	  PIPE: '|',
	  BRACE_R: '}',
	  NAME: 'Name',
	  INT: 'Int',
	  FLOAT: 'Float',
	  STRING: 'String',
	  BLOCK_STRING: 'BlockString',
	  COMMENT: 'Comment'
	});

	/**
	 * The enum type representing the token kinds values.
	 */

	/**
	 * A helper function to describe a token as a string for debugging
	 */
	function getTokenDesc(token) {
	  var value = token.value;
	  return value ? token.kind + ' "' + value + '"' : token.kind;
	}

	var charCodeAt = String.prototype.charCodeAt;
	var slice = String.prototype.slice;

	/**
	 * Helper function for constructing the Token object.
	 */
	function Tok(kind, start, end, line, column, prev, value) {
	  this.kind = kind;
	  this.start = start;
	  this.end = end;
	  this.line = line;
	  this.column = column;
	  this.value = value;
	  this.prev = prev;
	  this.next = null;
	}

	// Print a simplified form when appearing in JSON/util.inspect.
	Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
	  return {
	    kind: this.kind,
	    value: this.value,
	    line: this.line,
	    column: this.column
	  };
	};

	function printCharCode(code) {
	  return (
	    // NaN/undefined represents access beyond the end of the file.
	    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
	    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
	    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
	  );
	}

	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace and comments until it finds the next lexable
	 * token, then lexes punctuators immediately or calls the appropriate helper
	 * function for more complicated tokens.
	 */
	function readToken(lexer, prev) {
	  var source = lexer.source;
	  var body = source.body;
	  var bodyLength = body.length;

	  var pos = positionAfterWhitespace(body, prev.end, lexer);
	  var line = lexer.line;
	  var col = 1 + pos - lexer.lineStart;

	  if (pos >= bodyLength) {
	    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
	  }

	  var code = charCodeAt.call(body, pos);

	  // SourceCharacter
	  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
	    throw syntaxError(source, pos, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
	  }

	  switch (code) {
	    // !
	    case 33:
	      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
	    // #
	    case 35:
	      return readComment(source, pos, line, col, prev);
	    // $
	    case 36:
	      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
	    // &
	    case 38:
	      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
	    // (
	    case 40:
	      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
	    // )
	    case 41:
	      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
	    // .
	    case 46:
	      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
	        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
	      }
	      break;
	    // :
	    case 58:
	      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
	    // =
	    case 61:
	      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
	    // @
	    case 64:
	      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
	    // [
	    case 91:
	      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
	    // ]
	    case 93:
	      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
	    // {
	    case 123:
	      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
	    // |
	    case 124:
	      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
	    // }
	    case 125:
	      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
	    // A-Z _ a-z
	    case 65:
	    case 66:
	    case 67:
	    case 68:
	    case 69:
	    case 70:
	    case 71:
	    case 72:
	    case 73:
	    case 74:
	    case 75:
	    case 76:
	    case 77:
	    case 78:
	    case 79:
	    case 80:
	    case 81:
	    case 82:
	    case 83:
	    case 84:
	    case 85:
	    case 86:
	    case 87:
	    case 88:
	    case 89:
	    case 90:
	    case 95:
	    case 97:
	    case 98:
	    case 99:
	    case 100:
	    case 101:
	    case 102:
	    case 103:
	    case 104:
	    case 105:
	    case 106:
	    case 107:
	    case 108:
	    case 109:
	    case 110:
	    case 111:
	    case 112:
	    case 113:
	    case 114:
	    case 115:
	    case 116:
	    case 117:
	    case 118:
	    case 119:
	    case 120:
	    case 121:
	    case 122:
	      return readName(source, pos, line, col, prev);
	    // - 0-9
	    case 45:
	    case 48:
	    case 49:
	    case 50:
	    case 51:
	    case 52:
	    case 53:
	    case 54:
	    case 55:
	    case 56:
	    case 57:
	      return readNumber(source, pos, code, line, col, prev);
	    // "
	    case 34:
	      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
	        return readBlockString(source, pos, line, col, prev);
	      }
	      return readString(source, pos, line, col, prev);
	  }

	  throw syntaxError(source, pos, unexpectedCharacterMessage(code));
	}

	/**
	 * Report a message that an unexpected character was encountered.
	 */
	function unexpectedCharacterMessage(code) {
	  if (code === 39) {
	    // '
	    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
	  }

	  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
	}

	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * or commented character, then returns the position of that character for
	 * lexing.
	 */
	function positionAfterWhitespace(body, startPosition, lexer) {
	  var bodyLength = body.length;
	  var position = startPosition;
	  while (position < bodyLength) {
	    var code = charCodeAt.call(body, position);
	    // tab | space | comma | BOM
	    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
	      ++position;
	    } else if (code === 10) {
	      // new line
	      ++position;
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else if (code === 13) {
	      // carriage return
	      if (charCodeAt.call(body, position + 1) === 10) {
	        position += 2;
	      } else {
	        ++position;
	      }
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else {
	      break;
	    }
	  }
	  return position;
	}

	/**
	 * Reads a comment token from the source file.
	 *
	 * #[\u0009\u0020-\uFFFF]*
	 */
	function readComment(source, start, line, col, prev) {
	  var body = source.body;
	  var code = void 0;
	  var position = start;

	  do {
	    code = charCodeAt.call(body, ++position);
	  } while (code !== null && (
	  // SourceCharacter but not LineTerminator
	  code > 0x001f || code === 0x0009));

	  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
	}

	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
	 */
	function readNumber(source, start, firstCode, line, col, prev) {
	  var body = source.body;
	  var code = firstCode;
	  var position = start;
	  var isFloat = false;

	  if (code === 45) {
	    // -
	    code = charCodeAt.call(body, ++position);
	  }

	  if (code === 48) {
	    // 0
	    code = charCodeAt.call(body, ++position);
	    if (code >= 48 && code <= 57) {
	      throw syntaxError(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
	    }
	  } else {
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 46) {
	    // .
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 69 || code === 101) {
	    // E e
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    if (code === 43 || code === 45) {
	      // + -
	      code = charCodeAt.call(body, ++position);
	    }
	    position = readDigits(source, position, code);
	  }

	  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
	}

	/**
	 * Returns the new position in the source after reading digits.
	 */
	function readDigits(source, start, firstCode) {
	  var body = source.body;
	  var position = start;
	  var code = firstCode;
	  if (code >= 48 && code <= 57) {
	    // 0 - 9
	    do {
	      code = charCodeAt.call(body, ++position);
	    } while (code >= 48 && code <= 57); // 0 - 9
	    return position;
	  }
	  throw syntaxError(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
	}

	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */
	function readString(source, start, line, col, prev) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code = 0;
	  var value = '';

	  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
	  // not LineTerminator
	  code !== 0x000a && code !== 0x000d) {
	    // Closing Quote (")
	    if (code === 34) {
	      value += slice.call(body, chunkStart, position);
	      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
	    }

	    // SourceCharacter
	    if (code < 0x0020 && code !== 0x0009) {
	      throw syntaxError(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
	    }

	    ++position;
	    if (code === 92) {
	      // \
	      value += slice.call(body, chunkStart, position - 1);
	      code = charCodeAt.call(body, position);
	      switch (code) {
	        case 34:
	          value += '"';
	          break;
	        case 47:
	          value += '/';
	          break;
	        case 92:
	          value += '\\';
	          break;
	        case 98:
	          value += '\b';
	          break;
	        case 102:
	          value += '\f';
	          break;
	        case 110:
	          value += '\n';
	          break;
	        case 114:
	          value += '\r';
	          break;
	        case 116:
	          value += '\t';
	          break;
	        case 117:
	          // u
	          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
	          if (charCode < 0) {
	            throw syntaxError(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
	          }
	          value += String.fromCharCode(charCode);
	          position += 4;
	          break;
	        default:
	          throw syntaxError(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
	      }
	      ++position;
	      chunkStart = position;
	    }
	  }

	  throw syntaxError(source, position, 'Unterminated string.');
	}

	/**
	 * Reads a block string token from the source file.
	 *
	 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
	 */
	function readBlockString(source, start, line, col, prev) {
	  var body = source.body;
	  var position = start + 3;
	  var chunkStart = position;
	  var code = 0;
	  var rawValue = '';

	  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
	    // Closing Triple-Quote (""")
	    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
	      rawValue += slice.call(body, chunkStart, position);
	      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, blockStringValue(rawValue));
	    }

	    // SourceCharacter
	    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
	      throw syntaxError(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
	    }

	    // Escape Triple-Quote (\""")
	    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
	      rawValue += slice.call(body, chunkStart, position) + '"""';
	      position += 4;
	      chunkStart = position;
	    } else {
	      ++position;
	    }
	  }

	  throw syntaxError(source, position, 'Unterminated string.');
	}

	/**
	 * Converts four hexidecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */
	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}

	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */
	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 // 0-9
	  : a >= 65 && a <= 70 ? a - 55 // A-F
	  : a >= 97 && a <= 102 ? a - 87 // a-f
	  : -1;
	}

	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */
	function readName(source, start, line, col, prev) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var position = start + 1;
	  var code = 0;
	  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122) // a-z
	  ) {
	    ++position;
	  }
	  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Configuration options to control parser behavior
	 */

	/**
	 * Given a GraphQL source, parses it into a Document.
	 * Throws GraphQLError if a syntax error is encountered.
	 */
	function parse(source, options) {
	  var sourceObj = typeof source === 'string' ? new Source(source) : source;
	  if (!(sourceObj instanceof Source)) {
	    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
	  }
	  var lexer = createLexer(sourceObj, options || {});
	  return parseDocument(lexer);
	}

	/**
	 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
	 * that value.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Values directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: valueFromAST().
	 */
	function parseValue(source, options) {
	  var sourceObj = typeof source === 'string' ? new Source(source) : source;
	  var lexer = createLexer(sourceObj, options || {});
	  expect(lexer, TokenKind.SOF);
	  var value = parseValueLiteral(lexer, false);
	  expect(lexer, TokenKind.EOF);
	  return value;
	}

	/**
	 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
	 * that type.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Types directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: typeFromAST().
	 */
	function parseType(source, options) {
	  var sourceObj = typeof source === 'string' ? new Source(source) : source;
	  var lexer = createLexer(sourceObj, options || {});
	  expect(lexer, TokenKind.SOF);
	  var type = parseTypeReference(lexer);
	  expect(lexer, TokenKind.EOF);
	  return type;
	}

	/**
	 * Converts a name lex token into a name parse node.
	 */
	function parseName(lexer) {
	  var token = expect(lexer, TokenKind.NAME);
	  return {
	    kind: Kind.NAME,
	    value: token.value,
	    loc: loc(lexer, token)
	  };
	}

	// Implements the parsing rules in the Document section.

	/**
	 * Document : Definition+
	 */
	function parseDocument(lexer) {
	  var start = lexer.token;
	  expect(lexer, TokenKind.SOF);
	  var definitions = [];
	  do {
	    definitions.push(parseDefinition(lexer));
	  } while (!skip(lexer, TokenKind.EOF));

	  return {
	    kind: Kind.DOCUMENT,
	    definitions: definitions,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * Definition :
	 *   - ExecutableDefinition
	 *   - TypeSystemDefinition
	 */
	function parseDefinition(lexer) {
	  if (peek(lexer, TokenKind.NAME)) {
	    switch (lexer.token.value) {
	      case 'query':
	      case 'mutation':
	      case 'subscription':
	      case 'fragment':
	        return parseExecutableDefinition(lexer);
	      case 'schema':
	      case 'scalar':
	      case 'type':
	      case 'interface':
	      case 'union':
	      case 'enum':
	      case 'input':
	      case 'extend':
	      case 'directive':
	        // Note: The schema definition language is an experimental addition.
	        return parseTypeSystemDefinition(lexer);
	    }
	  } else if (peek(lexer, TokenKind.BRACE_L)) {
	    return parseExecutableDefinition(lexer);
	  } else if (peekDescription(lexer)) {
	    // Note: The schema definition language is an experimental addition.
	    return parseTypeSystemDefinition(lexer);
	  }

	  throw unexpected(lexer);
	}

	/**
	 * ExecutableDefinition :
	 *   - OperationDefinition
	 *   - FragmentDefinition
	 */
	function parseExecutableDefinition(lexer) {
	  if (peek(lexer, TokenKind.NAME)) {
	    switch (lexer.token.value) {
	      case 'query':
	      case 'mutation':
	      case 'subscription':
	        return parseOperationDefinition(lexer);

	      case 'fragment':
	        return parseFragmentDefinition(lexer);
	    }
	  } else if (peek(lexer, TokenKind.BRACE_L)) {
	    return parseOperationDefinition(lexer);
	  }

	  throw unexpected(lexer);
	}

	// Implements the parsing rules in the Operations section.

	/**
	 * OperationDefinition :
	 *  - SelectionSet
	 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
	 */
	function parseOperationDefinition(lexer) {
	  var start = lexer.token;
	  if (peek(lexer, TokenKind.BRACE_L)) {
	    return {
	      kind: Kind.OPERATION_DEFINITION,
	      operation: 'query',
	      name: undefined,
	      variableDefinitions: [],
	      directives: [],
	      selectionSet: parseSelectionSet(lexer),
	      loc: loc(lexer, start)
	    };
	  }
	  var operation = parseOperationType(lexer);
	  var name = void 0;
	  if (peek(lexer, TokenKind.NAME)) {
	    name = parseName(lexer);
	  }
	  return {
	    kind: Kind.OPERATION_DEFINITION,
	    operation: operation,
	    name: name,
	    variableDefinitions: parseVariableDefinitions(lexer),
	    directives: parseDirectives(lexer, false),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * OperationType : one of query mutation subscription
	 */
	function parseOperationType(lexer) {
	  var operationToken = expect(lexer, TokenKind.NAME);
	  switch (operationToken.value) {
	    case 'query':
	      return 'query';
	    case 'mutation':
	      return 'mutation';
	    case 'subscription':
	      return 'subscription';
	  }

	  throw unexpected(lexer, operationToken);
	}

	/**
	 * VariableDefinitions : ( VariableDefinition+ )
	 */
	function parseVariableDefinitions(lexer) {
	  return peek(lexer, TokenKind.PAREN_L) ? many(lexer, TokenKind.PAREN_L, parseVariableDefinition, TokenKind.PAREN_R) : [];
	}

	/**
	 * VariableDefinition : Variable : Type DefaultValue?
	 */
	function parseVariableDefinition(lexer) {
	  var start = lexer.token;
	  return {
	    kind: Kind.VARIABLE_DEFINITION,
	    variable: parseVariable(lexer),
	    type: (expect(lexer, TokenKind.COLON), parseTypeReference(lexer)),
	    defaultValue: skip(lexer, TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : undefined,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * Variable : $ Name
	 */
	function parseVariable(lexer) {
	  var start = lexer.token;
	  expect(lexer, TokenKind.DOLLAR);
	  return {
	    kind: Kind.VARIABLE,
	    name: parseName(lexer),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * SelectionSet : { Selection+ }
	 */
	function parseSelectionSet(lexer) {
	  var start = lexer.token;
	  return {
	    kind: Kind.SELECTION_SET,
	    selections: many(lexer, TokenKind.BRACE_L, parseSelection, TokenKind.BRACE_R),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * Selection :
	 *   - Field
	 *   - FragmentSpread
	 *   - InlineFragment
	 */
	function parseSelection(lexer) {
	  return peek(lexer, TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
	}

	/**
	 * Field : Alias? Name Arguments? Directives? SelectionSet?
	 *
	 * Alias : Name :
	 */
	function parseField(lexer) {
	  var start = lexer.token;

	  var nameOrAlias = parseName(lexer);
	  var alias = void 0;
	  var name = void 0;
	  if (skip(lexer, TokenKind.COLON)) {
	    alias = nameOrAlias;
	    name = parseName(lexer);
	  } else {
	    name = nameOrAlias;
	  }

	  return {
	    kind: Kind.FIELD,
	    alias: alias,
	    name: name,
	    arguments: parseArguments(lexer, false),
	    directives: parseDirectives(lexer, false),
	    selectionSet: peek(lexer, TokenKind.BRACE_L) ? parseSelectionSet(lexer) : undefined,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * Arguments[Const] : ( Argument[?Const]+ )
	 */
	function parseArguments(lexer, isConst) {
	  var item = isConst ? parseConstArgument : parseArgument;
	  return peek(lexer, TokenKind.PAREN_L) ? many(lexer, TokenKind.PAREN_L, item, TokenKind.PAREN_R) : [];
	}

	/**
	 * Argument[Const] : Name : Value[?Const]
	 */
	function parseArgument(lexer) {
	  var start = lexer.token;
	  return {
	    kind: Kind.ARGUMENT,
	    name: parseName(lexer),
	    value: (expect(lexer, TokenKind.COLON), parseValueLiteral(lexer, false)),
	    loc: loc(lexer, start)
	  };
	}

	function parseConstArgument(lexer) {
	  var start = lexer.token;
	  return {
	    kind: Kind.ARGUMENT,
	    name: parseName(lexer),
	    value: (expect(lexer, TokenKind.COLON), parseConstValue(lexer)),
	    loc: loc(lexer, start)
	  };
	}

	// Implements the parsing rules in the Fragments section.

	/**
	 * Corresponds to both FragmentSpread and InlineFragment in the spec.
	 *
	 * FragmentSpread : ... FragmentName Directives?
	 *
	 * InlineFragment : ... TypeCondition? Directives? SelectionSet
	 */
	function parseFragment(lexer) {
	  var start = lexer.token;
	  expect(lexer, TokenKind.SPREAD);
	  if (peek(lexer, TokenKind.NAME) && lexer.token.value !== 'on') {
	    return {
	      kind: Kind.FRAGMENT_SPREAD,
	      name: parseFragmentName(lexer),
	      directives: parseDirectives(lexer, false),
	      loc: loc(lexer, start)
	    };
	  }
	  var typeCondition = void 0;
	  if (lexer.token.value === 'on') {
	    lexer.advance();
	    typeCondition = parseNamedType(lexer);
	  }
	  return {
	    kind: Kind.INLINE_FRAGMENT,
	    typeCondition: typeCondition,
	    directives: parseDirectives(lexer, false),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * FragmentDefinition :
	 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
	 *
	 * TypeCondition : NamedType
	 */
	function parseFragmentDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'fragment');
	  // Experimental support for defining variables within fragments changes
	  // the grammar of FragmentDefinition:
	  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
	  if (lexer.options.experimentalFragmentVariables) {
	    return {
	      kind: Kind.FRAGMENT_DEFINITION,
	      name: parseFragmentName(lexer),
	      variableDefinitions: parseVariableDefinitions(lexer),
	      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
	      directives: parseDirectives(lexer, false),
	      selectionSet: parseSelectionSet(lexer),
	      loc: loc(lexer, start)
	    };
	  }
	  return {
	    kind: Kind.FRAGMENT_DEFINITION,
	    name: parseFragmentName(lexer),
	    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
	    directives: parseDirectives(lexer, false),
	    selectionSet: parseSelectionSet(lexer),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * FragmentName : Name but not `on`
	 */
	function parseFragmentName(lexer) {
	  if (lexer.token.value === 'on') {
	    throw unexpected(lexer);
	  }
	  return parseName(lexer);
	}

	// Implements the parsing rules in the Values section.

	/**
	 * Value[Const] :
	 *   - [~Const] Variable
	 *   - IntValue
	 *   - FloatValue
	 *   - StringValue
	 *   - BooleanValue
	 *   - NullValue
	 *   - EnumValue
	 *   - ListValue[?Const]
	 *   - ObjectValue[?Const]
	 *
	 * BooleanValue : one of `true` `false`
	 *
	 * NullValue : `null`
	 *
	 * EnumValue : Name but not `true`, `false` or `null`
	 */
	function parseValueLiteral(lexer, isConst) {
	  var token = lexer.token;
	  switch (token.kind) {
	    case TokenKind.BRACKET_L:
	      return parseList(lexer, isConst);
	    case TokenKind.BRACE_L:
	      return parseObject(lexer, isConst);
	    case TokenKind.INT:
	      lexer.advance();
	      return {
	        kind: Kind.INT,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case TokenKind.FLOAT:
	      lexer.advance();
	      return {
	        kind: Kind.FLOAT,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case TokenKind.STRING:
	    case TokenKind.BLOCK_STRING:
	      return parseStringLiteral(lexer);
	    case TokenKind.NAME:
	      if (token.value === 'true' || token.value === 'false') {
	        lexer.advance();
	        return {
	          kind: Kind.BOOLEAN,
	          value: token.value === 'true',
	          loc: loc(lexer, token)
	        };
	      } else if (token.value === 'null') {
	        lexer.advance();
	        return {
	          kind: Kind.NULL,
	          loc: loc(lexer, token)
	        };
	      }
	      lexer.advance();
	      return {
	        kind: Kind.ENUM,
	        value: token.value,
	        loc: loc(lexer, token)
	      };
	    case TokenKind.DOLLAR:
	      if (!isConst) {
	        return parseVariable(lexer);
	      }
	      break;
	  }
	  throw unexpected(lexer);
	}

	function parseStringLiteral(lexer) {
	  var token = lexer.token;
	  lexer.advance();
	  return {
	    kind: Kind.STRING,
	    value: token.value,
	    block: token.kind === TokenKind.BLOCK_STRING,
	    loc: loc(lexer, token)
	  };
	}

	function parseConstValue(lexer) {
	  return parseValueLiteral(lexer, true);
	}

	function parseValueValue(lexer) {
	  return parseValueLiteral(lexer, false);
	}

	/**
	 * ListValue[Const] :
	 *   - [ ]
	 *   - [ Value[?Const]+ ]
	 */
	function parseList(lexer, isConst) {
	  var start = lexer.token;
	  var item = isConst ? parseConstValue : parseValueValue;
	  return {
	    kind: Kind.LIST,
	    values: any(lexer, TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ObjectValue[Const] :
	 *   - { }
	 *   - { ObjectField[?Const]+ }
	 */
	function parseObject(lexer, isConst) {
	  var start = lexer.token;
	  expect(lexer, TokenKind.BRACE_L);
	  var fields = [];
	  while (!skip(lexer, TokenKind.BRACE_R)) {
	    fields.push(parseObjectField(lexer, isConst));
	  }
	  return {
	    kind: Kind.OBJECT,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ObjectField[Const] : Name : Value[?Const]
	 */
	function parseObjectField(lexer, isConst) {
	  var start = lexer.token;
	  return {
	    kind: Kind.OBJECT_FIELD,
	    name: parseName(lexer),
	    value: (expect(lexer, TokenKind.COLON), parseValueLiteral(lexer, isConst)),
	    loc: loc(lexer, start)
	  };
	}

	// Implements the parsing rules in the Directives section.

	/**
	 * Directives[Const] : Directive[?Const]+
	 */
	function parseDirectives(lexer, isConst) {
	  var directives = [];
	  while (peek(lexer, TokenKind.AT)) {
	    directives.push(parseDirective(lexer, isConst));
	  }
	  return directives;
	}

	/**
	 * Directive[Const] : @ Name Arguments[?Const]?
	 */
	function parseDirective(lexer, isConst) {
	  var start = lexer.token;
	  expect(lexer, TokenKind.AT);
	  return {
	    kind: Kind.DIRECTIVE,
	    name: parseName(lexer),
	    arguments: parseArguments(lexer, isConst),
	    loc: loc(lexer, start)
	  };
	}

	// Implements the parsing rules in the Types section.

	/**
	 * Type :
	 *   - NamedType
	 *   - ListType
	 *   - NonNullType
	 */
	function parseTypeReference(lexer) {
	  var start = lexer.token;
	  var type = void 0;
	  if (skip(lexer, TokenKind.BRACKET_L)) {
	    type = parseTypeReference(lexer);
	    expect(lexer, TokenKind.BRACKET_R);
	    type = {
	      kind: Kind.LIST_TYPE,
	      type: type,
	      loc: loc(lexer, start)
	    };
	  } else {
	    type = parseNamedType(lexer);
	  }
	  if (skip(lexer, TokenKind.BANG)) {
	    return {
	      kind: Kind.NON_NULL_TYPE,
	      type: type,
	      loc: loc(lexer, start)
	    };
	  }
	  return type;
	}

	/**
	 * NamedType : Name
	 */
	function parseNamedType(lexer) {
	  var start = lexer.token;
	  return {
	    kind: Kind.NAMED_TYPE,
	    name: parseName(lexer),
	    loc: loc(lexer, start)
	  };
	}

	// Implements the parsing rules in the Type Definition section.

	/**
	 * TypeSystemDefinition :
	 *   - SchemaDefinition
	 *   - TypeDefinition
	 *   - TypeExtension
	 *   - DirectiveDefinition
	 *
	 * TypeDefinition :
	 *   - ScalarTypeDefinition
	 *   - ObjectTypeDefinition
	 *   - InterfaceTypeDefinition
	 *   - UnionTypeDefinition
	 *   - EnumTypeDefinition
	 *   - InputObjectTypeDefinition
	 */
	function parseTypeSystemDefinition(lexer) {
	  // Many definitions begin with a description and require a lookahead.
	  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

	  if (keywordToken.kind === TokenKind.NAME) {
	    switch (keywordToken.value) {
	      case 'schema':
	        return parseSchemaDefinition(lexer);
	      case 'scalar':
	        return parseScalarTypeDefinition(lexer);
	      case 'type':
	        return parseObjectTypeDefinition(lexer);
	      case 'interface':
	        return parseInterfaceTypeDefinition(lexer);
	      case 'union':
	        return parseUnionTypeDefinition(lexer);
	      case 'enum':
	        return parseEnumTypeDefinition(lexer);
	      case 'input':
	        return parseInputObjectTypeDefinition(lexer);
	      case 'extend':
	        return parseTypeExtension(lexer);
	      case 'directive':
	        return parseDirectiveDefinition(lexer);
	    }
	  }

	  throw unexpected(lexer, keywordToken);
	}

	function peekDescription(lexer) {
	  return peek(lexer, TokenKind.STRING) || peek(lexer, TokenKind.BLOCK_STRING);
	}

	/**
	 * Description : StringValue
	 */
	function parseDescription(lexer) {
	  if (peekDescription(lexer)) {
	    return parseStringLiteral(lexer);
	  }
	}

	/**
	 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
	 */
	function parseSchemaDefinition(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'schema');
	  var directives = parseDirectives(lexer, true);
	  var operationTypes = many(lexer, TokenKind.BRACE_L, parseOperationTypeDefinition, TokenKind.BRACE_R);
	  return {
	    kind: Kind.SCHEMA_DEFINITION,
	    directives: directives,
	    operationTypes: operationTypes,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * OperationTypeDefinition : OperationType : NamedType
	 */
	function parseOperationTypeDefinition(lexer) {
	  var start = lexer.token;
	  var operation = parseOperationType(lexer);
	  expect(lexer, TokenKind.COLON);
	  var type = parseNamedType(lexer);
	  return {
	    kind: Kind.OPERATION_TYPE_DEFINITION,
	    operation: operation,
	    type: type,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
	 */
	function parseScalarTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'scalar');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  return {
	    kind: Kind.SCALAR_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ObjectTypeDefinition :
	 *   Description?
	 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
	 */
	function parseObjectTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'type');
	  var name = parseName(lexer);
	  var interfaces = parseImplementsInterfaces(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseFieldsDefinition(lexer);
	  return {
	    kind: Kind.OBJECT_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    interfaces: interfaces,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ImplementsInterfaces :
	 *   - implements `&`? NamedType
	 *   - ImplementsInterfaces & NamedType
	 */
	function parseImplementsInterfaces(lexer) {
	  var types = [];
	  if (lexer.token.value === 'implements') {
	    lexer.advance();
	    // Optional leading ampersand
	    skip(lexer, TokenKind.AMP);
	    do {
	      types.push(parseNamedType(lexer));
	    } while (skip(lexer, TokenKind.AMP) ||
	    // Legacy support for the SDL?
	    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, TokenKind.NAME));
	  }
	  return types;
	}

	/**
	 * FieldsDefinition : { FieldDefinition+ }
	 */
	function parseFieldsDefinition(lexer) {
	  // Legacy support for the SDL?
	  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, TokenKind.BRACE_L) && lexer.lookahead().kind === TokenKind.BRACE_R) {
	    lexer.advance();
	    lexer.advance();
	    return [];
	  }
	  return peek(lexer, TokenKind.BRACE_L) ? many(lexer, TokenKind.BRACE_L, parseFieldDefinition, TokenKind.BRACE_R) : [];
	}

	/**
	 * FieldDefinition :
	 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
	 */
	function parseFieldDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  var name = parseName(lexer);
	  var args = parseArgumentDefs(lexer);
	  expect(lexer, TokenKind.COLON);
	  var type = parseTypeReference(lexer);
	  var directives = parseDirectives(lexer, true);
	  return {
	    kind: Kind.FIELD_DEFINITION,
	    description: description,
	    name: name,
	    arguments: args,
	    type: type,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ArgumentsDefinition : ( InputValueDefinition+ )
	 */
	function parseArgumentDefs(lexer) {
	  if (!peek(lexer, TokenKind.PAREN_L)) {
	    return [];
	  }
	  return many(lexer, TokenKind.PAREN_L, parseInputValueDef, TokenKind.PAREN_R);
	}

	/**
	 * InputValueDefinition :
	 *   - Description? Name : Type DefaultValue? Directives[Const]?
	 */
	function parseInputValueDef(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  var name = parseName(lexer);
	  expect(lexer, TokenKind.COLON);
	  var type = parseTypeReference(lexer);
	  var defaultValue = void 0;
	  if (skip(lexer, TokenKind.EQUALS)) {
	    defaultValue = parseConstValue(lexer);
	  }
	  var directives = parseDirectives(lexer, true);
	  return {
	    kind: Kind.INPUT_VALUE_DEFINITION,
	    description: description,
	    name: name,
	    type: type,
	    defaultValue: defaultValue,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * InterfaceTypeDefinition :
	 *   - Description? interface Name Directives[Const]? FieldsDefinition?
	 */
	function parseInterfaceTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'interface');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseFieldsDefinition(lexer);
	  return {
	    kind: Kind.INTERFACE_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * UnionTypeDefinition :
	 *   - Description? union Name Directives[Const]? UnionMemberTypes?
	 */
	function parseUnionTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'union');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var types = parseUnionMemberTypes(lexer);
	  return {
	    kind: Kind.UNION_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    types: types,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * UnionMemberTypes :
	 *   - = `|`? NamedType
	 *   - UnionMemberTypes | NamedType
	 */
	function parseUnionMemberTypes(lexer) {
	  var types = [];
	  if (skip(lexer, TokenKind.EQUALS)) {
	    // Optional leading pipe
	    skip(lexer, TokenKind.PIPE);
	    do {
	      types.push(parseNamedType(lexer));
	    } while (skip(lexer, TokenKind.PIPE));
	  }
	  return types;
	}

	/**
	 * EnumTypeDefinition :
	 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
	 */
	function parseEnumTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'enum');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var values = parseEnumValuesDefinition(lexer);
	  return {
	    kind: Kind.ENUM_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    values: values,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * EnumValuesDefinition : { EnumValueDefinition+ }
	 */
	function parseEnumValuesDefinition(lexer) {
	  return peek(lexer, TokenKind.BRACE_L) ? many(lexer, TokenKind.BRACE_L, parseEnumValueDefinition, TokenKind.BRACE_R) : [];
	}

	/**
	 * EnumValueDefinition : Description? EnumValue Directives[Const]?
	 *
	 * EnumValue : Name
	 */
	function parseEnumValueDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  return {
	    kind: Kind.ENUM_VALUE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * InputObjectTypeDefinition :
	 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
	 */
	function parseInputObjectTypeDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'input');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseInputFieldsDefinition(lexer);
	  return {
	    kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
	    description: description,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * InputFieldsDefinition : { InputValueDefinition+ }
	 */
	function parseInputFieldsDefinition(lexer) {
	  return peek(lexer, TokenKind.BRACE_L) ? many(lexer, TokenKind.BRACE_L, parseInputValueDef, TokenKind.BRACE_R) : [];
	}

	/**
	 * TypeExtension :
	 *   - ScalarTypeExtension
	 *   - ObjectTypeExtension
	 *   - InterfaceTypeExtension
	 *   - UnionTypeExtension
	 *   - EnumTypeExtension
	 *   - InputObjectTypeDefinition
	 */
	function parseTypeExtension(lexer) {
	  var keywordToken = lexer.lookahead();

	  if (keywordToken.kind === TokenKind.NAME) {
	    switch (keywordToken.value) {
	      case 'scalar':
	        return parseScalarTypeExtension(lexer);
	      case 'type':
	        return parseObjectTypeExtension(lexer);
	      case 'interface':
	        return parseInterfaceTypeExtension(lexer);
	      case 'union':
	        return parseUnionTypeExtension(lexer);
	      case 'enum':
	        return parseEnumTypeExtension(lexer);
	      case 'input':
	        return parseInputObjectTypeExtension(lexer);
	    }
	  }

	  throw unexpected(lexer, keywordToken);
	}

	/**
	 * ScalarTypeExtension :
	 *   - extend scalar Name Directives[Const]
	 */
	function parseScalarTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'scalar');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  if (directives.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.SCALAR_TYPE_EXTENSION,
	    name: name,
	    directives: directives,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * ObjectTypeExtension :
	 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
	 *  - extend type Name ImplementsInterfaces? Directives[Const]
	 *  - extend type Name ImplementsInterfaces
	 */
	function parseObjectTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'type');
	  var name = parseName(lexer);
	  var interfaces = parseImplementsInterfaces(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseFieldsDefinition(lexer);
	  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.OBJECT_TYPE_EXTENSION,
	    name: name,
	    interfaces: interfaces,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * InterfaceTypeExtension :
	 *   - extend interface Name Directives[Const]? FieldsDefinition
	 *   - extend interface Name Directives[Const]
	 */
	function parseInterfaceTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'interface');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseFieldsDefinition(lexer);
	  if (directives.length === 0 && fields.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.INTERFACE_TYPE_EXTENSION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * UnionTypeExtension :
	 *   - extend union Name Directives[Const]? UnionMemberTypes
	 *   - extend union Name Directives[Const]
	 */
	function parseUnionTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'union');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var types = parseUnionMemberTypes(lexer);
	  if (directives.length === 0 && types.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.UNION_TYPE_EXTENSION,
	    name: name,
	    directives: directives,
	    types: types,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * EnumTypeExtension :
	 *   - extend enum Name Directives[Const]? EnumValuesDefinition
	 *   - extend enum Name Directives[Const]
	 */
	function parseEnumTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'enum');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var values = parseEnumValuesDefinition(lexer);
	  if (directives.length === 0 && values.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.ENUM_TYPE_EXTENSION,
	    name: name,
	    directives: directives,
	    values: values,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * InputObjectTypeExtension :
	 *   - extend input Name Directives[Const]? InputFieldsDefinition
	 *   - extend input Name Directives[Const]
	 */
	function parseInputObjectTypeExtension(lexer) {
	  var start = lexer.token;
	  expectKeyword(lexer, 'extend');
	  expectKeyword(lexer, 'input');
	  var name = parseName(lexer);
	  var directives = parseDirectives(lexer, true);
	  var fields = parseInputFieldsDefinition(lexer);
	  if (directives.length === 0 && fields.length === 0) {
	    throw unexpected(lexer);
	  }
	  return {
	    kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
	    name: name,
	    directives: directives,
	    fields: fields,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * DirectiveDefinition :
	 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
	 */
	function parseDirectiveDefinition(lexer) {
	  var start = lexer.token;
	  var description = parseDescription(lexer);
	  expectKeyword(lexer, 'directive');
	  expect(lexer, TokenKind.AT);
	  var name = parseName(lexer);
	  var args = parseArgumentDefs(lexer);
	  expectKeyword(lexer, 'on');
	  var locations = parseDirectiveLocations(lexer);
	  return {
	    kind: Kind.DIRECTIVE_DEFINITION,
	    description: description,
	    name: name,
	    arguments: args,
	    locations: locations,
	    loc: loc(lexer, start)
	  };
	}

	/**
	 * DirectiveLocations :
	 *   - `|`? DirectiveLocation
	 *   - DirectiveLocations | DirectiveLocation
	 */
	function parseDirectiveLocations(lexer) {
	  // Optional leading pipe
	  skip(lexer, TokenKind.PIPE);
	  var locations = [];
	  do {
	    locations.push(parseDirectiveLocation(lexer));
	  } while (skip(lexer, TokenKind.PIPE));
	  return locations;
	}

	/*
	 * DirectiveLocation :
	 *   - ExecutableDirectiveLocation
	 *   - TypeSystemDirectiveLocation
	 *
	 * ExecutableDirectiveLocation : one of
	 *   `QUERY`
	 *   `MUTATION`
	 *   `SUBSCRIPTION`
	 *   `FIELD`
	 *   `FRAGMENT_DEFINITION`
	 *   `FRAGMENT_SPREAD`
	 *   `INLINE_FRAGMENT`
	 *
	 * TypeSystemDirectiveLocation : one of
	 *   `SCHEMA`
	 *   `SCALAR`
	 *   `OBJECT`
	 *   `FIELD_DEFINITION`
	 *   `ARGUMENT_DEFINITION`
	 *   `INTERFACE`
	 *   `UNION`
	 *   `ENUM`
	 *   `ENUM_VALUE`
	 *   `INPUT_OBJECT`
	 *   `INPUT_FIELD_DEFINITION`
	 */
	function parseDirectiveLocation(lexer) {
	  var start = lexer.token;
	  var name = parseName(lexer);
	  if (DirectiveLocation.hasOwnProperty(name.value)) {
	    return name;
	  }
	  throw unexpected(lexer, start);
	}

	// Core parsing utility functions

	/**
	 * Returns a location object, used to identify the place in
	 * the source that created a given parsed object.
	 */
	function loc(lexer, startToken) {
	  if (!lexer.options.noLocation) {
	    return new Loc(startToken, lexer.lastToken, lexer.source);
	  }
	}

	function Loc(startToken, endToken, source) {
	  this.start = startToken.start;
	  this.end = endToken.end;
	  this.startToken = startToken;
	  this.endToken = endToken;
	  this.source = source;
	}

	// Print a simplified form when appearing in JSON/util.inspect.
	Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
	  return { start: this.start, end: this.end };
	};

	/**
	 * Determines if the next token is of a given kind
	 */
	function peek(lexer, kind) {
	  return lexer.token.kind === kind;
	}

	/**
	 * If the next token is of the given kind, return true after advancing
	 * the lexer. Otherwise, do not change the parser state and return false.
	 */
	function skip(lexer, kind) {
	  var match = lexer.token.kind === kind;
	  if (match) {
	    lexer.advance();
	  }
	  return match;
	}

	/**
	 * If the next token is of the given kind, return that token after advancing
	 * the lexer. Otherwise, do not change the parser state and throw an error.
	 */
	function expect(lexer, kind) {
	  var token = lexer.token;
	  if (token.kind === kind) {
	    lexer.advance();
	    return token;
	  }
	  throw syntaxError(lexer.source, token.start, 'Expected ' + kind + ', found ' + getTokenDesc(token));
	}

	/**
	 * If the next token is a keyword with the given value, return that token after
	 * advancing the lexer. Otherwise, do not change the parser state and return
	 * false.
	 */
	function expectKeyword(lexer, value) {
	  var token = lexer.token;
	  if (token.kind === TokenKind.NAME && token.value === value) {
	    lexer.advance();
	    return token;
	  }
	  throw syntaxError(lexer.source, token.start, 'Expected "' + value + '", found ' + getTokenDesc(token));
	}

	/**
	 * Helper function for creating an error when an unexpected lexed token
	 * is encountered.
	 */
	function unexpected(lexer, atToken) {
	  var token = atToken || lexer.token;
	  return syntaxError(lexer.source, token.start, 'Unexpected ' + getTokenDesc(token));
	}

	/**
	 * Returns a possibly empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function any(lexer, openKind, parseFn, closeKind) {
	  expect(lexer, openKind);
	  var nodes = [];
	  while (!skip(lexer, closeKind)) {
	    nodes.push(parseFn(lexer));
	  }
	  return nodes;
	}

	/**
	 * Returns a non-empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function many(lexer, openKind, parseFn, closeKind) {
	  expect(lexer, openKind);
	  var nodes = [parseFn(lexer)];
	  while (!skip(lexer, closeKind)) {
	    nodes.push(parseFn(lexer));
	  }
	  return nodes;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Given a Schema and an AST node describing a type, return a GraphQLType
	 * definition which applies to that type. For example, if provided the parsed
	 * AST node for `[User]`, a GraphQLList instance will be returned, containing
	 * the type called "User" found in the schema. If a type called "User" is not
	 * found in the schema, then undefined will be returned.
	 */
	/* eslint-disable no-redeclare */

	function typeFromAST(schema, typeNode) {
	  /* eslint-enable no-redeclare */
	  var innerType = void 0;
	  if (typeNode.kind === Kind.LIST_TYPE) {
	    innerType = typeFromAST(schema, typeNode.type);
	    return innerType && GraphQLList(innerType);
	  }
	  if (typeNode.kind === Kind.NON_NULL_TYPE) {
	    innerType = typeFromAST(schema, typeNode.type);
	    return innerType && GraphQLNonNull(innerType);
	  }
	  if (typeNode.kind === Kind.NAMED_TYPE) {
	    return schema.getType(typeNode.name.value);
	  }
	  /* istanbul ignore next */
	  throw new Error('Unexpected type kind: ' + typeNode.kind + '.');
	}

	function _classCallCheck$5(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
	 * of the current field and type definitions at any point in a GraphQL document
	 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
	 */
	var TypeInfo = function () {
	  function TypeInfo(schema,
	  // NOTE: this experimental optional second parameter is only needed in order
	  // to support non-spec-compliant codebases. You should never need to use it.
	  getFieldDefFn,
	  // Initial type may be provided in rare cases to facilitate traversals
	  initialType) {
	    _classCallCheck$5(this, TypeInfo);

	    this._schema = schema;
	    this._typeStack = [];
	    this._parentTypeStack = [];
	    this._inputTypeStack = [];
	    this._fieldDefStack = [];
	    this._directive = null;
	    this._argument = null;
	    this._enumValue = null;
	    this._getFieldDef = getFieldDefFn || getFieldDef;
	    if (initialType) {
	      if (isInputType(initialType)) {
	        this._inputTypeStack.push(initialType);
	      }
	      if (isCompositeType(initialType)) {
	        this._parentTypeStack.push(initialType);
	      }
	      if (isOutputType(initialType)) {
	        this._typeStack.push(initialType);
	      }
	    }
	  }

	  TypeInfo.prototype.getType = function getType() {
	    if (this._typeStack.length > 0) {
	      return this._typeStack[this._typeStack.length - 1];
	    }
	  };

	  TypeInfo.prototype.getParentType = function getParentType() {
	    if (this._parentTypeStack.length > 0) {
	      return this._parentTypeStack[this._parentTypeStack.length - 1];
	    }
	  };

	  TypeInfo.prototype.getInputType = function getInputType() {
	    if (this._inputTypeStack.length > 0) {
	      return this._inputTypeStack[this._inputTypeStack.length - 1];
	    }
	  };

	  TypeInfo.prototype.getParentInputType = function getParentInputType() {
	    if (this._inputTypeStack.length > 1) {
	      return this._inputTypeStack[this._inputTypeStack.length - 2];
	    }
	  };

	  TypeInfo.prototype.getFieldDef = function getFieldDef() {
	    if (this._fieldDefStack.length > 0) {
	      return this._fieldDefStack[this._fieldDefStack.length - 1];
	    }
	  };

	  TypeInfo.prototype.getDirective = function getDirective() {
	    return this._directive;
	  };

	  TypeInfo.prototype.getArgument = function getArgument() {
	    return this._argument;
	  };

	  TypeInfo.prototype.getEnumValue = function getEnumValue() {
	    return this._enumValue;
	  };

	  // Flow does not yet handle this case.


	  TypeInfo.prototype.enter = function enter(node /* ASTNode */) {
	    var schema = this._schema;
	    // Note: many of the types below are explicitly typed as "mixed" to drop
	    // any assumptions of a valid schema to ensure runtime types are properly
	    // checked before continuing since TypeInfo is used as part of validation
	    // which occurs before guarantees of schema and document validity.
	    switch (node.kind) {
	      case Kind.SELECTION_SET:
	        var namedType = getNamedType(this.getType());
	        this._parentTypeStack.push(isCompositeType(namedType) ? namedType : undefined);
	        break;
	      case Kind.FIELD:
	        var parentType = this.getParentType();
	        var fieldDef = void 0;
	        var fieldType = void 0;
	        if (parentType) {
	          fieldDef = this._getFieldDef(schema, parentType, node);
	          if (fieldDef) {
	            fieldType = fieldDef.type;
	          }
	        }
	        this._fieldDefStack.push(fieldDef);
	        this._typeStack.push(isOutputType(fieldType) ? fieldType : undefined);
	        break;
	      case Kind.DIRECTIVE:
	        this._directive = schema.getDirective(node.name.value);
	        break;
	      case Kind.OPERATION_DEFINITION:
	        var type = void 0;
	        if (node.operation === 'query') {
	          type = schema.getQueryType();
	        } else if (node.operation === 'mutation') {
	          type = schema.getMutationType();
	        } else if (node.operation === 'subscription') {
	          type = schema.getSubscriptionType();
	        }
	        this._typeStack.push(isObjectType(type) ? type : undefined);
	        break;
	      case Kind.INLINE_FRAGMENT:
	      case Kind.FRAGMENT_DEFINITION:
	        var typeConditionAST = node.typeCondition;
	        var outputType = typeConditionAST ? typeFromAST(schema, typeConditionAST) : getNamedType(this.getType());
	        this._typeStack.push(isOutputType(outputType) ? outputType : undefined);
	        break;
	      case Kind.VARIABLE_DEFINITION:
	        var inputType = typeFromAST(schema, node.type);
	        this._inputTypeStack.push(isInputType(inputType) ? inputType : undefined);
	        break;
	      case Kind.ARGUMENT:
	        var argDef = void 0;
	        var argType = void 0;
	        var fieldOrDirective = this.getDirective() || this.getFieldDef();
	        if (fieldOrDirective) {
	          argDef = find(fieldOrDirective.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (argDef) {
	            argType = argDef.type;
	          }
	        }
	        this._argument = argDef;
	        this._inputTypeStack.push(isInputType(argType) ? argType : undefined);
	        break;
	      case Kind.LIST:
	        var listType = getNullableType(this.getInputType());
	        var itemType = isListType(listType) ? listType.ofType : listType;
	        this._inputTypeStack.push(isInputType(itemType) ? itemType : undefined);
	        break;
	      case Kind.OBJECT_FIELD:
	        var objectType = getNamedType(this.getInputType());
	        var inputFieldType = void 0;
	        if (isInputObjectType(objectType)) {
	          var inputField = objectType.getFields()[node.name.value];
	          if (inputField) {
	            inputFieldType = inputField.type;
	          }
	        }
	        this._inputTypeStack.push(isInputType(inputFieldType) ? inputFieldType : undefined);
	        break;
	      case Kind.ENUM:
	        var enumType = getNamedType(this.getInputType());
	        var enumValue = void 0;
	        if (isEnumType(enumType)) {
	          enumValue = enumType.getValue(node.value);
	        }
	        this._enumValue = enumValue;
	        break;
	    }
	  };

	  TypeInfo.prototype.leave = function leave(node) {
	    switch (node.kind) {
	      case Kind.SELECTION_SET:
	        this._parentTypeStack.pop();
	        break;
	      case Kind.FIELD:
	        this._fieldDefStack.pop();
	        this._typeStack.pop();
	        break;
	      case Kind.DIRECTIVE:
	        this._directive = null;
	        break;
	      case Kind.OPERATION_DEFINITION:
	      case Kind.INLINE_FRAGMENT:
	      case Kind.FRAGMENT_DEFINITION:
	        this._typeStack.pop();
	        break;
	      case Kind.VARIABLE_DEFINITION:
	        this._inputTypeStack.pop();
	        break;
	      case Kind.ARGUMENT:
	        this._argument = null;
	        this._inputTypeStack.pop();
	        break;
	      case Kind.LIST:
	      case Kind.OBJECT_FIELD:
	        this._inputTypeStack.pop();
	        break;
	      case Kind.ENUM:
	        this._enumValue = null;
	        break;
	    }
	  };

	  return TypeInfo;
	}();

	/**
	 * Not exactly the same as the executor's definition of getFieldDef, in this
	 * statically evaluated environment we do not always have an Object type,
	 * and need to handle Interface and Union types.
	 */
	function getFieldDef(schema, parentType, fieldNode) {
	  var name = fieldNode.name.value;
	  if (name === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return SchemaMetaFieldDef;
	  }
	  if (name === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return TypeMetaFieldDef;
	  }
	  if (name === TypeNameMetaFieldDef.name && isCompositeType(parentType)) {
	    return TypeNameMetaFieldDef;
	  }
	  if (isObjectType(parentType) || isInterfaceType(parentType)) {
	    return parentType.getFields()[name];
	  }
	}

	function nonExecutableDefinitionMessage(defName) {
	  return 'The ' + defName + ' definition is not executable.';
	}

	/**
	 * Executable definitions
	 *
	 * A GraphQL document is only valid for execution if all definitions are either
	 * operation or fragment definitions.
	 */
	function ExecutableDefinitions(context) {
	  return {
	    Document: function Document(node) {
	      node.definitions.forEach(function (definition) {
	        if (definition.kind !== Kind.OPERATION_DEFINITION && definition.kind !== Kind.FRAGMENT_DEFINITION) {
	          context.reportError(new GraphQLError(nonExecutableDefinitionMessage(definition.kind === Kind.SCHEMA_DEFINITION ? 'schema' : definition.name.value), [definition]));
	        }
	      });
	      return false;
	    }
	  };
	}

	function duplicateOperationNameMessage(operationName) {
	  return 'There can be only one operation named "' + operationName + '".';
	}

	/**
	 * Unique operation names
	 *
	 * A GraphQL document is only valid if all defined operations have unique names.
	 */
	function UniqueOperationNames(context) {
	  var knownOperationNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      var operationName = node.name;
	      if (operationName) {
	        if (knownOperationNames[operationName.value]) {
	          context.reportError(new GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
	        } else {
	          knownOperationNames[operationName.value] = operationName;
	        }
	      }
	      return false;
	    },

	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

	function anonOperationNotAloneMessage() {
	  return 'This anonymous operation must be the only defined operation.';
	}

	/**
	 * Lone anonymous operation
	 *
	 * A GraphQL document is only valid if when it contains an anonymous operation
	 * (the query short-hand) that it contains only that one operation definition.
	 */
	function LoneAnonymousOperation(context) {
	  var operationCount = 0;
	  return {
	    Document: function Document(node) {
	      operationCount = node.definitions.filter(function (definition) {
	        return definition.kind === Kind.OPERATION_DEFINITION;
	      }).length;
	    },
	    OperationDefinition: function OperationDefinition(node) {
	      if (!node.name && operationCount > 1) {
	        context.reportError(new GraphQLError(anonOperationNotAloneMessage(), [node]));
	      }
	    }
	  };
	}

	function singleFieldOnlyMessage(name) {
	  return (name ? 'Subscription "' + name + '" ' : 'Anonymous Subscription ') + 'must select only one top level field.';
	}

	/**
	 * Subscriptions must only include one field.
	 *
	 * A GraphQL subscription is valid only if it contains a single root field.
	 */
	function SingleFieldSubscriptions(context) {
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      if (node.operation === 'subscription') {
	        if (node.selectionSet.selections.length !== 1) {
	          context.reportError(new GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
	        }
	      }
	    }
	  };
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Given an invalid input string and a list of valid options, returns a filtered
	 * list of valid options sorted based on their similarity with the input.
	 */
	function suggestionList(input, options) {
	  var optionsByDistance = Object.create(null);
	  var oLength = options.length;
	  var inputThreshold = input.length / 2;
	  for (var i = 0; i < oLength; i++) {
	    var distance = lexicalDistance(input, options[i]);
	    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
	    if (distance <= threshold) {
	      optionsByDistance[options[i]] = distance;
	    }
	  }
	  return Object.keys(optionsByDistance).sort(function (a, b) {
	    return optionsByDistance[a] - optionsByDistance[b];
	  });
	}

	/**
	 * Computes the lexical distance between strings A and B.
	 *
	 * The "distance" between two strings is given by counting the minimum number
	 * of edits needed to transform string A into string B. An edit can be an
	 * insertion, deletion, or substitution of a single character, or a swap of two
	 * adjacent characters.
	 *
	 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
	 * as a single edit which helps identify mis-cased values with an edit distance
	 * of 1.
	 *
	 * This distance can be useful for detecting typos in input or sorting
	 *
	 * @param {string} a
	 * @param {string} b
	 * @return {int} distance in number of edits
	 */
	function lexicalDistance(aStr, bStr) {
	  if (aStr === bStr) {
	    return 0;
	  }

	  var i = void 0;
	  var j = void 0;
	  var d = [];
	  var a = aStr.toLowerCase();
	  var b = bStr.toLowerCase();
	  var aLength = a.length;
	  var bLength = b.length;

	  // Any case change counts as a single edit
	  if (a === b) {
	    return 1;
	  }

	  for (i = 0; i <= aLength; i++) {
	    d[i] = [i];
	  }

	  for (j = 1; j <= bLength; j++) {
	    d[0][j] = j;
	  }

	  for (i = 1; i <= aLength; i++) {
	    for (j = 1; j <= bLength; j++) {
	      var cost = a[i - 1] === b[j - 1] ? 0 : 1;

	      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

	      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
	        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
	      }
	    }
	  }

	  return d[aLength][bLength];
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var MAX_LENGTH = 5;

	/**
	 * Given [ A, B, C ] return 'A, B, or C'.
	 */
	function orList(items) {
	  var selected = items.slice(0, MAX_LENGTH);
	  return selected.reduce(function (list, quoted, index) {
	    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
	  });
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Given [ A, B, C ] return '"A", "B", or "C"'.
	 */
	function quotedOrList(items) {
	  return orList(items.map(function (item) {
	    return '"' + item + '"';
	  }));
	}

	function unknownTypeMessage(typeName, suggestedTypes) {
	  var message = 'Unknown type "' + typeName + '".';
	  if (suggestedTypes.length) {
	    message += ' Did you mean ' + quotedOrList(suggestedTypes) + '?';
	  }
	  return message;
	}

	/**
	 * Known type names
	 *
	 * A GraphQL document is only valid if referenced types (specifically
	 * variable definitions and fragment conditions) are defined by the type schema.
	 */
	function KnownTypeNames(context) {
	  return {
	    // TODO: when validating IDL, re-enable these. Experimental version does not
	    // add unreferenced types, resulting in false-positive errors. Squelched
	    // errors for now.
	    ObjectTypeDefinition: function ObjectTypeDefinition() {
	      return false;
	    },
	    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
	      return false;
	    },
	    UnionTypeDefinition: function UnionTypeDefinition() {
	      return false;
	    },
	    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
	      return false;
	    },
	    NamedType: function NamedType(node) {
	      var schema = context.getSchema();
	      var typeName = node.name.value;
	      var type = schema.getType(typeName);
	      if (!type) {
	        context.reportError(new GraphQLError(unknownTypeMessage(typeName, suggestionList(typeName, Object.keys(schema.getTypeMap()))), [node]));
	      }
	    }
	  };
	}

	function inlineFragmentOnNonCompositeErrorMessage(type) {
	  return 'Fragment cannot condition on non composite type "' + String(type) + '".';
	}

	function fragmentOnNonCompositeErrorMessage(fragName, type) {
	  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + String(type) + '".');
	}

	/**
	 * Fragments on composite type
	 *
	 * Fragments use a type condition to determine if they apply, since fragments
	 * can only be spread into a composite type (object, interface, or union), the
	 * type condition must also be a composite type.
	 */
	function FragmentsOnCompositeTypes(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var typeCondition = node.typeCondition;
	      if (typeCondition) {
	        var type = typeFromAST(context.getSchema(), typeCondition);
	        if (type && !isCompositeType(type)) {
	          context.reportError(new GraphQLError(inlineFragmentOnNonCompositeErrorMessage(print(typeCondition)), [typeCondition]));
	        }
	      }
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var type = typeFromAST(context.getSchema(), node.typeCondition);
	      if (type && !isCompositeType(type)) {
	        context.reportError(new GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, print(node.typeCondition)), [node.typeCondition]));
	      }
	    }
	  };
	}

	function nonInputTypeOnVarMessage(variableName, typeName) {
	  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
	}

	/**
	 * Variables are input types
	 *
	 * A GraphQL operation is only valid if all the variables it defines are of
	 * input types (scalar, enum, or input object).
	 */
	function VariablesAreInputTypes(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var type = typeFromAST(context.getSchema(), node.type);

	      // If the variable type is not an input type, return an error.
	      if (type && !isInputType(type)) {
	        var variableName = node.variable.name.value;
	        context.reportError(new GraphQLError(nonInputTypeOnVarMessage(variableName, print(node.type)), [node.type]));
	      }
	    }
	  };
	}

	function noSubselectionAllowedMessage(fieldName, type) {
	  return 'Field "' + fieldName + '" must not have a selection since ' + ('type "' + String(type) + '" has no subfields.');
	}

	function requiredSubselectionMessage(fieldName, type) {
	  return 'Field "' + fieldName + '" of type "' + String(type) + '" must have a ' + ('selection of subfields. Did you mean "' + fieldName + ' { ... }"?');
	}

	/**
	 * Scalar leafs
	 *
	 * A GraphQL document is valid only if all leaf fields (fields without
	 * sub selections) are of scalar or enum types.
	 */
	function ScalarLeafs(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getType();
	      var selectionSet = node.selectionSet;
	      if (type) {
	        if (isLeafType(getNamedType(type))) {
	          if (selectionSet) {
	            context.reportError(new GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [selectionSet]));
	          }
	        } else if (!selectionSet) {
	          context.reportError(new GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
	        }
	      }
	    }
	  };
	}

	function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
	  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
	  if (suggestedTypeNames.length !== 0) {
	    var suggestions = quotedOrList(suggestedTypeNames);
	    message += ' Did you mean to use an inline fragment on ' + suggestions + '?';
	  } else if (suggestedFieldNames.length !== 0) {
	    message += ' Did you mean ' + quotedOrList(suggestedFieldNames) + '?';
	  }
	  return message;
	}

	/**
	 * Fields on correct type
	 *
	 * A GraphQL document is only valid if all fields selected are defined by the
	 * parent type, or are an allowed meta field such as __typename.
	 */
	function FieldsOnCorrectType(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getParentType();
	      if (type) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          // This field doesn't exist, lets look for suggestions.
	          var schema = context.getSchema();
	          var fieldName = node.name.value;
	          // First determine if there are any suggested types to condition on.
	          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName);
	          // If there are no suggested types, then perhaps this was a typo?
	          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName);

	          // Report an error, including helpful suggestions.
	          context.reportError(new GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
	        }
	      }
	    }
	  };
	}

	/**
	 * Go through all of the implementations of type, as well as the interfaces
	 * that they implement. If any of those types include the provided field,
	 * suggest them, sorted by how often the type is referenced,  starting
	 * with Interfaces.
	 */
	function getSuggestedTypeNames(schema, type, fieldName) {
	  if (isAbstractType(type)) {
	    var suggestedObjectTypes = [];
	    var interfaceUsageCount = Object.create(null);
	    schema.getPossibleTypes(type).forEach(function (possibleType) {
	      if (!possibleType.getFields()[fieldName]) {
	        return;
	      }
	      // This object type defines this field.
	      suggestedObjectTypes.push(possibleType.name);
	      possibleType.getInterfaces().forEach(function (possibleInterface) {
	        if (!possibleInterface.getFields()[fieldName]) {
	          return;
	        }
	        // This interface type defines this field.
	        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
	      });
	    });

	    // Suggest interface types based on how common they are.
	    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
	      return interfaceUsageCount[b] - interfaceUsageCount[a];
	    });

	    // Suggest both interface and object types.
	    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
	  }

	  // Otherwise, must be an Object type, which does not have possible fields.
	  return [];
	}

	/**
	 * For the field name provided, determine if there are any similar field names
	 * that may be the result of a typo.
	 */
	function getSuggestedFieldNames(schema, type, fieldName) {
	  if (isObjectType(type) || isInterfaceType(type)) {
	    var possibleFieldNames = Object.keys(type.getFields());
	    return suggestionList(fieldName, possibleFieldNames);
	  }
	  // Otherwise, must be a Union type, which does not define fields.
	  return [];
	}

	function duplicateFragmentNameMessage(fragName) {
	  return 'There can be only one fragment named "' + fragName + '".';
	}

	/**
	 * Unique fragment names
	 *
	 * A GraphQL document is only valid if all defined fragments have unique names.
	 */
	function UniqueFragmentNames(context) {
	  var knownFragmentNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var fragmentName = node.name.value;
	      if (knownFragmentNames[fragmentName]) {
	        context.reportError(new GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
	      } else {
	        knownFragmentNames[fragmentName] = node.name;
	      }
	      return false;
	    }
	  };
	}

	function unknownFragmentMessage(fragName) {
	  return 'Unknown fragment "' + fragName + '".';
	}

	/**
	 * Known fragment names
	 *
	 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
	 * to fragments defined in the same document.
	 */
	function KnownFragmentNames(context) {
	  return {
	    FragmentSpread: function FragmentSpread(node) {
	      var fragmentName = node.name.value;
	      var fragment = context.getFragment(fragmentName);
	      if (!fragment) {
	        context.reportError(new GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
	      }
	    }
	  };
	}

	function unusedFragMessage(fragName) {
	  return 'Fragment "' + fragName + '" is never used.';
	}

	/**
	 * No unused fragments
	 *
	 * A GraphQL document is only valid if all fragment definitions are spread
	 * within operations, or spread within other fragments spread within operations.
	 */
	function NoUnusedFragments(context) {
	  var operationDefs = [];
	  var fragmentDefs = [];

	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      operationDefs.push(node);
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      fragmentDefs.push(node);
	      return false;
	    },

	    Document: {
	      leave: function leave() {
	        var fragmentNameUsed = Object.create(null);
	        operationDefs.forEach(function (operation) {
	          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
	            fragmentNameUsed[fragment.name.value] = true;
	          });
	        });

	        fragmentDefs.forEach(function (fragmentDef) {
	          var fragName = fragmentDef.name.value;
	          if (fragmentNameUsed[fragName] !== true) {
	            context.reportError(new GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
	          }
	        });
	      }
	    }
	  };
	}

	function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
	  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
	}

	function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
	  return 'Fragment cannot be spread here as objects of ' + ('type "' + String(parentType) + '" can never be of type "' + String(fragType) + '".');
	}

	/**
	 * Possible fragment spread
	 *
	 * A fragment spread is only valid if the type condition could ever possibly
	 * be true: if there is a non-empty intersection of the possible parent types,
	 * and possible types which pass the type condition.
	 */
	function PossibleFragmentSpreads(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var fragType = context.getType();
	      var parentType = context.getParentType();
	      if (isCompositeType(fragType) && isCompositeType(parentType) && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
	        context.reportError(new GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
	      }
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var fragName = node.name.value;
	      var fragType = getFragmentType(context, fragName);
	      var parentType = context.getParentType();
	      if (fragType && parentType && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
	        context.reportError(new GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
	      }
	    }
	  };
	}

	function getFragmentType(context, name) {
	  var frag = context.getFragment(name);
	  if (frag) {
	    var type = typeFromAST(context.getSchema(), frag.typeCondition);
	    if (isCompositeType(type)) {
	      return type;
	    }
	  }
	}

	function cycleErrorMessage(fragName, spreadNames) {
	  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
	  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
	}

	function NoFragmentCycles(context) {
	  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
	  // are not redundantly reported.
	  var visitedFrags = Object.create(null);

	  // Array of AST nodes used to produce meaningful errors
	  var spreadPath = [];

	  // Position in the spread path
	  var spreadPathIndexByName = Object.create(null);

	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      if (!visitedFrags[node.name.value]) {
	        detectCycleRecursive(node);
	      }
	      return false;
	    }
	  };

	  // This does a straight-forward DFS to find cycles.
	  // It does not terminate when a cycle was found but continues to explore
	  // the graph to find all possible cycles.
	  function detectCycleRecursive(fragment) {
	    var fragmentName = fragment.name.value;
	    visitedFrags[fragmentName] = true;

	    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
	    if (spreadNodes.length === 0) {
	      return;
	    }

	    spreadPathIndexByName[fragmentName] = spreadPath.length;

	    for (var i = 0; i < spreadNodes.length; i++) {
	      var spreadNode = spreadNodes[i];
	      var spreadName = spreadNode.name.value;
	      var cycleIndex = spreadPathIndexByName[spreadName];

	      if (cycleIndex === undefined) {
	        spreadPath.push(spreadNode);
	        if (!visitedFrags[spreadName]) {
	          var spreadFragment = context.getFragment(spreadName);
	          if (spreadFragment) {
	            detectCycleRecursive(spreadFragment);
	          }
	        }
	        spreadPath.pop();
	      } else {
	        var cyclePath = spreadPath.slice(cycleIndex);
	        context.reportError(new GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
	          return s.name.value;
	        })), cyclePath.concat(spreadNode)));
	      }
	    }

	    spreadPathIndexByName[fragmentName] = undefined;
	  }
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function duplicateVariableMessage(variableName) {
	  return 'There can be only one variable named "' + variableName + '".';
	}

	/**
	 * Unique variable names
	 *
	 * A GraphQL operation is only valid if all its variables are uniquely named.
	 */
	function UniqueVariableNames(context) {
	  var knownVariableNames = Object.create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      knownVariableNames = Object.create(null);
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      var variableName = node.variable.name.value;
	      if (knownVariableNames[variableName]) {
	        context.reportError(new GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
	      } else {
	        knownVariableNames[variableName] = node.variable.name;
	      }
	    }
	  };
	}

	function undefinedVarMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
	}

	/**
	 * No undefined variables
	 *
	 * A GraphQL operation is only valid if all variables encountered, both directly
	 * and via fragment spreads, are defined by that operation.
	 */
	function NoUndefinedVariables(context) {
	  var variableNameDefined = Object.create(null);

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableNameDefined = Object.create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);

	        usages.forEach(function (_ref) {
	          var node = _ref.node;

	          var varName = node.name.value;
	          if (variableNameDefined[varName] !== true) {
	            context.reportError(new GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      variableNameDefined[node.variable.name.value] = true;
	    }
	  };
	}

	function unusedVariableMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
	}

	/**
	 * No unused variables
	 *
	 * A GraphQL operation is only valid if all variables defined by an operation
	 * are used, either directly or within a spread fragment.
	 */
	function NoUnusedVariables(context) {
	  var variableDefs = [];

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableDefs = [];
	      },
	      leave: function leave(operation) {
	        var variableNameUsed = Object.create(null);
	        var usages = context.getRecursiveVariableUsages(operation);
	        var opName = operation.name ? operation.name.value : null;

	        usages.forEach(function (_ref) {
	          var node = _ref.node;

	          variableNameUsed[node.name.value] = true;
	        });

	        variableDefs.forEach(function (variableDef) {
	          var variableName = variableDef.variable.name.value;
	          if (variableNameUsed[variableName] !== true) {
	            context.reportError(new GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(def) {
	      variableDefs.push(def);
	    }
	  };
	}

	function unknownDirectiveMessage(directiveName) {
	  return 'Unknown directive "' + directiveName + '".';
	}

	function misplacedDirectiveMessage(directiveName, location) {
	  return 'Directive "' + directiveName + '" may not be used on ' + location + '.';
	}

	/**
	 * Known directives
	 *
	 * A GraphQL document is only valid if all `@directives` are known by the
	 * schema and legally positioned.
	 */
	function KnownDirectives(context) {
	  return {
	    Directive: function Directive(node, key, parent, path, ancestors) {
	      var directiveDef = find(context.getSchema().getDirectives(), function (def) {
	        return def.name === node.name.value;
	      });
	      if (!directiveDef) {
	        context.reportError(new GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
	        return;
	      }
	      var candidateLocation = getDirectiveLocationForASTPath(ancestors);
	      if (candidateLocation && directiveDef.locations.indexOf(candidateLocation) === -1) {
	        context.reportError(new GraphQLError(misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
	      }
	    }
	  };
	}

	function getDirectiveLocationForASTPath(ancestors) {
	  var appliedTo = ancestors[ancestors.length - 1];
	  if (!Array.isArray(appliedTo)) {
	    switch (appliedTo.kind) {
	      case Kind.OPERATION_DEFINITION:
	        switch (appliedTo.operation) {
	          case 'query':
	            return DirectiveLocation.QUERY;
	          case 'mutation':
	            return DirectiveLocation.MUTATION;
	          case 'subscription':
	            return DirectiveLocation.SUBSCRIPTION;
	        }
	        break;
	      case Kind.FIELD:
	        return DirectiveLocation.FIELD;
	      case Kind.FRAGMENT_SPREAD:
	        return DirectiveLocation.FRAGMENT_SPREAD;
	      case Kind.INLINE_FRAGMENT:
	        return DirectiveLocation.INLINE_FRAGMENT;
	      case Kind.FRAGMENT_DEFINITION:
	        return DirectiveLocation.FRAGMENT_DEFINITION;
	      case Kind.SCHEMA_DEFINITION:
	        return DirectiveLocation.SCHEMA;
	      case Kind.SCALAR_TYPE_DEFINITION:
	      case Kind.SCALAR_TYPE_EXTENSION:
	        return DirectiveLocation.SCALAR;
	      case Kind.OBJECT_TYPE_DEFINITION:
	      case Kind.OBJECT_TYPE_EXTENSION:
	        return DirectiveLocation.OBJECT;
	      case Kind.FIELD_DEFINITION:
	        return DirectiveLocation.FIELD_DEFINITION;
	      case Kind.INTERFACE_TYPE_DEFINITION:
	      case Kind.INTERFACE_TYPE_EXTENSION:
	        return DirectiveLocation.INTERFACE;
	      case Kind.UNION_TYPE_DEFINITION:
	      case Kind.UNION_TYPE_EXTENSION:
	        return DirectiveLocation.UNION;
	      case Kind.ENUM_TYPE_DEFINITION:
	      case Kind.ENUM_TYPE_EXTENSION:
	        return DirectiveLocation.ENUM;
	      case Kind.ENUM_VALUE_DEFINITION:
	        return DirectiveLocation.ENUM_VALUE;
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	      case Kind.INPUT_OBJECT_TYPE_EXTENSION:
	        return DirectiveLocation.INPUT_OBJECT;
	      case Kind.INPUT_VALUE_DEFINITION:
	        var parentNode = ancestors[ancestors.length - 3];
	        return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? DirectiveLocation.INPUT_FIELD_DEFINITION : DirectiveLocation.ARGUMENT_DEFINITION;
	    }
	  }
	}

	function duplicateDirectiveMessage(directiveName) {
	  return 'The directive "' + directiveName + '" can only be used once at ' + 'this location.';
	}

	/**
	 * Unique directive names per location
	 *
	 * A GraphQL document is only valid if all directives at a given location
	 * are uniquely named.
	 */
	function UniqueDirectivesPerLocation(context) {
	  return {
	    // Many different AST nodes may contain directives. Rather than listing
	    // them all, just listen for entering any node, and check to see if it
	    // defines any directives.
	    enter: function enter(node) {
	      // Flow can't refine that node.directives will only contain directives,
	      var directives = node.directives;
	      if (directives) {
	        var knownDirectives = Object.create(null);
	        directives.forEach(function (directive) {
	          var directiveName = directive.name.value;
	          if (knownDirectives[directiveName]) {
	            context.reportError(new GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
	          } else {
	            knownDirectives[directiveName] = directive;
	          }
	        });
	      }
	    }
	  };
	}

	function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
	  var message = 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + typeName + '".');
	  if (suggestedArgs.length) {
	    message += ' Did you mean ' + quotedOrList(suggestedArgs) + '?';
	  }
	  return message;
	}

	function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
	  var message = 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
	  if (suggestedArgs.length) {
	    message += ' Did you mean ' + quotedOrList(suggestedArgs) + '?';
	  }
	  return message;
	}

	/**
	 * Known argument names
	 *
	 * A GraphQL field is only valid if all supplied arguments are defined by
	 * that field.
	 */
	function KnownArgumentNames(context) {
	  return {
	    Argument: function Argument(node, key, parent, path, ancestors) {
	      var argDef = context.getArgument();
	      if (!argDef) {
	        var argumentOf = ancestors[ancestors.length - 1];
	        if (argumentOf.kind === Kind.FIELD) {
	          var fieldDef = context.getFieldDef();
	          var parentType = context.getParentType();
	          if (fieldDef && parentType) {
	            context.reportError(new GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name, suggestionList(node.name.value, fieldDef.args.map(function (arg) {
	              return arg.name;
	            }))), [node]));
	          }
	        } else if (argumentOf.kind === Kind.DIRECTIVE) {
	          var directive = context.getDirective();
	          if (directive) {
	            context.reportError(new GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name, suggestionList(node.name.value, directive.args.map(function (arg) {
	              return arg.name;
	            }))), [node]));
	          }
	        }
	      }
	    }
	  };
	}

	function duplicateArgMessage(argName) {
	  return 'There can be only one argument named "' + argName + '".';
	}

	/**
	 * Unique argument names
	 *
	 * A GraphQL field or directive is only valid if all supplied arguments are
	 * uniquely named.
	 */
	function UniqueArgumentNames(context) {
	  var knownArgNames = Object.create(null);
	  return {
	    Field: function Field() {
	      knownArgNames = Object.create(null);
	    },
	    Directive: function Directive() {
	      knownArgNames = Object.create(null);
	    },
	    Argument: function Argument(node) {
	      var argName = node.name.value;
	      if (knownArgNames[argName]) {
	        context.reportError(new GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
	      } else {
	        knownArgNames[argName] = node.name;
	      }
	      return false;
	    }
	  };
	}

	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * for each value in the array.
	 *
	 * This provides a convenient lookup for the array items if the key function
	 * produces unique results.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: { name: 'Jon', num: '555-1234' },
	 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
	 *     const entriesByName = keyMap(
	 *       phoneBook,
	 *       entry => entry.name
	 *     )
	 *
	 *     // { name: 'Jenny', num: '857-6309' }
	 *     const jennyEntry = entriesByName['Jenny']
	 *
	 */
	function keyMap(list, keyFn) {
	  return list.reduce(function (map, item) {
	    return map[keyFn(item)] = item, map;
	  }, Object.create(null));
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

	function badValueMessage(typeName, valueName, message) {
	  return 'Expected type ' + typeName + ', found ' + valueName + (message ? '; ' + message : '.');
	}

	function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
	  return 'Field ' + typeName + '.' + fieldName + ' of required type ' + (fieldTypeName + ' was not provided.');
	}

	function unknownFieldMessage(typeName, fieldName, message) {
	  return 'Field "' + fieldName + '" is not defined by type ' + typeName + (message ? '; ' + message : '.');
	}

	/**
	 * Value literals of correct type
	 *
	 * A GraphQL document is only valid if all value literals are of the type
	 * expected at their position.
	 */
	function ValuesOfCorrectType(context) {
	  return {
	    NullValue: function NullValue(node) {
	      var type = context.getInputType();
	      if (isNonNullType(type)) {
	        context.reportError(new GraphQLError(badValueMessage(String(type), print(node)), node));
	      }
	    },
	    ListValue: function ListValue(node) {
	      // Note: TypeInfo will traverse into a list's item type, so look to the
	      // parent input type to check if it is a list.
	      var type = getNullableType(context.getParentInputType());
	      if (!isListType(type)) {
	        isValidScalar(context, node);
	        return false; // Don't traverse further.
	      }
	    },
	    ObjectValue: function ObjectValue(node) {
	      var type = getNamedType(context.getInputType());
	      if (!isInputObjectType(type)) {
	        isValidScalar(context, node);
	        return false; // Don't traverse further.
	      }
	      // Ensure every required field exists.
	      var inputFields = type.getFields();
	      var fieldNodeMap = keyMap(node.fields, function (field) {
	        return field.name.value;
	      });
	      Object.keys(inputFields).forEach(function (fieldName) {
	        var fieldType = inputFields[fieldName].type;
	        var fieldNode = fieldNodeMap[fieldName];
	        if (!fieldNode && isNonNullType(fieldType)) {
	          context.reportError(new GraphQLError(requiredFieldMessage(type.name, fieldName, String(fieldType)), node));
	        }
	      });
	    },
	    ObjectField: function ObjectField(node) {
	      var parentType = getNamedType(context.getParentInputType());
	      var fieldType = context.getInputType();
	      if (!fieldType && isInputObjectType(parentType)) {
	        var suggestions = suggestionList(node.name.value, Object.keys(parentType.getFields()));
	        var didYouMean = suggestions.length !== 0 ? 'Did you mean ' + orList(suggestions) + '?' : undefined;
	        context.reportError(new GraphQLError(unknownFieldMessage(parentType.name, node.name.value, didYouMean), node));
	      }
	    },
	    EnumValue: function EnumValue(node) {
	      var type = getNamedType(context.getInputType());
	      if (!isEnumType(type)) {
	        isValidScalar(context, node);
	      } else if (!type.getValue(node.value)) {
	        context.reportError(new GraphQLError(badValueMessage(type.name, print(node), enumTypeSuggestion(type, node)), node));
	      }
	    },

	    IntValue: function IntValue(node) {
	      return isValidScalar(context, node);
	    },
	    FloatValue: function FloatValue(node) {
	      return isValidScalar(context, node);
	    },
	    StringValue: function StringValue(node) {
	      return isValidScalar(context, node);
	    },
	    BooleanValue: function BooleanValue(node) {
	      return isValidScalar(context, node);
	    }
	  };
	}

	/**
	 * Any value literal may be a valid representation of a Scalar, depending on
	 * that scalar type.
	 */
	function isValidScalar(context, node) {
	  // Report any error at the full type expected by the location.
	  var locationType = context.getInputType();
	  if (!locationType) {
	    return;
	  }

	  var type = getNamedType(locationType);

	  if (!isScalarType(type)) {
	    context.reportError(new GraphQLError(badValueMessage(String(locationType), print(node), enumTypeSuggestion(type, node)), node));
	    return;
	  }

	  // Scalars determine if a literal value is valid via parseLiteral() which
	  // may throw or return an invalid value to indicate failure.
	  try {
	    var parseResult = type.parseLiteral(node, undefined /* variables */);
	    if (isInvalid(parseResult)) {
	      context.reportError(new GraphQLError(badValueMessage(String(locationType), print(node)), node));
	    }
	  } catch (error) {
	    // Ensure a reference to the original error is maintained.
	    context.reportError(new GraphQLError(badValueMessage(String(locationType), print(node), error.message), node, undefined, undefined, undefined, error));
	  }
	}

	function enumTypeSuggestion(type, node) {
	  if (isEnumType(type)) {
	    var suggestions = suggestionList(print(node), type.getValues().map(function (value) {
	      return value.name;
	    }));
	    if (suggestions.length !== 0) {
	      return 'Did you mean the enum value ' + orList(suggestions) + '?';
	    }
	  }
	}

	function missingFieldArgMessage(fieldName, argName, type) {
	  return 'Field "' + fieldName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
	}

	function missingDirectiveArgMessage(directiveName, argName, type) {
	  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + String(type) + '" is required but not provided.');
	}

	/**
	 * Provided required arguments
	 *
	 * A field or directive is only valid if all required (non-null) field arguments
	 * have been provided.
	 */
	function ProvidedNonNullArguments(context) {
	  return {
	    Field: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(node) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          return false;
	        }
	        var argNodes = node.arguments || [];

	        var argNodeMap = keyMap(argNodes, function (arg) {
	          return arg.name.value;
	        });
	        fieldDef.args.forEach(function (argDef) {
	          var argNode = argNodeMap[argDef.name];
	          if (!argNode && isNonNullType(argDef.type)) {
	            context.reportError(new GraphQLError(missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
	          }
	        });
	      }
	    },

	    Directive: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(node) {
	        var directiveDef = context.getDirective();
	        if (!directiveDef) {
	          return false;
	        }
	        var argNodes = node.arguments || [];

	        var argNodeMap = keyMap(argNodes, function (arg) {
	          return arg.name.value;
	        });
	        directiveDef.args.forEach(function (argDef) {
	          var argNode = argNodeMap[argDef.name];
	          if (!argNode && isNonNullType(argDef.type)) {
	            context.reportError(new GraphQLError(missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
	          }
	        });
	      }
	    }
	  };
	}

	function defaultForRequiredVarMessage(varName, type, guessType) {
	  return 'Variable "$' + varName + '" of type "' + String(type) + '" is required and ' + 'will not use the default value. ' + ('Perhaps you meant to use type "' + String(guessType) + '".');
	}

	/**
	 * Variable's default value is allowed
	 *
	 * A GraphQL document is only valid if all variable default values are allowed
	 * due to a variable not being required.
	 */
	function VariablesDefaultValueAllowed(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var name = node.variable.name.value;
	      var defaultValue = node.defaultValue;
	      var type = context.getInputType();
	      if (isNonNullType(type) && defaultValue) {
	        context.reportError(new GraphQLError(defaultForRequiredVarMessage(name, type, type.ofType), [defaultValue]));
	      }
	      return false; // Do not traverse further.
	    },

	    SelectionSet: function SelectionSet() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

	function badVarPosMessage(varName, varType, expectedType) {
	  return 'Variable "$' + varName + '" of type "' + String(varType) + '" used in ' + ('position expecting type "' + String(expectedType) + '".');
	}

	/**
	 * Variables passed to field arguments conform to type
	 */
	function VariablesInAllowedPosition(context) {
	  var varDefMap = Object.create(null);

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        varDefMap = Object.create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);

	        usages.forEach(function (_ref) {
	          var node = _ref.node,
	              type = _ref.type;

	          var varName = node.name.value;
	          var varDef = varDefMap[varName];
	          if (varDef && type) {
	            // A var type is allowed if it is the same or more strict (e.g. is
	            // a subtype of) than the expected type. It can be more strict if
	            // the variable type is non-null when the expected type is nullable.
	            // If both are list types, the variable item type can be more strict
	            // than the expected item type (contravariant).
	            var schema = context.getSchema();
	            var varType = typeFromAST(schema, varDef.type);
	            if (varType && !isTypeSubTypeOf(schema, effectiveType(varType, varDef), type)) {
	              context.reportError(new GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
	            }
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      varDefMap[node.variable.name.value] = node;
	    }
	  };
	}

	// If a variable definition has a default value, it's effectively non-null.
	function effectiveType(varType, varDef) {
	  return !varDef.defaultValue || isNonNullType(varType) ? varType : GraphQLNonNull(varType);
	}

	function _classCallCheck$6(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function fieldsConflictMessage(responseName, reason) {
	  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
	}

	function reasonMessage(reason) {
	  if (Array.isArray(reason)) {
	    return reason.map(function (_ref) {
	      var responseName = _ref[0],
	          subreason = _ref[1];
	      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
	    }).join(' and ');
	  }
	  return reason;
	}

	/**
	 * Overlapping fields can be merged
	 *
	 * A selection set is only valid if all fields (including spreading any
	 * fragments) either correspond to distinct response names or can be merged
	 * without ambiguity.
	 */
	function OverlappingFieldsCanBeMerged(context) {
	  // A memoization for when two fragments are compared "between" each other for
	  // conflicts. Two fragments may be compared many times, so memoizing this can
	  // dramatically improve the performance of this validator.
	  var comparedFragmentPairs = new PairSet();

	  // A cache for the "field map" and list of fragment names found in any given
	  // selection set. Selection sets may be asked for this information multiple
	  // times, so this improves the performance of this validator.
	  var cachedFieldsAndFragmentNames = new Map();

	  return {
	    SelectionSet: function SelectionSet(selectionSet) {
	      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
	      conflicts.forEach(function (_ref2) {
	        var _ref2$ = _ref2[0],
	            responseName = _ref2$[0],
	            reason = _ref2$[1],
	            fields1 = _ref2[1],
	            fields2 = _ref2[2];
	        return context.reportError(new GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
	      });
	    }
	  };
	}
	// Field name and reason.

	// Reason is a string, or a nested list of conflicts.

	// Tuple defining a field node in a context.

	// Map of array of those.


	/**
	 * Algorithm:
	 *
	 * Conflicts occur when two fields exist in a query which will produce the same
	 * response name, but represent differing values, thus creating a conflict.
	 * The algorithm below finds all conflicts via making a series of comparisons
	 * between fields. In order to compare as few fields as possible, this makes
	 * a series of comparisons "within" sets of fields and "between" sets of fields.
	 *
	 * Given any selection set, a collection produces both a set of fields by
	 * also including all inline fragments, as well as a list of fragments
	 * referenced by fragment spreads.
	 *
	 * A) Each selection set represented in the document first compares "within" its
	 * collected set of fields, finding any conflicts between every pair of
	 * overlapping fields.
	 * Note: This is the *only time* that a the fields "within" a set are compared
	 * to each other. After this only fields "between" sets are compared.
	 *
	 * B) Also, if any fragment is referenced in a selection set, then a
	 * comparison is made "between" the original set of fields and the
	 * referenced fragment.
	 *
	 * C) Also, if multiple fragments are referenced, then comparisons
	 * are made "between" each referenced fragment.
	 *
	 * D) When comparing "between" a set of fields and a referenced fragment, first
	 * a comparison is made between each field in the original set of fields and
	 * each field in the the referenced set of fields.
	 *
	 * E) Also, if any fragment is referenced in the referenced selection set,
	 * then a comparison is made "between" the original set of fields and the
	 * referenced fragment (recursively referring to step D).
	 *
	 * F) When comparing "between" two fragments, first a comparison is made between
	 * each field in the first referenced set of fields and each field in the the
	 * second referenced set of fields.
	 *
	 * G) Also, any fragments referenced by the first must be compared to the
	 * second, and any fragments referenced by the second must be compared to the
	 * first (recursively referring to step F).
	 *
	 * H) When comparing two fields, if both have selection sets, then a comparison
	 * is made "between" both selection sets, first comparing the set of fields in
	 * the first selection set with the set of fields in the second.
	 *
	 * I) Also, if any fragment is referenced in either selection set, then a
	 * comparison is made "between" the other set of fields and the
	 * referenced fragment.
	 *
	 * J) Also, if two fragments are referenced in both selection sets, then a
	 * comparison is made "between" the two fragments.
	 *
	 */

	// Find all conflicts found "within" a selection set, including those found
	// via spreading in fragments. Called when visiting each SelectionSet in the
	// GraphQL Document.
	function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
	  var conflicts = [];

	  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
	      fieldMap = _getFieldsAndFragment[0],
	      fragmentNames = _getFieldsAndFragment[1];

	  // (A) Find find all conflicts "within" the fields of this selection set.
	  // Note: this is the *only place* `collectConflictsWithin` is called.


	  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

	  if (fragmentNames.length !== 0) {
	    // (B) Then collect conflicts between these fields and those represented by
	    // each spread fragment name found.
	    var comparedFragments = Object.create(null);
	    for (var i = 0; i < fragmentNames.length; i++) {
	      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]);
	      // (C) Then compare this fragment with all other fragments found in this
	      // selection set to collect conflicts between fragments spread together.
	      // This compares each item in the list of fragment names to every other
	      // item in that same list (except for itself).
	      for (var j = i + 1; j < fragmentNames.length; j++) {
	        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
	      }
	    }
	  }
	  return conflicts;
	}

	// Collect all conflicts found between a set of fields and a fragment reference
	// including via spreading in any nested fragments.
	function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
	  // Memoize so a fragment is not compared for conflicts more than once.
	  if (comparedFragments[fragmentName]) {
	    return;
	  }
	  comparedFragments[fragmentName] = true;

	  var fragment = context.getFragment(fragmentName);
	  if (!fragment) {
	    return;
	  }

	  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
	      fieldMap2 = _getReferencedFieldsA[0],
	      fragmentNames2 = _getReferencedFieldsA[1];

	  // Do not compare a fragment's fieldMap to itself.


	  if (fieldMap === fieldMap2) {
	    return;
	  }

	  // (D) First collect any conflicts between the provided collection of fields
	  // and the collection of fields represented by the given fragment.
	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);

	  // (E) Then collect any conflicts between the provided collection of fields
	  // and any fragment names found in the given fragment.
	  for (var i = 0; i < fragmentNames2.length; i++) {
	    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
	  }
	}

	// Collect all conflicts found between two fragments, including via spreading in
	// any nested fragments.
	function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
	  // No need to compare a fragment to itself.
	  if (fragmentName1 === fragmentName2) {
	    return;
	  }

	  // Memoize so two fragments are not compared for conflicts more than once.
	  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
	    return;
	  }
	  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);

	  var fragment1 = context.getFragment(fragmentName1);
	  var fragment2 = context.getFragment(fragmentName2);
	  if (!fragment1 || !fragment2) {
	    return;
	  }

	  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
	      fieldMap1 = _getReferencedFieldsA2[0],
	      fragmentNames1 = _getReferencedFieldsA2[1];

	  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
	      fieldMap2 = _getReferencedFieldsA3[0],
	      fragmentNames2 = _getReferencedFieldsA3[1];

	  // (F) First, collect all conflicts between these two collections of fields
	  // (not including any nested fragments).


	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

	  // (G) Then collect conflicts between the first fragment and any nested
	  // fragments spread in the second fragment.
	  for (var j = 0; j < fragmentNames2.length; j++) {
	    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
	  }

	  // (G) Then collect conflicts between the second fragment and any nested
	  // fragments spread in the first fragment.
	  for (var i = 0; i < fragmentNames1.length; i++) {
	    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
	  }
	}

	// Find all conflicts found between two selection sets, including those found
	// via spreading in fragments. Called when determining if conflicts exist
	// between the sub-fields of two overlapping fields.
	function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
	  var conflicts = [];

	  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
	      fieldMap1 = _getFieldsAndFragment2[0],
	      fragmentNames1 = _getFieldsAndFragment2[1];

	  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
	      fieldMap2 = _getFieldsAndFragment3[0],
	      fragmentNames2 = _getFieldsAndFragment3[1];

	  // (H) First, collect all conflicts between these two collections of field.


	  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);

	  // (I) Then collect conflicts between the first collection of fields and
	  // those referenced by each fragment name associated with the second.
	  if (fragmentNames2.length !== 0) {
	    var comparedFragments = Object.create(null);
	    for (var j = 0; j < fragmentNames2.length; j++) {
	      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
	    }
	  }

	  // (I) Then collect conflicts between the second collection of fields and
	  // those referenced by each fragment name associated with the first.
	  if (fragmentNames1.length !== 0) {
	    var _comparedFragments = Object.create(null);
	    for (var i = 0; i < fragmentNames1.length; i++) {
	      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
	    }
	  }

	  // (J) Also collect conflicts between any fragment names by the first and
	  // fragment names by the second. This compares each item in the first set of
	  // names to each item in the second set of names.
	  for (var _i = 0; _i < fragmentNames1.length; _i++) {
	    for (var _j = 0; _j < fragmentNames2.length; _j++) {
	      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
	    }
	  }
	  return conflicts;
	}

	// Collect all Conflicts "within" one collection of fields.
	function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
	  // A field map is a keyed collection, where each key represents a response
	  // name and the value at that key is a list of all fields which provide that
	  // response name. For every response name, if there are multiple fields, they
	  // must be compared to find a potential conflict.
	  Object.keys(fieldMap).forEach(function (responseName) {
	    var fields = fieldMap[responseName];
	    // This compares every field in the list to every other field in this list
	    // (except to itself). If the list only has one item, nothing needs to
	    // be compared.
	    if (fields.length > 1) {
	      for (var i = 0; i < fields.length; i++) {
	        for (var j = i + 1; j < fields.length; j++) {
	          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
	          responseName, fields[i], fields[j]);
	          if (conflict) {
	            conflicts.push(conflict);
	          }
	        }
	      }
	    }
	  });
	}

	// Collect all Conflicts between two collections of fields. This is similar to,
	// but different from the `collectConflictsWithin` function above. This check
	// assumes that `collectConflictsWithin` has already been called on each
	// provided collection of fields. This is true because this validator traverses
	// each individual selection set.
	function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
	  // A field map is a keyed collection, where each key represents a response
	  // name and the value at that key is a list of all fields which provide that
	  // response name. For any response name which appears in both provided field
	  // maps, each field from the first field map must be compared to every field
	  // in the second field map to find potential conflicts.
	  Object.keys(fieldMap1).forEach(function (responseName) {
	    var fields2 = fieldMap2[responseName];
	    if (fields2) {
	      var fields1 = fieldMap1[responseName];
	      for (var i = 0; i < fields1.length; i++) {
	        for (var j = 0; j < fields2.length; j++) {
	          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
	          if (conflict) {
	            conflicts.push(conflict);
	          }
	        }
	      }
	    }
	  });
	}

	// Determines if there is a conflict between two particular fields, including
	// comparing their sub-fields.
	function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
	  var parentType1 = field1[0],
	      node1 = field1[1],
	      def1 = field1[2];
	  var parentType2 = field2[0],
	      node2 = field2[1],
	      def2 = field2[2];

	  // If it is known that two fields could not possibly apply at the same
	  // time, due to the parent types, then it is safe to permit them to diverge
	  // in aliased field or arguments used as they will not present any ambiguity
	  // by differing.
	  // It is known that two parent types could never overlap if they are
	  // different Object types. Interface or Union types might overlap - if not
	  // in the current state of the schema, then perhaps in some future version,
	  // thus may not safely diverge.

	  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && isObjectType(parentType1) && isObjectType(parentType2);

	  // The return type for each field.
	  var type1 = def1 && def1.type;
	  var type2 = def2 && def2.type;

	  if (!areMutuallyExclusive) {
	    // Two aliases must refer to the same field.
	    var name1 = node1.name.value;
	    var name2 = node2.name.value;
	    if (name1 !== name2) {
	      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [node1], [node2]];
	    }

	    // Two field calls must have the same arguments.
	    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
	      return [[responseName, 'they have differing arguments'], [node1], [node2]];
	    }
	  }

	  if (type1 && type2 && doTypesConflict(type1, type2)) {
	    return [[responseName, 'they return conflicting types ' + String(type1) + ' and ' + String(type2)], [node1], [node2]];
	  }

	  // Collect and compare sub-fields. Use the same "visited fragment names" list
	  // for both collections so fields in a fragment reference are never
	  // compared to themselves.
	  var selectionSet1 = node1.selectionSet;
	  var selectionSet2 = node2.selectionSet;
	  if (selectionSet1 && selectionSet2) {
	    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, getNamedType(type1), selectionSet1, getNamedType(type2), selectionSet2);
	    return subfieldConflicts(conflicts, responseName, node1, node2);
	  }
	}

	function sameArguments(arguments1, arguments2) {
	  if (arguments1.length !== arguments2.length) {
	    return false;
	  }
	  return arguments1.every(function (argument1) {
	    var argument2 = find(arguments2, function (argument) {
	      return argument.name.value === argument1.name.value;
	    });
	    if (!argument2) {
	      return false;
	    }
	    return sameValue(argument1.value, argument2.value);
	  });
	}

	function sameValue(value1, value2) {
	  return !value1 && !value2 || print(value1) === print(value2);
	}

	// Two types conflict if both types could not apply to a value simultaneously.
	// Composite types are ignored as their individual field types will be compared
	// later recursively. However List and Non-Null types must match.
	function doTypesConflict(type1, type2) {
	  if (isListType(type1)) {
	    return isListType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if (isListType(type2)) {
	    return true;
	  }
	  if (isNonNullType(type1)) {
	    return isNonNullType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
	  }
	  if (isNonNullType(type2)) {
	    return true;
	  }
	  if (isLeafType(type1) || isLeafType(type2)) {
	    return type1 !== type2;
	  }
	  return false;
	}

	// Given a selection set, return the collection of fields (a mapping of response
	// name to field nodes and definitions) as well as a list of fragment names
	// referenced via fragment spreads.
	function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
	  var cached = cachedFieldsAndFragmentNames.get(selectionSet);
	  if (!cached) {
	    var nodeAndDefs = Object.create(null);
	    var fragmentNames = Object.create(null);
	    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
	    cached = [nodeAndDefs, Object.keys(fragmentNames)];
	    cachedFieldsAndFragmentNames.set(selectionSet, cached);
	  }
	  return cached;
	}

	// Given a reference to a fragment, return the represented collection of fields
	// as well as a list of nested fragment names referenced via fragment spreads.
	function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
	  // Short-circuit building a type from the node if possible.
	  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
	  if (cached) {
	    return cached;
	  }

	  var fragmentType = typeFromAST(context.getSchema(), fragment.typeCondition);
	  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
	}

	function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case Kind.FIELD:
	        var fieldName = selection.name.value;
	        var fieldDef = void 0;
	        if (isObjectType(parentType) || isInterfaceType(parentType)) {
	          fieldDef = parentType.getFields()[fieldName];
	        }
	        var responseName = selection.alias ? selection.alias.value : fieldName;
	        if (!nodeAndDefs[responseName]) {
	          nodeAndDefs[responseName] = [];
	        }
	        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
	        break;
	      case Kind.FRAGMENT_SPREAD:
	        fragmentNames[selection.name.value] = true;
	        break;
	      case Kind.INLINE_FRAGMENT:
	        var typeCondition = selection.typeCondition;
	        var inlineFragmentType = typeCondition ? typeFromAST(context.getSchema(), typeCondition) : parentType;
	        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
	        break;
	    }
	  }
	}

	// Given a series of Conflicts which occurred between two sub-fields, generate
	// a single Conflict.
	function subfieldConflicts(conflicts, responseName, node1, node2) {
	  if (conflicts.length > 0) {
	    return [[responseName, conflicts.map(function (_ref3) {
	      var reason = _ref3[0];
	      return reason;
	    })], conflicts.reduce(function (allFields, _ref4) {
	      var fields1 = _ref4[1];
	      return allFields.concat(fields1);
	    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
	      var fields2 = _ref5[2];
	      return allFields.concat(fields2);
	    }, [node2])];
	  }
	}

	/**
	 * A way to keep track of pairs of things when the ordering of the pair does
	 * not matter. We do this by maintaining a sort of double adjacency sets.
	 */

	var PairSet = function () {
	  function PairSet() {
	    _classCallCheck$6(this, PairSet);

	    this._data = Object.create(null);
	  }

	  PairSet.prototype.has = function has(a, b, areMutuallyExclusive) {
	    var first = this._data[a];
	    var result = first && first[b];
	    if (result === undefined) {
	      return false;
	    }
	    // areMutuallyExclusive being false is a superset of being true,
	    // hence if we want to know if this PairSet "has" these two with no
	    // exclusivity, we have to ensure it was added as such.
	    if (areMutuallyExclusive === false) {
	      return result === false;
	    }
	    return true;
	  };

	  PairSet.prototype.add = function add(a, b, areMutuallyExclusive) {
	    _pairSetAdd(this._data, a, b, areMutuallyExclusive);
	    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
	  };

	  return PairSet;
	}();

	function _pairSetAdd(data, a, b, areMutuallyExclusive) {
	  var map = data[a];
	  if (!map) {
	    map = Object.create(null);
	    data[a] = map;
	  }
	  map[b] = areMutuallyExclusive;
	}

	function duplicateInputFieldMessage(fieldName) {
	  return 'There can be only one input field named "' + fieldName + '".';
	}

	/**
	 * Unique input field names
	 *
	 * A GraphQL input object value is only valid if all supplied fields are
	 * uniquely named.
	 */
	function UniqueInputFieldNames(context) {
	  var knownNameStack = [];
	  var knownNames = Object.create(null);

	  return {
	    ObjectValue: {
	      enter: function enter() {
	        knownNameStack.push(knownNames);
	        knownNames = Object.create(null);
	      },
	      leave: function leave() {
	        knownNames = knownNameStack.pop();
	      }
	    },
	    ObjectField: function ObjectField(node) {
	      var fieldName = node.name.value;
	      if (knownNames[fieldName]) {
	        context.reportError(new GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
	      } else {
	        knownNames[fieldName] = node.name;
	      }
	      return false;
	    }
	  };
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * This set includes all validation rules defined by the GraphQL spec.
	 *
	 * The order of the rules in this list has been adjusted to lead to the
	 * most clear output when encountering multiple validation errors.
	 */
	var specifiedRules = [ExecutableDefinitions, UniqueOperationNames, LoneAnonymousOperation, SingleFieldSubscriptions, KnownTypeNames, FragmentsOnCompositeTypes, VariablesAreInputTypes, ScalarLeafs, FieldsOnCorrectType, UniqueFragmentNames, KnownFragmentNames, NoUnusedFragments, PossibleFragmentSpreads, NoFragmentCycles, UniqueVariableNames, NoUndefinedVariables, NoUnusedVariables, KnownDirectives, UniqueDirectivesPerLocation, KnownArgumentNames, UniqueArgumentNames, ValuesOfCorrectType, ProvidedNonNullArguments, VariablesDefaultValueAllowed, VariablesInAllowedPosition, OverlappingFieldsCanBeMerged, UniqueInputFieldNames];

	function _classCallCheck$7(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Implements the "Validation" section of the spec.
	 *
	 * Validation runs synchronously, returning an array of encountered errors, or
	 * an empty array if no errors were encountered and the document is valid.
	 *
	 * A list of specific validation rules may be provided. If not provided, the
	 * default list of rules defined by the GraphQL specification will be used.
	 *
	 * Each validation rules is a function which returns a visitor
	 * (see the language/visitor API). Visitor methods are expected to return
	 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
	 *
	 * Optionally a custom TypeInfo instance may be provided. If not provided, one
	 * will be created from the provided schema.
	 */
	function validate(schema, ast, rules, typeInfo) {
	  !ast ? invariant(0, 'Must provide document') : void 0;
	  // If the schema used for validation is invalid, throw an error.
	  assertValidSchema(schema);
	  return visitUsingRules(schema, typeInfo || new TypeInfo(schema), ast, rules || specifiedRules);
	}

	/**
	 * This uses a specialized visitor which runs multiple visitors in parallel,
	 * while maintaining the visitor skip and break API.
	 *
	 * @internal
	 */
	function visitUsingRules(schema, typeInfo, documentAST, rules) {
	  var context = new ValidationContext(schema, documentAST, typeInfo);
	  var visitors = rules.map(function (rule) {
	    return rule(context);
	  });
	  // Visit the whole document with each instance of all provided rules.
	  visit(documentAST, visitWithTypeInfo(typeInfo, visitInParallel(visitors)));
	  return context.getErrors();
	}

	/**
	 * An instance of this class is passed as the "this" context to all validators,
	 * allowing access to commonly useful contextual information from within a
	 * validation rule.
	 */
	var ValidationContext = function () {
	  function ValidationContext(schema, ast, typeInfo) {
	    _classCallCheck$7(this, ValidationContext);

	    this._schema = schema;
	    this._ast = ast;
	    this._typeInfo = typeInfo;
	    this._errors = [];
	    this._fragmentSpreads = new Map();
	    this._recursivelyReferencedFragments = new Map();
	    this._variableUsages = new Map();
	    this._recursiveVariableUsages = new Map();
	  }

	  ValidationContext.prototype.reportError = function reportError(error) {
	    this._errors.push(error);
	  };

	  ValidationContext.prototype.getErrors = function getErrors() {
	    return this._errors;
	  };

	  ValidationContext.prototype.getSchema = function getSchema() {
	    return this._schema;
	  };

	  ValidationContext.prototype.getDocument = function getDocument() {
	    return this._ast;
	  };

	  ValidationContext.prototype.getFragment = function getFragment(name) {
	    var fragments = this._fragments;
	    if (!fragments) {
	      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
	        if (statement.kind === Kind.FRAGMENT_DEFINITION) {
	          frags[statement.name.value] = statement;
	        }
	        return frags;
	      }, Object.create(null));
	    }
	    return fragments[name];
	  };

	  ValidationContext.prototype.getFragmentSpreads = function getFragmentSpreads(node) {
	    var spreads = this._fragmentSpreads.get(node);
	    if (!spreads) {
	      spreads = [];
	      var setsToVisit = [node];
	      while (setsToVisit.length !== 0) {
	        var set = setsToVisit.pop();
	        for (var i = 0; i < set.selections.length; i++) {
	          var selection = set.selections[i];
	          if (selection.kind === Kind.FRAGMENT_SPREAD) {
	            spreads.push(selection);
	          } else if (selection.selectionSet) {
	            setsToVisit.push(selection.selectionSet);
	          }
	        }
	      }
	      this._fragmentSpreads.set(node, spreads);
	    }
	    return spreads;
	  };

	  ValidationContext.prototype.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
	    var fragments = this._recursivelyReferencedFragments.get(operation);
	    if (!fragments) {
	      fragments = [];
	      var collectedNames = Object.create(null);
	      var nodesToVisit = [operation.selectionSet];
	      while (nodesToVisit.length !== 0) {
	        var _node = nodesToVisit.pop();
	        var spreads = this.getFragmentSpreads(_node);
	        for (var i = 0; i < spreads.length; i++) {
	          var fragName = spreads[i].name.value;
	          if (collectedNames[fragName] !== true) {
	            collectedNames[fragName] = true;
	            var fragment = this.getFragment(fragName);
	            if (fragment) {
	              fragments.push(fragment);
	              nodesToVisit.push(fragment.selectionSet);
	            }
	          }
	        }
	      }
	      this._recursivelyReferencedFragments.set(operation, fragments);
	    }
	    return fragments;
	  };

	  ValidationContext.prototype.getVariableUsages = function getVariableUsages(node) {
	    var usages = this._variableUsages.get(node);
	    if (!usages) {
	      var newUsages = [];
	      var typeInfo = new TypeInfo(this._schema);
	      visit(node, visitWithTypeInfo(typeInfo, {
	        VariableDefinition: function VariableDefinition() {
	          return false;
	        },
	        Variable: function Variable(variable) {
	          newUsages.push({ node: variable, type: typeInfo.getInputType() });
	        }
	      }));
	      usages = newUsages;
	      this._variableUsages.set(node, usages);
	    }
	    return usages;
	  };

	  ValidationContext.prototype.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
	    var usages = this._recursiveVariableUsages.get(operation);
	    if (!usages) {
	      usages = this.getVariableUsages(operation);
	      var fragments = this.getRecursivelyReferencedFragments(operation);
	      for (var i = 0; i < fragments.length; i++) {
	        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
	      }
	      this._recursiveVariableUsages.set(operation, usages);
	    }
	    return usages;
	  };

	  ValidationContext.prototype.getType = function getType() {
	    return this._typeInfo.getType();
	  };

	  ValidationContext.prototype.getParentType = function getParentType() {
	    return this._typeInfo.getParentType();
	  };

	  ValidationContext.prototype.getInputType = function getInputType() {
	    return this._typeInfo.getInputType();
	  };

	  ValidationContext.prototype.getParentInputType = function getParentInputType() {
	    return this._typeInfo.getParentInputType();
	  };

	  ValidationContext.prototype.getFieldDef = function getFieldDef() {
	    return this._typeInfo.getFieldDef();
	  };

	  ValidationContext.prototype.getDirective = function getDirective() {
	    return this._typeInfo.getDirective();
	  };

	  ValidationContext.prototype.getArgument = function getArgument() {
	    return this._typeInfo.getArgument();
	  };

	  return ValidationContext;
	}();

	var _typeof2$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$b = typeof Symbol === "function" && _typeof2$3(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2$3(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$3(obj);
	};

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Only returns the value if it acts like a Promise, i.e. has a "then" function,
	 * otherwise returns void.
	 */
	function getPromise(value) {
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof$b(value)) === 'object' && value !== null && typeof value.then === 'function') {
	    return value;
	  }
	}

	/**
	 * Copyright (c) 2017-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Memoizes the provided three-argument function.
	 */
	function memoize3(fn) {
	  var cache0 = void 0;
	  function memoized(a1, a2, a3) {
	    if (!cache0) {
	      cache0 = new WeakMap();
	    }
	    var cache1 = cache0.get(a1);
	    var cache2 = void 0;
	    if (cache1) {
	      cache2 = cache1.get(a2);
	      if (cache2) {
	        var cachedValue = cache2.get(a3);
	        if (cachedValue !== undefined) {
	          return cachedValue;
	        }
	      }
	    } else {
	      cache1 = new WeakMap();
	      cache0.set(a1, cache1);
	    }
	    if (!cache2) {
	      cache2 = new WeakMap();
	      cache1.set(a2, cache2);
	    }
	    var newValue = fn.apply(this, arguments);
	    cache2.set(a3, newValue);
	    return newValue;
	  }
	  return memoized;
	}

	/**
	 * This function transforms a JS object `ObjMap<Promise<T>>` into
	 * a `Promise<ObjMap<T>>`
	 *
	 * This is akin to bluebird's `Promise.props`, but implemented only using
	 * `Promise.all` so it will work with any implementation of ES6 promises.
	 */
	function promiseForObject(object) {
	  var keys = Object.keys(object);
	  var valuesAndPromises = keys.map(function (name) {
	    return object[name];
	  });
	  return Promise.all(valuesAndPromises).then(function (values) {
	    return values.reduce(function (resolvedObject, value, i) {
	      resolvedObject[keys[i]] = value;
	      return resolvedObject;
	    }, Object.create(null));
	  });
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Similar to Array.prototype.reduce(), however the reducing callback may return
	 * a Promise, in which case reduction will continue after each promise resolves.
	 *
	 * If the callback does not return a Promise, then this function will also not
	 * return a Promise.
	 */
	function promiseReduce(values, callback, initialValue) {
	  return values.reduce(function (previous, value) {
	    var promise = getPromise(previous);
	    if (promise) {
	      return promise.then(function (resolved) {
	        return callback(resolved, value);
	      });
	    }
	    // Previous is not Promise<U>, so it is U.
	    return callback(previous, value);
	  }, initialValue);
	}

	var _typeof2$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$c = typeof Symbol === "function" && _typeof2$4(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2$4(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$4(obj);
	};

	/**
	 * Coerces a JavaScript value given a GraphQL Type.
	 *
	 * Returns either a value which is valid for the provided type or a list of
	 * encountered coercion errors.
	 *
	 */
	function coerceValue(value, type, blameNode, path) {
	  // A value must be provided if the type is non-null.
	  if (isNonNullType(type)) {
	    if (isNullish(value)) {
	      return ofErrors([coercionError('Expected non-nullable type ' + String(type) + ' not to be null', blameNode, path)]);
	    }
	    return coerceValue(value, type.ofType, blameNode, path);
	  }

	  if (isNullish(value)) {
	    // Explicitly return the value null.
	    return ofValue(null);
	  }

	  if (isScalarType(type)) {
	    // Scalars determine if a value is valid via parseValue(), which can
	    // throw to indicate failure. If it throws, maintain a reference to
	    // the original error.
	    try {
	      var parseResult = type.parseValue(value);
	      if (isInvalid(parseResult)) {
	        return ofErrors([coercionError('Expected type ' + type.name, blameNode, path)]);
	      }
	      return ofValue(parseResult);
	    } catch (error) {
	      return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, error.message, error)]);
	    }
	  }

	  if (isEnumType(type)) {
	    if (typeof value === 'string') {
	      var enumValue = type.getValue(value);
	      if (enumValue) {
	        return ofValue(enumValue.value);
	      }
	    }
	    var suggestions = suggestionList(String(value), type.getValues().map(function (enumValue) {
	      return enumValue.name;
	    }));
	    var didYouMean = suggestions.length !== 0 ? 'did you mean ' + orList(suggestions) + '?' : undefined;
	    return ofErrors([coercionError('Expected type ' + type.name, blameNode, path, didYouMean)]);
	  }

	  if (isListType(type)) {
	    var itemType = type.ofType;
	    if (isCollection_1(value)) {
	      var _errors = void 0;
	      var coercedValue = [];
	      forEach_1(value, function (itemValue, index) {
	        var coercedItem = coerceValue(itemValue, itemType, blameNode, atPath(path, index));
	        if (coercedItem.errors) {
	          _errors = add(_errors, coercedItem.errors);
	        } else if (!_errors) {
	          coercedValue.push(coercedItem.value);
	        }
	      });
	      return _errors ? ofErrors(_errors) : ofValue(coercedValue);
	    }
	    // Lists accept a non-list value as a list of one.
	    var coercedItem = coerceValue(value, itemType, blameNode);
	    return coercedItem.errors ? coercedItem : ofValue([coercedItem.value]);
	  }

	  if (isInputObjectType(type)) {
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof$c(value)) !== 'object') {
	      return ofErrors([coercionError('Expected type ' + type.name + ' to be an object', blameNode, path)]);
	    }
	    var _errors2 = void 0;
	    var _coercedValue = {};
	    var fields = type.getFields();

	    // Ensure every defined field is valid.
	    for (var fieldName in fields) {
	      if (hasOwnProperty$a.call(fields, fieldName)) {
	        var field = fields[fieldName];
	        var fieldValue = value[fieldName];
	        if (isInvalid(fieldValue)) {
	          if (!isInvalid(field.defaultValue)) {
	            _coercedValue[fieldName] = field.defaultValue;
	          } else if (isNonNullType(field.type)) {
	            _errors2 = add(_errors2, coercionError('Field ' + printPath(atPath(path, fieldName)) + ' of required ' + ('type ' + String(field.type) + ' was not provided'), blameNode));
	          }
	        } else {
	          var coercedField = coerceValue(fieldValue, field.type, blameNode, atPath(path, fieldName));
	          if (coercedField.errors) {
	            _errors2 = add(_errors2, coercedField.errors);
	          } else if (!_errors2) {
	            _coercedValue[fieldName] = coercedField.value;
	          }
	        }
	      }
	    }

	    // Ensure every provided field is defined.
	    for (var _fieldName in value) {
	      if (hasOwnProperty$a.call(value, _fieldName)) {
	        if (!fields[_fieldName]) {
	          var _suggestions = suggestionList(_fieldName, Object.keys(fields));
	          var _didYouMean = _suggestions.length !== 0 ? 'did you mean ' + orList(_suggestions) + '?' : undefined;
	          _errors2 = add(_errors2, coercionError('Field "' + _fieldName + '" is not defined by type ' + type.name, blameNode, path, _didYouMean));
	        }
	      }
	    }

	    return _errors2 ? ofErrors(_errors2) : ofValue(_coercedValue);
	  }

	  /* istanbul ignore next */
	  throw new Error('Unexpected type: ' + type + '.');
	}

	function ofValue(value) {
	  return { errors: undefined, value: value };
	}

	function ofErrors(errors) {
	  return { errors: errors, value: undefined };
	}

	function add(errors, moreErrors) {
	  return (errors || []).concat(moreErrors);
	}

	function atPath(prev, key) {
	  return { prev: prev, key: key };
	}

	function coercionError(message, blameNode, path, subMessage, originalError) {
	  var pathStr = printPath(path);
	  // Return a GraphQLError instance
	  return new GraphQLError(message + (pathStr ? ' at ' + pathStr : '') + (subMessage ? '; ' + subMessage : '.'), blameNode, undefined, undefined, undefined, originalError);
	}

	// Build a string describing the path into the value where the error was found
	function printPath(path) {
	  var pathStr = '';
	  var currentPath = path;
	  while (currentPath) {
	    pathStr = (typeof currentPath.key === 'string' ? '.' + currentPath.key : '[' + String(currentPath.key) + ']') + pathStr;
	    currentPath = currentPath.prev;
	  }
	  return pathStr ? 'value' + pathStr : '';
	}

	var hasOwnProperty$a = Object.prototype.hasOwnProperty;

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Produces a JavaScript value given a GraphQL Value AST.
	 *
	 * A GraphQL type must be provided, which will be used to interpret different
	 * GraphQL Value literals.
	 *
	 * Returns `undefined` when the value could not be validly coerced according to
	 * the provided type.
	 *
	 * | GraphQL Value        | JSON Value    |
	 * | -------------------- | ------------- |
	 * | Input Object         | Object        |
	 * | List                 | Array         |
	 * | Boolean              | Boolean       |
	 * | String               | String        |
	 * | Int / Float          | Number        |
	 * | Enum Value           | Mixed         |
	 * | NullValue            | null          |
	 *
	 */
	function valueFromAST(valueNode, type, variables) {
	  if (!valueNode) {
	    // When there is no node, then there is also no value.
	    // Importantly, this is different from returning the value null.
	    return;
	  }

	  if (isNonNullType(type)) {
	    if (valueNode.kind === Kind.NULL) {
	      return; // Invalid: intentionally return no value.
	    }
	    return valueFromAST(valueNode, type.ofType, variables);
	  }

	  if (valueNode.kind === Kind.NULL) {
	    // This is explicitly returning the value null.
	    return null;
	  }

	  if (valueNode.kind === Kind.VARIABLE) {
	    var variableName = valueNode.name.value;
	    if (!variables || isInvalid(variables[variableName])) {
	      // No valid return value.
	      return;
	    }
	    // Note: we're not doing any checking that this variable is correct. We're
	    // assuming that this query has been validated and the variable usage here
	    // is of the correct type.
	    return variables[variableName];
	  }

	  if (isListType(type)) {
	    var itemType = type.ofType;
	    if (valueNode.kind === Kind.LIST) {
	      var coercedValues = [];
	      var itemNodes = valueNode.values;
	      for (var i = 0; i < itemNodes.length; i++) {
	        if (isMissingVariable(itemNodes[i], variables)) {
	          // If an array contains a missing variable, it is either coerced to
	          // null or if the item type is non-null, it considered invalid.
	          if (isNonNullType(itemType)) {
	            return; // Invalid: intentionally return no value.
	          }
	          coercedValues.push(null);
	        } else {
	          var itemValue = valueFromAST(itemNodes[i], itemType, variables);
	          if (isInvalid(itemValue)) {
	            return; // Invalid: intentionally return no value.
	          }
	          coercedValues.push(itemValue);
	        }
	      }
	      return coercedValues;
	    }
	    var coercedValue = valueFromAST(valueNode, itemType, variables);
	    if (isInvalid(coercedValue)) {
	      return; // Invalid: intentionally return no value.
	    }
	    return [coercedValue];
	  }

	  if (isInputObjectType(type)) {
	    if (valueNode.kind !== Kind.OBJECT) {
	      return; // Invalid: intentionally return no value.
	    }
	    var coercedObj = Object.create(null);
	    var fieldNodes = keyMap(valueNode.fields, function (field) {
	      return field.name.value;
	    });
	    var fields = objectValues(type.getFields());
	    for (var _i = 0; _i < fields.length; _i++) {
	      var field = fields[_i];
	      var fieldNode = fieldNodes[field.name];
	      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
	        if (!isInvalid(field.defaultValue)) {
	          coercedObj[field.name] = field.defaultValue;
	        } else if (isNonNullType(field.type)) {
	          return; // Invalid: intentionally return no value.
	        }
	        continue;
	      }
	      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);
	      if (isInvalid(fieldValue)) {
	        return; // Invalid: intentionally return no value.
	      }
	      coercedObj[field.name] = fieldValue;
	    }
	    return coercedObj;
	  }

	  if (isEnumType(type)) {
	    if (valueNode.kind !== Kind.ENUM) {
	      return; // Invalid: intentionally return no value.
	    }
	    var enumValue = type.getValue(valueNode.value);
	    if (!enumValue) {
	      return; // Invalid: intentionally return no value.
	    }
	    return enumValue.value;
	  }

	  if (isScalarType(type)) {
	    // Scalars fulfill parsing a literal value via parseLiteral().
	    // Invalid values represent a failure to parse correctly, in which case
	    // no value is returned.
	    var result = void 0;
	    try {
	      result = type.parseLiteral(valueNode, variables);
	    } catch (_error) {
	      return; // Invalid: intentionally return no value.
	    }
	    if (isInvalid(result)) {
	      return; // Invalid: intentionally return no value.
	    }
	    return result;
	  }

	  /* istanbul ignore next */
	  throw new Error('Unknown type: ' + type + '.');
	}

	// Returns true if the provided valueNode is a variable which is not defined
	// in the set of variables.
	function isMissingVariable(valueNode, variables) {
	  return valueNode.kind === Kind.VARIABLE && (!variables || isInvalid(variables[valueNode.name.value]));
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Prepares an object map of variableValues of the correct type based on the
	 * provided variable definitions and arbitrary input. If the input cannot be
	 * parsed to match the variable definitions, a GraphQLError will be thrown.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getVariableValues(schema, varDefNodes, inputs) {
	  var errors = [];
	  var coercedValues = {};
	  for (var i = 0; i < varDefNodes.length; i++) {
	    var varDefNode = varDefNodes[i];
	    var varName = varDefNode.variable.name.value;
	    var varType = typeFromAST(schema, varDefNode.type);
	    if (!isInputType(varType)) {
	      errors.push(new GraphQLError('Variable "$' + varName + '" expected value of type ' + ('"' + print(varDefNode.type) + '" which cannot be used as an input type.'), [varDefNode.type]));
	    } else {
	      var value = inputs[varName];
	      if (isInvalid(value)) {
	        if (isNonNullType(varType)) {
	          errors.push(new GraphQLError('Variable "$' + varName + '" of required type ' + ('"' + String(varType) + '" was not provided.'), [varDefNode]));
	        } else if (varDefNode.defaultValue) {
	          coercedValues[varName] = valueFromAST(varDefNode.defaultValue, varType);
	        }
	      } else {
	        var _coerced = coerceValue(value, varType, varDefNode);
	        var coercionErrors = _coerced.errors;
	        if (coercionErrors) {
	          (function () {
	            var messagePrelude = 'Variable "$' + varName + '" got invalid value ' + JSON.stringify(value) + '; ';
	            coercionErrors.forEach(function (error) {
	              error.message = messagePrelude + error.message;
	            });
	            errors.push.apply(errors, coercionErrors);
	          })();
	        } else {
	          coercedValues[varName] = _coerced.value;
	        }
	      }
	    }
	  }
	  return errors.length === 0 ? { errors: undefined, coerced: coercedValues } : { errors: errors, coerced: undefined };
	}

	/**
	 * Prepares an object map of argument values given a list of argument
	 * definitions and list of argument AST nodes.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getArgumentValues(def, node, variableValues) {
	  var coercedValues = {};
	  var argDefs = def.args;
	  var argNodes = node.arguments;
	  if (!argDefs || !argNodes) {
	    return coercedValues;
	  }
	  var argNodeMap = keyMap(argNodes, function (arg) {
	    return arg.name.value;
	  });
	  for (var i = 0; i < argDefs.length; i++) {
	    var argDef = argDefs[i];
	    var name = argDef.name;
	    var argType = argDef.type;
	    var argumentNode = argNodeMap[name];
	    var defaultValue = argDef.defaultValue;
	    if (!argumentNode) {
	      if (!isInvalid(defaultValue)) {
	        coercedValues[name] = defaultValue;
	      } else if (isNonNullType(argType)) {
	        throw new GraphQLError('Argument "' + name + '" of required type ' + ('"' + String(argType) + '" was not provided.'), [node]);
	      }
	    } else if (argumentNode.value.kind === Kind.VARIABLE) {
	      var variableName = argumentNode.value.name.value;
	      if (variableValues && Object.prototype.hasOwnProperty.call(variableValues, variableName) && !isInvalid(variableValues[variableName])) {
	        // Note: this does not check that this variable value is correct.
	        // This assumes that this query has been validated and the variable
	        // usage here is of the correct type.
	        coercedValues[name] = variableValues[variableName];
	      } else if (!isInvalid(defaultValue)) {
	        coercedValues[name] = defaultValue;
	      } else if (isNonNullType(argType)) {
	        throw new GraphQLError('Argument "' + name + '" of required type "' + String(argType) + '" was ' + ('provided the variable "$' + variableName + '" which was not provided ') + 'a runtime value.', [argumentNode.value]);
	      }
	    } else {
	      var valueNode = argumentNode.value;
	      var coercedValue = valueFromAST(valueNode, argType, variableValues);
	      if (isInvalid(coercedValue)) {
	        // Note: ValuesOfCorrectType validation should catch this before
	        // execution. This is a runtime check to ensure execution does not
	        // continue with an invalid argument value.
	        throw new GraphQLError('Argument "' + name + '" has invalid value ' + print(valueNode) + '.', [argumentNode.value]);
	      }
	      coercedValues[name] = coercedValue;
	    }
	  }
	  return coercedValues;
	}

	/**
	 * Prepares an object map of argument values given a directive definition
	 * and a AST node which may contain directives. Optionally also accepts a map
	 * of variable values.
	 *
	 * If the directive does not exist on the node, returns undefined.
	 *
	 * Note: The returned value is a plain Object with a prototype, since it is
	 * exposed to user code. Care should be taken to not pull values from the
	 * Object prototype.
	 */
	function getDirectiveValues(directiveDef, node, variableValues) {
	  var directiveNode = node.directives && find(node.directives, function (directive) {
	    return directive.name.value === directiveDef.name;
	  });

	  if (directiveNode) {
	    return getArgumentValues(directiveDef, directiveNode, variableValues);
	  }
	}

	var _typeof2$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof$d = typeof Symbol === "function" && _typeof2$5(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2$5(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$5(obj);
	};

	/**
	 * Terminology
	 *
	 * "Definitions" are the generic name for top-level statements in the document.
	 * Examples of this include:
	 * 1) Operations (such as a query)
	 * 2) Fragments
	 *
	 * "Operations" are a generic name for requests in the document.
	 * Examples of this include:
	 * 1) query,
	 * 2) mutation
	 *
	 * "Selections" are the definitions that can appear legally and at
	 * single level of the query. These include:
	 * 1) field references e.g "a"
	 * 2) fragment "spreads" e.g. "...c"
	 * 3) inline fragment "spreads" e.g. "...on Type { a }"
	 */

	/**
	 * Data that must be available at all points during query execution.
	 *
	 * Namely, schema of the type system that is currently executing,
	 * and the fragments defined in the query document
	 */

	/**
	 * The result of GraphQL execution.
	 *
	 *   - `errors` is included when any errors occurred as a non-empty array.
	 *   - `data` is the result of a successful execution of the query.
	 */

	/**
	 * Implements the "Evaluating requests" section of the GraphQL specification.
	 *
	 * Returns either a synchronous ExecutionResult (if all encountered resolvers
	 * are synchronous), or a Promise of an ExecutionResult that will eventually be
	 * resolved and never rejected.
	 *
	 * If the arguments to this function do not result in a legal execution context,
	 * a GraphQLError will be thrown immediately explaining the invalid input.
	 *
	 * Accepts either an object with named arguments, or individual arguments.
	 */

	/* eslint-disable no-redeclare */

	function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  /* eslint-enable no-redeclare */
	  // Extract arguments from object args if provided.
	  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
	}

	function executeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // If arguments are missing or incorrect, throw an error.
	  assertValidExecutionArguments(schema, document, variableValues);

	  // If a valid context cannot be created due to incorrect arguments,
	  // a "Response" with only errors is returned.
	  var context = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

	  // Return early errors if execution context failed.
	  if (Array.isArray(context)) {
	    return { errors: context };
	  }

	  // Return a Promise that will eventually resolve to the data described by
	  // The "Response" section of the GraphQL specification.
	  //
	  // If errors are encountered while executing a GraphQL field, only that
	  // field and its descendants will be omitted, and sibling fields will still
	  // be executed. An execution which encounters errors will still result in a
	  // resolved Promise.
	  var data = executeOperation(context, context.operation, rootValue);
	  return buildResponse(context, data);
	}

	/**
	 * Given a completed execution context and data, build the { errors, data }
	 * response defined by the "Response" section of the GraphQL specification.
	 */
	function buildResponse(context, data) {
	  var promise = getPromise(data);
	  if (promise) {
	    return promise.then(function (resolved) {
	      return buildResponse(context, resolved);
	    });
	  }
	  return context.errors.length === 0 ? { data: data } : { errors: context.errors, data: data };
	}

	/**
	 * Given a ResponsePath (found in the `path` entry in the information provided
	 * as the last argument to a field resolver), return an Array of the path keys.
	 */
	function responsePathAsArray(path) {
	  var flattened = [];
	  var curr = path;
	  while (curr) {
	    flattened.push(curr.key);
	    curr = curr.prev;
	  }
	  return flattened.reverse();
	}

	/**
	 * Given a ResponsePath and a key, return a new ResponsePath containing the
	 * new key.
	 */
	function addPath(prev, key) {
	  return { prev: prev, key: key };
	}

	/**
	 * Essential assertions before executing to provide developer feedback for
	 * improper use of the GraphQL library.
	 */
	function assertValidExecutionArguments(schema, document, rawVariableValues) {
	  !document ? invariant(0, 'Must provide document') : void 0;

	  // If the schema used for execution is invalid, throw an error.
	  assertValidSchema(schema);

	  // Variables, if provided, must be an object.
	  !(!rawVariableValues || (typeof rawVariableValues === 'undefined' ? 'undefined' : _typeof$d(rawVariableValues)) === 'object') ? invariant(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
	}

	/**
	 * Constructs a ExecutionContext object from the arguments passed to
	 * execute, which we will pass throughout the other execution methods.
	 *
	 * Throws a GraphQLError if a valid execution context cannot be created.
	 */
	function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
	  var errors = [];
	  var operation = void 0;
	  var hasMultipleAssumedOperations = false;
	  var fragments = Object.create(null);
	  for (var i = 0; i < document.definitions.length; i++) {
	    var definition = document.definitions[i];
	    switch (definition.kind) {
	      case Kind.OPERATION_DEFINITION:
	        if (!operationName && operation) {
	          hasMultipleAssumedOperations = true;
	        } else if (!operationName || definition.name && definition.name.value === operationName) {
	          operation = definition;
	        }
	        break;
	      case Kind.FRAGMENT_DEFINITION:
	        fragments[definition.name.value] = definition;
	        break;
	    }
	  }

	  if (!operation) {
	    if (operationName) {
	      errors.push(new GraphQLError('Unknown operation named "' + operationName + '".'));
	    } else {
	      errors.push(new GraphQLError('Must provide an operation.'));
	    }
	  } else if (hasMultipleAssumedOperations) {
	    errors.push(new GraphQLError('Must provide operation name if query contains ' + 'multiple operations.'));
	  }

	  var variableValues = void 0;
	  if (operation) {
	    var coercedVariableValues = getVariableValues(schema, operation.variableDefinitions || [], rawVariableValues || {});

	    if (coercedVariableValues.errors) {
	      errors.push.apply(errors, coercedVariableValues.errors);
	    } else {
	      variableValues = coercedVariableValues.coerced;
	    }
	  }

	  if (errors.length !== 0) {
	    return errors;
	  }

	  !operation ? invariant(0, 'Has operation if no errors.') : void 0;
	  !variableValues ? invariant(0, 'Has variables if no errors.') : void 0;

	  return {
	    schema: schema,
	    fragments: fragments,
	    rootValue: rootValue,
	    contextValue: contextValue,
	    operation: operation,
	    variableValues: variableValues,
	    fieldResolver: fieldResolver || defaultFieldResolver,
	    errors: errors
	  };
	}

	/**
	 * Implements the "Evaluating operations" section of the spec.
	 */
	function executeOperation(exeContext, operation, rootValue) {
	  var type = getOperationRootType(exeContext.schema, operation);
	  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));

	  var path = undefined;

	  // Errors from sub-fields of a NonNull type may propagate to the top level,
	  // at which point we still log the error and null the parent field, which
	  // in this case is the entire response.
	  //
	  // Similar to completeValueCatchingError.
	  try {
	    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
	    var promise = getPromise(result);
	    if (promise) {
	      return promise.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return Promise.resolve(null);
	      });
	    }
	    return result;
	  } catch (error) {
	    exeContext.errors.push(error);
	    return null;
	  }
	}

	/**
	 * Extracts the root type of the operation from the schema.
	 */
	function getOperationRootType(schema, operation) {
	  switch (operation.operation) {
	    case 'query':
	      var queryType = schema.getQueryType();
	      if (!queryType) {
	        throw new GraphQLError('Schema does not define the required query root type.', [operation]);
	      }
	      return queryType;
	    case 'mutation':
	      var mutationType = schema.getMutationType();
	      if (!mutationType) {
	        throw new GraphQLError('Schema is not configured for mutations.', [operation]);
	      }
	      return mutationType;
	    case 'subscription':
	      var subscriptionType = schema.getSubscriptionType();
	      if (!subscriptionType) {
	        throw new GraphQLError('Schema is not configured for subscriptions.', [operation]);
	      }
	      return subscriptionType;
	    default:
	      throw new GraphQLError('Can only execute queries, mutations and subscriptions.', [operation]);
	  }
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "write" mode.
	 */
	function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
	  return promiseReduce(Object.keys(fields), function (results, responseName) {
	    var fieldNodes = fields[responseName];
	    var fieldPath = addPath(path, responseName);
	    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
	    if (result === undefined) {
	      return results;
	    }
	    var promise = getPromise(result);
	    if (promise) {
	      return promise.then(function (resolvedResult) {
	        results[responseName] = resolvedResult;
	        return results;
	      });
	    }
	    results[responseName] = result;
	    return results;
	  }, Object.create(null));
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "read" mode.
	 */
	function executeFields(exeContext, parentType, sourceValue, path, fields) {
	  var containsPromise = false;

	  var finalResults = Object.keys(fields).reduce(function (results, responseName) {
	    var fieldNodes = fields[responseName];
	    var fieldPath = addPath(path, responseName);
	    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
	    if (result === undefined) {
	      return results;
	    }
	    results[responseName] = result;
	    if (getPromise(result)) {
	      containsPromise = true;
	    }
	    return results;
	  }, Object.create(null));

	  // If there are no promises, we can just return the object
	  if (!containsPromise) {
	    return finalResults;
	  }

	  // Otherwise, results is a map from field name to the result
	  // of resolving that field, which is possibly a promise. Return
	  // a promise that will return this same map, but with any
	  // promises replaced with the values they resolved to.
	  return promiseForObject(finalResults);
	}

	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 *
	 * CollectFields requires the "runtime type" of an object. For a field which
	 * returns an Interface or Union type, the "runtime type" will be the actual
	 * Object type returned by that field.
	 */
	function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case Kind.FIELD:
	        if (!shouldIncludeNode(exeContext, selection)) {
	          continue;
	        }
	        var name = getFieldEntryKey(selection);
	        if (!fields[name]) {
	          fields[name] = [];
	        }
	        fields[name].push(selection);
	        break;
	      case Kind.INLINE_FRAGMENT:
	        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
	        break;
	      case Kind.FRAGMENT_SPREAD:
	        var fragName = selection.name.value;
	        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
	          continue;
	        }
	        visitedFragmentNames[fragName] = true;
	        var fragment = exeContext.fragments[fragName];
	        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
	        break;
	    }
	  }
	  return fields;
	}

	/**
	 * Determines if a field should be included based on the @include and @skip
	 * directives, where @skip has higher precidence than @include.
	 */
	function shouldIncludeNode(exeContext, node) {
	  var skip = getDirectiveValues(GraphQLSkipDirective, node, exeContext.variableValues);
	  if (skip && skip.if === true) {
	    return false;
	  }

	  var include = getDirectiveValues(GraphQLIncludeDirective, node, exeContext.variableValues);
	  if (include && include.if === false) {
	    return false;
	  }
	  return true;
	}

	/**
	 * Determines if a fragment is applicable to the given type.
	 */
	function doesFragmentConditionMatch(exeContext, fragment, type) {
	  var typeConditionNode = fragment.typeCondition;
	  if (!typeConditionNode) {
	    return true;
	  }
	  var conditionalType = typeFromAST(exeContext.schema, typeConditionNode);
	  if (conditionalType === type) {
	    return true;
	  }
	  if (isAbstractType(conditionalType)) {
	    return exeContext.schema.isPossibleType(conditionalType, type);
	  }
	  return false;
	}

	/**
	 * Implements the logic to compute the key of a given field's entry
	 */
	function getFieldEntryKey(node) {
	  return node.alias ? node.alias.value : node.name.value;
	}

	/**
	 * Resolves the field on the given source object. In particular, this
	 * figures out the value that the field returns by calling its resolve function,
	 * then calls completeValue to complete promises, serialize scalars, or execute
	 * the sub-selection-set for objects.
	 */
	function resolveField(exeContext, parentType, source, fieldNodes, path) {
	  var fieldNode = fieldNodes[0];
	  var fieldName = fieldNode.name.value;

	  var fieldDef = getFieldDef$1(exeContext.schema, parentType, fieldName);
	  if (!fieldDef) {
	    return;
	  }

	  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;

	  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);

	  // Get the resolve function, regardless of if its result is normal
	  // or abrupt (error).
	  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);

	  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
	}

	function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
	  // The resolve function's optional fourth argument is a collection of
	  // information about the current execution state.
	  return {
	    fieldName: fieldNodes[0].name.value,
	    fieldNodes: fieldNodes,
	    returnType: fieldDef.type,
	    parentType: parentType,
	    path: path,
	    schema: exeContext.schema,
	    fragments: exeContext.fragments,
	    rootValue: exeContext.rootValue,
	    operation: exeContext.operation,
	    variableValues: exeContext.variableValues
	  };
	}

	// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
	// function. Returns the result of resolveFn or the abrupt-return Error object.
	function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
	  try {
	    // Build a JS object of arguments from the field.arguments AST, using the
	    // variables scope to fulfill any variable references.
	    // TODO: find a way to memoize, in case this field is within a List type.
	    var args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues);

	    // The resolve function's optional third argument is a context value that
	    // is provided to every resolve function within an execution. It is commonly
	    // used to represent an authenticated user, or request-specific caches.
	    var context = exeContext.contextValue;

	    var result = resolveFn(source, args, context, info);
	    var promise = getPromise(result);
	    return promise ? promise.then(undefined, asErrorInstance) : result;
	  } catch (error) {
	    return asErrorInstance(error);
	  }
	}

	// Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
	// consistent Error interface.
	function asErrorInstance(error) {
	  return error instanceof Error ? error : new Error(error || undefined);
	}

	// This is a small wrapper around completeValue which detects and logs errors
	// in the execution context.
	function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
	  // If the field type is non-nullable, then it is resolved without any
	  // protection from errors, however it still properly locates the error.
	  if (isNonNullType(returnType)) {
	    return completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
	  }

	  // Otherwise, error protection is applied, logging the error and resolving
	  // a null value for this field if one is encountered.
	  try {
	    var completed = completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result);
	    var promise = getPromise(completed);
	    if (promise) {
	      // If `completeValueWithLocatedError` returned a rejected promise, log
	      // the rejection error and resolve to null.
	      // Note: we don't rely on a `catch` method, but we do expect "thenable"
	      // to take a second callback for the error case.
	      return promise.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return Promise.resolve(null);
	      });
	    }
	    return completed;
	  } catch (error) {
	    // If `completeValueWithLocatedError` returned abruptly (threw an error),
	    // log the error and return null.
	    exeContext.errors.push(error);
	    return null;
	  }
	}

	// This is a small wrapper around completeValue which annotates errors with
	// location information.
	function completeValueWithLocatedError(exeContext, returnType, fieldNodes, info, path, result) {
	  try {
	    var completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
	    var promise = getPromise(completed);
	    if (promise) {
	      return promise.then(undefined, function (error) {
	        return Promise.reject(locatedError(asErrorInstance(error), fieldNodes, responsePathAsArray(path)));
	      });
	    }
	    return completed;
	  } catch (error) {
	    throw locatedError(asErrorInstance(error), fieldNodes, responsePathAsArray(path));
	  }
	}

	/**
	 * Implements the instructions for completeValue as defined in the
	 * "Field entries" section of the spec.
	 *
	 * If the field type is Non-Null, then this recursively completes the value
	 * for the inner type. It throws a field error if that completion returns null,
	 * as per the "Nullability" section of the spec.
	 *
	 * If the field type is a List, then this recursively completes the value
	 * for the inner type on each item in the list.
	 *
	 * If the field type is a Scalar or Enum, ensures the completed value is a legal
	 * value of the type by calling the `serialize` method of GraphQL type
	 * definition.
	 *
	 * If the field is an abstract type, determine the runtime type of the value
	 * and then complete based on that type
	 *
	 * Otherwise, the field type expects a sub-selection set, and will complete the
	 * value by evaluating all sub-selections.
	 */
	function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
	  // If result is a Promise, apply-lift over completeValue.
	  var promise = getPromise(result);
	  if (promise) {
	    return promise.then(function (resolved) {
	      return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
	    });
	  }

	  // If result is an Error, throw a located error.
	  if (result instanceof Error) {
	    throw result;
	  }

	  // If field type is NonNull, complete for inner type, and throw field error
	  // if result is null.
	  if (isNonNullType(returnType)) {
	    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
	    if (completed === null) {
	      throw new Error('Cannot return null for non-nullable field ' + info.parentType.name + '.' + info.fieldName + '.');
	    }
	    return completed;
	  }

	  // If result value is null-ish (null, undefined, or NaN) then return null.
	  if (isNullish(result)) {
	    return null;
	  }

	  // If field type is List, complete each item in the list with the inner type
	  if (isListType(returnType)) {
	    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
	  }

	  // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
	  // returning null if serialization is not possible.
	  if (isLeafType(returnType)) {
	    return completeLeafValue(returnType, result);
	  }

	  // If field type is an abstract type, Interface or Union, determine the
	  // runtime Object type and complete for that type.
	  if (isAbstractType(returnType)) {
	    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
	  }

	  // If field type is Object, execute and complete all sub-selections.
	  if (isObjectType(returnType)) {
	    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
	  }

	  // Not reachable. All possible output types have been considered.
	  /* istanbul ignore next */
	  throw new Error('Cannot complete value of unexpected type "' + String(returnType) + '".');
	}

	/**
	 * Complete a list value by completing each item in the list with the
	 * inner type
	 */
	function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
	  !isCollection_1(result) ? invariant(0, 'Expected Iterable, but did not find one for field ' + info.parentType.name + '.' + info.fieldName + '.') : void 0;

	  // This is specified as a simple map, however we're optimizing the path
	  // where the list contains no Promises by avoiding creating another Promise.
	  var itemType = returnType.ofType;
	  var containsPromise = false;
	  var completedResults = [];
	  forEach_1(result, function (item, index) {
	    // No need to modify the info object containing the path,
	    // since from here on it is not ever accessed by resolver functions.
	    var fieldPath = addPath(path, index);
	    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

	    if (!containsPromise && getPromise(completedItem)) {
	      containsPromise = true;
	    }
	    completedResults.push(completedItem);
	  });

	  return containsPromise ? Promise.all(completedResults) : completedResults;
	}

	/**
	 * Complete a Scalar or Enum by serializing to a valid value, returning
	 * null if serialization is not possible.
	 */
	function completeLeafValue(returnType, result) {
	  !returnType.serialize ? invariant(0, 'Missing serialize method on type') : void 0;
	  var serializedResult = returnType.serialize(result);
	  if (isInvalid(serializedResult)) {
	    throw new Error('Expected a value of type "' + String(returnType) + '" but ' + ('received: ' + String(result)));
	  }
	  return serializedResult;
	}

	/**
	 * Complete a value of an abstract type by determining the runtime object type
	 * of that value, then complete the value for that type.
	 */
	function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
	  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);

	  var promise = getPromise(runtimeType);
	  if (promise) {
	    return promise.then(function (resolvedRuntimeType) {
	      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
	    });
	  }

	  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
	}

	function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
	  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

	  if (!isObjectType(runtimeType)) {
	    throw new GraphQLError('Abstract type ' + returnType.name + ' must resolve to an Object type at ' + ('runtime for field ' + info.parentType.name + '.' + info.fieldName + ' with ') + ('value "' + String(result) + '", received "' + String(runtimeType) + '". ') + ('Either the ' + returnType.name + ' type should provide a "resolveType" ') + 'function or each possible types should provide an ' + '"isTypeOf" function.', fieldNodes);
	  }

	  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
	    throw new GraphQLError('Runtime Object type "' + runtimeType.name + '" is not a possible type ' + ('for "' + returnType.name + '".'), fieldNodes);
	  }

	  return runtimeType;
	}

	/**
	 * Complete an Object value by executing all sub-selections.
	 */
	function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
	  // If there is an isTypeOf predicate function, call it with the
	  // current result. If isTypeOf returns false, then raise an error rather
	  // than continuing execution.
	  if (returnType.isTypeOf) {
	    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

	    var promise = getPromise(isTypeOf);
	    if (promise) {
	      return promise.then(function (isTypeOfResult) {
	        if (!isTypeOfResult) {
	          throw invalidReturnTypeError(returnType, result, fieldNodes);
	        }
	        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
	      });
	    }

	    if (!isTypeOf) {
	      throw invalidReturnTypeError(returnType, result, fieldNodes);
	    }
	  }

	  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result);
	}

	function invalidReturnTypeError(returnType, result, fieldNodes) {
	  return new GraphQLError('Expected value of type "' + returnType.name + '" but got: ' + String(result) + '.', fieldNodes);
	}

	function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, info, path, result) {
	  // Collect sub-fields to execute to complete this value.
	  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
	  return executeFields(exeContext, returnType, result, path, subFieldNodes);
	}

	/**
	 * A memoized collection of relevant subfields in the context of the return
	 * type. Memoizing ensures the subfields are not repeatedly calculated, which
	 * saves overhead when resolving lists of values.
	 */
	var collectSubfields = memoize3(_collectSubfields);
	function _collectSubfields(exeContext, returnType, fieldNodes) {
	  var subFieldNodes = Object.create(null);
	  var visitedFragmentNames = Object.create(null);
	  for (var i = 0; i < fieldNodes.length; i++) {
	    var selectionSet = fieldNodes[i].selectionSet;
	    if (selectionSet) {
	      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
	    }
	  }
	  return subFieldNodes;
	}

	/**
	 * If a resolveType function is not given, then a default resolve behavior is
	 * used which attempts two strategies:
	 *
	 * First, See if the provided value has a `__typename` field defined, if so, use
	 * that value as name of the resolved type.
	 *
	 * Otherwise, test each possible type for the abstract type by calling
	 * isTypeOf for the object being coerced, returning the first type that matches.
	 */
	function defaultResolveTypeFn(value, context, info, abstractType) {
	  // First, look for `__typename`.
	  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof$d(value)) === 'object' && typeof value.__typename === 'string') {
	    return value.__typename;
	  }

	  // Otherwise, test each possible type.
	  var possibleTypes = info.schema.getPossibleTypes(abstractType);
	  var promisedIsTypeOfResults = [];

	  for (var i = 0; i < possibleTypes.length; i++) {
	    var type = possibleTypes[i];

	    if (type.isTypeOf) {
	      var isTypeOfResult = type.isTypeOf(value, context, info);

	      var promise = getPromise(isTypeOfResult);
	      if (promise) {
	        promisedIsTypeOfResults[i] = promise;
	      } else if (isTypeOfResult) {
	        return type;
	      }
	    }
	  }

	  if (promisedIsTypeOfResults.length) {
	    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
	      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
	        if (isTypeOfResults[_i]) {
	          return possibleTypes[_i];
	        }
	      }
	    });
	  }
	}

	/**
	 * If a resolve function is not given, then a default resolve behavior is used
	 * which takes the property of the source object of the same name as the field
	 * and returns it as the result, or if it's a function, returns the result
	 * of calling that function while passing along args and context.
	 */
	var defaultFieldResolver = function defaultFieldResolver(source, args, context, info) {
	  // ensure source is a value for which property access is acceptable.
	  if ((typeof source === 'undefined' ? 'undefined' : _typeof$d(source)) === 'object' || typeof source === 'function') {
	    var property = source[info.fieldName];
	    if (typeof property === 'function') {
	      return source[info.fieldName](args, context, info);
	    }
	    return property;
	  }
	};

	/**
	 * This method looks up the field on the given type defintion.
	 * It has special casing for the two introspection fields, __schema
	 * and __typename. __typename is special because it can always be
	 * queried as a field, even in situations where no other fields
	 * are allowed, like on a Union. __schema could get automatically
	 * added to the query type, but that would require mutating type
	 * definitions, which would cause issues.
	 */
	function getFieldDef$1(schema, parentType, fieldName) {
	  if (fieldName === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return SchemaMetaFieldDef;
	  } else if (fieldName === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return TypeMetaFieldDef;
	  } else if (fieldName === TypeNameMetaFieldDef.name) {
	    return TypeNameMetaFieldDef;
	  }
	  return parentType.getFields()[fieldName];
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * This is the primary entry point function for fulfilling GraphQL operations
	 * by parsing, validating, and executing a GraphQL document along side a
	 * GraphQL schema.
	 *
	 * More sophisticated GraphQL servers, such as those which persist queries,
	 * may wish to separate the validation and execution phases to a static time
	 * tooling step, and a server runtime step.
	 *
	 * Accepts either an object with named arguments, or individual arguments:
	 *
	 * schema:
	 *    The GraphQL type system to use when validating and executing a query.
	 * source:
	 *    A GraphQL language formatted string representing the requested operation.
	 * rootValue:
	 *    The value provided as the first argument to resolver functions on the top
	 *    level type (e.g. the query object type).
	 * variableValues:
	 *    A mapping of variable name to runtime value to use for all variables
	 *    defined in the requestString.
	 * operationName:
	 *    The name of the operation to use if requestString contains multiple
	 *    possible operations. Can be omitted if requestString contains only
	 *    one operation.
	 * fieldResolver:
	 *    A resolver function to use when one is not provided by the schema.
	 *    If not provided, the default field resolver is used (which looks for a
	 *    value or method on the source value with the field's name).
	 */

	/* eslint-disable no-redeclare */

	function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  var _arguments = arguments;

	  /* eslint-enable no-redeclare */
	  // Always return a Promise for a consistent API.
	  return new Promise(function (resolve) {
	    return resolve(
	    // Extract arguments from object args if provided.
	    _arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver));
	  });
	}

	/**
	 * The graphqlSync function also fulfills GraphQL operations by parsing,
	 * validating, and executing a GraphQL document along side a GraphQL schema.
	 * However, it guarantees to complete synchronously (or throw an error) assuming
	 * that all field resolvers are also synchronous.
	 */

	/* eslint-disable no-redeclare */

	function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // Extract arguments from object args if provided.
	  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver);

	  // Assert that the execution was synchronous.
	  if (result.then) {
	    throw new Error('GraphQL execution failed to complete synchronously.');
	  }

	  return result;
	}

	function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // Validate Schema
	  var schemaValidationErrors = validateSchema(schema);
	  if (schemaValidationErrors.length > 0) {
	    return { errors: schemaValidationErrors };
	  }

	  // Parse
	  var document = void 0;
	  try {
	    document = parse(source);
	  } catch (syntaxError) {
	    return { errors: [syntaxError] };
	  }

	  // Validate
	  var validationErrors = validate(schema, document);
	  if (validationErrors.length > 0) {
	    return { errors: validationErrors };
	  }

	  // Execute
	  return execute(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	/**
	 * Given an AsyncIterable and a callback function, return an AsyncIterator
	 * which produces values mapped via calling the callback function.
	 */
	function mapAsyncIterator(iterable, callback, rejectCallback) {
	  var iterator = getAsyncIterator_1(iterable);
	  var $return = void 0;
	  var abruptClose = void 0;
	  if (typeof iterator.return === 'function') {
	    $return = iterator.return;
	    abruptClose = function abruptClose(error) {
	      var rethrow = function rethrow() {
	        return Promise.reject(error);
	      };
	      return $return.call(iterator).then(rethrow, rethrow);
	    };
	  }

	  function mapResult(result) {
	    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
	  }

	  var mapReject = void 0;
	  if (rejectCallback) {
	    // Capture rejectCallback to ensure it cannot be null.
	    var reject = rejectCallback;
	    mapReject = function mapReject(error) {
	      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
	    };
	  }

	  /* TODO: Flow doesn't support symbols as keys:
	     https://github.com/facebook/flow/issues/3258 */
	  return _defineProperty$1({
	    next: function next() {
	      return iterator.next().then(mapResult, mapReject);
	    },
	    return: function _return() {
	      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({ value: undefined, done: true });
	    },
	    throw: function _throw(error) {
	      if (typeof iterator.throw === 'function') {
	        return iterator.throw(error).then(mapResult, mapReject);
	      }
	      return Promise.reject(error).catch(abruptClose);
	    }
	  }, $$asyncIterator_1, function () {
	    return this;
	  });
	}

	function asyncMapValue(value, callback) {
	  return new Promise(function (resolve) {
	    return resolve(callback(value));
	  });
	}

	function iteratorResult(value) {
	  return { value: value, done: false };
	}

	/**
	 * Copyright (c) 2017-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Implements the "Subscribe" algorithm described in the GraphQL specification.
	 *
	 * Returns a Promise which resolves to either an AsyncIterator (if successful)
	 * or an ExecutionResult (client error). The promise will be rejected if a
	 * server error occurs.
	 *
	 * If the client-provided arguments to this function do not result in a
	 * compliant subscription, a GraphQL Response (ExecutionResult) with
	 * descriptive errors and no data will be returned.
	 *
	 * If the the source stream could not be created due to faulty subscription
	 * resolver logic or underlying systems, the promise will resolve to a single
	 * ExecutionResult containing `errors` and no `data`.
	 *
	 * If the operation succeeded, the promise resolves to an AsyncIterator, which
	 * yields a stream of ExecutionResults representing the response stream.
	 *
	 * Accepts either an object with named arguments, or individual arguments.
	 */

	/* eslint-disable no-redeclare */

	function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
	  /* eslint-enable no-redeclare */
	  // Extract arguments from object args if provided.
	  return arguments.length === 1 ? subscribeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.subscribeFieldResolver) : subscribeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
	}

	/**
	 * This function checks if the error is a GraphQLError. If it is, report it as
	 * an ExecutionResult, containing only errors and no data. Otherwise treat the
	 * error as a system-class error and re-throw it.
	 */
	function reportGraphQLError(error) {
	  if (error instanceof GraphQLError) {
	    return { errors: [error] };
	  }
	  throw error;
	}

	function subscribeImpl(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
	  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);

	  // For each payload yielded from a subscription, map it over the normal
	  // GraphQL `execute` function, with `payload` as the rootValue.
	  // This implements the "MapSourceToResponseEvent" algorithm described in
	  // the GraphQL specification. The `execute` function provides the
	  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
	  // "ExecuteQuery" algorithm, for which `execute` is also used.
	  var mapSourceToResponse = function mapSourceToResponse(payload) {
	    return execute(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
	  };

	  // Resolve the Source Stream, then map every source value to a
	  // ExecutionResult value as described above.
	  return sourcePromise.then(function (resultOrStream) {
	    return (
	      // Note: Flow can't refine isAsyncIterable, so explicit casts are used.
	      isAsyncIterable_1(resultOrStream) ? mapAsyncIterator(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
	    );
	  }, reportGraphQLError);
	}

	/**
	 * Implements the "CreateSourceEventStream" algorithm described in the
	 * GraphQL specification, resolving the subscription source event stream.
	 *
	 * Returns a Promise<AsyncIterable>.
	 *
	 * If the client-provided invalid arguments, the source stream could not be
	 * created, or the resolver did not return an AsyncIterable, this function will
	 * will throw an error, which should be caught and handled by the caller.
	 *
	 * A Source Event Stream represents a sequence of events, each of which triggers
	 * a GraphQL execution for that event.
	 *
	 * This may be useful when hosting the stateful subscription service in a
	 * different process or machine than the stateless GraphQL execution engine,
	 * or otherwise separating these two steps. For more on this, see the
	 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
	 */
	function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
	  // If arguments are missing or incorrectly typed, this is an internal
	  // developer mistake which should throw an early error.
	  assertValidExecutionArguments(schema, document, variableValues);

	  try {
	    // If a valid context cannot be created due to incorrect arguments,
	    // this will throw an error.
	    var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);

	    // Return early errors if execution context failed.
	    if (Array.isArray(exeContext)) {
	      return Promise.resolve({ errors: exeContext });
	    }

	    var type = getOperationRootType(schema, exeContext.operation);
	    var fields = collectFields(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
	    var responseNames = Object.keys(fields);
	    var responseName = responseNames[0];
	    var fieldNodes = fields[responseName];
	    var fieldNode = fieldNodes[0];
	    var fieldName = fieldNode.name.value;
	    var fieldDef = getFieldDef$1(schema, type, fieldName);

	    if (!fieldDef) {
	      throw new GraphQLError('The subscription field "' + fieldName + '" is not defined.', fieldNodes);
	    }

	    // Call the `subscribe()` resolver or the default resolver to produce an
	    // AsyncIterable yielding raw payloads.
	    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;

	    var path = addPath(undefined, responseName);

	    var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, type, path);

	    // resolveFieldValueOrError implements the "ResolveFieldEventStream"
	    // algorithm from GraphQL specification. It differs from
	    // "ResolveFieldValue" due to providing a different `resolveFn`.
	    var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info);

	    // Coerce to Promise for easier error handling and consistent return type.
	    return Promise.resolve(result).then(function (eventStream) {
	      // If eventStream is an Error, rethrow a located error.
	      if (eventStream instanceof Error) {
	        throw locatedError(eventStream, fieldNodes, responsePathAsArray(path));
	      }

	      // Assert field returned an event stream, otherwise yield an error.
	      if (isAsyncIterable_1(eventStream)) {
	        // Note: isAsyncIterable above ensures this will be correct.
	        return eventStream;
	      }
	      throw new Error('Subscription field must return Async Iterable. Received: ' + String(eventStream));
	    });
	  } catch (error) {
	    return Promise.reject(error);
	  }
	}

	/**
	 * Copyright (c) 2017-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function getIntrospectionQuery(options) {
	  var descriptions = !(options && options.descriptions === false);
	  return '\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ' + (descriptions ? 'description' : '') + '\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ' + (descriptions ? 'description' : '') + '\n      fields(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ' + (descriptions ? 'description' : '') + '\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ' + (descriptions ? 'description' : '') + '\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ';
	}

	var introspectionQuery = getIntrospectionQuery();

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Returns an operation AST given a document AST and optionally an operation
	 * name. If a name is not provided, an operation is only returned if only one is
	 * provided in the document.
	 */
	function getOperationAST(documentAST, operationName) {
	  var operation = null;
	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var definition = documentAST.definitions[i];
	    if (definition.kind === Kind.OPERATION_DEFINITION) {
	      if (!operationName) {
	        // If no operation name was provided, only return an Operation if there
	        // is one defined in the document. Upon encountering the second, return
	        // null.
	        if (operation) {
	          return null;
	        }
	        operation = definition;
	      } else if (definition.name && definition.name.value === operationName) {
	        return definition;
	      }
	    }
	  }
	  return operation;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Build an IntrospectionQuery from a GraphQLSchema
	 *
	 * IntrospectionQuery is useful for utilities that care about type and field
	 * relationships, but do not need to traverse through those relationships.
	 *
	 * This is the inverse of buildClientSchema. The primary use case is outside
	 * of the server context, for instance when doing schema comparisons.
	 */
	function introspectionFromSchema(schema, options) {
	  var queryAST = parse(getIntrospectionQuery(options));
	  var result = execute(schema, queryAST);
	  !(!result.then && !result.errors && result.data) ? invariant(0) : void 0;
	  return result.data;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Build a GraphQLSchema for use by client tools.
	 *
	 * Given the result of a client running the introspection query, creates and
	 * returns a GraphQLSchema instance which can be then used with all graphql-js
	 * tools, but cannot be used to execute a query, as introspection does not
	 * represent the "resolver", "parse" or "serialize" functions or any other
	 * server-internal mechanisms.
	 *
	 * This function expects a complete introspection result. Don't forget to check
	 * the "errors" field of a server response before calling this function.
	 */
	function buildClientSchema(introspection, options) {
	  // Get the schema from the introspection result.
	  var schemaIntrospection = introspection.__schema;

	  // Converts the list of types into a keyMap based on the type names.
	  var typeIntrospectionMap = keyMap(schemaIntrospection.types, function (type) {
	    return type.name;
	  });

	  // A cache to use to store the actual GraphQLType definition objects by name.
	  // Initialize to the GraphQL built in scalars. All functions below are inline
	  // so that this type def cache is within the scope of the closure.
	  var typeDefCache = keyMap(specifiedScalarTypes.concat(introspectionTypes), function (type) {
	    return type.name;
	  });

	  // Given a type reference in introspection, return the GraphQLType instance.
	  // preferring cached instances before building new instances.
	  function getType(typeRef) {
	    if (typeRef.kind === TypeKind.LIST) {
	      var itemRef = typeRef.ofType;
	      if (!itemRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      return GraphQLList(getType(itemRef));
	    }
	    if (typeRef.kind === TypeKind.NON_NULL) {
	      var nullableRef = typeRef.ofType;
	      if (!nullableRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      var nullableType = getType(nullableRef);
	      return GraphQLNonNull(assertNullableType(nullableType));
	    }
	    if (!typeRef.name) {
	      throw new Error('Unknown type reference: ' + JSON.stringify(typeRef));
	    }
	    return getNamedType$$1(typeRef.name);
	  }

	  function getNamedType$$1(typeName) {
	    if (typeDefCache[typeName]) {
	      return typeDefCache[typeName];
	    }
	    var typeIntrospection = typeIntrospectionMap[typeName];
	    if (!typeIntrospection) {
	      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
	    }
	    var typeDef = buildType(typeIntrospection);
	    typeDefCache[typeName] = typeDef;
	    return typeDef;
	  }

	  function getInputType(typeRef) {
	    var type = getType(typeRef);
	    !isInputType(type) ? invariant(0, 'Introspection must provide input type for arguments.') : void 0;
	    return type;
	  }

	  function getOutputType(typeRef) {
	    var type = getType(typeRef);
	    !isOutputType(type) ? invariant(0, 'Introspection must provide output type for fields.') : void 0;
	    return type;
	  }

	  function getObjectType(typeRef) {
	    var type = getType(typeRef);
	    return assertObjectType(type);
	  }

	  function getInterfaceType(typeRef) {
	    var type = getType(typeRef);
	    return assertInterfaceType(type);
	  }

	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function buildType(type) {
	    if (type && type.name && type.kind) {
	      switch (type.kind) {
	        case TypeKind.SCALAR:
	          return buildScalarDef(type);
	        case TypeKind.OBJECT:
	          return buildObjectDef(type);
	        case TypeKind.INTERFACE:
	          return buildInterfaceDef(type);
	        case TypeKind.UNION:
	          return buildUnionDef(type);
	        case TypeKind.ENUM:
	          return buildEnumDef(type);
	        case TypeKind.INPUT_OBJECT:
	          return buildInputObjectDef(type);
	      }
	    }
	    throw new Error('Invalid or incomplete introspection result. Ensure that a full ' + 'introspection query is used in order to build a client schema:' + JSON.stringify(type));
	  }

	  function buildScalarDef(scalarIntrospection) {
	    return new GraphQLScalarType({
	      name: scalarIntrospection.name,
	      description: scalarIntrospection.description,
	      serialize: function serialize(value) {
	        return value;
	      }
	    });
	  }

	  function buildObjectDef(objectIntrospection) {
	    if (!objectIntrospection.interfaces) {
	      throw new Error('Introspection result missing interfaces: ' + JSON.stringify(objectIntrospection));
	    }
	    return new GraphQLObjectType({
	      name: objectIntrospection.name,
	      description: objectIntrospection.description,
	      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
	      fields: function fields() {
	        return buildFieldDefMap(objectIntrospection);
	      }
	    });
	  }

	  function buildInterfaceDef(interfaceIntrospection) {
	    return new GraphQLInterfaceType({
	      name: interfaceIntrospection.name,
	      description: interfaceIntrospection.description,
	      fields: function fields() {
	        return buildFieldDefMap(interfaceIntrospection);
	      }
	    });
	  }

	  function buildUnionDef(unionIntrospection) {
	    if (!unionIntrospection.possibleTypes) {
	      throw new Error('Introspection result missing possibleTypes: ' + JSON.stringify(unionIntrospection));
	    }
	    return new GraphQLUnionType({
	      name: unionIntrospection.name,
	      description: unionIntrospection.description,
	      types: unionIntrospection.possibleTypes.map(getObjectType)
	    });
	  }

	  function buildEnumDef(enumIntrospection) {
	    if (!enumIntrospection.enumValues) {
	      throw new Error('Introspection result missing enumValues: ' + JSON.stringify(enumIntrospection));
	    }
	    return new GraphQLEnumType({
	      name: enumIntrospection.name,
	      description: enumIntrospection.description,
	      values: keyValMap(enumIntrospection.enumValues, function (valueIntrospection) {
	        return valueIntrospection.name;
	      }, function (valueIntrospection) {
	        return {
	          description: valueIntrospection.description,
	          deprecationReason: valueIntrospection.deprecationReason
	        };
	      })
	    });
	  }

	  function buildInputObjectDef(inputObjectIntrospection) {
	    if (!inputObjectIntrospection.inputFields) {
	      throw new Error('Introspection result missing inputFields: ' + JSON.stringify(inputObjectIntrospection));
	    }
	    return new GraphQLInputObjectType({
	      name: inputObjectIntrospection.name,
	      description: inputObjectIntrospection.description,
	      fields: function fields() {
	        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
	      }
	    });
	  }

	  function buildFieldDefMap(typeIntrospection) {
	    if (!typeIntrospection.fields) {
	      throw new Error('Introspection result missing fields: ' + JSON.stringify(typeIntrospection));
	    }
	    return keyValMap(typeIntrospection.fields, function (fieldIntrospection) {
	      return fieldIntrospection.name;
	    }, function (fieldIntrospection) {
	      if (!fieldIntrospection.args) {
	        throw new Error('Introspection result missing field args: ' + JSON.stringify(fieldIntrospection));
	      }
	      return {
	        description: fieldIntrospection.description,
	        deprecationReason: fieldIntrospection.deprecationReason,
	        type: getOutputType(fieldIntrospection.type),
	        args: buildInputValueDefMap(fieldIntrospection.args)
	      };
	    });
	  }

	  function buildInputValueDefMap(inputValueIntrospections) {
	    return keyValMap(inputValueIntrospections, function (inputValue) {
	      return inputValue.name;
	    }, buildInputValue);
	  }

	  function buildInputValue(inputValueIntrospection) {
	    var type = getInputType(inputValueIntrospection.type);
	    var defaultValue = inputValueIntrospection.defaultValue ? valueFromAST(parseValue(inputValueIntrospection.defaultValue), type) : undefined;
	    return {
	      name: inputValueIntrospection.name,
	      description: inputValueIntrospection.description,
	      type: type,
	      defaultValue: defaultValue
	    };
	  }

	  function buildDirective(directiveIntrospection) {
	    // Support deprecated `on****` fields for building `locations`, as this
	    // is used by GraphiQL which may need to support outdated servers.
	    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [DirectiveLocation.QUERY, DirectiveLocation.MUTATION, DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [DirectiveLocation.FRAGMENT_DEFINITION, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT]);
	    if (!directiveIntrospection.args) {
	      throw new Error('Introspection result missing directive args: ' + JSON.stringify(directiveIntrospection));
	    }
	    return new GraphQLDirective({
	      name: directiveIntrospection.name,
	      description: directiveIntrospection.description,
	      locations: locations,
	      args: buildInputValueDefMap(directiveIntrospection.args)
	    });
	  }

	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  var types = schemaIntrospection.types.map(function (typeIntrospection) {
	    return getNamedType$$1(typeIntrospection.name);
	  });

	  // Get the root Query, Mutation, and Subscription types.
	  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;

	  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

	  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

	  // Get the directives supported by Introspection, assuming empty-set if
	  // directives were not queried for.
	  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

	  // Then produce and return a Schema with these types.
	  return new GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    types: types,
	    directives: directives,
	    assumeValid: options && options.assumeValid
	  });
	}

	function _classCallCheck$8(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function buildWrappedType(innerType, inputTypeNode) {
	  if (inputTypeNode.kind === Kind.LIST_TYPE) {
	    return GraphQLList(buildWrappedType(innerType, inputTypeNode.type));
	  }
	  if (inputTypeNode.kind === Kind.NON_NULL_TYPE) {
	    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
	    return GraphQLNonNull(assertNullableType(wrappedType));
	  }
	  return innerType;
	}

	function getNamedTypeNode(typeNode) {
	  var namedType = typeNode;
	  while (namedType.kind === Kind.LIST_TYPE || namedType.kind === Kind.NON_NULL_TYPE) {
	    namedType = namedType.type;
	  }
	  return namedType;
	}

	/**
	 * This takes the ast of a schema document produced by the parse function in
	 * src/language/parser.js.
	 *
	 * If no schema definition is provided, then it will look for types named Query
	 * and Mutation.
	 *
	 * Given that AST it constructs a GraphQLSchema. The resulting schema
	 * has no resolve methods, so execution will use default resolvers.
	 *
	 * Accepts options as a second argument:
	 *
	 *    - commentDescriptions:
	 *        Provide true to use preceding comments as the description.
	 *
	 */
	function buildASTSchema(ast, options) {
	  if (!ast || ast.kind !== Kind.DOCUMENT) {
	    throw new Error('Must provide a document ast.');
	  }

	  var schemaDef = void 0;

	  var typeDefs = [];
	  var nodeMap = Object.create(null);
	  var directiveDefs = [];
	  for (var i = 0; i < ast.definitions.length; i++) {
	    var d = ast.definitions[i];
	    switch (d.kind) {
	      case Kind.SCHEMA_DEFINITION:
	        if (schemaDef) {
	          throw new Error('Must provide only one schema definition.');
	        }
	        schemaDef = d;
	        break;
	      case Kind.SCALAR_TYPE_DEFINITION:
	      case Kind.OBJECT_TYPE_DEFINITION:
	      case Kind.INTERFACE_TYPE_DEFINITION:
	      case Kind.ENUM_TYPE_DEFINITION:
	      case Kind.UNION_TYPE_DEFINITION:
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        var _typeName = d.name.value;
	        if (nodeMap[_typeName]) {
	          throw new Error('Type "' + _typeName + '" was defined more than once.');
	        }
	        typeDefs.push(d);
	        nodeMap[_typeName] = d;
	        break;
	      case Kind.DIRECTIVE_DEFINITION:
	        directiveDefs.push(d);
	        break;
	    }
	  }

	  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
	    query: nodeMap.Query ? 'Query' : null,
	    mutation: nodeMap.Mutation ? 'Mutation' : null,
	    subscription: nodeMap.Subscription ? 'Subscription' : null
	  };

	  var definitionBuilder = new ASTDefinitionBuilder(nodeMap, options, function (typeName) {
	    throw new Error('Type "' + typeName + '" not found in document.');
	  });

	  var types = typeDefs.map(function (def) {
	    return definitionBuilder.buildType(def.name.value);
	  });

	  var directives = directiveDefs.map(function (def) {
	    return definitionBuilder.buildDirective(def);
	  });

	  // If specified directives were not explicitly declared, add them.
	  if (!directives.some(function (directive) {
	    return directive.name === 'skip';
	  })) {
	    directives.push(GraphQLSkipDirective);
	  }

	  if (!directives.some(function (directive) {
	    return directive.name === 'include';
	  })) {
	    directives.push(GraphQLIncludeDirective);
	  }

	  if (!directives.some(function (directive) {
	    return directive.name === 'deprecated';
	  })) {
	    directives.push(GraphQLDeprecatedDirective);
	  }

	  // Note: While this could make early assertions to get the correctly
	  // typed values below, that would throw immediately while type system
	  // validation with validateSchema() will produce more actionable results.
	  return new GraphQLSchema({
	    query: operationTypes.query ? definitionBuilder.buildType(operationTypes.query) : null,
	    mutation: operationTypes.mutation ? definitionBuilder.buildType(operationTypes.mutation) : null,
	    subscription: operationTypes.subscription ? definitionBuilder.buildType(operationTypes.subscription) : null,
	    types: types,
	    directives: directives,
	    astNode: schemaDef,
	    assumeValid: options && options.assumeValid
	  });

	  function getOperationTypes(schema) {
	    var opTypes = {};
	    schema.operationTypes.forEach(function (operationType) {
	      var typeName = operationType.type.name.value;
	      var operation = operationType.operation;
	      if (opTypes[operation]) {
	        throw new Error('Must provide only one ' + operation + ' type in schema.');
	      }
	      if (!nodeMap[typeName]) {
	        throw new Error('Specified ' + operation + ' type "' + typeName + '" not found in document.');
	      }
	      opTypes[operation] = typeName;
	    });
	    return opTypes;
	  }
	}

	var ASTDefinitionBuilder = function () {
	  function ASTDefinitionBuilder(typeDefinitionsMap, options, resolveType) {
	    _classCallCheck$8(this, ASTDefinitionBuilder);

	    this._typeDefinitionsMap = typeDefinitionsMap;
	    this._options = options;
	    this._resolveType = resolveType;
	    // Initialize to the GraphQL built in scalars and introspection types.
	    this._cache = keyMap(specifiedScalarTypes.concat(introspectionTypes), function (type) {
	      return type.name;
	    });
	  }

	  ASTDefinitionBuilder.prototype._buildType = function _buildType(typeName, typeNode) {
	    if (!this._cache[typeName]) {
	      var defNode = this._typeDefinitionsMap[typeName];
	      if (defNode) {
	        this._cache[typeName] = this._makeSchemaDef(defNode);
	      } else {
	        this._cache[typeName] = this._resolveType(typeName, typeNode);
	      }
	    }
	    return this._cache[typeName];
	  };

	  ASTDefinitionBuilder.prototype.buildType = function buildType(ref) {
	    if (typeof ref === 'string') {
	      return this._buildType(ref);
	    }
	    return this._buildType(ref.name.value, ref);
	  };

	  ASTDefinitionBuilder.prototype._buildWrappedType = function _buildWrappedType(typeNode) {
	    var typeDef = this.buildType(getNamedTypeNode(typeNode));
	    return buildWrappedType(typeDef, typeNode);
	  };

	  ASTDefinitionBuilder.prototype.buildDirective = function buildDirective(directiveNode) {
	    return new GraphQLDirective({
	      name: directiveNode.name.value,
	      description: getDescription(directiveNode, this._options),
	      locations: directiveNode.locations.map(function (node) {
	        return node.value;
	      }),
	      args: directiveNode.arguments && this._makeInputValues(directiveNode.arguments),
	      astNode: directiveNode
	    });
	  };

	  ASTDefinitionBuilder.prototype.buildField = function buildField(field) {
	    return {
	      // Note: While this could make assertions to get the correctly typed
	      // value, that would throw immediately while type system validation
	      // with validateSchema() will produce more actionable results.
	      type: this._buildWrappedType(field.type),
	      description: getDescription(field, this._options),
	      args: field.arguments && this._makeInputValues(field.arguments),
	      deprecationReason: getDeprecationReason(field),
	      astNode: field
	    };
	  };

	  ASTDefinitionBuilder.prototype._makeSchemaDef = function _makeSchemaDef(def) {
	    switch (def.kind) {
	      case Kind.OBJECT_TYPE_DEFINITION:
	        return this._makeTypeDef(def);
	      case Kind.INTERFACE_TYPE_DEFINITION:
	        return this._makeInterfaceDef(def);
	      case Kind.ENUM_TYPE_DEFINITION:
	        return this._makeEnumDef(def);
	      case Kind.UNION_TYPE_DEFINITION:
	        return this._makeUnionDef(def);
	      case Kind.SCALAR_TYPE_DEFINITION:
	        return this._makeScalarDef(def);
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        return this._makeInputObjectDef(def);
	      default:
	        throw new Error('Type kind "' + def.kind + '" not supported.');
	    }
	  };

	  ASTDefinitionBuilder.prototype._makeTypeDef = function _makeTypeDef(def) {
	    var _this = this;

	    var typeName = def.name.value;
	    return new GraphQLObjectType({
	      name: typeName,
	      description: getDescription(def, this._options),
	      fields: function fields() {
	        return _this._makeFieldDefMap(def);
	      },
	      interfaces: function interfaces() {
	        return _this._makeImplementedInterfaces(def);
	      },
	      astNode: def
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeFieldDefMap = function _makeFieldDefMap(def) {
	    var _this2 = this;

	    return def.fields ? keyValMap(def.fields, function (field) {
	      return field.name.value;
	    }, function (field) {
	      return _this2.buildField(field);
	    }) : {};
	  };

	  ASTDefinitionBuilder.prototype._makeImplementedInterfaces = function _makeImplementedInterfaces(def) {
	    var _this3 = this;

	    return def.interfaces &&
	    // Note: While this could make early assertions to get the correctly
	    // typed values, that would throw immediately while type system
	    // validation with validateSchema() will produce more actionable results.
	    def.interfaces.map(function (iface) {
	      return _this3.buildType(iface);
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeInputValues = function _makeInputValues(values) {
	    var _this4 = this;

	    return keyValMap(values, function (value) {
	      return value.name.value;
	    }, function (value) {
	      // Note: While this could make assertions to get the correctly typed
	      // value, that would throw immediately while type system validation
	      var type = _this4._buildWrappedType(value.type);
	      return {
	        type: type,
	        description: getDescription(value, _this4._options),
	        defaultValue: valueFromAST(value.defaultValue, type),
	        astNode: value
	      };
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeInterfaceDef = function _makeInterfaceDef(def) {
	    var _this5 = this;

	    return new GraphQLInterfaceType({
	      name: def.name.value,
	      description: getDescription(def, this._options),
	      fields: function fields() {
	        return _this5._makeFieldDefMap(def);
	      },
	      astNode: def
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeEnumDef = function _makeEnumDef(def) {
	    var _this6 = this;

	    return new GraphQLEnumType({
	      name: def.name.value,
	      description: getDescription(def, this._options),
	      values: def.values ? keyValMap(def.values, function (enumValue) {
	        return enumValue.name.value;
	      }, function (enumValue) {
	        return {
	          description: getDescription(enumValue, _this6._options),
	          deprecationReason: getDeprecationReason(enumValue),
	          astNode: enumValue
	        };
	      }) : {},
	      astNode: def
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeUnionDef = function _makeUnionDef(def) {
	    var _this7 = this;

	    return new GraphQLUnionType({
	      name: def.name.value,
	      description: getDescription(def, this._options),
	      // Note: While this could make assertions to get the correctly typed
	      // values below, that would throw immediately while type system
	      // validation with validateSchema() will produce more actionable results.
	      types: def.types ? def.types.map(function (t) {
	        return _this7.buildType(t);
	      }) : [],
	      astNode: def
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeScalarDef = function _makeScalarDef(def) {
	    return new GraphQLScalarType({
	      name: def.name.value,
	      description: getDescription(def, this._options),
	      astNode: def,
	      serialize: function serialize(value) {
	        return value;
	      }
	    });
	  };

	  ASTDefinitionBuilder.prototype._makeInputObjectDef = function _makeInputObjectDef(def) {
	    var _this8 = this;

	    return new GraphQLInputObjectType({
	      name: def.name.value,
	      description: getDescription(def, this._options),
	      fields: function fields() {
	        return def.fields ? _this8._makeInputValues(def.fields) : {};
	      },
	      astNode: def
	    });
	  };

	  return ASTDefinitionBuilder;
	}();

	/**
	 * Given a field or enum value node, returns the string value for the
	 * deprecation reason.
	 */
	function getDeprecationReason(node) {
	  var deprecated = getDirectiveValues(GraphQLDeprecatedDirective, node);
	  return deprecated && deprecated.reason;
	}

	/**
	 * Given an ast node, returns its string description.
	 *
	 * Accepts options as a second argument:
	 *
	 *    - commentDescriptions:
	 *        Provide true to use preceding comments as the description.
	 *
	 */
	function getDescription(node, options) {
	  if (node.description) {
	    return node.description.value;
	  }
	  if (options && options.commentDescriptions) {
	    var rawValue = getLeadingCommentBlock(node);
	    if (rawValue !== undefined) {
	      return blockStringValue('\n' + rawValue);
	    }
	  }
	}

	function getLeadingCommentBlock(node) {
	  var loc = node.loc;
	  if (!loc) {
	    return;
	  }
	  var comments = [];
	  var token = loc.startToken.prev;
	  while (token && token.kind === TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
	    var value = String(token.value);
	    comments.push(value);
	    token = token.prev;
	  }
	  return comments.reverse().join('\n');
	}

	/**
	 * A helper function to build a GraphQLSchema directly from a source
	 * document.
	 */
	function buildSchema(source) {
	  return buildASTSchema(parse(source));
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Produces a new schema given an existing schema and a document which may
	 * contain GraphQL type extensions and definitions. The original schema will
	 * remain unaltered.
	 *
	 * Because a schema represents a graph of references, a schema cannot be
	 * extended without effectively making an entire copy. We do not know until it's
	 * too late if subgraphs remain unchanged.
	 *
	 * This algorithm copies the provided schema, applying extensions while
	 * producing the copy. The original schema remains unaltered.
	 *
	 * Accepts options as a third argument:
	 *
	 *    - commentDescriptions:
	 *        Provide true to use preceding comments as the description.
	 *
	 */
	function extendSchema(schema, documentAST, options) {
	  !isSchema(schema) ? invariant(0, 'Must provide valid GraphQLSchema') : void 0;

	  !(documentAST && documentAST.kind === Kind.DOCUMENT) ? invariant(0, 'Must provide valid Document AST') : void 0;

	  // Collect the type definitions and extensions found in the document.
	  var typeDefinitionMap = Object.create(null);
	  var typeExtensionsMap = Object.create(null);

	  // New directives and types are separate because a directives and types can
	  // have the same name. For example, a type named "skip".
	  var directiveDefinitions = [];

	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var def = documentAST.definitions[i];
	    switch (def.kind) {
	      case Kind.OBJECT_TYPE_DEFINITION:
	      case Kind.INTERFACE_TYPE_DEFINITION:
	      case Kind.ENUM_TYPE_DEFINITION:
	      case Kind.UNION_TYPE_DEFINITION:
	      case Kind.SCALAR_TYPE_DEFINITION:
	      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
	        // Sanity check that none of the defined types conflict with the
	        // schema's existing types.
	        var typeName = def.name.value;
	        if (schema.getType(typeName)) {
	          throw new GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
	        }
	        typeDefinitionMap[typeName] = def;
	        break;
	      case Kind.OBJECT_TYPE_EXTENSION:
	        // Sanity check that this type extension exists within the
	        // schema's existing types.
	        var extendedTypeName = def.name.value;
	        var existingType = schema.getType(extendedTypeName);
	        if (!existingType) {
	          throw new GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def]);
	        }
	        if (!isObjectType(existingType)) {
	          throw new GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def]);
	        }
	        var extensions = typeExtensionsMap[extendedTypeName];
	        if (extensions) {
	          extensions.push(def);
	        } else {
	          extensions = [def];
	        }
	        typeExtensionsMap[extendedTypeName] = extensions;
	        break;
	      case Kind.DIRECTIVE_DEFINITION:
	        var directiveName = def.name.value;
	        var existingDirective = schema.getDirective(directiveName);
	        if (existingDirective) {
	          throw new GraphQLError('Directive "' + directiveName + '" already exists in the schema. It ' + 'cannot be redefined.', [def]);
	        }
	        directiveDefinitions.push(def);
	        break;
	      case Kind.SCALAR_TYPE_EXTENSION:
	      case Kind.INTERFACE_TYPE_EXTENSION:
	      case Kind.UNION_TYPE_EXTENSION:
	      case Kind.ENUM_TYPE_EXTENSION:
	      case Kind.INPUT_OBJECT_TYPE_EXTENSION:
	        throw new Error('The ' + def.kind + ' kind is not yet supported by extendSchema().');
	    }
	  }

	  // If this document contains no new types, extensions, or directives then
	  // return the same unmodified GraphQLSchema instance.
	  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0) {
	    return schema;
	  }

	  var definitionBuilder = new ASTDefinitionBuilder(typeDefinitionMap, options, function (typeName, node) {
	    var existingType = schema.getType(typeName);
	    if (existingType) {
	      return extendType(existingType);
	    }

	    if (node) {
	      throw new GraphQLError('Unknown type: "' + typeName + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [node]);
	    }
	    throw GraphQLError('Missing type from schema');
	  });

	  // Get the root Query, Mutation, and Subscription object types.
	  // Note: While this could make early assertions to get the correctly
	  // typed values below, that would throw immediately while type system
	  // validation with validateSchema() will produce more actionable results.
	  var existingQueryType = schema.getQueryType();
	  var queryType = existingQueryType ? definitionBuilder.buildType(existingQueryType.name) : null;

	  var existingMutationType = schema.getMutationType();
	  var mutationType = existingMutationType ? definitionBuilder.buildType(existingMutationType.name) : null;

	  var existingSubscriptionType = schema.getSubscriptionType();
	  var subscriptionType = existingSubscriptionType ? definitionBuilder.buildType(existingSubscriptionType.name) : null;

	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  var typeMap = schema.getTypeMap();
	  var types = Object.keys(typeMap).map(function (typeName) {
	    return definitionBuilder.buildType(typeName);
	  });

	  // Do the same with new types, appending to the list of defined types.
	  Object.keys(typeDefinitionMap).forEach(function (typeName) {
	    types.push(definitionBuilder.buildType(typeName));
	  });

	  // Then produce and return a Schema with these types.
	  return new GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    types: types,
	    directives: getMergedDirectives(),
	    astNode: schema.astNode,
	    allowedLegacyNames: schema.__allowedLegacyNames && schema.__allowedLegacyNames.slice()
	  });

	  // Below are functions used for producing this schema that have closed over
	  // this scope and have access to the schema, cache, and newly defined types.

	  function getMergedDirectives() {
	    var existingDirectives = schema.getDirectives();
	    !existingDirectives ? invariant(0, 'schema must have default directives') : void 0;

	    var newDirectives = directiveDefinitions.map(function (directiveNode) {
	      return definitionBuilder.buildDirective(directiveNode);
	    });
	    return existingDirectives.concat(newDirectives);
	  }

	  function getTypeFromDef(typeDef) {
	    var type = definitionBuilder.buildType(typeDef.name);
	    return type;
	  }

	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function extendType(type) {
	    if (isObjectType(type)) {
	      return extendObjectType(type);
	    }
	    if (isInterfaceType(type)) {
	      return extendInterfaceType(type);
	    }
	    if (isUnionType(type)) {
	      return extendUnionType(type);
	    }
	    return type;
	  }

	  function extendObjectType(type) {
	    var name = type.name;
	    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
	    return new GraphQLObjectType({
	      name: name,
	      description: type.description,
	      interfaces: function interfaces() {
	        return extendImplementedInterfaces(type);
	      },
	      fields: function fields() {
	        return extendFieldMap(type);
	      },
	      astNode: type.astNode,
	      extensionASTNodes: extensionASTNodes,
	      isTypeOf: type.isTypeOf
	    });
	  }

	  function extendInterfaceType(type) {
	    return new GraphQLInterfaceType({
	      name: type.name,
	      description: type.description,
	      fields: function fields() {
	        return extendFieldMap(type);
	      },
	      astNode: type.astNode,
	      resolveType: type.resolveType
	    });
	  }

	  function extendUnionType(type) {
	    return new GraphQLUnionType({
	      name: type.name,
	      description: type.description,
	      types: type.getTypes().map(getTypeFromDef),
	      astNode: type.astNode,
	      resolveType: type.resolveType
	    });
	  }

	  function extendImplementedInterfaces(type) {
	    var interfaces = type.getInterfaces().map(getTypeFromDef);

	    // If there are any extensions to the interfaces, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.interfaces.forEach(function (namedType) {
	          // Note: While this could make early assertions to get the correctly
	          // typed values, that would throw immediately while type system
	          // validation with validateSchema() will produce more actionable results.
	          interfaces.push(definitionBuilder.buildType(namedType));
	        });
	      });
	    }

	    return interfaces;
	  }

	  function extendFieldMap(type) {
	    var newFieldMap = Object.create(null);
	    var oldFieldMap = type.getFields();
	    Object.keys(oldFieldMap).forEach(function (fieldName) {
	      var field = oldFieldMap[fieldName];
	      newFieldMap[fieldName] = {
	        description: field.description,
	        deprecationReason: field.deprecationReason,
	        type: extendFieldType(field.type),
	        args: keyMap(field.args, function (arg) {
	          return arg.name;
	        }),
	        astNode: field.astNode,
	        resolve: field.resolve
	      };
	    });

	    // If there are any extensions to the fields, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.fields.forEach(function (field) {
	          var fieldName = field.name.value;
	          if (oldFieldMap[fieldName]) {
	            throw new GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
	          }
	          newFieldMap[fieldName] = definitionBuilder.buildField(field);
	        });
	      });
	    }

	    return newFieldMap;
	  }

	  function extendFieldType(typeDef) {
	    if (isListType(typeDef)) {
	      return GraphQLList(extendFieldType(typeDef.ofType));
	    }
	    if (isNonNullType(typeDef)) {
	      return GraphQLNonNull(extendFieldType(typeDef.ofType));
	    }
	    return getTypeFromDef(typeDef);
	  }
	}

	var _extends$2 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	/**
	 * Sort GraphQLSchema.
	 */
	function lexicographicSortSchema(schema) {
	  var cache = Object.create(null);

	  var sortMaybeType = function sortMaybeType(maybeType) {
	    return maybeType && sortNamedType(maybeType);
	  };
	  return new GraphQLSchema({
	    types: sortByName(objectValues(schema.getTypeMap()).map(sortNamedType)),
	    directives: sortByName(schema.getDirectives()).map(sortDirective),
	    query: sortMaybeType(schema.getQueryType()),
	    mutation: sortMaybeType(schema.getMutationType()),
	    subscription: sortMaybeType(schema.getSubscriptionType()),
	    astNode: schema.astNode
	  });

	  function sortDirective(directive) {
	    return new GraphQLDirective({
	      name: directive.name,
	      description: directive.description,
	      locations: sortBy(directive.locations, function (x) {
	        return x;
	      }),
	      args: sortArgs(directive.args),
	      astNode: directive.astNode
	    });
	  }

	  function sortArgs(args) {
	    return keyValMap(sortByName(args), function (arg) {
	      return arg.name;
	    }, function (arg) {
	      return _extends$2({}, arg, {
	        type: sortType(arg.type)
	      });
	    });
	  }

	  function sortFields(fieldsMap) {
	    return function () {
	      return sortObjMap(fieldsMap, function (field) {
	        return {
	          type: sortType(field.type),
	          args: sortArgs(field.args),
	          resolve: field.resolve,
	          subscribe: field.subscribe,
	          deprecationReason: field.deprecationReason,
	          description: field.description,
	          astNode: field.astNode
	        };
	      });
	    };
	  }

	  function sortInputFields(fieldsMap) {
	    return function () {
	      return sortObjMap(fieldsMap, function (field) {
	        return {
	          type: sortType(field.type),
	          defaultValue: field.defaultValue,
	          description: field.description,
	          astNode: field.astNode
	        };
	      });
	    };
	  }

	  function sortType(type) {
	    if (isListType(type)) {
	      return new GraphQLList(sortType(type.ofType));
	    } else if (isNonNullType(type)) {
	      return new GraphQLNonNull(sortType(type.ofType));
	    }
	    return sortNamedType(type);
	  }

	  function sortTypes(arr) {
	    return function () {
	      return sortByName(arr).map(sortNamedType);
	    };
	  }

	  function sortNamedType(type) {
	    if (isSpecifiedScalarType(type) || isIntrospectionType(type)) {
	      return type;
	    }

	    var sortedType = cache[type.name];
	    if (!sortedType) {
	      sortedType = sortNamedTypeImpl(type);
	      cache[type.name] = sortedType;
	    }
	    return sortedType;
	  }

	  function sortNamedTypeImpl(type) {
	    if (isScalarType(type)) {
	      return type;
	    } else if (isObjectType(type)) {
	      return new GraphQLObjectType({
	        name: type.name,
	        interfaces: sortTypes(type.getInterfaces()),
	        fields: sortFields(type.getFields()),
	        isTypeOf: type.isTypeOf,
	        description: type.description,
	        astNode: type.astNode,
	        extensionASTNodes: type.extensionASTNodes
	      });
	    } else if (isInterfaceType(type)) {
	      return new GraphQLInterfaceType({
	        name: type.name,
	        fields: sortFields(type.getFields()),
	        resolveType: type.resolveType,
	        description: type.description,
	        astNode: type.astNode,
	        extensionASTNodes: type.extensionASTNodes
	      });
	    } else if (isUnionType(type)) {
	      return new GraphQLUnionType({
	        name: type.name,
	        types: sortTypes(type.getTypes()),
	        resolveType: type.resolveType,
	        description: type.description,
	        astNode: type.astNode
	      });
	    } else if (isEnumType(type)) {
	      return new GraphQLEnumType({
	        name: type.name,
	        values: keyValMap(sortByName(type.getValues()), function (val) {
	          return val.name;
	        }, function (val) {
	          return {
	            value: val.value,
	            deprecationReason: val.deprecationReason,
	            description: val.description,
	            astNode: val.astNode
	          };
	        }),
	        description: type.description,
	        astNode: type.astNode
	      });
	    } else if (isInputObjectType(type)) {
	      return new GraphQLInputObjectType({
	        name: type.name,
	        fields: sortInputFields(type.getFields()),
	        description: type.description,
	        astNode: type.astNode
	      });
	    }
	    throw new Error('Unknown type: "' + type + '"');
	  }
	}

	function sortObjMap(map, sortValueFn) {
	  var sortedMap = Object.create(null);
	  var sortedKeys = sortBy(Object.keys(map), function (x) {
	    return x;
	  });
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      var value = map[key];
	      sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return sortedMap;
	}

	function sortByName(array) {
	  return sortBy(array, function (obj) {
	    return obj.name;
	  });
	}

	function sortBy(array, mapToKey) {
	  return array.slice().sort(function (obj1, obj2) {
	    var key1 = mapToKey(obj1);
	    var key2 = mapToKey(obj2);
	    return key1.localeCompare(key2);
	  });
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Accepts options as a second argument:
	 *
	 *    - commentDescriptions:
	 *        Provide true to use preceding comments as the description.
	 *
	 */
	function printSchema(schema, options) {
	  return printFilteredSchema(schema, function (n) {
	    return !isSpecifiedDirective(n);
	  }, isDefinedType, options);
	}

	function printIntrospectionSchema(schema, options) {
	  return printFilteredSchema(schema, isSpecifiedDirective, isIntrospectionType, options);
	}

	function isDefinedType(type) {
	  return !isSpecifiedScalarType(type) && !isIntrospectionType(type);
	}

	function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
	  var directives = schema.getDirectives().filter(directiveFilter);
	  var typeMap = schema.getTypeMap();
	  var types = objectValues(typeMap).sort(function (type1, type2) {
	    return type1.name.localeCompare(type2.name);
	  }).filter(typeFilter);

	  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
	    return printDirective(directive, options);
	  }), types.map(function (type) {
	    return printType(type, options);
	  })).filter(Boolean).join('\n\n') + '\n';
	}

	function printSchemaDefinition(schema) {
	  if (isSchemaOfCommonNames(schema)) {
	    return;
	  }

	  var operationTypes = [];

	  var queryType = schema.getQueryType();
	  if (queryType) {
	    operationTypes.push('  query: ' + queryType.name);
	  }

	  var mutationType = schema.getMutationType();
	  if (mutationType) {
	    operationTypes.push('  mutation: ' + mutationType.name);
	  }

	  var subscriptionType = schema.getSubscriptionType();
	  if (subscriptionType) {
	    operationTypes.push('  subscription: ' + subscriptionType.name);
	  }

	  return 'schema {\n' + operationTypes.join('\n') + '\n}';
	}

	/**
	 * GraphQL schema define root types for each type of operation. These types are
	 * the same as any other type and can be named in any manner, however there is
	 * a common naming convention:
	 *
	 *   schema {
	 *     query: Query
	 *     mutation: Mutation
	 *   }
	 *
	 * When using this naming convention, the schema description can be omitted.
	 */
	function isSchemaOfCommonNames(schema) {
	  var queryType = schema.getQueryType();
	  if (queryType && queryType.name !== 'Query') {
	    return false;
	  }

	  var mutationType = schema.getMutationType();
	  if (mutationType && mutationType.name !== 'Mutation') {
	    return false;
	  }

	  var subscriptionType = schema.getSubscriptionType();
	  if (subscriptionType && subscriptionType.name !== 'Subscription') {
	    return false;
	  }

	  return true;
	}

	function printType(type, options) {
	  if (isScalarType(type)) {
	    return printScalar(type, options);
	  } else if (isObjectType(type)) {
	    return printObject(type, options);
	  } else if (isInterfaceType(type)) {
	    return printInterface(type, options);
	  } else if (isUnionType(type)) {
	    return printUnion(type, options);
	  } else if (isEnumType(type)) {
	    return printEnum(type, options);
	  } else if (isInputObjectType(type)) {
	    return printInputObject(type, options);
	  }
	  /* istanbul ignore next */
	  throw new Error('Unknown type: ' + type + '.');
	}

	function printScalar(type, options) {
	  return printDescription(options, type) + ('scalar ' + type.name);
	}

	function printObject(type, options) {
	  var interfaces = type.getInterfaces();
	  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
	    return i.name;
	  }).join(' & ') : '';
	  return printDescription(options, type) + ('type ' + type.name + implementedInterfaces + ' {\n') + printFields(options, type) + '\n' + '}';
	}

	function printInterface(type, options) {
	  return printDescription(options, type) + ('interface ' + type.name + ' {\n') + printFields(options, type) + '\n' + '}';
	}

	function printUnion(type, options) {
	  return printDescription(options, type) + ('union ' + type.name + ' = ' + type.getTypes().join(' | '));
	}

	function printEnum(type, options) {
	  return printDescription(options, type) + ('enum ' + type.name + ' {\n') + printEnumValues(type.getValues(), options) + '\n' + '}';
	}

	function printEnumValues(values, options) {
	  return values.map(function (value, i) {
	    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
	  }).join('\n');
	}

	function printInputObject(type, options) {
	  var fields = objectValues(type.getFields());
	  return printDescription(options, type) + ('input ' + type.name + ' {\n') + fields.map(function (f, i) {
	    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
	  }).join('\n') + '\n' + '}';
	}

	function printFields(options, type) {
	  var fields = objectValues(type.getFields());
	  return fields.map(function (f, i) {
	    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
	  }).join('\n');
	}

	function printArgs(options, args) {
	  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	  if (args.length === 0) {
	    return '';
	  }

	  // If every arg does not have a description, print them on one line.
	  if (args.every(function (arg) {
	    return !arg.description;
	  })) {
	    return '(' + args.map(printInputValue).join(', ') + ')';
	  }

	  return '(\n' + args.map(function (arg, i) {
	    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
	  }).join('\n') + '\n' + indentation + ')';
	}

	function printInputValue(arg) {
	  var argDecl = arg.name + ': ' + String(arg.type);
	  if (!isInvalid(arg.defaultValue)) {
	    argDecl += ' = ' + print(astFromValue(arg.defaultValue, arg.type));
	  }
	  return argDecl;
	}

	function printDirective(directive, options) {
	  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + ' on ' + directive.locations.join(' | ');
	}

	function printDeprecated(fieldOrEnumVal) {
	  if (!fieldOrEnumVal.isDeprecated) {
	    return '';
	  }
	  var reason = fieldOrEnumVal.deprecationReason;
	  if (isNullish(reason) || reason === '' || reason === DEFAULT_DEPRECATION_REASON) {
	    return ' @deprecated';
	  }
	  return ' @deprecated(reason: ' + print(astFromValue(reason, GraphQLString)) + ')';
	}

	function printDescription(options, def) {
	  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

	  if (!def.description) {
	    return '';
	  }

	  var lines = descriptionLines(def.description, 120 - indentation.length);
	  if (options && options.commentDescriptions) {
	    return printDescriptionWithComments(lines, indentation, firstInBlock);
	  }

	  var description = indentation && !firstInBlock ? '\n' + indentation + '"""' : indentation + '"""';

	  // In some circumstances, a single line can be used for the description.
	  if (lines.length === 1 && lines[0].length < 70 && lines[0][lines[0].length - 1] !== '"') {
	    return description + escapeQuote(lines[0]) + '"""\n';
	  }

	  // Format a multi-line block quote to account for leading space.
	  var hasLeadingSpace = lines[0][0] === ' ' || lines[0][0] === '\t';
	  if (!hasLeadingSpace) {
	    description += '\n';
	  }
	  for (var i = 0; i < lines.length; i++) {
	    if (i !== 0 || !hasLeadingSpace) {
	      description += indentation;
	    }
	    description += escapeQuote(lines[i]) + '\n';
	  }
	  description += indentation + '"""\n';
	  return description;
	}

	function escapeQuote(line) {
	  return line.replace(/"""/g, '\\"""');
	}

	function printDescriptionWithComments(lines, indentation, firstInBlock) {
	  var description = indentation && !firstInBlock ? '\n' : '';
	  for (var i = 0; i < lines.length; i++) {
	    if (lines[i] === '') {
	      description += indentation + '#\n';
	    } else {
	      description += indentation + '# ' + lines[i] + '\n';
	    }
	  }
	  return description;
	}

	function descriptionLines(description, maxLen) {
	  var lines = [];
	  var rawLines = description.split('\n');
	  for (var i = 0; i < rawLines.length; i++) {
	    if (rawLines[i] === '') {
	      lines.push(rawLines[i]);
	    } else {
	      // For > 120 character long lines, cut at space boundaries into sublines
	      // of ~80 chars.
	      var sublines = breakLine(rawLines[i], maxLen);
	      for (var j = 0; j < sublines.length; j++) {
	        lines.push(sublines[j]);
	      }
	    }
	  }
	  return lines;
	}

	function breakLine(line, maxLen) {
	  if (line.length < maxLen + 5) {
	    return [line];
	  }
	  var parts = line.split(new RegExp('((?: |^).{15,' + (maxLen - 40) + '}(?= |$))'));
	  if (parts.length < 4) {
	    return [line];
	  }
	  var sublines = [parts[0] + parts[1] + parts[2]];
	  for (var i = 3; i < parts.length; i += 2) {
	    sublines.push(parts[i].slice(1) + parts[i + 1]);
	  }
	  return sublines;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Deprecated. Use coerceValue() directly for richer information.
	 */
	function isValidJSValue(value, type) {
	  var errors = coerceValue(value, type).errors;
	  return errors ? errors.map(function (error) {
	    return error.message;
	  }) : [];
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * Utility which determines if a value literal node is valid for an input type.
	 *
	 * Deprecated. Rely on validation for documents containing literal values.
	 */
	function isValidLiteralValue(type, valueNode) {
	  var emptySchema = new GraphQLSchema({});
	  var emptyDoc = { kind: Kind.DOCUMENT, definitions: [] };
	  var typeInfo = new TypeInfo(emptySchema, undefined, type);
	  var context = new ValidationContext(emptySchema, emptyDoc, typeInfo);
	  var visitor = ValuesOfCorrectType(context);
	  visit(valueNode, visitWithTypeInfo(typeInfo, visitor));
	  return context.getErrors();
	}

	/**
	 * Provided a collection of ASTs, presumably each from different files,
	 * concatenate the ASTs together into batched AST, useful for validating many
	 * GraphQL source files which together represent one conceptual application.
	 */
	function concatAST(asts) {
	  var batchDefinitions = [];
	  for (var i = 0; i < asts.length; i++) {
	    var definitions = asts[i].definitions;
	    for (var j = 0; j < definitions.length; j++) {
	      batchDefinitions.push(definitions[j]);
	    }
	  }
	  return {
	    kind: 'Document',
	    definitions: batchDefinitions
	  };
	} /**
	   * Copyright (c) 2015-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   *
	   * 
	   */

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * separateOperations accepts a single AST document which may contain many
	 * operations and fragments and returns a collection of AST documents each of
	 * which contains a single operation as well the fragment definitions it
	 * refers to.
	 */
	function separateOperations(documentAST) {
	  var operations = [];
	  var fragments = Object.create(null);
	  var positions = new Map();
	  var depGraph = Object.create(null);
	  var fromName = void 0;
	  var idx = 0;

	  // Populate metadata and build a dependency graph.
	  visit(documentAST, {
	    OperationDefinition: function OperationDefinition(node) {
	      fromName = opName(node);
	      operations.push(node);
	      positions.set(node, idx++);
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      fromName = node.name.value;
	      fragments[fromName] = node;
	      positions.set(node, idx++);
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var toName = node.name.value;
	      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
	    }
	  });

	  // For each operation, produce a new synthesized AST which includes only what
	  // is necessary for completing that operation.
	  var separatedDocumentASTs = Object.create(null);
	  operations.forEach(function (operation) {
	    var operationName = opName(operation);
	    var dependencies = Object.create(null);
	    collectTransitiveDependencies(dependencies, depGraph, operationName);

	    // The list of definition nodes to be included for this operation, sorted
	    // to retain the same order as the original document.
	    var definitions = [operation];
	    Object.keys(dependencies).forEach(function (name) {
	      definitions.push(fragments[name]);
	    });
	    definitions.sort(function (n1, n2) {
	      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
	    });

	    separatedDocumentASTs[operationName] = {
	      kind: 'Document',
	      definitions: definitions
	    };
	  });

	  return separatedDocumentASTs;
	}

	// Provides the empty string for anonymous operations.
	function opName(operation) {
	  return operation.name ? operation.name.value : '';
	}

	// From a dependency graph, collects a list of transitive dependencies by
	// recursing through a dependency graph.
	function collectTransitiveDependencies(collected, depGraph, fromName) {
	  var immediateDeps = depGraph[fromName];
	  if (immediateDeps) {
	    Object.keys(immediateDeps).forEach(function (toName) {
	      if (!collected[toName]) {
	        collected[toName] = true;
	        collectTransitiveDependencies(collected, depGraph, toName);
	      }
	    });
	  }
	}

	/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var BreakingChangeType = {
	  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
	  FIELD_REMOVED: 'FIELD_REMOVED',
	  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
	  TYPE_REMOVED: 'TYPE_REMOVED',
	  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
	  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
	  ARG_REMOVED: 'ARG_REMOVED',
	  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
	  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
	  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
	  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
	  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
	  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
	  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED',
	  NON_NULL_DIRECTIVE_ARG_ADDED: 'NON_NULL_DIRECTIVE_ARG_ADDED'
	};

	var DangerousChangeType = {
	  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
	  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
	  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
	  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
	  NULLABLE_INPUT_FIELD_ADDED: 'NULLABLE_INPUT_FIELD_ADDED',
	  NULLABLE_ARG_ADDED: 'NULLABLE_ARG_ADDED'
	};

	/**
	 * Given two schemas, returns an Array containing descriptions of all the types
	 * of breaking changes covered by the other functions down below.
	 */
	function findBreakingChanges(oldSchema, newSchema) {
	  return [].concat(findRemovedTypes(oldSchema, newSchema), findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).breakingChanges, findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema), findRemovedDirectives(oldSchema, newSchema), findRemovedDirectiveArgs(oldSchema, newSchema), findAddedNonNullDirectiveArgs(oldSchema, newSchema), findRemovedDirectiveLocations(oldSchema, newSchema));
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of all the types
	 * of potentially dangerous changes covered by the other functions down below.
	 */
	function findDangerousChanges(oldSchema, newSchema) {
	  return [].concat(findArgChanges(oldSchema, newSchema).dangerousChanges, findValuesAddedToEnums(oldSchema, newSchema), findInterfacesAddedToObjectTypes(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).dangerousChanges);
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing an entire type.
	 */
	function findRemovedTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var breakingChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    if (!newTypeMap[typeName]) {
	      breakingChanges.push({
	        type: BreakingChangeType.TYPE_REMOVED,
	        description: typeName + ' was removed.'
	      });
	    }
	  });
	  return breakingChanges;
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to changing the type of a type.
	 */
	function findTypesThatChangedKind(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var breakingChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    if (!newTypeMap[typeName]) {
	      return;
	    }
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (oldType.constructor !== newType.constructor) {
	      breakingChanges.push({
	        type: BreakingChangeType.TYPE_CHANGED_KIND,
	        description: typeName + ' changed from ' + (typeKindName(oldType) + ' to ' + typeKindName(newType) + '.')
	      });
	    }
	  });
	  return breakingChanges;
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any
	 * breaking or dangerous changes in the newSchema related to arguments
	 * (such as removal or change of type of an argument, or a change in an
	 * argument's default value).
	 */
	function findArgChanges(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var breakingChanges = [];
	  var dangerousChanges = [];

	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(isObjectType(oldType) || isInterfaceType(oldType)) || !(isObjectType(newType) || isInterfaceType(newType)) || newType.constructor !== oldType.constructor) {
	      return;
	    }

	    var oldTypeFields = oldType.getFields();
	    var newTypeFields = newType.getFields();

	    Object.keys(oldTypeFields).forEach(function (fieldName) {
	      if (!newTypeFields[fieldName]) {
	        return;
	      }

	      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
	        var newArgs = newTypeFields[fieldName].args;
	        var newArgDef = newArgs.find(function (arg) {
	          return arg.name === oldArgDef.name;
	        });

	        // Arg not present
	        if (!newArgDef) {
	          breakingChanges.push({
	            type: BreakingChangeType.ARG_REMOVED,
	            description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' was removed')
	          });
	        } else {
	          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);
	          if (!isSafe) {
	            breakingChanges.push({
	              type: BreakingChangeType.ARG_CHANGED_KIND,
	              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed type from ') + (oldArgDef.type.toString() + ' to ' + newArgDef.type.toString())
	            });
	          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
	            dangerousChanges.push({
	              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
	              description: oldType.name + '.' + fieldName + ' arg ' + (oldArgDef.name + ' has changed defaultValue')
	            });
	          }
	        }
	      });
	      // Check if a non-null arg was added to the field
	      newTypeFields[fieldName].args.forEach(function (newArgDef) {
	        var oldArgs = oldTypeFields[fieldName].args;
	        var oldArgDef = oldArgs.find(function (arg) {
	          return arg.name === newArgDef.name;
	        });
	        if (!oldArgDef) {
	          if (isNonNullType(newArgDef.type)) {
	            breakingChanges.push({
	              type: BreakingChangeType.NON_NULL_ARG_ADDED,
	              description: 'A non-null arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
	            });
	          } else {
	            dangerousChanges.push({
	              type: DangerousChangeType.NULLABLE_ARG_ADDED,
	              description: 'A nullable arg ' + newArgDef.name + ' on ' + (newType.name + '.' + fieldName + ' was added')
	            });
	          }
	        }
	      });
	    });
	  });

	  return {
	    breakingChanges: breakingChanges,
	    dangerousChanges: dangerousChanges
	  };
	}

	function typeKindName(type) {
	  if (isScalarType(type)) {
	    return 'a Scalar type';
	  }
	  if (isObjectType(type)) {
	    return 'an Object type';
	  }
	  if (isInterfaceType(type)) {
	    return 'an Interface type';
	  }
	  if (isUnionType(type)) {
	    return 'a Union type';
	  }
	  if (isEnumType(type)) {
	    return 'an Enum type';
	  }
	  if (isInputObjectType(type)) {
	    return 'an Input type';
	  }
	  throw new TypeError('Unknown type ' + type.constructor.name);
	}

	function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var breakingChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!(isObjectType(oldType) || isInterfaceType(oldType)) || !(isObjectType(newType) || isInterfaceType(newType)) || newType.constructor !== oldType.constructor) {
	      return;
	    }

	    var oldTypeFieldsDef = oldType.getFields();
	    var newTypeFieldsDef = newType.getFields();
	    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
	      // Check if the field is missing on the type in the new schema.
	      if (!(fieldName in newTypeFieldsDef)) {
	        breakingChanges.push({
	          type: BreakingChangeType.FIELD_REMOVED,
	          description: typeName + '.' + fieldName + ' was removed.'
	        });
	      } else {
	        var oldFieldType = oldTypeFieldsDef[fieldName].type;
	        var newFieldType = newTypeFieldsDef[fieldName].type;
	        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);
	        if (!isSafe) {
	          var oldFieldTypeString = isNamedType(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
	          var newFieldTypeString = isNamedType(newFieldType) ? newFieldType.name : newFieldType.toString();
	          breakingChanges.push({
	            type: BreakingChangeType.FIELD_CHANGED_KIND,
	            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
	          });
	        }
	      }
	    });
	  });
	  return breakingChanges;
	}

	function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var breakingChanges = [];
	  var dangerousChanges = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isInputObjectType(oldType) || !isInputObjectType(newType)) {
	      return;
	    }

	    var oldTypeFieldsDef = oldType.getFields();
	    var newTypeFieldsDef = newType.getFields();
	    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
	      // Check if the field is missing on the type in the new schema.
	      if (!(fieldName in newTypeFieldsDef)) {
	        breakingChanges.push({
	          type: BreakingChangeType.FIELD_REMOVED,
	          description: typeName + '.' + fieldName + ' was removed.'
	        });
	      } else {
	        var oldFieldType = oldTypeFieldsDef[fieldName].type;
	        var newFieldType = newTypeFieldsDef[fieldName].type;

	        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);
	        if (!isSafe) {
	          var oldFieldTypeString = isNamedType(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
	          var newFieldTypeString = isNamedType(newFieldType) ? newFieldType.name : newFieldType.toString();
	          breakingChanges.push({
	            type: BreakingChangeType.FIELD_CHANGED_KIND,
	            description: typeName + '.' + fieldName + ' changed type from ' + (oldFieldTypeString + ' to ' + newFieldTypeString + '.')
	          });
	        }
	      }
	    });
	    // Check if a field was added to the input object type
	    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
	      if (!(fieldName in oldTypeFieldsDef)) {
	        if (isNonNullType(newTypeFieldsDef[fieldName].type)) {
	          breakingChanges.push({
	            type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
	            description: 'A non-null field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
	          });
	        } else {
	          dangerousChanges.push({
	            type: DangerousChangeType.NULLABLE_INPUT_FIELD_ADDED,
	            description: 'A nullable field ' + fieldName + ' on ' + ('input type ' + newType.name + ' was added.')
	          });
	        }
	      }
	    });
	  });
	  return {
	    breakingChanges: breakingChanges,
	    dangerousChanges: dangerousChanges
	  };
	}

	function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
	  if (isNamedType(oldType)) {
	    return (
	      // if they're both named types, see if their names are equivalent
	      isNamedType(newType) && oldType.name === newType.name ||
	      // moving from nullable to non-null of the same underlying type is safe
	      isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
	    );
	  } else if (isListType(oldType)) {
	    return (
	      // if they're both lists, make sure the underlying types are compatible
	      isListType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) ||
	      // moving from nullable to non-null of the same underlying type is safe
	      isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
	    );
	  } else if (isNonNullType(oldType)) {
	    // if they're both non-null, make sure the underlying types are compatible
	    return isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
	  }
	  return false;
	}

	function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
	  if (isNamedType(oldType)) {
	    // if they're both named types, see if their names are equivalent
	    return isNamedType(newType) && oldType.name === newType.name;
	  } else if (isListType(oldType)) {
	    // if they're both lists, make sure the underlying types are compatible
	    return isListType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
	  } else if (isNonNullType(oldType)) {
	    return (
	      // if they're both non-null, make sure the underlying types are
	      // compatible
	      isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) ||
	      // moving from non-null to nullable of the same underlying type is safe
	      !isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
	    );
	  }
	  return false;
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing types from a union type.
	 */
	function findTypesRemovedFromUnions(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var typesRemovedFromUnion = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isUnionType(oldType) || !isUnionType(newType)) {
	      return;
	    }
	    var typeNamesInNewUnion = Object.create(null);
	    newType.getTypes().forEach(function (type) {
	      typeNamesInNewUnion[type.name] = true;
	    });
	    oldType.getTypes().forEach(function (type) {
	      if (!typeNamesInNewUnion[type.name]) {
	        typesRemovedFromUnion.push({
	          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
	          description: type.name + ' was removed from union type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return typesRemovedFromUnion;
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any dangerous
	 * changes in the newSchema related to adding types to a union type.
	 */
	function findTypesAddedToUnions(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var typesAddedToUnion = [];
	  Object.keys(newTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isUnionType(oldType) || !isUnionType(newType)) {
	      return;
	    }
	    var typeNamesInOldUnion = Object.create(null);
	    oldType.getTypes().forEach(function (type) {
	      typeNamesInOldUnion[type.name] = true;
	    });
	    newType.getTypes().forEach(function (type) {
	      if (!typeNamesInOldUnion[type.name]) {
	        typesAddedToUnion.push({
	          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
	          description: type.name + ' was added to union type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return typesAddedToUnion;
	}
	/**
	 * Given two schemas, returns an Array containing descriptions of any breaking
	 * changes in the newSchema related to removing values from an enum type.
	 */
	function findValuesRemovedFromEnums(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var valuesRemovedFromEnums = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isEnumType(oldType) || !isEnumType(newType)) {
	      return;
	    }
	    var valuesInNewEnum = Object.create(null);
	    newType.getValues().forEach(function (value) {
	      valuesInNewEnum[value.name] = true;
	    });
	    oldType.getValues().forEach(function (value) {
	      if (!valuesInNewEnum[value.name]) {
	        valuesRemovedFromEnums.push({
	          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
	          description: value.name + ' was removed from enum type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return valuesRemovedFromEnums;
	}

	/**
	 * Given two schemas, returns an Array containing descriptions of any dangerous
	 * changes in the newSchema related to adding values to an enum type.
	 */
	function findValuesAddedToEnums(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();

	  var valuesAddedToEnums = [];
	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isEnumType(oldType) || !isEnumType(newType)) {
	      return;
	    }

	    var valuesInOldEnum = Object.create(null);
	    oldType.getValues().forEach(function (value) {
	      valuesInOldEnum[value.name] = true;
	    });
	    newType.getValues().forEach(function (value) {
	      if (!valuesInOldEnum[value.name]) {
	        valuesAddedToEnums.push({
	          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
	          description: value.name + ' was added to enum type ' + typeName + '.'
	        });
	      }
	    });
	  });
	  return valuesAddedToEnums;
	}

	function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	  var breakingChanges = [];

	  Object.keys(oldTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isObjectType(oldType) || !isObjectType(newType)) {
	      return;
	    }

	    var oldInterfaces = oldType.getInterfaces();
	    var newInterfaces = newType.getInterfaces();
	    oldInterfaces.forEach(function (oldInterface) {
	      if (!newInterfaces.some(function (int) {
	        return int.name === oldInterface.name;
	      })) {
	        breakingChanges.push({
	          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
	          description: typeName + ' no longer implements interface ' + (oldInterface.name + '.')
	        });
	      }
	    });
	  });
	  return breakingChanges;
	}

	function findInterfacesAddedToObjectTypes(oldSchema, newSchema) {
	  var oldTypeMap = oldSchema.getTypeMap();
	  var newTypeMap = newSchema.getTypeMap();
	  var interfacesAddedToObjectTypes = [];

	  Object.keys(newTypeMap).forEach(function (typeName) {
	    var oldType = oldTypeMap[typeName];
	    var newType = newTypeMap[typeName];
	    if (!isObjectType(oldType) || !isObjectType(newType)) {
	      return;
	    }

	    var oldInterfaces = oldType.getInterfaces();
	    var newInterfaces = newType.getInterfaces();
	    newInterfaces.forEach(function (newInterface) {
	      if (!oldInterfaces.some(function (int) {
	        return int.name === newInterface.name;
	      })) {
	        interfacesAddedToObjectTypes.push({
	          type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
	          description: newInterface.name + ' added to interfaces implemented ' + ('by ' + typeName + '.')
	        });
	      }
	    });
	  });
	  return interfacesAddedToObjectTypes;
	}

	function findRemovedDirectives(oldSchema, newSchema) {
	  var removedDirectives = [];

	  var newSchemaDirectiveMap = getDirectiveMapForSchema(newSchema);
	  oldSchema.getDirectives().forEach(function (directive) {
	    if (!newSchemaDirectiveMap[directive.name]) {
	      removedDirectives.push({
	        type: BreakingChangeType.DIRECTIVE_REMOVED,
	        description: directive.name + ' was removed'
	      });
	    }
	  });

	  return removedDirectives;
	}

	function findRemovedArgsForDirective(oldDirective, newDirective) {
	  var removedArgs = [];
	  var newArgMap = getArgumentMapForDirective(newDirective);

	  oldDirective.args.forEach(function (arg) {
	    if (!newArgMap[arg.name]) {
	      removedArgs.push(arg);
	    }
	  });

	  return removedArgs;
	}

	function findRemovedDirectiveArgs(oldSchema, newSchema) {
	  var removedDirectiveArgs = [];
	  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

	  newSchema.getDirectives().forEach(function (newDirective) {
	    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
	    if (!oldDirective) {
	      return;
	    }

	    findRemovedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
	      removedDirectiveArgs.push({
	        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
	        description: arg.name + ' was removed from ' + newDirective.name
	      });
	    });
	  });

	  return removedDirectiveArgs;
	}

	function findAddedArgsForDirective(oldDirective, newDirective) {
	  var addedArgs = [];
	  var oldArgMap = getArgumentMapForDirective(oldDirective);

	  newDirective.args.forEach(function (arg) {
	    if (!oldArgMap[arg.name]) {
	      addedArgs.push(arg);
	    }
	  });

	  return addedArgs;
	}

	function findAddedNonNullDirectiveArgs(oldSchema, newSchema) {
	  var addedNonNullableArgs = [];
	  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

	  newSchema.getDirectives().forEach(function (newDirective) {
	    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
	    if (!oldDirective) {
	      return;
	    }

	    findAddedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
	      if (!isNonNullType(arg.type)) {
	        return;
	      }

	      addedNonNullableArgs.push({
	        type: BreakingChangeType.NON_NULL_DIRECTIVE_ARG_ADDED,
	        description: 'A non-null arg ' + arg.name + ' on directive ' + (newDirective.name + ' was added')
	      });
	    });
	  });

	  return addedNonNullableArgs;
	}

	function findRemovedLocationsForDirective(oldDirective, newDirective) {
	  var removedLocations = [];
	  var newLocationSet = new Set(newDirective.locations);

	  oldDirective.locations.forEach(function (oldLocation) {
	    if (!newLocationSet.has(oldLocation)) {
	      removedLocations.push(oldLocation);
	    }
	  });

	  return removedLocations;
	}

	function findRemovedDirectiveLocations(oldSchema, newSchema) {
	  var removedLocations = [];
	  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);

	  newSchema.getDirectives().forEach(function (newDirective) {
	    var oldDirective = oldSchemaDirectiveMap[newDirective.name];
	    if (!oldDirective) {
	      return;
	    }

	    findRemovedLocationsForDirective(oldDirective, newDirective).forEach(function (location) {
	      removedLocations.push({
	        type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
	        description: location + ' was removed from ' + newDirective.name
	      });
	    });
	  });

	  return removedLocations;
	}

	function getDirectiveMapForSchema(schema) {
	  return keyMap(schema.getDirectives(), function (dir) {
	    return dir.name;
	  });
	}

	function getArgumentMapForDirective(directive) {
	  return keyMap(directive.args, function (arg) {
	    return arg.name;
	  });
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	/**
	 * A validation rule which reports deprecated usages.
	 *
	 * Returns a list of GraphQLError instances describing each deprecated use.
	 */
	function findDeprecatedUsages(schema, ast) {
	  var errors = [];
	  var typeInfo = new TypeInfo(schema);

	  visit(ast, visitWithTypeInfo(typeInfo, {
	    Field: function Field(node) {
	      var fieldDef = typeInfo.getFieldDef();
	      if (fieldDef && fieldDef.isDeprecated) {
	        var parentType = typeInfo.getParentType();
	        if (parentType) {
	          var reason = fieldDef.deprecationReason;
	          errors.push(new GraphQLError('The field ' + parentType.name + '.' + fieldDef.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
	        }
	      }
	    },
	    EnumValue: function EnumValue(node) {
	      var enumVal = typeInfo.getEnumValue();
	      if (enumVal && enumVal.isDeprecated) {
	        var type = getNamedType(typeInfo.getInputType());
	        if (type) {
	          var reason = enumVal.deprecationReason;
	          errors.push(new GraphQLError('The enum value ' + type.name + '.' + enumVal.name + ' is deprecated.' + (reason ? ' ' + reason : ''), [node]));
	        }
	      }
	    }
	  }));

	  return errors;
	}

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */



	var module$1 = /*#__PURE__*/Object.freeze({
		graphql: graphql,
		graphqlSync: graphqlSync,
		GraphQLSchema: GraphQLSchema,
		GraphQLScalarType: GraphQLScalarType,
		GraphQLObjectType: GraphQLObjectType,
		GraphQLInterfaceType: GraphQLInterfaceType,
		GraphQLUnionType: GraphQLUnionType,
		GraphQLEnumType: GraphQLEnumType,
		GraphQLInputObjectType: GraphQLInputObjectType,
		GraphQLList: GraphQLList,
		GraphQLNonNull: GraphQLNonNull,
		GraphQLDirective: GraphQLDirective,
		TypeKind: TypeKind,
		specifiedScalarTypes: specifiedScalarTypes,
		GraphQLInt: GraphQLInt,
		GraphQLFloat: GraphQLFloat,
		GraphQLString: GraphQLString,
		GraphQLBoolean: GraphQLBoolean,
		GraphQLID: GraphQLID,
		specifiedDirectives: specifiedDirectives,
		GraphQLIncludeDirective: GraphQLIncludeDirective,
		GraphQLSkipDirective: GraphQLSkipDirective,
		GraphQLDeprecatedDirective: GraphQLDeprecatedDirective,
		DEFAULT_DEPRECATION_REASON: DEFAULT_DEPRECATION_REASON,
		SchemaMetaFieldDef: SchemaMetaFieldDef,
		TypeMetaFieldDef: TypeMetaFieldDef,
		TypeNameMetaFieldDef: TypeNameMetaFieldDef,
		introspectionTypes: introspectionTypes,
		__Schema: __Schema,
		__Directive: __Directive,
		__DirectiveLocation: __DirectiveLocation,
		__Type: __Type,
		__Field: __Field,
		__InputValue: __InputValue,
		__EnumValue: __EnumValue,
		__TypeKind: __TypeKind,
		isSchema: isSchema,
		isDirective: isDirective,
		isType: isType,
		isScalarType: isScalarType,
		isObjectType: isObjectType,
		isInterfaceType: isInterfaceType,
		isUnionType: isUnionType,
		isEnumType: isEnumType,
		isInputObjectType: isInputObjectType,
		isListType: isListType,
		isNonNullType: isNonNullType,
		isInputType: isInputType,
		isOutputType: isOutputType,
		isLeafType: isLeafType,
		isCompositeType: isCompositeType,
		isAbstractType: isAbstractType,
		isWrappingType: isWrappingType,
		isNullableType: isNullableType,
		isNamedType: isNamedType,
		isSpecifiedScalarType: isSpecifiedScalarType,
		isIntrospectionType: isIntrospectionType,
		isSpecifiedDirective: isSpecifiedDirective,
		assertType: assertType,
		assertScalarType: assertScalarType,
		assertObjectType: assertObjectType,
		assertInterfaceType: assertInterfaceType,
		assertUnionType: assertUnionType,
		assertEnumType: assertEnumType,
		assertInputObjectType: assertInputObjectType,
		assertListType: assertListType,
		assertNonNullType: assertNonNullType,
		assertInputType: assertInputType,
		assertOutputType: assertOutputType,
		assertLeafType: assertLeafType,
		assertCompositeType: assertCompositeType,
		assertAbstractType: assertAbstractType,
		assertWrappingType: assertWrappingType,
		assertNullableType: assertNullableType,
		assertNamedType: assertNamedType,
		getNullableType: getNullableType,
		getNamedType: getNamedType,
		validateSchema: validateSchema,
		assertValidSchema: assertValidSchema,
		Source: Source,
		getLocation: getLocation,
		parse: parse,
		parseValue: parseValue,
		parseType: parseType,
		print: print,
		visit: visit,
		visitInParallel: visitInParallel,
		visitWithTypeInfo: visitWithTypeInfo,
		getVisitFn: getVisitFn,
		Kind: Kind,
		TokenKind: TokenKind,
		DirectiveLocation: DirectiveLocation,
		BREAK: BREAK,
		execute: execute,
		defaultFieldResolver: defaultFieldResolver,
		responsePathAsArray: responsePathAsArray,
		getDirectiveValues: getDirectiveValues,
		subscribe: subscribe,
		createSourceEventStream: createSourceEventStream,
		validate: validate,
		ValidationContext: ValidationContext,
		specifiedRules: specifiedRules,
		FieldsOnCorrectTypeRule: FieldsOnCorrectType,
		FragmentsOnCompositeTypesRule: FragmentsOnCompositeTypes,
		KnownArgumentNamesRule: KnownArgumentNames,
		KnownDirectivesRule: KnownDirectives,
		KnownFragmentNamesRule: KnownFragmentNames,
		KnownTypeNamesRule: KnownTypeNames,
		LoneAnonymousOperationRule: LoneAnonymousOperation,
		NoFragmentCyclesRule: NoFragmentCycles,
		NoUndefinedVariablesRule: NoUndefinedVariables,
		NoUnusedFragmentsRule: NoUnusedFragments,
		NoUnusedVariablesRule: NoUnusedVariables,
		OverlappingFieldsCanBeMergedRule: OverlappingFieldsCanBeMerged,
		PossibleFragmentSpreadsRule: PossibleFragmentSpreads,
		ProvidedNonNullArgumentsRule: ProvidedNonNullArguments,
		ScalarLeafsRule: ScalarLeafs,
		SingleFieldSubscriptionsRule: SingleFieldSubscriptions,
		UniqueArgumentNamesRule: UniqueArgumentNames,
		UniqueDirectivesPerLocationRule: UniqueDirectivesPerLocation,
		UniqueFragmentNamesRule: UniqueFragmentNames,
		UniqueInputFieldNamesRule: UniqueInputFieldNames,
		UniqueOperationNamesRule: UniqueOperationNames,
		UniqueVariableNamesRule: UniqueVariableNames,
		ValuesOfCorrectTypeRule: ValuesOfCorrectType,
		VariablesAreInputTypesRule: VariablesAreInputTypes,
		VariablesDefaultValueAllowedRule: VariablesDefaultValueAllowed,
		VariablesInAllowedPositionRule: VariablesInAllowedPosition,
		GraphQLError: GraphQLError,
		formatError: formatError,
		printError: printError,
		getIntrospectionQuery: getIntrospectionQuery,
		introspectionQuery: introspectionQuery,
		getOperationAST: getOperationAST,
		introspectionFromSchema: introspectionFromSchema,
		buildClientSchema: buildClientSchema,
		buildASTSchema: buildASTSchema,
		buildSchema: buildSchema,
		getDescription: getDescription,
		extendSchema: extendSchema,
		lexicographicSortSchema: lexicographicSortSchema,
		printSchema: printSchema,
		printIntrospectionSchema: printIntrospectionSchema,
		printType: printType,
		typeFromAST: typeFromAST,
		valueFromAST: valueFromAST,
		valueFromASTUntyped: valueFromASTUntyped,
		astFromValue: astFromValue,
		TypeInfo: TypeInfo,
		coerceValue: coerceValue,
		isValidJSValue: isValidJSValue,
		isValidLiteralValue: isValidLiteralValue,
		concatAST: concatAST,
		separateOperations: separateOperations,
		isEqualType: isEqualType,
		isTypeSubTypeOf: isTypeSubTypeOf,
		doTypesOverlap: doTypesOverlap,
		assertValidName: assertValidName,
		findBreakingChanges: findBreakingChanges,
		findDangerousChanges: findDangerousChanges,
		BreakingChangeType: BreakingChangeType,
		DangerousChangeType: DangerousChangeType,
		findDeprecatedUsages: findDeprecatedUsages
	});

	var _extends$3 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function typeOf(value) {
	  return Object.prototype.toString.call(value).slice(8, -1);
	}

	function isType$1(type) {
	  return function (value) {
	    if (value === null) return type.toLowerCase() === 'null';
	    if (typeof value === 'undefined') return type.toLowerCase() === 'undefined';

	    return type.toLowerCase() === typeOf(value).toLowerCase();
	  };
	}

	function isArray$1(value) {
	  return isType$1('array')(value);
	}

	function isObject$1(value) {
	  return isType$1('object')(value);
	}

	function isEmpty(value) {
	  if (typeof value === 'string') return !value;
	  if (isType$1('object', value)) return !Object.values(value).length;
	  if (isType$1('array', value)) return !value.length;
	  if (isType$1('Map', value)) return !value.size;
	  if (isType$1('Set', value)) return !value.size;
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
	      return _extends$3({}, acc, (_extends2 = {}, _extends2[key] = transform(value), _extends2));
	    }, {});
	  };
	}

	var utils = {
	  isArray: isArray$1,
	  isEmpty: isEmpty,
	  isNil: isNil,
	  isObject: isObject$1,
	  isType: isType$1,
	  map: map,
	  mapObject: mapObject,
	  prop: prop,
	  typeOf: typeOf
	};

	var _extends$4 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};



	var visit$1 = module$1.visit,
	    gql = module$1.parse,
	    Kind$1 = module$1.Kind;

	var map$1 = utils.map,
	    prop$1 = utils.prop,
	    isNil$1 = utils.isNil,
	    isArray$2 = utils.isArray,
	    isObject$2 = utils.isObject;

	var CACHE_READ_ERROR = '[GraphQLNormalizr]: Could not read from cache';
	var CACHE_WRITE_ERROR = '[GraphQLNormalizr]: Could not write to cache';

	var buildNoTypenameError = function buildNoTypenameError(node) {
	  return '[GraphQLNormalizr]: No "__typename" field found on node ' + JSON.stringify(node);
	};

	function hasField(name) {
	  return function (set) {
	    return set.some(function (_ref) {
	      var value = _ref.name.value;
	      return value === name;
	    });
	  };
	}

	function createField(name) {
	  return {
	    kind: 'Field',
	    alias: undefined,
	    name: {
	      kind: 'Name',
	      value: name
	    },
	    arguments: [],
	    directives: [],
	    selectionSet: undefined
	  };
	}

	function toLists() {
	  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return Object.entries(object).reduce(function (acc, _ref2) {
	    var _extends2;

	    var key = _ref2[0],
	        value = _ref2[1];
	    return _extends$4({}, acc, (_extends2 = {}, _extends2[key] = Object.values(value), _extends2));
	  }, {});
	}

	var GraphQLNormalizr = function GraphQLNormalizr() {
	  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref3$idKey = _ref3.idKey,
	      idKey = _ref3$idKey === undefined ? 'id' : _ref3$idKey,
	      _ref3$typeMap = _ref3.typeMap,
	      typeMap = _ref3$typeMap === undefined ? {} : _ref3$typeMap,
	      _ref3$caching = _ref3.caching,
	      caching = _ref3$caching === undefined ? false : _ref3$caching,
	      _ref3$lists = _ref3.lists,
	      lists = _ref3$lists === undefined ? false : _ref3$lists,
	      _ref3$typenames = _ref3.typenames,
	      typenames = _ref3$typenames === undefined ? false : _ref3$typenames;

	  var hasIdField = hasField(idKey);
	  var hasTypeNameField = hasField('__typename');

	  var idField = createField(idKey);
	  var typeNameField = createField('__typename');

	  var cache = new Map();

	  function mapNestedValue(obj) {
	    var object = _extends$4({}, obj);
	    !typenames && delete object.__typename;

	    return Object.entries(object).reduce(function (acc, _ref4) {
	      var _extends3;

	      var key = _ref4[0],
	          value = _ref4[1];

	      return _extends$4({}, acc, (_extends3 = {}, _extends3[key] = isObject$2(value) ? prop$1(idKey)(value) : isArray$2(value) ? map$1(prop$1(idKey))(value) : value, _extends3));
	    }, {});
	  }

	  function assoc(entity, value, normalized) {
	    if (isNil$1(entity)) throw new Error(buildNoTypenameError(value));
	    var id = value[idKey];

	    var existingEntities = normalized[entity];
	    normalized[entity] = existingEntities || {};

	    var existing = normalized[entity][id] || {};
	    normalized[entity][id] = _extends$4({}, existing, value);
	  }

	  function normalize(_ref5) {
	    var data = _ref5.data;

	    var paths = {};
	    var entities = {};
	    var stack = {};
	    var normalized = {};

	    try {
	      var cached = void 0;
	      caching && (cached = cache.get(JSON.stringify(data)));
	      if (cached) {
	        return cached;
	      }
	    } catch (e) {
	      // eslint-disable-next-line
	      process.env.NODE_ENV !== 'production' && console.warn(CACHE_READ_ERROR);
	    }
	(function visit(root) {
	      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	      for (var _iterator = Object.entries(root), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref6;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref6 = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref6 = _i.value;
	        }

	        var _ref7 = _ref6,
	            key = _ref7[0],
	            value = _ref7[1];

	        if (isObject$2(value) || isArray$2(value)) {
	          var type = value.__typename;
	          type && (entities[type] = typeMap[type] || entities[type] || pluralize(type).toLowerCase());

	          stack.value = value;
	          stack.entity = entities[type];

	          visit(_extends$4({}, value), '' + (path ? path + '.' : '') + key);
	        } else {
	          if (!paths[path]) {
	            assoc(stack.entity, mapNestedValue(stack.value), normalized);
	            paths[path] = { done: true };
	          }
	        }
	      }
	    })(data);

	    try {
	      caching && cache.set(JSON.stringify(data), normalized);
	    } catch (e) {
	      // eslint-disable-next-line
	      process.env.NODE_ENV !== 'production' && console.warn(CACHE_WRITE_ERROR);
	    }

	    normalized = lists ? toLists(normalized) : normalized || {};

	    return normalized;
	  }

	  function addRequiredFields(query) {
	    return visit$1(query, {
	      SelectionSet: function SelectionSet(node, key, parent, path) {
	        if (parent.kind === Kind$1.OPERATION_DEFINITION) return;

	        !hasIdField(node.selections) && node.selections.unshift(idField);
	        !hasTypeNameField(node.selections) && node.selections.unshift(typeNameField);

	        return node;
	      }
	    });
	  }

	  function parse(qs) {
	    return addRequiredFields(gql(qs, { noLocation: true }));
	  }

	  return { normalize: normalize, addRequiredFields: addRequiredFields, parse: parse };
	};

	var es = {
	  GraphQLNormalizr: GraphQLNormalizr
	};
	var es_1 = es.GraphQLNormalizr;

	var _typeof$e = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var isGraphQl = function isGraphQl(payload) {
	  return payload["data"] && payload["data"][0] && "__typename" in payload["data"][0];
	};

	var toJsonApiSpec = function toJsonApiSpec(resourceType, resourcesById) {
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

	    if (value && (typeof value === "undefined" ? "undefined" : _typeof$e(value)) === "object") ;
	    return newObject;
	  }, {});
	};

	var _removeRelationships = function _removeRelationships(resource) {
	  return Object.entries(resource).reduce(function (newObject, _ref5) {
	    var _ref6 = _slicedToArray(_ref5, 2),
	        key = _ref6[0],
	        value = _ref6[1];

	    if (!(value && Array.isArray(value)) || !(value && (typeof value === "undefined" ? "undefined" : _typeof$e(value)) === "object")) {
	      newObject[key] = value;
	    }
	    return newObject;
	  }, {});
	};

	var _slicedToArray$1 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var graphQLNormalizr = new es_1();
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
	    _classCallCheck$9(this, Actions);

	    this.actions = adapter.actions;
	    this.mutator = mutator;
	  }

	  _createClass(Actions, [{
	    key: "updateResources",
	    value: function updateResources(payload) {
	      // Create insert order index
	      var index = isGraphQl(payload) ? _createIndexForGraphQl(payload) : _createIndexForJsonApi(payload);

	      var resourcesByType = {};

	      Object.entries(isGraphQl(payload) ? graphQlNormalize(payload) : jsonApiNormalize(payload)).forEach(function (_ref2) {
	        var _ref3 = _slicedToArray$1(_ref2, 2),
	            resourceType = _ref3[0],
	            resourcesById = _ref3[1];

	        var rById = isGraphQl(payload) ? toJsonApiSpec(resourceType, resourcesById) : resourcesById;

	        resourcesByType[resourceType] = resourcesById;
	      });
	      this.actions.updateResources(this.mutator, resourcesByType, index);
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


	function _createIndexForJsonApi(payload) {
	  var index = [];
	  if (payload.data) {
	    var data = Array.isArray(payload.data) ? payload.data : [payload.data];
	    index = data.map(function (item) {
	      return item.id;
	    });
	  }
	  return index;
	}

	function _createIndexForGraphQl(payload) {
	  return [];
	}

	var lowerCaseFirst = function lowerCaseFirst(string) {
	  return string.charAt(0).toLowerCase() + string.slice(1);
	};

	function isFunction$1(functionToCheck) {
	  return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
	}

	var _slicedToArray$2 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var get = require("lodash.get");

	function handleConversion(query, conversionType) {
	  if (!query.currentResources) return [];
	  return _reduceCurrentResources(query, conversionType);
	}

	function _reduceCurrentResources(query, reducerType) {
	  var conversion = reducerType === "models" ? _convertToModel : _convertToObject;
	  var currentResources = query.currentResources,
	      resources = query.resources,
	      resourceName = query.resourceName;

	  return Object.values(currentResources).sort(function (resource1, resource2) {
	    return _sortByIndex(resource1, resource2, resources, resourceName);
	  }).map(function (_ref) {
	    var id = _ref.id,
	        attributes = _ref.attributes,
	        relationships = _ref.relationships,
	        _types = _ref._types,
	        _links = _ref._links;
	    return _convertResource({
	      id: id,
	      attributes: attributes,
	      relationships: relationships,
	      conversion: conversion,
	      query: query
	    });
	  });
	}

	function _convertResource(_ref2) {
	  var id = _ref2.id,
	      attributes = _ref2.attributes,
	      relationships = _ref2.relationships,
	      conversion = _ref2.conversion,
	      query = _ref2.query;
	  var klass = query.klass,
	      currentIncludes = query.currentIncludes,
	      resources = query.resources,
	      hasMany = query.hasMany,
	      belongsTo = query.belongsTo;


	  var newFormattedResource = conversion(klass, resources, _extends$5({
	    id: id
	  }, attributes), hasMany, belongsTo);

	  if (!currentIncludes.length) return newFormattedResource;

	  return _handleResourceConversionWithIncludedRelations({
	    newFormattedResource: newFormattedResource,
	    conversion: conversion,
	    query: query,
	    resources: resources,
	    relationships: relationships
	  });
	}

	function _handleResourceConversionWithIncludedRelations(_ref3) {
	  var newFormattedResource = _ref3.newFormattedResource,
	      conversion = _ref3.conversion,
	      query = _ref3.query,
	      relationships = _ref3.relationships;
	  var klass = query.klass,
	      resources = query.resources,
	      hasMany = query.hasMany,
	      belongsTo = query.belongsTo;

	  return conversion(klass, resources, _extends$5({}, newFormattedResource, _flattenRelationships(relationships).reduce(function (nextRelationshipObjects, _ref4) {
	    var id = _ref4.id,
	        name = _ref4.name,
	        type = _ref4.type;
	    return _buildRelationships$1(query, conversion, nextRelationshipObjects, {
	      id: id,
	      name: name,
	      type: type
	    });
	  }, {})), hasMany, belongsTo);
	}

	function _buildRelationships$1(query, conversion, nextRelationshipObjects, _ref5) {
	  var id = _ref5.id,
	      name = _ref5.name,
	      type = _ref5.type;
	  var klass = query.klass,
	      currentIncludes = query.currentIncludes,
	      resources = query.resources,
	      hasMany = query.hasMany,
	      belongsTo = query.belongsTo;

	  var handleRelationArgs = {
	    resources: resources,
	    id: id,
	    type: type,
	    nextRelationshipObjects: nextRelationshipObjects,
	    conversion: conversion,
	    currentIncludes: currentIncludes,
	    name: name
	  };

	  // for the case when the relation class is hasMany
	  var relationClass = hasMany.find(function (klass) {
	    return klass.pluralName() === type;
	  });
	  if (relationClass) {
	    _setRelationShipKeyToValues(_extends$5({}, handleRelationArgs, {
	      relationType: "hasMany",
	      relationClass: relationClass
	    }));
	  }

	  // for the case when the relation class is belongsTo
	  relationClass = belongsTo.find(function (klass) {
	    return klass.pluralName() === type;
	  });
	  if (relationClass) {
	    _setRelationShipKeyToValues(_extends$5({}, handleRelationArgs, {
	      relationType: "belongsTo",
	      relationClass: relationClass
	    }));
	  }

	  return nextRelationshipObjects;
	}

	function _setRelationShipKeyToValues(_ref6) {
	  var relationType = _ref6.relationType,
	      resources = _ref6.resources,
	      id = _ref6.id,
	      type = _ref6.type,
	      nextRelationshipObjects = _ref6.nextRelationshipObjects,
	      conversion = _ref6.conversion,
	      relationClass = _ref6.relationClass,
	      currentIncludes = _ref6.currentIncludes,
	      name = _ref6.name;

	  var directIncludesRalationships = currentIncludes.map(function (relation) {
	    return relation && relation.split(".");
	  }).flat();

	  if (!directIncludesRalationships.includes(name)) return nextRelationshipObjects;

	  if (!(name in nextRelationshipObjects)) {
	    if (relationType === "hasMany") {
	      nextRelationshipObjects[name] = [];
	    } else if (relationType === "belongsTo") {
	      nextRelationshipObjects[name] = null;
	    }
	  }
	  if (!resources[type]) return nextRelationshipObjects;

	  var relationData = resources[type][id];
	  if (!relationData) return nextRelationshipObjects;

	  if (relationClass) {
	    var _buildRelationModel2 = _buildRelationModel(resources, currentIncludes, relationClass, id, type, name, relationData),
	        _buildRelationModel3 = _slicedToArray$2(_buildRelationModel2, 2),
	        relationModel = _buildRelationModel3[0],
	        nestedResourceData = _buildRelationModel3[1];

	    nestedResourceData.forEach(function (_ref7) {
	      var _ref8 = _slicedToArray$2(_ref7, 4),
	          nestedResourceName = _ref8[0],
	          nestedResourceType = _ref8[1],
	          nestedResourceIds = _ref8[2],
	          doubleNestedResourceName = _ref8[3];

	      var nestedResources = _convertWithNestedResources(conversion, relationClass, resources, id, relationData, relationModel, nestedResourceName, nestedResourceType, nestedResourceIds, doubleNestedResourceName);

	      if (relationType === "hasMany") {
	        var objIndex = nextRelationshipObjects[name].findIndex(function (obj) {
	          return obj.id == nestedResources.id;
	        });
	        if (objIndex < 0) {
	          nextRelationshipObjects[name].push(nestedResources);
	        } else {
	          var _objIndex = nextRelationshipObjects[name].findIndex(function (obj) {
	            return obj.id == nestedResources.id;
	          });
	          nextRelationshipObjects[name][_objIndex] = _extends$5({}, nextRelationshipObjects[name][_objIndex], nestedResources);
	        }
	      } else if (relationType === "belongsTo") {
	        var updatedAttributes = _extends$5({}, nextRelationshipObjects[name], nestedResources);

	        if (nextRelationshipObjects[name] && nextRelationshipObjects[name][nestedResourceName] && nestedResources[nestedResourceName]) {
	          updatedAttributes[nestedResourceName] = _extends$5({}, nextRelationshipObjects[name][nestedResourceName], nestedResources[nestedResourceName]);
	        }

	        nextRelationshipObjects[name] = conversion(relationClass, resources, updatedAttributes);
	      }
	    });
	  }
	  return nextRelationshipObjects;
	}

	function _convertWithNestedResources(conversion, relationClass, resources, id, relationData, relationModel, nestedResourceName, nestedResourceType, nestedResourceIds, doubleNestedResourceName) {
	  var query = relationModel && relationModel[nestedResourceType] && relationModel[nestedResourceType]();

	  var model = relationModel && relationModel[nestedResourceName] && relationModel[nestedResourceName]();

	  var nestedResponse = void 0;
	  if (query && query.toObjects) {
	    nestedResponse = query.klass.query(resources).where({ id: nestedResourceIds }).includes([doubleNestedResourceName]).toObjects();
	  } else if (model && model.toObject) {
	    nestedResponse = model.constructor.query(resources).where({ id: nestedResourceIds }).includes([doubleNestedResourceName]).toObjects()[0];
	  }

	  return conversion(relationClass, resources, _extends$5({
	    id: id
	  }, relationData.attributes, nestedResponse && _defineProperty$2({}, nestedResourceName, nestedResponse)));
	}

	function _buildRelationModel(resources, currentIncludes, relationClass, id, type, name, relationData) {
	  var relationModel = void 0,
	      nestedResourceType = void 0,
	      nestedResourceIds = void 0,
	      nestedResourceNames = void 0;

	  nestedResourceNames = [];

	  currentIncludes.filter(function (relation) {
	    return relation.split(".")[0] == type || relation.split(".")[0] == name;
	  }).forEach(function (includesName) {
	    var splitName = includesName.split(/\.(.+)/)[1];

	    if (splitName && splitName.includes("[")) {
	      var nestedNames = void 0;
	      if (splitName.charAt(0) !== "[") {
	        var firstSplit = splitName.split(".")[0];

	        nestedNames = splitName.replace(/[\[\]']+/g, "").split(",").map(function (rn) {
	          return rn.replace(/^\s/, firstSplit + ".").trim();
	        });
	      } else {
	        nestedNames = splitName.replace(/[\[\]']+/g, "").split(",").map(function (rn) {
	          return rn.trim();
	        });
	      }

	      nestedResourceNames = nestedResourceNames.concat(nestedNames);
	    } else {
	      // Yes, even push undefined
	      nestedResourceNames.push(splitName);
	    }
	  });

	  var nestedResourceData = nestedResourceNames.map(function (nestedResourceName) {
	    nestedResourceType = null;
	    nestedResourceIds = null;
	    var singleNestedResourceName = void 0,
	        doubleNestedResourceName = void 0;

	    if (nestedResourceName) {

	      // sets the nested class if it is a hasMany relationship
	      var _nestedResourceName$s = nestedResourceName.split(/\.(.+)/);

	      var _nestedResourceName$s2 = _slicedToArray$2(_nestedResourceName$s, 2);

	      singleNestedResourceName = _nestedResourceName$s2[0];
	      doubleNestedResourceName = _nestedResourceName$s2[1];
	      var nestedClass = relationClass.belongsTo.filter(function (klass) {
	        return singleNestedResourceName === klass.singularName();
	      })[0];

	      // handles the belongsTo cases
	      if (nestedClass) {
	        var belongsToData = get(resources, relationClass.pluralName() + "." + id + ".relationships." + singleNestedResourceName + ".data");

	        if (belongsToData) {
	          nestedResourceType = belongsToData.type;
	          nestedResourceIds = [belongsToData.id];
	        }
	      } else {
	        // handles the hasMany cases
	        var nestedClassDataArray = relationClass.hasMany && relationClass.hasMany.reduce(function (nestedClassData, klass) {
	          var nestedRelationshipData = get(resources, relationClass.pluralName() + "." + id + ".relationships." + singleNestedResourceName + ".data");
	          if (!nestedRelationshipData) {
	            nestedRelationshipData = [];
	          }

	          nestedResourceType = get(nestedRelationshipData, "[0].type");
	          if (nestedResourceType === klass.pluralName()) {
	            nestedResourceIds = nestedRelationshipData.reduce(function (ids, _ref10) {
	              var id = _ref10.id;

	              ids.push(id);
	              return ids;
	            }, []);

	            nestedClassData.push([klass, nestedResourceType, nestedResourceIds]);
	          }

	          return nestedClassData;
	        }, []);

	        if (nestedClassDataArray && nestedClassDataArray.length) {
	          var _nestedClassDataArray = _slicedToArray$2(nestedClassDataArray[0], 3);

	          nestedClass = _nestedClassDataArray[0];
	          nestedResourceType = _nestedClassDataArray[1];
	          nestedResourceIds = _nestedClassDataArray[2];
	        }
	      }

	      if (nestedClass) {
	        relationModel = _convertToModel(relationClass, resources, _extends$5({
	          id: id
	        }, relationData.attributes), relationClass.hasMany, relationClass.belongsTo);
	      }
	    }

	    return [singleNestedResourceName, nestedResourceType, nestedResourceIds, doubleNestedResourceName];
	  });

	  return [relationModel, nestedResourceData];
	}

	function _flattenRelationships(relationships) {
	  if (!relationships) {
	    return [];
	  }

	  return Object.entries(relationships).reduce(function (nextRelationships, _ref11) {
	    var _ref12 = _slicedToArray$2(_ref11, 2),
	        name = _ref12[0],
	        relationshipItem = _ref12[1];

	    if (!nextRelationships || !relationshipItem || !relationshipItem.data) {
	      return nextRelationships;
	    }

	    if (Array.isArray(relationshipItem.data)) {
	      var dataArray = relationshipItem.data.map(function (item) {
	        return _extends$5({}, item, {
	          name: name
	        });
	      });
	      return [].concat(_toConsumableArray(nextRelationships), _toConsumableArray(dataArray));
	    }

	    return [].concat(_toConsumableArray(nextRelationships), [_extends$5({}, relationshipItem.data, { name: name })]);
	  }, []);
	}

	function _convertToModel(klass, resources, resource, hasMany, belongsTo) {
	  return new klass(resources, resource, hasMany, belongsTo);
	}

	function _convertToObject(klass, resources, resource, hasMany, belongsTo) {
	  return resource;
	}

	function _sortByIndex(resource1, resource2, resources, resourceName) {
	  var index = resources.index[resourceName];
	  return index.indexOf(resource1.id) - index.indexOf(resource2.id);
	}

	var _typeof$f = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray$3 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	var get$1 = require("lodash.get");

	var Query = function () {
	  function Query(klass, resourceName, resources) {
	    var hasMany = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	    var belongsTo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	    _classCallCheck$a(this, Query);

	    this.klass = klass;
	    this.resourceName = resourceName;
	    this.resources = resources;
	    this.currentIncludes = [];
	    this.currentResources = {};
	    this.hasMany = hasMany;
	    this.belongsTo = belongsTo;
	    this._setCurrentResources();
	  }

	  _createClass$1(Query, [{
	    key: "find",
	    value: function find(id) {
	      var resources = this.resources,
	          resourceName = this.resourceName,
	          klass = this.klass,
	          _convertToModel = this._convertToModel,
	          hasMany = this.hasMany,
	          belongsTo = this.belongsTo;


	      if (!(resources[resourceName] && resources[resourceName][id])) return;

	      var attributes = resources[resourceName][id].attributes;

	      return _convertToModel(klass, resources, _extends$6({ id: id }, attributes), hasMany, belongsTo);
	    }
	  }, {
	    key: "first",
	    value: function first() {
	      var resources = this.resources,
	          resourceName = this.resourceName;

	      var _resources = resources[resourceName];
	      var _index = resources.index[resourceName];
	      return _resources && _index && _resources[_index[0]];
	    }
	  }, {
	    key: "last",
	    value: function last() {
	      var resources = this.resources,
	          resourceName = this.resourceName;

	      var _resources = resources[resourceName];
	      var _index = resources.index[resourceName];
	      return _resources && _index && _resources[_index[_index.length - 1]];
	    }
	  }, {
	    key: "all",
	    value: function all() {
	      return this;
	    }
	  }, {
	    key: "where",
	    value: function where(params) {
	      this._filterAndSetCurrentResourcesByParams(params);
	      return this;
	    }
	  }, {
	    key: "whereRelated",
	    value: function whereRelated(relationship, params) {
	      var resourceName = this.resourceName;


	      var relationships = Object.values(this.currentResources)[0] && Object.values(this.currentResources)[0].relationships;

	      relationships && relationships[relationship.singularName()] ? this._handleBelongsToWhereRelated(relationship, params, resourceName) : this._handleHasManyWhereRelated(relationship, params, resourceName);
	      return this;
	    }
	  }, {
	    key: "includes",
	    value: function includes(relationshipTypes) {
	      this.currentIncludes = relationshipTypes;
	      return this;
	    }
	  }, {
	    key: "toModels",
	    value: function toModels() {
	      return handleConversion(this, "models");
	    }
	  }, {
	    key: "toObjects",
	    value: function toObjects() {
	      return handleConversion(this, "objects");
	    }

	    // Private

	  }, {
	    key: "_handleBelongsToWhereRelated",
	    value: function _handleBelongsToWhereRelated(relationship, params, resourceName) {
	      var relationshipName = relationship.singularName();

	      var relationIds = this.klass.query(this.resources).includes([relationshipName]).toModels().reduce(function (idArray, model) {
	        var maybeRelation = model[relationshipName];
	        var relation = isFunction$1(relation) ? maybeRelation() : maybeRelation;

	        if (relation && relation.id && !idArray.includes(relation.id)) idArray.push(relation.id);
	        return idArray;
	      }, []);

	      var filteredRelationIds = relationship.query(this.resources).includes([resourceName]).where({ id: relationIds }).where(params).toObjects().map(function (r) {
	        return r.id;
	      });

	      this.currentResources = Object.entries(this.currentResources).reduce(function (newResources, _ref) {
	        var _ref2 = _slicedToArray$3(_ref, 2),
	            id = _ref2[0],
	            resource = _ref2[1];

	        var r = get$1(resource, "relationships[" + relationshipName + "]");
	        if (r && r.data && filteredRelationIds.includes(r.data.id)) {
	          newResources[id] = resource;
	        }
	        return newResources;
	      }, {});
	    }
	  }, {
	    key: "_handleHasManyWhereRelated",
	    value: function _handleHasManyWhereRelated(relationship, params, resourceName) {
	      var _this = this;

	      this.currentResources = relationship.query(this.resources).where(params).includes([resourceName]).toObjects().reduce(function (newResource, relatedResource) {
	        var relation = relatedResource[resourceName] || [relatedResource[_this.klass.singularName()]].filter(Boolean);
	        relation.forEach(function (_ref3) {
	          var type = _ref3.type,
	              id = _ref3.id,
	              attributes = _objectWithoutProperties(_ref3, ["type", "id"]);

	          newResource[id] = { type: type, id: id, attributes: attributes };
	        });
	        return newResource;
	      }, {});
	    }
	  }, {
	    key: "_convertToModel",
	    value: function _convertToModel(klass, resources, resource, hasMany, belongsTo) {
	      return new klass(resources, resource, hasMany, belongsTo);
	    }
	  }, {
	    key: "_setCurrentResources",
	    value: function _setCurrentResources() {
	      if (this._isEmpty(this.currentResources) && this.resources) {
	        this.currentResources = this.resources[this.resourceName];
	      }
	    }
	  }, {
	    key: "_filterAndSetCurrentResourcesByParams",
	    value: function _filterAndSetCurrentResourcesByParams(params) {
	      var _this2 = this;

	      if (!this.currentResources) return;
	      var resourcesByID = Object.entries(this.currentResources).reduce(function (newResource, _ref4) {
	        var _ref5 = _slicedToArray$3(_ref4, 2),
	            id = _ref5[0],
	            resource = _ref5[1];

	        _this2._filterResourceByParams(params, newResource, resource, id);
	        return newResource;
	      }, {});
	      this.currentResources = resourcesByID;
	    }
	  }, {
	    key: "_filterResourceByParams",
	    value: function _filterResourceByParams(params, newResource, resource, id) {
	      Object.entries(params).forEach(function (_ref6) {
	        var _ref7 = _slicedToArray$3(_ref6, 2),
	            key = _ref7[0],
	            value = _ref7[1];

	        if (Array.isArray(value)) {
	          if (key === "id" && value.includes(resource.id)) {
	            newResource[id] = resource;
	          } else if (value.includes(resource.attributes[key])) {
	            newResource[id] = resource;
	          }
	        } else {
	          if (key === "id" && resource.id === value) {
	            newResource[id] = resource;
	          } else if (resource.attributes[key] === value) {
	            newResource[id] = resource;
	          }
	        }
	      });
	    }
	  }, {
	    key: "_isEmpty",
	    value: function _isEmpty(obj) {
	      if (obj === null || obj === undefined || Array.isArray(obj) || (typeof obj === "undefined" ? "undefined" : _typeof$f(obj)) !== "object") {
	        return true;
	      }
	      return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
	    }
	  }]);

	  return Query;
	}();

	var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray$4 = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseModel = function () {
	  _createClass$2(BaseModel, null, [{
	    key: "query",
	    value: function query(resources) {
	      return new Query(this, this.pluralName(), resources, this.hasMany, this.belongsTo);
	    }
	  }, {
	    key: "pluralName",
	    value: function pluralName() {
	      return this.plural ? this.plural : lowerCaseFirst(pluralize(this.name));
	    }
	  }, {
	    key: "singularName",
	    value: function singularName() {
	      return this.singular ? this.singular : lowerCaseFirst(pluralize(this.name, 1));
	    }
	  }]);

	  function BaseModel(resources, attributes) {
	    var _this = this;

	    var hasMany = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	    var belongsTo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	    _classCallCheck$b(this, BaseModel);

	    Object.entries(attributes).forEach(function (_ref) {
	      var _ref2 = _slicedToArray$4(_ref, 2),
	          key = _ref2[0],
	          value = _ref2[1];

	      _this[key] = value;
	    });

	    if (hasMany.forEach) {
	      hasMany.forEach(function (relationship) {
	        return _this._buildHasManyQuery(_this, resources, relationship);
	      });
	    }

	    if (belongsTo.forEach) {
	      belongsTo.forEach(function (relationship) {
	        var relationshipKey = relationship.singularName();
	        if (!_this[relationshipKey]) {
	          _this[relationshipKey] = function () {
	            var ParentClass = _this.constructor;
	            var ChildClass = relationship;

	            var childId = void 0;
	            try {
	              childId = resources[ParentClass.pluralName()][_this.id].relationships[ChildClass.singularName()].data.id;
	            } catch (e) {}

	            return ChildClass.query(resources).find(childId);
	          };
	        }
	      });
	    }
	  }

	  _createClass$2(BaseModel, [{
	    key: "toObject",
	    value: function toObject(relationships) {
	      var _this2 = this;

	      return Object.getOwnPropertyNames(this).reduce(function (obj, prop) {
	        if (!isFunction$1(_this2[prop])) {
	          obj[prop] = _this2[prop];
	        } else if (relationships && relationships.includes(prop) && isFunction$1(_this2[prop])) {
	          obj[prop] = _this2[prop]().toObject();
	        }
	        return obj;
	      }, {});
	    }
	  }, {
	    key: "_filterResources",
	    value: function _filterResources(resource, resources, relationship, relationshipKey) {
	      var _extends2;

	      var currentResourceKey = resource.constructor.pluralName();

	      var resourceClass = resource.constructor;
	      var relationshipClass = relationship;
	      return _extends$7({}, resources, (_extends2 = {}, _defineProperty$3(_extends2, currentResourceKey, resources[currentResourceKey][resource.id]), _defineProperty$3(_extends2, relationshipKey, relationshipClass.query(resources).whereRelated(resourceClass, {
	        id: resource.id
	      }).currentResources), _extends2));
	    }
	  }, {
	    key: "_buildHasManyQuery",
	    value: function _buildHasManyQuery(resource, resources, relationship) {
	      var relationshipKey = relationship.pluralName();
	      if (!resource[relationshipKey]) {
	        resource[relationshipKey] = function () {
	          var newResouces = resource._filterResources(resource, resources, relationship, relationshipKey);

	          return new Query(relationship, relationshipKey, newResouces, relationship.hasMany, relationship.belongsTo);
	        };
	      }
	    }
	  }]);

	  return BaseModel;
	}();

	exports.Actions = Actions;
	exports.BaseModel = BaseModel;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
