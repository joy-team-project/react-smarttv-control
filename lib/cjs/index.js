'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var TYPE_KEYDOWN = {
    UP: "up",
    DOWN: "down",
    ENTER: "enter",
    LEFT: "left",
    RIGHT: "right",
    BACKSPACE: "backspace",
    BACK_TIZEN: "BackTizen",
    BACK_TV: "BackTV",
    REWIND_TV: "Prev",
    FAST_FORWARD_TV: "Next",
    PLAYTV: "Play",
    STOPTV: "Stop",
    PLAY_PAUSE_TV: "PlayPause",
    PAUSE_TV: "Pause",
    CH_UP: "ChUp",
    CH_DOWN: "ChDown",
    NUM_0: "0",
    NUM_1: "1",
    NUM_2: "2",
    NUM_3: "3",
    NUM_4: "4",
    NUM_5: "5",
    NUM_6: "6",
    NUM_7: "7",
    NUM_8: "8",
    NUM_9: "9",
};
var customKeyCodes = {
    27: TYPE_KEYDOWN.BACK_TIZEN,
    106: TYPE_KEYDOWN.BACK_TIZEN,
    111: TYPE_KEYDOWN.BACK_TIZEN,
    10009: TYPE_KEYDOWN.BACK_TIZEN,
    461: TYPE_KEYDOWN.BACK_TV,
    412: TYPE_KEYDOWN.REWIND_TV,
    415: TYPE_KEYDOWN.PLAYTV,
    417: TYPE_KEYDOWN.FAST_FORWARD_TV,
    19: TYPE_KEYDOWN.PAUSE_TV,
    413: TYPE_KEYDOWN.STOPTV,
    10252: TYPE_KEYDOWN.PLAY_PAUSE_TV,
    427: TYPE_KEYDOWN.CH_UP,
    33: TYPE_KEYDOWN.CH_UP,
    428: TYPE_KEYDOWN.CH_DOWN,
    34: TYPE_KEYDOWN.CH_DOWN,
    48: TYPE_KEYDOWN.NUM_0,
    49: TYPE_KEYDOWN.NUM_1,
    50: TYPE_KEYDOWN.NUM_2,
    51: TYPE_KEYDOWN.NUM_3,
    52: TYPE_KEYDOWN.NUM_4,
    53: TYPE_KEYDOWN.NUM_5,
    54: TYPE_KEYDOWN.NUM_6,
    55: TYPE_KEYDOWN.NUM_7,
    56: TYPE_KEYDOWN.NUM_8,
    57: TYPE_KEYDOWN.NUM_9,
};
var KEYCODE_FULL_DEFINE = __assign({ 38: TYPE_KEYDOWN.UP, 40: TYPE_KEYDOWN.DOWN, 37: TYPE_KEYDOWN.LEFT, 39: TYPE_KEYDOWN.RIGHT, 13: TYPE_KEYDOWN.ENTER, 8: TYPE_KEYDOWN.BACKSPACE }, customKeyCodes);

var MEDIA = [
    TYPE_KEYDOWN.FAST_FORWARD_TV,
    TYPE_KEYDOWN.REWIND_TV,
    TYPE_KEYDOWN.STOPTV,
    TYPE_KEYDOWN.PLAYTV,
    TYPE_KEYDOWN.PAUSE_TV,
    TYPE_KEYDOWN.PLAY_PAUSE_TV,
];
var NUMBOARD = [
    TYPE_KEYDOWN.NUM_0,
    TYPE_KEYDOWN.NUM_1,
    TYPE_KEYDOWN.NUM_2,
    TYPE_KEYDOWN.NUM_3,
    TYPE_KEYDOWN.NUM_4,
    TYPE_KEYDOWN.NUM_5,
    TYPE_KEYDOWN.NUM_6,
    TYPE_KEYDOWN.NUM_7,
    TYPE_KEYDOWN.NUM_8,
    TYPE_KEYDOWN.NUM_9,
];
var defaultListEvent = [
    TYPE_KEYDOWN.UP,
    TYPE_KEYDOWN.DOWN,
    TYPE_KEYDOWN.LEFT,
    TYPE_KEYDOWN.RIGHT,
    TYPE_KEYDOWN.ENTER,
    TYPE_KEYDOWN.BACKSPACE,
];
var getHandlerKeydown = function (_a) {
    var _b = _a.numboard, numboard = _b === void 0 ? false : _b, _c = _a.listEvent, listEvent = _c === void 0 ? [] : _c, _d = _a.ch, ch = _d === void 0 ? false : _d, _e = _a.media, media = _e === void 0 ? false : _e, id = _a.id, callback = _a.callback, arg = __rest(_a, ["numboard", "listEvent", "ch", "media", "id", "callback"]);
    var handlers = {};
    if (!callback || typeof callback !== "function")
        return handlers;
    listEvent = __spreadArray(__spreadArray([], __read(listEvent), false), __read(defaultListEvent), false);
    if (numboard) {
        listEvent = __spreadArray(__spreadArray([], __read(listEvent), false), __read(NUMBOARD), false);
    }
    if (media) {
        listEvent = __spreadArray(__spreadArray([], __read(listEvent), false), __read(MEDIA), false);
    }
    if (ch) {
        listEvent = __spreadArray(__spreadArray([], __read(listEvent), false), [TYPE_KEYDOWN.CH_DOWN, TYPE_KEYDOWN.CH_UP], false);
    }
    var _loop_1 = function (index) {
        var funcAction = function (keyEvent) {
            callback(__assign({ type: listEvent[index], idElement: id, e: keyEvent }, arg));
        };
        handlers[listEvent[index]] = funcAction;
        if (listEvent[index] === TYPE_KEYDOWN.BACKSPACE) {
            handlers[TYPE_KEYDOWN.BACK_TIZEN] = funcAction;
            handlers[TYPE_KEYDOWN.BACK_TV] = funcAction;
        }
    };
    for (var index = 0; index < listEvent.length; index++) {
        _loop_1(index);
    }
    return handlers;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$1.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

if (process.env.NODE_ENV !== 'production') ;

if (process.env.NODE_ENV !== 'production') ;

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = _objectWithoutPropertiesLoose$6(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = _objectWithoutPropertiesLoose$6(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}

// Lớp wrap lại Component với việc kiểm tra kĩ hơn trạng thái mounted của Component
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = true;
        _this.displayName = "";
        _this.setMounted(true);
        return _this;
    }
    BaseComponent.prototype.getMounted = function () {
        return this.mounted;
    };
    BaseComponent.prototype.setMounted = function (mounted) {
        this.mounted = mounted;
    };
    BaseComponent.prototype._componentDidMount = function () { };
    BaseComponent.prototype.componentDidMount = function () {
        var _a;
        this.setMounted(true);
        (_a = this._componentDidMount) === null || _a === void 0 ? void 0 : _a.call(this);
    };
    BaseComponent.prototype._componentWillUnmount = function () { };
    BaseComponent.prototype.componentWillUnmount = function () {
        var _a, _b;
        this.setMounted(false);
        (_b = (_a = this._componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call) === null || _b === void 0 ? void 0 : _b.call(_a, this);
    };
    BaseComponent.prototype.callbackSafe = function (cb) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.mounted)
            return;
        cb && ((_a = cb === null || cb === void 0 ? void 0 : cb.call) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([cb, this], __read(args), false)));
    };
    BaseComponent.prototype.setStateSafe = function (state, callback) {
        if (!this.mounted)
            return;
        this.setState(state, callback);
    };
    BaseComponent.prototype.renderContent = function () {
        return null;
    };
    BaseComponent.prototype.render = function () {
        return this.renderContent();
    };
    return BaseComponent;
}(React__default["default"].Component));
BaseComponent.prototype.shouldComponentUpdate = shouldComponentUpdate;

var raf$2 = {exports: {}};

var performanceNow = {exports: {}};

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    performanceNow.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    performanceNow.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    performanceNow.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    performanceNow.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);

var now = performanceNow.exports
  , root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i$2 = 0; !raf && i$2 < vendors.length; i$2++) {
  raf = root[vendors[i$2] + 'Request' + suffix];
  caf = root[vendors[i$2] + 'Cancel' + suffix]
      || root[vendors[i$2] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

raf$2.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
raf$2.exports.cancel = function() {
  caf.apply(root, arguments);
};
raf$2.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

var raf$1 = raf$2.exports;

var _this = undefined;
var nowCustom = function () {
    try {
        return window.performance.now();
    }
    catch (error) {
        return Date.now();
    }
};
var _now = nowCustom;
var setRequestTimeout = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var start = _now(), 
    // eslint-disable-next-line no-new-object
    handle = {};
    var loop = function () {
        var current = _now(), delta = current - start;
        // console.log("loop", current, ...args);
        delta >= delay ? fn.call.apply(fn, __spreadArray([_this], __read(args), false)) : (handle.value = raf$1(loop));
    };
    handle.value = raf$1(loop);
    //   console.log(handle);
    return handle;
};
var clearRequestTimeout = function (handle) {
    if (typeof handle === "undefined" || handle === null)
        return;
    raf$1.cancel(handle.value);
};
var wrapperFactory = function () {
    var state = {
        cancelToken: 0,
    };
    var resetCancelToken = function () {
        state.cancelToken = 0;
    };
    var wrapper = function (cbThis, cb) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        state.callbackThis = cbThis;
        state.args = args;
        if (state.cancelToken) {
            return;
        }
        if ("requestAnimationFrame" in window) {
            state.cancelToken = window.requestAnimationFrame(function () {
                cb.apply(state.callbackThis, state.args);
                resetCancelToken();
            });
        }
        else {
            cb.apply(state.callbackThis, state.args);
            state.cancelToken = window.setTimeout(resetCancelToken, 1000 / 60);
        }
    };
    wrapper.cancel = function () {
        if ("requestAnimationFrame" in window) {
            window.cancelAnimationFrame(state.cancelToken);
        }
        window.clearTimeout(state.cancelToken);
        resetCancelToken();
    };
    return wrapper;
};
var throttleFactory = function (callback, thisArg) {
    var argArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argArray[_i - 2] = arguments[_i];
    }
    var wrapper = wrapperFactory();
    var argCount = arguments.length;
    var throttledCallback = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        wrapper.apply(void 0, __spreadArray(__spreadArray([argCount > 1 ? thisArg : this, callback], __read(argArray), false), __read(args), false));
    };
    throttledCallback.cancel = function () { return wrapper.cancel(); };
    return throttledCallback;
};
var smoothFunction = function (callback) {
    var throttledCallback = throttleFactory(callback);
    throttledCallback.bind = throttleFactory.bind(null, callback);
    return throttledCallback;
};
var DOMUtil = {
    documentCache: window.document,
    bodyCache: window.document.body,
    headCache: window.document.head,
};

var noop = function () { };
var devLogger = {
    trace: noop,
    debug: noop,
    log: noop,
    warn: noop,
    info: noop,
    error: noop,
};
var exportedLogger = devLogger;
var logger = exportedLogger;

var index_es = {exports: {}};

/**
 * ISC License
 *
 * Copyright (c) 2018, Aleck Greenham
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

function _typeof$b(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$b = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$b = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$b(obj);
}

function _classCallCheck$r(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$q(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$q(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$q(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$q(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$2.apply(this, arguments);
}

function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$e(target, key, source[key]);
    });
  }

  return target;
}

function _inherits$a(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$a(subClass, superClass);
}

function _getPrototypeOf$a(o) {
  _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$a(o);
}

function _setPrototypeOf$a(o, p) {
  _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$a(o, p);
}

function isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct$1(Parent, args, Class) {
  if (isNativeReflectConstruct$1()) {
    _construct$1 = Reflect.construct;
  } else {
    _construct$1 = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$a(instance, Class.prototype);
      return instance;
    };
  }

  return _construct$1.apply(null, arguments);
}

function _isNativeFunction$1(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper$1 = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction$1(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct$1(Class, arguments, _getPrototypeOf$a(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$a(Wrapper, Class);
  };

  return _wrapNativeSuper$1(Class);
}

function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$5(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized$a(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$a(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$a(self);
}

function _superPropBase$3(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf$a(object);
    if (object === null) break;
  }

  return object;
}

function _get$3(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get$3 = Reflect.get;
  } else {
    _get$3 = function _get(target, property, receiver) {
      var base = _superPropBase$3(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get$3(target, property, receiver || target);
}

function _toConsumableArray$3(arr) {
  return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3();
}

function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray$3(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function dictionaryFrom$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;return a.reduce(function(a,c){return a[c]=b||{value:c},a},{})}

var _defaultConfiguration$1={logLevel:"warn",defaultKeyEvent:"keydown",defaultComponent:"div",defaultTabIndex:"-1",ignoreTags:["input","select","textarea"],enableHardSequences:!1,ignoreKeymapAndHandlerChangesByDefault:!0,ignoreEventsCondition:function c(a){var b=a.target;if(b&&b.tagName){var d=b.tagName.toLowerCase();return Configuration$1.option("_ignoreTagsDict")[d]||b.isContentEditable}return !1},ignoreRepeatedEventsWhenKeyHeldDown:!0,simulateMissingKeyPressEvents:!0,stopEventPropagationAfterHandling:!0,stopEventPropagationAfterIgnoring:!0,allowCombinationSubmatches:!1,customKeyCodes:{}},_configuration$1=_objectSpread$a({},_defaultConfiguration$1);_configuration$1._ignoreTagsDict=dictionaryFrom$1(_configuration$1.ignoreTags,!0);var Configuration$1=function(){function a(){_classCallCheck$r(this,a);}return _createClass$q(a,null,[{key:"init",value:function e(a){var b=this,c=a.ignoreTags,d=a.customKeyCodes;c&&(a._ignoreTagsDict=dictionaryFrom$1(a.ignoreTags)),d&&(a._customKeyNamesDict=dictionaryFrom$1(Object.values(a.customKeyCodes))),-1!==["verbose","debug","info"].indexOf(a.logLevel)&&console.warn("React HotKeys: You have requested log level '".concat(a.logLevel,"' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.")),Object.keys(a).forEach(function(c){b.set(c,a[c]);});}},{key:"set",value:function c(a,b){_configuration$1[a]=b;}},{key:"reset",value:function b(a){_configuration$1[a]=_defaultConfiguration$1[a];}},{key:"option",value:function b(a){return _configuration$1[a]}}]),a}();

var Logger$1=function(){function a(){var b=this,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"warn";if(_classCallCheck$r(this,a),_defineProperty$e(this,"verbose",this.noop),_defineProperty$e(this,"debug",this.noop),_defineProperty$e(this,"info",this.noop),_defineProperty$e(this,"warn",this.noop),_defineProperty$e(this,"error",this.noop),this.logLevel=this.constructor.levels[c],this.logLevel>=this.constructor.levels.error)this.error=console.error;else return;if(this.logLevel>=this.constructor.levels.warn)this.warn=console.warn;else return;["info","debug","verbose"].some(function(a){return !(b.logLevel>=b.constructor.levels[a])||(b[a]=console.log,!1)});}return _createClass$q(a,[{key:"noop",value:function a(){}}]),a}();_defineProperty$e(Logger$1,"logIcons",["\uD83D\uDCD5","\uD83D\uDCD7","\uD83D\uDCD8","\uD83D\uDCD9"]),_defineProperty$e(Logger$1,"componentIcons",["\uD83D\uDD3A","\u2B50\uFE0F","\uD83D\uDD37","\uD83D\uDD36","\u2B1B\uFE0F"]),_defineProperty$e(Logger$1,"eventIcons",["\u2764\uFE0F","\uD83D\uDC9A","\uD83D\uDC99","\uD83D\uDC9B","\uD83D\uDC9C","\uD83E\uDDE1"]),_defineProperty$e(Logger$1,"levels",{none:0,error:1,warn:2,info:3,debug:4,verbose:5});

var KeyEventType$1={keydown:0,keypress:1,keyup:2};

var ModifierFlagsDictionary$1={Shift:["shiftKey"],Meta:["metaKey"],Control:["ctrlKey"],Alt:["altKey"]};

var ShiftedKeysDictionary$1={"`":["~"],1:["!"],2:["@","\""],3:["#","\xA3"],4:["$"],5:["%"],6:["^"],7:["&"],8:["*"],9:["("],0:[")"],"-":["_"],"=":["plus"],";":[":"],"'":["\"","@"],",":["<"],".":[">"],"/":["?"],"\\":["|"],"[":["{"],"]":["}"],"#":["~"]};

function resolveShiftedAlias$1(a){return ShiftedKeysDictionary$1[a]||[1===a.length?a.toUpperCase():a]}

function hasKey$1(a,b){return a.hasOwnProperty(b)}

function invertArrayDictionary$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(a).reduce(function(c,d){var e=a[d];return e.forEach(function(a){hasKey$1(c,a)||(c[a]=[]),c[a].push(d);}),b.includeOriginal&&(!hasKey$1(c,d)&&(c[d]=[]),c[d]=[].concat(_toConsumableArray$3(c[d]),_toConsumableArray$3(e))),c},{})}

var UnshiftedKeysDictionary$1=invertArrayDictionary$1(ShiftedKeysDictionary$1);

function resolveUnshiftedAlias$1(a){return UnshiftedKeysDictionary$1[a]||[1===a.length?a.toLowerCase():a]}

var KeyOSAndLayoutAliasesDictionary$2={};var KeyOSAndLayoutAliasesDictionary$1$1 = invertArrayDictionary$1(KeyOSAndLayoutAliasesDictionary$2,{includeOriginal:!0});

function isString$1(a){return "string"==typeof a}

function stripSuperfluousWhitespace$1(a){return isString$1(a)?a.trim().replace(/\s+/g," "):a}

var MousetrapToReactKeyNamesDictionary$1={tab:"Tab",capslock:"CapsLock",shift:"Shift",meta:"Meta",alt:"Alt",ctrl:"Control",space:" ",spacebar:" ",escape:"Escape",esc:"Escape",left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown",return:"Enter",del:"Delete",command:"Meta",option:"Alt",enter:"Enter",backspace:"Backspace",ins:"Insert",pageup:"PageUp",pagedown:"PageDown",end:"End",home:"Home",contextmenu:"ContextMenu",numlock:"Clear"};

var KeyShorthandDictionary$1={cmd:"Meta"};

function standardizeKeyName$1(a){var b=a.toLowerCase();return MousetrapToReactKeyNamesDictionary$1[b]||KeyShorthandDictionary$1[b]||(a.match(/^f\d+$/)?a.toUpperCase():a)}

var translateToKey$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};

var NonPrintableKeysDictionary$1=dictionaryFrom$1(Object.values(translateToKey$1),!0);

function isNonPrintableKeyName$1(a){return !!NonPrintableKeysDictionary$1[a]}

function isCustomKeyName$1(a){return Configuration$1.option("_customKeyNamesDict")[a]}

function isValidKey$1(a){return isNonPrintableKeyName$1(a)||String.fromCharCode(a.charCodeAt(0))===a||isCustomKeyName$1(a)}var InvalidKeyNameError$1=function(a){function b(){var a,c;_classCallCheck$r(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn$a(this,(a=_getPrototypeOf$a(b)).call.apply(a,[this].concat(e))),_defineProperty$e(_assertThisInitialized$a(_assertThisInitialized$a(c)),"name","InvalidKeyNameError"),c}return _inherits$a(b,a),b}(_wrapNativeSuper$1(Error));

function normalizedCombinationId$1(a){return a.sort().join("+")}var KeySequenceParser$1=function(){function a(){_classCallCheck$r(this,a);}return _createClass$q(a,null,[{key:"parse",value:function k(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=stripSuperfluousWhitespace$1(a),d=c.split(" ");try{var e=d.slice(0,d.length-1),f=d[d.length-1],g=e.map(function(a){var c=parseCombination$1(a,b);return normalizedCombinationId$1(Object.keys(c))}).join(" "),h=parseCombination$1(f,b),i=normalizedCombinationId$1(Object.keys(h)),j={id:i,keyDictionary:h,keyEventType:b.keyEventType,size:Object.keys(h).length};return {sequence:{prefix:g,size:e.length+1},combination:j}}catch(a){return {sequence:null,combination:null}}}}]),a}();function parseCombination$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return a.replace(/^\+|(\s|[^+]\+)\+/,"$1plus").split("+").reduce(function(a,c){var d=standardizeKeyName$1(c);if(b.ensureValidKeys&&!isValidKey$1(d))throw new InvalidKeyNameError$1;return a[d]=!0,a},{})}

var AltedKeysDictionary$1={"`":["`"],1:["\xA1"],2:["\u2122"],3:["\xA3"],4:["\xA2"],5:["\u221E"],6:["\xA7"],7:["\xB6"],8:["\u2022"],9:["\xAA"],0:["\xBA"],"-":["\u2013"],"=":["\u2260"],a:["\xE5"],b:["\u222B"],c:["\xE7"],d:["\u2202"],e:["\xB4"],f:["\u0192"],g:["\xA9"],h:["\u02D9"],i:["\u02C6"],j:["\u2206"],k:["\u02DA"],l:["\xAC"],m:["\xB5"],n:["\u02DC"],o:["\xF8"],p:["\u03C0"],q:["\u0153"],r:["\xAE"],s:["\xDF"],t:["\u2020"],u:["\xA8"],v:["\u221A"],w:["\u2211"],x:["\u2248"],y:["\xA5"],z:["\u03A9"],"[":["\u201C"],"]":["\u2018"],"\\":["\xAB"],"'":["\xE6"],";":["\u2026"],",":["\u2264"],".":["\u2265"],"/":["\xF7"]};

var UnaltedKeysDictionary$1=invertArrayDictionary$1(AltedKeysDictionary$1);

function resolveUnaltedAlias$1(a){return UnaltedKeysDictionary$1[a]||[a]}

function resolveAltedAlias$1(a){return AltedKeysDictionary$1[a]||[a]}

var AltShiftedKeysDictionary$1={"`":["`"],1:["\u2044"],2:["\u20AC"],3:["\u2039"],4:["\u203A"],5:["\uFB01"],6:["\uFB02"],7:["\u2021"],8:["\xB0"],9:["\xB7"],0:["\u201A"],"-":["\u2014"],"=":["\xB1"],a:["\xC5"],b:["\u0131"],c:["\xC7"],d:["\xCE"],e:["\xB4"],f:["\xCF"],g:["\u02DD"],h:["\xD3"],i:["\u02C6"],j:["\xD4"],k:["\uF8FF"],l:["\xD2"],m:["\xC2"],n:["\u02DC"],o:["\xD8"],p:["\u03C0"],q:["\u0152"],r:["\u2030"],s:["\xCD"],t:["\xCE"],u:["\xA8"],v:["\u25CA"],w:["\u201E"],x:["\u02DB"],y:["\xC1"],z:["\xB8"],"[":["\u201D"],"]":["\u2019"],"\\":["\xBB"],"'":["\xC6"],";":["\xDA"],",":["\xAF"],".":["\u02D8"]};

var UnaltShiftedKeysDictionary$1=invertArrayDictionary$1(AltShiftedKeysDictionary$1);

function resolveUnaltShiftedAlias$1(a){return UnaltShiftedKeysDictionary$1[a]||resolveUnshiftedAlias$1(a)}

function resolveAltShiftedAlias$1(a){return AltShiftedKeysDictionary$1[a]||[a]}

var KeyCombinationSerializer$1=function(){function a(){_classCallCheck$r(this,a);}return _createClass$q(a,null,[{key:"serialize",value:function f(a){var b=a.Shift,c=a.Alt,d={},e=Object.keys(a).sort();return e.forEach(function(a){var e=[];if(b){if(c){var f=resolveUnaltShiftedAlias$1(a),g=resolveAltShiftedAlias$1(a);e=[].concat(_toConsumableArray$3(e),[a],_toConsumableArray$3(f),_toConsumableArray$3(g));}else {var h=resolveUnshiftedAlias$1(a),i=resolveShiftedAlias$1(a);e=[].concat(_toConsumableArray$3(e),[a],_toConsumableArray$3(h),_toConsumableArray$3(i));}}else if(c){var j=resolveUnaltedAlias$1(a),k=resolveAltedAlias$1(a);e=[].concat(_toConsumableArray$3(e),[a],_toConsumableArray$3(j),_toConsumableArray$3(k));}else {e.push(a);var m=KeyOSAndLayoutAliasesDictionary$1$1[a];m&&(e=[].concat(_toConsumableArray$3(e),_toConsumableArray$3(m)));}var l=Object.keys(d);0<l.length?l.forEach(function(a){e.forEach(function(b){d[a+"+".concat(b)]=_objectSpread$a({},d[a],_defineProperty$e({},b,!0));}),delete d[a];}):e.forEach(function(a){d[a]=_defineProperty$e({},a,!0);});}),Object.values(d).map(function(a){return Object.keys(a).sort().join("+")})}},{key:"isValidKeySerialization",value:function b(a){return !!(0<a.length)&&!!KeySequenceParser$1.parse(a,{ensureValidKeys:!0}).combination}}]),a}();

var KeyEventSequenceIndex$1={previous:0,current:1};

function resolveKeyAlias$1(a){return KeyOSAndLayoutAliasesDictionary$1$1[a]||[a]}

function applicableAliasFunctions$1(a){if(a.Shift)return a.Alt?[resolveAltShiftedAlias$1,resolveUnaltShiftedAlias$1]:[resolveShiftedAlias$1,resolveUnshiftedAlias$1];if(a.Alt)return [resolveAltedAlias$1,resolveUnaltedAlias$1];var b=function(a){return [a]};return [b,b]}

function isUndefined$1(a){return "undefined"==typeof a}

var KeyEventState$1={unseen:0,seen:1,simulated:2};

var KeyEventStateArrayManager$1=function(){function a(){_classCallCheck$r(this,a);}return _createClass$q(a,null,[{key:"newRecord",value:function d(a,b){var c=[KeyEventState$1.unseen,KeyEventState$1.unseen,KeyEventState$1.unseen];if(!isUndefined$1(a))for(var e=0;e<=a;e++)c[e]=b;return c}},{key:"setBit",value:function d(a,b,c){return a[b]=c,a}},{key:"clone",value:function d(a){for(var b=this.newRecord(),c=0;c<a.length;c++)b[c]=a[c];return b}}]),a}();

function isObject$1(a){return !Array.isArray(a)&&"object"===_typeof$b(a)&&null!==a}

function isEmpty$1(a){return isObject$1(a)?0===Object.keys(a).length:!a||0===a.length}

function size$1(a){return isObject$1(a)?Object.keys(a).length:a.length}

var KeyCombination$1=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck$r(this,a),this._keys=b,this._includesKeyUp=!1,this._update();}return _createClass$q(a,[{key:"getIds",value:function a(){return this._ids}},{key:"getKeyAliases",value:function a(){return this._keyAliases}},{key:"getNormalizedKeyName",value:function d(a){var b=this._keys[a];if(b)return a;var c=this._keyAliases[a];return c?c:a}},{key:"getNumberOfKeys",value:function a(){return size$1(this._keys)}},{key:"any",value:function a(){return 0<Object.keys(this._getKeyStates()).length}},{key:"isEnding",value:function a(){return this._includesKeyUp}},{key:"hasEnded",value:function a(){return isEmpty$1(this.keysStillPressedDict())}},{key:"addKey",value:function c(a,b){this._setKeyState(a,[KeyEventStateArrayManager$1.newRecord(),KeyEventStateArrayManager$1.newRecord(KeyEventType$1.keydown,b)]);}},{key:"setKeyState",value:function g(a,b,c){var d=this._getKeyState(a);if(this.isKeyIncluded(a)){var e=KeyEventStateArrayManager$1.clone(d[1]),f=KeyEventStateArrayManager$1.clone(e);KeyEventStateArrayManager$1.setBit(f,b,c),this._setKeyState(a,[e,f]);}else this.addKey(a,c);b===KeyEventType$1.keyup&&(this._includesKeyUp=!0);}},{key:"forEachKey",value:function b(a){return Object.keys(this._keys).forEach(a)}},{key:"some",value:function b(a){return Object.keys(this._keys).some(a)}},{key:"getKeyDictionary",value:function a(){return dictionaryFrom$1(Object.keys(this._getKeyStates()),!0)}},{key:"keysStillPressedDict",value:function b(){var a=this;return Object.keys(this._keys).reduce(function(b,c){return a.isKeyStillPressed(c)&&(b[c]=a._getKeyState(c)),b},{})}},{key:"isKeyIncluded",value:function b(a){return !!this._getKeyState(a)}},{key:"isKeyStillPressed",value:function b(a){return this.isEventTriggered(a,KeyEventType$1.keypress)&&!this.isKeyReleased(a)}},{key:"isKeyReleased",value:function b(a){return this.isEventTriggered(a,KeyEventType$1.keyup)}},{key:"isEventTriggered",value:function c(a,b){return this._getKeyStateType(a,KeyEventSequenceIndex$1.current,b)}},{key:"wasEventPreviouslyTriggered",value:function c(a,b){return this._getKeyStateType(a,KeyEventSequenceIndex$1.previous,b)}},{key:"isKeyPressSimulated",value:function b(a){return this._isKeyEventSimulated(a,KeyEventType$1.keypress)}},{key:"isKeyUpSimulated",value:function b(a){return this._isKeyEventSimulated(a,KeyEventType$1.keyup)}},{key:"describe",value:function a(){return this.getIds()[0]}},{key:"toJSON",value:function a(){return {keys:this._getKeyStates(),ids:this.getIds(),keyAliases:this.getKeyAliases()}}},{key:"_getKeyStateType",value:function e(a,b,c){var d=this._getKeyState(a);return d&&d[b][c]}},{key:"_update",value:function a(){this._ids=KeyCombinationSerializer$1.serialize(this._keys),this._keyAliases=buildKeyAliases$1(this._keys);}},{key:"_isKeyEventSimulated",value:function c(a,b){return this.isEventTriggered(a,b)===KeyEventState$1.simulated}},{key:"_getKeyStates",value:function a(){return this._keys}},{key:"_getKeyState",value:function d(a){var b=this._keys[a];if(b)return b;var c=this._keyAliases[a];if(c)return this._keys[c]}},{key:"_setKeyState",value:function d(a,b){var c=this.getNormalizedKeyName(a);this._keys[c]=b,this._update();}}]),a}();function buildKeyAliases$1(a){return Object.keys(a).reduce(function(b,c){return resolveKeyAlias$1(c).forEach(function(d){applicableAliasFunctions$1(a).forEach(function(a){a(d).forEach(function(a){(a!==c||c!==d)&&(b[a]=c);});});}),b},{})}

var KeyHistory$1=function(){function a(b){var c=b.maxLength,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;_classCallCheck$r(this,a),this._records=[],this._maxLength=c,d?this._push(d):this._push(new KeyCombination$1);}return _createClass$q(a,[{key:"getMostRecentCombinations",value:function b(a){return this._records.slice(-a,-1)}},{key:"any",value:function a(){return this._records.some(function(a){return a.any()})}},{key:"getLength",value:function a(){return this._records.length}},{key:"getCurrentCombination",value:function a(){return this._records[this.getLength()-1]}},{key:"addKeyToCurrentCombination",value:function d(a,b,c){this._ensureInitialKeyCombination(),this.getCurrentCombination().setKeyState(a,b,c);}},{key:"setMaxLength",value:function b(a){this._maxLength=a,this._trimHistory();}},{key:"startNewKeyCombination",value:function d(a,b){this._ensureInitialKeyCombination();var c=new KeyCombination$1(this.getCurrentCombination().keysStillPressedDict());c.addKey(a,b),this._push(c);}},{key:"toJSON",value:function a(){return this._records.map(function(a){return a.toJSON()})}},{key:"_ensureInitialKeyCombination",value:function a(){0===this.getLength()&&this._push(new KeyCombination$1);}},{key:"_push",value:function b(a){this._trimHistory(),this._records.push(a);}},{key:"_trimHistory",value:function a(){for(;this.getLength()>this._maxLength;)this._shift();}},{key:"_shift",value:function a(){this._records.shift();}}]),a}();

var Registry$1=function(){function a(){_classCallCheck$r(this,a),this._registry={};}return _createClass$q(a,[{key:"get",value:function b(a){return this._registry[a]}},{key:"set",value:function c(a,b){this._registry[a]=b;}},{key:"remove",value:function b(a){delete this._registry[a];}},{key:"toJSON",value:function a(){return this._registry}}]),a}();

function arrayFrom$1(a){return Array.isArray(a)?a:a?[a]:[]}

function without$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},d=dictionaryFrom$1(arrayFrom$1(b));return Array.isArray(a)?a.reduce(function(a,b){return d[b]&&(c.stringifyFirst||d[b].value===b)||a.push(b),a},[]):isObject$1(a)?Object.keys(a).reduce(function(b,c){return d[c]||(b[c]=a[c]),b},{}):a}

var ComponentTree$1=function(a){function b(){return _classCallCheck$r(this,b),_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).apply(this,arguments))}return _inherits$a(b,a),_createClass$q(b,[{key:"add",value:function d(a,c){_get$3(_getPrototypeOf$a(b.prototype),"set",this).call(this,a,{childIds:[],parentId:null,keyMap:c});}},{key:"update",value:function e(a,c){var d=_get$3(_getPrototypeOf$a(b.prototype),"get",this).call(this,a);_get$3(_getPrototypeOf$a(b.prototype),"set",this).call(this,a,_objectSpread$a({},d,{keyMap:c}));}},{key:"setParent",value:function c(a,b){this.get(a).parentId=b,this._addChildId(b,a);}},{key:"remove",value:function d(a){var c=this._getParentId(a);this._removeChildId(c,a),_get$3(_getPrototypeOf$a(b.prototype),"remove",this).call(this,a);}},{key:"_getParentId",value:function c(a){var b=this.get(a);return b&&b.parentId}},{key:"_addChildId",value:function c(a,b){this.get(a).childIds.push(b);}},{key:"_removeChildId",value:function d(a,b){var c=this.get(a);c&&(c.childIds=without$1(c.childIds,b));}}]),b}(Registry$1);

function removeAtIndex$1(a,b){return [].concat(_toConsumableArray$3(a.slice(0,b)),_toConsumableArray$3(a.slice(b+1)))}

var ComponentOptionsListIterator$1=function(){function a(b){_classCallCheck$r(this,a),this._list=b,this._position=-1;}return _createClass$q(a,[{key:"getPosition",value:function a(){return this._position}},{key:"getComponent",value:function a(){return this._list.getAtPosition(this.getPosition())}},{key:"next",value:function a(){return this.getPosition()+1<this._list.getLength()?(this._position++,this.getComponent()):null}}]),a}();

var ComponentOptionsList$1=function(){function a(){_classCallCheck$r(this,a),this._list=[],this._idToIndex={},this._longestSequence=1,this._longestSequenceComponentId=null,this._keyMapEventRecord=KeyEventStateArrayManager$1.newRecord();}return _createClass$q(a,[{key:"getNewIterator",value:function a(){return new ComponentOptionsListIterator$1(this)}},{key:"add",value:function g(a,b,c,d){if(this.containsId(a))return this.update(a,b,c,d);var e=this._build(a,b,c,d);this._list.push(e);var f=this._getLastIndex();return this._idToIndex[a]=f}},{key:"containsId",value:function b(a){return !!this.get(a)}},{key:"get",value:function b(a){return this.getAtPosition(this.getIndexById(a))}},{key:"getIndexById",value:function b(a){return this._idToIndex[a]}},{key:"update",value:function h(a,b,c,d){var e=this._isUpdatingComponentWithLongestSequence(a),f=this.getLongestSequence(),g=this._build(a,b,c,d);e&&g.sequenceLength!==f&&(g.sequenceLength>f?this._longestSequence=g.sequenceLength:this._recalculateLongestSequence()),this._list[this.getIndexById(a)]=g;}},{key:"remove",value:function c(a){var b=this._isUpdatingComponentWithLongestSequence(a);this.removeAtPosition(this.getIndexById(a)),b&&this._recalculateLongestSequence();}},{key:"any",value:function a(){return 0!==this.getLength()}},{key:"isRoot",value:function b(a){return this.getIndexById(a)>=this.getLength()-1}},{key:"getLongestSequence",value:function a(){return this._longestSequence}},{key:"anyActionsForEventType",value:function b(a){return !!this._keyMapEventRecord[a]}},{key:"getLength",value:function a(){return this._list.length}},{key:"getAtPosition",value:function b(a){return this._list[a]}},{key:"removeAtPosition",value:function b(a){this._list=removeAtIndex$1(this._list,a);for(var c=a;c<this.getLength();)this._idToIndex[this.getAtPosition(c).componentId]=c,c++;}},{key:"toJSON",value:function a(){return this._list}},{key:"_getLastIndex",value:function a(){return this.getLength()-1}},{key:"_build",value:function i(a,b,c,d){var e=this._applyHardSequences(b,c),f=e.keyMap,g=e.handlers,h=this._buildActionDictionary(_objectSpread$a({},b,f),d,a);return {actions:h,handlers:g,componentId:a,options:d}}},{key:"_isUpdatingComponentWithLongestSequence",value:function b(a){return a===this._getLongestSequenceComponentId()}},{key:"_getLongestSequenceComponentId",value:function a(){return this._longestSequenceComponentId}},{key:"_recalculateLongestSequence",value:function d(){for(var e=this.getNewIterator();e.next();){var a=e.getComponent(),b=a.longestSequence,c=a.componentId;b>this.getLongestSequence()&&(this._longestSequenceComponentId=c,this._longestSequence=b);}}},{key:"_applyHardSequences",value:function c(a,b){return Configuration$1.option("enableHardSequences")?Object.keys(b).reduce(function(c,d){var e=!!a[d];return !e&&KeyCombinationSerializer$1.isValidKeySerialization(d)&&(c.keyMap[d]=d),c.handlers[d]=b[d],c},{keyMap:{},handlers:{}}):{keyMap:a,handlers:b}}},{key:"_buildActionDictionary",value:function e(a,b,c){var d=this;return Object.keys(a).reduce(function(e,f){var g=a[f],h=function(){return isObject$1(g)&&hasKey$1(g,"sequences")?arrayFrom$1(g.sequences):arrayFrom$1(g)}();return h.forEach(function(a){var g=normalizeActionOptions$1(a,b),h=g.keySequence,i=g.keyEventType;d._addActionOptions(e,c,f,h,i);}),e},{})}},{key:"_addActionOptions",value:function i(a,b,c,d,e){var f=KeySequenceParser$1.parse(d,{keyEventType:e}),g=f.sequence,h=f.combination;g.size>this.getLongestSequence()&&(this._longestSequence=g.size,this._longestSequenceComponentId=b),this._keyMapEventRecord[e]=KeyEventState$1.seen,a[c]||(a[c]=[]),a[c].push(_objectSpread$a({prefix:g.prefix,actionName:c,sequenceLength:g.size},h));}}]),a}();function normalizeActionOptions$1(a,b){if(isObject$1(a)){var c=a.sequence,d=a.action;return {keySequence:c,keyEventType:isUndefined$1(d)?KeyEventType$1[b.defaultKeyEvent]:KeyEventType$1[d]}}return {keySequence:a,keyEventType:KeyEventType$1[b.defaultKeyEvent]}}

function indexFromEnd$1(a,b){return a[a.length-(b+1)]}

for(var KeysWithKeyUpHiddenByCmd$1={Enter:!0,Backspace:!0,ArrowRight:!0,ArrowLeft:!0,ArrowUp:!0,ArrowDown:!0,CapsLock:!0},i$1=1;13>i$1;i$1++)KeysWithKeyUpHiddenByCmd$1["F".concat(i$1)]=!0;

function keyupIsHiddenByCmd$1(a){return 1===a.length||hasKey$1(KeysWithKeyUpHiddenByCmd$1,a)}

var KeyCombinationMatcher$1=function(){function a(){_classCallCheck$r(this,a),this._actionConfigs={},this._order=null;}return _createClass$q(a,[{key:"addMatch",value:function f(a,b){if(this._includesMatcherForCombination(a.id)){var c=a.keyEventType,d=a.actionName,e=a.id;this._addHandlerToActionConfig(e,{keyEventType:c,actionName:d,handler:b});}else this._addNewActionConfig(a,b);}},{key:"findMatch",value:function k(a,b,c){this._order||this._setOrder();var d=!0,e=!1,f=void 0;try{for(var g,h=this._order[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this._actionConfigs[i];if(this._matchesActionConfig(a,b,c,j))return j}}catch(a){e=!0,f=a;}finally{try{d||null==h.return||h.return();}finally{if(e)throw f}}return null}},{key:"toJSON",value:function a(){return {actionConfigs:this._actionConfigs,order:this._order}}},{key:"_matchesActionConfig",value:function h(a,b,c,d){if(!canBeMatched$1(a,d))return !1;var e=d.events[c];if(!e)return !1;var f=!1,g=Object.keys(d.keyDictionary).every(function(d){return !!a.isEventTriggered(d,c)&&(b&&b===a.getNormalizedKeyName(d)&&(f=!a.wasEventPreviouslyTriggered(d,c)),!0)});return g&&f}},{key:"_setOrder",value:function b(){var a=Object.values(this._actionConfigs).reduce(function(a,b){var c=b.id,d=b.size;return a[d]||(a[d]=[]),a[d].push(c),a},{});this._order=Object.keys(a).sort(function(c,a){return a-c}).reduce(function(b,c){return b.concat(a[c])},[]);}},{key:"_addNewActionConfig",value:function j(a,b){var c=a.prefix,d=a.sequenceLength,e=a.id,f=a.keyDictionary,g=a.size,h=a.keyEventType,i=a.actionName;this._setCombinationMatcher(e,{prefix:c,sequenceLength:d,id:e,keyDictionary:f,size:g,events:{}}),this._addHandlerToActionConfig(e,{keyEventType:h,actionName:i,handler:b});}},{key:"_addHandlerToActionConfig",value:function g(a,b){var c=b.keyEventType,d=b.actionName,e=b.handler,f=this._getCombinationMatcher(a);this._setCombinationMatcher(a,_objectSpread$a({},f,{events:_objectSpread$a({},f.events,_defineProperty$e({},c,{actionName:d,handler:e}))}));}},{key:"_setCombinationMatcher",value:function c(a,b){this._actionConfigs[a]=b;}},{key:"_getCombinationMatcher",value:function b(a){return this._actionConfigs[a]}},{key:"_includesMatcherForCombination",value:function b(a){return !!this._getCombinationMatcher(a)}}]),a}();function canBeMatched$1(a,b){var c=size$1(b.keyDictionary);return Configuration$1.option("allowCombinationSubmatches")||keyUpIsBeingHidden$1(a)?a.getNumberOfKeys()>=c:a.getNumberOfKeys()===c}function keyUpIsBeingHidden$1(a){return !!a.isKeyStillPressed("Meta")&&a.some(function(a){return keyupIsHiddenByCmd$1(a)})}

var KeyHistoryMatcher$1=function(){function a(){_classCallCheck$r(this,a),this._combinationMatchers={},this._eventRecord=KeyEventStateArrayManager$1.newRecord();}return _createClass$q(a,[{key:"addMatch",value:function d(a,b){var c=this._getOrCreateCombinationMatcher(a.prefix);c.addMatch(a,b),KeyEventStateArrayManager$1.setBit(this._eventRecord,a.keyEventType,KeyEventState$1.seen),(!this._longestSequence||this._longestSequence<a.sequenceLength)&&(this._longestSequence=a.sequenceLength);}},{key:"findMatch",value:function e(a,b,c){var d=this._findCombinationMatcher(a);return d?d.findMatch(a.getCurrentCombination(),a.getCurrentCombination().getNormalizedKeyName(b),c):null}},{key:"hasMatchesForEventType",value:function b(a){return !!this._eventRecord[a]}},{key:"getLongestSequence",value:function a(){return this._longestSequence}},{key:"toJSON",value:function b(){var a=this;return Object.keys(this._combinationMatchers).reduce(function(b,c){var d=a._combinationMatchers[c];return b[c]=d.toJSON(),b},{})}},{key:"_getOrCreateCombinationMatcher",value:function b(a){return this._combinationMatchers[a]||(this._combinationMatchers[a]=new KeyCombinationMatcher$1),this._combinationMatchers[a]}},{key:"_findCombinationMatcher",value:function m(a){var b=a.getMostRecentCombinations(this.getLongestSequence());if(0===b.length)return this._combinationMatchers[""];for(var c=b.map(function(a){return a.getIds()}),d=c.map(function(a){return a.length}),e=Array(c.length).fill(0),f=!1;!f;){var g=e.map(function(a,b){return c[b][a]}),h=g.join(" ");if(this._combinationMatchers[h])return this._combinationMatchers[h];for(var i=0,j=!0;j&&i<e.length;){var k=indexFromEnd$1(e,i),l=(k+1)%(indexFromEnd$1(d,i)||1);e[e.length-(i+1)]=l,j=0==l,j&&i++;}f=i===e.length;}}}]),a}();

var ActionResolver$1=function(){function a(b){_classCallCheck$r(this,a),this._keyMapMatchers=[],this._unmatchedHandlerStatus=[],this._handlersDictionary={},this._keySequencesDictionary={};for(var e=b.getNewIterator();e.next();){var c=e.getComponent(),d=c.handlers;this._unmatchedHandlerStatus.push([Object.keys(d).length,{}]),this._keyMapMatchers.push(new KeyHistoryMatcher$1);}this._componentList=b,this._componentListIterator=b.getNewIterator();}return _createClass$q(a,[{key:"getKeyHistoryMatcher",value:function b(a){if(this._componentHasUnmatchedHandlers(a))for(;this._componentListIterator.next();)this._addHandlersFromComponent(),this._addActionsFromComponent();return this._getKeyHistoryMatcher(a)}},{key:"componentHasActionsBoundToEventType",value:function c(a,b){return this.getKeyHistoryMatcher(a).hasMatchesForEventType(b)}},{key:"findMatchingKeySequenceInComponent",value:function e(a,b,c,d){return this.componentHasActionsBoundToEventType(a,d)?this.getKeyHistoryMatcher(a).findMatch(b,c,d):null}},{key:"_getKeyHistoryMatcher",value:function b(a){return this._keyMapMatchers[a]}},{key:"_addActionsFromComponent",value:function d(){var a=this,b=this._componentListIterator.getComponent(),c=b.actions;Object.keys(c).forEach(function(b){var d=a._getHandlers(b);if(d){var e=d[0],f=a._componentList.getAtPosition(e).handlers[b],g=a._getKeyHistoryMatcher(e),h=c[b];h.forEach(function(b){var c=[b.prefix,b.id].join(" ");a._isClosestHandlerFound(c,b)||(g.addMatch(b,f),a._addKeySequence(c,[e,b.keyEventType]));}),d.forEach(function(c){var d=a._getUnmatchedHandlerStatus(c);d[1][b]||(d[1][b]=!0,d[0]--);});}});}},{key:"_getHandlers",value:function b(a){return this._handlersDictionary[a]}},{key:"_addHandlersFromComponent",value:function d(){var a=this,b=this._componentListIterator.getComponent(),c=b.handlers;Object.keys(c).forEach(function(b){a._addHandler(b);});}},{key:"_addHandler",value:function b(a){this._handlersDictionary[a]||(this._handlersDictionary[a]=[]),this._handlersDictionary[a].push(this._componentListIterator.getPosition());}},{key:"_addKeySequence",value:function c(a,b){this._keySequencesDictionary[a]||(this._keySequencesDictionary[a]=[]),this._keySequencesDictionary[a].push(b);}},{key:"_componentHasUnmatchedHandlers",value:function b(a){return 0<this._getUnmatchedHandlerStatus(a)[0]}},{key:"_getUnmatchedHandlerStatus",value:function b(a){return this._unmatchedHandlerStatus[a]}},{key:"_isClosestHandlerFound",value:function c(a,b){return this._keySequencesDictionary[a]&&this._keySequencesDictionary[a].some(function(a){return a[1]===b.keyEventType})}}]),a}();

function copyAttributes$1(a,b,c){return c.forEach(function(c){hasKey$1(a,c)&&(b[c]=a[c]);}),b}

function describeKeyEventType$1(a){switch(parseInt(a,10)){case 0:return "keydown";case 1:return "keypress";default:return "keyup";}}

function hasKeyPressEvent$1(a){return !isNonPrintableKeyName$1(a)}

function stateFromEvent$1(a){return a.simulated?KeyEventState$1.simulated:KeyEventState$1.seen}

var SEQUENCE_ATTRIBUTES$1=["sequence","action"],KEYMAP_ATTRIBUTES$1=["name","description","group"],AbstractKeyEventStrategy$1=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=1<arguments.length?arguments[1]:void 0;_classCallCheck$r(this,a),this.logger=b.logger||new Logger$1("warn"),this.componentId=-1,this.keyEventManager=c,this._componentTree=new ComponentTree$1,this.rootComponentId=null,this._reset(),this.resetKeyHistory();}return _createClass$q(a,[{key:"_reset",value:function a(){this.componentList=new ComponentOptionsList$1,this._initHandlerResolutionState();}},{key:"_newKeyHistory",value:function a(){return new KeyHistory$1({maxLength:this.componentList.getLongestSequence()})}},{key:"getKeyHistory",value:function a(){return this._keyHistory?this._keyHistory:(this._keyHistory=this._newKeyHistory(),this._keyHistory)}},{key:"_initHandlerResolutionState",value:function a(){this._actionResolver=null;}},{key:"resetKeyHistory",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.keypressEventsToSimulate=[],this.keyupEventsToSimulate=[],this._keyHistory=this.getKeyHistory().any()&&!a.force?new KeyHistory$1({maxLength:this.componentList.getLongestSequence()},new KeyCombination$1(this.getCurrentCombination().keysStillPressedDict())):this._newKeyHistory();}},{key:"getApplicationKeyMap",value:function a(){return null===this.rootComponentId?{}:this._buildApplicationKeyMap([this.rootComponentId],{})}},{key:"_buildApplicationKeyMap",value:function d(a,b){var c=this;return a.forEach(function(a){var d=c._componentTree.get(a),e=d.childIds,f=d.keyMap;f&&Object.keys(f).forEach(function(a){var d=f[a];b[a]={},isObject$1(d)?hasKey$1(d,"sequences")?(copyAttributes$1(d,b[a],KEYMAP_ATTRIBUTES$1),b[a].sequences=c._createSequenceFromConfig(d.sequences)):(copyAttributes$1(d,b[a],KEYMAP_ATTRIBUTES$1),b[a].sequences=[copyAttributes$1(d,{},SEQUENCE_ATTRIBUTES$1)]):b[a].sequences=c._createSequenceFromConfig(d);}),c._buildApplicationKeyMap(e,b);}),b}},{key:"_createSequenceFromConfig",value:function b(a){return arrayFrom$1(a).map(function(a){return isObject$1(a)?copyAttributes$1(a,{},SEQUENCE_ATTRIBUTES$1):{sequence:a}})}},{key:"registerKeyMap",value:function b(a){return this.componentId+=1,this._componentTree.add(this.componentId,a),this.componentId}},{key:"reregisterKeyMap",value:function c(a,b){this._componentTree.update(a,b);}},{key:"registerComponentMount",value:function c(a,b){isUndefined$1(b)?this.rootComponentId=a:this._componentTree.setParent(a,b);}},{key:"deregisterKeyMap",value:function b(a){this._componentTree.remove(a),a===this.rootComponentId&&(this.rootComponentId=null);}},{key:"_addComponent",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;this.componentList.add(a,b,c,d),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());}},{key:"_allKeysAreReleased",value:function a(){return this.getCurrentCombination().hasEnded()}},{key:"getCurrentCombination",value:function a(){return this.getKeyHistory().getCurrentCombination()}},{key:"_shouldSimulate",value:function e(a,b){var c=hasKeyPressEvent$1(b),d=this.getCurrentCombination();return a===KeyEventType$1.keypress?!c||c&&d.isKeyStillPressed("Meta"):a===KeyEventType$1.keyup&&keyupIsHiddenByCmd$1(b)&&d.isKeyReleased("Meta")}},{key:"_cloneAndMergeEvent",value:function d(a,b){var c=Object.keys(ModifierFlagsDictionary$1).reduce(function(b,c){return b[c]=a[c],b},{});return _objectSpread$a({},c,b)}},{key:"_callClosestMatchingHandler",value:function h(a,b,c,d,e){for(this._actionResolver||(this._actionResolver=new ActionResolver$1(this.componentList));e<=d;){this._actionResolver.getKeyHistoryMatcher(e);var f=this._actionResolver.findMatchingKeySequenceInComponent(e,this.getKeyHistory(),b,c);this.getCurrentCombination();if(f){var j=f.events[c];if(Configuration$1.option("allowCombinationSubmatches")){KeyCombinationSerializer$1.serialize(f.keyDictionary);}return j.handler(a),this._stopEventPropagationAfterHandlingIfEnabled(a,e),!0}if(this._actionResolver.componentHasActionsBoundToEventType(e,c));e++;}}},{key:"_stopEventPropagationAfterHandlingIfEnabled",value:function c(a,b){return !!Configuration$1.option("stopEventPropagationAfterHandling")&&(this._stopEventPropagation(a,b),!0)}},{key:"_stopEventPropagation",value:function a(){throw new Error("_stopEventPropagation must be overridden by a subclass")}},{key:"_checkForModifierFlagDiscrepancies",value:function e(a,b,c){var d=this;Object.keys(ModifierFlagsDictionary$1).forEach(function(e){if(b!==e||c!==KeyEventType$1.keyup){var f=d.getCurrentCombination(),g=f.isKeyStillPressed(e);ModifierFlagsDictionary$1[e].forEach(function(b){!1===a[b]&&g&&f.setKeyState(e,KeyEventType$1.keyup,stateFromEvent$1(a));});}});}},{key:"_logPrefix",value:function a(){}}]),a}();

var KeyEventCounter$1=function(){function a(){_classCallCheck$r(this,a);}return _createClass$q(a,null,[{key:"getId",value:function a(){return isUndefined$1(this._id)&&(this._id=0),this._id}},{key:"incrementId",value:function a(){this._id=this.getId()+1;}}]),a}();

function getEventCharCode$1(a){var b,c=a.keyCode;return "charCode"in a?(b=a.charCode,0===b&&13===c&&(b=13)):b=c,10===b&&(b=13),32<=b||13===b?b:0}

var normalizeKey$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"};function reactsGetEventKey$1(a){if(a.key){var b=normalizeKey$1[a.key]||a.key;if("Unidentified"!==b)return b}if("keypress"===a.type){var c=getEventCharCode$1(a);return 13===c?"Enter":String.fromCharCode(c)}return "keydown"===a.type||"keyup"===a.type?translateToKey$1[a.keyCode]||"Unidentified":""}

function getKeyName$1(a){var b=function(){var b=Configuration$1.option("customKeyCodes"),c=a.keyCode||a.charCode;return hasKey$1(b,c)?b[c]:a.nativeEvent?a.key:reactsGetEventKey$1(a)}();return "+"===b?"plus":b}

function isCmdKey$1(a){return "Meta"===a}

var EventResponse$1={unseen:0,ignored:1,seen:2,recorded:3,handled:4};

var EventPropagator$1=function(){function a(b,c){var d=c.logger,e=c.logPrefix;_classCallCheck$r(this,a),this._componentList=b,this._previousPropagation=null,this.logger=d,this._logPrefix=e,this._reset();}return _createClass$q(a,[{key:"_reset",value:function a(){this._previousPosition=-1,this._position=-1,this._actionHandled=!1,this._ignoreEvent=!1,this._observeIgnoredEvents=!1,this._stopping=!1,this._componentId=null,this._key=null,this._type=null;}},{key:"isFirstPropagationStep",value:function b(){var a=this.getPreviousPosition();return -1===a||a>=this._position}},{key:"isForKey",value:function b(a){return this._key===a}},{key:"isForEventType",value:function b(a){return this._type===a}},{key:"startNewPropagationStep",value:function e(a,b,c,d){return this._position=this._componentList.getIndexById(a),this._componentId=a,this.isFirstPropagationStep()&&(KeyEventCounter$1.incrementId(),this._key=b.key,this._type=d),!(b.repeat&&Configuration$1.option("ignoreRepeatedEventsWhenKeyHeldDown"))||(this.ignoreEvent(b),!1)}},{key:"finishPropagationStep",value:function a(){this.isStopped()||this._componentList.isRoot(this._componentId)?(this._previousPropagation=this._clone(),this._reset()):this._previousPosition=this._position;}},{key:"getPreviousPropagation",value:function a(){return this._previousPropagation||(this._previousPropagation=this._clone({copyState:!1})),this._previousPropagation}},{key:"getPreviousPosition",value:function a(){return this._previousPosition}},{key:"observeIgnoredEvents",value:function a(){this._observeIgnoredEvents=!0;}},{key:"ignoreEvent",value:function b(a){return this.setIgnoreEvent(!0),!!(this.isIgnoringEvent()&&Configuration$1.option("stopEventPropagationAfterIgnoring"))&&(this.stop(a),this.finishPropagationStep(),!0)}},{key:"setIgnoreEvent",value:function b(a){this._ignoreEvent=a;}},{key:"isIgnoringEvent",value:function a(){return !this._observeIgnoredEvents&&this._ignoreEvent}},{key:"isStopped",value:function a(){return this._stopping}},{key:"stop",value:function b(a){return !this.isStopped()&&(this._stopping=!0,a.simulated||a.stopPropagation(),!0)}},{key:"isPendingPropagation",value:function b(){var a=this.getPreviousPosition();return -1!==a&&a+1<this._position}},{key:"isHandled",value:function a(){return this._actionHandled}},{key:"setHandled",value:function a(){this._actionHandled=!0;}},{key:"_clone",value:function e(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=b.copyState,d=new a(this._componentList,{logger:this.logger,logPrefix:this._logPrefix});return (void 0===c||c)&&Object.assign(d,this),d}}]),a}();

var FocusOnlyKeyEventStrategy$1=function(a){function b(){var a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0;return _classCallCheck$r(this,b),a=_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).call(this,c,d)),a.focusTreeId=0,a}return _inherits$a(b,a),_createClass$q(b,[{key:"_reset",value:function a(){_get$3(_getPrototypeOf$a(b.prototype),"_reset",this).call(this),this.keypressEventsToSimulate=[],this.focusTreeId+=1,this.eventPropagator=new EventPropagator$1(this.componentList,{logger:this.logger,logPrefix:this._logPrefix.bind(this)});}},{key:"enableHotKeys",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;if(this.resetOnNextFocus&&(this._reset(),this.resetOnNextFocus=!1),!this.componentList.containsId(a))return this._addComponent(a,b,c,d),this.focusTreeId}},{key:"updateEnabledHotKeys",value:function f(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=4<arguments.length?arguments[4]:void 0;a===this.focusTreeId&&this.componentList.containsId(b)&&(this.componentList.update(b,c,d,e),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._initHandlerResolutionState(),void 0);}},{key:"disableHotKeys",value:function d(a,b){this.resetOnNextFocus||(this.resetOnNextFocus=!0);var c=this.eventPropagator.isPendingPropagation();return c}},{key:"handleKeydown",value:function j(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=getKeyName$1(a);if(b!==this.focusTreeId)return this.eventPropagator.ignoreEvent(a),!0;var f=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType$1.keydown);if(f){var g=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType$1.keydown);if(g===EventResponse$1.handled){var h=stateFromEvent$1(a),i=this.getCurrentCombination();i.isKeyIncluded(e)||i.isEnding()?this._startAndLogNewKeyCombination(e,b,c,h):this._addToAndLogCurrentKeyCombination(e,KeyEventType$1.keydown,b,c,h),this._callHandlerIfActionNotHandled(a,e,KeyEventType$1.keydown,c,b);}return this._simulateKeyPressForNonPrintableKeys(a,e,b,c,d),this.eventPropagator.finishPropagationStep(),!1}}},{key:"_howToHandleKeyEvent",value:function g(a,b,c,d,e,f){if(this.eventPropagator.isFirstPropagationStep()){if(e.ignoreEventsCondition(a)&&this.eventPropagator.ignoreEvent(a))return this._eventIsToBeIgnored(a,c,d,f);this._checkForModifierFlagDiscrepancies(a,d,f);}else if(this.eventPropagator.isIgnoringEvent())return this._eventIsToBeIgnored(a,c,d,f);return EventResponse$1.handled}},{key:"_eventIsToBeIgnored",value:function e(a,b,c,d){return EventResponse$1.ignored}},{key:"handleKeyPress",value:function j(a,b,c,d){var e=getKeyName$1(a),f=this.getCurrentCombination();if(f.isKeyPressSimulated(e))return this.eventPropagator.ignoreEvent(a),!0;var g=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType$1.keypress);if(g){var h=b!==this.focusTreeId,i=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType$1.keypress);return this.eventPropagator.isFirstPropagationStep(c)&&f.isKeyIncluded(e)&&this._addToAndLogCurrentKeyCombination(e,KeyEventType$1.keypress,b,c,stateFromEvent$1(a)),i===EventResponse$1.handled&&this._callHandlerIfActionNotHandled(a,e,KeyEventType$1.keypress,c,b),this.eventPropagator.finishPropagationStep(),h}}},{key:"handleKeyUp",value:function j(a,b,c,d){var e=getKeyName$1(a),f=this.getCurrentCombination();if(f.isKeyUpSimulated(e))return this.eventPropagator.ignoreEvent(a),!0;var g=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType$1.keyup);if(g){var h=b!==this.focusTreeId,i=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType$1.keyup);return this.eventPropagator.isFirstPropagationStep(c)&&f.isKeyIncluded(e)&&this._addToAndLogCurrentKeyCombination(e,KeyEventType$1.keyup,b,c,stateFromEvent$1(a)),i===EventResponse$1.handled&&this._callHandlerIfActionNotHandled(a,e,KeyEventType$1.keyup,c,b),this._simulateKeyUpEventsHiddenByCmd(a,e,b,c,d),this.eventPropagator.finishPropagationStep(),h}}},{key:"closeHangingKeyCombination",value:function d(a,b){var c=this.getCurrentCombination();c.isKeyIncluded(a)&&!c.isEventTriggered(a,b)&&c.setKeyState(a,b,KeyEventState$1.simulated);}},{key:"_simulateKeyPressForNonPrintableKeys",value:function f(a,b,c,d,e){this._handleEventSimulation("keypressEventsToSimulate","simulatePendingKeyPressEvents",this._shouldSimulate(KeyEventType$1.keypress,b),{event:a,key:b,focusTreeId:c,componentId:d,options:e});}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function g(a,b,c,d,e){var f=this;isCmdKey$1(b)&&this.getCurrentCombination().forEachKey(function(b){isCmdKey$1(b)||f._handleEventSimulation("keyupEventsToSimulate","simulatePendingKeyUpEvents",f._shouldSimulate(KeyEventType$1.keyup,b),{event:a,key:b,focusTreeId:c,componentId:d,options:e});});}},{key:"_stopEventPropagation",value:function c(a,b){this.eventPropagator.stop(a)&&void 0;}},{key:"getEventPropagator",value:function a(){return this.eventPropagator}},{key:"_startAndLogNewKeyCombination",value:function e(a,b,c,d){this.getKeyHistory().startNewKeyCombination(a,d);}},{key:"_addToAndLogCurrentKeyCombination",value:function f(a,b,c,d,e){this.getKeyHistory().addKeyToCurrentCombination(a,b,e);}},{key:"_handleEventSimulation",value:function j(a,b,c,d){var e=d.event,f=d.key,g=d.focusTreeId,h=d.componentId,i=d.options;if(c&&Configuration$1.option("simulateMissingKeyPressEvents")){var k=this._cloneAndMergeEvent(e,{key:f,simulated:!0});this[a].push({event:k,focusTreeId:g,componentId:h,options:i});}(this.componentList.isRoot(h)||this.eventPropagator.isStopped())&&!this.keyEventManager.isGlobalListenersBound()&&this[b]();}},{key:"simulatePendingKeyPressEvents",value:function a(){this._simulatePendingKeyEvents("keypressEventsToSimulate","handleKeyPress");}},{key:"simulatePendingKeyUpEvents",value:function a(){this._simulatePendingKeyEvents("keyupEventsToSimulate","handleKeyUp");}},{key:"_simulatePendingKeyEvents",value:function d(a,b){var c=this;0<this[a].length&&KeyEventCounter$1.incrementId(),this[a].forEach(function(a){var d=a.event,e=a.focusTreeId,f=a.componentId,g=a.options;c[b](d,e,f,g);}),this[a]=[];}},{key:"_callHandlerIfActionNotHandled",value:function k(a,b,c,d,e){this.getCurrentCombination().describe();if(!this.componentList.anyActionsForEventType(c))return void void 0;if(this.eventPropagator.isHandled());else {var h=this.eventPropagator.getPreviousPosition(),i=this.componentList.getIndexById(d),j=this._callClosestMatchingHandler(a,b,c,i,-1===h?0:h);j&&this.eventPropagator.setHandled();}}},{key:"_logPrefix",value:function h(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Logger$1.logIcons,d=Logger$1.eventIcons,e=Logger$1.componentIcons,f="HotKeys (";if(!1!==b.focusTreeId){var i=isUndefined$1(b.focusTreeId)?this.focusTreeId:b.focusTreeId;f+="F".concat(i).concat(c[i%c.length],"-");}if(!1!==b.eventId){var j=isUndefined$1(b.eventId)?KeyEventCounter$1.getId():b.eventId;f+="E".concat(j).concat(d[j%d.length],"-");}f+="C".concat(a).concat(e[a%e.length]);var g=this.componentList.getIndexById(a);return isUndefined$1(g)||(f+="-P".concat(g).concat(e[g%e.length],":")),"".concat(f,")")}}]),b}(AbstractKeyEventStrategy$1);

function contains$1(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return Array.isArray(a)||isString$1(a)?c.stringifyFirst?!isUndefined$1(a.find(function(a){return a.toString()===b.toString()})):-1!==a.indexOf(b):isObject$1(a)?hasKey$1(a,b):c.stringifyFirst?a.toString()===b.toString():a===b}

function capitalize$1(a){return a.replace(/\b\w/g,function(a){return a.toUpperCase()})}

function normalizeEventName$1(a){return "".concat(capitalize$1(a.slice(0,3))).concat(capitalize$1(a.slice(3)))}

var GlobalKeyEventStrategy$1=function(a){function b(){var a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0;return _classCallCheck$r(this,b),a=_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).call(this,c,d)),a.listenersBound=!1,a.eventOptions={ignoreEventsCondition:Configuration$1.option("ignoreEventsCondition")},a.listeners={},a}return _inherits$a(b,a),_createClass$q(b,[{key:"enableHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;this.eventOptions=e,this._addComponent(a,b,c,d),this._updateDocumentHandlers(),this._initHandlerResolutionState();}},{key:"updateEnabledHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;this.eventOptions=e,this.componentList.update(a,b,c,d),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState();}},{key:"disableHotKeys",value:function b(a){this.componentList.remove(a),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState();}},{key:"_updateDocumentHandlers",value:function c(){var a=this,b=this._listenersShouldBeBound();!this.listenersBound&&b?(Object.values(KeyEventType$1).forEach(function(b){var c=describeKeyEventType$1(b);document["on".concat(c)]=function(b){a.keyEventManager["handleGlobal".concat(normalizeEventName$1(c))](b);};}),this.listenersBound=!0):this.listenersBound&&!b&&(Object.values(KeyEventType$1).forEach(function(b){var c=describeKeyEventType$1(b);delete document["on".concat(c)];}),this.listenersBound=!1);}},{key:"_listenersShouldBeBound",value:function a(){return this.componentList.any()||this.listeners.keyCombination}},{key:"handleKeydown",value:function f(a){var b=getKeyName$1(a);if(a.repeat&&Configuration$1.option("ignoreRepeatedEventsWhenKeyHeldDown"))return !0;this._checkForModifierFlagDiscrepancies(a,b,KeyEventType$1.keydown);var c=this._howReactAppRespondedTo(a,b,KeyEventType$1.keydown);if(c===EventResponse$1.unseen&&this.eventOptions.ignoreEventsCondition(a))return void void 0;if(c!==EventResponse$1.ignored){var d=stateFromEvent$1(a),e=this.getCurrentCombination();e.isKeyIncluded(b)||e.isEnding()?this._startAndLogNewKeyCombination(b,d):this._addToAndLogCurrentKeyCombination(b,KeyEventType$1.keydown,d);}contains$1([EventResponse$1.ignored,EventResponse$1.handled],c)||this._callHandlerIfExists(a,b,KeyEventType$1.keydown),this._simulateKeyPressForNonPrintableKeys(a,b);}},{key:"_howReactAppRespondedTo",value:function e(a,b,c){var d=this.keyEventManager.reactAppHistoryWithEvent(b,c);return d===EventResponse$1.handled?void 0:d===EventResponse$1.ignored?void 0:d===EventResponse$1.seen?void 0:(KeyEventCounter$1.incrementId(),void 0),d}},{key:"handleKeyPress",value:function e(a){var b=getKeyName$1(a);if(a.repeat&&Configuration$1.option("ignoreRepeatedEventsWhenKeyHeldDown"))return !0;var c=this.getCurrentCombination();if(c.isKeyPressSimulated(b))return !0;var d=this._howReactAppRespondedTo(a,b,KeyEventType$1.keypress);return c.isKeyIncluded(b)&&this._addToAndLogCurrentKeyCombination(b,KeyEventType$1.keypress,stateFromEvent$1(a)),d===EventResponse$1.unseen&&(this.keyEventManager.closeHangingKeyCombination(b,KeyEventType$1.keypress),this.eventOptions.ignoreEventsCondition(a))?void void 0:void(!contains$1([EventResponse$1.ignored,EventResponse$1.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType$1.keypress))}},{key:"handleKeyUp",value:function e(a){var b=getKeyName$1(a),c=this.getCurrentCombination();if(c.isKeyUpSimulated(b))return !0;var d=this._howReactAppRespondedTo(a,b,KeyEventType$1.keyup);c.isKeyIncluded(b)&&this._addToAndLogCurrentKeyCombination(b,KeyEventType$1.keyup,stateFromEvent$1(a)),d===EventResponse$1.unseen?(this.keyEventManager.closeHangingKeyCombination(b,KeyEventType$1.keyup),this.eventOptions.ignoreEventsCondition(a)?void 0:!contains$1([EventResponse$1.ignored,EventResponse$1.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType$1.keyup)):!contains$1([EventResponse$1.ignored,EventResponse$1.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType$1.keyup),this._simulateKeyUpEventsHiddenByCmd(a,b),this.listeners.keyCombination&&this._allKeysAreReleased()&&this.listeners.keyCombination({keys:c.getKeyDictionary(),id:c.describe()});}},{key:"_simulateKeyPressForNonPrintableKeys",value:function c(a,b){this.keyEventManager.simulatePendingKeyPressEvents(),this._handleEventSimulation("handleKeyPress",this._shouldSimulate(KeyEventType$1.keypress,b),{event:a,key:b});}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function d(a,b){var c=this;isCmdKey$1(b)&&(this.keyEventManager.simulatePendingKeyUpEvents(),this.getCurrentCombination().forEachKey(function(b){isCmdKey$1(b)||c._handleEventSimulation("handleKeyUp",c._shouldSimulate(KeyEventType$1.keyup,b),{event:a,key:b});}));}},{key:"_startAndLogNewKeyCombination",value:function c(a,b){this.getKeyHistory().startNewKeyCombination(a,b);}},{key:"_addToAndLogCurrentKeyCombination",value:function d(a,b,c){this.getKeyHistory().addKeyToCurrentCombination(a,b,c);}},{key:"_handleEventSimulation",value:function f(a,b,c){var d=c.event,e=c.key;if(b&&Configuration$1.option("simulateMissingKeyPressEvents")){var g=this._cloneAndMergeEvent(d,{key:e,simulated:!0});this[a](g);}}},{key:"_callHandlerIfExists",value:function f(a,b,c){this.getCurrentCombination().describe();return this.componentList.anyActionsForEventType(c)?void(this._callClosestMatchingHandler(a,b,c)):void void 0}},{key:"_callClosestMatchingHandler",value:function e(a,c,d){for(var f,g=this.componentList.getNewIterator();g.next();)if(f=_get$3(_getPrototypeOf$a(b.prototype),"_callClosestMatchingHandler",this).call(this,a,c,d,g.getPosition(),0),f)return void void 0}},{key:"_stopEventPropagation",value:function c(a,b){a.simulated||a.stopPropagation();}},{key:"addKeyCombinationListener",value:function d(a){var b=this,c=function(){delete b.listeners.keyCombination;};return this.listeners.keyCombination=function(b){a(b),c();},this._updateDocumentHandlers(),c}},{key:"_logPrefix",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Logger$1.eventIcons,d=Logger$1.componentIcons,e="HotKeys (GLOBAL";if(!1!==b.eventId){var g=isUndefined$1(b.eventId)?KeyEventCounter$1.getId():b.eventId;e="".concat(e,"-E").concat(g).concat(c[g%c.length]);}return isUndefined$1(a)?"".concat(e,"):"):"".concat(e,"-C").concat(a).concat(d[a%d.length],"):")}}]),b}(AbstractKeyEventStrategy$1);

function isFromFocusOnlyComponent$1(a){return !isUndefined$1(a)}

var KeyEventManager$1=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck$r(this,a),this.logger=b.logger||new Logger$1(Configuration$1.option("logLevel")),this._focusOnlyEventStrategy=new FocusOnlyKeyEventStrategy$1({configuration:b,logger:this.logger},this),this._globalEventStrategy=new GlobalKeyEventStrategy$1({configuration:b,logger:this.logger},this),this.mountedComponentsCount=0;}return _createClass$q(a,null,[{key:"getInstance",value:function c(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.instance||(this.instance=new a(b)),this.instance}},{key:"clear",value:function a(){delete this.instance;}}]),_createClass$q(a,[{key:"getApplicationKeyMap",value:function a(){return Object.assign(this._globalEventStrategy.getApplicationKeyMap(),this._focusOnlyEventStrategy.getApplicationKeyMap())}},{key:"registerKeyMap",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._focusOnlyEventStrategy.registerKeyMap(a)}},{key:"reregisterKeyMap",value:function c(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this._focusOnlyEventStrategy.reregisterKeyMap(a,b);}},{key:"deregisterKeyMap",value:function b(a){this._focusOnlyEventStrategy.deregisterKeyMap(a);}},{key:"registerComponentMount",value:function c(a,b){return this._incrementComponentCount(),this._focusOnlyEventStrategy.registerComponentMount(a,b)}},{key:"registerComponentUnmount",value:function a(){this._decrementComponentCount();}},{key:"_incrementComponentCount",value:function c(){var a=this,b=this.mountedComponentsCount;this.mountedComponentsCount+=1,0===b&&1===this.mountedComponentsCount&&(window.onblur=function(){return a._clearKeyHistory()});}},{key:"_decrementComponentCount",value:function b(){var a=this.mountedComponentsCount;this.mountedComponentsCount-=1,1===a&&0===this.mountedComponentsCount&&delete window.onblur;}},{key:"_clearKeyHistory",value:function a(){this._focusOnlyEventStrategy.resetKeyHistory({force:!0}),this._globalEventStrategy.resetKeyHistory({force:!0});}},{key:"registerGlobalKeyMap",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._globalEventStrategy.registerKeyMap(a)}},{key:"registerGlobalComponentUnmount",value:function a(){this._decrementComponentCount();}},{key:"registerGlobalComponentMount",value:function c(a,b){return this._incrementComponentCount(),this._globalEventStrategy.registerComponentMount(a,b)}},{key:"reregisterGlobalKeyMap",value:function c(a,b){this._globalEventStrategy.reregisterKeyMap(a,b);}},{key:"deregisterGlobalKeyMap",value:function b(a){this._globalEventStrategy.deregisterKeyMap(a);}},{key:"addKeyCombinationListener",value:function b(a){return this._globalEventStrategy.addKeyCombinationListener(a)}},{key:"enableHotKeys",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;return this._focusOnlyEventStrategy.enableHotKeys(a,b,c,d)}},{key:"updateEnabledHotKeys",value:function f(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=4<arguments.length?arguments[4]:void 0;return this._focusOnlyEventStrategy.updateEnabledHotKeys(a,b,c,d,e)}},{key:"disableHotKeys",value:function c(a,b){return this._focusOnlyEventStrategy.disableHotKeys(a,b)}},{key:"handleKeydown",value:function e(a,b,c,d){if(isFromFocusOnlyComponent$1(b))return this._focusOnlyEventStrategy.handleKeydown(a,b,c,d)}},{key:"handleKeyPress",value:function e(a,b,c,d){if(isFromFocusOnlyComponent$1(b))return this._focusOnlyEventStrategy.handleKeyPress(a,b,c,d)}},{key:"handleKeyUp",value:function e(a,b,c,d){if(isFromFocusOnlyComponent$1(b))return this._focusOnlyEventStrategy.handleKeyUp(a,b,c,d)}},{key:"enableGlobalHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.enableHotKeys(a,b,c,d,e)}},{key:"updateEnabledGlobalHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.updateEnabledHotKeys(a,b,c,d,e)}},{key:"disableGlobalHotKeys",value:function b(a){return this._globalEventStrategy.disableHotKeys(a)}},{key:"handleGlobalKeyDown",value:function b(a){return this._globalEventStrategy.handleKeydown(a)}},{key:"handleGlobalKeyPress",value:function b(a){return this._globalEventStrategy.handleKeyPress(a)}},{key:"handleGlobalKeyUp",value:function b(a){return this._globalEventStrategy.handleKeyUp(a)}},{key:"ignoreEvent",value:function b(a){this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(a);}},{key:"observeIgnoredEvents",value:function b(a){this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(a);}},{key:"closeHangingKeyCombination",value:function c(a,b){this._focusOnlyEventStrategy.closeHangingKeyCombination(a,b);}},{key:"reactAppHistoryWithEvent",value:function d(a,b){var c=this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();return c.isForKey(a)&&c.isForEventType(b)?c.isHandled()?EventResponse$1.handled:c.isIgnoringEvent()?EventResponse$1.ignored:EventResponse$1.seen:EventResponse$1.unseen}},{key:"simulatePendingKeyPressEvents",value:function a(){this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();}},{key:"simulatePendingKeyUpEvents",value:function a(){this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();}},{key:"isGlobalListenersBound",value:function a(){return this._globalEventStrategy.listenersBound}}]),a}();

function backwardsCompatibleContext$1(a,b){var c=b.deprecatedAPI,d=c.contextTypes,e=c.childContextTypes,f=b.newAPI.contextType;if("undefined"==typeof React__default["default"].createContext)a.contextTypes=d,a.childContextTypes=e,a.prototype.getChildContext=function(){return this._childContext};else {var g=React__default["default"].createContext(f);a.contextType=g,a.prototype._originalRender=a.prototype.render,a.prototype.render=function(){var a=this._originalRender();return a?React__default["default"].createElement(g.Provider,{value:this._childContext},a):null};}return a}

function withHotKeys$1(a){function b(a,b){return _objectSpread$a({},e[a]||{},b[a]||{})}function c(a){return b("handlers",a)}function d(a){return b("keyMap",a)}var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},f=function(b){function e(a){var b;return _classCallCheck$r(this,e),b=_possibleConstructorReturn$a(this,_getPrototypeOf$a(e).call(this,a)),b._handleFocus=b._handleFocus.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._handleBlur=b._handleBlur.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._handleKeyDown=b._handleKeyDown.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._handleKeyPress=b._handleKeyPress.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._handleKeyUp=b._handleKeyUp.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._componentIsFocused=b._componentIsFocused.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._id=KeyEventManager$1.getInstance().registerKeyMap(a.keyMap),b._childContext={hotKeysParentId:b._id},b}return _inherits$a(e,b),_createClass$q(e,[{key:"render",value:function i(){var b=this.props;b.keyMap;b.handlers;b.allowChanges;b.root;var g=_objectWithoutProperties$5(b,["keyMap","handlers","allowChanges","root"]),h={onFocus:this._wrapFunction("onFocus",this._handleFocus),onBlur:this._wrapFunction("onBlur",this._handleBlur),tabIndex:Configuration$1.option("defaultTabIndex")};return this._shouldBindKeyListeners()&&(h.onKeyDown=this._handleKeyDown,h.onKeyPress=this._handleKeyPress,h.onKeyUp=this._handleKeyUp),React__default["default"].createElement(a,_extends$2({hotKeys:h},g))}},{key:"_shouldBindKeyListeners",value:function b(){var a=d(this.props);return !isEmpty$1(a)||this.props.root||Configuration$1.option("enableHardSequences")&&this._handlersIncludeHardSequences(a,c(this.props))}},{key:"_handlersIncludeHardSequences",value:function c(a,b){return Object.keys(b).some(function(b){return !a[b]&&KeyCombinationSerializer$1.isValidKeySerialization(b)})}},{key:"_wrapFunction",value:function d(a,b){var c=this;return "function"==typeof this.props[a]?function(d){c.props[a](d),b(d);}:b}},{key:"_focusTreeIdsPush",value:function b(a){this._focusTreeIds||(this._focusTreeIds=[]),this._focusTreeIds.push(a);}},{key:"_focusTreeIdsShift",value:function a(){this._focusTreeIds&&this._focusTreeIds.shift();}},{key:"_getFocusTreeId",value:function a(){if(this._focusTreeIds)return this._focusTreeIds[0]}},{key:"componentDidUpdate",value:function e(){var a=KeyEventManager$1.getInstance();if(a.reregisterKeyMap(this._id,this.props.keyMap),this._componentIsFocused()&&(this.props.allowChanges||!Configuration$1.option("ignoreKeymapAndHandlerChangesByDefault"))){var b=this.props,c=b.keyMap,d=b.handlers;a.updateEnabledHotKeys(this._getFocusTreeId(),this._id,c,d,this._getComponentOptions());}}},{key:"_componentIsFocused",value:function a(){return !0===this._focused}},{key:"componentDidMount",value:function c(){var a=KeyEventManager$1.getInstance(),b=this.context.hotKeysParentId;a.registerComponentMount(this._id,b);}},{key:"_handleFocus",value:function e(){if(this.props.onFocus){var a;(a=this.props).onFocus.apply(a,arguments);}var b=KeyEventManager$1.getInstance().enableHotKeys(this._id,d(this.props),c(this.props),this._getComponentOptions());isUndefined$1(b)||this._focusTreeIdsPush(b),this._focused=!0;}},{key:"componentWillUnmount",value:function b(){var a=KeyEventManager$1.getInstance();a.deregisterKeyMap(this._id),a.registerComponentUnmount(),this._handleBlur();}},{key:"_handleBlur",value:function c(){if(this.props.onBlur){var a;(a=this.props).onBlur.apply(a,arguments);}var b=KeyEventManager$1.getInstance().disableHotKeys(this._getFocusTreeId(),this._id);b||this._focusTreeIdsShift(),this._focused=!1;}},{key:"_handleKeyDown",value:function c(a){var b=KeyEventManager$1.getInstance().handleKeydown(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_handleKeyPress",value:function c(a){var b=KeyEventManager$1.getInstance().handleKeyPress(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_handleKeyUp",value:function c(a){var b=KeyEventManager$1.getInstance().handleKeyUp(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_getComponentOptions",value:function a(){return {defaultKeyEvent:Configuration$1.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function a(){return {ignoreEventsCondition:Configuration$1.option("ignoreEventsCondition")}}}]),e}(React.PureComponent);return _defineProperty$e(f,"propTypes",{keyMap:PropTypes.object,handlers:PropTypes.object,onFocus:PropTypes.func,onBlur:PropTypes.func,allowChanges:PropTypes.bool,root:PropTypes.bool}),backwardsCompatibleContext$1(f,{deprecatedAPI:{contextTypes:{hotKeysParentId:PropTypes.number},childContextTypes:{hotKeysParentId:PropTypes.number}},newAPI:{contextType:{hotKeysParentId:void 0}}})}

var HotKeysWrapper$1=function(a){function b(){return _classCallCheck$r(this,b),_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).apply(this,arguments))}return _inherits$a(b,a),_createClass$q(b,[{key:"render",value:function g(){var a=this.props,b=a.hotKeys,c=a.innerRef,d=a.component,e=_objectWithoutProperties$5(a,["hotKeys","innerRef","component"]),f=d||Configuration$1.option("defaultComponent");return React__default["default"].createElement(f,_objectSpread$a({},b,{ref:c},e))}}]),b}(React.Component),HotKeys$1=withHotKeys$1(HotKeysWrapper$1);HotKeys$1.propTypes={innerRef:PropTypes.oneOfType([PropTypes.object,PropTypes.func])};

var GlobalHotKeys$2=function(a){function b(a){var c;return _classCallCheck$r(this,b),c=_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).call(this,a)),c._id=KeyEventManager$1.getInstance().registerGlobalKeyMap(a.keyMap),c._childContext={globalHotKeysParentId:c._id},c}return _inherits$a(b,a),_createClass$q(b,[{key:"render",value:function a(){return this.props.children||null}},{key:"componentDidUpdate",value:function e(){var a=KeyEventManager$1.getInstance();if(a.reregisterGlobalKeyMap(this._id,this.props.keyMap),this.props.allowChanges||!Configuration$1.option("ignoreKeymapAndHandlerChangesByDefault")){var b=this.props,c=b.keyMap,d=b.handlers;a.updateEnabledGlobalHotKeys(this._id,c,d,this._getComponentOptions(),this._getEventOptions());}}},{key:"componentDidMount",value:function f(){var a=this.props,b=a.keyMap,c=a.handlers,d=this.context.globalHotKeysParentId,e=KeyEventManager$1.getInstance();e.registerGlobalComponentMount(this._id,d),e.enableGlobalHotKeys(this._id,b,c,this._getComponentOptions(),this._getEventOptions());}},{key:"componentWillUnmount",value:function b(){var a=KeyEventManager$1.getInstance();a.deregisterGlobalKeyMap(this._id),a.disableGlobalHotKeys(this._id),a.registerGlobalComponentUnmount();}},{key:"_getComponentOptions",value:function a(){return {defaultKeyEvent:Configuration$1.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function a(){return {ignoreEventsCondition:Configuration$1.option("ignoreEventsCondition")}}}]),b}(React.Component);_defineProperty$e(GlobalHotKeys$2,"propTypes",{keyMap:PropTypes.object,handlers:PropTypes.object,allowChanges:PropTypes.bool});var GlobalHotKeys$1$1 = backwardsCompatibleContext$1(GlobalHotKeys$2,{deprecatedAPI:{contextTypes:{globalHotKeysParentId:PropTypes.number},childContextTypes:{globalHotKeysParentId:PropTypes.number}},newAPI:{contextType:{globalHotKeysParentId:void 0}}});

function withHotKeysIgnoreOverride$1(a){var b,c,d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]},e=2<arguments.length?arguments[2]:void 0;return c=b=function(b){function c(a){var b;return _classCallCheck$r(this,c),b=_possibleConstructorReturn$a(this,_getPrototypeOf$a(c).call(this,a)),b._handleKeyEvent=b._handleKeyEvent.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b._reloadDictionaries=b._reloadDictionaries.bind(_assertThisInitialized$a(_assertThisInitialized$a(b))),b}return _inherits$a(c,b),_createClass$q(c,[{key:"render",value:function g(){var b=this.props;b.only;b.except;var e=_objectWithoutProperties$5(b,["only","except"]),f={onKeyDown:this._handleKeyEvent,onKeyPress:this._handleKeyEvent,onKeyUp:this._handleKeyEvent,onFocus:this._reloadDictionaries};return React__default["default"].createElement(a,_extends$2({hotKeys:f},e))}},{key:"_reloadDictionaries",value:function d(){var a=this.props,b=a.only,c=a.except;this._onlyDict=keyDictionary$1(b),this._exceptDict=keyDictionary$1(c);}},{key:"_shouldIgnoreEvent",value:function c(a){var b=a.key;return isEmpty$1(this._onlyDict)?!!isEmpty$1(this._exceptDict)||!hasKey$1(this._exceptDict,b):isEmpty$1(this._exceptDict)?hasKey$1(this._onlyDict,b):hasKey$1(this._onlyDict,b)&&!hasKey$1(this._exceptDict,b)}},{key:"_handleKeyEvent",value:function b(a){this._shouldIgnoreEvent(a)&&KeyEventManager$1.getInstance()[e](a);}}]),c}(React.PureComponent),_defineProperty$e(b,"propTypes",{only:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),except:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)])}),_defineProperty$e(b,"defaultProps",d),c}function keyDictionary$1(a){return arrayFrom$1(a).reduce(function(a,b){var c=standardizeKeyName$1(b);if(!isValidKey$1(c))throw new InvalidKeyNameError$1(b);return [resolveAltShiftedAlias$1,resolveUnaltShiftedAlias$1,resolveShiftedAlias$1,resolveUnshiftedAlias$1,resolveAltedAlias$1,resolveUnaltedAlias$1].forEach(function(b){a[b(c)]=!0;}),a},{})}

var IgnoreKeys$2=function(a){function b(){return _classCallCheck$r(this,b),_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).apply(this,arguments))}return _inherits$a(b,a),_createClass$q(b,[{key:"render",value:function e(){var a=this.props,b=a.hotKeys,c=_objectWithoutProperties$5(a,["hotKeys"]),d=c.component||Configuration$1.option("defaultComponent");return React__default["default"].createElement(d,_objectSpread$a({},b,c))}}]),b}(React.Component);var IgnoreKeys$1$1 = withHotKeysIgnoreOverride$1(IgnoreKeys$2,{},"ignoreEvent");

var ObserveKeys$2=function(a){function b(){return _classCallCheck$r(this,b),_possibleConstructorReturn$a(this,_getPrototypeOf$a(b).apply(this,arguments))}return _inherits$a(b,a),_createClass$q(b,[{key:"render",value:function e(){var a=this.props,b=a.hotKeys,c=_objectWithoutProperties$5(a,["hotKeys"]),d=c.component||Configuration$1.option("defaultComponent");return React__default["default"].createElement(d,_objectSpread$a({},b,c))}}]),b}(React.Component);var ObserveKeys$1$1 = withHotKeysIgnoreOverride$1(ObserveKeys$2,{},"observeIgnoredEvents");

function withIgnoreKeys$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return withHotKeysIgnoreOverride$1(a,b,"ignoreEvent")}

function withObserveKeys$1(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return withHotKeysIgnoreOverride$1(a,b,"observeIgnoredEvents")}

function configure$1(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};Configuration$1.init(a);}

function getApplicationKeyMap$1(){return KeyEventManager$1.getInstance().getApplicationKeyMap()}

function recordKeyCombination$1(a){var b=KeyEventManager$1.getInstance();return b.addKeyCombinationListener(a)}

var reactHotkeys_production_min = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HotKeys: HotKeys$1,
    GlobalHotKeys: GlobalHotKeys$1$1,
    IgnoreKeys: IgnoreKeys$1$1,
    ObserveKeys: ObserveKeys$1$1,
    withHotKeys: withHotKeys$1,
    withIgnoreKeys: withIgnoreKeys$1,
    withObserveKeys: withObserveKeys$1,
    configure: configure$1,
    getApplicationKeyMap: getApplicationKeyMap$1,
    recordKeyCombination: recordKeyCombination$1
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(reactHotkeys_production_min);

function dictionaryFrom(array) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return array.reduce(function (memo, element) {
    memo[element] = value || {
      value: element
    };
    return memo;
  }, {});
}

function _classCallCheck$q(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$p(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$p(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$p(Constructor.prototype, protoProps); if (staticProps) _defineProperties$p(Constructor, staticProps); return Constructor; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$d(target, key, source[key]); }); } return target; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Default configuration values
 * @private
 */

var _defaultConfiguration = {
  /**
   * The level of logging of its own behaviour React HotKeys should perform.
   * @type {LogLevel}
   */
  logLevel: 'warn',

  /**
   * Default key event key maps are bound to, if left unspecified
   * @type {KeyEventName}
   */
  defaultKeyEvent: 'keydown',

  /**
   * The default component type to wrap HotKey components' children in, to provide
   * the required focus and keyboard event listening for HotKeys to function
   */
  defaultComponent: 'div',

  /**
   * The default tabIndex value passed to the wrapping component used to contain
   * HotKey components' children. -1 skips focusing the element when tabbing through
   * the DOM, but allows focusing programmatically.
   */
  defaultTabIndex: '-1',

  /**
   * The HTML tags that React HotKeys should ignore key events from. This only works
   * if you are using the default ignoreEventsCondition function.
   * @type {String[]}
   */
  ignoreTags: ['input', 'select', 'textarea'],

  /**
   * Whether to allow hard sequences, or the binding of handlers to actions that have
   * names that are valid key sequences, which implicitly define actions that are
   * triggered by that key sequence
   */
  enableHardSequences: false,

  /**
   * Whether to ignore changes to keyMap and handlers props by default (this reduces
   * a significant amount of unnecessarily resetting internal state)
   *
   * @type {boolean}
   */
  ignoreKeymapAndHandlerChangesByDefault: true,

  /**
   * The function used to determine whether a key event should be ignored by React
   * Hotkeys. By default, keyboard events originating elements with a tag name in
   * ignoreTags, or a isContentEditable property of true, are ignored.
   *
   * @type {Function<KeyboardEvent>}
   */
  ignoreEventsCondition: function ignoreEventsCondition(event) {
    var target = event.target;

    if (target && target.tagName) {
      var tagName = target.tagName.toLowerCase();
      return Configuration.option('_ignoreTagsDict')[tagName] || target.isContentEditable;
    } else {
      return false;
    }
  },

  /**
   * Whether to ignore repeated keyboard events when a key is being held down
   * @type {boolean}
   */
  ignoreRepeatedEventsWhenKeyHeldDown: true,

  /**
   * Whether React HotKeys should simulate keypress events for the keys that do not
   * natively emit them.
   * @type {boolean}
   */
  simulateMissingKeyPressEvents: true,

  /**
   * Whether to call stopPropagation() on events after they are handled (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   * @type {boolean}
   */
  stopEventPropagationAfterHandling: true,

  /**
   * Whether to call stopPropagation() on events after they are ignored (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   * @type {boolean}
   */
  stopEventPropagationAfterIgnoring: true,

  /**
   * Whether to allow combination submatches - e.g. if there is an action bound to
   * cmd, pressing shift+cmd will *not* trigger that action when
   * allowCombinationSubmatches is false.
   *
   * @note This option is ignored for combinations involving command (Meta) and
   *      submatches are <i>always</i> allowed because Meta hides keyup events
   *      of other keys, so until Command is released, it's impossible to know
   *      if one of the keys that has also been pressed has been released.
   *      @see https://github.com/greena13/react-hotkeys/pull/207
   * @type {boolean}
   */
  allowCombinationSubmatches: false,

  /**
   * A mapping of custom key codes to key names that you can then use in your
   * key sequences
   * @type {Object.<Number, KeyName>}
   */
  customKeyCodes: {}
};

var _configuration = _objectSpread$9({}, _defaultConfiguration);
/**
 * Turn our array of tags to ignore into a dictionary, for faster lookup
 */


_configuration._ignoreTagsDict = dictionaryFrom(_configuration.ignoreTags, true);
/**
 * Handles getting and setting global configuration values, that affect how
 * React Hotkeys behaves
 * @class
 */

var Configuration =
/*#__PURE__*/
function () {
  function Configuration() {
    _classCallCheck$q(this, Configuration);
  }

  _createClass$p(Configuration, null, [{
    key: "init",

    /**
     * Merges the specified configuration options with the current values.
     * @see _configuration
     */
    value: function init(configuration) {
      var _this = this;

      var ignoreTags = configuration.ignoreTags,
          customKeyCodes = configuration.customKeyCodes;

      if (ignoreTags) {
        configuration._ignoreTagsDict = dictionaryFrom(configuration.ignoreTags);
      }

      if (customKeyCodes) {
        configuration._customKeyNamesDict = dictionaryFrom(Object.values(configuration.customKeyCodes));
      }

      Object.keys(configuration).forEach(function (key) {
        _this.set(key, configuration[key]);
      });
    }
    /**
     * Sets a single configuration value by name
     * @param {string} key - Name of the configuration value to set
     * @param {*} value - New value to set
     */

  }, {
    key: "set",
    value: function set(key, value) {
      _configuration[key] = value;
    }
  }, {
    key: "reset",
    value: function reset(key) {
      _configuration[key] = _defaultConfiguration[key];
    }
    /**
     * Gets a single configuration value by name
     * @param {string} key - Name of the configuration value
     * @returns {*} Configuration value
     */

  }, {
    key: "option",
    value: function option(key) {
      return _configuration[key];
    }
  }]);

  return Configuration;
}();

function _classCallCheck$p(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$o(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$o(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$o(Constructor.prototype, protoProps); if (staticProps) _defineProperties$o(Constructor, staticProps); return Constructor; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Encapsulates all logging behaviour and provides the ability to specify the level
 * of logging desired.
 * @class
 */
var Logger =
/*#__PURE__*/
function () {
  _createClass$o(Logger, [{
    key: "noop",

    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time a focus tree changes, making it easier to quickly spot events related
     * to the same focus tree.
     */

    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time a component ID changes, making it easier to quickly spot events related
     * to the same component.
     */

    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time an event ID changes, making it easier to quickly trace the path of KeyEvent
     * objects as they propagate through multiple components.
     */

    /**
     * The level of logging to perform
     * @typedef {'none'|'error'|'warn'|'info'|'debug'|'verbose'} LogLevel
     */

    /**
     * Levels of log severity - the higher the log level, the greater the amount (and
     * lesser the importance) of information logged to the console about React HotKey's
     * behaviour
     * @enum {number} LogLevel
     */
    value: function noop() {}
    /**
     * By default, calls to all log severities are a no-operation. It's only when the
     * user specifies a log level, are they replaced with logging statements
     * @type {Logger.noop}
     */

  }]);

  function Logger() {
    var _this = this;

    var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warn';

    _classCallCheck$p(this, Logger);

    _defineProperty$c(this, "verbose", this.noop);

    _defineProperty$c(this, "debug", this.noop);

    _defineProperty$c(this, "info", this.noop);

    _defineProperty$c(this, "warn", this.noop);

    _defineProperty$c(this, "error", this.noop);

    this.logLevel = this.constructor.levels[logLevel];

    if (this.logLevel >= this.constructor.levels.error) {
      this.error = console.error;
    } else {
      return;
    }

    if (this.logLevel >= this.constructor.levels.warn) {
      this.warn = console.warn;
    } else {
      return;
    }

    ['info', 'debug', 'verbose'].some(function (logLevel) {
      if (_this.logLevel >= _this.constructor.levels[logLevel]) {
        _this[logLevel] = console.log;
        return false;
      }

      return true;
    });
  }

  return Logger;
}();

_defineProperty$c(Logger, "logIcons", ['📕', '📗', '📘', '📙']);

_defineProperty$c(Logger, "componentIcons", ['🔺', '⭐️', '🔷', '🔶', '⬛️']);

_defineProperty$c(Logger, "eventIcons", ['❤️', '💚', '💙', '💛', '💜', '🧡']);

_defineProperty$c(Logger, "levels", {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  verbose: 5
});

/**
 * @typedef {number} KeyEventType index (0-2) of which position in an event record
 * a particular event is located
 */

/**
 * Enum for types of key events
 * @readonly
 * @enum {KeyEventType}
 */
var KeyEventType = {
  keydown: 0,
  keypress: 1,
  keyup: 2
};

var ModifierFlagsDictionary = {
  Shift: ['shiftKey'],
  Meta: ['metaKey'],
  Control: ['ctrlKey'],
  Alt: ['altKey']
};

/**
 * Dictionary of symbols that correspond to keys when pressed with the shift key
 * also held down. Used for combinations involving the shift key and one or more
 * others. (e.g. shift+1)
 */
var ShiftedKeysDictionary = {
  '`': ['~'],
  '1': ['!'],
  '2': ['@',
  /** UK Keyboard: **/
  '"'],
  '3': ['#',
  /** UK Keyboard: **/
  '£'],
  '4': ['$'],
  '5': ['%'],
  '6': ['^'],
  '7': ['&'],
  '8': ['*'],
  '9': ['('],
  '0': [')'],
  '-': ['_'],
  '=': ['plus'],
  ';': [':'],
  "'": ['"',
  /** UK Keyboard: **/
  '@'],
  ',': ['<'],
  '.': ['>'],
  '/': ['?'],
  '\\': ['|'],
  '[': ['{'],
  ']': ['}'],

  /**
   * UK Keyboard:
   */
  '#': ['~']
};

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the shift key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          shift key
 */

function resolveShiftedAlias(keyName) {
  return ShiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toUpperCase() : keyName];
}

function hasKey(object, key) {
  return object.hasOwnProperty(key);
}

function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _nonIterableSpread$2(); }

function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$2(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function invertArrayDictionary(dictionary) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(dictionary).reduce(function (memo, key) {
    var arrayValue = dictionary[key];
    arrayValue.forEach(function (shiftedKey) {
      if (!hasKey(memo, shiftedKey)) {
        memo[shiftedKey] = [];
      }

      memo[shiftedKey].push(key);
    });

    if (options.includeOriginal) {
      if (!hasKey(memo, key)) {
        memo[key] = [];
      }

      memo[key] = [].concat(_toConsumableArray$2(memo[key]), _toConsumableArray$2(arrayValue));
    }

    return memo;
  }, {});
}

var UnshiftedKeysDictionary = invertArrayDictionary(ShiftedKeysDictionary);

/**
 * Returns the name of the key that must be pressed with the shift key, to yield the
 * specified symbol
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the shift key, to
 *          yield the specified symbol
 */

function resolveUnshiftedAlias(keyName) {
  return UnshiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toLowerCase() : keyName];
}

/**
 * A dictionary of key aliases to make it easier to specify key maps that work
 * across different keyboard layouts and operating systems - this builds on top
 * of what React already does.
 */
var KeyOSAndLayoutAliasesDictionary = {};
var KeyOSAndLayoutAliasesDictionary$1 = invertArrayDictionary(KeyOSAndLayoutAliasesDictionary, {
  includeOriginal: true
});

function isString(object) {
  return typeof object === 'string';
}

function stripSuperfluousWhitespace(target) {
  if (isString(target)) {
    return target.trim().replace(/\s+/g, ' ');
  }

  return target;
}

/**
 * A mapping between Mousetrap syntax and React syntax to support the use of both
 */
var MousetrapToReactKeyNamesDictionary = {
  /**
   * Generic
   */
  'tab': 'Tab',
  'capslock': 'CapsLock',
  'shift': 'Shift',
  'meta': 'Meta',
  'alt': 'Alt',
  'ctrl': 'Control',
  'space': ' ',
  'spacebar': ' ',
  'escape': 'Escape',
  'esc': 'Escape',
  'left': 'ArrowLeft',
  'right': 'ArrowRight',
  'up': 'ArrowUp',
  'down': 'ArrowDown',

  /**
   * Mac
   */
  'return': 'Enter',
  'del': 'Delete',
  'command': 'Meta',
  'option': 'Alt',

  /**
   * Windows
   */
  'enter': 'Enter',
  'backspace': 'Backspace',
  'ins': 'Insert',
  'pageup': 'PageUp',
  'pagedown': 'PageDown',
  'end': 'End',
  'home': 'Home',
  'contextmenu': 'ContextMenu',
  'numlock': 'Clear'
};

/**
 * A mapping between key names and official names
 */
var KeyShorthandDictionary = {
  'cmd': 'Meta'
};

/**
 * @typedef {string} KeyName Name of the keyboard key
 */

/**
 * @typedef {string} ReactKeyName Name used by React to refer to key
 */

/**
 * Returns the name for the specified key used by React. Supports translating key aliases
 * used by mousetrap to their counterparts in React
 * @param {KeyName} keyName Name of the key to resolve to the React equivalent
 * @returns {ReactKeyName} Name used by React to refer to the key
 */

function standardizeKeyName(keyName) {
  var _keyName = keyName.toLowerCase();

  return MousetrapToReactKeyNamesDictionary[_keyName] || KeyShorthandDictionary[_keyName] || (keyName.match(/^f\d+$/) ? keyName.toUpperCase() : keyName);
}

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  '8': 'Backspace',
  '9': 'Tab',
  '12': 'Clear',
  '13': 'Enter',
  '16': 'Shift',
  '17': 'Control',
  '18': 'Alt',
  '19': 'Pause',
  '20': 'CapsLock',
  '27': 'Escape',
  '32': ' ',
  '33': 'PageUp',
  '34': 'PageDown',
  '35': 'End',
  '36': 'Home',
  '37': 'ArrowLeft',
  '38': 'ArrowUp',
  '39': 'ArrowRight',
  '40': 'ArrowDown',
  '45': 'Insert',
  '46': 'Delete',
  '112': 'F1',
  '113': 'F2',
  '114': 'F3',
  '115': 'F4',
  '116': 'F5',
  '117': 'F6',
  '118': 'F7',
  '119': 'F8',
  '120': 'F9',
  '121': 'F10',
  '122': 'F11',
  '123': 'F12',
  '144': 'NumLock',
  '145': 'ScrollLock',
  '224': 'Meta'
};

/**
 * Dictionary of keys whose name is not a single symbol or character
 */
var NonPrintableKeysDictionary = dictionaryFrom(Object.values(translateToKey), true);

/**
 * Whether the specified key is a valid key name that is not a single character or
 * symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {boolean} Whether the key is a valid special key
 */

function isNonPrintableKeyName(keyName) {
  return !!NonPrintableKeysDictionary[keyName];
}

/**
 * Whether the specified key name is among those defined as custom key codes
 * @param {ReactKeyName} keyName Name of the key
 * @returns {boolean} true if keyName matches a custom key name
 */

function isCustomKeyName(keyName) {
  return Configuration.option('_customKeyNamesDict')[keyName];
}

function _typeof$a(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$a = function _typeof(obj) { return typeof obj; }; } else { _typeof$a = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$a(obj); }

function _classCallCheck$o(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf$9(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf$9(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf$9(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isValidKey(keyName) {
  return isNonPrintableKeyName(keyName) || String.fromCharCode(keyName.charCodeAt(0)) === keyName || isCustomKeyName(keyName);
}

var InvalidKeyNameError =
/*#__PURE__*/
function (_Error) {
  _inherits$9(InvalidKeyNameError, _Error);

  function InvalidKeyNameError() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$o(this, InvalidKeyNameError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$9(this, (_getPrototypeOf2 = _getPrototypeOf$9(InvalidKeyNameError)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$b(_assertThisInitialized$9(_assertThisInitialized$9(_this)), "name", 'InvalidKeyNameError');

    return _this;
  }

  return InvalidKeyNameError;
}(_wrapNativeSuper(Error));

function _classCallCheck$n(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$n(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$n(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$n(Constructor.prototype, protoProps); if (staticProps) _defineProperties$n(Constructor, staticProps); return Constructor; }
/**
 * Returns a normalized KeyCombinationString (with the key names in the combination
 * sorted in alphabetical order)
 * @param {KeyName[]} keys List of key names to sort and reconstitute as a
 *        KeyCombinationString
 * @returns {NormalizedKeyCombinationString} Normalized KeyCombinationString
 */

function normalizedCombinationId(keys) {
  return keys.sort().join('+');
}
/**
 * Parses KeySequenceStrings and returns KeySequenceOptions
 *
 * Used primarily to parse strings describing hot key sequences and combinations
 * so that they may be matched with key events when they occur.
 * @class
 */


var KeySequenceParser =
/*#__PURE__*/
function () {
  function KeySequenceParser() {
    _classCallCheck$n(this, KeySequenceParser);
  }

  _createClass$n(KeySequenceParser, null, [{
    key: "parse",

    /**
     * @typedef {Object} BasicKeyCombination Object containing the basic information that
     *          describes a key combination
     * @property {KeyCombinationString} id - String description of keys involved in the key
     *          combination
     * @property {number} size - Number of keys involved in the combination
     * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
     *           in the key combination
     * @property {KeyEventType} keyEventType - Record index for key event that
     *          the matcher should match on
     */

    /**
     * @typedef {string} KeySequenceString String describing a sequence of one or more key
     * combinations with whitespace separating key combinations in the sequence and '+'
     * separating keys within a key combination.
     */

    /**
     * @typedef {KeySequenceString} NormalizedKeySequenceId key sequence id with all of the
     * combination id's normalized
     */

    /**
     * @typedef {Object} BasicKeySequence Object containing the basic information that
     *          describes a key sequence
     * @property {NormalizedKeySequenceId} prefix - Normalized key sequence id
     * @property {number} size - Number of combinations involved in the sequence
     */

    /**
     * @typedef {Object} KeySequenceObject Object containing description of a key sequence
     *          to compared against key events
     * @property {KeySequenceString} id Id describing key sequence used for matching against
     *            key events
     * @property {ComponentId} componentId Id associated with the HotKeys component
     *          that registered the key sequence
     * @property {BasicKeyCombination[]} sequence A list of key combinations involved in
     *            the sequence
     * @property {number} size Number of key combinations in the key sequence
     * @property {KeyEventType} keyEventType Index that matches key event type
     * @property {ActionName} actionName Name of the action that should be triggered if a
     *           keyboard event matching the sequence and event type occur
     */

    /**
     * @typedef {Object} KeySequenceOptions Object containing the results of parsing a
     *          KeySequenceString
     * @property {BasicKeyCombination} combination Properties of the final combination in
     *        the sequence
     * @property {BasicKeySequence} sequence Properties of the sequence of keys leading
     *        up to the final combination
     */

    /**
     * Parses a KeySequenceString and returns a KeySequenceOptions object containing
     * information about the sequence in a format that is easier to query
     * @param {KeySequenceString} sequenceString String describing a key sequence to
     *        parse
     * @param {Object} options Configuration object describing how the KeySequenceString
     *        should be parsed.
     * @param {KeyEventType} options.keyEventType Event record index indicating
     *        what key event the sequence should match
     * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
     *        key name is found in the key combination string.
     * @returns {KeySequenceOptions} Object containing information about the key
     *        sequence described by the KeySequenceString
     */
    value: function parse(sequenceString) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var trimmedSequenceString = stripSuperfluousWhitespace(sequenceString);
      var keyCombinationsArray = trimmedSequenceString.split(' ');

      try {
        var nonTerminalCombinations = keyCombinationsArray.slice(0, keyCombinationsArray.length - 1);
        var terminalCombination = keyCombinationsArray[keyCombinationsArray.length - 1];
        var prefix = nonTerminalCombinations.map(function (keyCombination) {
          var keysInComboDict = parseCombination(keyCombination, options);
          return normalizedCombinationId(Object.keys(keysInComboDict));
        }).join(' ');
        var keysInComboDict = parseCombination(terminalCombination, options);
        var normalizedComboString = normalizedCombinationId(Object.keys(keysInComboDict));
        var combination = {
          id: normalizedComboString,
          keyDictionary: keysInComboDict,
          keyEventType: options.keyEventType,
          size: Object.keys(keysInComboDict).length
        };
        return {
          sequence: {
            prefix: prefix,
            size: nonTerminalCombinations.length + 1
          },
          combination: combination
        };
      } catch (InvalidKeyNameError) {
        return {
          sequence: null,
          combination: null
        };
      }
    }
  }]);

  return KeySequenceParser;
}();
/**
 * @typedef {string} KeyCombinationString String describing a combination of one or more
 * keys separated by '+'
 */

/**
 * @typedef {KeyCombinationString} NormalizedKeyCombinationString key combination id where
 * the keys have been normalized (sorted in alphabetical order)
 */

/**
 * @typedef {Object.<ReactKeyName, Boolean>} KeyDictionary Registry of the names
 * of keys in a particular combination, for easy/quick checking if a particular
 * key is in the key combination
 */

/**
 * Parses a key combination string and returns the corresponding KeyDictionary
 * @param {KeyCombinationString} string Describes key combination
 * @param {Object} options Options hash of how the string should be parsed
 * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
 *        key name is found in the key combination string.
 * @returns {KeyDictionary} Dictionary of keys in the parsed combination
 */


function parseCombination(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return string.replace(/^\+|(\s|[^+]\+)\+/, '$1plus').split('+').reduce(function (keyDictionary, keyName) {
    var finalKeyName = standardizeKeyName(keyName);

    if (options.ensureValidKeys) {
      if (!isValidKey(finalKeyName)) {
        throw new InvalidKeyNameError();
      }
    }

    keyDictionary[finalKeyName] = true;
    return keyDictionary;
  }, {});
}

/**
 * A dictionary of symbols for each key, when pressed with the alt key also held.
 * Used for combinations that involve the alt key and one or more others. (e.g.
 * shift+a)
 */
var AltedKeysDictionary = {
  '`': ['`'],
  '1': ['¡'],
  '2': ['™'],
  '3': ['£'],
  '4': ['¢'],
  '5': ['∞'],
  '6': ['§'],
  '7': ['¶'],
  '8': ['•'],
  '9': ['ª'],
  '0': ['º'],
  '-': ['–'],
  '=': ['≠'],
  'a': ['å'],
  'b': ['∫'],
  'c': ['ç'],
  'd': ['∂'],
  'e': ['´'],
  'f': ['ƒ'],
  'g': ['©'],
  'h': ['˙'],
  'i': ['ˆ'],
  'j': ['∆'],
  'k': ['˚'],
  'l': ['¬'],
  'm': ['µ'],
  'n': ['˜'],
  'o': ['ø'],
  'p': ['π'],
  'q': ['œ'],
  'r': ['®'],
  's': ['ß'],
  't': ['†'],
  'u': ['¨'],
  'v': ['√'],
  'w': ['∑'],
  'x': ['≈'],
  'y': ['¥'],
  'z': ['Ω'],
  '[': ['“'],
  ']': ['‘'],
  "\\": ['«'],
  "'": ['æ'],
  ';': ['…'],
  ',': ['≤'],
  '.': ['≥'],
  '/': ['÷']
};

var UnaltedKeysDictionary = invertArrayDictionary(AltedKeysDictionary);

/**
 * Returns the name of the key that must be pressed with the alt key, to yield the
 * specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */

function resolveUnaltedAlias(keyName) {
  return UnaltedKeysDictionary[keyName] || [keyName];
}

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the alt key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          alt key
 */

function resolveAltedAlias(keyName) {
  return AltedKeysDictionary[keyName] || [keyName];
}

/**
 * A dictionary of symbols for each key, when pressed with the alt and shift key also
 * held. Used for combinations that involve the shift and alt key and one or more
 * others (e.g. shift+alt+a)
 */
var AltShiftedKeysDictionary = {
  '`': ['`'],
  '1': ['⁄'],
  '2': ['€'],
  '3': ['‹'],
  '4': ['›'],
  '5': ['ﬁ'],
  '6': ['ﬂ'],
  '7': ['‡'],
  '8': ['°'],
  '9': ['·'],
  '0': ['‚'],
  '-': ['—'],
  '=': ['±'],
  'a': ['Å'],
  'b': ['ı'],
  'c': ['Ç'],
  'd': ['Î'],
  'e': ['´'],
  'f': ['Ï'],
  'g': ['˝'],
  'h': ['Ó'],
  'i': ['ˆ'],
  'j': ['Ô'],
  'k': [''],
  'l': ['Ò'],
  'm': ['Â'],
  'n': ['˜'],
  'o': ['Ø'],
  'p': ['π'],
  'q': ['Œ'],
  'r': ['‰'],
  's': ['Í'],
  't': ['Î'],
  'u': ['¨'],
  'v': ['◊'],
  'w': ['„'],
  'x': ['˛'],
  'y': ['Á'],
  'z': ['¸'],
  '[': ['”'],
  ']': ['’'],
  "\\": ['»'],
  "'": ['Æ'],
  ';': ['Ú'],
  ',': ['¯'],
  '.': ['˘']
};

var UnaltShiftedKeysDictionary = invertArrayDictionary(AltShiftedKeysDictionary);

/**
 * Returns the name of the key that must be pressed with the shift and alt keys,
 * to yield the specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */

function resolveUnaltShiftedAlias(keyName) {
  return UnaltShiftedKeysDictionary[keyName] || resolveUnshiftedAlias(keyName);
}

/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the alt and shift keys also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          alt and shit keys
 */

function resolveAltShiftedAlias(keyName) {
  return AltShiftedKeysDictionary[keyName] || [keyName];
}

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } return target; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$1(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck$m(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$m(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$m(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$m(Constructor.prototype, protoProps); if (staticProps) _defineProperties$m(Constructor, staticProps); return Constructor; }
/**
 * Serializes instances of KeyCombination to KeyCombinationString.
 *
 * Used primarily to serialize string representations of key events as they happen.
 * @class
 */

var KeyCombinationSerializer =
/*#__PURE__*/
function () {
  function KeyCombinationSerializer() {
    _classCallCheck$m(this, KeyCombinationSerializer);
  }

  _createClass$m(KeyCombinationSerializer, null, [{
    key: "serialize",

    /**
     * Returns a string representation of a single KeyCombination
     * @param {KeyCombination} keyCombination KeyCombination to serialize
     * @returns {string[]} Serialization of KeyCombination
     */
    value: function serialize(keyCombination) {
      var combinationIncludesShift = keyCombination['Shift'];
      var combinationIncludesAlt = keyCombination['Alt'];
      var keyCombinationIdDict = {};
      /**
       * List of key names in alphabetical order
       * @type {string[]}
       */

      var sortedKeys = Object.keys(keyCombination).sort();
      sortedKeys.forEach(function (keyName) {
        var keyAliases = [];

        if (combinationIncludesShift) {
          if (combinationIncludesAlt) {
            var unaltShiftedKeyNames = resolveUnaltShiftedAlias(keyName);
            var altShiftedKeyNames = resolveAltShiftedAlias(keyName);
            keyAliases = [].concat(_toConsumableArray$1(keyAliases), [keyName], _toConsumableArray$1(unaltShiftedKeyNames), _toConsumableArray$1(altShiftedKeyNames));
          } else {
            var unshiftedKeyNames = resolveUnshiftedAlias(keyName);
            var shiftedKeyNames = resolveShiftedAlias(keyName);
            keyAliases = [].concat(_toConsumableArray$1(keyAliases), [keyName], _toConsumableArray$1(unshiftedKeyNames), _toConsumableArray$1(shiftedKeyNames));
          }
        } else if (combinationIncludesAlt) {
          var unaltedKeyNames = resolveUnaltedAlias(keyName);
          var altedKeyNames = resolveAltedAlias(keyName);
          keyAliases = [].concat(_toConsumableArray$1(keyAliases), [keyName], _toConsumableArray$1(unaltedKeyNames), _toConsumableArray$1(altedKeyNames));
        } else {
          keyAliases.push(keyName);
          var keyAlias = KeyOSAndLayoutAliasesDictionary$1[keyName];

          if (keyAlias) {
            keyAliases = [].concat(_toConsumableArray$1(keyAliases), _toConsumableArray$1(keyAlias));
          }
        }

        var keyCombinationIds = Object.keys(keyCombinationIdDict);

        if (keyCombinationIds.length > 0) {
          keyCombinationIds.forEach(function (keyCombinationId) {
            keyAliases.forEach(function (keyAlias) {
              keyCombinationIdDict[keyCombinationId + "+".concat(keyAlias)] = _objectSpread$8({}, keyCombinationIdDict[keyCombinationId], _defineProperty$a({}, keyAlias, true));
            });
            delete keyCombinationIdDict[keyCombinationId];
          });
        } else {
          keyAliases.forEach(function (keyAlias) {
            keyCombinationIdDict[keyAlias] = _defineProperty$a({}, keyAlias, true);
          });
        }
      });
      return Object.values(keyCombinationIdDict).map(function (keysInCombo) {
        return Object.keys(keysInCombo).sort().join('+');
      });
    }
    /**
     * Whether the specified key sequence is valid (is of the correct format and contains
     * combinations consisting entirely of valid keys)
     * @param {KeySequenceString} keySequence Key sequence to validate
     * @returns {boolean} Whether the key sequence is valid
     */

  }, {
    key: "isValidKeySerialization",
    value: function isValidKeySerialization(keySequence) {
      if (keySequence.length > 0) {
        return !!KeySequenceParser.parse(keySequence, {
          ensureValidKeys: true
        }).combination;
      } else {
        return false;
      }
    }
  }]);

  return KeyCombinationSerializer;
}();

/**
 * Enum for index values for KeyEvents
 * @readonly
 * @enum {number}
 */
var KeyEventSequenceIndex = {
  previous: 0,
  current: 1
};

/**
 * Returns a list of accepted aliases for the specified key
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} List of key aliases
 */

function resolveKeyAlias(keyName) {
  return KeyOSAndLayoutAliasesDictionary$1[keyName] || [keyName];
}

function applicableAliasFunctions(keyDictionary) {
  if (keyDictionary['Shift']) {
    if (keyDictionary['Alt']) {
      return [resolveAltShiftedAlias, resolveUnaltShiftedAlias];
    } else {
      return [resolveShiftedAlias, resolveUnshiftedAlias];
    }
  } else {
    if (keyDictionary['Alt']) {
      return [resolveAltedAlias, resolveUnaltedAlias];
    } else {
      var nop = function nop(keyName) {
        return [keyName];
      };

      return [nop, nop];
    }
  }
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

/**
 * @typedef {number} KeyEventState
 */

/**
 * Enum for different states a key event can be recorded in
 * @readonly
 * @enum {KeyEventState}
 */
var KeyEventState = {
  unseen: 0,
  seen: 1,
  simulated: 2
};

function _classCallCheck$l(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$l(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$l(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$l(Constructor.prototype, protoProps); if (staticProps) _defineProperties$l(Constructor, staticProps); return Constructor; }
/**
 * Creates and modifies KeyEvents
 * @class
 */

var KeyEventStateArrayManager =
/*#__PURE__*/
function () {
  function KeyEventStateArrayManager() {
    _classCallCheck$l(this, KeyEventStateArrayManager);
  }

  _createClass$l(KeyEventStateArrayManager, null, [{
    key: "newRecord",

    /**
     * Makes a new KeyEvent with one of the bits set to true
     * @param {KeyEventType=} keyEventType Index of bit to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     * @returns {KeyEvent} New key event record with bit set to true
     */
    value: function newRecord(keyEventType, keyEventState) {
      var record = [KeyEventState.unseen, KeyEventState.unseen, KeyEventState.unseen];

      if (!isUndefined(keyEventType)) {
        for (var i = 0; i <= keyEventType; i++) {
          record[i] = keyEventState;
        }
      }

      return record;
    }
    /**
     * Sets a bit in the map to true
     * @param {KeyEvent} record Map to set a bit to true
     * @param {KeyEventType} index Index of bit to set
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "setBit",
    value: function setBit(record, index, keyEventState) {
      record[index] = keyEventState;
      return record;
    }
    /**
     * Returns a new record with the same values as the one passed to it
     * @param {KeyEvent} original Record to copy
     * @returns {KeyEvent} Record with the same values as the original
     */

  }, {
    key: "clone",
    value: function clone(original) {
      var record = this.newRecord();

      for (var i = 0; i < original.length; i++) {
        record[i] = original[i];
      }

      return record;
    }
  }]);

  return KeyEventStateArrayManager;
}();

function _typeof$9(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

function isObject(target) {
  return !Array.isArray(target) && _typeof$9(target) === 'object' && target !== null;
}

function isEmpty(target) {
  if (isObject(target)) {
    return Object.keys(target).length === 0;
  } else {
    return !target ? true : target.length === 0;
  }
}

function size(collection) {
  return isObject(collection) ? Object.keys(collection).length : collection.length;
}

function _classCallCheck$k(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$k(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$k(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$k(Constructor.prototype, protoProps); if (staticProps) _defineProperties$k(Constructor, staticProps); return Constructor; }
/**
 * Record of one or more keys pressed together, in a combination
 * @class
 */

var KeyCombination =
/*#__PURE__*/
function () {
  /**
   * Creates a new KeyCombination instance
   * @param {Object.<ReactKeyName, Array.<KeyEventState[]>>} keys Dictionary
   *        of keys
   * @returns {KeyCombination}
   */
  function KeyCombination() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$k(this, KeyCombination);

    this._keys = keys;
    this._includesKeyUp = false;

    this._update();
  }
  /********************************************************************************
   * Getters
   *********************************************************************************/

  /**
   * List of ids (serialized representations) for the keys involved in the combination
   * @returns {KeySequence[]} List of combination ids
   */


  _createClass$k(KeyCombination, [{
    key: "getIds",
    value: function getIds() {
      return this._ids;
    }
    /**
     * Dictionary mapping keys to their acceptable aliases. This includes "shifted" or
     * "alted" key characters.
     * @returns {Object.<ReactKeyName, ReactKeyName[]>}
     */

  }, {
    key: "getKeyAliases",
    value: function getKeyAliases() {
      return this._keyAliases;
    }
    /**
     * A normalized version of the key, achieved by comparing it to the list of known
     * aliases for the keys in the combination
     * @param {ReactKeyName} keyName Name of the key to normalize
     * @returns {ReactKeyName} Normalized key name
     */

  }, {
    key: "getNormalizedKeyName",
    value: function getNormalizedKeyName(keyName) {
      var keyState = this._keys[keyName];

      if (keyState) {
        return keyName;
      } else {
        var keyAlias = this._keyAliases[keyName];

        if (keyAlias) {
          return keyAlias;
        } else {
          return keyName;
        }
      }
    }
    /********************************************************************************
     * Query attributes of entire combination
     *********************************************************************************/

    /**
     * Number of keys involved in the combination
     * @returns {number} Number of keys
     */

  }, {
    key: "getNumberOfKeys",
    value: function getNumberOfKeys() {
      return size(this._keys);
    }
    /**
     * Whether there are any keys in the combination
     * @returns {boolean} true if there is 1 or more keys involved in the combination,
     *          else false.
     */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this._getKeyStates()).length > 0;
    }
    /**
     * Whether any of the keys in the combination have been released
     * @returns {boolean} true if at least 1 key has been released in the combination
     */

  }, {
    key: "isEnding",
    value: function isEnding() {
      return this._includesKeyUp;
    }
    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     */

  }, {
    key: "hasEnded",
    value: function hasEnded() {
      return isEmpty(this.keysStillPressedDict());
    }
    /********************************************************************************
     * Adding & modifying key states
     *********************************************************************************/

    /**
     * Add a new key to the combination (starting with a state of keydown)
     * @param {ReactKeyName} keyName Name of key
     * @param {KeyEventState} keyEventState State key is in
     * @returns {void}
     */

  }, {
    key: "addKey",
    value: function addKey(keyName, keyEventState) {
      this._setKeyState(keyName, [KeyEventStateArrayManager.newRecord(), KeyEventStateArrayManager.newRecord(KeyEventType.keydown, keyEventState)]);
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "setKeyState",
    value: function setKeyState(keyName, recordIndex, keyEventState) {
      var existingRecord = this._getKeyState(keyName);

      if (this.isKeyIncluded(keyName)) {
        var previous = KeyEventStateArrayManager.clone(existingRecord[1]);
        var current = KeyEventStateArrayManager.clone(previous);
        KeyEventStateArrayManager.setBit(current, recordIndex, keyEventState);

        this._setKeyState(keyName, [previous, current]);
      } else {
        this.addKey(keyName, keyEventState);
      }

      if (recordIndex === KeyEventType.keyup) {
        this._includesKeyUp = true;
      }
    }
    /********************************************************************************
     * Iteration and subsets
     *********************************************************************************/

    /**
     * @callback forEachHandler
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {void}
     */

    /**
     * Iterates over every key in the combination, calling an function with each
     * key name
     * @param {forEachHandler} handler Function to call with the name of each key
     *        in the combination
     * @returns {void}
     */

  }, {
    key: "forEachKey",
    value: function forEachKey(handler) {
      return Object.keys(this._keys).forEach(handler);
    }
    /**
     * @callback evaluator
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {boolean}
     */

    /**
     * Whether at least one of the keys causes a evaluator function to return true
     * @callback {evaluator} evaluator Function to evaluate each key
     * @returns {boolean} Whether at least one key satisfies the evaluator
     */

  }, {
    key: "some",
    value: function some(evaluator) {
      return Object.keys(this._keys).some(evaluator);
    }
    /**
     * Dictionary of keys included in the combination record
     * @returns {Object.<ReactKeyName, boolean>}
     */

  }, {
    key: "getKeyDictionary",
    value: function getKeyDictionary() {
      return dictionaryFrom(Object.keys(this._getKeyStates()), true);
    }
    /**
     * Returns a new KeyCombination without the keys that have been
     * released (had the keyup event recorded). Essentially, the keys that are
     * currently still pressed down at the time a key event is being handled.
     * @returns {KeyCombination} New KeyCombination with all of the
     *        keys with keyup events omitted
     */

  }, {
    key: "keysStillPressedDict",
    value: function keysStillPressedDict() {
      var _this = this;

      return Object.keys(this._keys).reduce(function (memo, keyName) {
        if (_this.isKeyStillPressed(keyName)) {
          memo[keyName] = _this._getKeyState(keyName);
        }

        return memo;
      }, {});
    }
    /********************************************************************************
     * Query individual keys
     *********************************************************************************/

    /**
     * Whether key is in the combination
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination
     */

  }, {
    key: "isKeyIncluded",
    value: function isKeyIncluded(keyName) {
      return !!this._getKeyState(keyName);
    }
    /**
     * Whether key is in the combination and has yet to be released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and yet to be released
     */

  }, {
    key: "isKeyStillPressed",
    value: function isKeyStillPressed(keyName) {
      return this.isEventTriggered(keyName, KeyEventType.keypress) && !this.isKeyReleased(keyName);
    }
    /**
     * Whether key is in the combination and been released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and has been released
     */

  }, {
    key: "isKeyReleased",
    value: function isKeyReleased(keyName) {
      return this.isEventTriggered(keyName, KeyEventType.keyup);
    }
    /**
     * Whether an event has been recorded for a key yet
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been recorded for the key
     */

  }, {
    key: "isEventTriggered",
    value: function isEventTriggered(keyName, keyEventType) {
      return this._getKeyStateType(keyName, KeyEventSequenceIndex.current, keyEventType);
    }
    /**
     * Whether an event has been previously recorded for a key (the second most recent
     * event to occur for the key)
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been previously recorded for the key
     */

  }, {
    key: "wasEventPreviouslyTriggered",
    value: function wasEventPreviouslyTriggered(keyName, keyEventType) {
      return this._getKeyStateType(keyName, KeyEventSequenceIndex.previous, keyEventType);
    }
    /**
     * Whether a keypress event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keypress event is currently being simulated for the
     *        key
     */

  }, {
    key: "isKeyPressSimulated",
    value: function isKeyPressSimulated(keyName) {
      return this._isKeyEventSimulated(keyName, KeyEventType.keypress);
    }
    /**
     * Whether a keyup event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keyup event is currently being simulated for the
     *        key
     */

  }, {
    key: "isKeyUpSimulated",
    value: function isKeyUpSimulated(keyName) {
      return this._isKeyEventSimulated(keyName, KeyEventType.keyup);
    }
    /********************************************************************************
     * Presentation
     *********************************************************************************/

    /**
     * Return a serialized description of the keys in the combination
     * @returns {KeySequence}
     */

  }, {
    key: "describe",
    value: function describe() {
      return this.getIds()[0];
    }
    /**
     * A plain JavaScript representation of the key combination record, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the combination record
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        keys: this._getKeyStates(),
        ids: this.getIds(),
        keyAliases: this.getKeyAliases()
      };
    }
    /********************************************************************************
     * Private methods
     *********************************************************************************/

  }, {
    key: "_getKeyStateType",
    value: function _getKeyStateType(keyName, keyStage, keyEventType) {
      var keyState = this._getKeyState(keyName);

      return keyState && keyState[keyStage][keyEventType];
    }
  }, {
    key: "_update",
    value: function _update() {
      this._ids = KeyCombinationSerializer.serialize(this._keys);
      this._keyAliases = buildKeyAliases(this._keys);
    }
  }, {
    key: "_isKeyEventSimulated",
    value: function _isKeyEventSimulated(keyName, keyEventType) {
      return this.isEventTriggered(keyName, keyEventType) === KeyEventState.simulated;
    }
  }, {
    key: "_getKeyStates",
    value: function _getKeyStates() {
      return this._keys;
    }
  }, {
    key: "_getKeyState",
    value: function _getKeyState(keyName) {
      var keyState = this._keys[keyName];

      if (keyState) {
        return keyState;
      } else {
        var keyAlias = this._keyAliases[keyName];

        if (keyAlias) {
          return this._keys[keyAlias];
        }
      }
    }
  }, {
    key: "_setKeyState",
    value: function _setKeyState(keyName, keyState) {
      var keyAlias = this.getNormalizedKeyName(keyName);
      this._keys[keyAlias] = keyState;

      this._update();
    }
  }]);

  return KeyCombination;
}();

function buildKeyAliases(keyDictionary) {
  return Object.keys(keyDictionary).reduce(function (memo, keyName) {
    resolveKeyAlias(keyName).forEach(function (normalizedKey) {
      applicableAliasFunctions(keyDictionary).forEach(function (aliasFunction) {
        aliasFunction(normalizedKey).forEach(function (keyAlias) {
          if (keyAlias !== keyName || keyName !== normalizedKey) {
            memo[keyAlias] = keyName;
          }
        });
      });
    });
    return memo;
  }, {});
}

function _classCallCheck$j(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$j(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$j(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$j(Constructor.prototype, protoProps); if (staticProps) _defineProperties$j(Constructor, staticProps); return Constructor; }
/**
 * List of key combinations seen by hot key components
 * @class
 */

var KeyHistory =
/*#__PURE__*/
function () {
  /**
   * Creates a new KeyHistory instance
   * @param {Number} maxLength Maximum length of the list.
   * @param {KeyCombination} startingPoint Initial state of first combination
   * @returns {KeyHistory}
   */
  function KeyHistory(_ref) {
    var maxLength = _ref.maxLength;
    var startingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck$j(this, KeyHistory);

    this._records = [];
    this._maxLength = maxLength;

    if (startingPoint) {
      this._push(startingPoint);
    } else {
      this._push(new KeyCombination());
    }
  }
  /**
   * A subset of the most recently press key combinations
   * @param {Number} numberOfCombinations The number of most recent key combinations
   * @returns {KeyCombination[]} List of key combinations
   */


  _createClass$j(KeyHistory, [{
    key: "getMostRecentCombinations",
    value: function getMostRecentCombinations(numberOfCombinations) {
      return this._records.slice(-numberOfCombinations, -1);
    }
    /**
     * Whether any keys have been stored in the key history
     * @returns {boolean} true if there is at least one key combination, else false
     */

  }, {
    key: "any",
    value: function any() {
      return this._records.some(function (keyCombination) {
        return keyCombination.any();
      });
    }
    /**
     * The number of key combinations in the history (limited by the max length)
     * @returns {number} Number of key combinations
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this._records.length;
    }
    /**
     * Most recent or current key combination
     * @returns {KeyCombination} Key combination record
     */

  }, {
    key: "getCurrentCombination",
    value: function getCurrentCombination() {
      return this._records[this.getLength() - 1];
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "addKeyToCurrentCombination",
    value: function addKeyToCurrentCombination(keyName, recordIndex, keyEventState) {
      this._ensureInitialKeyCombination();

      this.getCurrentCombination().setKeyState(keyName, recordIndex, keyEventState);
    }
    /**
     * Sets a new maximum length for the key combination history. Once the number of
     * key combinations exceeds this length, the oldest is dropped.
     * @param {Number} length New maximum length of the key history
     */

  }, {
    key: "setMaxLength",
    value: function setMaxLength(length) {
      this._maxLength = length;

      this._trimHistory();
    }
    /**
     * Adds a new KeyCombination to the event history.
     * @param {ReactKeyName} keyName - Name of the keyboard key to add to the new
     *        KeyCombination
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "startNewKeyCombination",
    value: function startNewKeyCombination(keyName, keyEventState) {
      this._ensureInitialKeyCombination();

      var newCombinationRecord = new KeyCombination(this.getCurrentCombination().keysStillPressedDict());
      newCombinationRecord.addKey(keyName, keyEventState);

      this._push(newCombinationRecord);
    }
    /**
     * A plain JavaScript representation of the key combination history, useful for
     * serialization or debugging
     * @returns {Object[]} Serialized representation of the registry
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._records.map(function (keyCombination) {
        return keyCombination.toJSON();
      });
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_ensureInitialKeyCombination",
    value: function _ensureInitialKeyCombination() {
      if (this.getLength() === 0) {
        this._push(new KeyCombination());
      }
    }
  }, {
    key: "_push",
    value: function _push(record) {
      this._trimHistory();

      this._records.push(record);
    }
  }, {
    key: "_trimHistory",
    value: function _trimHistory() {
      while (this.getLength() > this._maxLength) {
        /**
         * We know the longest key sequence registered for the currently focused
         * components, so we don't need to keep a record of history longer than
         * that
         */
        this._shift();
      }
    }
  }, {
    key: "_shift",
    value: function _shift() {
      this._records.shift();
    }
  }]);

  return KeyHistory;
}();

function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$i(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$i(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$i(Constructor.prototype, protoProps); if (staticProps) _defineProperties$i(Constructor, staticProps); return Constructor; }

/**
 * Generic registry for storing and retrieving items
 * @class @abstract
 */
var Registry =
/*#__PURE__*/
function () {
  /**
   * Create a new Registry instance
   * @returns {Registry}
   */
  function Registry() {
    _classCallCheck$i(this, Registry);

    this._registry = {};
  }
  /**
   * Returns the registry item stored with against an id
   * @param {*} id The key item was registered with
   * @returns {*} Item stored in registry
   */


  _createClass$i(Registry, [{
    key: "get",
    value: function get(id) {
      return this._registry[id];
    }
    /**
     * Add an item to the registry
     * @param {*} id Key to store the item against
     * @param {*} item Item to store in the registry
     */

  }, {
    key: "set",
    value: function set(id, item) {
      this._registry[id] = item;
    }
    /**
     * Remove an item from the registry
     * @param {*} id Key of the item to remove from the registry
     */

  }, {
    key: "remove",
    value: function remove(id) {
      delete this._registry[id];
    }
    /**
     * A plain JavaScript representation of the registry, useful for serialization or
     * debugging
     * @returns {Object.<*,*>} Serialized representation of the registry
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._registry;
    }
  }]);

  return Registry;
}();

function arrayFrom(target) {
  if (Array.isArray(target)) {
    return target;
  } else if (!target) {
    return [];
  } else {
    return [target];
  }
}

function without(target) {
  var attributesToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var omitDict = dictionaryFrom(arrayFrom(attributesToOmit));

  if (Array.isArray(target)) {
    return target.reduce(function (memo, element) {
      if (!(omitDict[element] && (options.stringifyFirst || omitDict[element].value === element))) {
        memo.push(element);
      }

      return memo;
    }, []);
  } else if (isObject(target)) {
    return Object.keys(target).reduce(function (memo, key) {
      if (!omitDict[key]) {
        memo[key] = target[key];
      }

      return memo;
    }, {});
  } else {
    return target;
  }
}

function _typeof$8(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$h(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$h(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$h(Constructor.prototype, protoProps); if (staticProps) _defineProperties$h(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get$2(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get$2 = Reflect.get; } else { _get$2 = function _get(target, property, receiver) { var base = _superPropBase$2(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get$2(target, property, receiver || target); }

function _superPropBase$2(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf$8(object); if (object === null) break; } return object; }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }
/**
 * @typedef {Object} ComponentRegistryEntry
 * @property {ComponentId[]} childIds List of ids of the children of a component
 * @property {ComponentId|null} parentIds Id of the parent component
 */

/**
 * Registry of hot keys components, mapping children to their parents and vice versa
 * @class
 */

var ComponentTree =
/*#__PURE__*/
function (_Registry) {
  _inherits$8(ComponentTree, _Registry);

  function ComponentTree() {
    _classCallCheck$h(this, ComponentTree);

    return _possibleConstructorReturn$8(this, _getPrototypeOf$8(ComponentTree).apply(this, arguments));
  }

  _createClass$h(ComponentTree, [{
    key: "add",

    /**
     * Register a component
     * @param {ComponentId} componentId Id of the component to register
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {void}
     */
    value: function add(componentId, keyMap) {
      _get$2(_getPrototypeOf$8(ComponentTree.prototype), "set", this).call(this, componentId, {
        childIds: [],
        parentId: null,
        keyMap: keyMap
      });
    }
    /**
     * Updates an existing component's key map
     * @param {ComponentId} componentId Id of the component to register
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {void}
     */

  }, {
    key: "update",
    value: function update(componentId, keyMap) {
      var component = _get$2(_getPrototypeOf$8(ComponentTree.prototype), "get", this).call(this, componentId);

      _get$2(_getPrototypeOf$8(ComponentTree.prototype), "set", this).call(this, componentId, _objectSpread$7({}, component, {
        keyMap: keyMap
      }));
    }
    /**
     * Set the parent ID of a component
     * @param {ComponentId} componentId Id of the component
     * @param {ComponentId} parentId Id of the parent
     * @returns {void}
     */

  }, {
    key: "setParent",
    value: function setParent(componentId, parentId) {
      this.get(componentId).parentId = parentId;

      this._addChildId(parentId, componentId);
    }
    /**
     * Deregister a component
     * @param {ComponentId} componentId Id of the component to remove
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove(componentId) {
      var parentId = this._getParentId(componentId);

      this._removeChildId(parentId, componentId);

      _get$2(_getPrototypeOf$8(ComponentTree.prototype), "remove", this).call(this, componentId);
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_getParentId",
    value: function _getParentId(componentId) {
      var component = this.get(componentId);
      return component && component.parentId;
    }
  }, {
    key: "_addChildId",
    value: function _addChildId(parentId, componentId) {
      this.get(parentId).childIds.push(componentId);
    }
  }, {
    key: "_removeChildId",
    value: function _removeChildId(parentId, childId) {
      var parent = this.get(parentId);

      if (parent) {
        parent.childIds = without(parent.childIds, childId);
      }
    }
  }]);

  return ComponentTree;
}(Registry);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function removeAtIndex(array, index) {
  return [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1)));
}

function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); return Constructor; }

/**
 * Iterates over ComponentOptionList instances
 * @class
 */
var ComponentOptionsListIterator =
/*#__PURE__*/
function () {
  /**
   * Creates a new instance of ComponentOptionsListIterator
   * @param {ComponentOptionsList} list The list to iterate over
   */
  function ComponentOptionsListIterator(list) {
    _classCallCheck$g(this, ComponentOptionsListIterator);

    this._list = list;
    this._position = -1;
  }
  /**
   * The position the iterator is currently at
   * @returns {number} The current position
   */


  _createClass$g(ComponentOptionsListIterator, [{
    key: "getPosition",
    value: function getPosition() {
      return this._position;
    }
    /**
     * The component options the iterator is currently pointed at
     * @returns {ComponentOptions} The current component options
     */

  }, {
    key: "getComponent",
    value: function getComponent() {
      return this._list.getAtPosition(this.getPosition());
    }
    /**
     * Move to the next component options in the list, if not already at the end of the
     * list.
     * @returns {ComponentOptionsList|null} The next component options the iterator is now
     *        pointed at. If the iterator is already at the last component options, null
     *        is returned.
     */

  }, {
    key: "next",
    value: function next() {
      if (this.getPosition() + 1 < this._list.getLength()) {
        this._position++;
        return this.getComponent();
      } else {
        return null;
      }
    }
  }]);

  return ComponentOptionsListIterator;
}();

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); return Constructor; }
/**
 * @typedef {Object} ComponentOptions a hotkeys component's options in a normalized
 *          format
 * @property {ActionDictionary} actions The dictionary of actions defined by the
 *           component
 */

/**
 * A mapping between ActionName and ActionConfiguration
 * @typedef {Object.<ActionName,ActionConfiguration>} ActionDictionary
 */

/**
 * Standardized format for defining an action
 * @typedef {Object} ActionConfiguration
 * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
 *          combinations, before the final key combination (an empty string for
 *          sequences that are a single key combination)
 * @property {ActionName} actionName - Name of the action
 * @property {number} sequenceLength - Number of combinations involved in the
 *           sequence
 * @property {KeyCombinationString} id - Serialized description of the key combinations
 *            that make up the sequence
 * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
 *           in the last key combination of the sequence
 * @property {KeyEventType} keyEventType - Record index for key event that
 *          the matcher should match on
 * @property {number} size - Number of keys involved in the final key combination
 */

/**
 * List of component options that define the application's currently enabled key
 * maps and handlers, starting from the inner-most (most deeply nested) component,
 * that is closest to the DOM element currently in focus, and ending with the options
 * of the root hotkeys component.
 * @class
 */

var ComponentOptionsList =
/*#__PURE__*/
function () {
  function ComponentOptionsList() {
    _classCallCheck$f(this, ComponentOptionsList);

    /**
     * List of ComponentOptions for the actions registered by each hot keys component.
     * @type {ComponentOptions[]}
     */
    this._list = [];
    /**
     * Dictionary mapping the ids of the components defining actions, and their
     * position in the list.
     * @type {Object.<ComponentId, Number>}
     */

    this._idToIndex = {};
    /**
     * Counter for the length of the longest sequence currently enabled.
     * @type {number}
     */

    this._longestSequence = 1;
    /**
     * The id of the component with the longest key sequence
     * @type {ComponentId}
     */

    this._longestSequenceComponentId = null;
    /**
     * Record of whether at least one keymap is bound to each event type (keydown,
     * keypress or keyup)
     * @type {KeyEvent}
     */

    this._keyMapEventRecord = KeyEventStateArrayManager.newRecord();
  }
  /**
   * Return a new iterator that can be used to enumerate the list
   * @returns {ComponentOptionsListIterator}
   */


  _createClass$f(ComponentOptionsList, [{
    key: "getNewIterator",
    value: function getNewIterator() {
      return new ComponentOptionsListIterator(this);
    }
    /**
     * Adds a new hot key component's options, to be parsed and standardised before being
     * added to the list
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */

  }, {
    key: "add",
    value: function add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      if (this.containsId(componentId)) {
        return this.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }

      var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this._list.push(componentOptions);

      var newIndex = this._getLastIndex();

      return this._idToIndex[componentId] = newIndex;
    }
    /**
     * Whether the list contains options for a component with the specified id
     * @param {ComponentId} id Id of the component
     * @returns {boolean} True if the list contains options for the component with the
     *        specified id
     */

  }, {
    key: "containsId",
    value: function containsId(id) {
      return !!this.get(id);
    }
    /**
     * Retrieves options for a component from the list
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {ComponentOptions} Options for the component with the specified id
     */

  }, {
    key: "get",
    value: function get(id) {
      return this.getAtPosition(this.getIndexById(id));
    }
    /**
     * Returns the position of the options belonging to the component with the specified
     * id.
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {number} The position of the component options in the list.
     */

  }, {
    key: "getIndexById",
    value: function getIndexById(id) {
      return this._idToIndex[id];
    }
    /**
     * Replaces the options of a component already in the list with new values
     * @param {ComponentId} componentId - Id of the component to replace the options of
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */

  }, {
    key: "update",
    value: function update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      /**
       * We record whether we're building new options for the component that currently
       * has the longest sequence, to decide whether we need to recalculate the longest
       * sequence.
       */
      var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(componentId);

      var longestSequenceBefore = this.getLongestSequence();

      var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      if (isUpdatingLongestSequenceComponent && componentOptions.sequenceLength !== longestSequenceBefore) {
        /**
         * Component with the longest sequence has just had new options registered
         * so we need to reset the longest sequence
         */
        if (componentOptions.sequenceLength > longestSequenceBefore) {
          /**
           * The same component has registered a longer sequence, so we just
           * need to update the sequence length to the new, larger number
           */
          this._longestSequence = componentOptions.sequenceLength;
        } else {
          /**
           * The component may no longer have the longest sequence, so we need to
           * recalculate
           */
          this._recalculateLongestSequence();
        }
      }

      this._list[this.getIndexById(componentId)] = componentOptions;
    }
    /**
     * Removes the options of a component from the list
     * @param {ComponentId} id The id of the component whose options are removed
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove(id) {
      var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(id);

      this.removeAtPosition(this.getIndexById(id));

      if (isUpdatingLongestSequenceComponent) {
        this._recalculateLongestSequence();
      }
    }
    /**
     * Whether the list has any options in it (non-empty)
     * @returns {boolean} true if the list has one or more options in it
     */

  }, {
    key: "any",
    value: function any() {
      return this.getLength() !== 0;
    }
    /**
     * Whether a component is the root component (the last one in the list)
     * @param {ComponentId} id Id of the component to query if it is the root
     * @returns {boolean} true if the component is the last in the list
     */

  }, {
    key: "isRoot",
    value: function isRoot(id) {
      return this.getIndexById(id) >= this.getLength() - 1;
    }
    /**
     * The length of the longest sequence currently defined.
     * @returns {number} The sequence length
     */

  }, {
    key: "getLongestSequence",
    value: function getLongestSequence() {
      return this._longestSequence;
    }
    /**
     * Whether the list contains at least one component with an action bound to a
     * particular keyboard event type.
     * @param {KeyEventType} keyEventType Index of the keyboard event type
     * @returns {boolean} true when the list contains a component with an action bound
     *          to the event type
     */

  }, {
    key: "anyActionsForEventType",
    value: function anyActionsForEventType(keyEventType) {
      return !!this._keyMapEventRecord[keyEventType];
    }
    /**
     * The number of components in the list
     * @returns {number} Number of components in the list
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this._list.length;
    }
    /**
     * The component options at particular position in the list
     * @param {number} position The position in the list
     * @returns {ComponentOptions} The component options at the position in the list
     */

  }, {
    key: "getAtPosition",
    value: function getAtPosition(position) {
      return this._list[position];
    }
    /**
     * Remove the component options at a position in the list
     * @param {number} position The position in the list to remove the options
     * return {void}
     */

  }, {
    key: "removeAtPosition",
    value: function removeAtPosition(position) {
      this._list = removeAtIndex(this._list, position);
      var counter = position;

      while (counter < this.getLength()) {
        this._idToIndex[this.getAtPosition(counter).componentId] = counter;
        counter++;
      }
    }
    /**
     * A plain JavaScript object representation of the component options list that can
     * be used for serialization or debugging
     * @returns {ComponentOptions[]} plain JavaScript object representation of the list
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._list;
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_getLastIndex",
    value: function _getLastIndex() {
      return this.getLength() - 1;
    }
    /**
     * Builds the internal representation that described the options passed to a hot keys
     * component
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @returns {ComponentOptions} Options for the specified component
     * @private
     */

  }, {
    key: "_build",
    value: function _build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      var _this$_applyHardSeque = this._applyHardSequences(actionNameToKeyMap, actionNameToHandlersMap),
          hardSequenceKeyMap = _this$_applyHardSeque.keyMap,
          includingHardSequenceHandlers = _this$_applyHardSeque.handlers;

      var actions = this._buildActionDictionary(_objectSpread$6({}, actionNameToKeyMap, hardSequenceKeyMap), options, componentId);

      return {
        actions: actions,
        handlers: includingHardSequenceHandlers,
        componentId: componentId,
        options: options
      };
    }
  }, {
    key: "_isUpdatingComponentWithLongestSequence",
    value: function _isUpdatingComponentWithLongestSequence(componentId) {
      return componentId === this._getLongestSequenceComponentId();
    }
  }, {
    key: "_getLongestSequenceComponentId",
    value: function _getLongestSequenceComponentId() {
      return this._longestSequenceComponentId;
    }
  }, {
    key: "_recalculateLongestSequence",
    value: function _recalculateLongestSequence() {
      var iterator = this.getNewIterator();

      while (iterator.next()) {
        var _iterator$getComponen = iterator.getComponent(),
            longestSequence = _iterator$getComponen.longestSequence,
            componentId = _iterator$getComponen.componentId;

        if (longestSequence > this.getLongestSequence()) {
          this._longestSequenceComponentId = componentId;
          this._longestSequence = longestSequence;
        }
      }
    }
    /**
     * Applies hard sequences (handlers attached to actions with names that are valid
     * KeySequenceStrings) that implicitly define a corresponding action name.
     * @param {KeyMap} actionNameToKeyMap - KeyMap specified by HotKeys component
     * @param {HandlersMap} actionMap - HandlersMap specified by HotKeys component
     * @returns {{keyMap: {}, handlers: {}}} Object containing keymap and handlers map
     *        with the hard sequence actions applied
     * @private
     */

  }, {
    key: "_applyHardSequences",
    value: function _applyHardSequences(actionNameToKeyMap, actionMap) {
      if (Configuration.option('enableHardSequences')) {
        return Object.keys(actionMap).reduce(function (memo, actionNameOrHardSequence) {
          var actionNameIsInKeyMap = !!actionNameToKeyMap[actionNameOrHardSequence];

          if (!actionNameIsInKeyMap && KeyCombinationSerializer.isValidKeySerialization(actionNameOrHardSequence)) {
            memo.keyMap[actionNameOrHardSequence] = actionNameOrHardSequence;
          }

          memo.handlers[actionNameOrHardSequence] = actionMap[actionNameOrHardSequence];
          return memo;
        }, {
          keyMap: {},
          handlers: {}
        });
      } else {
        return {
          keyMap: actionNameToKeyMap,
          handlers: actionMap
        };
      }
    }
    /**
     * Returns a mapping between ActionNames and ActionConfiguration
     * @param {KeyMap} actionNameToKeyMap - Mapping of ActionNames to key sequences.
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @param {ComponentId} componentId Index of the component the matcher belongs to
     * @returns {ActionDictionary} Map from ActionNames to ActionConfiguration
     * @private
     */

  }, {
    key: "_buildActionDictionary",
    value: function _buildActionDictionary(actionNameToKeyMap, options, componentId) {
      var _this = this;

      return Object.keys(actionNameToKeyMap).reduce(function (memo, actionName) {
        var keyMapConfig = actionNameToKeyMap[actionName];

        var keyMapOptions = function () {
          if (isObject(keyMapConfig) && hasKey(keyMapConfig, 'sequences')) {
            return arrayFrom(keyMapConfig.sequences);
          } else {
            return arrayFrom(keyMapConfig);
          }
        }();

        keyMapOptions.forEach(function (keyMapOption) {
          var _normalizeActionOptio = normalizeActionOptions(keyMapOption, options),
              keySequence = _normalizeActionOptio.keySequence,
              keyEventType = _normalizeActionOptio.keyEventType;

          _this._addActionOptions(memo, componentId, actionName, keySequence, keyEventType);
        });
        return memo;
      }, {});
    }
  }, {
    key: "_addActionOptions",
    value: function _addActionOptions(memo, componentId, actionName, keySequence, keyEventType) {
      var _KeySequenceParser$pa = KeySequenceParser.parse(keySequence, {
        keyEventType: keyEventType
      }),
          sequence = _KeySequenceParser$pa.sequence,
          combination = _KeySequenceParser$pa.combination;

      if (sequence.size > this.getLongestSequence()) {
        this._longestSequence = sequence.size;
        this._longestSequenceComponentId = componentId;
      }
      /**
       * Record that there is at least one key sequence in the focus tree bound to
       * the keyboard event
       */


      this._keyMapEventRecord[keyEventType] = KeyEventState.seen;

      if (!memo[actionName]) {
        memo[actionName] = [];
      }

      memo[actionName].push(_objectSpread$6({
        prefix: sequence.prefix,
        actionName: actionName,
        sequenceLength: sequence.size
      }, combination));
    }
  }]);

  return ComponentOptionsList;
}();

function normalizeActionOptions(keyMapOption, options) {
  if (isObject(keyMapOption)) {
    var sequence = keyMapOption.sequence,
        action = keyMapOption.action;
    return {
      keySequence: sequence,
      keyEventType: isUndefined(action) ? KeyEventType[options.defaultKeyEvent] : KeyEventType[action]
    };
  } else {
    return {
      keySequence: keyMapOption,
      keyEventType: KeyEventType[options.defaultKeyEvent]
    };
  }
}

/**
 * Returns the element in an array at a particular index from the end
 * @param {Array.<T>} array Array to iterate over to find the item
 * @param {number} placesFromEnd Number of places from the end of the array to find
 *        the item to return
 * @returns {T} The item found in the array at the particular index
 * @template T
 */
function indexFromEnd(array, placesFromEnd) {
  return array[array.length - (placesFromEnd + 1)];
}

/**
 * Dictionary of keys that, when pressed down with the cmd key, never trigger a keyup
 * event in the browser
 */
var KeysWithKeyUpHiddenByCmd = {
  Enter: true,
  Backspace: true,
  ArrowRight: true,
  ArrowLeft: true,
  ArrowUp: true,
  ArrowDown: true,

  /**
   * Caps lock is a strange case where it not only fails to trigger a keyup event when,
   * pressed with cmd, but it's keyup event is triggered when caps lock is toggled off
   */
  CapsLock: true
};

for (var i = 1; i < 13; i++) {
  KeysWithKeyUpHiddenByCmd["F".concat(i)] = true;
}

/**
 * Whether the specified key, when pressed down with the cmd key, never triggers a keyup
 * event in the browser
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has its keyup event hidden by cmd
 */

function keyupIsHiddenByCmd(keyName) {
  return keyName.length === 1 || hasKey(KeysWithKeyUpHiddenByCmd, keyName);
}

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); return Constructor; }
/**
 * Object containing all information necessary to match a handler to a history of
 * key combinations
 * @typedef {Object} MatchingActionConfig
 * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
 *          combinations, before the final key combination (an empty string for
 *          sequences that are a single key combination)
 * @property {number} sequenceLength - Number of combinations involved in the
 *           sequence
 * @property {KeyCombinationString} id - Serialized description of the key combinations
 *            that make up the sequence
 * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
 *           in the last key combination of the sequence
 * @property {KeyEventType} keyEventType - Record index for key event that
 *          the matcher should match on
 * @property {number} size - Number of keys involved in the final key combination
 * @property {EventMatchDictionary} events - Dictionary of EventMatches
 */

/**
 * A dictionary mapping key event types to event matches
 * @typedef {Object.<KeyEventType, EventMatch>} EventMatchDictionary
 */

/**
 * Object containing information to call a handler if an event type matches a
 * key event
 * @typedef {Object} EventMatch
 * @property {ActionName} actionName - Name of the action
 * @property {Function} handler - Handler to call if event type matches
 */

/**
 * Matches a KeyCombination to a list of pre-registered ActionConfiguration and their
 * corresponding handler functions
 * @class
 */

var KeyCombinationMatcher =
/*#__PURE__*/
function () {
  /**
   * Returns a new instance of KeyCombinationMatcher
   * @returns {KeyCombinationMatcher}
   */
  function KeyCombinationMatcher() {
    _classCallCheck$e(this, KeyCombinationMatcher);

    this._actionConfigs = {};
    this._order = null;
  }
  /**
   * Adds a new ActionConfiguration and handler to those that can be used to match a
   * KeyCombination
   * @param {ActionConfiguration} actionConfig
   * @param {Function} handler Function to call if match is selected
   * @returns {void}
   */


  _createClass$e(KeyCombinationMatcher, [{
    key: "addMatch",
    value: function addMatch(actionConfig, handler) {
      if (this._includesMatcherForCombination(actionConfig.id)) {
        var keyEventType = actionConfig.keyEventType,
            actionName = actionConfig.actionName,
            id = actionConfig.id;

        this._addHandlerToActionConfig(id, {
          keyEventType: keyEventType,
          actionName: actionName,
          handler: handler
        });
      } else {
        this._addNewActionConfig(actionConfig, handler);
      }
    }
    /**
     * Finds a MatchingActionConfig for a KeyCombination, ReactKeyName and
     * KeyEventType
     * @param {KeyCombination} keyCombination Record of key combinations
     *         to use in the match
     * @param {ReactKeyName} keyName Name of the key to use in the match
     * @param {KeyEventType} keyEventType The type of key event to use in the match
     * @returns {MatchingActionConfig|null} A MatchingActionOptions that matches the
     *          KeyCombination, ReactKeyName and KeyEventType
     */

  }, {
    key: "findMatch",
    value: function findMatch(keyCombination, keyName, keyEventType) {
      if (!this._order) {
        this._setOrder();
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._order[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var combinationId = _step.value;
          var actionOptions = this._actionConfigs[combinationId];

          if (this._matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions)) {
            return actionOptions;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
    /********************************************************************************
     * Presentation
     ********************************************************************************/

    /**
     * A plain JavaScript representation of the KeyCombinationMatcher, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the key combination matcher
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        actionConfigs: this._actionConfigs,
        order: this._order
      };
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_matchesActionConfig",
    value: function _matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions) {
      if (!canBeMatched(keyCombination, actionOptions)) {
        return false;
      }

      var combinationHasHandlerForEventType = actionOptions.events[keyEventType];

      if (!combinationHasHandlerForEventType) {
        /**
         * If the combination does not have any actions bound to the key event we are
         * currently processing, we skip checking if it matches the current keys being
         * pressed.
         */
        return false;
      }

      var keyCompletesCombination = false;
      var combinationMatchesKeysPressed = Object.keys(actionOptions.keyDictionary).every(function (candidateKeyName) {
        if (keyCombination.isEventTriggered(candidateKeyName, keyEventType)) {
          if (keyName && keyName === keyCombination.getNormalizedKeyName(candidateKeyName)) {
            keyCompletesCombination = !keyCombination.wasEventPreviouslyTriggered(candidateKeyName, keyEventType);
          }

          return true;
        } else {
          return false;
        }
      });
      return combinationMatchesKeysPressed && keyCompletesCombination;
    }
  }, {
    key: "_setOrder",
    value: function _setOrder() {
      /**
       * The first time the component that is currently handling the key event has
       * its handlers searched for a match, order the combinations based on their
       * size so that they may be applied in the correct priority order
       */
      var combinationsPartitionedBySize = Object.values(this._actionConfigs).reduce(function (memo, _ref) {
        var id = _ref.id,
            size = _ref.size;

        if (!memo[size]) {
          memo[size] = [];
        }

        memo[size].push(id);
        return memo;
      }, {});
      this._order = Object.keys(combinationsPartitionedBySize).sort(function (a, b) {
        return b - a;
      }).reduce(function (memo, key) {
        return memo.concat(combinationsPartitionedBySize[key]);
      }, []);
    }
  }, {
    key: "_addNewActionConfig",
    value: function _addNewActionConfig(combinationSchema, handler) {
      var prefix = combinationSchema.prefix,
          sequenceLength = combinationSchema.sequenceLength,
          id = combinationSchema.id,
          keyDictionary = combinationSchema.keyDictionary,
          size = combinationSchema.size,
          keyEventType = combinationSchema.keyEventType,
          actionName = combinationSchema.actionName;

      this._setCombinationMatcher(id, {
        prefix: prefix,
        sequenceLength: sequenceLength,
        id: id,
        keyDictionary: keyDictionary,
        size: size,
        events: {}
      });

      this._addHandlerToActionConfig(id, {
        keyEventType: keyEventType,
        actionName: actionName,
        handler: handler
      });
    }
  }, {
    key: "_addHandlerToActionConfig",
    value: function _addHandlerToActionConfig(id, _ref2) {
      var keyEventType = _ref2.keyEventType,
          actionName = _ref2.actionName,
          handler = _ref2.handler;

      var combination = this._getCombinationMatcher(id);

      this._setCombinationMatcher(id, _objectSpread$5({}, combination, {
        events: _objectSpread$5({}, combination.events, _defineProperty$7({}, keyEventType, {
          actionName: actionName,
          handler: handler
        }))
      }));
    }
  }, {
    key: "_setCombinationMatcher",
    value: function _setCombinationMatcher(id, combinationMatcher) {
      this._actionConfigs[id] = combinationMatcher;
    }
  }, {
    key: "_getCombinationMatcher",
    value: function _getCombinationMatcher(id) {
      return this._actionConfigs[id];
    }
  }, {
    key: "_includesMatcherForCombination",
    value: function _includesMatcherForCombination(id) {
      return !!this._getCombinationMatcher(id);
    }
  }]);

  return KeyCombinationMatcher;
}();

function canBeMatched(keyCombination, combinationMatcher) {
  var combinationKeysNo = size(combinationMatcher.keyDictionary);

  if (Configuration.option('allowCombinationSubmatches') || keyUpIsBeingHidden(keyCombination)) {
    return keyCombination.getNumberOfKeys() >= combinationKeysNo;
  } else {
    /**
     * If sub-matches are not allow, the number of keys in the key state and the
     * number of keys in the combination we are attempting to match, must be
     * exactly the same
     */
    return keyCombination.getNumberOfKeys() === combinationKeysNo;
  }
}

function keyUpIsBeingHidden(keyCombination) {
  if (keyCombination.isKeyStillPressed('Meta')) {
    return keyCombination.some(function (keyName) {
      return keyupIsHiddenByCmd(keyName);
    });
  }

  return false;
}

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }
/**
 * Matches a KeyHistory to a list of pre-registered ActionConfiguration and
 * their corresponding handler functions
 * @class
 */

var KeyHistoryMatcher =
/*#__PURE__*/
function () {
  /**
   * Returns a new instance of KeyMapMatcher
   * @returns {KeyHistoryMatcher}
   */
  function KeyHistoryMatcher() {
    _classCallCheck$d(this, KeyHistoryMatcher);

    this._combinationMatchers = {};
    this._eventRecord = KeyEventStateArrayManager.newRecord();
  }
  /**
   * Adds a possible match that can be used to match key combination histories
   * @param {ActionConfiguration} actionConfig The configuration object that
   *        defines the action the possible match represents
   * @param {Function} handler Function to call if the possible match is selected
   *        when matching against a key combination history
   * @returns {void}
   */


  _createClass$d(KeyHistoryMatcher, [{
    key: "addMatch",
    value: function addMatch(actionConfig, handler) {
      var combinationMatcher = this._getOrCreateCombinationMatcher(actionConfig.prefix);

      combinationMatcher.addMatch(actionConfig, handler);
      /**
       * Merge event records so we can quickly determine if a given component
       * has any handlers bound to particular key events
       */

      KeyEventStateArrayManager.setBit(this._eventRecord, actionConfig.keyEventType, KeyEventState.seen);
      /**
       * Record the longest sequence length so we know to only check for sequences
       * of that length or shorter for a particular component
       */

      if (!this._longestSequence || this._longestSequence < actionConfig.sequenceLength) {
        this._longestSequence = actionConfig.sequenceLength;
      }
    }
    /**
     * Attempts to find a match from the list of possible matches previously registered
     * for a given key event and key combination history
     * @param {KeyHistory} keyHistory History to attempt to
     *        find a match for
     * @param {ReactKeyName} key Name of the key to find a match for
     * @param {KeyEventType} keyEventType Type of event to find a match
     * @returns {MatchingActionConfig|null} First MatchingActionOptions that matches
     */

  }, {
    key: "findMatch",
    value: function findMatch(keyHistory, key, keyEventType) {
      var combinationMatcher = this._findCombinationMatcher(keyHistory);

      if (combinationMatcher) {
        return combinationMatcher.findMatch(keyHistory.getCurrentCombination(), keyHistory.getCurrentCombination().getNormalizedKeyName(key), keyEventType);
      }

      return null;
    }
    /**
     * Whether a possible match has been registered for a key event type
     * @param {KeyEventType} eventType Type of event
     * @returns {boolean} true if at least one possible match has been registered for
     *        the event
     */

  }, {
    key: "hasMatchesForEventType",
    value: function hasMatchesForEventType(eventType) {
      return !!this._eventRecord[eventType];
    }
    /**
     * The number of combinations involved for the ActionConfiguration with the longest
     * key sequence
     * @returns {number} Number of combinations in the longest sequence
     */

  }, {
    key: "getLongestSequence",
    value: function getLongestSequence() {
      return this._longestSequence;
    }
    /********************************************************************************
     * Presentation
     ********************************************************************************/

    /**
     * A plain JavaScript representation of the KeyMapMatcher, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the key map matcher
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this = this;

      return Object.keys(this._combinationMatchers).reduce(function (memo, prefix) {
        var combinationMatcher = _this._combinationMatchers[prefix];
        memo[prefix] = combinationMatcher.toJSON();
        return memo;
      }, {});
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_getOrCreateCombinationMatcher",
    value: function _getOrCreateCombinationMatcher(prefix) {
      if (!this._combinationMatchers[prefix]) {
        this._combinationMatchers[prefix] = new KeyCombinationMatcher();
      }

      return this._combinationMatchers[prefix];
    }
  }, {
    key: "_findCombinationMatcher",
    value: function _findCombinationMatcher(keyHistory) {
      var sequenceHistory = keyHistory.getMostRecentCombinations(this.getLongestSequence());

      if (sequenceHistory.length === 0) {
        return this._combinationMatchers[''];
      }

      var sequenceIds = sequenceHistory.map(function (keyCombination) {
        return keyCombination.getIds();
      });
      var idSizes = sequenceIds.map(function (ids) {
        return ids.length;
      });
      /**
       * List of counters
       * @type {number[]}
       */

      var indexCounters = new Array(sequenceIds.length).fill(0);
      var triedAllPossiblePermutations = false;

      while (!triedAllPossiblePermutations) {
        var sequenceIdPermutation = indexCounters.map(function (sequenceIdIndex, index) {
          return sequenceIds[index][sequenceIdIndex];
        });
        var candidateId = sequenceIdPermutation.join(' ');

        if (this._combinationMatchers[candidateId]) {
          return this._combinationMatchers[candidateId];
        }

        var incrementer = 0;
        var carry = true;

        while (carry && incrementer < indexCounters.length) {
          var count = indexFromEnd(indexCounters, incrementer);
          var newIndex = (count + 1) % (indexFromEnd(idSizes, incrementer) || 1);
          indexCounters[indexCounters.length - (incrementer + 1)] = newIndex;
          carry = newIndex === 0;

          if (carry) {
            incrementer++;
          }
        }

        triedAllPossiblePermutations = incrementer === indexCounters.length;
      }
    }
  }]);

  return KeyHistoryMatcher;
}();

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }
/**
 * Resolves the correct actions to trigger for a list of hotkeys components and a
 * history of key events
 * @class
 */

var ActionResolver =
/*#__PURE__*/
function () {
  /**
   * Creates a new instance of ActionResolver
   * @param {ComponentOptionsList} componentList List of components
   * @returns {ActionResolver}
   */
  function ActionResolver(componentList) {
    _classCallCheck$c(this, ActionResolver);

    /**
     * List of mappings from key sequences to handlers that is constructed on-the-fly
     * as key events propagate up the render tree
     * @type {KeyHistoryMatcher[]}
     */
    this._keyMapMatchers = [];
    /**
     * Array of counters - one for each component - to keep track of how many handlers
     * for that component still need actions assigned to them
     * @type {Array.<Number,Object>}
     */

    this._unmatchedHandlerStatus = [];
    /**
     * A dictionary mapping action names to the position in the list of the components
     * that define handlers for them
     * @type {Object.<ActionName, Number[]>}
     */

    this._handlersDictionary = {};
    /**
     * A dictionary of sequences already encountered in the process of building the
     * list of keyMaps on the fly, as key events propagate up the component tree
     * @type {Object.<MouseTrapKeySequence, Number[]>}
     */

    this._keySequencesDictionary = {};
    var iterator = componentList.getNewIterator();

    while (iterator.next()) {
      var _iterator$getComponen = iterator.getComponent(),
          handlers = _iterator$getComponen.handlers;

      this._unmatchedHandlerStatus.push([Object.keys(handlers).length, {}]);

      this._keyMapMatchers.push(new KeyHistoryMatcher());
    }

    this._componentList = componentList;
    this._componentListIterator = componentList.getNewIterator();
  }
  /**
   * The KeyHistoryMatcher for the component in a particular position
   * @param {number} componentPosition Position of component to find the
   *        KeyHistoryMatcher for
   * @returns {KeyHistoryMatcher} Key combination matcher that corresponds
   *        to the component
   */


  _createClass$c(ActionResolver, [{
    key: "getKeyHistoryMatcher",
    value: function getKeyHistoryMatcher(componentPosition) {
      if (this._componentHasUnmatchedHandlers(componentPosition)) {
        /**
         * We build the mapping between actions and their closest handlers the
         * first time the key map for the component at <tt>position</tt> is accessed.
         *
         * We must search higher than the current component for actions, as they are
         * often defined in parent components of those that ultimately define their
         * handlers.
         */
        while (this._componentListIterator.next()) {
          this._addHandlersFromComponent();

          this._addActionsFromComponent();
        }
      }

      return this._getKeyHistoryMatcher(componentPosition);
    }
    /**
     * Whether a component has one or more actions bound to an event type
     * @param {number} componentPosition Position of the component
     * @param {KeyEventType} keyEventType
     * @returns {boolean} true if the component has an action bound to the event type
     */

  }, {
    key: "componentHasActionsBoundToEventType",
    value: function componentHasActionsBoundToEventType(componentPosition, keyEventType) {
      return this.getKeyHistoryMatcher(componentPosition).hasMatchesForEventType(keyEventType);
    }
    /**
     * Finds matcher for sequence and current key event for a component at a position
     * @param {number} componentPosition Position of the component
     * @param {KeyHistory} keyHistory History of key combinations to match
     *        against actions defined in component
     * @param {ReactKeyName} keyName Name of the key the current event relates to
     * @param {KeyEventType} keyEventType Type of key event
     * @returns {Object|null}
     */

  }, {
    key: "findMatchingKeySequenceInComponent",
    value: function findMatchingKeySequenceInComponent(componentPosition, keyHistory, keyName, keyEventType) {
      if (!this.componentHasActionsBoundToEventType(componentPosition, keyEventType)) {
        return null;
      }

      return this.getKeyHistoryMatcher(componentPosition).findMatch(keyHistory, keyName, keyEventType);
    }
    /********************************************************************************
     * Private methods
     *********************************************************************************/

  }, {
    key: "_getKeyHistoryMatcher",
    value: function _getKeyHistoryMatcher(index) {
      return this._keyMapMatchers[index];
    }
  }, {
    key: "_addActionsFromComponent",
    value: function _addActionsFromComponent() {
      var _this = this;

      var _this$_componentListI = this._componentListIterator.getComponent(),
          actions = _this$_componentListI.actions;
      /**
       * Iterate over the actions of a component (starting with the current component
       * and working through its ancestors), matching them to the current component's
       * handlers
       */


      Object.keys(actions).forEach(function (actionName) {
        var handlerComponentIndexArray = _this._getHandlers(actionName);

        if (handlerComponentIndexArray) {
          /**
           * Get action handler closest to the event target
           */
          var handlerComponentIndex = handlerComponentIndexArray[0];

          var handler = _this._componentList.getAtPosition(handlerComponentIndex).handlers[actionName];
          /**
           * Get key map that corresponds with the component that defines the handler
           * closest to the event target
           */


          var keyMapMatcher = _this._getKeyHistoryMatcher(handlerComponentIndex);
          /**
           * At least one child HotKeys component (or the component itself) has
           * defined a handler for the action, so now we need to associate them
           */


          var actionOptionsList = actions[actionName];
          actionOptionsList.forEach(function (actionOptions) {
            var keySequence = [actionOptions.prefix, actionOptions.id].join(' ');

            if (_this._isClosestHandlerFound(keySequence, actionOptions)) {
              /**
               * Return if there is already a component with handlers for the current
               * key sequence closer to the event target
               */
              return;
            }

            keyMapMatcher.addMatch(actionOptions, handler);

            _this._addKeySequence(keySequence, [handlerComponentIndex, actionOptions.keyEventType]);
          });
          handlerComponentIndexArray.forEach(function (handlerComponentIndex) {
            var handlerComponentStatus = _this._getUnmatchedHandlerStatus(handlerComponentIndex);

            if (!handlerComponentStatus[1][actionName]) {
              handlerComponentStatus[1][actionName] = true;
              /**
               * Decrement the number of remaining unmatched handlers for the
               * component currently handling the propagating key event, so we know
               * when all handlers have been matched to sequences and we can move on
               * to matching them against the current key event
               */

              handlerComponentStatus[0]--;
            }
          });
        }
      });
    }
  }, {
    key: "_getHandlers",
    value: function _getHandlers(actionName) {
      return this._handlersDictionary[actionName];
    }
  }, {
    key: "_addHandlersFromComponent",
    value: function _addHandlersFromComponent() {
      var _this2 = this;

      var _this$_componentListI2 = this._componentListIterator.getComponent(),
          handlers = _this$_componentListI2.handlers;
      /**
       * Add current component's handlers to the handlersDictionary so we know
       * which component has defined them
       */


      Object.keys(handlers).forEach(function (actionName) {
        _this2._addHandler(actionName);
      });
    }
  }, {
    key: "_addHandler",
    value: function _addHandler(actionName) {
      if (!this._handlersDictionary[actionName]) {
        this._handlersDictionary[actionName] = [];
      }

      this._handlersDictionary[actionName].push(this._componentListIterator.getPosition());
    }
  }, {
    key: "_addKeySequence",
    value: function _addKeySequence(keySequence, value) {
      /**
       * Record that we have already found a handler for the current action so
       * that we do not override handlers for an action closest to the event target
       * with handlers further up the tree
       */
      if (!this._keySequencesDictionary[keySequence]) {
        this._keySequencesDictionary[keySequence] = [];
      }

      this._keySequencesDictionary[keySequence].push(value);
    }
  }, {
    key: "_componentHasUnmatchedHandlers",
    value: function _componentHasUnmatchedHandlers(componentIndex) {
      return this._getUnmatchedHandlerStatus(componentIndex)[0] > 0;
    }
  }, {
    key: "_getUnmatchedHandlerStatus",
    value: function _getUnmatchedHandlerStatus(index) {
      return this._unmatchedHandlerStatus[index];
    }
  }, {
    key: "_isClosestHandlerFound",
    value: function _isClosestHandlerFound(keySequence, keyMatcher) {
      return this._keySequencesDictionary[keySequence] && this._keySequencesDictionary[keySequence].some(function (dictEntry) {
        return dictEntry[1] === keyMatcher.keyEventType;
      });
    }
  }]);

  return ActionResolver;
}();

/**
 * Copies a list of attributes and their values from a source object to a target object.
 * The attributes are only copied if they exist on the source object.
 * @param {Object} source Object to copy the attributes from
 * @param {Object} target Object to copy the attributes to
 * @param {String[]} attributes List of attributes to copy
 * @returns {Object} The target object, now with the copied attributes
 */

function copyAttributes(source, target, attributes) {
  attributes.forEach(function (attributeName) {
    if (hasKey(source, attributeName)) {
      target[attributeName] = source[attributeName];
    }
  });
  return target;
}

/**
 * Returns the name of the event at a specified event record index
 * @param {KeyEventType} keyEventType
 * @returns {KeyEventName} Name of the key event
 */
function describeKeyEventType(keyEventType) {
  switch (parseInt(keyEventType, 10)) {
    case 0:
      return 'keydown';

    case 1:
      return 'keypress';

    default:
      return 'keyup';
  }
}

function printComponent(component) {
  return JSON.stringify(component, componentAttributeSerializer, 4);
}

function componentAttributeSerializer(key, value) {
  if (typeof value === 'function') {
    return value.toString();
  }

  return value;
}

/**
 * Whether the specified key name is for a key that has a native keypress event
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has a native keypress event
 */

function hasKeyPressEvent(keyName) {
  return !isNonPrintableKeyName(keyName);
}

function stateFromEvent(event) {
  return event.simulated ? KeyEventState.simulated : KeyEventState.seen;
}

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }
var SEQUENCE_ATTRIBUTES = ['sequence', 'action'];
var KEYMAP_ATTRIBUTES = ['name', 'description', 'group'];
/**
 * Defines common behaviour for key event strategies
 * @abstract
 * @class
 */

var AbstractKeyEventStrategy =
/*#__PURE__*/
function () {
  /********************************************************************************
   * Init & Reset
   ********************************************************************************/

  /**
   * Creates a new instance of an event strategy (this class is an abstract one and
   * not intended to be instantiated directly).
   * @param {Object} options Options for how event strategy should behave
   * @param {Logger} options.logger The Logger to use to report event strategy actions
   * @param {KeyEventManager} keyEventManager KeyEventManager used for passing
   *        messages between key event strategies
   */
  function AbstractKeyEventStrategy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$b(this, AbstractKeyEventStrategy);

    this.logger = options.logger || new Logger('warn');
    /**
     * @typedef {number} ComponentId Unique index associated with every HotKeys component
     * as it becomes active.
     *
     * For focus-only components, this happens when the component is focused. The HotKeys
     * component closest to the DOM element in focus gets the smallest number (0) and
     * those further up the render tree get larger (incrementing) numbers. When a different
     * element is focused (triggering the creation of a new focus tree) all component indexes
     * are reset (de-allocated) and re-assigned to the new tree of HotKeys components that
     * are now in focus.
     *
     * For global components, component indexes are assigned when a HotKeys component is
     * mounted, and de-allocated when it unmounts. The component index counter is never reset
     * back to 0 and just keeps incrementing as new components are mounted.
     */

    /**
     * Counter to maintain what the next component index should be
     * @type {ComponentId}
     */

    this.componentId = -1;
    /**
     * Reference to key event manager, so that information may pass between the
     * global strategy and the focus-only strategy
     * @type {KeyEventManager}
     */

    this.keyEventManager = keyEventManager;
    this._componentTree = new ComponentTree();
    this.rootComponentId = null;

    this._reset();

    this.resetKeyHistory();
  }
  /**
   * Resets all strategy state to the values it had when it was first created
   * @protected
   */


  _createClass$b(AbstractKeyEventStrategy, [{
    key: "_reset",
    value: function _reset() {
      this.componentList = new ComponentOptionsList();

      this._initHandlerResolutionState();
    }
  }, {
    key: "_newKeyHistory",
    value: function _newKeyHistory() {
      return new KeyHistory({
        maxLength: this.componentList.getLongestSequence()
      });
    }
  }, {
    key: "getKeyHistory",
    value: function getKeyHistory() {
      if (this._keyHistory) {
        return this._keyHistory;
      } else {
        this._keyHistory = this._newKeyHistory();
      }

      return this._keyHistory;
    }
    /**
     * Resets the state of the values used to resolve which handler function should be
     * called when key events match a registered key map
     * @protected
     */

  }, {
    key: "_initHandlerResolutionState",
    value: function _initHandlerResolutionState() {
      this._actionResolver = null;
    }
    /**
     * Reset the state values that record the current and recent state of key events
     * @param {Object} options An options hash
     * @param {boolean} options.force Whether to force a hard reset of the key
     *        combination history.
     */

  }, {
    key: "resetKeyHistory",
    value: function resetKeyHistory() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.keypressEventsToSimulate = [];
      this.keyupEventsToSimulate = [];

      if (this.getKeyHistory().any() && !options.force) {
        this._keyHistory = new KeyHistory({
          maxLength: this.componentList.getLongestSequence()
        }, new KeyCombination(this.getCurrentCombination().keysStillPressedDict()));
      } else {
        this._keyHistory = this._newKeyHistory();
      }
    }
    /********************************************************************************
     * Generating key maps
     ********************************************************************************/

    /**
     * Returns a mapping of all of the application's actions and the key sequences
     * needed to trigger them.
     *
     * @returns {ApplicationKeyMap} The application's key map
     */

  }, {
    key: "getApplicationKeyMap",
    value: function getApplicationKeyMap() {
      if (this.rootComponentId === null) {
        return {};
      }

      return this._buildApplicationKeyMap([this.rootComponentId], {});
    }
  }, {
    key: "_buildApplicationKeyMap",
    value: function _buildApplicationKeyMap(componentIds, keyMapSummary) {
      var _this = this;

      componentIds.forEach(function (componentId) {
        var _this$_componentTree$ = _this._componentTree.get(componentId),
            childIds = _this$_componentTree$.childIds,
            keyMap = _this$_componentTree$.keyMap;

        if (keyMap) {
          Object.keys(keyMap).forEach(function (actionName) {
            var keyMapConfig = keyMap[actionName];
            keyMapSummary[actionName] = {};

            if (isObject(keyMapConfig)) {
              if (hasKey(keyMapConfig, 'sequences')) {
                /**
                 * Support syntax:
                 *  {
                 *    sequences: [ {sequence: 'a+b', action: 'keyup' }],
                 *    name: 'My keymap',
                 *    description: 'Key to press for something special',
                 *    group: 'Vanity'
                 *  }
                 */
                copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig.sequences);
              } else {
                /**
                 * Support syntax:
                 * {
                 *   sequence: 'a+b', action: 'keyup',
                 *   name: 'My keymap',
                 *   description: 'Key to press for something special',
                 *   group: 'Vanity'
                 * }
                 */
                copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                keyMapSummary[actionName].sequences = [copyAttributes(keyMapConfig, {}, SEQUENCE_ATTRIBUTES)];
              }
            } else {
              keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig);
            }
          });
        }

        _this._buildApplicationKeyMap(childIds, keyMapSummary);
      });
      return keyMapSummary;
    }
  }, {
    key: "_createSequenceFromConfig",
    value: function _createSequenceFromConfig(keyMapConfig) {
      return arrayFrom(keyMapConfig).map(function (sequenceOrKeyMapOptions) {
        if (isObject(sequenceOrKeyMapOptions)) {
          /**
           * Support syntax:
           * [
           *   { sequence: 'a+b', action: 'keyup' },
           *   { sequence: 'c' }
           * ]
           */
          return copyAttributes(sequenceOrKeyMapOptions, {}, SEQUENCE_ATTRIBUTES);
        } else {
          /**
           * Support syntax:
           * 'a+b'
           */
          return {
            sequence: sequenceOrKeyMapOptions
          };
        }
      });
    }
    /********************************************************************************
     * Registering key maps
     ********************************************************************************/

    /**
     * Registers a new mounted component's key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */

  }, {
    key: "registerKeyMap",
    value: function registerKeyMap(keyMap) {
      this.componentId += 1;

      this._componentTree.add(this.componentId, keyMap);

      this.logger.verbose(this._logPrefix(this.componentId), 'Registered component:\n', "".concat(printComponent(this._componentTree.get(this.componentId))));
      return this.componentId;
    }
    /**
     * Re-registers (updates) a mounted component's key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */

  }, {
    key: "reregisterKeyMap",
    value: function reregisterKeyMap(componentId, keyMap) {
      this._componentTree.update(componentId, keyMap);
    }
    /**
     * Registers that a component has now mounted, and declares its parent hot keys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent hot keys component
     */

  }, {
    key: "registerComponentMount",
    value: function registerComponentMount(componentId, parentId) {
      if (!isUndefined(parentId)) {
        this._componentTree.setParent(componentId, parentId);
      } else {
        this.rootComponentId = componentId;
      }

      this.logger.verbose(this._logPrefix(componentId), 'Registered component mount:\n', "".concat(printComponent(this._componentTree.get(componentId))));
    }
    /**
     * De-registers (removes) a mounted component's key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap
     *        belongs to
     */

  }, {
    key: "deregisterKeyMap",
    value: function deregisterKeyMap(componentId) {
      this._componentTree.remove(componentId);

      this.logger.verbose(this._logPrefix(componentId), 'De-registered component. Remaining component Registry:\n', "".concat(printComponent(this._componentTree.toJSON())));

      if (componentId === this.rootComponentId) {
        this.rootComponentId = null;
      }
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/

    /**
     * Registers the hotkeys defined by a HotKeys component
     * @param {ComponentId} componentId - Index of the component
     * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
     *        in the HotKeys component
     * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
     *        defined in the HotKeys component
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @protected
     */

  }, {
    key: "_addComponent",
    value: function _addComponent(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      this.componentList.add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     * @protected
     */

  }, {
    key: "_allKeysAreReleased",
    value: function _allKeysAreReleased() {
      return this.getCurrentCombination().hasEnded();
    }
  }, {
    key: "getCurrentCombination",
    value: function getCurrentCombination() {
      return this.getKeyHistory().getCurrentCombination();
    }
  }, {
    key: "_shouldSimulate",
    value: function _shouldSimulate(eventType, keyName) {
      var keyHasNativeKeyPress = hasKeyPressEvent(keyName);
      var currentCombination = this.getCurrentCombination();

      if (eventType === KeyEventType.keypress) {
        return !keyHasNativeKeyPress || keyHasNativeKeyPress && currentCombination.isKeyStillPressed('Meta');
      } else if (eventType === KeyEventType.keyup) {
        return keyupIsHiddenByCmd(keyName) && currentCombination.isKeyReleased('Meta');
      }

      return false;
    }
  }, {
    key: "_cloneAndMergeEvent",
    value: function _cloneAndMergeEvent(event, extra) {
      var eventAttributes = Object.keys(ModifierFlagsDictionary).reduce(function (memo, eventAttribute) {
        memo[eventAttribute] = event[eventAttribute];
        return memo;
      }, {});
      return _objectSpread$4({}, eventAttributes, extra);
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

  }, {
    key: "_callClosestMatchingHandler",
    value: function _callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, componentSearchIndex) {
      if (!this._actionResolver) {
        this._actionResolver = new ActionResolver(this.componentList);
      }

      while (componentSearchIndex <= componentPosition) {
        var keyHistoryMatcher = this._actionResolver.getKeyHistoryMatcher(componentSearchIndex);

        this.logger.verbose(this._logPrefix(componentSearchIndex), 'Internal key mapping:\n', "".concat(printComponent(keyHistoryMatcher.toJSON())));

        var sequenceMatch = this._actionResolver.findMatchingKeySequenceInComponent(componentSearchIndex, this.getKeyHistory(), keyName, keyEventType);

        var currentCombination = this.getCurrentCombination();

        if (sequenceMatch) {
          var eventSchema = sequenceMatch.events[keyEventType];

          if (Configuration.option('allowCombinationSubmatches')) {
            var subMatchDescription = KeyCombinationSerializer.serialize(sequenceMatch.keyDictionary);
            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "' (sub-match: '").concat(subMatchDescription, "'): ").concat(eventSchema.actionName, ". Calling handler . . ."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "': ").concat(eventSchema.actionName, ". Calling handler . . ."));
          }

          eventSchema.handler(event);

          this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

          return true;
        } else {
          if (this._actionResolver.componentHasActionsBoundToEventType(componentSearchIndex, keyEventType)) {
            var eventName = describeKeyEventType(keyEventType);
            this.logger.debug(this._logPrefix(componentSearchIndex), "No matching actions found for '".concat(currentCombination.describe(), "' ").concat(eventName, "."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Doesn't define a handler for '".concat(currentCombination.describe(), "' ").concat(describeKeyEventType(keyEventType), "."));
          }
        }

        componentSearchIndex++;
      }
    }
  }, {
    key: "_stopEventPropagationAfterHandlingIfEnabled",
    value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
      if (Configuration.option('stopEventPropagationAfterHandling')) {
        this._stopEventPropagation(event, componentId);

        return true;
      }

      return false;
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      throw new Error('_stopEventPropagation must be overridden by a subclass');
    }
    /**
     * Synchronises the key combination history to match the modifier key flag attributes
     * on new key events
     * @param {KeyboardEvent} event - Event to check the modifier flags for
     * @param {string} key - Name of key that events relates to
     * @param {KeyEventType} keyEventType - The record index of the current
     *        key event type
     * @protected
     */

  }, {
    key: "_checkForModifierFlagDiscrepancies",
    value: function _checkForModifierFlagDiscrepancies(event, key, keyEventType) {
      var _this2 = this;

      /**
       * If a new key event is received with modifier key flags that contradict the
       * key combination history we are maintaining, we can surmise that some keyup events
       * for those modifier keys have been lost (possibly because the window lost focus).
       * We update the key combination to match the modifier flags
       */
      Object.keys(ModifierFlagsDictionary).forEach(function (modifierKey) {
        /**
         * When a modifier key is being released (keyup), it sets its own modifier flag
         * to false. (e.g. On the keyup event for Command, the metaKey attribute is false).
         * If this the case, we want to handle it using the main algorithm and skip the
         * reconciliation algorithm.
         */
        if (key === modifierKey && keyEventType === KeyEventType.keyup) {
          return;
        }

        var currentCombination = _this2.getCurrentCombination();

        var modifierStillPressed = currentCombination.isKeyStillPressed(modifierKey);
        ModifierFlagsDictionary[modifierKey].forEach(function (attributeName) {
          if (event[attributeName] === false && modifierStillPressed) {
            currentCombination.setKeyState(modifierKey, KeyEventType.keyup, stateFromEvent(event));
          }
        });
      });
    }
    /**
     * Returns a prefix for all log entries related to the current event strategy
     * @protected
     * @abstract
     */

  }, {
    key: "_logPrefix",
    value: function _logPrefix() {}
  }]);

  return AbstractKeyEventStrategy;
}();

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }
/**
 * Manages the incrementing of a globally unique event id
 * @class
 */

var KeyEventCounter =
/*#__PURE__*/
function () {
  function KeyEventCounter() {
    _classCallCheck$a(this, KeyEventCounter);
  }

  _createClass$a(KeyEventCounter, null, [{
    key: "getId",

    /**
     * Globally unique event id
     * @typedef {number} EventId
     */

    /**
     * Get the current event id
     * @returns {EventId} The current event ID
     */
    value: function getId() {
      if (isUndefined(this._id)) {
        this._id = 0;
      }

      return this._id;
    }
    /**
     * Increment the current event id
     */

  }, {
    key: "incrementId",
    value: function incrementId() {
      this._id = this.getId() + 1;
    }
  }]);

  return KeyEventCounter;
}();

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the same directory of this source tree.
 */

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @returns {number} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.

    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  } // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
  // report Enter as charCode 10 when ctrl is pressed.


  if (charCode === 10) {
    charCode = 13;
  } // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.


  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the same directory of this source tree.
 *
 * @flow
 */
/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */

var normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};
/**
 * @param {object} nativeEvent Native browser event.
 * @returns {string} Normalized `key` property.
 */

function reactsGetEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.
    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

    if (key !== 'Unidentified') {
      return key;
    }
  } // Browser does not implement `key`, polyfill as much of it as we can.


  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.

    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }

  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }

  return '';
}

/**
 * Lowercased string representing a particular keyboard key
 * @typedef {string} NormalizedKeyName
 */
/**
 * Returns key name from native or React keyboard event
 * @param {KeyboardEvent} event - Event containing the key name
 * @returns {NormalizedKeyName} Normalized name of the key
 */

function getKeyName(event) {
  var keyName = function () {
    var customKeyCodes = Configuration.option('customKeyCodes');
    var keyCode = event.keyCode || event.charCode;

    if (hasKey(customKeyCodes, keyCode)) {
      return customKeyCodes[keyCode];
    }

    if (event.nativeEvent) {
      return event.key;
    } else {
      return reactsGetEventKey(event);
    }
  }();

  if (keyName === '+') {
    return 'plus';
  } else {
    return keyName;
  }
}

/**
 * Returns whether the current key name matches the command key
 * @param {ReactKeyName} keyName Key name to compare to the command key's
 * @returns {boolean} Whether the key name matches the command key's
 */
function isCmdKey(keyName) {
  return keyName === 'Meta';
}

function describeKeyEvent(event, keyName, keyEventType) {
  var eventDescription = "'".concat(keyName, "' ").concat(describeKeyEventType(keyEventType));

  if (event.simulated) {
    return "(simulated) ".concat(eventDescription);
  }

  return eventDescription;
}

/**
 * @typedef {number} EventResponseType
 */

/**
 * Enum for different ways to respond to a key event
 * @readonly
 * @enum {EventResponseType}
 */
var EventResponse = {
  unseen: 0,
  ignored: 1,
  seen: 2,
  recorded: 3,
  handled: 4
};

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }
/**
 * Handles the propagation of keyboard events up through the React component tree,
 * starting from the hot keys component closest to the event target
 * @class
 */

var EventPropagator =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of EventPropagator
   * @param {ComponentOptionsList} componentList List of options of the components
   *        the event is propagating through
   * @param {Logger} logger The logger instance to use
   * @param {function} logPrefix Function that returns the appropriate log prefix for
   *        each log entry
   * @returns {EventPropagator}
   */
  function EventPropagator(componentList, _ref) {
    var logger = _ref.logger,
        logPrefix = _ref.logPrefix;

    _classCallCheck$9(this, EventPropagator);

    this._componentList = componentList;
    this._previousPropagation = null;
    this.logger = logger;
    this._logPrefix = logPrefix;

    this._reset();
  }

  _createClass$9(EventPropagator, [{
    key: "_reset",
    value: function _reset() {
      /**
       * Position of the component that the event last propagated through
       * @type {number}
       */
      this._previousPosition = -1;
      /**
       * Position of the current component the event is propagating through
       * @type {number}
       */

      this._position = -1;
      /**
       * Flag to record whether the keyboard event matches an action whose handler
       * has already been called
       * @type {boolean}
       */

      this._actionHandled = false;
      /**
       * Flag to record whether the keyboard event should be ignored
       * @type {boolean}
       */

      this._ignoreEvent = false;
      /**
       * Flag to record whether the keyboard event current being handled should be
       * observed, even if matches the ignoreEventCondition
       * @type {boolean}
       */

      this._observeIgnoredEvents = false;
      /**
       * Flag to record whether the event is being stopped from further propagation
       * @type {boolean}
       */

      this._stopping = false;
      /**
       * The id of the component the event is current propagating through
       * @type {ComponentId}
       */

      this._componentId = null;
      /**
       * The name of the key the propagating event relates to
       * @type {ReactKeyName}
       */

      this._key = null;
      /**
       * The type of keyboard event that is propagating
       * @type {KeyEventType}
       */

      this._type = null;
    }
    /********************************************************************************
     * New event propagation
     *********************************************************************************/

    /**
     * Whether the current propagation step is the first one
     * @returns {boolean} true if this is the first propagation step
     */

  }, {
    key: "isFirstPropagationStep",
    value: function isFirstPropagationStep() {
      var previousPosition = this.getPreviousPosition();
      return previousPosition === -1 || previousPosition >= this._position;
    }
    /**
     * Whether the propagation is for a particular key
     * @param {ReactKeyName} keyName The name of the key to query
     * @returns {boolean} true if the event propagation is for the key
     */

  }, {
    key: "isForKey",
    value: function isForKey(keyName) {
      return this._key === keyName;
    }
    /**
     * The type of keyboard event that is propagating
     * @param {KeyEventType} keyEventType The type of keyboard event to query
     * @returns {boolean} true if the keyboard event propagating is that type
     */

  }, {
    key: "isForEventType",
    value: function isForEventType(keyEventType) {
      return this._type === keyEventType;
    }
    /********************************************************************************
     * Propagation steps
     *********************************************************************************/

    /**
     * Begin a new propagation step, called as a before callback. i.e. the first thing
     * after an event has propagated to a new hot keys component
     * @param {ComponentId} componentId The id of the component that has just had the
     *        event propagate up to it
     * @param {KeyboardEvent} event The actual KeyboardEvent that is propagating
     * @param {ReactKeyName} key The name of the key the event relates to
     * @param {KeyEventType} type The type of keyboard event
     * @returns {boolean} true if the event should be observed, otherwise false if it
     *        should be ignored.
     */

  }, {
    key: "startNewPropagationStep",
    value: function startNewPropagationStep(componentId, event, key, type) {
      this._position = this._componentList.getIndexById(componentId);
      this._componentId = componentId;

      if (this.isFirstPropagationStep()) {
        KeyEventCounter.incrementId();
        this._key = event.key;
        this._type = type;
      }

      if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
        this.logger.debug(this._logPrefix(componentId), "Ignored repeated ".concat(describeKeyEvent(event, key, KeyEventType.keydown), " event."));
        this.ignoreEvent(event);
        return false;
      }

      return true;
    }
    /**
     * Ends handling of a propagation step and performs cleanup. Called as a after callback.
     * @returns {void}
     */

  }, {
    key: "finishPropagationStep",
    value: function finishPropagationStep() {
      if (this.isStopped() || this._componentList.isRoot(this._componentId)) {
        this._previousPropagation = this._clone();

        this._reset();
      } else {
        this._previousPosition = this._position;
      }
    }
    /********************************************************************************
     * Previous propagation
     *********************************************************************************/

    /**
     * The previous event propagation, either for an earlier event type of the same key
     * or a different key's event propagation
     * @returns {EventPropagator} The propagator for the previous event propagation
     */

  }, {
    key: "getPreviousPropagation",
    value: function getPreviousPropagation() {
      if (!this._previousPropagation) {
        this._previousPropagation = this._clone({
          copyState: false
        });
      }

      return this._previousPropagation;
    }
    /**
     * The position of the component that last had the current propagating event
     * propagate through it
     * @returns {number}
     */

  }, {
    key: "getPreviousPosition",
    value: function getPreviousPosition() {
      return this._previousPosition;
    }
    /********************************************************************************
     * Ignoring events
     *********************************************************************************/

    /**
     * Set the observeIgnoredEvents flag, to observe (not ignore) keyboard events that
     * match the ignored events filter
     * @returns {void}
     */

  }, {
    key: "observeIgnoredEvents",
    value: function observeIgnoredEvents() {
      this._observeIgnoredEvents = true;
    }
    /**
     * Record that an event is being ignored for the rest of its propagation and, if
     * enabled, stop it from further propagation entirely.
     * @param {KeyboardEvent} event Event to ignore
     * @returns {boolean} true if the event was stopped from further propagation,
     *          otherwise false.
     */

  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(event) {
      this.setIgnoreEvent(true);

      if (this.isIgnoringEvent() && Configuration.option('stopEventPropagationAfterIgnoring')) {
        this.logger.debug(this._logPrefix(this._componentId), 'Stopping further event propagation.');
        this.stop(event);
        this.finishPropagationStep();
        return true;
      }

      return false;
    }
    /**
     * Set the ignore event flag, to ignore the current event for the rest of its
     * propagation
     * @param {boolean} ignore true to ignore the event, or false to not ignore it
     * @returns {void}
     */

  }, {
    key: "setIgnoreEvent",
    value: function setIgnoreEvent(ignore) {
      this._ignoreEvent = ignore;
    }
    /**
     * Whether to ignore the currently propagating event or not
     * @returns {boolean} true if the event is being ignored for the current propagation
     */

  }, {
    key: "isIgnoringEvent",
    value: function isIgnoringEvent() {
      return !this._observeIgnoredEvents && this._ignoreEvent;
    }
    /********************************************************************************
     * Stopping propagation
     *********************************************************************************/

    /**
     * Whether the event has been stopped from further propagation
     * @returns {boolean} true if the event is being stopped
     */

  }, {
    key: "isStopped",
    value: function isStopped() {
      return this._stopping;
    }
    /**
     * Stop an event from further propagation
     * @param {KeyboardEvent} event Event to call stopPropagation() on
     * @returns {boolean} true if the event was stopped and false if it was already
     *          stopped
     */

  }, {
    key: "stop",
    value: function stop(event) {
      if (!this.isStopped()) {
        this._stopping = true; // noinspection JSUnresolvedVariable

        if (!event.simulated) {
          event.stopPropagation();
        }

        return true;
      }

      return false;
    }
    /**
     * Whether the keyboard event has yet propagated to the root hot keys component
     * @returns {boolean} true if it still has hotkeys components to propagate to
     *          before being complete.
     */

  }, {
    key: "isPendingPropagation",
    value: function isPendingPropagation() {
      var previousPosition = this.getPreviousPosition();
      return previousPosition !== -1 && previousPosition + 1 < this._position;
    }
    /**
     * If the action has already been handled
     * @returns {boolean} true if the action has already been handled
     */

  }, {
    key: "isHandled",
    value: function isHandled() {
      return this._actionHandled;
    }
    /**
     * Record that the current propagating event matched and action and its handler
     * has been called.
     * @returns {void}
     */

  }, {
    key: "setHandled",
    value: function setHandled() {
      this._actionHandled = true;
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_clone",
    value: function _clone() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$copyState = _ref2.copyState,
          copyState = _ref2$copyState === void 0 ? true : _ref2$copyState;

      var cloned = new EventPropagator(this._componentList, {
        logger: this.logger,
        logPrefix: this._logPrefix
      });

      if (copyState) {
        Object.assign(cloned, this);
      }

      return cloned;
    }
  }]);

  return EventPropagator;
}();

function _typeof$7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get$1(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get$1 = Reflect.get; } else { _get$1 = function _get(target, property, receiver) { var base = _superPropBase$1(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get$1(target, property, receiver || target); }

function _superPropBase$1(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf$7(object); if (object === null) break; } return object; }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }
/**
 * Defines behaviour for dealing with key maps defined in focus-only HotKey components
 * @class
 */

var FocusOnlyKeyEventStrategy =
/*#__PURE__*/
function (_AbstractKeyEventStra) {
  _inherits$7(FocusOnlyKeyEventStrategy, _AbstractKeyEventStra);

  /********************************************************************************
   * Init & Reset
   ********************************************************************************/
  function FocusOnlyKeyEventStrategy() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$8(this, FocusOnlyKeyEventStrategy);

    /**
     * Set state that DOES get cleared on each new focus tree
     */
    _this = _possibleConstructorReturn$7(this, _getPrototypeOf$7(FocusOnlyKeyEventStrategy).call(this, configuration, keyEventManager));
    /**
     * State that doesn't get cleared on each new focus tree
     */

    /**
     * Unique identifier given to each focus tree - when the focus in the browser
     * changes, and a different tree of elements are focused, a new id is allocated
     * @typedef {number} FocusTreeId
     */

    /**
     * Counter to keep track of what focus tree ID should be allocated next
     * @type {FocusTreeId}
     */

    _this.focusTreeId = 0;
    return _this;
  }
  /**
   * Clears the internal state, wiping any history of key events and registered handlers
   * so they have no effect on the next tree of focused HotKeys components
   * @private
   */


  _createClass$8(FocusOnlyKeyEventStrategy, [{
    key: "_reset",
    value: function _reset() {
      _get$1(_getPrototypeOf$7(FocusOnlyKeyEventStrategy.prototype), "_reset", this).call(this);

      this.keypressEventsToSimulate = [];
      /**
       * Increase the unique ID associated with each unique focus tree
       * @type {number}
       */

      this.focusTreeId += 1;
      this.eventPropagator = new EventPropagator(this.componentList, {
        logger: this.logger,
        logPrefix: this._logPrefix.bind(this)
      });
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has gained focus
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @returns {FocusTreeId|undefined} The current focus tree's ID or undefined if the
     *        the <tt>componentId</tt> has already been registered (shouldn't normally
     *        occur).
     */

  }, {
    key: "enableHotKeys",
    value: function enableHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;

      if (this.resetOnNextFocus) {
        /**
         * We know components have just lost focus or keymaps have already been built,
         * meaning we are either anticipating a new set of components to be focused or
         * we are receiving notice of a component being focused when we aren't expecting it.
         * In either case, the internal state needs to be reset.
         */
        this._reset();

        this.resetOnNextFocus = false;
      }

      if (this.componentList.containsId(componentId)) {
        /**
         * The <tt>componentId</tt> has already been registered - this occurs when the
         * same component has somehow managed to be focused twice, without being blurred
         * in between.
         *
         * @see https://github.com/greena13/react-hotkeys/issues/173
         */
        return undefined;
      }

      this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), 'Focused. \n');
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options:\n', printComponent(this.componentList.get(componentId)));
      return this.focusTreeId;
    }
    /**
     * Handles when a HotKeys component that is in focus updates its props and changes
     * either the keyMap or handlers prop value
     * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
     *        Used to identify (and ignore) stale updates.
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
     * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
     *        functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     */

  }, {
    key: "updateEnabledHotKeys",
    value: function updateEnabledHotKeys(focusTreeId, componentId) {
      var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 ? arguments[4] : undefined;

      if (focusTreeId !== this.focusTreeId || !this.componentList.containsId(componentId)) {
        return;
      }

      this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
      this.logger.debug(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      }), 'Received new props.');
      /**
       * Reset handler resolution state
       */

      this._initHandlerResolutionState();

      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      }), 'Component options:\n', printComponent(this.componentList.get(componentId)));
    }
    /**
     * Handles when a component loses focus by resetting the internal state, ready to
     * receive the next tree of focused HotKeys components
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
     *        apart of
     * @param {ComponentId} componentId - Index of component that is blurring
     * @returns {boolean} Whether the component still has event propagation yet to handle
     */

  }, {
    key: "disableHotKeys",
    value: function disableHotKeys(focusTreeId, componentId) {
      if (!this.resetOnNextFocus) {
        this.resetOnNextFocus = true;
      }

      var outstandingEventPropagation = this.eventPropagator.isPendingPropagation();
      this.logger.debug("".concat(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      })), "Lost focus".concat(outstandingEventPropagation ? ' (Key event has yet to propagate through it)' : '', "."));
      return outstandingEventPropagation;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * @typedef {KeyboardEvent} SyntheticKeyboardEvent
     * @property {function} persist
     */

    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {SyntheticKeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The id of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event is handled.
     * @returns Whether the event was discarded because it was part of an old focus tree
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(event, focusTreeId, componentId) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var key = getKeyName(event);

      if (focusTreeId !== this.focusTreeId) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keydown), " event because it had an old focus tree id: ").concat(focusTreeId, "."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keydown);

      if (!started) {
        return;
      }

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keydown);

      if (responseAction === EventResponse.handled) {
        var keyEventState = stateFromEvent(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyIncluded(key) || currentCombination.isEnding()) {
          this._startAndLogNewKeyCombination(key, focusTreeId, componentId, keyEventState);
        } else {
          this._addToAndLogCurrentKeyCombination(key, KeyEventType.keydown, focusTreeId, componentId, keyEventState);
        }

        this._callHandlerIfActionNotHandled(event, key, KeyEventType.keydown, componentId, focusTreeId);
      }

      this._simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options);

      this.eventPropagator.finishPropagationStep();
      return false;
    }
  }, {
    key: "_howToHandleKeyEvent",
    value: function _howToHandleKeyEvent(event, focusTreeId, componentId, key, options, keyEventType) {
      if (this.eventPropagator.isFirstPropagationStep()) {
        if (options.ignoreEventsCondition(event) && this.eventPropagator.ignoreEvent(event)) {
          return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
        }

        this.logger.debug(this._logPrefix(componentId), "New ".concat(describeKeyEvent(event, key, keyEventType), " event."));

        this._checkForModifierFlagDiscrepancies(event, key, keyEventType);
      } else if (this.eventPropagator.isIgnoringEvent()) {
        return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
      }

      return EventResponse.handled;
    }
  }, {
    key: "_eventIsToBeIgnored",
    value: function _eventIsToBeIgnored(event, componentId, key, keyEventType) {
      this.logger.debug(this._logPrefix(componentId), "Ignored ".concat(describeKeyEvent(event, key, keyEventType), " event because ignoreEventsFilter rejected it."));
      return EventResponse.ignored;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether the HotKeys component should discard its current focus
     *        tree Id, because it belongs to an old focus tree.
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event, focusTreeId, componentId, options) {
      var key = getKeyName(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyPressSimulated(key)) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " as it was not expected, and has already been simulated."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keypress);

      if (!started) {
        return;
      }

      var shouldDiscardFocusTreeId = focusTreeId !== this.focusTreeId;
      /**
       * We first decide if the keypress event should be handled (to ensure the correct
       * order of logging statements)
       */

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keypress);

      if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keypress, focusTreeId, componentId, stateFromEvent(event));
      }
      /**
       * We attempt to find a handler of the event, only if it has not already
       * been handled and should not be ignored
       */


      if (responseAction === EventResponse.handled) {
        this._callHandlerIfActionNotHandled(event, key, KeyEventType.keypress, componentId, focusTreeId);
      }

      this.eventPropagator.finishPropagationStep();
      return shouldDiscardFocusTreeId;
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether HotKeys component should discard its current focusTreeId
     *        because it's stale (part of an old focus tree)
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event, focusTreeId, componentId, options) {
      var key = getKeyName(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyUpSimulated(key)) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keyup), " as it was not expected, and has already been simulated."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keyup);

      if (!started) {
        return;
      }

      var shouldDiscardFocusId = focusTreeId !== this.focusTreeId;
      /**
       * We first decide if the keyup event should be handled (to ensure the correct
       * order of logging statements)
       */

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keyup);
      /**
       * We then add the keyup to our current combination - regardless of whether
       * it's to be handled or not. We need to do this to ensure that if a handler
       * function changes focus to a context that ignored events, the keyup event
       * is not lost (leaving react hotkeys thinking the key is still pressed).
       */


      if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keyup, focusTreeId, componentId, stateFromEvent(event));
      }
      /**
       * We attempt to find a handler of the event, only if it has not already
       * been handled and should not be ignored
       */


      if (responseAction === EventResponse.handled) {
        this._callHandlerIfActionNotHandled(event, key, KeyEventType.keyup, componentId, focusTreeId);
      }
      /**
       * We simulate any hidden keyup events hidden by the command key, regardless
       * of whether the event should be ignored or not
       */


      this._simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options);

      this.eventPropagator.finishPropagationStep();
      return shouldDiscardFocusId;
    }
    /**
     * Closes any hanging key combinations that have not received the key event indicated
     * by recordIndex.
     * @param {KeyName} keyName The name of the key whose state should be updated if it
     *        is currently set to keydown or keypress.
     * @param {KeyEventType} recordIndex Index of key event to move the key state
     *        up to.
     */

  }, {
    key: "closeHangingKeyCombination",
    value: function closeHangingKeyCombination(keyName, recordIndex) {
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyIncluded(keyName) && !currentCombination.isEventTriggered(keyName, recordIndex)) {
        /**
         * If the key is in the current combination and recorded as still being pressed
         * down (as either keydown or keypress), then we update the state
         * to keypress or keyup (depending on the value of recordIndex).
         */
        currentCombination.setKeyState(keyName, recordIndex, KeyEventState.simulated);
      }
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function _simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options) {
      this._handleEventSimulation('keypressEventsToSimulate', 'simulatePendingKeyPressEvents', this._shouldSimulate(KeyEventType.keypress, key), {
        event: event,
        key: key,
        focusTreeId: focusTreeId,
        componentId: componentId,
        options: options
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function _simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options) {
      var _this2 = this;

      if (isCmdKey(key)) {
        this.getCurrentCombination().forEachKey(function (keyName) {
          if (isCmdKey(keyName)) {
            return;
          }

          _this2._handleEventSimulation('keyupEventsToSimulate', 'simulatePendingKeyUpEvents', _this2._shouldSimulate(KeyEventType.keyup, keyName), {
            event: event,
            key: keyName,
            focusTreeId: focusTreeId,
            componentId: componentId,
            options: options
          });
        });
      }
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      if (this.eventPropagator.stop(event)) {
        this.logger.debug(this._logPrefix(componentId), 'Stopping further event propagation.');
      }
    }
  }, {
    key: "getEventPropagator",
    value: function getEventPropagator() {
      return this.eventPropagator;
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function _startAndLogNewKeyCombination(keyName, focusTreeId, componentId, keyEventState) {
      this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Started a new combination with '".concat(keyName, "'."));
      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, focusTreeId, componentId, keyEventState) {
      this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);

      if (keyEventType === KeyEventType.keydown) {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Added '".concat(keyName, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'."));
      }

      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/

  }, {
    key: "_handleEventSimulation",
    value: function _handleEventSimulation(listName, handlerName, shouldSimulate, _ref) {
      var event = _ref.event,
          key = _ref.key,
          focusTreeId = _ref.focusTreeId,
          componentId = _ref.componentId,
          options = _ref.options;

      if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
        /**
         * If a key does not have a keypress event, we save the details of the keydown
         * event to simulate the keypress event, as the keydown event bubbles through
         * the last focus-only HotKeysComponent
         */
        var _event = this._cloneAndMergeEvent(event, {
          key: key,
          simulated: true
        });

        this[listName].push({
          event: _event,
          focusTreeId: focusTreeId,
          componentId: componentId,
          options: options
        });
      }

      if (this.componentList.isRoot(componentId) || this.eventPropagator.isStopped()) {
        if (!this.keyEventManager.isGlobalListenersBound()) {
          this[handlerName]();
        }
        /**
         * else, we wait for keydown event to propagate through global strategy
         * before we simulate the keypress
         */

      }
    }
  }, {
    key: "simulatePendingKeyPressEvents",
    value: function simulatePendingKeyPressEvents() {
      this._simulatePendingKeyEvents('keypressEventsToSimulate', 'handleKeyPress');
    }
  }, {
    key: "simulatePendingKeyUpEvents",
    value: function simulatePendingKeyUpEvents() {
      this._simulatePendingKeyEvents('keyupEventsToSimulate', 'handleKeyUp');
    }
  }, {
    key: "_simulatePendingKeyEvents",
    value: function _simulatePendingKeyEvents(listName, handlerName) {
      var _this3 = this;

      if (this[listName].length > 0) {
        KeyEventCounter.incrementId();
      }

      this[listName].forEach(function (_ref2) {
        var event = _ref2.event,
            focusTreeId = _ref2.focusTreeId,
            componentId = _ref2.componentId,
            options = _ref2.options;

        _this3[handlerName](event, focusTreeId, componentId, options);
      });
      this[listName] = [];
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

    /**
     * Calls the first handler that matches the current key event if the action has not
     * already been handled in a more deeply nested component
     * @param {KeyboardEvent} event Keyboard event object to be passed to the handler
     * @param {NormalizedKeyName} keyName Normalized key name
     * @param {KeyEventType} keyEventType The record index of the current key event type
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId Index of the component that is currently handling
     *        the keyboard event
     * @private
     */

  }, {
    key: "_callHandlerIfActionNotHandled",
    value: function _callHandlerIfActionNotHandled(event, keyName, keyEventType, componentId, focusTreeId) {
      var eventName = describeKeyEventType(keyEventType);
      var combinationName = this.getCurrentCombination().describe();

      if (!this.componentList.anyActionsForEventType(keyEventType)) {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Ignored '".concat(combinationName, "' ").concat(eventName, " because it doesn't have any ").concat(eventName, " handlers."));
        return;
      }

      if (this.eventPropagator.isHandled()) {
        this.logger.debug(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Ignored '".concat(combinationName, "' ").concat(eventName, " as it has already been handled."));
      } else {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Attempting to find action matching '".concat(combinationName, "' ").concat(eventName, " . . ."));
        var previousComponentPosition = this.eventPropagator.getPreviousPosition();
        var componentPosition = this.componentList.getIndexById(componentId);

        var handlerWasCalled = this._callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, previousComponentPosition === -1 ? 0 : previousComponentPosition);

        if (handlerWasCalled) {
          this.eventPropagator.setHandled();
        }
      }
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/

  }, {
    key: "_logPrefix",
    value: function _logPrefix(componentId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var logIcons = Logger.logIcons;
      var eventIcons = Logger.eventIcons;
      var componentIcons = Logger.componentIcons;
      var base = 'HotKeys (';

      if (options.focusTreeId !== false) {
        var focusTreeId = isUndefined(options.focusTreeId) ? this.focusTreeId : options.focusTreeId;
        base += "F".concat(focusTreeId).concat(logIcons[focusTreeId % logIcons.length], "-");
      }

      if (options.eventId !== false) {
        var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
        base += "E".concat(eventId).concat(eventIcons[eventId % eventIcons.length], "-");
      }

      base += "C".concat(componentId).concat(componentIcons[componentId % componentIcons.length]);
      var position = this.componentList.getIndexById(componentId);

      if (!isUndefined(position)) {
        base += "-P".concat(position).concat(componentIcons[position % componentIcons.length], ":");
      }

      return "".concat(base, ")");
    }
  }]);

  return FocusOnlyKeyEventStrategy;
}(AbstractKeyEventStrategy);

function contains(collection, item) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (Array.isArray(collection) || isString(collection)) {
    if (options.stringifyFirst) {
      return !isUndefined(collection.find(function (collectionItem) {
        return collectionItem.toString() === item.toString();
      }));
    } else {
      return collection.indexOf(item) !== -1;
    }
  } else if (isObject(collection)) {
    return hasKey(collection, item);
  } else {
    if (options.stringifyFirst) {
      return collection.toString() === item.toString();
    } else {
      return collection === item;
    }
  }
}

function capitalize(string) {
  return string.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
}

function normalizeEventName(eventName) {
  return "".concat(capitalize(eventName.slice(0, 3))).concat(capitalize(eventName.slice(3)));
}

function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf$6(object); if (object === null) break; } return object; }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }
/**
 * Defines behaviour for dealing with key maps defined in global HotKey components
 * @class
 */

var GlobalKeyEventStrategy =
/*#__PURE__*/
function (_AbstractKeyEventStra) {
  _inherits$6(GlobalKeyEventStrategy, _AbstractKeyEventStra);

  /********************************************************************************
   * Init & Reset
   ********************************************************************************/
  function GlobalKeyEventStrategy() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$7(this, GlobalKeyEventStrategy);

    /**
     * Set state that gets cleared every time a component gets mounted or unmounted
     */
    _this = _possibleConstructorReturn$6(this, _getPrototypeOf$6(GlobalKeyEventStrategy).call(this, configuration, keyEventManager));
    /**
     * Set state that doesn't get cleared each time a new new component is mounted
     * or unmounted
     * @type {number}
     */

    /**
     * Whether the global key event handlers have been bound to document yet or not
     * @type {boolean}
     */

    _this.listenersBound = false;
    _this.eventOptions = {
      ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
    };
    /**
     * Dictionary of listener functions - currently only intended to house
     * keyCombinationListener
     */

    _this.listeners = {};
    return _this;
  }
  /********************************************************************************
   * Enabling key maps and handlers
   ********************************************************************************/

  /**
   * Registers the actions and handlers of a HotKeys component that has mounted
   * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
   * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
   * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
   * @param {Object} options Hash of options that configure how the actions
   *        and handlers are associated and called.
   * @param {Object} eventOptions - Options for how the event should be handled
   */


  _createClass$7(GlobalKeyEventStrategy, [{
    key: "enableHotKeys",
    value: function enableHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      this.eventOptions = eventOptions;

      this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), 'Mounted.');
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options: \n', printComponent(this.componentList.get(componentId)));
    }
    /**
     * Handles when a mounted global HotKeys component updates its props and changes
     * either the keyMap or handlers prop value
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */

  }, {
    key: "updateEnabledHotKeys",
    value: function updateEnabledHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      this.eventOptions = eventOptions;
      this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
      /**
       * Reset strategy state specific to the global strategy
       */

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), "Global component ".concat(componentId, " updated."));
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options: \n', printComponent(this.componentList.get(componentId)));
    }
    /**
     * Handles when a component is unmounted
     * @param {ComponentId} componentId - Index of component that is being unmounted
     */

  }, {
    key: "disableHotKeys",
    value: function disableHotKeys(componentId) {
      /**
       * Manually update the registered key map state, usually reset using
       * _resetRegisteredKeyMapsState() method
       */
      this.componentList.remove(componentId);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), "Unmounted global component ".concat(componentId));
    }
  }, {
    key: "_updateDocumentHandlers",
    value: function _updateDocumentHandlers() {
      var _this2 = this;

      var listenersShouldBeBound = this._listenersShouldBeBound();

      if (!this.listenersBound && listenersShouldBeBound) {
        Object.values(KeyEventType).forEach(function (recordIndex) {
          var eventName = describeKeyEventType(recordIndex);

          document["on".concat(eventName)] = function (keyEvent) {
            _this2.keyEventManager["handleGlobal".concat(normalizeEventName(eventName))](keyEvent);
          };

          _this2.logger.debug(_this2._logPrefix(_this2.componentId, {
            eventId: false
          }), "Bound handler handleGlobal".concat(normalizeEventName(eventName), "() to document.on").concat(eventName, "()"));
        });
        this.listenersBound = true;
      } else if (this.listenersBound && !listenersShouldBeBound) {
        Object.values(KeyEventType).forEach(function (recordIndex) {
          var eventName = describeKeyEventType(recordIndex);
          delete document["on".concat(eventName)];

          _this2.logger.debug(_this2._logPrefix(_this2.componentId, {
            eventId: false
          }), "Removed handler handleGlobal".concat(normalizeEventName(eventName), "() from document.on").concat(eventName, "()"));
        });
        this.listenersBound = false;
      }
    }
    /**
     * Whether the document listeners should be bound, to record key events. Basically a check
     * to see if there are any global key maps, or whether the user is currently rebinding to
     * a new key combination.
     * @returns {boolean} True if the document listeners should be bound
     * @private
     */

  }, {
    key: "_listenersShouldBeBound",
    value: function _listenersShouldBeBound() {
      return this.componentList.any() || this.listeners.keyCombination;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      var _key = getKeyName(event);

      if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
        this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(describeKeyEvent(event, _key, KeyEventType.keydown), " event."));
        return true;
      }

      this._checkForModifierFlagDiscrepancies(event, _key, KeyEventType.keydown);

      var reactAppResponse = this._howReactAppRespondedTo(event, _key, KeyEventType.keydown);

      if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, _key, KeyEventType.keydown), " event because ignoreEventsFilter rejected it."));
        return;
      }

      if (reactAppResponse !== EventResponse.ignored) {
        var keyEventState = stateFromEvent(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyIncluded(_key) || currentCombination.isEnding()) {
          this._startAndLogNewKeyCombination(_key, keyEventState);
        } else {
          this._addToAndLogCurrentKeyCombination(_key, KeyEventType.keydown, keyEventState);
        }
      }

      if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
        this._callHandlerIfExists(event, _key, KeyEventType.keydown);
      }

      this._simulateKeyPressForNonPrintableKeys(event, _key);
    }
  }, {
    key: "_howReactAppRespondedTo",
    value: function _howReactAppRespondedTo(event, key, keyEventType) {
      var reactAppHistoryWithEvent = this.keyEventManager.reactAppHistoryWithEvent(key, keyEventType);

      switch (reactAppHistoryWithEvent) {
        case EventResponse.handled:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, keyEventType), " event because React app has already handled it."));
          break;

        case EventResponse.ignored:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, keyEventType), " event because React app has declared it should be ignored."));
          break;

        case EventResponse.seen:
          this.logger.debug(this._logPrefix(), "Received ".concat(describeKeyEvent(event, key, keyEventType), " event (that has already passed through React app)."));
          break;

        default:
          KeyEventCounter.incrementId();
          this.logger.debug(this._logPrefix(), "New ".concat(describeKeyEvent(event, key, keyEventType), " event (that has NOT passed through React app)."));
      }

      return reactAppHistoryWithEvent;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var key = getKeyName(event);

      if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
        this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " event."));
        return true;
      }

      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyPressSimulated(key)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " as it was not expected, and has already been simulated."));
        return true;
      }
      /**
       * We first decide if the keypress event should be handled (to ensure the correct
       * order of logging statements)
       */


      var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keypress);
      /**
       * Add new key event to key combination history
       */


      if (currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keypress, stateFromEvent(event));
      }

      if (reactAppResponse === EventResponse.unseen) {
        /**
         * If the key event has not been seen by the React application, we ensure that
         * it's not still waiting for it. This occurs when action handlers bound to keydown
         * move the focus outside of the react app before it can record the keypress or
         * keyup
         */
        this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keypress);

        if (this.eventOptions.ignoreEventsCondition(event)) {
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " event because ignoreEventsFilter rejected it."));
          return;
        }
      }

      if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
        this._callHandlerIfExists(event, key, KeyEventType.keypress);
      }
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      var key = getKeyName(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyUpSimulated(key)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keyup), " as it was not expected, and has already been simulated."));
        return true;
      }
      /**
       * We first decide if the keyup event should be handled (to ensure the correct
       * order of logging statements)
       */


      var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keyup);
      /**
       * We then add the keyup to our current combination - regardless of whether
       * it's to be handled or not. We need to do this to ensure that if a handler
       * function changes focus to a context that ignored events, the keyup event
       * is not lost (leaving react hotkeys thinking the key is still pressed).
       */


      if (currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keyup, stateFromEvent(event));
      }

      if (reactAppResponse === EventResponse.unseen) {
        /**
         * If the key event has not been seen by the React application, we ensure that
         * it's not still waiting for it. This occurs when action handlers bound to keydown
         * or keypress move the focus outside of the react app before it can record the keyup
         */
        this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keyup);

        if (this.eventOptions.ignoreEventsCondition(event)) {
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keyup), " event because ignoreEventsFilter rejected it."));
        } else {
          /**
           * We attempt to find a handler of the event, only if it has not already
           * been handled and should not be ignored
           */
          if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
            this._callHandlerIfExists(event, key, KeyEventType.keyup);
          }
        }
      } else {
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */
        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, key, KeyEventType.keyup);
        }
      }
      /**
       * We simulate any hidden keyup events hidden by the command key, regardless
       * of whether the event should be ignored or not
       */


      this._simulateKeyUpEventsHiddenByCmd(event, key);

      if (this.listeners.keyCombination && this._allKeysAreReleased()) {
        this.listeners.keyCombination({
          keys: currentCombination.getKeyDictionary(),
          id: currentCombination.describe()
        });
      }
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function _simulateKeyPressForNonPrintableKeys(event, key) {
      this.keyEventManager.simulatePendingKeyPressEvents();

      this._handleEventSimulation('handleKeyPress', this._shouldSimulate(KeyEventType.keypress, key), {
        event: event,
        key: key
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function _simulateKeyUpEventsHiddenByCmd(event, key) {
      var _this3 = this;

      if (isCmdKey(key)) {
        /**
         * We simulate pending key events in the React app before we do it globally
         */
        this.keyEventManager.simulatePendingKeyUpEvents();
        this.getCurrentCombination().forEachKey(function (keyName) {
          if (isCmdKey(keyName)) {
            return;
          }

          _this3._handleEventSimulation('handleKeyUp', _this3._shouldSimulate(KeyEventType.keyup, keyName), {
            event: event,
            key: keyName
          });
        });
      }
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function _startAndLogNewKeyCombination(keyName, keyEventState) {
      this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      this.logger.verbose(this._logPrefix(), "Started a new combination with '".concat(keyName, "'."));
      this.logger.verbose(this._logPrefix(), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, keyEventState) {
      this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);

      if (keyEventType === KeyEventType.keydown) {
        this.logger.verbose(this._logPrefix(), "Added '".concat(keyName, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'."));
      }

      this.logger.verbose(this._logPrefix(), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/

  }, {
    key: "_handleEventSimulation",
    value: function _handleEventSimulation(handlerName, shouldSimulate, _ref) {
      var event = _ref.event,
          key = _ref.key;

      if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
        /**
         * If a key does not have a keypress event, we simulate one immediately after
         * the keydown event, to keep the behaviour consistent across all keys
         */
        var _event = this._cloneAndMergeEvent(event, {
          key: key,
          simulated: true
        });

        this[handlerName](_event);
      }
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

  }, {
    key: "_callHandlerIfExists",
    value: function _callHandlerIfExists(event, keyName, keyEventType) {
      var eventName = describeKeyEventType(keyEventType);
      var combinationName = this.getCurrentCombination().describe();

      if (!this.componentList.anyActionsForEventType(keyEventType)) {
        /**
         * If there are no handlers registered for the particular key event type
         * (keydown, keypress, keyup) then skip trying to find a matching handler
         * for the current key combination
         */
        this.logger.debug(this._logPrefix(), "Ignored '".concat(combinationName, "' ").concat(eventName, " because it doesn't have any ").concat(eventName, " handlers."));
        return;
      }
      /**
       * If there is at least one handler for the specified key event type (keydown,
       * keypress, keyup), then attempt to find a handler that matches the current
       * key combination
       */


      this.logger.verbose(this._logPrefix(), "Attempting to find action matching '".concat(combinationName, "' ").concat(eventName, " . . ."));

      this._callClosestMatchingHandler(event, keyName, keyEventType);
    }
  }, {
    key: "_callClosestMatchingHandler",
    value: function _callClosestMatchingHandler(event, keyName, keyEventType) {
      var componentListIterator = this.componentList.getNewIterator();

      while (componentListIterator.next()) {
        var matchFound = _get(_getPrototypeOf$6(GlobalKeyEventStrategy.prototype), "_callClosestMatchingHandler", this).call(this, event, keyName, keyEventType, componentListIterator.getPosition(), 0);

        if (matchFound) {
          this.logger.debug(this._logPrefix(), "Searching no further, as handler has been found (and called).");
          return;
        }
      }
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      this.logger.debug(this._logPrefix(componentId), 'Stopping further event propagation.');

      if (!event.simulated) {
        event.stopPropagation();
      }
    }
    /********************************************************************************
     * Recording key combination
     ********************************************************************************/

    /**
     * Add a new key combination listener function to be called the next time a key
     * combination completes (assuming the cancel function is not called).
     * @param {keyCombinationListener} callbackFunction Function to call with the next
     *        completed key combination
     * @returns {function} Function to call to cancel listening for the next key
     *        combination
     */

  }, {
    key: "addKeyCombinationListener",
    value: function addKeyCombinationListener(callbackFunction) {
      var _this4 = this;

      var cancel = function cancel() {
        delete _this4.listeners.keyCombination;
      };

      this.listeners.keyCombination = function (keyCombination) {
        callbackFunction(keyCombination);
        cancel();
      };

      this._updateDocumentHandlers();

      return cancel;
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/

  }, {
    key: "_logPrefix",
    value: function _logPrefix(componentId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var eventIcons = Logger.eventIcons;
      var componentIcons = Logger.componentIcons;
      var base = 'HotKeys (GLOBAL';

      if (options.eventId !== false) {
        var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
        base = "".concat(base, "-E").concat(eventId).concat(eventIcons[eventId % eventIcons.length]);
      }

      if (isUndefined(componentId)) {
        return "".concat(base, "):");
      } else {
        return "".concat(base, "-C").concat(componentId).concat(componentIcons[componentId % componentIcons.length], "):");
      }
    }
  }]);

  return GlobalKeyEventStrategy;
}(AbstractKeyEventStrategy);

/**
 * Returns whether the specified component's focus tree ID indicates it is a focus-only
 * HotKeys component, or not
 * @param {FocusTreeId} focusTreeId The focus tree id for the component
 * @returns {boolean} Whether the HotKeys component is focus-only
 */

function isFromFocusOnlyComponent(focusTreeId) {
  return !isUndefined(focusTreeId);
}

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }
/**
 * Provides a registry for keyboard sequences and events, and the handlers that should
 * be called when they are detected. Also contains the interface for processing and
 * matching keyboard events against its list of registered actions and handlers.
 * @class
 */

var KeyEventManager =
/*#__PURE__*/
function () {
  _createClass$6(KeyEventManager, null, [{
    key: "getInstance",

    /**
     * Creates a new KeyEventManager instance if one does not already exist or returns the
     * instance that already exists.
     * @param {Object} configuration Configuration object
     * @param {Logger} configuration.logger Logger instance
     * @returns {KeyEventManager} The key event manager instance
     */
    value: function getInstance() {
      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.instance) {
        this.instance = new KeyEventManager(configuration);
      }

      return this.instance;
    }
  }, {
    key: "clear",
    value: function clear() {
      delete this.instance;
    }
    /**
     * Creates a new KeyEventManager instance. It is expected that only a single instance
     * will be used with a render tree.
     */

  }]);

  function KeyEventManager() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$6(this, KeyEventManager);

    this.logger = configuration.logger || new Logger(Configuration.option('logLevel'));
    this._focusOnlyEventStrategy = new FocusOnlyKeyEventStrategy({
      configuration: configuration,
      logger: this.logger
    }, this);
    this._globalEventStrategy = new GlobalKeyEventStrategy({
      configuration: configuration,
      logger: this.logger
    }, this);
    this.mountedComponentsCount = 0;
  }
  /********************************************************************************
   * Generating key maps
   ********************************************************************************/


  _createClass$6(KeyEventManager, [{
    key: "getApplicationKeyMap",
    value: function getApplicationKeyMap() {
      return Object.assign(this._globalEventStrategy.getApplicationKeyMap(), this._focusOnlyEventStrategy.getApplicationKeyMap());
    }
    /********************************************************************************
     * Registering key maps
     ********************************************************************************/

    /**
     * Registers a new mounted component's key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */

  }, {
    key: "registerKeyMap",
    value: function registerKeyMap() {
      var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this._focusOnlyEventStrategy.registerKeyMap(keyMap);
    }
    /**
     * Re-registers (updates) a mounted component's key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */

  }, {
    key: "reregisterKeyMap",
    value: function reregisterKeyMap(componentId) {
      var keyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._focusOnlyEventStrategy.reregisterKeyMap(componentId, keyMap);
    }
    /**
     * De-registers (removes) a mounted component's key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     */

  }, {
    key: "deregisterKeyMap",
    value: function deregisterKeyMap(componentId) {
      this._focusOnlyEventStrategy.deregisterKeyMap(componentId);
    }
    /**
     * Registers that a component has now mounted, and declares its parent HotKeys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent HotKeys component
     */

  }, {
    key: "registerComponentMount",
    value: function registerComponentMount(componentId, parentId) {
      this._incrementComponentCount();

      return this._focusOnlyEventStrategy.registerComponentMount(componentId, parentId);
    }
  }, {
    key: "registerComponentUnmount",
    value: function registerComponentUnmount() {
      this._decrementComponentCount();
    }
  }, {
    key: "_incrementComponentCount",
    value: function _incrementComponentCount() {
      var _this = this;

      var preMountedComponentCount = this.mountedComponentsCount;
      this.mountedComponentsCount += 1;

      if (preMountedComponentCount === 0 && this.mountedComponentsCount === 1) {
        window.onblur = function () {
          return _this._clearKeyHistory();
        };
      }
    }
  }, {
    key: "_decrementComponentCount",
    value: function _decrementComponentCount() {
      var preMountedComponentCount = this.mountedComponentsCount;
      this.mountedComponentsCount -= 1;

      if (preMountedComponentCount === 1 && this.mountedComponentsCount === 0) {
        delete window.onblur;
      }
    }
  }, {
    key: "_clearKeyHistory",
    value: function _clearKeyHistory() {
      this.logger.info('HotKeys: Window focused - clearing key history');

      this._focusOnlyEventStrategy.resetKeyHistory({
        force: true
      });

      this._globalEventStrategy.resetKeyHistory({
        force: true
      });
    }
    /**
     * Registers a new mounted component's global key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */

  }, {
    key: "registerGlobalKeyMap",
    value: function registerGlobalKeyMap() {
      var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this._globalEventStrategy.registerKeyMap(keyMap);
    }
  }, {
    key: "registerGlobalComponentUnmount",
    value: function registerGlobalComponentUnmount() {
      this._decrementComponentCount();
    }
    /**
     * Registers that a component has now mounted, and declares its parent GlobalHotKeys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent GlobalHotKeys component
     */

  }, {
    key: "registerGlobalComponentMount",
    value: function registerGlobalComponentMount(componentId, parentId) {
      this._incrementComponentCount();

      return this._globalEventStrategy.registerComponentMount(componentId, parentId);
    }
    /**
     * Re-registers (updates) a mounted component's global key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */

  }, {
    key: "reregisterGlobalKeyMap",
    value: function reregisterGlobalKeyMap(componentId, keyMap) {
      this._globalEventStrategy.reregisterKeyMap(componentId, keyMap);
    }
    /**
     * De-registers (removes) a mounted component's global key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     */

  }, {
    key: "deregisterGlobalKeyMap",
    value: function deregisterGlobalKeyMap(componentId) {
      this._globalEventStrategy.deregisterKeyMap(componentId);
    }
    /********************************************************************************
     * Recording key combination
     ********************************************************************************/

    /**
     * Adds a listener function that will be called the next time a key combination completes
     * @param {keyCombinationListener} callbackFunction Listener function to be called
     * @returns {function} Function to call to cancel listening to the next key combination
     */

  }, {
    key: "addKeyCombinationListener",
    value: function addKeyCombinationListener(callbackFunction) {
      return this._globalEventStrategy.addKeyCombinationListener(callbackFunction);
    }
    /********************************************************************************
     * Focus key events
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has gained focus
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @returns {FocusTreeId} The current focus tree's ID
     */

  }, {
    key: "enableHotKeys",
    value: function enableHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      return this._focusOnlyEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
    }
    /**
     * Handles when a HotKeys component that is in focus updates its props and changes
     * either the keyMap or handlers prop value
     * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
     *        Used to identify (and ignore) stale updates.
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
     * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
     *        functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     */

  }, {
    key: "updateEnabledHotKeys",
    value: function updateEnabledHotKeys(focusTreeId, componentId) {
      var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 ? arguments[4] : undefined;
      return this._focusOnlyEventStrategy.updateEnabledHotKeys(focusTreeId, componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
    }
    /**
     * Handles when a component loses focus by resetting the internal state, ready to
     * receive the next tree of focused HotKeys components
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
     *        apart of
     * @param {ComponentId} componentId - Index of component that is blurring
     * @returns {boolean} Whether the component still has event propagation yet to handle
     */

  }, {
    key: "disableHotKeys",
    value: function disableHotKeys(focusTreeId, componentId) {
      return this._focusOnlyEventStrategy.disableHotKeys(focusTreeId, componentId);
    }
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The id of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event is handled.
     * @returns Whether the event was discarded because it was part of an old focus tree
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(event, focusTreeId, componentId, options) {
      if (isFromFocusOnlyComponent(focusTreeId)) {
        return this._focusOnlyEventStrategy.handleKeydown(event, focusTreeId, componentId, options);
      }
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event
     *        is handled.
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event, focusTreeId, componentId, options) {
      if (isFromFocusOnlyComponent(focusTreeId)) {
        return this._focusOnlyEventStrategy.handleKeyPress(event, focusTreeId, componentId, options);
      }
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options Hash of options that configure how the event
     *        is handled.
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event, focusTreeId, componentId, options) {
      if (isFromFocusOnlyComponent(focusTreeId)) {
        return this._focusOnlyEventStrategy.handleKeyUp(event, focusTreeId, componentId, options);
      }
    }
    /********************************************************************************
     * Global key events
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has mounted
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     * @returns {ComponentId} A unique component ID to assign to the focused HotKeys
     *        component and passed back when handling a key event
     */

  }, {
    key: "enableGlobalHotKeys",
    value: function enableGlobalHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      return this._globalEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
    }
    /**
     * Handles when a mounted global HotKeys component updates its props and changes
     * either the keyMap or handlers prop value
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */

  }, {
    key: "updateEnabledGlobalHotKeys",
    value: function updateEnabledGlobalHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      return this._globalEventStrategy.updateEnabledHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
    }
    /**
     * Handles when a component is unmounted
     * @param {ComponentId} componentId - Index of component that is being unmounted
     */

  }, {
    key: "disableGlobalHotKeys",
    value: function disableGlobalHotKeys(componentId) {
      return this._globalEventStrategy.disableHotKeys(componentId);
    }
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleGlobalKeyDown",
    value: function handleGlobalKeyDown(event) {
      return this._globalEventStrategy.handleKeydown(event);
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleGlobalKeyPress",
    value: function handleGlobalKeyPress(event) {
      return this._globalEventStrategy.handleKeyPress(event);
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleGlobalKeyUp",
    value: function handleGlobalKeyUp(event) {
      return this._globalEventStrategy.handleKeyUp(event);
    }
    /**
     * Ignores the next keyboard event immediately, rather than waiting for it to
     * match the ignoreEventsCondition
     * @param {KeyboardEvent} event keyboard event to ignore
     * @see Configuration.ignoreEventsCondition
     */

  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(event) {
      this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(event);
    }
    /**
     * Forces the observation of the next keyboard event immediately, disregarding whether
     * the event matches the ignoreKeyEventsCondition
     * @param {KeyboardEvent} event keyboard event to force the observation of
     * @see Configuration.ignoreEventsCondition
     */

  }, {
    key: "observeIgnoredEvents",
    value: function observeIgnoredEvents(event) {
      this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(event);
    }
    /**
     * Closes any hanging key combinations that have not received the key event indicated
     * by recordIndex.
     * @param {KeyName} keyName The name of the key whose state should be updated if it
     *        is currently set to keydown or keypress.
     * @param {KeyEventType} recordIndex Index of key event to move the key state
     *        up to.
     */

  }, {
    key: "closeHangingKeyCombination",
    value: function closeHangingKeyCombination(keyName, recordIndex) {
      this._focusOnlyEventStrategy.closeHangingKeyCombination(keyName, recordIndex);
    }
  }, {
    key: "reactAppHistoryWithEvent",
    value: function reactAppHistoryWithEvent(key, type) {
      var previousPropagation = this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();

      if (previousPropagation.isForKey(key) && previousPropagation.isForEventType(type)) {
        if (previousPropagation.isHandled()) {
          return EventResponse.handled;
        } else if (previousPropagation.isIgnoringEvent()) {
          return EventResponse.ignored;
        } else {
          return EventResponse.seen;
        }
      } else {
        return EventResponse.unseen;
      }
    }
  }, {
    key: "simulatePendingKeyPressEvents",
    value: function simulatePendingKeyPressEvents() {
      this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();
    }
  }, {
    key: "simulatePendingKeyUpEvents",
    value: function simulatePendingKeyUpEvents() {
      this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();
    }
  }, {
    key: "isGlobalListenersBound",
    value: function isGlobalListenersBound() {
      return this._globalEventStrategy.listenersBound;
    }
  }]);

  return KeyEventManager;
}();

/**
 * Modifies in-place and returns a React Component class such that it correctly uses
 * the React context API appropriate for the version of React being used.
 *
 * @see https://reactjs.org/docs/context.html
 *
 * @param {React.Component} Component React component to modify to use the correct
 *        context API
 * @param {Object} options Hash of options that define the shape and default values
 *        of the context to use with descendant components.
 * @param {Object} options.deprecatedAPI Hash of options that satisfy the legacy
 *        or deprecated pre React 16.* API
 * @param {Object} options.deprecatedAPI.contextTypes Context types describing the
 *        shape and type of the context that Component consumes, expressed as React
 *        prop types
 * @param {Object} options.deprecatedAPI.childContextTypes Context types describing the
 *        shape and type of the context that Component makes available to its descendants
 *        to consume, expressed as React prop types
 * @param {Object} options.newAPI Hash of options that satisfy the new context API,
 *        available from React 16.* onwards
 * @param {Object} options.newAPI.contextType Object describing the shape and default
 *        values of the context instance used provide context to descendant components
 * @returns {React.Component} Component that has now had the specified context applied
 */

function backwardsCompatibleContext(Component, _ref) {
  var _ref$deprecatedAPI = _ref.deprecatedAPI,
      contextTypes = _ref$deprecatedAPI.contextTypes,
      childContextTypes = _ref$deprecatedAPI.childContextTypes,
      contextType = _ref.newAPI.contextType;

  /**
   * React v16.* introduces a new context API and deprecates the previous, experimental one
   */
  if (typeof React__default["default"].createContext === 'undefined') {
    /**
     * We apply the deprecated context if the new createContext method is not defined.
     * @note this uses the new context API for React v16.*, even though it is still
     * available until React v17.*
     */

    /**
     * The contextTypes and childContextTypes are the same as each react hotkeys component
     * that uses context, both consumes its most direct ancestor's context and modifies
     * the context of its descendants in order to recursively pass down the guid of the
     * most direct ancestor
     */
    Component.contextTypes = contextTypes;
    Component.childContextTypes = childContextTypes;

    Component.prototype.getChildContext = function () {
      return this._childContext;
    };
  } else {
    var context = React__default["default"].createContext(contextType);
    Component.contextType = context;
    Component.prototype._originalRender = Component.prototype.render;
    /**
     * We unfortunately have to wrap the original render method of the Component to
     * dynamically add the context Provider component.
     *
     * No ill-effects have been discovered during testing, but if strange occurrences
     * or edge cases start to appear - this may be a great place to start looking.
     */

    Component.prototype.render = function () {
      var result = this._originalRender();

      if (result) {
        return React__default["default"].createElement(context.Provider, {
          value: this._childContext
        }, result);
      } else {
        return null;
      }
    };
  }

  return Component;
}

function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Wraps a React component in a HotKeysEnabled component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 *
 * @param {React.ComponentClass} Component - Component class to wrap
 * @param {Object} hotKeysOptions - Options that become the wrapping component's
 *                 default prop values
 * @returns {React.ComponentClass} Wrapped component that is passed all of the React hotkeys
 * props in a single value, hotkeys.
 */

function withHotKeys(Component) {
  var hotKeysOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function mergeWithOptions(key, props) {
    return _objectSpread$3({}, hotKeysOptions[key] || {}, props[key] || {});
  }

  function getHandlers(props) {
    return mergeWithOptions('handlers', props);
  }

  function getKeyMap(props) {
    return mergeWithOptions('keyMap', props);
  }
  /**
   * Component that listens to key events when one of its children are in focus and
   * selectively triggers actions (that may be handled by handler functions) when a
   * sequence of events matches a list of pre-defined sequences or combinations
   * @class
   */


  var HotKeysEnabled =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits$5(HotKeysEnabled, _PureComponent);

    function HotKeysEnabled(props) {
      var _this;

      _classCallCheck$5(this, HotKeysEnabled);

      _this = _possibleConstructorReturn$5(this, _getPrototypeOf$5(HotKeysEnabled).call(this, props));
      /**
       * The focus and blur handlers need access to the current component as 'this'
       * so they need to be bound to it when the component is instantiated
       */

      _this._handleFocus = _this._handleFocus.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._handleBlur = _this._handleBlur.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._handleKeyDown = _this._handleKeyDown.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._handleKeyPress = _this._handleKeyPress.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._handleKeyUp = _this._handleKeyUp.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._componentIsFocused = _this._componentIsFocused.bind(_assertThisInitialized$5(_assertThisInitialized$5(_this)));
      _this._id = KeyEventManager.getInstance().registerKeyMap(props.keyMap);
      /**
       * We maintain a separate instance variable to contain context that will be
       * passed down to descendants of this component so we can have a consistent
       * reference to the same object, rather than instantiating a new one on each
       * render, causing unnecessary re-rendering of descendant components that
       * consume the context.
       *
       * @see https://reactjs.org/docs/context.html#caveats
       */

      _this._childContext = {
        hotKeysParentId: _this._id
      };
      return _this;
    }

    _createClass$5(HotKeysEnabled, [{
      key: "render",
      value: function render() {
        var _this$props = this.props;
            _this$props.keyMap;
            _this$props.handlers;
            _this$props.allowChanges;
            _this$props.root;
            var props = _objectWithoutProperties$4(_this$props, ["keyMap", "handlers", "allowChanges", "root"]);

        var hotKeys = {
          onFocus: this._wrapFunction('onFocus', this._handleFocus),
          onBlur: this._wrapFunction('onBlur', this._handleBlur),
          tabIndex: Configuration.option('defaultTabIndex')
        };

        if (this._shouldBindKeyListeners()) {
          hotKeys.onKeyDown = this._handleKeyDown;
          hotKeys.onKeyPress = this._handleKeyPress;
          hotKeys.onKeyUp = this._handleKeyUp;
        }

        return React__default["default"].createElement(Component, _extends$1({
          hotKeys: hotKeys
        }, props));
      }
    }, {
      key: "_shouldBindKeyListeners",
      value: function _shouldBindKeyListeners() {
        var keyMap = getKeyMap(this.props);
        return !isEmpty(keyMap) || this.props.root || Configuration.option('enableHardSequences') && this._handlersIncludeHardSequences(keyMap, getHandlers(this.props));
      }
    }, {
      key: "_handlersIncludeHardSequences",
      value: function _handlersIncludeHardSequences(keyMap, handlers) {
        return Object.keys(handlers).some(function (action) {
          return !keyMap[action] && KeyCombinationSerializer.isValidKeySerialization(action);
        });
      }
    }, {
      key: "_wrapFunction",
      value: function _wrapFunction(propName, func) {
        var _this2 = this;

        if (typeof this.props[propName] === 'function') {
          return function (event) {
            _this2.props[propName](event);

            func(event);
          };
        } else {
          return func;
        }
      }
    }, {
      key: "_focusTreeIdsPush",
      value: function _focusTreeIdsPush(componentId) {
        if (!this._focusTreeIds) {
          this._focusTreeIds = [];
        }

        this._focusTreeIds.push(componentId);
      }
    }, {
      key: "_focusTreeIdsShift",
      value: function _focusTreeIdsShift() {
        if (this._focusTreeIds) {
          this._focusTreeIds.shift();
        }
      }
    }, {
      key: "_getFocusTreeId",
      value: function _getFocusTreeId() {
        if (this._focusTreeIds) {
          return this._focusTreeIds[0];
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var keyEventManager = KeyEventManager.getInstance();
        keyEventManager.reregisterKeyMap(this._id, this.props.keyMap);

        if (this._componentIsFocused() && (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault'))) {
          var _this$props2 = this.props,
              keyMap = _this$props2.keyMap,
              handlers = _this$props2.handlers;
          keyEventManager.updateEnabledHotKeys(this._getFocusTreeId(), this._id, keyMap, handlers, this._getComponentOptions());
        }
      }
    }, {
      key: "_componentIsFocused",
      value: function _componentIsFocused() {
        return this._focused === true;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var keyEventManager = KeyEventManager.getInstance();
        var hotKeysParentId = this.context.hotKeysParentId;
        keyEventManager.registerComponentMount(this._id, hotKeysParentId);
      }
      /**
       * Handles when the component gains focus by calling onFocus prop, if defined, and
       * registering itself with the KeyEventManager
       * @private
       */

    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (this.props.onFocus) {
          var _this$props3;

          (_this$props3 = this.props).onFocus.apply(_this$props3, arguments);
        }

        var focusTreeId = KeyEventManager.getInstance().enableHotKeys(this._id, getKeyMap(this.props), getHandlers(this.props), this._getComponentOptions());

        if (!isUndefined(focusTreeId)) {
          /**
           * focusTreeId should never normally be undefined, but this return state is
           * used to indicate that a component with the same componentId has already
           * registered as focused/enabled (again, a condition that should not normally
           * occur, but apparently can for as-yet unknown reasons).
           *
           * @see https://github.com/greena13/react-hotkeys/issues/173
           */
          this._focusTreeIdsPush(focusTreeId);
        }

        this._focused = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var keyEventManager = KeyEventManager.getInstance();
        keyEventManager.deregisterKeyMap(this._id);
        keyEventManager.registerComponentUnmount();

        this._handleBlur();
      }
      /**
       * Handles when the component loses focus by calling the onBlur prop, if defined
       * and removing itself from the KeyEventManager
       * @private
       */

    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        if (this.props.onBlur) {
          var _this$props4;

          (_this$props4 = this.props).onBlur.apply(_this$props4, arguments);
        }

        var retainCurrentFocusTreeId = KeyEventManager.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);

        if (!retainCurrentFocusTreeId) {
          this._focusTreeIdsShift();
        }

        this._focused = false;
      }
      /**
       * Delegates handing the keydown event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        var discardFocusTreeId = KeyEventManager.getInstance().handleKeydown(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
      /**
       * Delegates handing the keypress event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyPress",
      value: function _handleKeyPress(event) {
        var discardFocusTreeId = KeyEventManager.getInstance().handleKeyPress(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
      /**
       * Delegates handing the keyup event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyUp",
      value: function _handleKeyUp(event) {
        var discardFocusTreeId = KeyEventManager.getInstance().handleKeyUp(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
    }, {
      key: "_getComponentOptions",
      value: function _getComponentOptions() {
        return {
          defaultKeyEvent: Configuration.option('defaultKeyEvent')
        };
      }
    }, {
      key: "_getEventOptions",
      value: function _getEventOptions() {
        return {
          ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
        };
      }
    }]);

    return HotKeysEnabled;
  }(React.PureComponent);

  _defineProperty$5(HotKeysEnabled, "propTypes", {
    /**
     * A unique key to associate with KeyEventMatchers that allows associating handler
     * functions at a later stage
     * @typedef {string} ActionName
     */

    /**
     * Name of a key event
     * @typedef {'keyup'|'keydown'|'keypress'} KeyEventName
     */

    /**
     * A string or list of strings, that represent a sequence of one or more keys
     * @typedef {String | Array.<String>} MouseTrapKeySequence
     * @see {@link https://craig.is/killing/mice} for support key sequences
     */

    /**
     * Options for the mapping of a key sequence and event
     * @typedef {Object} KeyEventOptions
     * @property {MouseTrapKeySequence} sequence - The key sequence required to satisfy a
     *           KeyEventDescription
     * @property {KeyEventName} action - The keyboard state required to satisfy a
     *           KeyEventDescription
     * @property {string} name - The name of the action, to be displayed to the end user
     * @property {string} description - A description of the action, to be displayed to
     *           the end user
     * @property {string} group - A group the action belongs to, to aid in showing similar
     *           actions to the user
     */

    /**
     * A description of key sequence of one or more key combinations
     * @typedef {MouseTrapKeySequence|KeyEventOptions|Array.<MouseTrapKeySequence>} KeyEventDescription
     */

    /**
     * A mapping from ActionName to KeyEventDescription
     * @typedef {Object.<ActionName, KeyEventDescription>} KeyMap
     */

    /**
     * A map from action names to Mousetrap or Browser key sequences
     * @type {KeyMap}
     */
    keyMap: PropTypes.object,

    /**
     * A map from action names to event handler functions
     * @typedef {Object.<ActionName, Function>} HandlersMap
     */

    /**
     * A map from action names to event handler functions
     * @type {HandlersMap}
     */
    handlers: PropTypes.object,

    /**
     * Function to call when this component gains focus in the browser
     * @type {function}
     */
    onFocus: PropTypes.func,

    /**
     * Function to call when this component loses focus in the browser
     * @type {function}
     */
    onBlur: PropTypes.func,

    /**
     * Whether the keyMap or handlers are permitted to change after the
     * component mounts. If false, changes to the keyMap and handlers
     * props will be ignored
     */
    allowChanges: PropTypes.bool,

    /**
     * Whether this is the root HotKeys node - this enables some special behaviour
     */
    root: PropTypes.bool
  });

  return backwardsCompatibleContext(HotKeysEnabled, {
    deprecatedAPI: {
      contextTypes: {
        hotKeysParentId: PropTypes.number
      },
      childContextTypes: {
        hotKeysParentId: PropTypes.number
      }
    },
    newAPI: {
      contextType: {
        hotKeysParentId: undefined
      }
    }
  });
}

function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
/**
 * @see HotKeysEnabled
 */

var HotKeysWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits$4(HotKeysWrapper, _Component);

  function HotKeysWrapper() {
    _classCallCheck$4(this, HotKeysWrapper);

    return _possibleConstructorReturn$4(this, _getPrototypeOf$4(HotKeysWrapper).apply(this, arguments));
  }

  _createClass$4(HotKeysWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hotKeys = _this$props.hotKeys,
          innerRef = _this$props.innerRef,
          component = _this$props.component,
          remainingProps = _objectWithoutProperties$3(_this$props, ["hotKeys", "innerRef", "component"]);

      var DefaultComponent = component || Configuration.option('defaultComponent');
      return React__default["default"].createElement(DefaultComponent, _objectSpread$2({}, hotKeys, {
        ref: innerRef
      }, remainingProps));
    }
  }]);

  return HotKeysWrapper;
}(React.Component);

var HotKeys = withHotKeys(HotKeysWrapper);
HotKeys.propTypes = {
  /**
   * A ref to add to the underlying DOM-mountable node
   */
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GlobalHotKeys =
/*#__PURE__*/
function (_Component) {
  _inherits$3(GlobalHotKeys, _Component);

  function GlobalHotKeys(props) {
    var _this;

    _classCallCheck$3(this, GlobalHotKeys);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(GlobalHotKeys).call(this, props));
    _this._id = KeyEventManager.getInstance().registerGlobalKeyMap(props.keyMap);
    /**
     * We maintain a separate instance variable to contain context that will be
     * passed down to descendants of this component so we can have a consistent
     * reference to the same object, rather than instantiating a new one on each
     * render, causing unnecessary re-rendering of descendant components that
     * consume the context.
     *
     * @see https://reactjs.org/docs/context.html#caveats
     */

    _this._childContext = {
      globalHotKeysParentId: _this._id
    };
    return _this;
  }

  _createClass$3(GlobalHotKeys, [{
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.reregisterGlobalKeyMap(this._id, this.props.keyMap);

      if (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault')) {
        var _this$props = this.props,
            keyMap = _this$props.keyMap,
            handlers = _this$props.handlers;
        /**
         * Component defines global hotkeys, so any changes to props may have changes
         * that should have immediate effect
         */

        keyEventManager.updateEnabledGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          keyMap = _this$props2.keyMap,
          handlers = _this$props2.handlers;
      var globalHotKeysParentId = this.context.globalHotKeysParentId;
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.registerGlobalComponentMount(this._id, globalHotKeysParentId);
      keyEventManager.enableGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.deregisterGlobalKeyMap(this._id);
      keyEventManager.disableGlobalHotKeys(this._id);
      keyEventManager.registerGlobalComponentUnmount();
    }
  }, {
    key: "_getComponentOptions",
    value: function _getComponentOptions() {
      return {
        defaultKeyEvent: Configuration.option('defaultKeyEvent')
      };
    }
  }, {
    key: "_getEventOptions",
    value: function _getEventOptions() {
      return {
        ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
      };
    }
  }]);

  return GlobalHotKeys;
}(React.Component);

_defineProperty$3(GlobalHotKeys, "propTypes", {
  /**
   * A map from action names to Mousetrap or Browser key sequences
   * @type {KeyMap}
   */
  keyMap: PropTypes.object,

  /**
   * A map from action names to event handler functions
   * @typedef {Object.<ActionName, Function>} HandlersMap
   */

  /**
   * A map from action names to event handler functions
   * @type {HandlersMap}
   */
  handlers: PropTypes.object,

  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   */
  allowChanges: PropTypes.bool
});

var GlobalHotKeys$1 = backwardsCompatibleContext(GlobalHotKeys, {
  deprecatedAPI: {
    contextTypes: {
      globalHotKeysParentId: PropTypes.number
    },
    childContextTypes: {
      globalHotKeysParentId: PropTypes.number
    }
  },
  newAPI: {
    contextType: {
      globalHotKeysParentId: undefined
    }
  }
});

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Wraps a React component in a HotKeysIgnoreOverride component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 *
 * @param {React.ComponentClass} Component - Component class to wrap
 * @param {Object} hotKeysIgnoreOptions - Options that become the wrapping component's
 *                 default prop values
 * @param {string} eventManagerMethod - Name of EventManager method to use to handle a
 *        key event
 * @returns {React.ComponentClass} Wrapped component that is passed all of the React
 * hotkeys props in a single value, hotkeys.
 */

function withHotKeysIgnoreOverride(Component) {
  var _class, _temp;

  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  var eventManagerMethod = arguments.length > 2 ? arguments[2] : undefined;

  /**
   * A component that causes React Hotkeys to ignore the results of
   * Configuration.ignoreEventCondition and instead either force the event to be
   * ignored or observed. By default, this is all key events, but you can use
   * the only prop to provide a whitelist, or the except prop to pass a blacklist.
   * @class
   */
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits$2(HotKeysIgnoreOverride, _PureComponent);

    function HotKeysIgnoreOverride(props) {
      var _this;

      _classCallCheck$2(this, HotKeysIgnoreOverride);

      _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(HotKeysIgnoreOverride).call(this, props));
      _this._handleKeyEvent = _this._handleKeyEvent.bind(_assertThisInitialized$2(_assertThisInitialized$2(_this)));
      _this._reloadDictionaries = _this._reloadDictionaries.bind(_assertThisInitialized$2(_assertThisInitialized$2(_this)));
      return _this;
    }

    _createClass$2(HotKeysIgnoreOverride, [{
      key: "render",
      value: function render() {
        var _this$props = this.props;
            _this$props.only;
            _this$props.except;
            var props = _objectWithoutProperties$2(_this$props, ["only", "except"]);

        var hotKeys = {
          onKeyDown: this._handleKeyEvent,
          onKeyPress: this._handleKeyEvent,
          onKeyUp: this._handleKeyEvent,
          onFocus: this._reloadDictionaries
        };
        return React__default["default"].createElement(Component, _extends({
          hotKeys: hotKeys
        }, props));
      }
    }, {
      key: "_reloadDictionaries",
      value: function _reloadDictionaries() {
        var _this$props2 = this.props,
            only = _this$props2.only,
            except = _this$props2.except;
        this._onlyDict = keyDictionary(only);
        this._exceptDict = keyDictionary(except);
      }
    }, {
      key: "_shouldIgnoreEvent",
      value: function _shouldIgnoreEvent(_ref) {
        var key = _ref.key;

        if (isEmpty(this._onlyDict)) {
          if (isEmpty(this._exceptDict)) {
            return true;
          } else {
            return !hasKey(this._exceptDict, key);
          }
        } else {
          if (isEmpty(this._exceptDict)) {
            return hasKey(this._onlyDict, key);
          } else {
            return hasKey(this._onlyDict, key) && !hasKey(this._exceptDict, key);
          }
        }
      }
    }, {
      key: "_handleKeyEvent",
      value: function _handleKeyEvent(event) {
        if (this._shouldIgnoreEvent(event)) {
          KeyEventManager.getInstance()[eventManagerMethod](event);
        }
      }
    }]);

    return HotKeysIgnoreOverride;
  }(React.PureComponent), _defineProperty$2(_class, "propTypes", {
    /**
     * The whitelist of keys that keyevents should be ignored. i.e. if you place
     * a key in this list, all events related to it will be ignored by react hotkeys
     */
    only: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /**
     * The blacklist of keys that keyevents should be not ignored. i.e. if you place
     * a key in this list, all events related to it will be still be observed by react
     * hotkeys
     */
    except: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  }), _defineProperty$2(_class, "defaultProps", hotKeysIgnoreOptions), _temp;
}

function keyDictionary(list) {
  return arrayFrom(list).reduce(function (memo, keyName) {
    var finalKeyName = standardizeKeyName(keyName);

    if (!isValidKey(finalKeyName)) {
      throw new InvalidKeyNameError(keyName);
    }

    [resolveAltShiftedAlias, resolveUnaltShiftedAlias, resolveShiftedAlias, resolveUnshiftedAlias, resolveAltedAlias, resolveUnaltedAlias].forEach(function (func) {
      memo[func(finalKeyName)] = true;
    });
    return memo;
  }, {});
}

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
/**
 * A component that causes React Hotkeys to ignore all matching key events
 * triggered by its children. By default, this is all key events, but you can use
 * the only prop to provide a whitelist, or the except prop to pass a blacklist (and
 * cause HotKeys components to still observe these events).
 *
 * @see HotKeysIgnoreOverride
 */

var IgnoreKeys =
/*#__PURE__*/
function (_Component) {
  _inherits$1(IgnoreKeys, _Component);

  function IgnoreKeys() {
    _classCallCheck$1(this, IgnoreKeys);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(IgnoreKeys).apply(this, arguments));
  }

  _createClass$1(IgnoreKeys, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hotKeys = _this$props.hotKeys,
          remainingProps = _objectWithoutProperties$1(_this$props, ["hotKeys"]);

      var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
      return React__default["default"].createElement(DefaultComponent, _objectSpread$1({}, hotKeys, remainingProps));
    }
  }]);

  return IgnoreKeys;
}(React.Component);

var IgnoreKeys$1 = withHotKeysIgnoreOverride(IgnoreKeys, {}, 'ignoreEvent');

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * A component that forces React Hotkeys to observe all matching key events
 * triggered by its children, even if they are matched by Configuration.ignoreEventsCondition.
 * By default, this is all key events, but you can use the only prop to provide a
 * whitelist, or the except prop to pass a blacklist.
 *
 * @see HotKeysIgnoreOverride
 */

var ObserveKeys =
/*#__PURE__*/
function (_Component) {
  _inherits(ObserveKeys, _Component);

  function ObserveKeys() {
    _classCallCheck(this, ObserveKeys);

    return _possibleConstructorReturn(this, _getPrototypeOf(ObserveKeys).apply(this, arguments));
  }

  _createClass(ObserveKeys, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hotKeys = _this$props.hotKeys,
          remainingProps = _objectWithoutProperties(_this$props, ["hotKeys"]);

      var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
      return React__default["default"].createElement(DefaultComponent, _objectSpread({}, hotKeys, remainingProps));
    }
  }]);

  return ObserveKeys;
}(React.Component);

var ObserveKeys$1 = withHotKeysIgnoreOverride(ObserveKeys, {}, 'observeIgnoredEvents');

/**
 * Wraps a React component in a HotKeysIgnored component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */

function withIgnoreKeys(Component) {
  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'ignoreEvent');
}

/**
 * Wraps a React component in a ObserveKeys component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */

function withObserveKeys(Component) {
  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'observeIgnoredEvents');
}

/**
 * Configure the behaviour of HotKeys
 * @param {Object} configuration Configuration object
 * @see Configuration.init
 */

function configure() {
  var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Configuration.init(configuration);
}

/**
 * @typedef {Object.<ActionName, KeyEventDescription[]>} ApplicationKeyMap
 */

/**
 * Generates and returns the application's key map, including not only those
 * that are live in the current focus, but all the key maps from all the
 * HotKeys and GlobalHotKeys components that are currently mounted
 * @returns {ApplicationKeyMap} The application's key map
 */

function getApplicationKeyMap() {
  return KeyEventManager.getInstance().getApplicationKeyMap();
}

/**
 * @callback keyCombinationListener
 */

/**
 * Adds a listener function that will be called the next time a key combination completes
 * @param {keyCombinationListener} callbackFunction Listener function to be called
 * @returns {function} Function to call to cancel listening to the next key combination
 */

function recordKeyCombination(callbackFunction) {
  var eventManager = KeyEventManager.getInstance();
  return eventManager.addKeyCombinationListener(callbackFunction);
}

var es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HotKeys: HotKeys,
    GlobalHotKeys: GlobalHotKeys$1,
    IgnoreKeys: IgnoreKeys$1,
    ObserveKeys: ObserveKeys$1,
    withHotKeys: withHotKeys,
    withIgnoreKeys: withIgnoreKeys,
    withObserveKeys: withObserveKeys,
    configure: configure,
    getApplicationKeyMap: getApplicationKeyMap,
    recordKeyCombination: recordKeyCombination
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(es);

if (process.env.NODE_ENV === 'production') {
  index_es.exports = require$$0;
} else {
  index_es.exports = require$$1;
}

var eventemitter3 = {exports: {}};

(function (module) {

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
{
  module.exports = EventEmitter;
}
}(eventemitter3));

var CustomEventEmitter = /** @class */ (function (_super) {
    __extends(CustomEventEmitter, _super);
    function CustomEventEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomEventEmitter;
}(eventemitter3.exports.EventEmitter));

var PREFIX_CLASSNAME_FOCUSED = "focused";
var EVENT_EMITTER = {
    focus: "tcond_focused",
    unfocus: "tcond_unfocused",
};
var ManagerControl = /** @class */ (function () {
    function ManagerControl() {
        var _this = this;
        this.nodes = {}; // Toàn bộ node trong ứng dụng
        this.treeNodes = {}; // Cây node theo layoutIndex
        this.screenNodes = {}; // Cây node theo screen
        this.rootNodeId = "root";
        this.displayName = "ManagerControl";
        this._emitter_ = new CustomEventEmitter();
        this.lastNodeIdScreen = {};
        this.classnameActiveFocus = PREFIX_CLASSNAME_FOCUSED;
        this.lockCheckFocus = false;
        this.getCurrentNodeId = function () {
            return _this.currentNode;
        };
        this.setLockFocus = function (lockCheckFocus) {
            if (lockCheckFocus === void 0) { lockCheckFocus = false; }
            _this.lockCheckFocus = lockCheckFocus;
            if (lockCheckFocus) {
                _this.unfocusedElementEmitter(EVENT_EMITTER.unfocus);
            }
        };
        // private timerFocus: any = null;
        this.focusedElementEmitter = function (_eventName, nodeId) {
            var _a, _b;
            var node = _this.getNode(nodeId);
            if (node) {
                var newNode = __assign(__assign({}, node), { focused: true });
                _this._updateNode(newNode);
                if (newNode.displayScreen) {
                    _this.lastNodeIdScreen[newNode.displayScreen] = nodeId;
                }
                if (((_b = (_a = DOMUtil.documentCache.getElementById(nodeId)) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList[0]) !== _this.classnameActiveFocus) {
                    // if (this.timerFocus) {
                    //   clearRequestTimeout(this.timerFocus);
                    //   this.timerFocus = null;
                    // }
                    var cb = function () {
                        var _a, _b;
                        if (_this.lockCheckFocus) {
                            return;
                        }
                        (_b = (_a = DOMUtil.documentCache
                            .getElementById(nodeId)) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add(_this.classnameActiveFocus);
                    };
                    smoothFunction(cb)();
                    // this.timerFocus = setRequestTimeout(
                    //   () =>
                    //     DOMUtil.documentCache
                    //       .getElementById(nodeId)
                    //       ?.parentElement?.classList.add(this.classnameActiveFocus),
                    //   10
                    // );
                    // Hàm lấy ra kích thước bao ngoài của Đối tượng focus
                    // logger.info(DOMUtil.documentCache.getElementById(nodeId)?.getBoundingClientRect());
                    node.onFocusNode(node);
                }
            }
        };
        this.unfocusedElementEmitter = function (_eventName, nodeId) {
            var highestNodes = _this.getNodesHighestLayoutIndex();
            var _loop_1 = function (keyId) {
                if (Object.prototype.hasOwnProperty.call(highestNodes, keyId)) {
                    var node_1 = highestNodes[keyId];
                    if (node_1.id !== nodeId && node_1.focused) {
                        var newNode = __assign(__assign({}, node_1), { focused: false });
                        _this._updateNode(newNode);
                        var cb = function () {
                            var _a, _b;
                            (_b = (_a = DOMUtil.documentCache
                                .getElementById(node_1.id)) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove(_this.classnameActiveFocus);
                        };
                        smoothFunction(cb)();
                        // DOMUtil.documentCache
                        //   .getElementById(node.id)
                        //   ?.parentElement?.classList.remove(this.classnameActiveFocus);
                        node_1.onBlurNode(node_1);
                    }
                }
            };
            for (var keyId in highestNodes) {
                _loop_1(keyId);
            }
        };
        // Lấy lại 1 điểm focus nếu k có điểm đấy
        this.onKeydown = function (_ev) {
            var _a;
            if (_this.lockCheckFocus) {
                return;
            }
            if (!_this.currentNode) {
                return;
            }
            var highestNodes = _this.getNodesHighestLayoutIndex();
            if (!highestNodes) {
                // Không có bất kỳ node nào
                return;
            }
            var currentNode = highestNodes[_this.currentNode];
            if (currentNode &&
                (!currentNode.isDefault || Object.keys(highestNodes).length === 1)) {
                // Nếu current node đã ở trên màn active cao nhất
                if (((_a = DOMUtil.documentCache.activeElement) === null || _a === void 0 ? void 0 : _a.id) !== currentNode.id) {
                    _this.focusNodeById(currentNode.id);
                }
                return;
            }
            // Nếu current node không ở trên màn active cao nhất
            for (var key in highestNodes) {
                if (Object.prototype.hasOwnProperty.call(highestNodes, key)) {
                    var node = highestNodes[key];
                    if (node === null || node === void 0 ? void 0 : node.displayScreen) {
                        _this.focusLastNodeIdScreen(node);
                        break;
                    }
                    _this.focusNodeById(node.id);
                    break;
                }
            }
        };
        this._focusExeptDefault = function (node, nodes) {
            if (!node.isDefault || Object.keys(nodes).length === 1) {
                _this.focusNodeById(node.id);
                return;
            }
            for (var nodeId in nodes) {
                if (Object.prototype.hasOwnProperty.call(nodes, nodeId)) {
                    var n = nodes[nodeId];
                    if (n.isDefault) {
                        continue;
                    }
                    _this.focusNodeById(n.id);
                    break;
                }
            }
        };
        this.displayName = "ManagerControl";
        this._init();
    }
    ManagerControl.getInstance = function () {
        if (!this._instance) {
            this._instance = new ManagerControl();
        }
        return this._instance;
    };
    ManagerControl.clear = function () {
        if (this._instance) {
            this._instance.destroy();
            delete this._instance;
        }
    };
    ManagerControl.prototype.setClassnameActiveFocus = function (className) {
        this.classnameActiveFocus = className;
    };
    ManagerControl.prototype.trigger = function (event) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = this._emitter_) === null || _a === void 0 ? void 0 : _a.emit.apply(_a, __spreadArray([event, event], __read(data), false));
    };
    ManagerControl.prototype.destroy = function () {
        var _a, _b;
        (_a = this._emitter_) === null || _a === void 0 ? void 0 : _a.off(EVENT_EMITTER.focus, this.focusedElementEmitter);
        (_b = this._emitter_) === null || _b === void 0 ? void 0 : _b.off(EVENT_EMITTER.unfocus, this.unfocusedElementEmitter);
        window.removeEventListener("keydown", this.onKeydown);
    };
    // @printMemberName
    ManagerControl.prototype._init = function () {
        // console.log(getMethodName());
        this.currentScreen = undefined;
        this.currentNode = undefined;
        this.focusedElementEmitter = smoothFunction(this.focusedElementEmitter);
        this.unfocusedElementEmitter = smoothFunction(this.unfocusedElementEmitter);
    };
    ManagerControl.prototype.setRootId = function (id) {
        this.rootNodeId = id;
    };
    ManagerControl.prototype.setCurrentScreen = function (screen) {
        this.currentScreen = screen;
    };
    // Đăng ký 1 node focusable vào dữ liệu manager
    ManagerControl.prototype.registerNode = function (nodeId, options) {
        if (!nodeId) {
            return this;
        }
        var node = this.getNode(nodeId);
        if (node) {
            return this;
        }
        var newNode = __assign({ id: nodeId, actived: true, focused: false }, options);
        this._updateNode(newNode);
        return this;
    };
    ManagerControl.prototype._updateNode = function (node) {
        var _a, _b;
        this.nodes[node.id] = node;
        if (node.layoutIndex) {
            this.treeNodes[node.layoutIndex] = __assign(__assign({}, this.treeNodes[node.layoutIndex]), (_a = {}, _a[node.id] = node, _a));
        }
        if (node.displayScreen) {
            this.screenNodes[node.displayScreen] = __assign(__assign({}, this.screenNodes[node.displayScreen]), (_b = {}, _b[node.id] = node, _b));
        }
    };
    ManagerControl.prototype._removeNode = function (nodeId) {
        var _a, _b;
        var node = this.getNode(nodeId);
        if (node) {
            delete this.nodes[node.id];
            if (node.layoutIndex) {
                (_a = this.treeNodes[node.layoutIndex]) === null || _a === void 0 ? true : delete _a[node.id];
            }
            if (node.displayScreen) {
                (_b = this.screenNodes[node.displayScreen]) === null || _b === void 0 ? true : delete _b[node.id];
            }
        }
    };
    // Loại bỏ 1 node focusable vào dữ liệu manager
    ManagerControl.prototype.unregisterNode = function (nodeId) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _args[_i - 1] = arguments[_i];
        }
        if (!nodeId) {
            return this;
        }
        this._removeNode(nodeId);
        return this;
    };
    // Kích hoạt active với các thành phần gắn lại vào DOM khi dùng cơ chế cache
    ManagerControl.prototype.mountedScreen = function (displayScreen) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _args[_i - 1] = arguments[_i];
        }
        if (!displayScreen) {
            return this;
        }
        for (var key in this.screenNodes) {
            if (Object.prototype.hasOwnProperty.call(this.screenNodes, key)) {
                if (key === displayScreen) {
                    var nodeInScreen = this.screenNodes[key];
                    for (var k in nodeInScreen) {
                        if (Object.prototype.hasOwnProperty.call(nodeInScreen, k)) {
                            var newNode = __assign(__assign({}, nodeInScreen[k]), { actived: true });
                            this._updateNode(newNode);
                        }
                    }
                }
            }
        }
        return this;
    };
    // Kích hoạt inactive với các thành phần bị tách ra khỏi DOM khi dùng cơ chế cache
    ManagerControl.prototype.unmoutedScreen = function (displayScreen) {
        var _a, _b;
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _args[_i - 1] = arguments[_i];
        }
        for (var key in this.screenNodes) {
            if (Object.prototype.hasOwnProperty.call(this.screenNodes, key)) {
                if (key === displayScreen) {
                    var nodeInScreen = this.screenNodes[key];
                    for (var k in nodeInScreen) {
                        if (Object.prototype.hasOwnProperty.call(nodeInScreen, k)) {
                            var newNode = __assign(__assign({}, nodeInScreen[k]), { actived: false });
                            if (newNode.focused) {
                                newNode.focused = false;
                                (_b = (_a = DOMUtil.documentCache
                                    .getElementById(newNode.id)) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove(this.classnameActiveFocus);
                            }
                            this._updateNode(newNode);
                        }
                    }
                }
            }
        }
        return this;
    };
    // Lấy trạng thái của 1 node theo id của nó
    ManagerControl.prototype.getNode = function (nodeId, isActived) {
        if (!nodeId || !this.nodes) {
            return undefined;
        }
        if (isActived && this.nodes[nodeId] && !this.nodes[nodeId].actived) {
            return undefined;
        }
        return this.nodes[nodeId];
    };
    // Lấy danh sách nodes của màn hình hiện tại
    ManagerControl.prototype.getNodesCurrentScreent = function () {
        if (!this.currentScreen || !this.screenNodes)
            return {};
        return this.screenNodes[this.currentScreen];
    };
    // Lấy danh sách nodes của màn hình hiện tại
    ManagerControl.prototype.getNodesHighestLayoutIndex = function () {
        var maxLayout = this._getMaxLayoutIndex();
        if (maxLayout === 1) {
            return this.getNodesCurrentScreent();
        }
        return this.treeNodes[this._getMaxLayoutIndex()];
    };
    // Lấy ra vị trí layout cao nhất
    ManagerControl.prototype._getMaxLayoutIndex = function () {
        var layoutIndex = 1;
        for (var key in this.treeNodes) {
            if (Object.prototype.hasOwnProperty.call(this.treeNodes, key)) {
                var numKey = parseInt(key, 10);
                var element = this.treeNodes[key];
                if (Object.keys(element).length > 0)
                    layoutIndex = Math.max(numKey, layoutIndex);
            }
        }
        return layoutIndex;
    };
    ManagerControl.prototype.init = function (config) {
        var _a, _b;
        index_es.exports.configure({
            enableHardSequences: true,
            simulateMissingKeyPressEvents: false,
            allowCombinationSubmatches: true,
            ignoreRepeatedEventsWhenKeyHeldDown: config === null || config === void 0 ? void 0 : config.ignoreRepeatedEventsWhenKeyHeldDown,
            stopEventPropagationAfterIgnoring: true,
            customKeyCodes: customKeyCodes,
        });
        (_a = this._emitter_) === null || _a === void 0 ? void 0 : _a.on(EVENT_EMITTER.focus, this.focusedElementEmitter);
        (_b = this._emitter_) === null || _b === void 0 ? void 0 : _b.on(EVENT_EMITTER.unfocus, this.unfocusedElementEmitter);
        window.addEventListener("keydown", this.onKeydown);
    };
    ManagerControl.prototype.focusNodeById = function (nodeId, click) {
        var _this = this;
        if (this.timer) {
            clearRequestTimeout(this.timer);
            this.timer = null;
        }
        var callback = function () {
            var _a;
            if (nodeId) {
                var node_2 = _this.getNode(nodeId, true);
                if (!node_2 || !node_2.id)
                    return;
                if (node_2.displayScreen && node_2.displayScreen !== _this.currentScreen) {
                    return;
                }
                if (((_a = DOMUtil.documentCache.activeElement) === null || _a === void 0 ? void 0 : _a.id) === node_2.id && !click)
                    return;
                logger.log("FocusNodeById: ".concat(nodeId, " - LockCheckFocus: ").concat(_this.lockCheckFocus));
                _this.trigger(EVENT_EMITTER.unfocus, nodeId);
                var cb = function () {
                    var _a;
                    if (_this.lockCheckFocus) {
                        return;
                    }
                    (_a = DOMUtil.documentCache.getElementById(node_2.id)) === null || _a === void 0 ? void 0 : _a.focus();
                };
                smoothFunction(cb)();
                _this.currentNode = node_2.id;
                _this.trigger(EVENT_EMITTER.focus, nodeId);
            }
        };
        this.timer = setRequestTimeout(callback);
    };
    ManagerControl.prototype.focusLastNodeIdScreen = function (node) {
        if (!this.currentScreen)
            return;
        var currNode = this.getNode(this.lastNodeIdScreen[this.currentScreen]);
        var nodes = this.screenNodes[this.currentScreen];
        if (!currNode) {
            node && this.focusDefaultNodeIdScreen(node.id);
            return;
        }
        this._focusExeptDefault(currNode, nodes);
    };
    ManagerControl.prototype.focusDefaultNodeIdScreen = function (nodeId) {
        if (!this.currentScreen)
            return;
        var currNode = this.getNode(nodeId, true);
        if (!currNode)
            return;
        if (currNode.layoutIndex === this._getMaxLayoutIndex()) {
            var nodes = this.screenNodes[this.currentScreen];
            this._focusExeptDefault(currNode, nodes);
        }
    };
    ManagerControl.prototype.checkNodeInHighestLayout = function (nodeId) {
        var highestNodes = this.getNodesHighestLayoutIndex();
        if (nodeId && highestNodes) {
            return !!highestNodes[nodeId];
        }
        return false;
    };
    ManagerControl.prototype.focusNodeInHighestLayout = function () {
        this.onKeydown();
    };
    return ManagerControl;
}());

var Context = React__default["default"].createContext({});
var ControlProvider = /** @class */ (function (_super) {
    __extends(ControlProvider, _super);
    function ControlProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.displayName = "ControlProvider";
        return _this;
    }
    ControlProvider.prototype.getChildContext = function () {
        return {
            managerControl: ManagerControl.getInstance(),
            layoutIndex: this.props.layoutIndex,
        };
    };
    ControlProvider.prototype.renderContent = function () {
        var value = {
            managerControl: ManagerControl.getInstance(),
        };
        ManagerControl.getInstance().setRootId(this.props.rootId);
        return (React__default["default"].createElement(Context.Provider, { value: value }, React__default["default"].Children.only(this.props.children)));
    };
    return ControlProvider;
}(BaseComponent));
ControlProvider.childContextTypes = {
    managerControl: PropTypes.object,
    layoutIndex: PropTypes.number,
};
ControlProvider.defaultProps = {
    layoutIndex: 1,
};
Context.Consumer;

var reactIs = reactIs$1.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function withHandleControlHOC(WrappedComponent) {
    var Navigable = /** @class */ (function (_super) {
        __extends(Navigable, _super);
        function Navigable(props) {
            var _this = _super.call(this, props) || this;
            _this.funcKeydown = function (_a) {
                var type = _a.type, e = _a.e, idElement = _a.idElement, displayScreen = _a.displayScreen, refCustom = _a.refCustom, args = __rest(_a, ["type", "e", "idElement", "displayScreen", "refCustom"]);
                if (!_this.context.managerControl.checkNodeInHighestLayout(idElement)) {
                    _this.context.managerControl.focusNodeInHighestLayout();
                    return;
                }
                var _b = _this.props, onKeydown = _b.onKeydown, leftNodeId = _b.leftNodeId, rightNodeId = _b.rightNodeId, upNodeId = _b.upNodeId, downNodeId = _b.downNodeId, onEnter = _b.onEnter, onBack = _b.onBack;
                switch (type) {
                    case TYPE_KEYDOWN.UP:
                        _this.focusId(upNodeId);
                        break;
                    case TYPE_KEYDOWN.DOWN:
                        _this.focusId(downNodeId);
                        break;
                    case TYPE_KEYDOWN.LEFT:
                        _this.focusId(leftNodeId);
                        break;
                    case TYPE_KEYDOWN.RIGHT:
                        _this.focusId(rightNodeId);
                        break;
                    case TYPE_KEYDOWN.ENTER:
                        onEnter === null || onEnter === void 0 ? void 0 : onEnter();
                        break;
                    case TYPE_KEYDOWN.BACKSPACE:
                        onBack === null || onBack === void 0 ? void 0 : onBack();
                        break;
                }
                onKeydown === null || onKeydown === void 0 ? void 0 : onKeydown(__assign({ type: type, e: e, idElement: idElement, displayScreen: displayScreen, refCustom: refCustom }, args));
            };
            _this.onClick = function (ev) {
                _this.focusId(_this.getId(), true);
                var callback = function () {
                    var onClick = _this.props.onClick;
                    if (onClick) {
                        onClick(ev);
                        return;
                    }
                    _this.funcKeydown({
                        type: TYPE_KEYDOWN.ENTER,
                        idElement: _this.id,
                        displayScreen: _this.context.displayScreen,
                    });
                };
                if (_this.timer) {
                    clearRequestTimeout(_this.timer);
                    _this.timer = null;
                }
                _this.timer = setRequestTimeout(callback, 10);
            };
            _this.focusId = function (nodeId, click) {
                if (!nodeId)
                    return;
                ManagerControl.getInstance().focusNodeById(nodeId, click);
            };
            _this.onFocus = function () {
                var _a, _b;
                (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a.onFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
            };
            _this.onBlur = function () {
                var _a, _b;
                (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a.onBlur) === null || _b === void 0 ? void 0 : _b.call(_a);
            };
            _this.onFocusNode = function (node) {
                var _a, _b;
                (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a.onFocusNode) === null || _b === void 0 ? void 0 : _b.call(_a, node);
            };
            _this.onBlurNode = function (node) {
                var _a, _b;
                (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a.onBlurNode) === null || _b === void 0 ? void 0 : _b.call(_a, node);
            };
            _this.displayName = "HandlerComponentHOC";
            _this.id = props.id || "";
            // this.onClick = debounce(this.onClick, 500, { leading: true });
            _this.onClick = smoothFunction(_this.onClick);
            _this.funcKeydown = smoothFunction(_this.funcKeydown);
            return _this;
        }
        Navigable.prototype.getChildContext = function () {
            return {
                parent: this.id,
            };
        };
        Navigable.prototype._componentDidMount = function () { };
        Navigable.prototype._componentWillUnmount = function () {
            ManagerControl.getInstance().unregisterNode(this.id);
        };
        Navigable.prototype.getId = function () {
            return this.id;
        };
        Navigable.prototype.renderContent = function () {
            var _a;
            var _this = this;
            var _b = this.props, keyMap = _b.keyMap; _b.onKeydown; var supportNumberKey = _b.supportNumberKey, supportCHKey = _b.supportCHKey, supportMediaKey = _b.supportMediaKey; _b.isDefault; _b.leftNodeId; _b.rightNodeId; _b.upNodeId; _b.downNodeId; _b.onFocusNode; _b.onBlurNode; _b.onEnter; _b.onBack; var remainProps = __rest(_b, ["keyMap", "onKeydown", "supportNumberKey", "supportCHKey", "supportMediaKey", "isDefault", "leftNodeId", "rightNodeId", "upNodeId", "downNodeId", "onFocusNode", "onBlurNode", "onEnter", "onBack"]);
            var handlers = getHandlerKeydown({
                callback: function (options) { return _this.funcKeydown(options); },
                numboard: supportNumberKey,
                ch: supportCHKey,
                media: supportMediaKey,
                id: this.id,
            });
            var keyMapMain = __assign((_a = { up: TYPE_KEYDOWN.UP, down: TYPE_KEYDOWN.DOWN, left: TYPE_KEYDOWN.LEFT, right: TYPE_KEYDOWN.RIGHT, enter: TYPE_KEYDOWN.ENTER, backspace: TYPE_KEYDOWN.BACKSPACE }, _a[TYPE_KEYDOWN.BACK_TIZEN] = TYPE_KEYDOWN.BACK_TIZEN, _a[TYPE_KEYDOWN.BACK_TV] = TYPE_KEYDOWN.BACK_TV, _a), keyMap);
            ManagerControl.getInstance().registerNode(this.id, {
                handlers: handlers,
                displayScreen: this.context.displayScreen,
                layoutIndex: this.context.layoutIndex,
                isDefault: this.props.isDefault,
                onFocusNode: this.onFocusNode,
                onBlurNode: this.onBlurNode,
            });
            return (React__default["default"].createElement(index_es.exports.HotKeys, { handlers: handlers, keyMap: keyMapMain, component: "span" },
                React__default["default"].createElement(WrappedComponent, __assign({}, remainProps, { id: this.id, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, tabIndex: -1 }))));
        };
        return Navigable;
    }(BaseComponent));
    Navigable.defaultProps = {
        isDefault: false,
    };
    Navigable.childContextTypes = {
        parent: PropTypes.string,
        displayScreen: PropTypes.string,
    };
    Navigable.contextTypes = {
        parent: PropTypes.string,
        managerControl: PropTypes.object,
        displayScreen: PropTypes.string,
        layoutIndex: PropTypes.number,
    };
    hoistNonReactStatics_cjs(Navigable, WrappedComponent);
    return Navigable;
}

exports.BaseComponent = BaseComponent;
exports.ControlProvider = ControlProvider;
exports.CustomEventEmitter = CustomEventEmitter;
exports.GlobalView = index_es.exports.GlobalHotKeys;
exports.KEYCODE_FULL_DEFINE = KEYCODE_FULL_DEFINE;
exports.ManagerControl = ManagerControl;
exports.TYPE_KEYDOWN = TYPE_KEYDOWN;
exports.customKeyCodes = customKeyCodes;
exports.getHandlerKeydown = getHandlerKeydown;
exports.withHandleControlHOC = withHandleControlHOC;
