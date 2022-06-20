var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const p$4 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link2 of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link2);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link2) {
    if (link2.ep)
      return;
    link2.ep = true;
    const fetchOpts = getFetchOpts(link2);
    fetch(link2.href, fetchOpts);
  }
};
p$4();
var reactDom = { exports: {} };
var reactDom_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b2) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps)
    for (d2 in g2 = a.defaultProps, g2)
      c2[d2] === void 0 && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$1(a, b2) {
  return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return typeof a === "object" && a !== null && a.$$typeof === l$2;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b2) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if (k2 === "undefined" || k2 === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c2 = c2(h2), a = d2 === "" ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", a != null && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
      return a2;
    })) : c2 != null && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I$1(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q$1(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$1(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b2, e2) {
  if (a == null)
    return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$1(a) {
  if (a._status === -1) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a._status === 0 || a._status === -1)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (a._status === 0 || a._status === -1)
        a._status = 2, a._result = b3;
    });
    a._status === -1 && (a._status = 0, a._result = b2);
  }
  if (a._status === 1)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
  S$1(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b2, e2) {
  if (a === null || a === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$1.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b2 = M$1.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x, type: a, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$1.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$1.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U$1.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$1.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$1.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$1.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U$1.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U$1.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.1.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": React
}, [react.exports]);
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (0 < g2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a) {
    return a.length === 0 ? null : a[0];
  }
  function k2(a) {
    if (a.length === 0)
      return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a:
        for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a[d2] = x2, a[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if (typeof d2 === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), h2(r2) === null && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++)
    da.add(b2[a]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function oa(a, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function pa(a, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || oa(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t$1(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new t$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z[b2] = new t$1(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new t$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new t$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new t$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new t$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new t$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new t$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new t$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(qa, ra);
  z[b2] = new t$1(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(qa, ra);
  z[b2] = new t$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(qa, ra);
  z[b2] = new t$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new t$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new t$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new t$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function sa(a, b2, c2, d2) {
  var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d2 || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? na(b2) && (c2 === null ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ia && a[Ia] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var A = Object.assign, Ka;
function La(a) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a;
}
var Ma = false;
function Na(a, b2) {
  if (!a || Ma)
    return "";
  Ma = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && typeof l2.stack === "string") {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? La(a) : "";
}
function Oa(a) {
  switch (a.tag) {
    case 5:
      return La(a.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Na(a.type, false), a;
    case 11:
      return a = Na(a.type.render, false), a;
    case 1:
      return a = Na(a.type, true), a;
    default:
      return "";
  }
}
function Pa(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case Ba:
        return (a.displayName || "Context") + ".Consumer";
      case Aa:
        return (a._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Fa:
        return b2 = a.displayName || null, b2 !== null ? b2 : Pa(a.type) || "Memo";
      case Ga:
        b2 = a._payload;
        a = a._init;
        try {
          return Pa(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Qa(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Sa(a) {
  var b2 = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a) {
  var b2 = Sa(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Ua(a) {
  a._valueTracker || (a._valueTracker = Ta(a));
}
function Va(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Sa(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Wa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Xa(a, b2) {
  var c2 = b2.checked;
  return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a._wrapperState.initialChecked });
}
function Ya(a, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Ra(b2.value != null ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Za(a, b2) {
  b2 = b2.checked;
  b2 != null && sa(a, "checked", b2, false);
}
function $a(a, b2) {
  Za(a, b2);
  var c2 = Ra(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a.value === "" || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a.defaultChecked = !!b2.defaultChecked);
}
function cb(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  c2 !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c2 !== "" && (a.name = c2);
}
function bb(a, b2, c2) {
  if (b2 !== "number" || Wa(a.ownerDocument) !== a)
    c2 == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var db = Array.isArray;
function eb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Ra(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a[e2].disabled || (b2 = a[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$2(91));
  return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function gb(a, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$2(92));
      if (db(c2)) {
        if (1 < c2.length)
          throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Ra(c2) };
}
function hb(a, b2) {
  var c2 = Ra(b2.value), d2 = Ra(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a.value && (a.value = c2), b2.defaultValue == null && a.defaultValue !== c2 && (a.defaultValue = c2));
  d2 != null && (a.defaultValue = "" + d2);
}
function ib(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && b2 !== "" && b2 !== null && (a.value = b2);
}
function jb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a, b2) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? jb(b2) : a === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var lb, mb = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function nb(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a) {
  pb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    ob[b2] = ob[a];
  });
});
function qb(a, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a) && ob[a] ? ("" + b2).trim() : b2 + "px";
}
function rb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = qb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var sb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a, b2) {
  if (b2) {
    if (sb[a] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$2(137, a));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$2(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$2(62));
  }
}
function ub(a, b2) {
  if (a.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var xb = null, yb = null, zb = null;
function Ab(a) {
  if (a = Bb(a)) {
    if (typeof xb !== "function")
      throw Error(p$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Cb(b2), xb(a.stateNode, a.type, b2));
  }
}
function Db(a) {
  yb ? zb ? zb.push(a) : zb = [a] : yb = a;
}
function Eb() {
  if (yb) {
    var a = yb, b2 = zb;
    zb = yb = null;
    Ab(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Ab(b2[a]);
  }
}
function Fb(a, b2) {
  return a(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a, b2, c2) {
  if (Hb)
    return a(b2, c2);
  Hb = true;
  try {
    return Fb(a, b2, c2);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a, b2) {
  var c2 = a.stateNode;
  if (c2 === null)
    return null;
  var d2 = Cb(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a) {
    Kb = false;
  }
function Mb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a) {
  Nb = true;
  Ob = a;
} };
function Sb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l2 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p$2(198));
    Pb || (Pb = true, Qb = l2);
  }
}
function Ub(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, (b2.flags & 4098) !== 0 && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return b2.tag === 3 ? c2 : null;
}
function Vb(a) {
  if (a.tag === 13) {
    var b2 = a.memoizedState;
    b2 === null && (a = a.alternate, a !== null && (b2 = a.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a) {
  if (Ub(a) !== a)
    throw Error(p$2(188));
}
function Xb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Ub(a);
    if (b2 === null)
      throw Error(p$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Wb(e2), a;
        if (f2 === d2)
          return Wb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$2(190));
  }
  if (c2.tag !== 3)
    throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Yb(a) {
  a = Xb(a);
  return a !== null ? Zb(a) : null;
}
function Zb(a) {
  if (a.tag === 5 || a.tag === 6)
    return a;
  for (a = a.child; a !== null; ) {
    var b2 = Zb(a);
    if (b2 !== null)
      return b2;
    a = a.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a, void 0, (a.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a) {
  a >>>= 0;
  return a === 0 ? 32 : 31 - (oc(a) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function tc(a, b2) {
  var c2 = a.pendingLanes;
  if (c2 === 0)
    return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e2;
    h2 !== 0 ? d2 = sc(h2) : (f2 &= g2, f2 !== 0 && (d2 = sc(f2)));
  } else
    g2 = c2 & ~e2, g2 !== 0 ? d2 = sc(g2) : f2 !== 0 && (d2 = sc(f2));
  if (d2 === 0)
    return 0;
  if (b2 !== 0 && b2 !== d2 && (b2 & e2) === 0 && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d2 & 4) !== 0 && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (b2 !== 0)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - nc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function uc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - nc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d2) !== 0)
        e2[g2] = uc(h2, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a;
}
function yc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function zc(a, b2, c2) {
  a.pendingLanes |= b2;
  b2 !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - nc(b2);
  a[b2] = c2;
}
function Ac(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - nc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Bc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - nc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Cc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a, b2, c2, d2, e2, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a;
}
function Tc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Lc = Sc(Lc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Mc = Sc(Mc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Uc(a) {
  var b2 = Vc(a.target);
  if (b2 !== null) {
    var c2 = Ub(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Vb(c2), b2 !== null) {
          a.blockedOn = b2;
          Hc(a.priority, function() {
            Fc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Wc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Xc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (c2 === null) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      vb = d2;
      c2.target.dispatchEvent(d2);
      vb = null;
    } else
      return b2 = Bb(c2), b2 !== null && Ec(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Yc(a, b2, c2) {
  Wc(a) && c2.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a) {
  function b2(b3) {
    return $c(b3, a);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a);
    for (var c2 = 1; c2 < Jc.length; c2++) {
      var d2 = Jc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a);
  Lc !== null && $c(Lc, a);
  Mc !== null && $c(Mc, a);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c2 = 0; c2 < Pc.length; c2++)
    d2 = Pc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Pc.length && (c2 = Pc[0], c2.blockedOn === null); )
    Uc(c2), c2.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 1, ed(a, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 4, ed(a, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function ed(a, b2, c2, d2) {
  if (cd) {
    var e2 = Xc(a, b2, c2, d2);
    if (e2 === null)
      gd(a, b2, d2, hd, c2), Rc(a, d2);
    else if (Tc(e2, a, b2, c2, d2))
      d2.stopPropagation();
    else if (Rc(a, d2), b2 & 4 && -1 < Qc.indexOf(a)) {
      for (; e2 !== null; ) {
        var f2 = Bb(e2);
        f2 !== null && Dc(f2);
        f2 = Xc(a, b2, c2, d2);
        f2 === null && gd(a, b2, d2, hd, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      e2 !== null && d2.stopPropagation();
    } else
      gd(a, b2, d2, null, c2);
  }
}
var hd = null;
function Xc(a, b2, c2, d2) {
  hd = null;
  a = wb(d2);
  a = Vc(a);
  if (a !== null)
    if (b2 = Ub(a), b2 === null)
      a = null;
    else if (c2 = b2.tag, c2 === 13) {
      a = Vb(b2);
      if (a !== null)
        return a;
      a = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  hd = a;
  return null;
}
function id(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a, b2 = kd, c2 = b2.length, d2, e2 = "value" in jd ? jd.value : jd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return ld = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function nd(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b2 === 13 && (a = 13)) : a = b2;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b2;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== xd && (xd && a.type === "mousemove" ? (vd = a.screenX - xd.screenX, wd = a.screenY - xd.screenY) : wd = vd = 0, xd = a);
  return vd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : wd;
} }), Ad = qd(zd), Bd = A({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A({}, rd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Nd[a]) ? !!b2[a] : false;
}
function yd() {
  return Od;
}
var Pd = A({}, td, { key: function(a) {
  if (a.key) {
    var b2 = Ld[a.key] || a.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a.type === "keypress" ? (a = nd(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Md[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a) {
  return a.type === "keypress" ? nd(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? nd(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Qd = qd(Pd), Rd = A({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A({}, zd, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae = null;
ia && "documentMode" in document && (ae = document.documentMode);
var be = ia && "TextEvent" in window && !ae, ce = ia && (!$d || ae && 8 < ae && 11 >= ae), de = String.fromCharCode(32), ee = false;
function fe(a, b2) {
  switch (a) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var he = false;
function ie(a, b2) {
  switch (a) {
    case "compositionend":
      return ge(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee = true;
      return de;
    case "textInput":
      return a = b2.data, a === de && ee ? null : a;
    default:
      return null;
  }
}
function je(a, b2) {
  if (he)
    return a === "compositionend" || !$d && fe(a, b2) ? (a = md(), ld = kd = jd = null, he = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 === "input" ? !!ke[a.type] : b2 === "textarea" ? true : false;
}
function me(a, b2, c2, d2) {
  Db(d2);
  b2 = ne(b2, "onChange");
  0 < b2.length && (c2 = new sd("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var oe = null, pe = null;
function qe(a) {
  re(a, 0);
}
function se(a) {
  var b2 = te(a);
  if (Va(b2))
    return a;
}
function ue(a, b2) {
  if (a === "change")
    return b2;
}
var ve = false;
if (ia) {
  var we;
  if (ia) {
    var xe = "oninput" in document;
    if (!xe) {
      var ye = document.createElement("div");
      ye.setAttribute("oninput", "return;");
      xe = typeof ye.oninput === "function";
    }
    we = xe;
  } else
    we = false;
  ve = we && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
}
function Ae(a) {
  if (a.propertyName === "value" && se(pe)) {
    var b2 = [];
    me(b2, pe, a, wb(a));
    Ib(qe, b2);
  }
}
function Be(a, b2, c2) {
  a === "focusin" ? (ze(), oe = b2, pe = c2, oe.attachEvent("onpropertychange", Ae)) : a === "focusout" && ze();
}
function Ce(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return se(pe);
}
function De(a, b2) {
  if (a === "click")
    return se(b2);
}
function Ee(a, b2) {
  if (a === "input" || a === "change")
    return se(b2);
}
function Fe(a, b2) {
  return a === b2 && (a !== 0 || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var Ge = typeof Object.is === "function" ? Object.is : Fe;
function He(a, b2) {
  if (Ge(a, b2))
    return true;
  if (typeof a !== "object" || a === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !Ge(a[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ie(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Je(a, b2) {
  var c2 = Ie(a);
  a = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ie(c2);
  }
}
function Ke(a, b2) {
  return a && b2 ? a === b2 ? true : a && a.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Le() {
  for (var a = window, b2 = Wa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Wa(a.document);
  }
  return b2;
}
function Me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b2 === "textarea" || a.contentEditable === "true");
}
function Ne(a) {
  var b2 = Le(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ke(c2.ownerDocument.documentElement, c2)) {
    if (d2 !== null && Me(c2)) {
      if (b2 = d2.start, a = d2.end, a === void 0 && (a = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = d2.end === void 0 ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Je(c2, f2);
        var g2 = Je(c2, d2);
        e2 && g2 && (a.rangeCount !== 1 || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; )
      a.nodeType === 1 && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Oe = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re = null, Se = false;
function Te(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Se || Pe == null || Pe !== Wa(d2) || (d2 = Pe, "selectionStart" in d2 && Me(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Re && He(Re, d2) || (Re = d2, d2 = ne(Qe, "onSelect"), 0 < d2.length && (b2 = new sd("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Pe)));
}
function Ue(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a) {
  if (We[a])
    return We[a];
  if (!Ve[a])
    return a;
  var b2 = Ve[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Xe)
      return We[a] = b2[c2];
  return a;
}
var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a, b2) {
  cf.set(a, b2);
  fa(b2, [a]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Tb(d2, b2, void 0, a);
  a.currentTarget = null;
}
function re(a, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a = Qb, Pb = false, Qb = null, a;
}
function D(a, b2) {
  var c2 = b2[nf];
  c2 === void 0 && (c2 = b2[nf] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (of(b2, a, 2, false), c2.add(d2));
}
function pf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  of(c2, a, d2, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a) {
  if (!a[qf]) {
    a[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a), pf(b3, true, a));
    });
    var b2 = a.nodeType === 9 ? a : a.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a, b2, c2, d2) {
  switch (id(b2)) {
    case 1:
      var e2 = dd;
      break;
    case 4:
      e2 = fd;
      break;
    default:
      e2 = ed;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : e2 !== void 0 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function gd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Vc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Ib(function() {
    var d3 = f2, e3 = wb(c2), g3 = [];
    a: {
      var h3 = cf.get(a);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a;
        switch (a) {
          case "keypress":
            if (nd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w2 = (b2 & 4) !== 0, J2 = !w2 && a === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var x2 = d3, r2; x2 !== null; ) {
          r2 = x2;
          var F2 = r2.stateNode;
          r2.tag === 5 && F2 !== null && (r2 = F2, v2 !== null && (F2 = Jb(x2, v2), F2 != null && w2.push(sf(x2, F2, r2))));
          if (J2)
            break;
          x2 = x2.return;
        }
        0 < w2.length && (h3 = new k3(h3, m2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k3 = a === "mouseout" || a === "pointerout";
        if (h3 && c2 !== vb && (m2 = c2.relatedTarget || c2.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c2.relatedTarget || c2.toElement, k3 = d3, m2 = m2 ? Vc(m2) : null, m2 !== null && (J2 = Ub(m2), m2 !== J2 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d3;
          if (k3 !== m2) {
            w2 = Ad;
            F2 = "onMouseLeave";
            v2 = "onMouseEnter";
            x2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
            J2 = k3 == null ? h3 : te(k3);
            r2 = m2 == null ? h3 : te(m2);
            h3 = new w2(F2, x2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = r2;
            F2 = null;
            Vc(e3) === d3 && (w2 = new w2(v2, x2 + "enter", m2, c2, e3), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
            J2 = F2;
            if (k3 && m2)
              b: {
                w2 = k3;
                v2 = m2;
                x2 = 0;
                for (r2 = w2; r2; r2 = uf(r2))
                  x2++;
                r2 = 0;
                for (F2 = v2; F2; F2 = uf(F2))
                  r2++;
                for (; 0 < x2 - r2; )
                  w2 = uf(w2), x2--;
                for (; 0 < r2 - x2; )
                  v2 = uf(v2), r2--;
                for (; x2--; ) {
                  if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                    break b;
                  w2 = uf(w2);
                  v2 = uf(v2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && vf(g3, h3, k3, w2, false);
            m2 !== null && J2 !== null && vf(g3, J2, m2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? te(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z = ue;
        else if (le(h3))
          if (ve)
            Z = Ee;
          else {
            Z = Ce;
            var ya = Be;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z = De);
        if (Z && (Z = Z(a, d3))) {
          me(g3, Z, c2, e3);
          break a;
        }
        ya && ya(a, h3, d3);
        a === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d3 ? te(d3) : window;
      switch (a) {
        case "focusin":
          if (le(ya) || ya.contentEditable === "true")
            Pe = ya, Qe = d3, Re = null;
          break;
        case "focusout":
          Re = Qe = Pe = null;
          break;
        case "mousedown":
          Se = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se = false;
          Te(g3, c2, e3);
          break;
        case "selectionchange":
          if (Oe)
            break;
        case "keydown":
        case "keyup":
          Te(g3, c2, e3);
      }
      var ab;
      if ($d)
        b: {
          switch (a) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he ? fe(a, c2) && (ca = "onCompositionEnd") : a === "keydown" && c2.keyCode === 229 && (ca = "onCompositionStart");
      ca && (ce && c2.locale !== "ko" && (he || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he && (ab = md()) : (jd = e3, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d3, ca), 0 < ya.length && (ca = new Kd(ca, a, null, c2, e3), g3.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge(c2), ab !== null && (ca.data = ab))));
      if (ab = be ? ie(a, c2) : je(a, c2))
        d3 = ne(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Kd("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = ab);
    }
    re(g3, b2);
  });
}
function sf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function ne(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a !== null; ) {
    var e2 = a, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Jb(a, c2), f2 != null && d2.unshift(sf(a, f2, e2)), f2 = Jb(a, b2), f2 != null && d2.push(sf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function uf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function vf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Jb(c2, f2), k2 != null && g2.unshift(sf(c2, k2, h2))) : e2 || (k2 = Jb(c2, f2), k2 != null && g2.push(sf(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a.push({ event: b2, listeners: g2 });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a) {
  return (typeof a === "string" ? a : "" + a).replace(wf, "\n").replace(xf, "");
}
function zf(a, b2, c2) {
  b2 = yf(b2);
  if (yf(a) !== b2 && c2)
    throw Error(p$2(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a, b2) {
  return a === "textarea" || a === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0, Ff = typeof clearTimeout === "function" ? clearTimeout : void 0, Gf = typeof Promise === "function" ? Promise : void 0, If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a) {
  return Gf.resolve(null).then(a).catch(Hf);
} : Ef;
function Hf(a) {
  setTimeout(function() {
    throw a;
  });
}
function Jf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && e2.nodeType === 8)
      if (c2 = e2.data, c2 === "/$") {
        if (d2 === 0) {
          a.removeChild(e2);
          ad(b2);
          return;
        }
        d2--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d2++;
    c2 = e2;
  } while (c2);
  ad(b2);
}
function Kf(a) {
  for (; a != null; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a;
}
function Lf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (a.nodeType === 8) {
      var c2 = a.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a) {
  var b2 = a[Nf];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[tf] || c2[Nf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a = Lf(a); a !== null; ) {
          if (c2 = a[Nf])
            return c2;
          a = Lf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Bb(a) {
  a = a[Nf] || a[tf];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function te(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(p$2(33));
}
function Cb(a) {
  return a[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a) {
  return { current: a };
}
function E(a) {
  0 > Sf || (a.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G(a, b2) {
  Sf++;
  Rf[Sf] = a.current;
  a.current = b2;
}
var Uf = {}, H = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Uf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Yf(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Zf() {
  E(Vf);
  E(H);
}
function $f(a, b2, c2) {
  if (H.current !== Uf)
    throw Error(p$2(168));
  G(H, b2);
  G(Vf, c2);
}
function ag(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$2(108, Qa(a) || "Unknown", e2));
  return A({}, c2, d2);
}
function bg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H.current;
  G(H, a);
  G(Vf, Vf.current);
  return true;
}
function cg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(p$2(169));
  c2 ? (a = ag(a, b2, Wf), d2.__reactInternalMemoizedMergedChildContext = a, E(Vf), E(H), G(H, a)) : E(Vf);
  G(Vf, c2);
}
var dg = null, eg = false, fg = false;
function gg(a) {
  dg === null ? dg = [a] : dg.push(a);
}
function hg(a) {
  eg = true;
  gg(a);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a = 0, b2 = C;
    try {
      var c2 = dg;
      for (C = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (d2 !== null);
      }
      dg = null;
      eg = false;
    } catch (e2) {
      throw dg !== null && (dg = dg.slice(a + 1)), $b(ec, ig), e2;
    } finally {
      C = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      b2[c2] === void 0 && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a) {
  var b2 = lg.current;
  E(lg);
  a._currentValue = b2;
}
function rg(a, b2, c2) {
  for (; a !== null; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, d2 !== null && (d2.childLanes |= b2)) : d2 !== null && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2)
      break;
    a = a.return;
  }
}
function sg(a, b2) {
  mg = a;
  og = ng = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b2) !== 0 && (tg = true), a.firstContext = null);
}
function ug(a) {
  var b2 = a._currentValue;
  if (og !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, ng === null) {
      if (mg === null)
        throw Error(p$2(308));
      ng = a;
      mg.dependencies = { lanes: 0, firstContext: a };
    } else
      ng = ng.next = a;
  return b2;
}
var vg = null, wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b2) {
  var c2 = a.updateQueue;
  c2 !== null && (c2 = c2.shared, Bg(a) ? (a = c2.interleaved, a === null ? (b2.next = b2, vg === null ? vg = [c2] : vg.push(c2)) : (b2.next = a.next, a.next = b2), c2.interleaved = b2) : (a = c2.pending, a === null ? b2.next = b2 : (b2.next = a.next, a.next = b2), c2.pending = b2));
}
function Cg(a, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a, c2);
  }
}
function Dg(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  a === null ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function Eg(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a.alternate;
    n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g2 && (h2 === null ? n2.firstBaseUpdate = l2 : h2.next = l2, n2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & q2) === q2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a, w2 = h2;
          q2 = b2;
          y2 = c2;
          switch (w2.tag) {
            case 1:
              m2 = w2.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y2, u2, q2);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w2.payload;
              q2 = typeof m2 === "function" ? m2.call(y2, u2, q2) : m2;
              if (q2 === null || q2 === void 0)
                break a;
              u2 = A({}, u2, q2);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a.flags |= 64, q2 = e2.effects, q2 === null ? e2.effects = [h2] : q2.push(h2));
      } else
        y2 = { eventTime: y2, lane: q2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g2 |= q2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          q2 = h2, h2 = q2.next, q2.next = null, e2.lastBaseUpdate = q2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = u2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    Fg |= g2;
    a.lanes = g2;
    a.memoizedState = u2;
  }
}
function Gg(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (a !== null)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(p$2(191, e2));
        e2.call(d2);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A({}, b2, c2);
  a.memoizedState = c2;
  a.lanes === 0 && (a.updateQueue.baseState = c2);
}
var Mg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Ub(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Jg(), e2 = Kg(a), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  b2 = Lg(a, e2, d2);
  b2 !== null && Cg(b2, a, e2);
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Jg(), e2 = Kg(a), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  b2 = Lg(a, e2, d2);
  b2 !== null && Cg(b2, a, e2);
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = Jg(), d2 = Kg(a), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a, e2);
  b2 = Lg(a, d2, c2);
  b2 !== null && Cg(b2, a, d2);
} };
function Ng(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !He(c2, d2) || !He(e2, f2) : true;
}
function Og(a, b2, c2) {
  var d2 = false, e2 = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e2 = Yf(b2) ? Wf : H.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Xf(a, e2) : Uf);
  b2 = new b2(c2, f2);
  a.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a, b2, c2, d2) {
  a = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = Hg;
  xg(a);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = ug(f2) : (f2 = Yf(b2) ? Wf : H.current, e2.context = Xf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a, b2, f2, c2), e2.state = a.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Mg.enqueueReplaceState(e2, e2.state, null), Eg(a, c2, e2, d2), e2.state = a.memoizedState);
  typeof e2.componentDidMount === "function" && (a.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a;
  Ug = b2;
}
function ah(a, b2, c2) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a;
  var d2 = Yg;
  a = Zg;
  var e2 = 32 - nc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - nc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    Yg = 1 << 32 - nc(b2) + e2 | c2 << e2 | d2;
    Zg = f2 + a;
  } else
    Yg = 1 << f2 | c2 << e2 | d2, Zg = a;
}
function bh(a) {
  a.return !== null && ($g(a, 1), ah(a, 1, 0));
}
function ch(a) {
  for (; a === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I = false, fh = null;
function gh(a, b2) {
  var c2 = hh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  b2 === null ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function ih(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a.stateNode = b2, dh = a, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a.stateNode = b2, dh = a, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Xg !== null ? { id: Yg, overflow: Zg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = hh(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, dh = a, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a) {
  return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
}
function kh(a) {
  if (I) {
    var b2 = eh;
    if (b2) {
      var c2 = b2;
      if (!ih(a, b2)) {
        if (jh(a))
          throw Error(p$2(418));
        b2 = Kf(c2.nextSibling);
        var d2 = dh;
        b2 && ih(a, b2) ? gh(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, dh = a);
      }
    } else {
      if (jh(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      dh = a;
    }
  }
}
function lh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  dh = a;
}
function mh(a) {
  if (a !== dh)
    return false;
  if (!I)
    return lh(a), I = true, false;
  var b2;
  (b2 = a.tag !== 3) && !(b2 = a.tag !== 5) && (b2 = a.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a.type, a.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a)) {
      for (a = eh; a; )
        a = Kf(a.nextSibling);
      throw Error(p$2(418));
    }
    for (; b2; )
      gh(a, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (a.nodeType === 8) {
          var c2 = a.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              eh = Kf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a = a.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I = false;
}
function oh(a) {
  fh === null ? fh = [a] : fh.push(a);
}
function ph(a, b2, c2) {
  a = c2.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$2(147, a));
      var e2 = d2, f2 = "" + a;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        b3 === Hg && (b3 = e2.refs = {});
        a2 === null ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a !== "string")
      throw Error(p$2(284));
    if (!c2._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function qh(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function rh(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function sh(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      d3 === null ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = th(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === wa)
      return n2(a2, b3, c3.props.children, d3, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = ph(a2, b3, c3), d3.return = a2, d3;
    d3 = vh(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = ph(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = wh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function n2(a2, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function u2(a2, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a2.mode, c3), b3.return = a2, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c3 = vh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = ph(a2, null, b3), c3.return = a2, c3;
        case va:
          return b3 = wh(b3, a2.mode, c3), b3.return = a2, b3;
        case Ga:
          var d3 = b3._init;
          return u2(a2, d3(b3._payload), c3);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a2.mode, c3, null), b3.return = a2, b3;
      qh(a2, b3);
    }
    return null;
  }
  function q2(a2, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e3 !== null ? null : h2(a2, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ua:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case va:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ga:
          return e3 = c3._init, q2(a2, b3, e3(c3._payload), d3);
      }
      if (db(c3) || Ja(c3))
        return e3 !== null ? null : n2(a2, b3, c3, d3, null);
      qh(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e3) {
    if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case ua:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case va:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ga:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e3);
      }
      if (db(d3) || Ja(d3))
        return a2 = a2.get(c3) || null, n2(b3, a2, d3, e3, null);
      qh(b3, d3);
    }
    return null;
  }
  function m2(e3, g3, h3, k3) {
    for (var l3 = null, n3 = null, r2 = g3, m3 = g3 = 0, x2 = null; r2 !== null && m3 < h3.length; m3++) {
      r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
      var v2 = q2(e3, r2, h3[m3], k3);
      if (v2 === null) {
        r2 === null && (r2 = x2);
        break;
      }
      a && r2 && v2.alternate === null && b2(e3, r2);
      g3 = f2(v2, g3, m3);
      n3 === null ? l3 = v2 : n3.sibling = v2;
      n3 = v2;
      r2 = x2;
    }
    if (m3 === h3.length)
      return c2(e3, r2), I && $g(e3, m3), l3;
    if (r2 === null) {
      for (; m3 < h3.length; m3++)
        r2 = u2(e3, h3[m3], k3), r2 !== null && (g3 = f2(r2, g3, m3), n3 === null ? l3 = r2 : n3.sibling = r2, n3 = r2);
      I && $g(e3, m3);
      return l3;
    }
    for (r2 = d2(e3, r2); m3 < h3.length; m3++)
      x2 = y2(r2, e3, m3, h3[m3], k3), x2 !== null && (a && x2.alternate !== null && r2.delete(x2.key === null ? m3 : x2.key), g3 = f2(x2, g3, m3), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a && r2.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && $g(e3, m3);
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = Ja(h3);
    if (typeof l3 !== "function")
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$2(151));
    for (var n3 = l3 = null, m3 = g3, r2 = g3 = 0, x2 = null, v2 = h3.next(); m3 !== null && !v2.done; r2++, v2 = h3.next()) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var w3 = q2(e3, m3, v2.value, k3);
      if (w3 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a && m3 && w3.alternate === null && b2(e3, m3);
      g3 = f2(w3, g3, r2);
      n3 === null ? l3 = w3 : n3.sibling = w3;
      n3 = w3;
      m3 = x2;
    }
    if (v2.done)
      return c2(e3, m3), I && $g(e3, r2), l3;
    if (m3 === null) {
      for (; !v2.done; r2++, v2 = h3.next())
        v2 = u2(e3, v2.value, k3), v2 !== null && (g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
      I && $g(e3, r2);
      return l3;
    }
    for (m3 = d2(e3, m3); !v2.done; r2++, v2 = h3.next())
      v2 = y2(m3, e3, r2, v2.value, k3), v2 !== null && (a && v2.alternate !== null && m3.delete(v2.key === null ? r2 : v2.key), g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && $g(e3, r2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l3 = d3; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l3.tag === 7) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = ph(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === wa ? (d3 = xh(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = vh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = ph(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case va:
          a: {
            for (l3 = f3.key; d3 !== null; ) {
              if (d3.key === l3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = wh(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ga:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (db(f3))
        return m2(a2, d3, f3, h3);
      if (Ja(f3))
        return w2(a2, d3, f3, h3);
      qh(a2, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = uh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a) {
  if (a === Ah)
    throw Error(p$2(174));
  return a;
}
function Fh(a, b2) {
  G(Dh, b2);
  G(Ch, a);
  G(Bh, Ah);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a = a === 8 ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = kb(b2, a);
  }
  E(Bh);
  G(Bh, b2);
}
function Gh() {
  E(Bh);
  E(Ch);
  E(Dh);
}
function Hh(a) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c2 = kb(b2, a.type);
  b2 !== c2 && (G(Ch, a), G(Bh, c2));
}
function Ih(a) {
  Ch.current === a && (E(Bh), E(Ch));
}
var K = Tf(0);
function Jh(a) {
  for (var b2 = a; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a = 0; a < Kh.length; a++)
    Kh[a]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L = null, M = null, N = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O() {
  throw Error(p$2(321));
}
function Th(a, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!Ge(a[c2], b2[c2]))
      return false;
  return true;
}
function Uh(a, b2, c2, d2, e2, f2) {
  Oh = f2;
  L = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a === null || a.memoizedState === null ? Vh : Wh;
  a = c2(d2, e2);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      N = M = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a = c2(d2, e2);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M !== null && M.next !== null;
  Oh = 0;
  N = M = L = null;
  Ph = false;
  if (b2)
    throw Error(p$2(300));
  return a;
}
function Zh() {
  var a = Rh !== 0;
  Rh = 0;
  return a;
}
function $h() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  N === null ? L.memoizedState = N = a : N = N.next = a;
  return N;
}
function ai() {
  if (M === null) {
    var a = L.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = M.next;
  var b2 = N === null ? L.memoizedState : N.next;
  if (b2 !== null)
    N = b2, M = a;
  else {
    if (a === null)
      throw Error(p$2(310));
    M = a;
    a = { memoizedState: M.memoizedState, baseState: M.baseState, baseQueue: M.baseQueue, queue: M.queue, next: null };
    N === null ? L.memoizedState = N = a : N = N.next = a;
  }
  return N;
}
function bi(a, b2) {
  return typeof b2 === "function" ? b2(a) : b2;
}
function ci(a) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = M, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var n2 = l2.lane;
      if ((Oh & n2) === n2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var u2 = {
          lane: n2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g2 = d2) : k2 = k2.next = u2;
        L.lanes |= n2;
        Fg |= n2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g2 = d2 : k2.next = h2;
    Ge(d2, b2.memoizedState) || (tg = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (a !== null) {
    e2 = a;
    do
      f2 = e2.lane, L.lanes |= f2, Fg |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    e2 === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function di(a) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    Ge(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function ei() {
}
function fi(a, b2) {
  var c2 = L, d2 = ai(), e2 = b2(), f2 = !Ge(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, tg = true);
  d2 = d2.queue;
  gi(hi.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || N !== null && N.memoizedState.tag & 1) {
    c2.flags |= 2048;
    ii(9, ji.bind(null, c2, d2, e2, b2), void 0, null);
    if (P === null)
      throw Error(p$2(349));
    (Oh & 30) !== 0 || ki(c2, b2, e2);
  }
  return e2;
}
function ki(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = L.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, c2 === null ? b2.stores = [a] : c2.push(a));
}
function ji(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  li(b2) && Lg(a, 1, -1);
}
function hi(a, b2, c2) {
  return c2(function() {
    li(b2) && Lg(a, 1, -1);
  });
}
function li(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !Ge(a, c2);
  } catch (d2) {
    return true;
  }
}
function mi(a) {
  var b2 = $h();
  typeof a === "function" && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ni.bind(null, L, a);
  return [b2.memoizedState, a];
}
function ii(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = L.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function oi() {
  return ai().memoizedState;
}
function pi(a, b2, c2, d2) {
  var e2 = $h();
  L.flags |= a;
  e2.memoizedState = ii(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function qi(a, b2, c2, d2) {
  var e2 = ai();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (M !== null) {
    var g2 = M.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Th(d2, g2.deps)) {
      e2.memoizedState = ii(b2, c2, f2, d2);
      return;
    }
  }
  L.flags |= a;
  e2.memoizedState = ii(1 | b2, c2, f2, d2);
}
function ri(a, b2) {
  return pi(8390656, 8, a, b2);
}
function gi(a, b2) {
  return qi(2048, 8, a, b2);
}
function si(a, b2) {
  return qi(4, 2, a, b2);
}
function ti(a, b2) {
  return qi(4, 4, a, b2);
}
function ui(a, b2) {
  if (typeof b2 === "function")
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function vi(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return qi(4, 4, ui.bind(null, b2, a), c2);
}
function wi() {
}
function xi(a, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function yi(a, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function zi(a, b2, c2) {
  if ((Oh & 21) === 0)
    return a.baseState && (a.baseState = false, tg = true), a.memoizedState = c2;
  Ge(c2, b2) || (c2 = xc(), L.lanes |= c2, Fg |= c2, a.baseState = true);
  return b2;
}
function Ai(a, b2) {
  var c2 = C;
  C = c2 !== 0 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Nh.transition;
  Nh.transition = {};
  try {
    a(false), b2();
  } finally {
    C = c2, Nh.transition = d2;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a, b2, c2) {
  var d2 = Kg(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  Di(a) ? Ei(b2, c2) : (Fi(a, b2, c2), c2 = Jg(), a = Lg(a, d2, c2), a !== null && Gi(a, b2, d2));
}
function ni(a, b2, c2) {
  var d2 = Kg(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Di(a))
    Ei(b2, e2);
  else {
    Fi(a, b2, e2);
    var f2 = a.alternate;
    if (a.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ge(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = Jg();
    a = Lg(a, d2, c2);
    a !== null && Gi(a, b2, d2);
  }
}
function Di(a) {
  var b2 = a.alternate;
  return a === L || b2 !== null && b2 === L;
}
function Ei(a, b2) {
  Qh = Ph = true;
  var c2 = a.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Fi(a, b2, c2) {
  Bg(a) ? (a = b2.interleaved, a === null ? (c2.next = c2, vg === null ? vg = [b2] : vg.push(b2)) : (c2.next = a.next, a.next = c2), b2.interleaved = c2) : (a = b2.pending, a === null ? c2.next = c2 : (c2.next = a.next, a.next = c2), b2.pending = c2);
}
function Gi(a, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a, c2);
  }
}
var Yh = { readContext: ug, useCallback: O, useContext: O, useEffect: O, useImperativeHandle: O, useInsertionEffect: O, useLayoutEffect: O, useMemo: O, useReducer: O, useRef: O, useState: O, useDebugValue: O, useDeferredValue: O, useTransition: O, useMutableSource: O, useSyncExternalStore: O, useId: O, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a, b2) {
  $h().memoizedState = [a, b2 === void 0 ? null : b2];
  return a;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a), c2);
}, useLayoutEffect: function(a, b2) {
  return pi(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return pi(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = $h();
  b2 = b2 === void 0 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = $h();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = Ci.bind(null, L, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = $h();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a) {
  return $h().memoizedState = a;
}, useTransition: function() {
  var a = mi(false), b2 = a[0];
  a = Ai.bind(null, a[1]);
  $h().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = L, e2 = $h();
  if (I) {
    if (c2 === void 0)
      throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (P === null)
      throw Error(p$2(349));
    (Oh & 30) !== 0 || ki(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  ri(hi.bind(null, d2, f2, a), [a]);
  d2.flags |= 2048;
  ii(9, ji.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = $h(), b2 = P.identifierPrefix;
  if (I) {
    var c2 = Zg;
    var d2 = Yg;
    c2 = (d2 & ~(1 << 32 - nc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Rh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Sh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a) {
    var b2 = ai();
    return zi(b2, M.memoizedState, a);
  },
  useTransition: function() {
    var a = ci(bi)[0], b2 = ai().memoizedState;
    return [a, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a) {
  var b2 = ai();
  return M === null ? b2.memoizedState = a : zi(b2, M.memoizedState, a);
}, useTransition: function() {
  var a = di(bi)[0], b2 = ai().memoizedState;
  return [a, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Oa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2 };
}
function Ii(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Li || (Li = true, Mi = d2);
    Ii(a, b2);
  };
  return c2;
}
function Ni(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Ii(a, b2);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ii(a, b2);
    typeof d2 !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
function Pi(a, b2, c2) {
  var d2 = a.pingCache;
  if (d2 === null) {
    d2 = a.pingCache = new Ji();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Qi.bind(null, a, b2, c2), b2.then(a, a));
}
function Ri(a) {
  do {
    var b2;
    if (b2 = a.tag === 13)
      b2 = a.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (a !== null);
  return null;
}
function Si(a, b2, c2, d2, e2) {
  if ((a.mode & 1) === 0)
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c2, b2))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Ti, Ui, Vi, Wi;
Ti = function(a, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ui = function() {
};
Vi = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Xa(a, e2);
        d2 = Xa(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d2 = A({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = fb(a, e2);
        d2 = fb(a, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a.onclick = Af);
    }
    tb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Wi = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Xi(a, b2) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a.tail === null ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function Q(a) {
  var b2 = a.alternate !== null && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Yi(a, b2, c2) {
  var d2 = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q(b2), null;
    case 3:
      d2 = b2.stateNode;
      Gh();
      E(Vf);
      E(H);
      Lh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a === null || a.child === null)
        mh(b2) ? b2.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a, b2);
      Q(b2);
      return null;
    case 5:
      Ih(b2);
      var e2 = Eh(Dh.current);
      c2 = b2.type;
      if (a !== null && b2.stateNode != null)
        Vi(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(p$2(166));
          Q(b2);
          return null;
        }
        a = Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Nf] = b2;
          d2[Of] = f2;
          a = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              D("cancel", d2);
              D("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < kf.length; e2++)
                D(kf[e2], d2);
              break;
            case "source":
              D("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d2);
              D("load", d2);
              break;
            case "details":
              D("toggle", d2);
              break;
            case "input":
              Ya(d2, f2);
              D("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d2);
              break;
            case "textarea":
              gb(d2, f2), D("invalid", d2);
          }
          tb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D("scroll", d2);
            }
          switch (c2) {
            case "input":
              Ua(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Ua(d2);
              ib(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = Af);
          }
          d2 = e2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a === "http://www.w3.org/1999/xhtml" && (a = jb(c2));
          a === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d2.is === "string" ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), c2 === "select" && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Nf] = b2;
          a[Of] = d2;
          Ti(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = ub(c2, d2);
            switch (c2) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < kf.length; e2++)
                  D(kf[e2], a);
                e2 = d2;
                break;
              case "source":
                D("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a);
                D("load", a);
                e2 = d2;
                break;
              case "details":
                D("toggle", a);
                e2 = d2;
                break;
              case "input":
                Ya(a, d2);
                e2 = Xa(a, d2);
                D("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A({}, d2, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                gb(a, d2);
                e2 = fb(a, d2);
                D("invalid", a);
                break;
              default:
                e2 = d2;
            }
            tb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && nb(a, k2) : typeof k2 === "number" && nb(a, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D("scroll", a) : k2 != null && sa(a, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ua(a);
                cb(a, d2, false);
                break;
              case "textarea":
                Ua(a);
                ib(a);
                break;
              case "option":
                d2.value != null && a.setAttribute("value", "" + Ra(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                f2 != null ? eb(a, !!d2.multiple, f2, false) : d2.defaultValue != null && eb(a, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a.onclick = Af);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q(b2);
      return null;
    case 6:
      if (a && b2.stateNode != null)
        Wi(a, b2, a.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(p$2(166));
        c2 = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Nf] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = dh, a !== null)
              switch (a.tag) {
                case 3:
                  zf(d2.nodeValue, c2, (a.mode & 1) !== 0);
                  break;
                case 5:
                  a.memoizedProps.suppressHydrationWarning !== true && zf(d2.nodeValue, c2, (a.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[Nf] = b2, b2.stateNode = d2;
      }
      Q(b2);
      return null;
    case 13:
      E(K);
      d2 = b2.memoizedState;
      if (I && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d2 = eh; d2; )
          d2 = Kf(d2.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d2 !== null && d2.dehydrated !== null) {
        d2 = mh(b2);
        if (a === null) {
          if (!d2)
            throw Error(p$2(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p$2(317));
          d2[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a === null ? mh(b2) : c2 = a.memoizedState !== null;
      d2 !== c2 && d2 && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a === null || (K.current & 1) !== 0 ? R === 0 && (R = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q(b2);
      return null;
    case 4:
      return Gh(), Ui(a, b2), a === null && rf(b2.stateNode.containerInfo), Q(b2), null;
    case 10:
      return qg(b2.type._context), Q(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q(b2), null;
    case 19:
      E(K);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q(b2), null;
      d2 = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d2)
          Xi(f2, false);
        else {
          if (R !== 0 || a !== null && (a.flags & 128) !== 0)
            for (a = b2.child; a !== null; ) {
              g2 = Jh(a);
              if (g2 !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d2 = g2.updateQueue;
                d2 !== null && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G(K, K.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          f2.tail !== null && B() > aj && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a = Jh(g2), a !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I)
              return Q(b2), null;
          } else
            2 * B() - f2.renderingStartTime > aj && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = K.current, G(K, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      Q(b2);
      return null;
    case 22:
    case 23:
      return bj(), d2 = b2.memoizedState !== null, a !== null && a.memoizedState !== null !== d2 && (b2.flags |= 8192), d2 && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a, b2, c2, d2) {
  b2.child = a === null ? zh(b2, null, c2, d2) : yh(b2, a.child, c2, d2);
}
function fj(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  sg(b2, e2);
  d2 = Uh(a, b2, c2, d2, f2, e2);
  c2 = Zh();
  if (a !== null && !tg)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, gj(a, b2, e2);
  I && c2 && bh(b2);
  b2.flags |= 1;
  ej(a, b2, d2, e2);
  return b2.child;
}
function hj(a, b2, c2, d2, e2) {
  if (a === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a, b2, f2, d2, e2);
    a = vh(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if ((a.lanes & e2) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : He;
    if (c2(g2, d2) && a.ref === b2.ref)
      return gj(a, b2, e2);
  }
  b2.flags |= 1;
  a = th(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function jj(a, b2, c2, d2, e2) {
  if (a !== null) {
    var f2 = a.memoizedProps;
    if (He(f2, d2) && a.ref === b2.ref)
      if (tg = false, b2.pendingProps = d2 = f2, (a.lanes & e2) !== 0)
        (a.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a.lanes, gj(a, b2, e2);
  }
  return kj(a, b2, c2, d2, e2);
}
function lj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a !== null ? a.memoizedState : null;
  if (d2.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d2 = f2 !== null ? f2.baseLanes : c2, G(mj, cj), cj |= d2;
    else
      return a = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(mj, cj), cj |= a, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(mj, cj), cj |= d2;
  ej(a, b2, e2, c2);
  return b2.child;
}
function nj(a, b2) {
  var c2 = b2.ref;
  if (a === null && c2 !== null || a !== null && a.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a, b2, c2, d2, e2) {
  var f2 = Yf(c2) ? Wf : H.current;
  f2 = Xf(b2, f2);
  sg(b2, e2);
  c2 = Uh(a, b2, c2, d2, f2, e2);
  d2 = Zh();
  if (a !== null && !tg)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, gj(a, b2, e2);
  I && d2 && bh(b2);
  b2.flags |= 1;
  ej(a, b2, c2, e2);
  return b2.child;
}
function oj(a, b2, c2, d2, e2) {
  if (Yf(c2)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e2);
  if (b2.stateNode === null)
    a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c2, d2), Qg(b2, c2, d2, e2), d2 = true;
  else if (a === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = ug(l2) : (l2 = Yf(c2) ? Wf : H.current, l2 = Xf(b2, l2));
    var n2 = c2.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Pg(b2, g2, d2, l2);
    wg = false;
    var q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || q2 !== k2 || Vf.current || wg ? (typeof n2 === "function" && (Ig(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c2, h2, d2, q2, k2, l2)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g2.props = l2;
    u2 = b2.pendingProps;
    q2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c2) ? Wf : H.current, k2 = Xf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q2 !== k2) && Pg(b2, g2, d2, k2);
    wg = false;
    q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    var m2 = b2.memoizedState;
    h2 !== u2 || q2 !== m2 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b2, c2, y2, d2), m2 = b2.memoizedState), (l2 = wg || Ng(b2, c2, l2, d2, q2, m2, k2) || false) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, m2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, m2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && q2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && q2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = m2), g2.props = d2, g2.state = m2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && q2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && q2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return pj(a, b2, c2, d2, f2, e2);
}
function pj(a, b2, c2, d2, e2, f2) {
  nj(a, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d2 && !g2)
    return e2 && cg(b2, c2, false), gj(a, b2, f2);
  d2 = b2.stateNode;
  dj.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a !== null && g2 ? (b2.child = yh(b2, a.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && cg(b2, c2, true);
  return b2.child;
}
function qj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? $f(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a, b2.context, false);
  Fh(a, b2.containerInfo);
}
function rj(a, b2, c2, d2, e2) {
  nh();
  oh(e2);
  b2.flags |= 256;
  ej(a, b2, c2, d2);
  return b2.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function uj(a, b2) {
  return { baseLanes: a.baseLanes | b2, cachePool: null, transitions: a.transitions };
}
function vj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = K.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a !== null && a.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a === null || a.memoizedState !== null)
    e2 |= 1;
  G(K, e2 & 1);
  if (a === null) {
    kh(b2);
    a = b2.memoizedState;
    if (a !== null && (a = a.dehydrated, a !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, e2 = { mode: "hidden", children: e2 }, (d2 & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = wj(e2, d2, 0, null), a = xh(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = tj(c2), b2.memoizedState = sj, a) : xj(b2, e2);
  }
  e2 = a.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a, b2, c2, Error(p$2(422)));
        if (b2.memoizedState !== null)
          return b2.child = a.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = wj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = xh(f2, e2, c2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        (b2.mode & 1) !== 0 && yh(b2, a.child, null, c2);
        b2.child.memoizedState = tj(c2);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a, b2, c2, null);
      else if (h2.data === "$!")
        b2 = yj(a, b2, c2, Error(p$2(419)));
      else if (d2 = (c2 & a.childLanes) !== 0, tg || d2) {
        d2 = P;
        if (d2 !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d2 = (f2 & (d2.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d2 !== 0 && d2 !== e2.retryLane && (e2.retryLane = d2, Lg(a, d2, -1));
        }
        $i();
        b2 = yj(a, b2, c2, Error(p$2(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a.child, b2 = zj.bind(null, a), h2._reactRetry = b2, b2 = null) : (c2 = e2.treeContext, eh = Kf(h2.nextSibling), dh = b2, I = true, fh = null, c2 !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c2.id, Zg = c2.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d2 = Aj(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a.childLanes & ~c2, b2.memoizedState = sj, d2;
    c2 = Bj(a, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = Aj(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a.childLanes & ~c2, b2.memoizedState = sj, d2;
  c2 = Bj(a, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function xj(a, b2) {
  b2 = wj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function Bj(a, b2, c2, d2) {
  var e2 = a.child;
  a = e2.sibling;
  c2 = th(e2, { mode: "visible", children: c2 });
  (b2.mode & 1) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a !== null && (d2 = b2.deletions, d2 === null ? (b2.deletions = [a], b2.flags |= 16) : d2.push(a));
  return b2.child = c2;
}
function Aj(a, b2, c2, d2, e2) {
  var f2 = b2.mode;
  a = a.child;
  var g2 = a.sibling, h2 = { mode: "hidden", children: c2 };
  (f2 & 1) === 0 && b2.child !== a ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = th(a, h2), c2.subtreeFlags = a.subtreeFlags & 14680064);
  g2 !== null ? d2 = th(g2, d2) : (d2 = xh(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yj(a, b2, c2, d2) {
  d2 !== null && oh(d2);
  yh(b2, a.child, null, c2);
  a = xj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function Cj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  d2 !== null && (d2.lanes |= b2);
  rg(a.return, b2, c2);
}
function Dj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  f2 === null ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function Ej(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  ej(a, b2, d2.children, c2);
  d2 = K.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (a !== null && (a.flags & 128) !== 0)
      a:
        for (a = b2.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && Cj(a, c2, b2);
          else if (a.tag === 19)
            Cj(a, c2, b2);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  G(K, d2);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a = c2.alternate, a !== null && Jh(a) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        Dj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a = e2.alternate;
          if (a !== null && Jh(a) === null) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        Dj(b2, true, c2, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a, b2, c2) {
  a !== null && (b2.dependencies = a.dependencies);
  Fg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a !== null && b2.child !== a.child)
    throw Error(p$2(153));
  if (b2.child !== null) {
    a = b2.child;
    c2 = th(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a.sibling !== null; )
      a = a.sibling, c2 = c2.sibling = th(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function Fj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G(lg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return G(K, K.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return vj(a, b2, c2);
        G(K, K.current & 1);
        a = gj(a, b2, c2);
        return a !== null ? a.sibling : null;
      }
      G(K, K.current & 1);
      break;
    case 19:
      d2 = (c2 & b2.childLanes) !== 0;
      if ((a.flags & 128) !== 0) {
        if (d2)
          return Ej(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(K, K.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a, b2, c2);
  }
  return gj(a, b2, c2);
}
function Gj(a, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E(Vf), E(H), Lh(), a = b2.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E(K);
      a = b2.memoizedState;
      if (a !== null && a.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$2(340));
        nh();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E(K), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S = false, Ij = typeof WeakSet === "function" ? WeakSet : Set, T = null;
function Jj(a, b2) {
  var c2 = a.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d2) {
        U(a, b2, d2);
      }
    else
      c2.current = null;
}
function Kj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    U(a, b2, d2);
  }
}
var Lj = false;
function Mj(a, b2) {
  Bf = cd;
  a = Le();
  if (Me(a)) {
    if ("selectionStart" in a)
      var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && d2.rangeCount !== 0) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (Z) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a, q2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                u2 !== c2 || e2 !== 0 && u2.nodeType !== 3 || (h2 = g2 + e2);
                u2 !== f2 || d2 !== 0 && u2.nodeType !== 3 || (k2 = g2 + d2);
                u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                if ((y2 = u2.firstChild) === null)
                  break;
                q2 = u2;
                u2 = y2;
              }
              for (; ; ) {
                if (u2 === a)
                  break b;
                q2 === c2 && ++l2 === e2 && (h2 = g2);
                q2 === f2 && ++n2 === d2 && (k2 = g2);
                if ((y2 = u2.nextSibling) !== null)
                  break;
                u2 = q2;
                q2 = u2.parentNode;
              }
              u2 = y2;
            }
          c2 = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Cf = { focusedElem: a, selectionRange: c2 };
  cd = false;
  for (T = b2; T !== null; )
    if (b2 = T, a = b2.child, (b2.subtreeFlags & 1028) !== 0 && a !== null)
      a.return = b2, T = a;
    else
      for (; T !== null; ) {
        b2 = T;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b2.stateNode, x2 = v2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w2 : kg(b2.type, w2), J2);
                  v2.__reactInternalSnapshotBeforeUpdate = x2;
                }
                break;
              case 3:
                var r2 = b2.stateNode.containerInfo;
                if (r2.nodeType === 1)
                  r2.textContent = "";
                else if (r2.nodeType === 9) {
                  var F2 = r2.body;
                  F2 != null && (F2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (Z) {
          U(b2, b2.return, Z);
        }
        a = b2.sibling;
        if (a !== null) {
          a.return = b2.return;
          T = a;
          break;
        }
        T = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = d2 !== null ? d2.lastEffect : null;
  if (d2 !== null) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Kj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Oj(a, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Pj(a) {
  var b2 = a.ref;
  if (b2 !== null) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    typeof b2 === "function" ? b2(a) : b2.current = a;
  }
}
function Qj(a) {
  var b2 = a.alternate;
  b2 !== null && (a.alternate = null, Qj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  a.tag === 5 && (b2 = a.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Rj(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function Sj(a) {
  a:
    for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || Rj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.flags & 2)
          continue a;
        if (a.child === null || a.tag === 4)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Tj(a, b2, c2) {
  var d2 = a.tag;
  if (d2 === 5 || d2 === 6)
    a = a.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (Tj(a, b2, c2), a = a.sibling; a !== null; )
      Tj(a, b2, c2), a = a.sibling;
}
function Uj(a, b2, c2) {
  var d2 = a.tag;
  if (d2 === 5 || d2 === 6)
    a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (Uj(a, b2, c2), a = a.sibling; a !== null; )
      Uj(a, b2, c2), a = a.sibling;
}
var V = null, Vj = false;
function Wj(a, b2, c2) {
  for (c2 = c2.child; c2 !== null; )
    Xj(a, b2, c2), c2 = c2.sibling;
}
function Xj(a, b2, c2) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      S || Jj(c2, b2);
    case 6:
      var d2 = V, e2 = Vj;
      V = null;
      Wj(a, b2, c2);
      V = d2;
      Vj = e2;
      V !== null && (Vj ? (a = V, c2 = c2.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : V.removeChild(c2.stateNode));
      break;
    case 18:
      V !== null && (Vj ? (a = V, c2 = c2.stateNode, a.nodeType === 8 ? Jf(a.parentNode, c2) : a.nodeType === 1 && Jf(a, c2), ad(a)) : Jf(V, c2.stateNode));
      break;
    case 4:
      d2 = V;
      e2 = Vj;
      V = c2.stateNode.containerInfo;
      Vj = true;
      Wj(a, b2, c2);
      V = d2;
      Vj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S && (d2 = c2.updateQueue, d2 !== null && (d2 = d2.lastEffect, d2 !== null))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          g2 !== void 0 && ((f2 & 2) !== 0 ? Kj(c2, b2, g2) : (f2 & 4) !== 0 && Kj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Wj(a, b2, c2);
      break;
    case 1:
      if (!S && (Jj(c2, b2), d2 = c2.stateNode, typeof d2.componentWillUnmount === "function"))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          U(c2, b2, h2);
        }
      Wj(a, b2, c2);
      break;
    case 21:
      Wj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (S = (d2 = S) || c2.memoizedState !== null, Wj(a, b2, c2), S = d2) : Wj(a, b2, c2);
      break;
    default:
      Wj(a, b2, c2);
  }
}
function Yj(a) {
  var b2 = a.updateQueue;
  if (b2 !== null) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    c2 === null && (c2 = a.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d2 = Zj.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ak(a, b2) {
  var c2 = b2.deletions;
  if (c2 !== null)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a, g2 = b2, h2 = g2;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V === null)
          throw Error(p$2(160));
        Xj(f2, g2, e2);
        V = null;
        Vj = false;
        var k2 = e2.alternate;
        k2 !== null && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        U(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a), b2 = b2.sibling;
}
function bk(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a);
      ck(a);
      if (d2 & 4) {
        try {
          Nj(3, a, a.return), Oj(3, a);
        } catch (m2) {
          U(a, a.return, m2);
        }
        try {
          Nj(5, a, a.return);
        } catch (m2) {
          U(a, a.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a);
      ck(a);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      break;
    case 5:
      ak(b2, a);
      ck(a);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          nb(e2, "");
        } catch (m2) {
          U(a, a.return, m2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, e2 != null)) {
        var f2 = a.memoizedProps, g2 = c2 !== null ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e2, f2);
            ub(h2, g2);
            var l2 = ub(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var n2 = k2[g2], u2 = k2[g2 + 1];
              n2 === "style" ? rb(e2, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e2, u2) : n2 === "children" ? nb(e2, u2) : sa(e2, n2, u2, l2);
            }
            switch (h2) {
              case "input":
                $a(e2, f2);
                break;
              case "textarea":
                hb(e2, f2);
                break;
              case "select":
                var q2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                y2 != null ? eb(e2, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (f2.defaultValue != null ? eb(e2, !!f2.multiple, f2.defaultValue, true) : eb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Of] = f2;
          } catch (m2) {
            U(a, a.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a);
      ck(a);
      if (d2 & 4) {
        if (a.stateNode === null)
          throw Error(p$2(162));
        l2 = a.stateNode;
        n2 = a.memoizedProps;
        try {
          l2.nodeValue = n2;
        } catch (m2) {
          U(a, a.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a);
      ck(a);
      if (d2 & 4 && c2 !== null && c2.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U(a, a.return, m2);
        }
      break;
    case 4:
      ak(b2, a);
      ck(a);
      break;
    case 13:
      ak(b2, a);
      ck(a);
      l2 = a.child;
      l2.flags & 8192 && l2.memoizedState !== null && (l2.alternate === null || l2.alternate.memoizedState === null) && (dk = B());
      d2 & 4 && Yj(a);
      break;
    case 22:
      l2 = c2 !== null && c2.memoizedState !== null;
      a.mode & 1 ? (S = (n2 = S) || l2, ak(b2, a), S = n2) : ak(b2, a);
      ck(a);
      if (d2 & 8192) {
        n2 = a.memoizedState !== null;
        a:
          for (u2 = null, q2 = a; ; ) {
            if (q2.tag === 5) {
              if (u2 === null) {
                u2 = q2;
                try {
                  e2 = q2.stateNode, n2 ? (f2 = e2.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g2));
                } catch (m2) {
                  U(a, a.return, m2);
                }
              }
            } else if (q2.tag === 6) {
              if (u2 === null)
                try {
                  q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                } catch (m2) {
                  U(a, a.return, m2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a)
                break a;
              u2 === q2 && (u2 = null);
              q2 = q2.return;
            }
            u2 === q2 && (u2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        if (n2 && !l2 && (a.mode & 1) !== 0)
          for (T = a, a = a.child; a !== null; ) {
            for (l2 = T = a; T !== null; ) {
              n2 = T;
              u2 = n2.child;
              switch (n2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n2, n2.return);
                  break;
                case 1:
                  Jj(n2, n2.return);
                  f2 = n2.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q2 = n2;
                    y2 = n2.return;
                    try {
                      e2 = q2, f2.props = e2.memoizedProps, f2.state = e2.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U(q2, y2, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n2, n2.return);
                  break;
                case 22:
                  if (n2.memoizedState !== null) {
                    ek(l2);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n2, T = u2) : ek(l2);
            }
            a = a.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a);
      ck(a);
      d2 & 4 && Yj(a);
      break;
    case 21:
      break;
    default:
      ak(b2, a), ck(a);
  }
}
function ck(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; c2 !== null; ) {
          if (Rj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (nb(e2, ""), d2.flags &= -33);
          var f2 = Sj(a);
          Uj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Sj(a);
          Tj(a, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      U(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function fk(a, b2, c2) {
  T = a;
  gk(a);
}
function gk(a, b2, c2) {
  for (var d2 = (a.mode & 1) !== 0; T !== null; ) {
    var e2 = T, f2 = e2.child;
    if (e2.tag === 22 && d2) {
      var g2 = e2.memoizedState !== null || Hj;
      if (!g2) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || S;
        h2 = Hj;
        var l2 = S;
        Hj = g2;
        if ((S = k2) && !l2)
          for (T = e2; T !== null; )
            g2 = T, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e2) : k2 !== null ? (k2.return = g2, T = k2) : hk(e2);
        for (; f2 !== null; )
          T = f2, gk(f2), f2 = f2.sibling;
        T = e2;
        Hj = h2;
        S = l2;
      }
      ik(a);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, T = f2) : ik(a);
  }
}
function ik(a) {
  for (; T !== null; ) {
    var b2 = T;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S || Oj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !S)
                if (c2 === null)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : kg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Gg(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var n2 = l2.memoizedState;
                  if (n2 !== null) {
                    var u2 = n2.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$2(163));
          }
        S || b2.flags & 512 && Pj(b2);
      } catch (q2) {
        U(b2, b2.return, q2);
      }
    }
    if (b2 === a) {
      T = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T = c2;
      break;
    }
    T = b2.return;
  }
}
function ek(a) {
  for (; T !== null; ) {
    var b2 = T;
    if (b2 === a) {
      T = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T = c2;
      break;
    }
    T = b2.return;
  }
}
function hk(a) {
  for (; T !== null; ) {
    var b2 = T;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if (typeof d2.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              U(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U(b2, g2, k2);
          }
      }
    } catch (k2) {
      U(b2, b2.return, k2);
    }
    if (b2 === a) {
      T = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T = h2;
      break;
    }
    T = b2.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W = 0, P = null, X = null, Y = 0, cj = 0, mj = Tf(0), R = 0, nk = null, Fg = 0, ok$1 = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return (W & 6) !== 0 ? B() : yk !== -1 ? yk : yk = B();
}
function Kg(a) {
  if ((a.mode & 1) === 0)
    return 1;
  if ((W & 2) !== 0 && Y !== 0)
    return Y & -Y;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a = C;
  if (a !== 0)
    return a;
  a = window.event;
  a = a === void 0 ? 16 : id(a.type);
  return a;
}
function Lg(a, b2, c2) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p$2(185));
  var d2 = Ak(a, b2);
  if (d2 === null)
    return null;
  zc(d2, b2, c2);
  if ((W & 2) === 0 || d2 !== P)
    d2 === P && ((W & 2) === 0 && (ok$1 |= b2), R === 4 && Bk(d2, Y)), Ck(d2, c2), b2 === 1 && W === 0 && (a.mode & 1) === 0 && (aj = B() + 500, eg && ig());
  return d2;
}
function Ak(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b2, c2 = a.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a, a = a.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Bg(a) {
  return (P !== null || vg !== null) && (a.mode & 1) !== 0 && (W & 2) === 0;
}
function Ck(a, b2) {
  var c2 = a.callbackNode;
  vc(a, b2);
  var d2 = tc(a, a === P ? Y : 0);
  if (d2 === 0)
    c2 !== null && ac(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    c2 != null && ac(c2);
    if (b2 === 1)
      a.tag === 0 ? hg(Dk.bind(null, a)) : gg(Dk.bind(null, a)), If(function() {
        W === 0 && ig();
      }), c2 = null;
    else {
      switch (Cc(d2)) {
        case 1:
          c2 = ec;
          break;
        case 4:
          c2 = fc;
          break;
        case 16:
          c2 = gc;
          break;
        case 536870912:
          c2 = ic;
          break;
        default:
          c2 = gc;
      }
      c2 = Ek(c2, Fk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Fk(a, b2) {
  yk = -1;
  zk = 0;
  if ((W & 6) !== 0)
    throw Error(p$2(327));
  var c2 = a.callbackNode;
  if (Gk() && a.callbackNode !== c2)
    return null;
  var d2 = tc(a, a === P ? Y : 0);
  if (d2 === 0)
    return null;
  if ((d2 & 30) !== 0 || (d2 & a.expiredLanes) !== 0 || b2)
    b2 = Hk(a, d2);
  else {
    b2 = d2;
    var e2 = W;
    W |= 2;
    var f2 = Ik();
    if (P !== a || Y !== b2)
      sk = null, aj = B() + 500, Jk(a, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W = e2;
    X !== null ? b2 = 0 : (P = null, Y = 0, b2 = R);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = wc(a), e2 !== 0 && (d2 = e2, b2 = Mk(a, e2)));
    if (b2 === 1)
      throw c2 = nk, Jk(a, 0), Bk(a, d2), Ck(a, B()), c2;
    if (b2 === 6)
      Bk(a, d2);
    else {
      e2 = a.current.alternate;
      if ((d2 & 30) === 0 && !Nk(e2) && (b2 = Hk(a, d2), b2 === 2 && (f2 = wc(a), f2 !== 0 && (d2 = f2, b2 = Mk(a, f2))), b2 === 1))
        throw c2 = nk, Jk(a, 0), Bk(a, d2), Ck(a, B()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Ok(a, rk, sk);
          break;
        case 3:
          Bk(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = dk + 500 - B(), 10 < b2)) {
            if (tc(a, 0) !== 0)
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              Jg();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), b2);
            break;
          }
          Ok(a, rk, sk);
          break;
        case 4:
          Bk(a, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - nc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * jk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ef(Ok.bind(null, a, rk, sk), d2);
            break;
          }
          Ok(a, rk, sk);
          break;
        case 5:
          Ok(a, rk, sk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ck(a, B());
  return a.callbackNode === c2 ? Fk.bind(null, a) : null;
}
function Mk(a, b2) {
  var c2 = qk;
  a.current.memoizedState.isDehydrated && (Jk(a, b2).flags |= 256);
  a = Hk(a, b2);
  a !== 2 && (b2 = rk, rk = c2, b2 !== null && Zi(b2));
  return a;
}
function Zi(a) {
  rk === null ? rk = a : rk.push.apply(rk, a);
}
function Nk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ge(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a, b2) {
  b2 &= ~pk;
  b2 &= ~ok$1;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - nc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Dk(a) {
  if ((W & 6) !== 0)
    throw Error(p$2(327));
  Gk();
  var b2 = tc(a, 0);
  if ((b2 & 1) === 0)
    return Ck(a, B()), null;
  var c2 = Hk(a, b2);
  if (a.tag !== 0 && c2 === 2) {
    var d2 = wc(a);
    d2 !== 0 && (b2 = d2, c2 = Mk(a, d2));
  }
  if (c2 === 1)
    throw c2 = nk, Jk(a, 0), Bk(a, b2), Ck(a, B()), c2;
  if (c2 === 6)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Ok(a, rk, sk);
  Ck(a, B());
  return null;
}
function Pk(a, b2) {
  var c2 = W;
  W |= 1;
  try {
    return a(b2);
  } finally {
    W = c2, W === 0 && (aj = B() + 500, eg && ig());
  }
}
function Qk(a) {
  uk !== null && uk.tag === 0 && (W & 6) === 0 && Gk();
  var b2 = W;
  W |= 1;
  var c2 = mk.transition, d2 = C;
  try {
    if (mk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d2, mk.transition = c2, W = b2, (W & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E(mj);
}
function Jk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  c2 !== -1 && (a.timeoutHandle = -1, Ff(c2));
  if (X !== null)
    for (c2 = X.return; c2 !== null; ) {
      var d2 = c2;
      ch(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E(Vf);
          E(H);
          Lh();
          break;
        case 5:
          Ih(d2);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E(K);
          break;
        case 19:
          E(K);
          break;
        case 10:
          qg(d2.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c2 = c2.return;
    }
  P = a;
  X = a = th(a.current, null);
  Y = cj = b2;
  R = 0;
  nk = null;
  pk = ok$1 = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c2 = vg[b2], d2 = c2.interleaved, d2 !== null) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    vg = null;
  }
  return a;
}
function Lk(a, b2) {
  do {
    var c2 = X;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d2 = L.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        Ph = false;
      }
      Oh = 0;
      N = M = L = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c2 === null || c2.return === null) {
        R = 1;
        nk = b2;
        X = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Y;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, n2 = h2, u2 = n2.tag;
          if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q2 = n2.alternate;
            q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
          }
          var y2 = Ri(g2);
          if (y2 !== null) {
            y2.flags &= -257;
            Si(y2, g2, h2, f2, b2);
            y2.mode & 1 && Pi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w2 = /* @__PURE__ */ new Set();
              w2.add(k2);
              b2.updateQueue = w2;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l2, b2);
              $i();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Ri(g2);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Si(J2, g2, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R !== 4 && (R = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v2 = Ki(h2, k2, b2);
              Dg(h2, v2);
              break a;
            case 1:
              f2 = k2;
              var x2 = h2.type, r2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r2 !== null && typeof r2.componentDidCatch === "function" && (Oi === null || !Oi.has(r2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F2 = Ni(h2, f2, b2);
                Dg(h2, F2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c2);
    } catch (Z) {
      b2 = Z;
      X === c2 && c2 !== null && (X = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a = kk.current;
  kk.current = Yh;
  return a === null ? Yh : a;
}
function $i() {
  if (R === 0 || R === 3 || R === 2)
    R = 4;
  P === null || (Fg & 268435455) === 0 && (ok$1 & 268435455) === 0 || Bk(P, Y);
}
function Hk(a, b2) {
  var c2 = W;
  W |= 2;
  var d2 = Ik();
  if (P !== a || Y !== b2)
    sk = null, Jk(a, b2);
  do
    try {
      Sk();
      break;
    } catch (e2) {
      Lk(a, e2);
    }
  while (1);
  pg();
  W = c2;
  kk.current = d2;
  if (X !== null)
    throw Error(p$2(261));
  P = null;
  Y = 0;
  return R;
}
function Sk() {
  for (; X !== null; )
    Tk(X);
}
function Kk() {
  for (; X !== null && !bc(); )
    Tk(X);
}
function Tk(a) {
  var b2 = Uk(a.alternate, a, cj);
  a.memoizedProps = a.pendingProps;
  b2 === null ? Rk(a) : X = b2;
  lk.current = null;
}
function Rk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Yi(c2, b2, cj), c2 !== null) {
        X = c2;
        return;
      }
    } else {
      c2 = Gj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        X = c2;
        return;
      }
      if (a !== null)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        R = 6;
        X = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X = b2;
      return;
    }
    X = b2 = a;
  } while (b2 !== null);
  R === 0 && (R = 5);
}
function Ok(a, b2, c2) {
  var d2 = C, e2 = mk.transition;
  try {
    mk.transition = null, C = 1, Vk(a, b2, c2, d2);
  } finally {
    mk.transition = e2, C = d2;
  }
  return null;
}
function Vk(a, b2, c2, d2) {
  do
    Gk();
  while (uk !== null);
  if ((W & 6) !== 0)
    throw Error(p$2(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (c2 === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Ac(a, f2);
  a === P && (X = P = null, Y = 0);
  (c2.subtreeFlags & 2064) === 0 && (c2.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c2.flags & 15990) !== 0;
  if ((c2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = W;
    W |= 4;
    lk.current = null;
    Mj(a, c2);
    bk(c2, a);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a.current = c2;
    fk(c2);
    cc();
    W = h2;
    C = g2;
    mk.transition = f2;
  } else
    a.current = c2;
  tk && (tk = false, uk = a, vk = e2);
  f2 = a.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c2.stateNode);
  Ck(a, B());
  if (b2 !== null)
    for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      d2(b2[c2]);
  if (Li)
    throw Li = false, a = Mi, Mi = null, a;
  (vk & 1) !== 0 && a.tag !== 0 && Gk();
  f2 = a.pendingLanes;
  (f2 & 1) !== 0 ? a === xk ? wk++ : (wk = 0, xk = a) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a = Cc(vk), b2 = mk.transition, c2 = C;
    try {
      mk.transition = null;
      C = 16 > a ? 16 : a;
      if (uk === null)
        var d2 = false;
      else {
        a = uk;
        uk = null;
        vk = 0;
        if ((W & 6) !== 0)
          throw Error(p$2(331));
        var e2 = W;
        W |= 4;
        for (T = a.current; T !== null; ) {
          var f2 = T, g2 = f2.child;
          if ((T.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (T = l2; T !== null; ) {
                  var n2 = T;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n2, f2);
                  }
                  var u2 = n2.child;
                  if (u2 !== null)
                    u2.return = n2, T = u2;
                  else
                    for (; T !== null; ) {
                      n2 = T;
                      var q2 = n2.sibling, y2 = n2.return;
                      Qj(n2);
                      if (n2 === l2) {
                        T = null;
                        break;
                      }
                      if (q2 !== null) {
                        q2.return = y2;
                        T = q2;
                        break;
                      }
                      T = y2;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w2 = m2.child;
                if (w2 !== null) {
                  m2.child = null;
                  do {
                    var J2 = w2.sibling;
                    w2.sibling = null;
                    w2 = J2;
                  } while (w2 !== null);
                }
              }
              T = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, T = g2;
          else
            b:
              for (; T !== null; ) {
                f2 = T;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v2 = f2.sibling;
                if (v2 !== null) {
                  v2.return = f2.return;
                  T = v2;
                  break b;
                }
                T = f2.return;
              }
        }
        var x2 = a.current;
        for (T = x2; T !== null; ) {
          g2 = T;
          var r2 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && r2 !== null)
            r2.return = g2, T = r2;
          else
            b:
              for (g2 = x2; T !== null; ) {
                h2 = T;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z) {
                    U(h2, h2.return, Z);
                  }
                if (h2 === g2) {
                  T = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (F2 !== null) {
                  F2.return = h2.return;
                  T = F2;
                  break b;
                }
                T = h2.return;
              }
        }
        W = e2;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a);
          } catch (Z) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a, b2, c2) {
  b2 = Hi(c2, b2);
  b2 = Ki(a, b2, 1);
  Ag(a, b2);
  b2 = Jg();
  a = Ak(a, 1);
  a !== null && (zc(a, 1, b2), Ck(a, b2));
}
function U(a, b2, c2) {
  if (a.tag === 3)
    Wk(a, a, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a, c2);
        break;
      } else if (b2.tag === 1) {
        var d2 = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Oi === null || !Oi.has(d2))) {
          a = Hi(c2, a);
          a = Ni(b2, a, 1);
          Ag(b2, a);
          a = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a), Ck(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a, b2, c2) {
  var d2 = a.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Jg();
  a.pingedLanes |= a.suspendedLanes & c2;
  P === a && (Y & c2) === c2 && (R === 4 || R === 3 && (Y & 130023424) === Y && 500 > B() - dk ? Jk(a, 0) : pk |= c2);
  Ck(a, b2);
}
function Xk(a, b2) {
  b2 === 0 && ((a.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c2 = Jg();
  a = Ak(a, b2);
  a !== null && (zc(a, b2, c2), Ck(a, c2));
}
function zj(a) {
  var b2 = a.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Xk(a, c2);
}
function Zj(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      e2 !== null && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  d2 !== null && d2.delete(b2);
  Xk(a, c2);
}
var Uk;
Uk = function(a, b2, c2) {
  if (a !== null)
    if (a.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a, b2, c2);
      tg = (a.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      a = b2.pendingProps;
      var e2 = Xf(b2, H.current);
      sg(b2, c2);
      e2 = Uh(null, b2, d2, a, e2, c2);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d2) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, xg(b2), e2.updater = Mg, b2.stateNode = e2, e2._reactInternals = b2, Qg(b2, d2, a, c2), b2 = pj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && bh(b2), ej(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Yk(d2);
        a = kg(d2, a);
        switch (e2) {
          case 0:
            b2 = kj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = oj(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = fj(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = hj(null, b2, d2, kg(d2.type, a), c2);
            break a;
        }
        throw Error(p$2(306, d2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), kj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), oj(a, b2, d2, e2, c2);
    case 3:
      a: {
        qj(b2);
        if (a === null)
          throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        yg(a, b2);
        Eg(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d2,
            isDehydrated: false,
            cache: g2.cache,
            pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p$2(423));
            b2 = rj(a, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p$2(424));
            b2 = rj(a, b2, d2, c2, e2);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I = true, fh = null, c2 = zh(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          nh();
          if (d2 === e2) {
            b2 = gj(a, b2, c2);
            break a;
          }
          ej(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a === null && kh(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e2.children, Df(d2, e2) ? g2 = null : f2 !== null && Df(d2, f2) && (b2.flags |= 32), nj(a, b2), ej(a, b2, g2, c2), b2.child;
    case 6:
      return a === null && kh(b2), null;
    case 13:
      return vj(a, b2, c2);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a === null ? b2.child = yh(b2, null, d2, c2) : ej(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), fj(a, b2, d2, e2, c2);
    case 7:
      return ej(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return ej(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return ej(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G(lg, d2._currentValue);
        d2._currentValue = g2;
        if (f2 !== null)
          if (Ge(f2.value, g2)) {
            if (f2.children === e2.children && !Vf.current) {
              b2 = gj(a, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d2) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var n2 = l2.pending;
                        n2 === null ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    rg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p$2(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                rg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        ej(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, sg(b2, c2), e2 = ug(e2), d2 = d2(e2), b2.flags |= 1, ej(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = kg(d2, b2.pendingProps), e2 = kg(d2.type, e2), hj(a, b2, d2, e2, c2);
    case 15:
      return jj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d2) ? (a = true, bg(b2)) : a = false, sg(b2, c2), Og(b2, d2, e2), Qg(b2, d2, e2, c2), pj(null, b2, d2, true, a, c2);
    case 19:
      return Ej(a, b2, c2);
    case 22:
      return lj(a, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Ek(a, b2) {
  return $b(a, b2);
}
function Zk(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a, b2, c2, d2) {
  return new Zk(a, b2, c2, d2);
}
function ij(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Yk(a) {
  if (typeof a === "function")
    return ij(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Ca)
      return 11;
    if (a === Fa)
      return 14;
  }
  return 2;
}
function th(a, b2) {
  var c2 = a.alternate;
  c2 === null ? (c2 = hh(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function vh(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if (typeof a === "function")
    ij(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case wa:
          return xh(c2.children, e2, f2, b2);
        case xa:
          g2 = 8;
          e2 |= 8;
          break;
        case za:
          return a = hh(12, c2, b2, e2 | 2), a.elementType = za, a.lanes = f2, a;
        case Da:
          return a = hh(13, c2, b2, e2), a.elementType = Da, a.lanes = f2, a;
        case Ea:
          return a = hh(19, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Ha:
          return wj(c2, e2, f2, b2);
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case Aa:
                g2 = 10;
                break a;
              case Ba:
                g2 = 9;
                break a;
              case Ca:
                g2 = 11;
                break a;
              case Fa:
                g2 = 14;
                break a;
              case Ga:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$2(130, a == null ? a : typeof a, ""));
      }
  b2 = hh(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function xh(a, b2, c2, d2) {
  a = hh(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function wj(a, b2, c2, d2) {
  a = hh(22, a, d2, b2);
  a.elementType = Ha;
  a.lanes = c2;
  a.stateNode = {};
  return a;
}
function uh(a, b2, c2) {
  a = hh(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function wh(a, b2, c2) {
  b2 = hh(4, a.children !== null ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function $k(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function al(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new $k(a, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f2);
  return a;
}
function bl(a, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: va, key: d2 == null ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function cl(a) {
  if (!a)
    return Uf;
  a = a._reactInternals;
  a: {
    if (Ub(a) !== a || a.tag !== 1)
      throw Error(p$2(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$2(171));
  }
  if (a.tag === 1) {
    var c2 = a.type;
    if (Yf(c2))
      return ag(a, c2, b2);
  }
  return b2;
}
function dl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = al(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = cl(null);
  c2 = a.current;
  d2 = Jg();
  e2 = Kg(c2);
  f2 = zg(d2, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c2, f2);
  a.current.lanes = e2;
  zc(a, e2, d2);
  Ck(a, d2);
  return a;
}
function el(a, b2, c2, d2) {
  var e2 = b2.current, f2 = Jg(), g2 = Kg(e2);
  c2 = cl(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  a = Lg(e2, g2, f2);
  a !== null && Cg(a, e2, g2);
  return g2;
}
function fl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function gl(a, b2) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c2 = a.retryLane;
    a.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function hl(a, b2) {
  gl(a, b2);
  (a = a.alternate) && gl(a, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a) {
  console.error(a);
};
function kl(a) {
  this._internalRoot = a;
}
ll.prototype.render = kl.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$2(409));
  el(a, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a = this._internalRoot;
  if (a !== null) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Qk(function() {
      el(null, a, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a) {
  this._internalRoot = a;
}
ll.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Gc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Pc.length && b2 !== 0 && b2 < Pc[c2].priority; c2++)
      ;
    Pc.splice(c2, 0, a);
    c2 === 0 && Uc(a);
  }
};
function ml(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
}
function nl(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a, b2, c2, d2, e2) {
  if (e2) {
    if (typeof d2 === "function") {
      var f2 = d2;
      d2 = function() {
        var a2 = fl(g2);
        f2.call(a2);
      };
    }
    var g2 = dl(b2, d2, a, 0, null, false, false, "", ol);
    a._reactRootContainer = g2;
    a[tf] = g2.current;
    rf(a.nodeType === 8 ? a.parentNode : a);
    Qk();
    return g2;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if (typeof d2 === "function") {
    var h2 = d2;
    d2 = function() {
      var a2 = fl(k2);
      h2.call(a2);
    };
  }
  var k2 = al(a, 0, false, null, null, false, false, "", ol);
  a._reactRootContainer = k2;
  a[tf] = k2.current;
  rf(a.nodeType === 8 ? a.parentNode : a);
  Qk(function() {
    el(b2, k2, c2, d2);
  });
  return k2;
}
function ql(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a2 = fl(g2);
        h2.call(a2);
      };
    }
    el(b2, g2, a, e2);
  } else
    g2 = pl(c2, b2, a, e2, d2);
  return fl(g2);
}
Dc = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = sc(b2.pendingLanes);
        c2 !== 0 && (Bc(b2, c2 | 1), Ck(b2, B()), (W & 6) === 0 && (aj = B() + 500, ig()));
      }
      break;
    case 13:
      var d2 = Jg();
      Qk(function() {
        return Lg(a, 1, d2);
      });
      hl(a, 1);
  }
};
Ec = function(a) {
  if (a.tag === 13) {
    var b2 = Jg();
    Lg(a, 134217728, b2);
    hl(a, 134217728);
  }
};
Fc = function(a) {
  if (a.tag === 13) {
    var b2 = Jg(), c2 = Kg(a);
    Lg(a, c2, b2);
    hl(a, c2);
  }
};
Gc = function() {
  return C;
};
Hc = function(a, b2) {
  var c2 = C;
  try {
    return C = a, b2();
  } finally {
    C = c2;
  }
};
xb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      $a(a, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Cb(d2);
            if (!e2)
              throw Error(p$2(90));
            Va(d2);
            $a(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      hb(a, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && eb(a, !!c2.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Yb(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p$2(200));
  return bl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ml(a))
    throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d2 = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = al(a, 1, false, null, null, c2, false, d2, e2);
  a[tf] = b2.current;
  rf(a.nodeType === 8 ? a.parentNode : a);
  return new kl(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b2 = a._reactInternals;
  if (b2 === void 0) {
    if (typeof a.render === "function")
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Yb(b2);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Qk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!nl(b2))
    throw Error(p$2(200));
  return ql(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!ml(a))
    throw Error(p$2(405));
  var d2 = c2 != null && c2.hydratedSources || null, e2 = false, f2 = "", g2 = jl;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e2 = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = dl(b2, null, a, 1, c2 != null ? c2 : null, e2, false, f2, g2);
  a[tf] = b2.current;
  rf(a);
  if (d2)
    for (a = 0; a < d2.length; a++)
      c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(c2, e2);
  return new ll(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!nl(b2))
    throw Error(p$2(200));
  return ql(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!nl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Qk(function() {
    ql(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!nl(c2))
    throw Error(p$2(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(p$2(38));
  return ql(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var createRoot;
var m$2 = reactDom.exports;
{
  createRoot = m$2.createRoot;
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
  return obj;
};
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$window = _options.window, window2 = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window2.history;
  function getIndexAndLocation() {
    var _window$location = window2.location, pathname = _window$location.pathname, search2 = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search: search2,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index2 - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window2.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index2 = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index2 == null) {
    index2 = 0;
    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
      idx: index2
    }), "");
  }
  function createHref(to2) {
    return typeof to2 === "string" ? to2 : createPath(to2);
  }
  function getNextLocation(to2, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends$1({
      pathname: location.pathname,
      hash: "",
      search: ""
    }, typeof to2 === "string" ? parsePath(to2) : to2, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index3) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index3
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index2 = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location
    });
  }
  function push2(to2, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to2, state);
    function retry() {
      push2(to2, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index2 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to2, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to2, state);
    function retry() {
      replace(to2, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index2), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push: push2,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block2(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers2 = [];
  return {
    get length() {
      return handlers2.length;
    },
    push: function push2(fn) {
      handlers2.push(fn);
      return function() {
        handlers2 = handlers2.filter(function(handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers2.forEach(function(fn) {
        return fn && fn(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search2 = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search2 && search2 !== "?")
    pathname += search2.charAt(0) === "?" ? search2 : "?" + search2;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path2) {
  var parsedPath = {};
  if (path2) {
    var hashIndex = path2.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path2.substr(hashIndex);
      path2 = path2.substr(0, hashIndex);
    }
    var searchIndex = path2.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path2.substr(searchIndex);
      path2 = path2.substr(0, searchIndex);
    }
    if (path2) {
      parsedPath.pathname = path2;
    }
  }
  return parsedPath;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
const RouteContext = /* @__PURE__ */ react.exports.createContext({
  outlet: null,
  matches: []
});
function invariant$2(cond, message) {
  if (!cond)
    throw new Error(message);
}
function matchRoutes(routes, locationArg, basename2) {
  if (basename2 === void 0) {
    basename2 = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename2);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index2) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? invariant$2(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path2 = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? invariant$2(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path2);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path: path2,
      score: computeScore(path2, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path2, index2) {
  let segments = path2.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
  return siblings ? a[a.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "");
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path2, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  let paramNames = [];
  let regexpSource = "^" + path2.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path2.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path2 === "*" || path2 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search: search2 = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search2),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to2 = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to2.pathname === "" ? "/" : to2.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path2 = resolvePath(to2, from2);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path2.pathname.endsWith("/")) {
    path2.pathname += "/";
  }
  return path2;
}
function getToPathname(to2) {
  return to2 === "" || to2.pathname === "" ? "/" : typeof to2 === "string" ? parsePath(to2).pathname : to2.pathname;
}
function stripBasename(pathname, basename2) {
  if (basename2 === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename2.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename2.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename2.length) || "/";
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search2) => !search2 || search2 === "?" ? "" : search2.startsWith("?") ? search2 : "?" + search2;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function useHref(to2) {
  !useInRouterContext() ? invariant$2(false) : void 0;
  let {
    basename: basename2,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search: search2
  } = useResolvedPath(to2);
  let joinedPathname = pathname;
  if (basename2 !== "/") {
    let toPathname = getToPathname(to2);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename2 + (endsWithSlash ? "/" : "") : joinPaths([basename2, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search: search2,
    hash
  });
}
function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant$2(false) : void 0;
  return react.exports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant$2(false) : void 0;
  let {
    basename: basename2,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.exports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path2 = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname);
    if (basename2 !== "/") {
      path2.pathname = joinPaths([basename2, path2.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path2, options.state);
  }, [basename2, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /* @__PURE__ */ react.exports.createContext(null);
function useOutlet(context) {
  let outlet = react.exports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ react.exports.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useParams() {
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to2) {
  let {
    matches
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return react.exports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname), [to2, routePathnamesJson, locationPathname]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant$2(false) : void 0;
  let {
    matches: parentMatches
  } = react.exports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant$2(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index2) => {
    return /* @__PURE__ */ react.exports.createElement(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index2 + 1))
      }
    });
  }, null);
}
function Navigate(_ref2) {
  let {
    to: to2,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ? invariant$2(false) : void 0;
  let navigate = useNavigate();
  react.exports.useEffect(() => {
    navigate(to2, {
      replace,
      state
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant$2(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? invariant$2(false) : void 0;
  let basename2 = normalizePathname(basenameProp);
  let navigationContext = react.exports.useMemo(() => ({
    basename: basename2,
    navigator: navigator2,
    static: staticProp
  }), [basename2, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search: search2 = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.exports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename2);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search: search2,
      hash,
      state,
      key
    };
  }, [basename2, pathname, search2, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ react.exports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children) {
  let routes = [];
  react.exports.Children.forEach(children, (element2) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(element2)) {
      return;
    }
    if (element2.type === react.exports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element2.props.children));
      return;
    }
    !(element2.type === Route) ? invariant$2(false) : void 0;
    let route = {
      caseSensitive: element2.props.caseSensitive,
      element: element2.props.element,
      index: element2.props.index,
      path: element2.props.path
    };
    if (element2.props.children) {
      route.children = createRoutesFromChildren(element2.props.children);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign || function(target) {
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
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function BrowserRouter(_ref) {
  let {
    basename: basename2,
    children,
    window: window2
  } = _ref;
  let historyRef = react.exports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.exports.useState({
    action: history.action,
    location: history.location
  });
  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ react.exports.createElement(Router, {
    basename: basename2,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const Link = /* @__PURE__ */ react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to: to2
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to2);
  let internalOnClick = useLinkClickHandler(to2, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ react.exports.createElement("a", _extends({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path2 = useResolvedPath(to2);
  return react.exports.useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path2);
      navigate(to2, {
        replace,
        state
      });
    }
  }, [location, navigate, path2, replaceProp, state, target, to2]);
}
var extendStatics$1 = function(d2, b2) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics$1(d2, b2);
};
function __extends$1(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics$1(d2, b2);
  function __2() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
}
var genericMessage = "Invariant Violation";
var _a$3 = Object.setPrototypeOf, setPrototypeOf = _a$3 === void 0 ? function(obj, proto2) {
  obj.__proto__ = proto2;
  return obj;
} : _a$3;
var InvariantError = function(_super) {
  __extends$1(InvariantError2, _super);
  function InvariantError2(message) {
    if (message === void 0) {
      message = genericMessage;
    }
    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError2.prototype);
    return _this;
  }
  return InvariantError2;
}(Error);
function invariant$1(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant2) {
  invariant2.debug = wrapConsoleMethod("debug");
  invariant2.log = wrapConsoleMethod("log");
  invariant2.warn = wrapConsoleMethod("warn");
  invariant2.error = wrapConsoleMethod("error");
})(invariant$1 || (invariant$1 = {}));
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}
var global$1 = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a2) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe$1(function() {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}
var DEV = getDEV();
function maybe(thunk) {
  try {
    return thunk();
  } catch (_) {
  }
}
var safeGlobal = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || maybe(function() {
  return maybe.constructor("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe(function() {
    return "production";
  }) && !maybe(function() {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          NODE_ENV: "production"
        }
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
}
install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message != null ? message : "Unexpected invariant triggered.");
  }
}
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position2) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant(false);
    if (match.index >= position2) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position2 + 1 - lastLineStart
  };
}
function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
class GraphQLError extends Error {
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path: path2, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path2 !== null && path2 !== void 0 ? path2 : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0);
    const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null));
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
}
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}
function syntaxError(source, position2, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position2]
  });
}
class Location {
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Token {
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
let OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
let DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
let Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
function isWhiteSpace(code2) {
  return code2 === 9 || code2 === 32;
}
function isDigit(code2) {
  return code2 >= 48 && code2 <= 57;
}
function isLetter(code2) {
  return code2 >= 97 && code2 <= 122 || code2 >= 65 && code2 <= 90;
}
function isNameStart(code2) {
  return isLetter(code2) || code2 === 95;
}
function isNameContinue(code2) {
  return isLetter(code2) || isDigit(code2) || code2 === 95;
}
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
let TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
class Lexer {
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    this.lastToken = this.token;
    const token2 = this.token = this.lookahead();
    return token2;
  }
  lookahead() {
    let token2 = this.token;
    if (token2.kind !== TokenKind.EOF) {
      do {
        if (token2.next) {
          token2 = token2.next;
        } else {
          const nextToken = readNextToken(this, token2.end);
          token2.next = nextToken;
          nextToken.prev = token2;
          token2 = nextToken;
        }
      } while (token2.kind === TokenKind.COMMENT);
    }
    return token2;
  }
}
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code2) {
  return code2 >= 0 && code2 <= 55295 || code2 >= 57344 && code2 <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code2) {
  return code2 >= 55296 && code2 <= 56319;
}
function isTrailingSurrogate(code2) {
  return code2 >= 56320 && code2 <= 57343;
}
function printCodePointAt(lexer, location) {
  const code2 = lexer.source.body.codePointAt(location);
  if (code2 === void 0) {
    return TokenKind.EOF;
  } else if (code2 >= 32 && code2 <= 126) {
    const char = String.fromCodePoint(code2);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code2.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position2 = start;
  while (position2 < bodyLength) {
    const code2 = body.charCodeAt(position2);
    switch (code2) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position2;
        continue;
      case 10:
        ++position2;
        ++lexer.line;
        lexer.lineStart = position2;
        continue;
      case 13:
        if (body.charCodeAt(position2 + 1) === 10) {
          position2 += 2;
        } else {
          ++position2;
        }
        ++lexer.line;
        lexer.lineStart = position2;
        continue;
      case 35:
        return readComment(lexer, position2);
      case 33:
        return createToken(lexer, TokenKind.BANG, position2, position2 + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position2, position2 + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position2, position2 + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position2, position2 + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position2, position2 + 1);
      case 46:
        if (body.charCodeAt(position2 + 1) === 46 && body.charCodeAt(position2 + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position2, position2 + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position2, position2 + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position2, position2 + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position2, position2 + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position2, position2 + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position2, position2 + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position2, position2 + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position2, position2 + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position2, position2 + 1);
      case 34:
        if (body.charCodeAt(position2 + 1) === 34 && body.charCodeAt(position2 + 2) === 34) {
          return readBlockString(lexer, position2);
        }
        return readString(lexer, position2);
    }
    if (isDigit(code2) || code2 === 45) {
      return readNumber(lexer, position2, code2);
    }
    if (isNameStart(code2)) {
      return readName(lexer, position2);
    }
    throw syntaxError(lexer.source, position2, code2 === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code2) || isSupplementaryCodePoint(body, position2) ? `Unexpected character: ${printCodePointAt(lexer, position2)}.` : `Invalid character: ${printCodePointAt(lexer, position2)}.`);
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position2 = start + 1;
  while (position2 < bodyLength) {
    const code2 = body.charCodeAt(position2);
    if (code2 === 10 || code2 === 13) {
      break;
    }
    if (isUnicodeScalarValue(code2)) {
      ++position2;
    } else if (isSupplementaryCodePoint(body, position2)) {
      position2 += 2;
    } else {
      break;
    }
  }
  return createToken(lexer, TokenKind.COMMENT, start, position2, body.slice(start + 1, position2));
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position2 = start;
  let code2 = firstCode;
  let isFloat = false;
  if (code2 === 45) {
    code2 = body.charCodeAt(++position2);
  }
  if (code2 === 48) {
    code2 = body.charCodeAt(++position2);
    if (isDigit(code2)) {
      throw syntaxError(lexer.source, position2, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position2)}.`);
    }
  } else {
    position2 = readDigits(lexer, position2, code2);
    code2 = body.charCodeAt(position2);
  }
  if (code2 === 46) {
    isFloat = true;
    code2 = body.charCodeAt(++position2);
    position2 = readDigits(lexer, position2, code2);
    code2 = body.charCodeAt(position2);
  }
  if (code2 === 69 || code2 === 101) {
    isFloat = true;
    code2 = body.charCodeAt(++position2);
    if (code2 === 43 || code2 === 45) {
      code2 = body.charCodeAt(++position2);
    }
    position2 = readDigits(lexer, position2, code2);
    code2 = body.charCodeAt(position2);
  }
  if (code2 === 46 || isNameStart(code2)) {
    throw syntaxError(lexer.source, position2, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position2)}.`);
  }
  return createToken(lexer, isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position2, body.slice(start, position2));
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
  }
  const body = lexer.source.body;
  let position2 = start + 1;
  while (isDigit(body.charCodeAt(position2))) {
    ++position2;
  }
  return position2;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position2 = start + 1;
  let chunkStart = position2;
  let value = "";
  while (position2 < bodyLength) {
    const code2 = body.charCodeAt(position2);
    if (code2 === 34) {
      value += body.slice(chunkStart, position2);
      return createToken(lexer, TokenKind.STRING, start, position2 + 1, value);
    }
    if (code2 === 92) {
      value += body.slice(chunkStart, position2);
      const escape2 = body.charCodeAt(position2 + 1) === 117 ? body.charCodeAt(position2 + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position2) : readEscapedUnicodeFixedWidth(lexer, position2) : readEscapedCharacter(lexer, position2);
      value += escape2.value;
      position2 += escape2.size;
      chunkStart = position2;
      continue;
    }
    if (code2 === 10 || code2 === 13) {
      break;
    }
    if (isUnicodeScalarValue(code2)) {
      ++position2;
    } else if (isSupplementaryCodePoint(body, position2)) {
      position2 += 2;
    } else {
      throw syntaxError(lexer.source, position2, `Invalid character within String: ${printCodePointAt(lexer, position2)}.`);
    }
  }
  throw syntaxError(lexer.source, position2, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position2) {
  const body = lexer.source.body;
  let point2 = 0;
  let size = 3;
  while (size < 12) {
    const code2 = body.charCodeAt(position2 + size++);
    if (code2 === 125) {
      if (size < 5 || !isUnicodeScalarValue(point2)) {
        break;
      }
      return {
        value: String.fromCodePoint(point2),
        size
      };
    }
    point2 = point2 << 4 | readHexDigit(code2);
    if (point2 < 0) {
      break;
    }
  }
  throw syntaxError(lexer.source, position2, `Invalid Unicode escape sequence: "${body.slice(position2, position2 + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position2) {
  const body = lexer.source.body;
  const code2 = read16BitHexCode(body, position2 + 2);
  if (isUnicodeScalarValue(code2)) {
    return {
      value: String.fromCodePoint(code2),
      size: 6
    };
  }
  if (isLeadingSurrogate(code2)) {
    if (body.charCodeAt(position2 + 6) === 92 && body.charCodeAt(position2 + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position2 + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code2, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(lexer.source, position2, `Invalid Unicode escape sequence: "${body.slice(position2, position2 + 6)}".`);
}
function read16BitHexCode(body, position2) {
  return readHexDigit(body.charCodeAt(position2)) << 12 | readHexDigit(body.charCodeAt(position2 + 1)) << 8 | readHexDigit(body.charCodeAt(position2 + 2)) << 4 | readHexDigit(body.charCodeAt(position2 + 3));
}
function readHexDigit(code2) {
  return code2 >= 48 && code2 <= 57 ? code2 - 48 : code2 >= 65 && code2 <= 70 ? code2 - 55 : code2 >= 97 && code2 <= 102 ? code2 - 87 : -1;
}
function readEscapedCharacter(lexer, position2) {
  const body = lexer.source.body;
  const code2 = body.charCodeAt(position2 + 1);
  switch (code2) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(lexer.source, position2, `Invalid character escape sequence: "${body.slice(position2, position2 + 2)}".`);
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position2 = start + 3;
  let chunkStart = position2;
  let currentLine = "";
  const blockLines = [];
  while (position2 < bodyLength) {
    const code2 = body.charCodeAt(position2);
    if (code2 === 34 && body.charCodeAt(position2 + 1) === 34 && body.charCodeAt(position2 + 2) === 34) {
      currentLine += body.slice(chunkStart, position2);
      blockLines.push(currentLine);
      const token2 = createToken(lexer, TokenKind.BLOCK_STRING, start, position2 + 3, dedentBlockStringLines(blockLines).join("\n"));
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token2;
    }
    if (code2 === 92 && body.charCodeAt(position2 + 1) === 34 && body.charCodeAt(position2 + 2) === 34 && body.charCodeAt(position2 + 3) === 34) {
      currentLine += body.slice(chunkStart, position2);
      chunkStart = position2 + 1;
      position2 += 4;
      continue;
    }
    if (code2 === 10 || code2 === 13) {
      currentLine += body.slice(chunkStart, position2);
      blockLines.push(currentLine);
      if (code2 === 13 && body.charCodeAt(position2 + 1) === 10) {
        position2 += 2;
      } else {
        ++position2;
      }
      currentLine = "";
      chunkStart = position2;
      lineStart = position2;
      continue;
    }
    if (isUnicodeScalarValue(code2)) {
      ++position2;
    } else if (isSupplementaryCodePoint(body, position2)) {
      position2 += 2;
    } else {
      throw syntaxError(lexer.source, position2, `Invalid character within String: ${printCodePointAt(lexer, position2)}.`);
    }
  }
  throw syntaxError(lexer.source, position2, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position2 = start + 1;
  while (position2 < bodyLength) {
    const code2 = body.charCodeAt(position2);
    if (isNameContinue(code2)) {
      ++position2;
    } else {
      break;
    }
  }
  return createToken(lexer, TokenKind.NAME, start, position2, body.slice(start, position2));
}
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect$1(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(([key, value]) => key + ": " + formatValue(value, seenValues));
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const instanceOf = function instanceOf2(value, constructor) {
  return value instanceof constructor;
};
class Source {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect$1(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(false, "line in locationOffset is 1-indexed and must be positive.");
    this.locationOffset.column > 0 || devAssert(false, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function isSource(source) {
  return instanceOf(source, Source);
}
function parse$2(source, options) {
  const parser2 = new Parser(source, options);
  return parser2.parseDocument();
}
class Parser {
  constructor(source, options) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  parseName() {
    const token2 = this.expectToken(TokenKind.NAME);
    return this.node(token2, {
      kind: Kind.NAME,
      value: token2.value
    });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF)
    });
  }
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R)
    });
  }
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentDefinition() {
    var _this$_options;
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.allowLegacyFragmentVariables) === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  parseValueLiteral(isConst) {
    const token2 = this._lexer.token;
    switch (token2.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this._lexer.advance();
        return this.node(token2, {
          kind: Kind.INT,
          value: token2.value
        });
      case TokenKind.FLOAT:
        this._lexer.advance();
        return this.node(token2, {
          kind: Kind.FLOAT,
          value: token2.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this._lexer.advance();
        switch (token2.value) {
          case "true":
            return this.node(token2, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token2, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token2, {
              kind: Kind.NULL
            });
          default:
            return this.node(token2, {
              kind: Kind.ENUM,
              value: token2.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(this._lexer.source, token2.start, `Unexpected variable "$${varName}" in constant value.`);
          } else {
            throw this.unexpected(token2);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token2 = this._lexer.token;
    this._lexer.advance();
    return this.node(token2, {
      kind: Kind.STRING,
      value: token2.value,
      block: token2.kind === TokenKind.BLOCK_STRING
    });
  }
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types2 = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types: types2
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
    }
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types2 = this.parseUnionMemberTypes();
    if (directives.length === 0 && types2.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types: types2
    });
  }
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  node(startToken, node) {
    var _this$_options2;
    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.noLocation) !== true) {
      node.loc = new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
    return node;
  }
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  expectToken(kind) {
    const token2 = this._lexer.token;
    if (token2.kind === kind) {
      this._lexer.advance();
      return token2;
    }
    throw syntaxError(this._lexer.source, token2.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token2)}.`);
  }
  expectOptionalToken(kind) {
    const token2 = this._lexer.token;
    if (token2.kind === kind) {
      this._lexer.advance();
      return true;
    }
    return false;
  }
  expectKeyword(value) {
    const token2 = this._lexer.token;
    if (token2.kind === TokenKind.NAME && token2.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token2.start, `Expected "${value}", found ${getTokenDesc(token2)}.`);
    }
  }
  expectOptionalKeyword(value) {
    const token2 = this._lexer.token;
    if (token2.kind === TokenKind.NAME && token2.value === value) {
      this._lexer.advance();
      return true;
    }
    return false;
  }
  unexpected(atToken) {
    const token2 = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token2.start, `Unexpected ${getTokenDesc(token2)}.`);
  }
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
}
function getTokenDesc(token2) {
  const value = token2.value;
  return getTokenKindDesc(token2.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
const escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
const BREAK = Object.freeze({});
function visit$2(root2, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root2);
  let keys2 = [root2];
  let index2 = -1;
  let edits = [];
  let node = root2;
  let key = void 0;
  let parent = void 0;
  const path2 = [];
  const ancestors = [];
  do {
    index2++;
    const isLeaving = index2 === keys2.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path2[path2.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index2 = stack.index;
      keys2 = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index2 : keys2[index2];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path2.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect$1(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path2, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path2.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path2.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path2.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index: index2,
        keys: keys2,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys2 = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index2 = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root2;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
function print(ast) {
  return visit$2(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  Document: {
    leave: (node) => join$1(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap$3("(", join$1(node.variableDefinitions, ", "), ")");
      const prefix = join$1([
        node.operation,
        join$1([node.name, varDefs]),
        join$1(node.directives, " ")
      ], " ");
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap$3(" = ", defaultValue) + wrap$3(" ", join$1(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap$3("", alias, ": ") + name;
      let argsLine = prefix + wrap$3("(", join$1(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap$3("(\n", indent(join$1(args, "\n")), "\n)");
      }
      return join$1([argsLine, join$1(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap$3(" ", join$1(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join$1([
      "...",
      wrap$3("on ", typeCondition),
      join$1(directives, " "),
      selectionSet
    ], " ")
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => `fragment ${name}${wrap$3("(", join$1(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap$3("", join$1(directives, " "), " ")}` + selectionSet
  },
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join$1(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join$1(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap$3("(", join$1(args, ", "), ")")
  },
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap$3("", description, "\n") + join$1(["schema", join$1(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap$3("", description, "\n") + join$1(["scalar", name, join$1(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap$3("", description, "\n") + join$1([
      "type",
      name,
      wrap$3("implements ", join$1(interfaces, " & ")),
      join$1(directives, " "),
      block(fields)
    ], " ")
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap$3("", description, "\n") + name + (hasMultilineItems(args) ? wrap$3("(\n", indent(join$1(args, "\n")), "\n)") : wrap$3("(", join$1(args, ", "), ")")) + ": " + type + wrap$3(" ", join$1(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap$3("", description, "\n") + join$1([name + ": " + type, wrap$3("= ", defaultValue), join$1(directives, " ")], " ")
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap$3("", description, "\n") + join$1([
      "interface",
      name,
      wrap$3("implements ", join$1(interfaces, " & ")),
      join$1(directives, " "),
      block(fields)
    ], " ")
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types: types2 }) => wrap$3("", description, "\n") + join$1(["union", name, join$1(directives, " "), wrap$3("= ", join$1(types2, " | "))], " ")
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap$3("", description, "\n") + join$1(["enum", name, join$1(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap$3("", description, "\n") + join$1([name, join$1(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap$3("", description, "\n") + join$1(["input", name, join$1(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap$3("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap$3("(\n", indent(join$1(args, "\n")), "\n)") : wrap$3("(", join$1(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join$1(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join$1(["extend schema", join$1(directives, " "), block(operationTypes)], " ")
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join$1(["extend scalar", name, join$1(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join$1([
      "extend type",
      name,
      wrap$3("implements ", join$1(interfaces, " & ")),
      join$1(directives, " "),
      block(fields)
    ], " ")
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join$1([
      "extend interface",
      name,
      wrap$3("implements ", join$1(interfaces, " & ")),
      join$1(directives, " "),
      block(fields)
    ], " ")
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types: types2 }) => join$1([
      "extend union",
      name,
      join$1(directives, " "),
      wrap$3("= ", join$1(types2, " | "))
    ], " ")
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join$1(["extend enum", name, join$1(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join$1(["extend input", name, join$1(directives, " "), block(fields)], " ")
  }
};
function join$1(maybeArray, separator) {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x2) => x2).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap$3("{\n", indent(join$1(array, "\n")), "\n}");
}
function wrap$3(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap$3("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}
function checkDEV() {
  __DEV__ ? invariant$1(typeof DEV === "boolean", DEV) : invariant$1(typeof DEV === "boolean", 36);
}
removeTemporaryGlobals();
checkDEV();
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __2() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__2.prototype = b2.prototype, new __2());
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
function __rest(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to2, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from2.length, ar; i < l2; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to2.concat(ar || Array.prototype.slice.call(from2));
}
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant$1(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant$1(evaledValue !== void 0, 37);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root2) {
  var names = [];
  visit$2(root2, {
    Directive: function(node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root2) {
  return getDirectiveNames(root2).some(function(name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client"], document2) && hasDirectives(["export"], document2);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant$1(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant$1(directiveArguments && directiveArguments.length === 1, 38);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant$1(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant$1(ifArgument.name && ifArgument.name.value === "if", 39);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 40);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition2) {
    if (definition2.kind === "OperationDefinition") {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition2.operation, " operation").concat(definition2.name ? " named '".concat(definition2.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(41);
    }
    if (definition2.kind === "FragmentDefinition") {
      fragments.push(definition2);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    __DEV__ ? invariant$1(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant$1(fragments.length === 1, 42);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign$1(__assign$1({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragment = fragmentMap && fragmentMap[selection.name.value];
      __DEV__ ? invariant$1(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant$1(fragment, 43);
      return fragment;
    }
    default:
      return null;
  }
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function makeReference(id2) {
  return { __ref: String(id2) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(52);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify$2(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify$2(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify$2(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous2 = stringify$2;
    stringify$2 = s;
    return previous2;
  }
});
var stringify$2 = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  __DEV__ ? invariant$1(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant$1(doc && doc.kind === "Document", 44);
  var operations = doc.definitions.filter(function(d2) {
    return d2.kind !== "FragmentDefinition";
  }).map(function(definition2) {
    if (definition2.kind !== "OperationDefinition") {
      throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition2.kind, '"')) : new InvariantError(45);
    }
    return definition2;
  });
  __DEV__ ? invariant$1(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant$1(operations.length <= 1, 46);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition2) {
    return definition2.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition2) {
    return definition2.kind === "OperationDefinition" && definition2.name;
  }).map(function(x2) {
    return x2.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition2) {
    return definition2.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant$1(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant$1(queryDef && queryDef.operation === "query", 47);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant$1(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant$1(doc.kind === "Document", 48);
  __DEV__ ? invariant$1(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant$1(doc.definitions.length <= 1, 49);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant$1(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant$1(fragmentDef.kind === "FragmentDefinition", 50);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition2 = _a2[_i];
    if (definition2.kind === "OperationDefinition") {
      var operation = definition2.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition2;
      }
    }
    if (definition2.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition2;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(51);
}
function getDefaultValues(definition2) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition2 && definition2.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function(elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}
var TYPENAME_FIELD = {
  kind: "Field",
  name: {
    kind: "Name",
    value: "__typename"
  }
};
function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function(selection) {
    return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function(dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = /* @__PURE__ */ Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit$2(doc, {
    Variable: {
      enter: function(node, _key, parent) {
        if (parent.kind !== "VariableDefinition") {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function(node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function(directive) {
            return directive.remove;
          });
          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (arg.value.kind === "Variable") {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }
            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }
            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function(node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function(node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));
  if (modifiedDoc && filterInPlace(variablesToRemove, function(v2) {
    return !!v2.name && !variablesInUse[v2.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }
  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }
  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit$2(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === "OperationDefinition") {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d2) {
          return d2.name.value === "export";
        })) {
          return;
        }
        return __assign$1(__assign$1({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      })) {
        __DEV__ && invariant$1.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
      }
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function(aConfig) {
      return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}
function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(visit$2(doc, {
    OperationDefinition: {
      enter: function(node) {
        return __assign$1(__assign$1({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
          return !config.some(function(arg) {
            return arg.name === varDef.variable.name.value;
          });
        }) : [] });
      }
    },
    Field: {
      enter: function(node) {
        var shouldRemoveField = config.some(function(argConfig) {
          return argConfig.remove;
        });
        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          if (node.arguments) {
            node.arguments.forEach(function(arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }
          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function(node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function(def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }
  return nullIfDocIsEmpty(visit$2(doc, {
    FragmentSpread: { enter },
    FragmentDefinition: { enter }
  }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function(selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === "FragmentSpread") {
      allFragments.push(selection);
    }
  });
  return allFragments;
}
function buildQueryFromSelectionSet(document2) {
  var definition2 = getMainDefinition(document2);
  var definitionOperation = definition2.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit$2(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign$1(__assign$1({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  if (modifiedDoc) {
    modifiedDoc = visit$2(modifiedDoc, {
      FragmentDefinition: {
        enter: function(node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
              return isField(selection) && selection.name.value === "__typename";
            });
            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }
  return modifiedDoc;
}
var hasOwnProperty$7 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$7.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (!this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign$1({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
    }
    return value;
  };
  return DeepMerger2;
}();
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x2) {
  return x2 instanceof Observable;
}
function hostReportError(e2) {
  if (hostReportError.log) {
    hostReportError.log(e2);
  } else {
    setTimeout(function() {
      throw e2;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e2) {
      hostReportError(e2);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e2) {
    hostReportError(e2);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m2 = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m2)
          m2.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer);
        break;
    }
  } catch (e2) {
    hostReportError(e2);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e2) {
      subscriptionObserver.error(e2);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e2) {
            reject(e2);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map2(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e2) {
            return observer.error(e2);
          }
          observer.next(value);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e2) {
            return observer.error(e2);
          }
          observer.next(value);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C2(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e2) {
              return observer.error(e2);
            }
          } else {
            acc = value;
          }
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      var subscription;
      var index2 = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v2) {
            observer.next(v2);
          },
          error: function(e2) {
            observer.error(e2);
          },
          complete: function() {
            if (index2 === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C2.from(sources[index2++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e2) {
              return observer.error(e2);
            }
          }
          var inner = C2.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e2) {
              observer.error(e2);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0)
                subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from2(x2) {
    var C2 = typeof this === "function" ? this : Observable2;
    if (x2 == null)
      throw new TypeError(x2 + " is not an object");
    var method = getMethod(x2, SymbolObservable);
    if (method) {
      var observable = method.call(x2);
      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");
      if (isObservable(observable) && observable.constructor === C2)
        return observable;
      return new C2(function(observer) {
        return observable.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x2, SymbolIterator);
      if (method) {
        return new C2(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x2)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x2)) {
      return new C2(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < x2.length; ++i) {
            observer.next(x2[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x2 + " is not observable");
  };
  Observable2.of = function of2() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C2 = typeof this === "function" ? this : Observable2;
    return new C2(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}
function symbolObservablePonyfill(root2) {
  var result;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result;
      } catch (err) {
      }
    }
  } else {
    result = "@@observable";
  }
  return result;
}
var root$2;
if (typeof self !== "undefined") {
  root$2 = self;
} else if (typeof window !== "undefined") {
  root$2 = window;
} else if (typeof global !== "undefined") {
  root$2 = global;
} else if (typeof module !== "undefined") {
  root$2 = module;
} else {
  root$2 = Function("return this")();
}
symbolObservablePonyfill(root$2);
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}
var toString$3 = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString$3.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e2) {
      if (e2 instanceof TypeError)
        return null;
      throw e2;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            --activeCallbackCount;
            next && next.call(observer, result);
            if (completed) {
              handler.complete();
            }
          }, function(error2) {
            --activeCallbackCount;
            throw error2;
          }).catch(function(caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$1(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseDOM = typeof maybe$1(function() {
  return window.document.createElement;
}) === "function";
var usingJSDOM = maybe$1(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;
function fixObservableSubclass(subclass) {
  function set2(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set2(Symbol.species);
  }
  set2("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.addCount = 0;
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        var sub = _this.sub;
        if (sub !== null) {
          var value = _this.sources.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
      ++this.addCount;
    }
  };
  Concast2.prototype.removeObserver = function(observer, quietly) {
    if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.cleanup = function(callback) {
    var _this = this;
    var called = false;
    var once = function() {
      if (!called) {
        called = true;
        _this.observers.delete(observer);
        callback();
      }
    };
    var observer = {
      next: once,
      error: once,
      complete: once
    };
    var count = this.addCount;
    this.addObserver(observer);
    this.addCount = count;
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
function graphQLResultHasError(result) {
  return result.errors && result.errors.length > 0 || false;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}
function mergeOptions(defaults2, options) {
  return compact(defaults2, options, options.variables && {
    variables: __assign$1(__assign$1({}, defaults2 && defaults2.variables), options.variables)
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(24);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign$1({}, starting);
  var setContext2 = function(next) {
    if (typeof next === "function") {
      context = __assign$1(__assign$1({}, context), next(context));
    } else {
      context = __assign$1(__assign$1({}, context), next);
    }
  };
  var getContext = function() {
    return __assign$1({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext2
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link2) {
  return link2.request.length <= 1;
}
var LinkError = function(_super) {
  __extends(LinkError2, _super);
  function LinkError2(message, link2) {
    var _this = _super.call(this, message) || this;
    _this.link = link2;
    return _this;
  }
  return LinkError2;
}(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x2, y2) {
      return x2.concat(y2);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link2, operation) {
    return link2.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      __DEV__ && invariant$1.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(19);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
var version = "3.6.8";
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$6.call(result, "data") && !hasOwnProperty$6.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p2, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p2);
  } catch (e2) {
    var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e2.message)) : new InvariantError(21);
    parseError.parseError = e2;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign$1(__assign$1(__assign$1({}, options), config.options), { headers: __assign$1(__assign$1({}, options.headers), headersToLowerCase(config.headers)) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign$1(__assign$1({}, http), config.http);
  });
  var operationName2 = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName: operationName2, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }
  return headers;
}
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(20);
  }
};
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$1(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
  if (__DEV__) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign$1(__assign$1({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit$2(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign$1({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d2) {
      return d2.kind === "OperationDefinition" && d2.operation === "mutation";
    };
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$1(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        operation.setContext({ response });
        return response;
      }).then(parseAndCheckHttpResponse(operation)).then(function(result) {
        observer.next(result);
        observer.complete();
        return result;
      }).catch(function(err) {
        if (err.name === "AbortError")
          return;
        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }
        observer.error(err);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
var _a$2 = Object.prototype, toString$2 = _a$2.toString, hasOwnProperty$5 = _a$2.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b2) {
  try {
    return check(a, b2);
  } finally {
    previousComparisons.clear();
  }
}
function check(a, b2) {
  if (a === b2) {
    return true;
  }
  var aTag = toString$2.call(a);
  var bTag = toString$2.call(b2);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b2.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b2))
        return true;
      var aKeys = definedKeys(a);
      var bKeys = definedKeys(b2);
      var keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (var k2 = 0; k2 < keyCount; ++k2) {
        if (!hasOwnProperty$5.call(b2, aKeys[k2])) {
          return false;
        }
      }
      for (var k2 = 0; k2 < keyCount; ++k2) {
        var key = aKeys[k2];
        if (!check(a[key], b2[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b2.name && a.message === b2.message;
    case "[object Number]":
      if (a !== a)
        return b2 !== b2;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b2;
    case "[object RegExp]":
    case "[object String]":
      return a == "" + b2;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b2.size)
        return false;
      if (previouslyCompared(a, b2))
        return true;
      var aIterator = a.entries();
      var isMap = aTag === "[object Map]";
      while (true) {
        var info = aIterator.next();
        if (info.done)
          break;
        var _a2 = info.value, aKey = _a2[0], aValue = _a2[1];
        if (!b2.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b2.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b2 = new Uint8Array(b2);
    case "[object DataView]": {
      var len = a.byteLength;
      if (len === b2.byteLength) {
        while (len-- && a[len] === b2[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      var aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b2)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b2) {
  var bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b2))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b2);
  return false;
}
var defaultMakeData = function() {
  return /* @__PURE__ */ Object.create(null);
};
var _a$1 = Array.prototype, forEach = _a$1.forEach, slice = _a$1.slice;
var Trie = function() {
  function Trie2(weakness, makeData) {
    if (weakness === void 0) {
      weakness = true;
    }
    if (makeData === void 0) {
      makeData = defaultMakeData;
    }
    this.weakness = weakness;
    this.makeData = makeData;
  }
  Trie2.prototype.lookup = function() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }
    return this.lookupArray(array);
  };
  Trie2.prototype.lookupArray = function(array) {
    var node = this;
    forEach.call(array, function(key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = this.makeData(slice.call(array)));
  };
  Trie2.prototype.getChildTrie = function(key) {
    var map2 = this.weakness && isObjRef(key) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    var child = map2.get(key);
    if (!child)
      map2.set(key, child = new Trie2(this.weakness, this.makeData));
    return child;
  };
  return Trie2;
}();
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
  return function() {
    function Slot2() {
      this.id = [
        "slot",
        idCounter++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    Slot2.prototype.hasValue = function() {
      for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
        if (this.id in context_1.slots) {
          var value = context_1.slots[this.id];
          if (value === MISSING_VALUE)
            break;
          if (context_1 !== currentContext) {
            currentContext.slots[this.id] = value;
          }
          return true;
        }
      }
      if (currentContext) {
        currentContext.slots[this.id] = MISSING_VALUE;
      }
      return false;
    };
    Slot2.prototype.getValue = function() {
      if (this.hasValue()) {
        return currentContext.slots[this.id];
      }
    };
    Slot2.prototype.withValue = function(value, callback, args, thisArg) {
      var _a2;
      var slots = (_a2 = {
        __proto__: null
      }, _a2[this.id] = value, _a2);
      var parent = currentContext;
      currentContext = { parent, slots };
      try {
        return callback.apply(thisArg, args);
      } finally {
        currentContext = parent;
      }
    };
    Slot2.bind = function(callback) {
      var context = currentContext;
      return function() {
        var saved = currentContext;
        try {
          currentContext = context;
          return callback.apply(this, arguments);
        } finally {
          currentContext = saved;
        }
      };
    };
    Slot2.noContext = function(callback, args, thisArg) {
      if (currentContext) {
        var saved = currentContext;
        try {
          currentContext = null;
          return callback.apply(thisArg, args);
        } finally {
          currentContext = saved;
        }
      } else {
        return callback.apply(thisArg, args);
      }
    };
    return Slot2;
  }();
};
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
  var Slot2 = makeSlotClass();
  try {
    Object.defineProperty(host, globalKey, {
      value: host[globalKey] = Slot2,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot2;
  }
}();
Slot.bind;
Slot.noContext;
function defaultDispose() {
}
var Cache = function() {
  function Cache2(max2, dispose) {
    if (max2 === void 0) {
      max2 = Infinity;
    }
    if (dispose === void 0) {
      dispose = defaultDispose;
    }
    this.max = max2;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  Cache2.prototype.has = function(key) {
    return this.map.has(key);
  };
  Cache2.prototype.get = function(key) {
    var node = this.getNode(key);
    return node && node.value;
  };
  Cache2.prototype.getNode = function(key) {
    var node = this.map.get(key);
    if (node && node !== this.newest) {
      var older = node.older, newer = node.newer;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  };
  Cache2.prototype.set = function(key, value) {
    var node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  };
  Cache2.prototype.clean = function() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };
  Cache2.prototype.delete = function(key) {
    var node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  };
  return Cache2;
}();
var parentEntrySlot = new Slot();
var _a;
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
var toArray$1 = (_a = Array.from, _a === void 0 ? function(collection) {
  var array = [];
  collection.forEach(function(item) {
    return array.push(item);
  });
  return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b2) {
  var len = a.length;
  return len > 0 && len === b2.length && a[len - 1] === b2[len - 1];
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = function() {
  function Entry2(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry2.count;
  }
  Entry2.prototype.peek = function() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  };
  Entry2.prototype.recompute = function(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  };
  Entry2.prototype.setDirty = function() {
    if (this.dirty)
      return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this);
    maybeUnsubscribe(this);
  };
  Entry2.prototype.dispose = function() {
    var _this = this;
    this.setDirty();
    forgetChildren(this);
    eachParent(this, function(parent, child) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };
  Entry2.prototype.forget = function() {
    this.dispose();
  };
  Entry2.prototype.dependOn = function(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  };
  Entry2.prototype.forgetDeps = function() {
    var _this = this;
    if (this.deps) {
      toArray$1(this.deps).forEach(function(dep2) {
        return dep2.delete(_this);
      });
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  };
  Entry2.count = 0;
  return Entry2;
}();
function rememberParent(child) {
  var parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e2) {
    entry.value[1] = e2;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  var parentCount = child.parents.size;
  if (parentCount) {
    var parents = toArray$1(child.parents);
    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  var dc2 = parent.dirtyChildren;
  if (dc2) {
    dc2.delete(child);
    if (dc2.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc2);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function(_value, child) {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e2) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
};
function dep(options) {
  var depsByKey = /* @__PURE__ */ new Map();
  var subscribe = options && options.subscribe;
  function depend(key) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      var dep_1 = depsByKey.get(key);
      if (!dep_1) {
        depsByKey.set(key, dep_1 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep_1);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    var dep2 = depsByKey.get(key);
    if (dep2) {
      var m_1 = entryMethodName && hasOwnProperty$4.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      toArray$1(dep2).forEach(function(entry) {
        return entry[m_1]();
      });
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function() {
    return keyTrie.lookupArray(arguments);
  };
}
makeDefaultMakeCacheKeyFunction();
var caches = /* @__PURE__ */ new Set();
function wrap$2(originalFunction, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var cache2 = new Cache(options.max || Math.pow(2, 16), function(entry) {
    return entry.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
  var optimistic = function() {
    var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    var entry = cache2.get(key);
    if (!entry) {
      cache2.set(key, entry = new Entry(originalFunction));
      entry.subscribe = options.subscribe;
      entry.forget = function() {
        return cache2.delete(key);
      };
    }
    var value = entry.recompute(Array.prototype.slice.call(arguments));
    cache2.set(key, entry);
    caches.add(cache2);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function(cache3) {
        return cache3.clean();
      });
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: function() {
      return cache2["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  function dirtyKey(key) {
    var entry = cache2.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    var entry = cache2.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return cache2.delete(key);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap$2(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign$1(__assign$1({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign$1(__assign$1({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a2) {
    var id2 = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id2 || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a2) {
    var id2 = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id2,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache2) {
        var value = cache2.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache2.writeQuery(__assign$1(__assign$1({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache2) {
        var value = cache2.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache2.writeFragment(__assign$1(__assign$1({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function() {
  function MissingFieldError2(message, path2, query, variables) {
    this.message = message;
    this.path = path2;
    this.query = query;
    this.variables = variables;
  }
  return MissingFieldError2;
}();
var hasOwn$1 = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id2 = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id2 !== void 0 ? { id: id2 } : _id !== void 0 ? { _id } : void 0;
    }
    if (id2 === void 0)
      id2 = _id;
    if (id2 !== void 0) {
      return "".concat(__typename, ":").concat(typeof id2 === "number" || typeof id2 === "string" ? id2 : JSON.stringify(id2));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray$2(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn$1.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray$2(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
var isArray$2 = function(a) {
  return Array.isArray(a);
};
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id2 = _this.policies.identify(objOrIdOrRef)[0];
      if (id2) {
        var ref = makeReference(id2);
        if (mergeIntoStore) {
          _this.merge(id2, objOrIdOrRef);
        }
        return ref;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign$1({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn$1.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn$1.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn$1.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn$1.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    __DEV__ ? invariant$1(typeof dataId === "string", "store.merge expects a string ID") : invariant$1(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from2) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from2 || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign$1(__assign$1({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a2;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn$1.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id2) {
      if (!hasOwn$1.call(_this.policies.rootTypenamesById, id2)) {
        extraRootIds.push(id2);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn$1.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id2) {
      if (hasOwn$1.call(snapshot, id2)) {
        Object.keys(_this.findChildRefIds(id2)).forEach(ids.add, ids);
        delete snapshot[id2];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id2) {
        return root_1.delete(id2);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn$1.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root2 = this.data[dataId];
      if (!root2)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root2]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a2) {
      var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id2, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id2;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign$1(__assign$1({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn$1.call(this.data, dataId) ? __assign$1(__assign$1({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p2 = this.parent;
    while (p2.parent)
      p2 = p2.parent;
    return p2.getStorage.apply(p2, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root2) {
    return _super.call(this, "EntityStore.Stump", root2, function() {
    }, new CacheGroup(root2.group.caching, root2.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray$2(value) ? value.slice(0) : __assign$1({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto2 = Object.getPrototypeOf(value);
      switch (proto2) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
            if (__DEV__) {
              Object.freeze(array);
            }
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys2 = this.sortedKeys(value);
          array_1.push(keys2.json);
          var firstValueIndex_1 = array_1.length;
          keys2.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys2.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
            if (__DEV__) {
              Object.freeze(obj_1);
            }
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys2 = Object.keys(obj);
    var node = this.pool.lookupArray(keys2);
    if (!node.keys) {
      keys2.sort();
      var json = JSON.stringify(keys2);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys2, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap$2(function(options) {
      var _a2;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign$1(__assign$1({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap$2(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a2) {
        var field = _a2.field, array = _a2.array, context = _a2.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
    var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign$1(__assign$1({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: {
        store,
        query,
        policies,
        variables,
        varString: canonicalStringify(variables),
        canonizeResults,
        fragmentMap: createFragmentMap(getFragmentDefinitions(query))
      }
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
    var _this = this;
    var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var objectsToMerge = [];
    var missing;
    var missingMerger = new DeepMerger();
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({ __typename: typename });
    }
    function handleMissing(result2, resultName) {
      var _a3;
      if (result2.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a3, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
          }
        } else if (isArray$2(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.fragmentMap);
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var result = mergeDeepArray(objectsToMerge);
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
    var _this = this;
    var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
    var missing;
    var missingMerger = new DeepMerger();
    function handleMissing(childResult, i) {
      var _a3;
      if (childResult.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (isArray$2(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant$1(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant$1(!isReference(value), 5);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache2) {
  var info = cacheInfoMap.get(cache2);
  if (!info) {
    cacheInfoMap.set(cache2, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache2) {
  getCacheInfo(cache2).vars.forEach(function(rv) {
    return rv.forgetCache(cache2);
  });
}
function recallCache(cache2) {
  getCacheInfo(cache2).vars.forEach(function(rv) {
    return rv.attachCache(cache2);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache3) {
          getCacheInfo(cache3).dep.dirty(rv);
          broadcast(cache3);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache2 = cacheSlot.getValue();
      if (cache2) {
        attach(cache2);
        getCacheInfo(cache2).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache2) {
    caches2.add(cache2);
    getCacheInfo(cache2).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache2) {
    return caches2.delete(cache2);
  };
  return rv;
}
function broadcast(cache2) {
  if (cache2.broadcastWatches) {
    cache2.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from2, key) {
      return context.readField(key, from2);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn$1.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      __DEV__ ? invariant$1(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant$1(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d2 = field.directives.find(function(d3) {
            return d3.name.value === directiveName_1;
          });
          var directiveArgs = d2 && argumentsObjectFromField(d2, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn$1.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path2) {
    var _a2;
    var toMerge = extractor(path2);
    if (toMerge !== void 0) {
      for (var i = path2.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path2[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray$2(s)) {
        getSpecifierPaths(s).forEach(function(p2) {
          return paths_1.push(currentPath_1.concat(p2));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray$2(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path2, extract) {
  extract = extract || extractKey;
  return normalize$3(path2.reduce(function reducer(obj, key) {
    return isArray$2(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize$3(value) {
  if (isNonNullObject(value)) {
    if (isArray$2(value)) {
      return value.map(normalize$3);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path2) {
      return extractKeyPath(value, path2);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config) {
    this.config = config;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign$1({ dataIdFromObject: defaultDataIdFromObject }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }
    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a2;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign$1(__assign$1({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id2;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (isArray$2(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id2 = specifierOrId;
        break;
      }
    }
    id2 = id2 ? String(id2) : void 0;
    return context.keyObject ? [id2, context.keyObject] : [id2];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn$1.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge2) {
      existing2.merge = typeof merge2 === "function" ? merge2 : merge2 === true ? mergeTrueFn : merge2 === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray$2(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge2 = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray$2(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge2);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      __DEV__ ? invariant$1(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant$1(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn$1.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && invariant$1.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
            }
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray$2(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge2 = policy && policy.merge;
    if (!merge2 && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge2 = policy && policy.merge;
    }
    return merge2;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
    var field = _a2.field, typename = _a2.typename, merge2 = _a2.merge;
    if (merge2 === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge2 === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge2(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from2 = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from2 : objectOrReference
    };
  } else {
    options = __assign$1({}, fieldNameOrOptions);
    if (!hasOwn$1.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant$1.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }
  if (options.variables === void 0) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray$2(existing) || isArray$2(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign$1(__assign$1({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign$1(__assign$1({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache2, reader) {
    this.cache = cache2;
    this.reader = reader;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a2) {
    var _this = this;
    var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign$1(__assign$1({}, getDefaultValues(operationDefinition)), variables);
    var context = {
      store,
      written: /* @__PURE__ */ Object.create(null),
      merge: function(existing, incoming) {
        return merger.merge(existing, incoming);
      },
      variables,
      varString: canonicalStringify(variables),
      fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
      overwrite: !!overwrite,
      incomingById: /* @__PURE__ */ new Map(),
      clientOnly: false,
      deferred: false,
      flavors: /* @__PURE__ */ new Map()
    };
    var ref = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref)) {
      throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new InvariantError(6);
    }
    context.incomingById.forEach(function(_a3, dataId2) {
      var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      if (__DEV__ && !context.overwrite) {
        var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
        fieldNodeSet.forEach(function(field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });
        var hasSelectionSet_1 = function(storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };
        var hasMergeFunction_1 = function(storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref.__ref);
    return ref;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a2) {
    var _this = this;
    var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if (typeof typename === "string") {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign$1(__assign$1({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a3;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge2 = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge2) {
          childTree.info = {
            field,
            typename,
            merge: merge2
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
      } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        __DEV__ && invariant$1.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1e3));
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id2 = _b[0], keyObject = _b[1];
      dataId = dataId || id2;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e2) {
      if (!dataId)
        throw e2;
    }
    if (typeof dataId === "string") {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return __DEV__ ? cloneDeep(value) : value;
    }
    if (isArray$2(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a2;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray$2(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from2, name) {
        return isArray$2(from2) ? typeof name === "number" ? from2[name] : void 0 : context.store.getFieldValue(from2, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (iVal === void 0)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant$1(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray$2(i_1) ? i_1.slice(0) : __assign$1({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  if (!map2.has(name)) {
    map2.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map2.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign$1(__assign$1({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map2 = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map: map2 };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  var childTree = map2.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map2.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray$2(existing) && !isArray$2(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  __DEV__ && invariant$1.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config) {
    if (config === void 0) {
      config = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.typenameDocumentCache = /* @__PURE__ */ new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
    }));
    this.maybeBroadcastWatch = wrap$2(function(c2, options) {
      return _this.broadcastWatch(c2, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c2) {
        var store = c2.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c2.optimistic, rootId = c2.rootId, variables = c2.variables;
          return store.makeCacheKey(c2.query, c2.callback, canonicalStringify({ optimistic, rootId, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign$1(__assign$1({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e2) {
      if (e2 instanceof MissingFieldError) {
        return null;
      }
      throw e2;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn$1.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign$1(__assign$1({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch);
    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }
    return function() {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e2) {
      __DEV__ && invariant$1.warn(e2);
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn$1.call(options, "id")) {
        return false;
      }
      options = __assign$1(__assign$1({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign$1(__assign$1({}, options), { onWatchUpdated: function(watch) {
        alreadyDirty.add(watch);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign$1(__assign$1({}, options), { onWatchUpdated: function(watch, diff2) {
        var result = onWatchUpdated.call(this, watch, diff2);
        if (result !== false) {
          alreadyDirty.delete(watch);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document2);
      if (!result) {
        result = addTypenameToDocument(document2);
        this.typenameDocumentCache.set(document2, result);
        this.typenameDocumentCache.set(result, result);
      }
      return result;
    }
    return document2;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c2) {
        return _this.maybeBroadcastWatch(c2, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c2, options) {
    var lastDiff = c2.lastDiff;
    var diff2 = this.diff(c2);
    if (options) {
      if (c2.optimistic && typeof options.optimistic === "string") {
        diff2.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c2, diff2, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff2.result)) {
      c2.callback(c2.lastDiff = diff2, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var message = "";
  if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function(error) {
      var errorMessage = error ? error.message : "Error message not found.";
      message += "".concat(errorMessage, "\n");
    });
  }
  if (err.networkError) {
    message += "".concat(err.networkError.message, "\n");
  }
  message = message.replace(/\n$/, "");
  return message;
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a2) {
    var graphQLErrors = _a2.graphQLErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign, hasOwnProperty$3 = Object.hasOwnProperty;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a2) {
    var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a3) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign$1(__assign$1({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign$1(__assign$1({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers)
      ;
    else {
      var diff2 = this.queryInfo.getDiff();
      if (diff2.complete || this.options.returnPartialData) {
        result.data = diff2.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff2.complete) {
        delete result.partial;
        if (diff2.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
      if (__DEV__ && !diff2.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff2.missing);
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
    return !this.last || !equal(this.last.result, newResult);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var _a2;
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (__DEV__ && variables && hasOwnProperty$3.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.query);
      var vars = queryDef.variableDefinitions;
      if (!vars || !vars.some(function(v2) {
        return v2.variable.name.value === "variables";
      })) {
        __DEV__ && invariant$1.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
      }
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign$1(__assign$1({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign$1(__assign$1({}, fetchMoreOptions.query ? fetchMoreOptions : __assign$1(__assign$1(__assign$1(__assign$1({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign$1(__assign$1({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache2) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache2.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous2) {
              return updateQuery(previous2, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache2.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch) {
          updatedQuerySet.add(watch.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous2, _a2) {
            var variables = _a2.variables;
            return updateQuery(previous2, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
        __DEV__ && invariant$1.error("Unhandled GraphQL subscription error", err);
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    __DEV__ ? invariant$1(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant$1(pollInterval, 10);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign$1(__assign$1({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = compact(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && (!newOptions.fetchPolicy || newOptions.fetchPolicy === oldFetchPolicy)) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign$1({}, options.variables);
    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function(result) {
        _this.reportResult(result, variables);
      },
      error: function(error) {
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast.promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    if (lastError || this.isDifferentFromLastResult(result)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign$1(__assign$1({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
  __DEV__ && invariant$1.error("Unhandled error", error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant$1.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
var LocalState = function() {
  function LocalState2(_a2) {
    var cache2 = _a2.cache, client2 = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
    this.cache = cache2;
    if (client2) {
      this.client = client2;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a2) {
    var document2 = _a2.document, remoteResult = _a2.remoteResult, context = _a2.context, variables = _a2.variables, _b = _a2.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign$1(__assign$1({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache2 = this.cache;
    return __assign$1(__assign$1({}, context), { cache: cache2, getCacheKey: function(obj) {
      return cache2.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign$1(__assign$1({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign$1({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit$2(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a2, cache2, client2, execContext;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a2 = this, cache2 = _a2.cache, client2 = _a2.client;
        execContext = {
          fragmentMap,
          context: __assign$1(__assign$1({}, context), { cache: cache2, client: client2 }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a2) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a3) {
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                  var _a4;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? invariant$1(fragment, "No fragment named ".concat(selection.name.value)) : invariant$1(fragment, 9);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a2) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache2, methodName) {
  var original = cache2[methodName];
  if (typeof original === "function") {
    cache2[methodName] = function() {
      destructiveMethodCounts.set(cache2, (destructiveMethodCounts.get(cache2) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache2 = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache2)) {
      destructiveMethodCounts.set(cache2, 0);
      wrapDestructiveCacheMethod(cache2, "evict");
      wrapDestructiveCacheMethod(cache2, "modify");
      wrapDestructiveCacheMethod(cache2, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.lastDiff = void 0;
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff2 = this.cache.diff(options);
    this.updateLastDiff(diff2, options);
    return diff2;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff2, options) {
    this.lastDiff = diff2 ? {
      diff: diff2,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a2;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff2) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff2);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff2 && diff2.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff2 = _this.getDiff();
        if (diff2.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign$1(__assign$1({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff2) {
      return _this.setDiff(diff2);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, options, cacheWriteBehavior) {
    var _this = this;
    this.graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
    this.reset();
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache2) {
          if (_this.shouldWrite(result, options.variables)) {
            cache2.writeQuery({
              query: _this.document,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff2 = cache2.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff2, diffOptions);
          if (diff2.complete) {
            result.data = diff2.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a2) {
    var cache2 = _a2.cache, link2 = _a2.link, defaultOptions2 = _a2.defaultOptions, _b = _a2.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a2.onBroadcast, _c = _a2.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a2.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a2.localState, assumeImmutableResults = _a2.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    this.cache = cache2;
    this.link = link2;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache: cache2 });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(11));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a2) {
    var _b, _c;
    var mutation = _a2.mutation, variables = _a2.variables, optimisticResponse = _a2.optimisticResponse, updateQueries = _a2.updateQueries, _d = _a2.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a2.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a2.update, onQueryUpdated = _a2.onQueryUpdated, _f = _a2.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a2.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a2.keepRootFields, context = _a2.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, mutationStoreValue, self2;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            __DEV__ ? invariant$1(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant$1(mutation, 12);
            __DEV__ ? invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 13);
            mutationId = this.generateMutationId();
            mutation = this.transform(mutation).document;
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _h.sent();
            _h.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign$1(__assign$1({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: result.errors
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign$1({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  resolve(storeResult);
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache2) {
    var _this = this;
    if (cache2 === void 0) {
      cache2 = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result.data,
        dataId: "ROOT_MUTATION",
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a2, queryId) {
          var observableQuery = _a2.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty$2.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache2.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache3) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache3.write(write);
            });
          }
          var update = mutation.update;
          if (update) {
            if (!skipCache) {
              var diff2 = cache3.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff2.complete) {
                result = __assign$1(__assign$1({}, result), { data: diff2.result });
              }
            }
            update(cache3, result, {
              context: mutation.context,
              variables: mutation.variables
            });
          }
          if (!skipCache && !mutation.keepRootFields) {
            cache3.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a2) {
                var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache2) {
      try {
        _this.markMutationResult(__assign$1(__assign$1({}, mutation), { result: { data } }), cache2);
      } catch (error) {
        __DEV__ && invariant$1.error(error);
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var transformed = this.cache.transformDocument(document2);
      var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = forLink && this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign$1(__assign$1({}, transformed), { definitions: transformed.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign$1(__assign$1({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      var add2 = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add2(document2);
      add2(transformed);
      add2(clientQuery);
      add2(serverQuery);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign$1(__assign$1({}, this.transform(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign$1(__assign$1({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: observable.query,
      observableQuery: observable,
      variables: observable.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    __DEV__ ? invariant$1(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant$1(options.query, 14);
    __DEV__ ? invariant$1(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant$1(options.query.kind === "Document", 15);
    __DEV__ ? invariant$1(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant$1(!options.returnPartialData, 16);
    __DEV__ ? invariant$1(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant$1(!options.pollInterval, 17);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(18));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a2, queryId) {
      var oq = _a2.observableQuery, document2 = _a2.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign$1(__assign$1({}, options), { fetchPolicy: "network-only" })
        });
        invariant$1(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function(included, nameOrDoc) {
        if (!included) {
          __DEV__ && invariant$1.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        }
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a2) {
    var _this = this;
    var query = _a2.query, fetchPolicy = _a2.fetchPolicy, errorPolicy = _a2.errorPolicy, variables = _a2.variables, _b = _a2.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        if (graphQLResultHasError(result)) {
          throw new ApolloError({
            graphQLErrors: result.errors
          });
        }
        return result;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a2;
    if (deduplication === void 0) {
      deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link2 = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign$1(__assign$1({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link2, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.cleanup(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link2, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result) {
      var hasErrors = isNonEmptyArray(result.errors);
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors: result.errors
          }));
        }
        queryInfo.markResult(result, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = result.errors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults2 = this.defaultOptions.watchQuery;
    var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults2 && defaults2.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults2 && defaults2.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.cleanup(function() {
      _this.fetchCancelFns.delete(queryId);
      if (queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
    });
    return concast;
  };
  QueryManager2.prototype.refetchQueries = function(_a2) {
    var _this = this;
    var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch, diff2, lastDiff) {
          var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff2, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff: diff2 });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a3, queryId) {
        var oq = _a3.oq, lastDiff = _a3.lastDiff, diff2 = _a3.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff2) {
            var info = oq["queryInfo"];
            info.reset();
            diff2 = info.getDiff();
          }
          result = onQueryUpdated(oq, diff2, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
    var _this = this;
    var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: this.transform(query).document,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff3, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff3.result;
      if (__DEV__ && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff3.missing);
      }
      var fromData = function(data2) {
        return Observable.of(__assign$1({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff3.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff2 = readCache();
        if (diff2.complete) {
          return [
            resultsFromCache(diff2, queryInfo.markReady())
          ];
        }
        if (returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff2),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-and-network": {
        var diff2 = readCache();
        if (diff2.complete || returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff2),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-only":
        return [
          resultsFromCache(readCache(), queryInfo.markReady())
        ];
      case "network-only":
        if (shouldNotify) {
          return [
            resultsFromCache(readCache()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "no-cache":
        if (shouldNotify) {
          return [
            resultsFromCache(queryInfo.getDiff()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "standby":
        return [];
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign$1(__assign$1({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var hasSuggestedDevtools = false;
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache2 = options.cache, _a2 = options.ssrMode, ssrMode = _a2 === void 0 ? false : _a2, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link2 = options.link;
    if (!link2) {
      link2 = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache2) {
      throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
    }
    this.link = link2;
    this.cache = cache2;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && typeof window === "object") {
      window.__APOLLO_CLIENT__ = this;
    }
    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;
      if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var nav = window.navigator;
        var ua2 = nav && nav.userAgent;
        var url = void 0;
        if (typeof ua2 === "string") {
          if (ua2.indexOf("Chrome/") > -1) {
            url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
          } else if (ua2.indexOf("Firefox/") > -1) {
            url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
          }
        }
        if (url) {
          __DEV__ && invariant$1.log("Download the Apollo DevTools for a better development experience: " + url);
        }
      }
    }
    this.version = version;
    this.localState = new LocalState({
      cache: cache2,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign$1(__assign$1({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    __DEV__ ? invariant$1(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant$1(options.fetchPolicy !== "cache-and-network", 8);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign$1(__assign$1({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb2) {
    this.devToolsHookCb = cb2;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb2) {
    var _this = this;
    this.resetStoreCallbacks.push(cb2);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c2) {
        return c2 !== cb2;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb2) {
    var _this = this;
    this.clearStoreCallbacks.push(cb2);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c2) {
        return c2 !== cb2;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map2 = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map2.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error) {
      __DEV__ && invariant$1.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize$2(string2) {
  return string2.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize$2(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions2 = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions2.push(fragmentDefinition);
      }
    } else {
      definitions2.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions: definitions2 });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize$2(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse$2(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }
    result += literals[i + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
  var context = react.exports.createContext[contextKey];
  if (!context) {
    Object.defineProperty(react.exports.createContext, contextKey, {
      value: context = react.exports.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = "ApolloContext";
  }
  return context;
}
var ApolloProvider = function(_a2) {
  var client2 = _a2.client, children = _a2.children;
  var ApolloContext = getApolloContext();
  return react.exports.createElement(ApolloContext.Consumer, null, function(context) {
    if (context === void 0) {
      context = {};
    }
    if (client2 && context.client !== client2) {
      context = Object.assign({}, context, { client: client2 });
    }
    __DEV__ ? invariant$1(context.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : invariant$1(context.client, 26);
    return react.exports.createElement(ApolloContext.Provider, { value: context }, children);
  });
};
function useApolloClient(override) {
  var context = react.exports.useContext(getApolloContext());
  var client2 = override || context.client;
  __DEV__ ? invariant$1(!!client2, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : invariant$1(!!client2, 29);
  return client2;
}
var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React$1[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
  var value = getSnapshot();
  if (__DEV__ && !didWarnUncachedGetSnapshot && value !== getSnapshot()) {
    didWarnUncachedGetSnapshot = true;
    __DEV__ && invariant$1.error("The result of getSnapshot should be cached to avoid an infinite loop");
  }
  var _a2 = react.exports.useState({ inst: { value, getSnapshot } }), inst = _a2[0].inst, forceUpdate = _a2[1];
  if (canUseLayoutEffect) {
    react.exports.useLayoutEffect(function() {
      Object.assign(inst, { value, getSnapshot });
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    }, [subscribe, value, getSnapshot]);
  } else {
    Object.assign(inst, { value, getSnapshot });
  }
  react.exports.useEffect(function() {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    return subscribe(function handleStoreChange() {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    });
  }, [subscribe]);
  return value;
};
function checkIfSnapshotChanged(_a2) {
  var value = _a2.value, getSnapshot = _a2.getSnapshot;
  try {
    return value !== getSnapshot();
  } catch (_b) {
    return true;
  }
}
var DocumentType;
(function(DocumentType2) {
  DocumentType2[DocumentType2["Query"] = 0] = "Query";
  DocumentType2[DocumentType2["Mutation"] = 1] = "Mutation";
  DocumentType2[DocumentType2["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache$1 = /* @__PURE__ */ new Map();
function operationName(type) {
  var name;
  switch (type) {
    case DocumentType.Query:
      name = "Query";
      break;
    case DocumentType.Mutation:
      name = "Mutation";
      break;
    case DocumentType.Subscription:
      name = "Subscription";
      break;
  }
  return name;
}
function parser(document2) {
  var cached = cache$1.get(document2);
  if (cached)
    return cached;
  var variables, type, name;
  __DEV__ ? invariant$1(!!document2 && !!document2.kind, "Argument of ".concat(document2, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : invariant$1(!!document2 && !!document2.kind, 30);
  var fragments = [];
  var queries = [];
  var mutations = [];
  var subscriptions = [];
  for (var _i = 0, _a2 = document2.definitions; _i < _a2.length; _i++) {
    var x2 = _a2[_i];
    if (x2.kind === "FragmentDefinition") {
      fragments.push(x2);
      continue;
    }
    if (x2.kind === "OperationDefinition") {
      switch (x2.operation) {
        case "query":
          queries.push(x2);
          break;
        case "mutation":
          mutations.push(x2);
          break;
        case "subscription":
          subscriptions.push(x2);
          break;
      }
    }
  }
  __DEV__ ? invariant$1(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : invariant$1(!fragments.length || (queries.length || mutations.length || subscriptions.length), 31);
  __DEV__ ? invariant$1(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(document2, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") + "subscriptions and ".concat(mutations.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : invariant$1(queries.length + mutations.length + subscriptions.length <= 1, 32);
  type = queries.length ? DocumentType.Query : DocumentType.Mutation;
  if (!queries.length && !mutations.length)
    type = DocumentType.Subscription;
  var definitions2 = queries.length ? queries : mutations.length ? mutations : subscriptions;
  __DEV__ ? invariant$1(definitions2.length === 1, "react-apollo only supports one definition per HOC. ".concat(document2, " had ") + "".concat(definitions2.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : invariant$1(definitions2.length === 1, 33);
  var definition2 = definitions2[0];
  variables = definition2.variableDefinitions || [];
  if (definition2.name && definition2.name.kind === "Name") {
    name = definition2.name.value;
  } else {
    name = "data";
  }
  var payload = { name, type, variables };
  cache$1.set(document2, payload);
  return payload;
}
function verifyDocumentType(document2, type) {
  var operation = parser(document2);
  var requiredOperationName = operationName(type);
  var usedOperationName = operationName(operation.type);
  __DEV__ ? invariant$1(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") + "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : invariant$1(operation.type === type, 34);
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client2, query) {
  var stateRef = react.exports.useRef();
  if (!stateRef.current || client2 !== stateRef.current.client || query !== stateRef.current.query) {
    stateRef.current = new InternalState(client2, query, stateRef.current);
  }
  var state = stateRef.current;
  var _a2 = react.exports.useState(0);
  _a2[0];
  var setTick = _a2[1];
  state.forceUpdate = function() {
    setTick(function(tick) {
      return tick + 1;
    });
  };
  return state;
}
var InternalState = function() {
  function InternalState2(client2, query, previous2) {
    this.client = client2;
    this.query = query;
    this.asyncResolveFns = /* @__PURE__ */ new Set();
    this.optionsToIgnoreOnce = new (canUseWeakSet ? WeakSet : Set)();
    this.ssrDisabledResult = maybeDeepFreeze({
      loading: true,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.loading
    });
    this.skipStandbyResult = maybeDeepFreeze({
      loading: false,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.ready
    });
    this.toQueryResultCache = new (canUseWeakMap ? WeakMap : Map)();
    verifyDocumentType(query, DocumentType.Query);
    var previousResult = previous2 && previous2.result;
    var previousData = previousResult && previousResult.data;
    if (previousData) {
      this.previousData = previousData;
    }
  }
  InternalState2.prototype.forceUpdate = function() {
    __DEV__ && invariant$1.warn("Calling default no-op implementation of InternalState#forceUpdate");
  };
  InternalState2.prototype.asyncUpdate = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.asyncResolveFns.add(resolve);
      _this.optionsToIgnoreOnce.add(_this.watchQueryOptions);
      _this.forceUpdate();
    });
  };
  InternalState2.prototype.useQuery = function(options) {
    var _this = this;
    this.renderPromises = react.exports.useContext(getApolloContext()).renderPromises;
    this.useOptions(options);
    var obsQuery = this.useObservableQuery();
    var result = useSyncExternalStore(react.exports.useCallback(function() {
      if (_this.renderPromises) {
        return function() {
        };
      }
      var onNext = function() {
        var previousResult = _this.result;
        var result2 = obsQuery.getCurrentResult();
        if (previousResult && previousResult.loading === result2.loading && previousResult.networkStatus === result2.networkStatus && equal(previousResult.data, result2.data)) {
          return;
        }
        _this.setResult(result2);
      };
      var onError = function(error) {
        var last = obsQuery["last"];
        subscription.unsubscribe();
        try {
          obsQuery.resetLastResults();
          subscription = obsQuery.subscribe(onNext, onError);
        } finally {
          obsQuery["last"] = last;
        }
        if (!hasOwnProperty$1.call(error, "graphQLErrors")) {
          throw error;
        }
        var previousResult = _this.result;
        if (!previousResult || previousResult && previousResult.loading || !equal(error, previousResult.error)) {
          _this.setResult({
            data: previousResult && previousResult.data,
            error,
            loading: false,
            networkStatus: NetworkStatus.error
          });
        }
      };
      var subscription = obsQuery.subscribe(onNext, onError);
      return function() {
        return subscription.unsubscribe();
      };
    }, [
      obsQuery,
      this.renderPromises,
      this.client.disableNetworkFetches
    ]), function() {
      return _this.getCurrentResult();
    }, function() {
      return _this.getCurrentResult();
    });
    this.unsafeHandlePartialRefetch(result);
    var queryResult = this.toQueryResult(result);
    if (!queryResult.loading && this.asyncResolveFns.size) {
      this.asyncResolveFns.forEach(function(resolve) {
        return resolve(queryResult);
      });
      this.asyncResolveFns.clear();
    }
    return queryResult;
  };
  InternalState2.prototype.useOptions = function(options) {
    var _a2;
    var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
    var currentWatchQueryOptions = this.watchQueryOptions;
    if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) || !equal(watchQueryOptions, currentWatchQueryOptions)) {
      this.watchQueryOptions = watchQueryOptions;
      if (currentWatchQueryOptions && this.observable) {
        this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
        this.observable.reobserve(this.getObsQueryOptions());
        this.previousData = ((_a2 = this.result) === null || _a2 === void 0 ? void 0 : _a2.data) || this.previousData;
        this.result = void 0;
      }
    }
    this.onCompleted = options.onCompleted || InternalState2.prototype.onCompleted;
    this.onError = options.onError || InternalState2.prototype.onError;
    if ((this.renderPromises || this.client.disableNetworkFetches) && this.queryHookOptions.ssr === false && !this.queryHookOptions.skip) {
      this.result = this.ssrDisabledResult;
    } else if (this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === "standby") {
      this.result = this.skipStandbyResult;
    } else if (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) {
      this.result = void 0;
    }
  };
  InternalState2.prototype.getObsQueryOptions = function() {
    var toMerge = [];
    var globalDefaults = this.client.defaultOptions.watchQuery;
    if (globalDefaults)
      toMerge.push(globalDefaults);
    if (this.queryHookOptions.defaultOptions) {
      toMerge.push(this.queryHookOptions.defaultOptions);
    }
    toMerge.push(compact(this.observable && this.observable.options, this.watchQueryOptions));
    return toMerge.reduce(mergeOptions);
  };
  InternalState2.prototype.createWatchQueryOptions = function(_a2) {
    var _b;
    if (_a2 === void 0) {
      _a2 = {};
    }
    var skip = _a2.skip;
    _a2.ssr;
    _a2.onCompleted;
    _a2.onError;
    _a2.displayName;
    _a2.defaultOptions;
    var otherOptions = __rest(_a2, ["skip", "ssr", "onCompleted", "onError", "displayName", "defaultOptions"]);
    var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
    if (this.renderPromises && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
      watchQueryOptions.fetchPolicy = "cache-first";
    }
    if (!watchQueryOptions.variables) {
      watchQueryOptions.variables = {};
    }
    if (skip) {
      var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
      Object.assign(watchQueryOptions, {
        initialFetchPolicy,
        fetchPolicy: "standby"
      });
    } else if (!watchQueryOptions.fetchPolicy) {
      watchQueryOptions.fetchPolicy = ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) || this.getDefaultFetchPolicy();
    }
    return watchQueryOptions;
  };
  InternalState2.prototype.getDefaultFetchPolicy = function() {
    var _a2, _b;
    return ((_a2 = this.queryHookOptions.defaultOptions) === null || _a2 === void 0 ? void 0 : _a2.fetchPolicy) || ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "cache-first";
  };
  InternalState2.prototype.onCompleted = function(data) {
  };
  InternalState2.prototype.onError = function(error) {
  };
  InternalState2.prototype.useObservableQuery = function() {
    var obsQuery = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(this.getObsQueryOptions());
    this.obsQueryFields = react.exports.useMemo(function() {
      return {
        refetch: obsQuery.refetch.bind(obsQuery),
        reobserve: obsQuery.reobserve.bind(obsQuery),
        fetchMore: obsQuery.fetchMore.bind(obsQuery),
        updateQuery: obsQuery.updateQuery.bind(obsQuery),
        startPolling: obsQuery.startPolling.bind(obsQuery),
        stopPolling: obsQuery.stopPolling.bind(obsQuery),
        subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery)
      };
    }, [obsQuery]);
    var ssrAllowed = !(this.queryHookOptions.ssr === false || this.queryHookOptions.skip);
    if (this.renderPromises && ssrAllowed) {
      this.renderPromises.registerSSRObservable(obsQuery);
      if (obsQuery.getCurrentResult().loading) {
        this.renderPromises.addObservableQueryPromise(obsQuery);
      }
    }
    return obsQuery;
  };
  InternalState2.prototype.setResult = function(nextResult) {
    var previousResult = this.result;
    if (previousResult && previousResult.data) {
      this.previousData = previousResult.data;
    }
    this.result = nextResult;
    this.forceUpdate();
    this.handleErrorOrCompleted(nextResult);
  };
  InternalState2.prototype.handleErrorOrCompleted = function(result) {
    if (!result.loading) {
      if (result.error) {
        this.onError(result.error);
      } else if (result.data) {
        this.onCompleted(result.data);
      }
    }
  };
  InternalState2.prototype.getCurrentResult = function() {
    if (!this.result) {
      this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
    }
    return this.result;
  };
  InternalState2.prototype.toQueryResult = function(result) {
    var queryResult = this.toQueryResultCache.get(result);
    if (queryResult)
      return queryResult;
    var data = result.data;
    result.partial;
    var resultWithoutPartial = __rest(result, ["data", "partial"]);
    this.toQueryResultCache.set(result, queryResult = __assign$1(__assign$1(__assign$1({ data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
    if (!queryResult.error && isNonEmptyArray(result.errors)) {
      queryResult.error = new ApolloError({ graphQLErrors: result.errors });
    }
    return queryResult;
  };
  InternalState2.prototype.unsafeHandlePartialRefetch = function(result) {
    if (result.partial && this.queryHookOptions.partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && this.observable.options.fetchPolicy !== "cache-only") {
      Object.assign(result, {
        loading: true,
        networkStatus: NetworkStatus.refetch
      });
      this.observable.refetch();
    }
  };
  return InternalState2;
}();
function useMutation(mutation, options) {
  var client2 = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  verifyDocumentType(mutation, DocumentType.Mutation);
  var _a2 = react.exports.useState({
    called: false,
    loading: false,
    client: client2
  }), result = _a2[0], setResult = _a2[1];
  var ref = react.exports.useRef({
    result,
    mutationId: 0,
    isMounted: true,
    client: client2,
    mutation,
    options
  });
  {
    Object.assign(ref.current, { client: client2, options, mutation });
  }
  var execute2 = react.exports.useCallback(function(executeOptions) {
    if (executeOptions === void 0) {
      executeOptions = {};
    }
    var _a3 = ref.current, client3 = _a3.client, options2 = _a3.options, mutation2 = _a3.mutation;
    var baseOptions = __assign$1(__assign$1({}, options2), { mutation: mutation2 });
    if (!ref.current.result.loading && !baseOptions.ignoreResults) {
      setResult(ref.current.result = {
        loading: true,
        error: void 0,
        data: void 0,
        called: true,
        client: client3
      });
    }
    var mutationId = ++ref.current.mutationId;
    var clientOptions = mergeOptions(baseOptions, executeOptions);
    return client3.mutate(clientOptions).then(function(response) {
      var _a4, _b, _c;
      var data = response.data, errors = response.errors;
      var error = errors && errors.length > 0 ? new ApolloError({ graphQLErrors: errors }) : void 0;
      if (mutationId === ref.current.mutationId && !clientOptions.ignoreResults) {
        var result_1 = {
          called: true,
          loading: false,
          data,
          error,
          client: client3
        };
        if (ref.current.isMounted && !equal(ref.current.result, result_1)) {
          setResult(ref.current.result = result_1);
        }
      }
      (_b = (_a4 = ref.current.options) === null || _a4 === void 0 ? void 0 : _a4.onCompleted) === null || _b === void 0 ? void 0 : _b.call(_a4, response.data);
      (_c = executeOptions.onCompleted) === null || _c === void 0 ? void 0 : _c.call(executeOptions, response.data);
      return response;
    }).catch(function(error) {
      var _a4, _b, _c, _d;
      if (mutationId === ref.current.mutationId && ref.current.isMounted) {
        var result_2 = {
          loading: false,
          error,
          data: void 0,
          called: true,
          client: client3
        };
        if (!equal(ref.current.result, result_2)) {
          setResult(ref.current.result = result_2);
        }
      }
      if (((_a4 = ref.current.options) === null || _a4 === void 0 ? void 0 : _a4.onError) || clientOptions.onError) {
        (_c = (_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onError) === null || _c === void 0 ? void 0 : _c.call(_b, error);
        (_d = executeOptions.onError) === null || _d === void 0 ? void 0 : _d.call(executeOptions, error);
        return { data: void 0, errors: error };
      }
      throw error;
    });
  }, []);
  var reset = react.exports.useCallback(function() {
    setResult({ called: false, loading: false, client: client2 });
  }, []);
  react.exports.useEffect(function() {
    ref.current.isMounted = true;
    return function() {
      ref.current.isMounted = false;
    };
  }, []);
  return [execute2, __assign$1({ reset }, result)];
}
function setContext(setter) {
  return new ApolloLink(function(operation, forward) {
    var request = __rest(operation, []);
    return new Observable(function(observer) {
      var handle;
      var closed = false;
      Promise.resolve(request).then(function(req) {
        return setter(req, operation.getContext());
      }).then(operation.setContext).then(function() {
        if (closed)
          return;
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      }).catch(observer.error.bind(observer));
      return function() {
        closed = true;
        if (handle)
          handle.unsubscribe();
      };
    });
  });
}
var globals = "";
const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;
const GET_NOTE = gql`
  query GetNoteById($noteId: String!) {
    note(noteId: $noteId) {
      _id
      content
      author {
        _id
        username
        avatar
      }
      favoriteCount
      updatedAt
      createdAt
    }
  }
`;
const GET_NOTES = gql`
  query NoteFeed($feedData: NoteFeedDto) {
    noteFeed(feedData: $feedData) {
      cursor
      hasNextPage
      notes {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;
const GET_MY_NOTES = gql`
  query CurrentUser {
    currentUser {
      _id
      username
      notes {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;
const GET_MY_FAVORITES = gql`
  query CurrentUser {
    currentUser {
      _id
      username
      favorites {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;
const GET_ME = gql`
  query CurrentUser {
    currentUser {
      _id
      favorites {
        _id
      }
    }
  }
`;
const NEW_NOTE = gql`
  mutation createNote($noteData: CreateNoteDto!) {
    createNote(noteData: $noteData) {
      _id
      content
      createdAt
      favoriteCount
      favoritedBy {
        _id
        username
      }
      author {
        _id
        username
      }
    }
  }
`;
const EDIT_NOTE = gql`
  mutation updateNote($noteData: UpdateNoteDto!) {
    updateNote(noteData: $noteData) {
      _id
      content
      createdAt
      favoriteCount
      favoritedBy {
        _id
        username
      }
      author {
        _id
        username
      }
    }
  }
`;
const DELETE_NOTE = gql`
  mutation deleteNote($noteId: String!) {
    deleteNote(noteId: $noteId)
  }
`;
const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($noteId: String!) {
    toggleFavorite(noteId: $noteId) {
      _id
      favoriteCount
    }
  }
`;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = react.exports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a.key !== void 0 && (e2 = "" + a.key);
  a.ref !== void 0 && (h2 = a.ref);
  for (b2 in a)
    m$1.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      d2[b2] === void 0 && (d2[b2] = a[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const HomePage = (_props) => {
  const [limit, setLimit] = React.useState(2);
  const {
    data,
    loading,
    error,
    fetchMore
  } = useQuery(GET_NOTES, {
    variables: {
      feedData: {
        limit
      }
    }
  });
  if (loading)
    return /* @__PURE__ */ jsx("p", {
      children: "Loading..."
    });
  if (error)
    return /* @__PURE__ */ jsx("p", {
      children: "Error fetching notes"
    });
  const notes = data.noteFeed.notes;
  return /* @__PURE__ */ jsxs("div", {
    className: "w-100",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "m-[auto] flex justify-end items-center mb-3",
      children: [/* @__PURE__ */ jsxs("span", {
        className: "mr-3",
        children: ["Limit: ", limit]
      }), /* @__PURE__ */ jsxs("div", {
        className: "display-block w-[28px] border-[1px]",
        children: [/* @__PURE__ */ jsx("button", {
          className: "w-full border-b-[1px]",
          onClick: () => setLimit(limit + 1),
          children: /* @__PURE__ */ jsx("span", {
            className: "material-symbols-outlined text-[16px]",
            children: "expand_less"
          })
        }), /* @__PURE__ */ jsx("button", {
          className: "w-full",
          onClick: () => setLimit(Math.max(1, limit - 1)),
          children: /* @__PURE__ */ jsx("span", {
            className: "material-symbols-outlined text-[16px]",
            children: "expand_more"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(NoteList, {
      notes
    }), data.noteFeed.hasNextPage && /* @__PURE__ */ jsx("button", {
      className: "button m-[auto] rounded-md",
      onClick: () => fetchMore({
        variables: {
          feedData: {
            cursor: data.noteFeed.cursor,
            limit
          }
        },
        updateQuery: (previousResult, {
          fetchMoreResult
        }) => {
          return {
            noteFeed: {
              cursor: fetchMoreResult.noteFeed.cursor,
              hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
              notes: [...previousResult.noteFeed.notes, ...fetchMoreResult.noteFeed.notes],
              __typename: "noteFeed"
            }
          };
        }
      }),
      children: "Load more"
    })]
  });
};
const protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  const url = (uri || "").trim();
  const first = url.charAt(0);
  if (first === "#" || first === "/") {
    return url;
  }
  const colon = url.indexOf(":");
  if (colon === -1) {
    return url;
  }
  let index2 = -1;
  while (++index2 < protocols.length) {
    const protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }
  index2 = url.indexOf("?");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  index2 = url.indexOf("#");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  return "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer = function isBuffer2(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point$1(value);
  }
  return "";
}
function point$1(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point$1(pos && pos.start) + "-" + point$1(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
class VFileMessage extends Error {
  constructor(reason, place, origin) {
    const parts = [null, null];
    let position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    super();
    if (typeof place === "string") {
      origin = place;
      place = void 0;
    }
    if (typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position2 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position2 = place;
      } else if ("line" in place || "column" in place) {
        position2.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.fatal;
    this.line = position2.start.line;
    this.column = position2.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position2;
    this.actual;
    this.expected;
    this.file;
    this.url;
    this.note;
  }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
const path = { basename, dirname, extname, join, sep: "/" };
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath$1(path2);
  let start = 0;
  let end = -1;
  let index2 = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index2--) {
      if (path2.charCodeAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (ext === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index2--) {
    if (path2.charCodeAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extIndex > -1) {
        if (path2.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            end = index2;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath$1(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path2.length;
  let unmatchedSlash;
  while (--index2) {
    if (path2.charCodeAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path2.charCodeAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath$1(path2);
  let index2 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code2 = path2.charCodeAt(index2);
    if (code2 === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code2 === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath$1(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize$1(joined);
}
function normalize$1(path2) {
  assertPath$1(path2);
  const absolute = path2.charCodeAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.charCodeAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code2;
  let lastSlashIndex;
  while (++index2 <= path2.length) {
    if (index2 < path2.length) {
      code2 = path2.charCodeAt(index2);
    } else if (code2 === 47) {
      break;
    } else {
      code2 = 47;
    }
    if (code2 === 47) {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index2);
        } else {
          result = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code2 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath$1(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
  }
}
const proc = { cwd };
function cwd() {
  return "/";
}
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
}
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`");
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.charCodeAt(index2) === 37 && pathname.charCodeAt(index2 + 1) === 50) {
      const third = pathname.charCodeAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError("File URL path must not include encoded / characters");
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}
const order = ["history", "path", "basename", "stem", "extname", "dirname"];
class VFile {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || isBuffer(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = proc.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop))
        this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  get dirname() {
    return typeof this.path === "string" ? path.dirname(this.path) : void 0;
  }
  set dirname(dirname2) {
    assertPath(this.basename, "dirname");
    this.path = path.join(dirname2 || "", this.basename);
  }
  get basename() {
    return typeof this.path === "string" ? path.basename(this.path) : void 0;
  }
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = path.join(this.dirname || "", basename2);
  }
  get extname() {
    return typeof this.path === "string" ? path.extname(this.path) : void 0;
  }
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath(this.dirname, "extname");
    if (extname2) {
      if (extname2.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = path.join(this.dirname, this.stem + (extname2 || ""));
  }
  get stem() {
    return typeof this.path === "string" ? path.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = path.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
}
function assertPart(part, name) {
  if (part && part.includes(path.sep)) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + path.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function bail(error) {
  if (error) {
    throw error;
  }
}
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray$1 = function isArray2(arr) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === "[object Array]";
};
var isPlainObject$1 = function isPlainObject2(obj) {
  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, "constructor");
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  var key;
  for (key in obj) {
  }
  return typeof key === "undefined" || hasOwn.call(obj, key);
};
var setProperty = function setProperty2(target, options) {
  if (defineProperty && options.name === "__proto__") {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name) {
  if (name === "__proto__") {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend$1 = function extend2() {
  var options, name, src, copy, copyIsArray, clone2;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (target == null || typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name);
        if (target !== copy) {
          if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray$1(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone2 = src && isArray$1(src) ? src : [];
            } else {
              clone2 = src && isPlainObject$1(src) ? src : {};
            }
            setProperty(target, { name, newValue: extend2(deep, clone2, copy) });
          } else if (typeof copy !== "undefined") {
            setProperty(target, { name, newValue: copy });
          }
        }
      }
    }
  }
  return target;
};
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype2 = Object.getPrototypeOf(value);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap$1(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap$1(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
const unified = base().freeze();
const own$7 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify2;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process2;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data(extend$1(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own$7.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0)
      ;
    else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add2(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0)
        ;
      else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add2(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry = attachers[index2];
          break;
        }
      }
      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value2)) {
          value2 = extend$1(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse2(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser2 = processor.Parser;
    assertParser("parse", Parser2);
    if (newable(Parser2, "parse")) {
      return new Parser2(String(file), file).parse();
    }
    return Parser2(String(file), file);
  }
  function stringify2(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process2(doc, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null)
            ;
          else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys$1(value.prototype) || name in value.prototype);
}
function keys$1(value) {
  let key;
  for (key in value) {
    if (own$7.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!isPlainObject(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || isBuffer(value);
}
function toString$1(node, options) {
  var { includeImageAlt = true } = options || {};
  return one$1(node, includeImageAlt);
}
function one$1(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all$1(node.children, includeImageAlt) || Array.isArray(node) && all$1(node, includeImageAlt)) || "";
}
function all$1(values, includeImageAlt) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$1(values[index2], includeImageAlt);
  }
  return result.join("");
}
function splice(list2, start, remove2, items) {
  const end = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove2 = remove2 > 0 ? remove2 : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove2);
    [].splice.apply(list2, parameters);
  } else {
    if (remove2)
      [].splice.apply(list2, [start, remove2]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      [].splice.apply(list2, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe2 = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe2 || (all2[hook] = {});
    const right = extension2[hook];
    let code2;
    for (code2 in right) {
      if (!hasOwnProperty.call(left, code2))
        left[code2] = [];
      const value = right[code2];
      constructs(left[code2], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list2) {
  let index2 = -1;
  const before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  splice(existing, 0, 0, before);
}
const unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return code2 !== null && (code2 < 32 || code2 === 127);
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
const unicodeWhitespace = regexCheck(/\s/);
const unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check2;
  function check2(code2) {
    return code2 !== null && regex.test(String.fromCharCode(code2));
  }
}
function factorySpace(effects, ok2, type, max2) {
  const limit = max2 ? max2 - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}
const content$1 = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    effects.enter("paragraph");
    return lineStart(code2);
  }
  function lineStart(code2) {
    const token2 = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token2;
    }
    previous2 = token2;
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code2);
    return data;
  }
}
const document$2 = {
  tokenize: initializeDocument
};
const containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code2) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point2;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point2 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
      return checkNewContainers(code2);
    }
    return start(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code2);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code2);
      }
      self2.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self2.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
  }
  function thereIsANewContainer(code2) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code2);
  }
  function documentContinued(code2) {
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
  }
  function containerContinue(code2) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code2);
    return flowContinue;
  }
  function writeToChild(token2, eof) {
    const stream = self2.sliceStream(token2);
    if (eof)
      stream.push(null);
    token2.previous = childToken;
    if (childToken)
      childToken.next = token2;
    childToken = token2;
    childFlow.defineSkip(token2.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token2.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point2;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point2 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
const attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text2;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset2;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text2 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text2, context]
          ]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [
            ["exit", text2, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset2 = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset2 = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset2 - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code2) {
    effects.enter("attentionSequence");
    marker = code2;
    return sequence(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return sequence;
    }
    const token2 = effects.exit("attentionSequence");
    const after = classifyCharacter(code2);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token2._open = Boolean(marker === 42 ? open : open && (before || !close));
    token2._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code2);
  }
}
function movePoint(point2, offset2) {
  point2.column += offset2;
  point2.offset += offset2;
  point2._bufferIndex += offset2;
}
const autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code2) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code2) ? emailAtext(code2) : nok(code2);
  }
  function schemeOrEmailAtext(code2) {
    return code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2) ? schemeInsideOrEmailAtext(code2) : emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      return urlInside;
    }
    if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
      effects.consume(code2);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code2);
  }
  function urlInside(code2) {
    if (code2 === 62) {
      effects.exit("autolinkProtocol");
      return end(code2);
    }
    if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return urlInside;
  }
  function emailAtext(code2) {
    if (code2 === 64) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code2)) {
      effects.consume(code2);
      return emailAtext;
    }
    return nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code2 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code2);
    }
    return emailValue(code2);
  }
  function emailValue(code2) {
    if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
      effects.consume(code2);
      return code2 === 45 ? emailValue : emailLabel;
    }
    return nok(code2);
  }
  function end(code2) {
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok2;
  }
}
const blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    if (code2 === 62) {
      const state = self2.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code2);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownSpace(code2)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code2);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code2);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}
const characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code2) {
    if (asciiPunctuation(code2)) {
      effects.enter("characterEscapeValue");
      effects.consume(code2);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code2);
  }
}
const element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference2 = "&" + value + ";";
  element.innerHTML = characterReference2;
  const char = element.textContent;
  if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") {
    return false;
  }
  return char === characterReference2 ? false : char;
}
const characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self2 = this;
  let size = 0;
  let max2;
  let test;
  return start;
  function start(code2) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code2);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max2 = 31;
    test = asciiAlphanumeric;
    return value(code2);
  }
  function numeric(code2) {
    if (code2 === 88 || code2 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max2 = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max2 = 7;
    test = asciiDigit;
    return value(code2);
  }
  function value(code2) {
    let token2;
    if (code2 === 59 && size) {
      token2 = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self2.sliceSerialize(token2))) {
        return nok(code2);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code2) && size++ < max2) {
      effects.consume(code2);
      return value;
    }
    return nok(code2);
  }
}
const codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self2 = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code2;
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code2) : factorySpace(effects, infoOpen, "whitespace")(code2);
  }
  function infoOpen(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code2);
  }
  function info(code2) {
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return info;
  }
  function infoAfter(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code2);
  }
  function meta(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return meta;
  }
  function openAfter(code2) {
    effects.exit("codeFencedFence");
    return self2.interrupt ? ok2(code2) : contentStart(code2);
  }
  function contentStart(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code2);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code2);
  }
  function contentContinue(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return contentStart(code2);
    }
    effects.consume(code2);
    return contentContinue;
  }
  function after(code2) {
    effects.exit("codeFenced");
    return ok2(code2);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    const self3 = this;
    return start2;
    function start2(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self3.parser.lazy[self3.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code2) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code2);
    }
    function closingSequence(code2) {
      if (code2 === marker) {
        effects2.consume(code2);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code2);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code2);
    }
    function closingSequenceEnd(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects2.exit("codeFencedFence");
        return ok3(code2);
      }
      return nok2(code2);
    }
  }
}
const codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
const indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterStartPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code2) : nok(code2);
  }
  function afterPrefix(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code2);
    }
    effects.enter("codeFlowValue");
    return content2(code2);
  }
  function content2(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code2);
    }
    effects.consume(code2);
    return content2;
  }
  function after(code2) {
    effects.exit("codeIndented");
    return ok2(code2);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return start;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? start(code2) : nok(code2);
  }
}
const codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let sizeOpen = 0;
  let size;
  let token2;
  return start;
  function start(code2) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code2);
  }
  function openingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code2);
  }
  function gap(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 96) {
      token2 = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code2);
    }
    if (code2 === 32) {
      effects.enter("space");
      effects.consume(code2);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
      effects.exit("codeTextData");
      return gap(code2);
    }
    effects.consume(code2);
    return data;
  }
  function closingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code2);
    }
    token2.type = "codeTextData";
    return data(code2);
  }
}
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token2 = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token2._tokenizer || context.parser[token2.contentType](token2.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index2 = -1;
  let current = token2;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token2;
  while (++index2 < childEvents.length) {
    if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice2 = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice2.length - 1]);
    splice(events, start2, 2, slice2);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}
const content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
const continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return start;
  function start(code2) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      return contentEnd(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code2);
    }
    effects.consume(code2);
    return data;
  }
  function contentEnd(code2) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code2);
  }
  function contentContinue(code2) {
    effects.consume(code2);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code2) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code2);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok2)(code2);
  }
}
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max2) {
  const limit = max2 || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code2) {
    if (code2 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code2 === null || code2 === 41 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code2);
  }
  function destinationEnclosedBefore(code2) {
    if (code2 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code2);
  }
  function destinationEnclosed(code2) {
    if (code2 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code2);
    }
    if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code2) {
    if (code2 === 60 || code2 === 62 || code2 === 92) {
      effects.consume(code2);
      return destinationEnclosed;
    }
    return destinationEnclosed(code2);
  }
  function destinationRaw(code2) {
    if (code2 === 40) {
      if (++balance > limit)
        return nok(code2);
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok2(code2);
      }
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      if (balance)
        return nok(code2);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code2);
    }
    if (asciiControl(code2))
      return nok(code2);
    effects.consume(code2);
    return code2 === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code2) {
    if (code2 === 40 || code2 === 41 || code2 === 92) {
      effects.consume(code2);
      return destinationRaw;
    }
    return destinationRaw(code2);
  }
}
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 && !data || code2 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs || size > 999) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code2);
  }
  function label(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    data = data || !markdownSpace(code2);
    return code2 === 92 ? labelEscape : label;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return label;
    }
    return label(code2);
  }
}
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    marker = code2 === 40 ? 41 : code2;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code2) {
    if (code2 === marker) {
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atTitleBreak(code2);
  }
  function atTitleBreak(code2) {
    if (code2 === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code2);
  }
  function title(code2) {
    if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      return atTitleBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? titleEscape : title;
  }
  function titleEscape(code2) {
    if (code2 === marker || code2 === 92) {
      effects.consume(code2);
      return title;
    }
    return title(code2);
  }
}
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code2);
    }
    return ok2(code2);
  }
}
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
const titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code2) {
    effects.enter("definition");
    return factoryLabel.call(self2, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code2);
  }
  function labelAfter(code2) {
    identifier = normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code2);
  }
  function after(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("definition");
      if (!self2.parser.defined.includes(identifier)) {
        self2.parser.defined.push(identifier);
      }
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, before)(code2) : nok(code2);
  }
  function before(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2);
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (markdownLineEnding(code2)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content2;
  let text2;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text2 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content2, context],
      ["enter", text2, context],
      ["exit", text2, context],
      ["exit", content2, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  const self2 = this;
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code2);
  }
  function fenceOpenInside(code2) {
    if (code2 === 35 && size++ < 6) {
      effects.consume(code2);
      return fenceOpenInside;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingSequence");
      return self2.interrupt ? ok2(code2) : headingBreak(code2);
    }
    return nok(code2);
  }
  function headingBreak(code2) {
    if (code2 === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("atxHeading");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, headingBreak, "whitespace")(code2);
    }
    effects.enter("atxHeadingText");
    return data(code2);
  }
  function sequence(code2) {
    if (code2 === 35) {
      effects.consume(code2);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingText");
      return headingBreak(code2);
    }
    effects.consume(code2);
    return data;
  }
}
const htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const htmlRawNames = ["pre", "script", "style", "textarea"];
const htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
const nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self2 = this;
  let kind;
  let startTag;
  let buffer;
  let index2;
  let marker;
  return start;
  function start(code2) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationStart;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      kind = 3;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      startTag = true;
      return tagName;
    }
    return nok(code2);
  }
  function declarationStart(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      kind = 2;
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      kind = 5;
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      kind = 4;
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return self2.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function cdataOpenInside(code2) {
    if (code2 === buffer.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer.length ? self2.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function tagName(code2) {
    if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      if (code2 !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self2.interrupt ? ok2(code2) : continuation(code2);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;
        if (code2 === 47) {
          effects.consume(code2);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok2(code2) : continuation(code2);
      }
      kind = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code2) : startTag ? completeAttributeNameBefore(code2) : completeClosingTagAfter(code2);
    }
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function basicSelfClosing(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return self2.interrupt ? ok2 : continuation;
    }
    return nok(code2);
  }
  function completeClosingTagAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeClosingTagAfter;
    }
    return completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return completeEnd;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameBefore;
    }
    return completeEnd(code2);
  }
  function completeAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code2);
  }
  function completeAttributeValueQuoted(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    if (code2 === marker) {
      effects.consume(code2);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code2);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
      return completeAttributeNameAfter(code2);
    }
    effects.consume(code2);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
      return completeAttributeNameBefore(code2);
    }
    return nok(code2);
  }
  function completeEnd(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function completeAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAfter;
    }
    return code2 === null || markdownLineEnding(code2) ? continuation(code2) : nok(code2);
  }
  function continuation(code2) {
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationCommentInside;
    }
    if (code2 === 60 && kind === 1) {
      effects.consume(code2);
      return continuationRawTagOpen;
    }
    if (code2 === 62 && kind === 4) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 63 && kind === 3) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    if (code2 === 93 && kind === 5) {
      effects.consume(code2);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code2) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return continuationAtLineEnding(code2);
    }
    effects.consume(code2);
    return continuation;
  }
  function continuationAtLineEnding(code2) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code2);
  }
  function htmlContinueStart(code2) {
    if (code2 === null) {
      return done(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code2);
    }
    effects.enter("htmlFlowData");
    return continuation(code2);
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self2.parser.lazy[self2.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function continuationCommentInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationRawEndTag(code2) {
    if (code2 === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code2);
      return continuationClose;
    }
    if (asciiAlpha(code2) && buffer.length < 8) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationCharacterDataInside(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationClose(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return done(code2);
    }
    effects.consume(code2);
    return continuationClose;
  }
  function done(code2) {
    effects.exit("htmlFlow");
    return ok2(code2);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok2, nok);
  }
}
const htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self2 = this;
  let marker;
  let buffer;
  let index2;
  let returnState;
  return start;
  function start(code2) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instruction;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentOpen;
    }
    if (code2 === 91) {
      effects.consume(code2);
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return declaration;
    }
    return nok(code2);
  }
  function commentOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentStart;
    }
    return nok(code2);
  }
  function commentStart(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentStartDash;
    }
    return comment(code2);
  }
  function commentStartDash(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    return comment(code2);
  }
  function comment(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = comment;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return comment;
  }
  function commentClose(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return end;
    }
    return comment(code2);
  }
  function cdataOpen(code2) {
    if (code2 === buffer.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer.length ? cdata : cdataOpen;
    }
    return nok(code2);
  }
  function cdata(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = cdata;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return cdata;
  }
  function cdataClose(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function cdataEnd(code2) {
    if (code2 === 62) {
      return end(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function declaration(code2) {
    if (code2 === null || code2 === 62) {
      return end(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = declaration;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return declaration;
  }
  function instruction(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instructionClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = instruction;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return instruction;
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return nok(code2);
  }
  function tagClose(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    if (markdownLineEnding(code2)) {
      returnState = tagCloseBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagCloseBetween;
    }
    return end(code2);
  }
  function tagOpen(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenBetween(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return end;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenBetween;
    }
    return end(code2);
  }
  function tagOpenAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code2);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    if (code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code2) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, afterPrefix, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code2) {
    effects.enter("htmlTextData");
    return returnState(code2);
  }
  function end(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code2);
  }
}
const labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
const resourceConstruct = {
  tokenize: tokenizeResource
};
const fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
const collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  let token2;
  while (++index2 < events.length) {
    token2 = events[index2][1];
    if (token2.type === "labelImage" || token2.type === "labelLink" || token2.type === "labelEnd") {
      events.splice(index2 + 1, token2.type === "labelImage" ? 4 : 2);
      token2.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset2 = 0;
  let token2;
  let open;
  let close;
  let media;
  while (index2--) {
    token2 = events[index2][1];
    if (open) {
      if (token2.type === "link" || token2.type === "labelLink" && token2._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token2.type === "labelLink") {
        token2._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token2.type === "labelImage" || token2.type === "labelLink") && !token2._balanced) {
        open = index2;
        if (token2.type !== "labelLink") {
          offset2 = 2;
          break;
        }
      }
    } else if (token2.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text2 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset2 + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset2 + 3));
  media = push(media, [["enter", text2, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset2 + 4, close - 3), context));
  media = push(media, [
    ["exit", text2, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart) {
      return nok(code2);
    }
    if (labelStart._inactive)
      return balanced(code2);
    defined = self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code2) {
    if (code2 === 40) {
      return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code2);
    }
    if (code2 === 91) {
      return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code2);
    }
    return defined ? ok2(code2) : balanced(code2);
  }
  function balanced(code2) {
    labelStart._balanced = true;
    return nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code2);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code2) {
    if (code2 === 41) {
      return end(code2);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
  }
  function destinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, between)(code2) : end(code2);
  }
  function between(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2);
    }
    return end(code2);
  }
  function end(code2) {
    if (code2 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code2);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    return factoryLabel.call(self2, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code2);
  }
  function afterLabel(code2) {
    return self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) ? ok2(code2) : nok(code2);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code2);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code2);
  }
}
const labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code2);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 91) {
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self2 = this;
  return start;
  function start(code2) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}
const thematicBreak$1 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("thematicBreak");
    marker = code2;
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, atBreak, "whitespace")(code2);
    }
    if (size < 3 || code2 !== null && !markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.exit("thematicBreak");
    return ok2(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code2);
  }
}
const list$1 = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
const listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
const indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code2) {
    const kind = self2.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code2 === self2.containerState.marker : asciiDigit(code2)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code2 === 42 || code2 === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code2) : atMarker(code2);
      }
      if (!self2.interrupt || code2 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code2);
      }
    }
    return nok(code2);
  }
  function inside(code2) {
    if (asciiDigit(code2) && ++size < 10) {
      effects.consume(code2);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code2 === self2.containerState.marker : code2 === 41 || code2 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code2);
    }
    return nok(code2);
  }
  function atMarker(code2) {
    effects.enter("listItemMarker");
    effects.consume(code2);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code2;
    return effects.check(blankLine, self2.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code2) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    if (markdownSpace(code2)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code2);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code2);
  }
  function endOfPrefix(code2) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self2.containerState.size + 1)(code2);
  }
  function notBlank(code2) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code2)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code2);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
  }
  function notInCurrentItem(code2) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list$1, ok2, nok), "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code2) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}
const setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content2;
  let text2;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content2 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text2 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text2][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text2][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text2, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context]);
    events[content2][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content2][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let marker;
  let paragraph2;
  while (index2--) {
    if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
      paragraph2 = self2.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start;
  function start(code2) {
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code2;
      return closingSequence(code2);
    }
    return nok(code2);
  }
  function closingSequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2);
  }
  function closingSequenceEnd(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("setextHeadingLine");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const flow$1 = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self2 = this;
  const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}
const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory("string");
const text$2 = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text2 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code2) {
      return atBreak(code2) ? text2(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("data");
      effects.consume(code2);
      return data;
    }
    function data(code2) {
      if (atBreak(code2)) {
        effects.exit("data");
        return text2(code2);
      }
      effects.consume(code2);
      return data;
    }
    function atBreak(code2) {
      if (code2 === null) {
        return true;
      }
      const list2 = constructs2[code2];
      let index2 = -1;
      if (list2) {
        while (++index2 < list2.length) {
          const item = list2[index2];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1)
          ;
        else {
          index2++;
          break;
        }
      }
      if (size) {
        const token2 = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token2.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token2);
        } else {
          events.splice(eventIndex, 0, ["enter", token2, context], ["exit", token2, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
function createTokenizer(parser2, initialize, from2) {
  let point2 = Object.assign(from2 ? Object.assign({}, from2) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: parser2,
    sliceStream,
    sliceSerialize,
    now: now2,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice2) {
    chunks = push(chunks, slice2);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token2, expandTabs) {
    return serializeChunks(sliceStream(token2), expandTabs);
  }
  function sliceStream(token2) {
    return sliceChunks(chunks, token2);
  }
  function now2() {
    return Object.assign({}, point2);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point2._index < chunks.length) {
      const chunk = chunks[point2._index];
      if (typeof chunk === "string") {
        chunkIndex = point2._index;
        if (point2._bufferIndex < 0) {
          point2._bufferIndex = 0;
        }
        while (point2._index === chunkIndex && point2._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point2._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code2) {
    state = state(code2);
  }
  function consume(code2) {
    if (markdownLineEnding(code2)) {
      point2.line++;
      point2.column = 1;
      point2.offset += code2 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code2 !== -1) {
      point2.column++;
      point2.offset++;
    }
    if (point2._bufferIndex < 0) {
      point2._index++;
    } else {
      point2._bufferIndex++;
      if (point2._bufferIndex === chunks[point2._index].length) {
        point2._bufferIndex = -1;
        point2._index++;
      }
    }
    context.previous = code2;
  }
  function enter(type, fields) {
    const token2 = fields || {};
    token2.type = type;
    token2.start = now2();
    context.events.push(["enter", token2, context]);
    stack.push(token2);
    return token2;
  }
  function exit2(type) {
    const token2 = stack.pop();
    token2.end = now2();
    context.events.push(["exit", token2, context]);
    return token2;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map2) {
        return start;
        function start(code2) {
          const def = code2 !== null && map2[code2];
          const all2 = code2 !== null && map2.null;
          const list2 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list2)(code2);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code2) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code2);
          }
          return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code2);
        }
      }
      function ok2(code2) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code2) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from3) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from3, context.events.length - from3, construct.resolve(context.events.slice(from3), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now2();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point2 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point2.line in columnStart && point2.column < 2) {
      point2.column = columnStart[point2.line];
      point2.offset += columnStart[point2.line] - 1;
    }
  }
}
function sliceChunks(chunks, token2) {
  const startIndex = token2.start._index;
  const startBufferIndex = token2.start._bufferIndex;
  const endIndex = token2.end._index;
  const endBufferIndex = token2.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
const document$1 = {
  [42]: list$1,
  [43]: list$1,
  [45]: list$1,
  [48]: list$1,
  [49]: list$1,
  [50]: list$1,
  [51]: list$1,
  [52]: list$1,
  [53]: list$1,
  [54]: list$1,
  [55]: list$1,
  [56]: list$1,
  [57]: list$1,
  [62]: blockQuote
};
const contentInitial = {
  [91]: definition
};
const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
const flow = {
  [35]: headingAtx,
  [42]: thematicBreak$1,
  [45]: [setextUnderline, thematicBreak$1],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$1,
  [96]: codeFenced,
  [126]: codeFenced
};
const string = {
  [38]: characterReference,
  [92]: characterEscape
};
const text$1 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
const insideSpan = {
  null: [attention, resolver]
};
const attentionMarkers = {
  null: [42, 95]
};
const disable = {
  null: []
};
var defaultConstructs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: document$1,
  contentInitial,
  flowInitial,
  flow,
  string,
  text: text$1,
  insideSpan,
  attentionMarkers,
  disable
}, Symbol.toStringTag, { value: "Module" }));
function parse$1(options = {}) {
  const constructs2 = combineExtensions([defaultConstructs].concat(options.extensions || []));
  const parser2 = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content$1),
    document: create2(document$2),
    flow: create2(flow$1),
    string: create2(string$1),
    text: create2(text$2)
  };
  return parser2;
  function create2(initial) {
    return creator;
    function creator(from2) {
      return createTokenizer(parser2, initial, from2);
    }
  }
}
const search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code2;
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code2 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code2) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
function decodeNumericCharacterReference(value, base2) {
  const code2 = Number.parseInt(value, base2);
  if (code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || code2 > 126 && code2 < 160 || code2 > 55295 && code2 < 57344 || code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || code2 > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code2);
}
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
const own$6 = {}.hasOwnProperty;
const fromMarkdown = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse$1(options).document().write(preprocess()(value, encoding, true))));
};
function compiler(options = {}) {
  const config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      setData,
      getData
    };
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own$6.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace")
        ;
      else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent")
              ;
            else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem3 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem3, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point2(d2) {
    return {
      line: d2.line,
      column: d2.column,
      offset: d2.offset
    };
  }
  function opener(create2, and) {
    return open;
    function open(token2) {
      enter.call(this, create2(token2), token2);
      if (and)
        and.call(this, token2);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token2, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token2, errorHandler]);
    node.position = {
      start: point2(token2.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token2) {
      if (and)
        and.call(this, token2);
      exit2.call(this, token2);
    }
  }
  function exit2(token2, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token2.type + "` (" + stringifyPosition({
        start: token2.start,
        end: token2.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token2.type) {
      if (onExitError) {
        onExitError.call(this, token2, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token2, open[0]);
      }
    }
    node.position.end = point2(token2.end);
    return node;
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token2) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token2), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token2) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token2)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token2) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token2).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token2) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token2).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token2) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text2();
      tail.position = {
        start: point2(token2.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token2) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token2);
    tail.position.end = point2(token2.end);
  }
  function onexitlineending(token2) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token2.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token2);
      onexitdata.call(this, token2);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token2) {
    const ancestor = this.stack[this.stack.length - 2];
    const string2 = this.sliceSerialize(token2);
    ancestor.label = decodeString(string2);
    ancestor.identifier = normalizeIdentifier(string2).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node.type === "link") {
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token2) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token2)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token2) {
    setData("characterReferenceType", token2.type);
  }
  function onexitcharacterreferencevalue(token2) {
    const data2 = this.sliceSerialize(token2);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decodeNamedCharacterReference(data2);
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token2.end);
  }
  function onexitautolinkprotocol(token2) {
    onexitdata.call(this, token2);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token2);
  }
  function onexitautolinkemail(token2) {
    onexitdata.call(this, token2);
    const node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token2);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list2(token2) {
    return {
      type: "list",
      ordered: token2.type === "listOrdered",
      start: null,
      spread: token2._spread,
      children: []
    };
  }
  function listItem2(token2) {
    return {
      type: "listItem",
      spread: token2._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text2() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak2() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own$6.call(extension2, key)) {
      const list2 = key === "canContainEols" || key === "transforms";
      const maybe2 = own$6.call(combined, key) ? combined[key] : void 0;
      const left = maybe2 || (combined[key] = list2 ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list2) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
function remarkParse(options) {
  const parser2 = (doc) => {
    const settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser2 });
}
var u$1 = function(type, props, value) {
  var node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
};
const own$5 = {}.hasOwnProperty;
function unknown(h2, node) {
  const data = node.data || {};
  if ("value" in node && !(own$5.call(data, "hName") || own$5.call(data, "hProperties") || own$5.call(data, "hChildren"))) {
    return h2.augment(node, u$1("text", node.value));
  }
  return h2(node, "div", all(h2, node));
}
function one(h2, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error("Expected node, got `" + node + "`");
  }
  if (own$5.call(h2.handlers, type)) {
    fn = h2.handlers[type];
  } else if (h2.passThrough && h2.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h2.unknownHandler;
  }
  return (typeof fn === "function" ? fn : unknown)(h2, node, parent);
}
function returnNode(h2, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all(h2, node) }) : node;
}
function all(h2, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes = parent.children;
    let index2 = -1;
    while (++index2 < nodes.length) {
      const result = one(h2, nodes[index2], parent);
      if (result) {
        if (index2 && nodes[index2 - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head = result.children[0];
            if (head && head.type === "text") {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}
const convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check2) {
  return castFactory(all2);
  function all2(node) {
    let key;
    for (key in check2) {
      if (node[key] !== check2[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check2) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check2;
  }
}
function castFactory(check2) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check2.call(this, ...parameters));
  }
}
function ok() {
  return true;
}
function color$1(d2) {
  return d2;
}
const CONTINUE$1 = true;
const SKIP$1 = "skip";
const EXIT$1 = false;
const visitParents$1 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color$1(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = [];
      let subresult;
      let offset2;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult$1(visitor(node, parents));
        if (result[0] === EXIT$1) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP$1) {
        offset2 = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset2 > -1 && offset2 < node.children.length) {
          subresult = factory2(node.children[offset2], offset2, grandparents)();
          if (subresult[0] === EXIT$1) {
            return subresult;
          }
          offset2 = typeof subresult[1] === "number" ? subresult[1] : offset2 + step;
        }
      }
      return result;
    }
  }
};
function toResult$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$1, value];
  }
  return [value];
}
const visit$1 = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents$1(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
const pointStart = point("start");
const pointEnd = point("end");
function point(type) {
  return point2;
  function point2(node) {
    const point3 = node && node.position && node.position[type] || {};
    return {
      line: point3.line || null,
      column: point3.column || null,
      offset: point3.offset > -1 ? point3.offset : null
    };
  }
}
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}
function color(d2) {
  return d2;
}
const CONTINUE = true;
const SKIP = "skip";
const EXIT = false;
const visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      var result = [];
      var subresult;
      var offset2;
      var grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset2 = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset2 > -1 && offset2 < node.children.length) {
          subresult = factory2(node.children[offset2], offset2, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset2 = typeof subresult[1] === "number" ? subresult[1] : offset2 + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
const visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
const own$4 = {}.hasOwnProperty;
function definitions(node) {
  const cache2 = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit(node, "definition", ondefinition);
  return getDefinition;
  function ondefinition(definition2) {
    const id2 = clean(definition2.identifier);
    if (id2 && !own$4.call(cache2, id2)) {
      cache2[id2] = definition2;
    }
  }
  function getDefinition(identifier) {
    const id2 = clean(identifier);
    return id2 && own$4.call(cache2, id2) ? cache2[id2] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}
const characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function encode$1(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}
function sanitizeUri(url, protocol) {
  const value = encode$1(normalizeUri(url || ""));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(":");
  const questionMark = value.indexOf("?");
  const numberSign = value.indexOf("#");
  const slash = value.indexOf("/");
  if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) {
    return value;
  }
  return "";
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code2 = value.charCodeAt(index2);
    let replace = "";
    if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code2 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2))) {
        replace = String.fromCharCode(code2);
      }
    } else if (code2 > 55295 && code2 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code2 < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code2, next);
        skip = 1;
      } else {
        replace = "\uFFFD";
      }
    } else {
      replace = String.fromCharCode(code2);
    }
    if (replace) {
      result.push(value.slice(start, index2), encodeURIComponent(replace));
      start = index2 + skip + 1;
      replace = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
function wrap(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push(u$1("text", "\n"));
  }
  while (++index2 < nodes.length) {
    if (index2)
      result.push(u$1("text", "\n"));
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push(u$1("text", "\n"));
  }
  return result;
}
function footer(h2) {
  let index2 = -1;
  const listItems = [];
  while (++index2 < h2.footnoteOrder.length) {
    const def = h2.footnoteById[h2.footnoteOrder[index2].toUpperCase()];
    if (!def) {
      continue;
    }
    const content2 = all(h2, def);
    const id2 = String(def.identifier);
    const safeId = sanitizeUri(id2.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= h2.footnoteCounts[id2]) {
      const backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h2.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: true,
          className: ["data-footnote-backref"],
          ariaLabel: h2.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(referenceIndex) }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      backReferences.push(backReference);
    }
    const tail = content2[content2.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content2.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: h2.clobberPrefix + "fn-" + safeId },
      children: wrap(content2, true)
    };
    if (def.position) {
      listItem2.position = def.position;
    }
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: { id: "footnote-label", className: ["sr-only"] },
        children: [u$1("text", h2.footnoteLabel)]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
function blockquote(h2, node) {
  return h2(node, "blockquote", wrap(all(h2, node), true));
}
function hardBreak(h2, node) {
  return [h2(node, "br"), u$1("text", "\n")];
}
function code(h2, node) {
  const value = node.value ? node.value + "\n" : "";
  const lang2 = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang2) {
    props.className = ["language-" + lang2];
  }
  const code2 = h2(node, "code", props, [u$1("text", value)]);
  if (node.meta) {
    code2.data = { meta: node.meta };
  }
  return h2(node.position, "pre", [code2]);
}
function strikethrough(h2, node) {
  return h2(node, "del", all(h2, node));
}
function emphasis(h2, node) {
  return h2(node, "em", all(h2, node));
}
function footnoteReference(h2, node) {
  const id2 = String(node.identifier);
  const safeId = sanitizeUri(id2.toLowerCase());
  const index2 = h2.footnoteOrder.indexOf(id2);
  let counter;
  if (index2 === -1) {
    h2.footnoteOrder.push(id2);
    h2.footnoteCounts[id2] = 1;
    counter = h2.footnoteOrder.length;
  } else {
    h2.footnoteCounts[id2]++;
    counter = index2 + 1;
  }
  const reuseCounter = h2.footnoteCounts[id2];
  return h2(node, "sup", [
    h2(node.position, "a", {
      href: "#" + h2.clobberPrefix + "fn-" + safeId,
      id: h2.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: "footnote-label"
    }, [u$1("text", String(counter))])
  ]);
}
function footnote(h2, node) {
  const footnoteById = h2.footnoteById;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  };
  return footnoteReference(h2, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}
function heading(h2, node) {
  return h2(node, "h" + node.depth, all(h2, node));
}
function html$2(h2, node) {
  return h2.dangerous ? h2.augment(node, u$1("raw", node.value)) : null;
}
var encodeCache = {};
function getEncodeCache(exclude) {
  var i, ch2, cache2 = encodeCache[exclude];
  if (cache2) {
    return cache2;
  }
  cache2 = encodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch2 = String.fromCharCode(i);
    if (/^[0-9a-z]$/i.test(ch2)) {
      cache2.push(ch2);
    } else {
      cache2.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i = 0; i < exclude.length; i++) {
    cache2[exclude.charCodeAt(i)] = exclude[i];
  }
  return cache2;
}
function encode(string2, exclude, keepEscaped) {
  var i, l2, code2, nextCode, cache2, result = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache2 = getEncodeCache(exclude);
  for (i = 0, l2 = string2.length; i < l2; i++) {
    code2 = string2.charCodeAt(i);
    if (keepEscaped && code2 === 37 && i + 2 < l2) {
      if (/^[0-9a-f]{2}$/i.test(string2.slice(i + 1, i + 3))) {
        result += string2.slice(i, i + 3);
        i += 2;
        continue;
      }
    }
    if (code2 < 128) {
      result += cache2[code2];
      continue;
    }
    if (code2 >= 55296 && code2 <= 57343) {
      if (code2 >= 55296 && code2 <= 56319 && i + 1 < l2) {
        nextCode = string2.charCodeAt(i + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string2[i] + string2[i + 1]);
          i++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string2[i]);
  }
  return result;
}
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
var encode_1 = encode;
function revert(h2, node) {
  const subtype = node.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node.label || node.identifier) + "]";
  }
  if (node.type === "imageReference") {
    return u$1("text", "![" + node.alt + suffix);
  }
  const contents = all(h2, node);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift(u$1("text", "["));
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push(u$1("text", suffix));
  }
  return contents;
}
function imageReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { src: encode_1(def.url || ""), alt: node.alt };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "img", props);
}
function image(h2, node) {
  const props = { src: encode_1(node.url), alt: node.alt };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "img", props);
}
function inlineCode(h2, node) {
  return h2(node, "code", [u$1("text", node.value.replace(/\r?\n|\r/g, " "))]);
}
function linkReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { href: encode_1(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "a", props, all(h2, node));
}
function link(h2, node) {
  const props = { href: encode_1(node.url) };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "a", props, all(h2, node));
}
function listItem(h2, node, parent) {
  const result = all(h2, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === "boolean") {
    let paragraph2;
    if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
      paragraph2 = result[0];
    } else {
      paragraph2 = h2(null, "p", []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u$1("text", " "));
    }
    paragraph2.children.unshift(h2(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < result.length) {
    const child = result[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      wrapped.push(u$1("text", "\n"));
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
    wrapped.push(u$1("text", "\n"));
  }
  return h2(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index2 = -1;
  while (!loose && ++index2 < children.length) {
    loose = listItemLoose(children[index2]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}
function list(h2, node) {
  const props = {};
  const name = node.ordered ? "ol" : "ul";
  const items = all(h2, node);
  let index2 = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  while (++index2 < items.length) {
    const item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h2(node, name, props, wrap(items, true));
}
function paragraph(h2, node) {
  return h2(node, "p", all(h2, node));
}
function root$1(h2, node) {
  return h2.augment(node, u$1("root", wrap(all(h2, node))));
}
function strong(h2, node) {
  return h2(node, "strong", all(h2, node));
}
function table(h2, node) {
  const rows = node.children;
  let index2 = -1;
  const align = node.align || [];
  const result = [];
  while (++index2 < rows.length) {
    const row = rows[index2].children;
    const name = index2 === 0 ? "th" : "td";
    const out = [];
    let cellIndex = -1;
    const length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      const cell = row[cellIndex];
      out.push(h2(cell, name, { align: align[cellIndex] }, cell ? all(h2, cell) : []));
    }
    result[index2] = h2(rows[index2], "tr", wrap(out, true));
  }
  return h2(node, "table", wrap([h2(result[0].position, "thead", wrap([result[0]], true))].concat(result[1] ? h2({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap(result.slice(1), true)) : []), true));
}
function text(h2, node) {
  return h2.augment(node, u$1("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
}
function thematicBreak(h2, node) {
  return h2(node, "hr");
}
const handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html: html$2,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  root: root$1,
  strong,
  table,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}
const own$3 = {}.hasOwnProperty;
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h2.dangerous = dangerous;
  h2.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
  h2.footnoteLabel = settings.footnoteLabel || "Footnotes";
  h2.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
  h2.definition = definitions(tree);
  h2.footnoteById = footnoteById;
  h2.footnoteOrder = [];
  h2.footnoteCounts = {};
  h2.augment = augment;
  h2.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers);
  h2.unknownHandler = settings.unknownHandler;
  h2.passThrough = settings.passThrough;
  visit$1(tree, "footnoteDefinition", (definition2) => {
    const id2 = String(definition2.identifier).toUpperCase();
    if (!own$3.call(footnoteById, id2)) {
      footnoteById[id2] = definition2;
    }
  });
  return h2;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties);
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function h2(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h2 = factory(tree, options);
  const node = one(h2, tree, null);
  const foot = footer(h2);
  if (foot) {
    node.children.push(u$1("text", "\n"), foot);
  }
  return Array.isArray(node) ? { type: "root", children: node } : node;
}
const remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
};
var remarkRehype$1 = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
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
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
class Schema {
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
}
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;
function merge(definitions2, space) {
  const property = {};
  const normal = {};
  let index2 = -1;
  while (++index2 < definitions2.length) {
    Object.assign(property, definitions2[index2].property);
    Object.assign(normal, definitions2[index2].normal);
  }
  return new Schema(property, normal, space);
}
function normalize(value) {
  return value.toLowerCase();
}
class Info {
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
}
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}
var types = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean,
  booleanish,
  overloadedBoolean,
  number,
  spaceSeparated,
  commaSeparated,
  commaOrSpaceSeparated
}, Symbol.toStringTag, { value: "Module" }));
const checks = Object.keys(types);
class DefinedInfo extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check2 = checks[index2];
        mark(this, checks[index2], (mask & types[check2]) === types[check2]);
      }
    }
  }
}
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
const own$2 = {}.hasOwnProperty;
function create(definition2) {
  const property = {};
  const normal = {};
  let prop;
  for (prop in definition2.properties) {
    if (own$2.call(definition2.properties, prop)) {
      const value = definition2.properties[prop];
      const info = new DefinedInfo(prop, definition2.transform(definition2.attributes || {}, prop), value, definition2.space);
      if (definition2.mustUseProperty && definition2.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition2.space);
}
const xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
const xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
const xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});
const aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});
const html$1 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
const svg$1 = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
const hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};
const html = merge([xml, xlink, xmlns, aria, html$1], "html");
const svg = merge([xml, xlink, xmlns, aria, svg$1], "svg");
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
  }
  if (options.allowedElements || options.disallowedElements || options.allowElement) {
    return (tree) => {
      visit$1(tree, "element", (node, index2, parent_) => {
        const parent = parent_;
        let remove2;
        if (options.allowedElements) {
          remove2 = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove2 = options.disallowedElements.includes(node.tagName);
        }
        if (!remove2 && options.allowElement && typeof index2 === "number") {
          remove2 = !options.allowElement(node, index2, parent);
        }
        if (remove2 && typeof index2 === "number") {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index2, 1, ...node.children);
          } else {
            parent.children.splice(index2, 1);
          }
          return index2;
        }
        return void 0;
      });
    };
  }
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if (typeof a === "object" && a !== null) {
    var r2 = a.$$typeof;
    switch (r2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === d || a === f || a === e || a === m || a === n || a === t || typeof a === "object" && a !== null && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || a.getModuleId !== void 0) ? true : false;
};
reactIs_production_min.typeOf = v;
{
  reactIs.exports = reactIs_production_min;
}
var ReactIs = reactIs.exports;
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}
function stringify$1(values) {
  return values.join(" ").trim();
}
function stringify(values, options) {
  var settings = options || {};
  if (values[values.length - 1] === "") {
    values = values.concat("");
  }
  return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
var inlineStyleParser = function(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style)
    return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines)
      lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  function position2() {
    var start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace2();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent)
      ;
    else {
      throw err;
    }
  }
  function match(re2) {
    var m2 = re2.exec(style);
    if (!m2)
      return;
    var str = m2[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m2;
  }
  function whitespace2() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c2;
    rules = rules || [];
    while (c2 = comment()) {
      if (c2 !== false) {
        rules.push(c2);
      }
    }
    return rules;
  }
  function comment() {
    var pos = position2();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
      return;
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position2();
    var prop = match(PROPERTY_REGEX);
    if (!prop)
      return;
    comment();
    if (!match(COLON_REGEX))
      return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace2();
  return declarations();
};
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
var parse = inlineStyleParser;
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== "string") {
    return output;
  }
  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === "function";
  var property;
  var value;
  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}
var styleToObject = StyleToObject;
const own$1 = {}.hasOwnProperty;
const tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  const children = [];
  let childIndex = -1;
  let child;
  while (++childIndex < node.children.length) {
    child = node.children[childIndex];
    if (child.type === "element") {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === "text") {
      if (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) {
        children.push(child.value);
      }
    } else if (child.type === "raw" && !context.options.skipHtml) {
      children.push(child.value);
    }
  }
  return children;
}
function toReact(context, node, index2, parent) {
  const options = context.options;
  const parentSchema = context.schema;
  const name = node.tagName;
  const properties = {};
  let schema = parentSchema;
  let property;
  if (parentSchema.space === "html" && name === "svg") {
    schema = svg;
    context.schema = schema;
  }
  if (node.properties) {
    for (property in node.properties) {
      if (own$1.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }
  if (name === "ol" || name === "ul") {
    context.listDepth++;
  }
  const children = childrenToReact(context, node);
  if (name === "ol" || name === "ul") {
    context.listDepth--;
  }
  context.schema = parentSchema;
  const position2 = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  };
  const component = options.components && own$1.call(options.components, name) ? options.components[name] : name;
  const basic = typeof component === "string" || component === React.Fragment;
  if (!ReactIs.isValidElementType(component)) {
    throw new TypeError(`Component for name \`${name}\` not defined or is not renderable`);
  }
  properties.key = [
    name,
    position2.start.line,
    position2.start.column,
    index2
  ].join("-");
  if (name === "a" && options.linkTarget) {
    properties.target = typeof options.linkTarget === "function" ? options.linkTarget(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null) : options.linkTarget;
  }
  if (name === "a" && options.transformLinkUri) {
    properties.href = options.transformLinkUri(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "code" && parent.type === "element" && parent.tagName !== "pre") {
    properties.inline = true;
  }
  if (!basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6")) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }
  if (name === "img" && options.transformImageUri) {
    properties.src = options.transformImageUri(String(properties.src || ""), String(properties.alt || ""), typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "li" && parent.type === "element") {
    const input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === "ol";
  }
  if (!basic && (name === "ol" || name === "ul")) {
    properties.ordered = name === "ol";
    properties.depth = context.listDepth;
  }
  if (name === "td" || name === "th") {
    if (properties.align) {
      if (!properties.style)
        properties.style = {};
      properties.style.textAlign = properties.align;
      delete properties.align;
    }
    if (!basic) {
      properties.isHeader = name === "th";
    }
  }
  if (!basic && name === "tr" && parent.type === "element") {
    properties.isHeader = Boolean(parent.tagName === "thead");
  }
  if (options.sourcePos) {
    properties["data-sourcepos"] = flattenPosition(position2);
  }
  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  }
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }
  if (!basic) {
    properties.node = node;
  }
  return children.length > 0 ? React.createElement(component, properties, children) : React.createElement(component, properties);
}
function getInputElement(node) {
  let index2 = -1;
  while (++index2 < node.children.length) {
    const child = node.children[index2];
    if (child.type === "element" && child.tagName === "input") {
      return child;
    }
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index2 = -1;
  let count = 0;
  while (++index2 < parent.children.length) {
    if (parent.children[index2] === node)
      break;
    if (parent.children[index2].type === "element")
      count++;
  }
  return count;
}
function addProperty(props, prop, value, ctx) {
  const info = find(ctx.schema, prop);
  let result = value;
  if (result === null || result === void 0 || result !== result) {
    return;
  }
  if (Array.isArray(result)) {
    result = info.commaSeparated ? stringify(result) : stringify$1(result);
  }
  if (info.property === "style" && typeof result === "string") {
    result = parseStyle(result);
  }
  if (info.space && info.property) {
    props[own$1.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}
function parseStyle(value) {
  const result = {};
  try {
    styleToObject(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v2) {
    const k2 = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k2.replace(/-([a-z])/g, styleReplacer)] = v2;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d2) => String(d2)).join("");
}
const own = {}.hasOwnProperty;
const changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
const deprecated = {
  plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (const key in deprecated) {
    if (own.call(deprecated, key) && own.call(options, key)) {
      const deprecation = deprecated[key];
      console.warn(`[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`);
      delete deprecated[key];
    }
  }
  const processor = unified().use(remarkParse).use(options.remarkPlugins || []).use(remarkRehype$1, __spreadProps(__spreadValues({}, options.remarkRehypeOptions), {
    allowDangerousHtml: true
  })).use(options.rehypePlugins || []).use(rehypeFilter, options);
  const file = new VFile();
  if (typeof options.children === "string") {
    file.value = options.children;
  } else if (options.children !== void 0 && options.children !== null) {
    console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`);
  }
  const hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root") {
    throw new TypeError("Expected a `root` node");
  }
  let result = React.createElement(React.Fragment, {}, childrenToReact({ options, schema: html, listDepth: 0 }, hastNode));
  if (options.className) {
    result = React.createElement("div", { className: options.className }, result);
  }
  return result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  allowElement: PropTypes.func,
  allowedElements: PropTypes.arrayOf(PropTypes.string),
  disallowedElements: PropTypes.arrayOf(PropTypes.string),
  unwrapDisallowed: PropTypes.bool,
  remarkPlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.any)
    ]))
  ])),
  rehypePlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.any)
    ]))
  ])),
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  skipHtml: PropTypes.bool,
  includeElementIndex: PropTypes.bool,
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  components: PropTypes.object
};
//! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a, b2) {
  return Object.prototype.hasOwnProperty.call(a, b2);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k2;
    for (k2 in obj) {
      if (hasOwnProp(obj, k2)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map(arr, fn) {
  var res = [], i, arrLen = arr.length;
  for (i = 0; i < arrLen; ++i) {
    res.push(fn(arr[i], i));
  }
  return res;
}
function extend(a, b2) {
  for (var i in b2) {
    if (hasOwnProp(b2, i)) {
      a[i] = b2[i];
    }
  }
  if (hasOwnProp(b2, "toString")) {
    a.toString = b2.toString;
  }
  if (hasOwnProp(b2, "valueOf")) {
    a.valueOf = b2.valueOf;
  }
  return a;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m2) {
  if (m2._pf == null) {
    m2._pf = defaultParsingFlags();
  }
  return m2._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t2 = Object(this), len = t2.length >>> 0, i;
    for (i = 0; i < len; i++) {
      if (i in t2 && fun.call(this, t2[i], i, t2)) {
        return true;
      }
    }
    return false;
  };
}
function isValid(m2) {
  if (m2._isValid == null) {
    var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i) {
      return i != null;
    }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m2._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(m2)) {
      m2._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return m2._isValid;
}
function createInvalid(flags) {
  var m2 = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m2), flags);
  } else {
    getParsingFlags(m2).userInvalidated = true;
  }
  return m2;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i, prop, val, momentPropertiesLen = momentProperties.length;
  if (!isUndefined(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentPropertiesLen > 0) {
    for (i = 0; i < momentPropertiesLen; i++) {
      prop = momentProperties[i];
      val = from2[prop];
      if (!isUndefined(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i, key, argLen = arguments.length;
      for (i = 0; i < argLen; i++) {
        arg = "";
        if (typeof arguments[i] === "object") {
          arg += "\n[" + i + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i];
        }
        args.push(arg);
      }
      warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i;
  for (i in config) {
    if (hasOwnProp(config, i)) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this["_" + i] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys;
if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function(obj) {
    var i, res = [];
    for (i in obj) {
      if (hasOwnProp(obj, i)) {
        res.push(i);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction(output) ? output.call(mom, now2) : output;
}
function zeroFill(number2, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number2), zerosToFill = targetLength - absNumber.length, sign2 = number2 >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(func.apply(this, arguments), token2);
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array = format2.match(formattingTokens), i, length;
  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }
  return function(mom) {
    var output = "", i2;
    for (i2 = 0; i2 < length; i2++) {
      output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
    }
    return output;
  };
}
function formatMoment(m2, format2) {
  if (!m2.isValid()) {
    return m2.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m2.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m2);
}
function expandFormat(format2, locale2) {
  var i = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number2) {
  return this._ordinal.replace("%d", number2);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number2, withoutSuffix, string2, isFuture) {
  var output = this._relativeTime[string2];
  return isFunction(output) ? output(number2, withoutSuffix, string2, isFuture) : output.replace(/%d/i, number2);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {};
function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
}
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function getPrioritizedUnits(unitsObj) {
  var units = [], u2;
  for (u2 in unitsObj) {
    if (hasOwnProp(unitsObj, u2)) {
      units.push({ unit: u2, priority: priorities[u2] });
    }
  }
  units.sort(function(a, b2) {
    return a.priority - b2.priority;
  });
  return units;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function absFloor(number2) {
  if (number2 < 0) {
    return Math.ceil(number2) || 0;
  } else {
    return Math.floor(number2);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
function makeGetSet(unit, keepTime) {
  return function(value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get(this, unit);
    }
  };
}
function get(mom, unit) {
  return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
}
function set$1(mom, unit, value) {
  if (mom.isValid() && !isNaN(value)) {
    if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      value = toInt(value);
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
    } else {
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
    }
  }
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
    for (i = 0; i < prioritizedLen; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units](value);
    }
  }
  return this;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s) {
  return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
    return p1 || p2 || p3 || p4;
  }));
}
function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token2, callback) {
  var i, func = callback, tokenLen;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array) {
      array[callback] = toInt(input);
    };
  }
  tokenLen = token2.length;
  for (i = 0; i < tokenLen; i++) {
    tokens[token2[i]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function mod(n2, x2) {
  return (n2 % x2 + x2) % x2;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o) {
    var i;
    for (i = 0; i < this.length; ++i) {
      if (this[i] === o) {
        return i;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addUnitAlias("month", "M");
addUnitPriority("month", 8);
addRegexToken("M", match1to2);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m2, format2) {
  if (!m2) {
    return isArray(this._months) ? this._months : this._months["standalone"];
  }
  return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
}
function localeMonthsShort(m2, format2) {
  if (!m2) {
    return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i, ii2, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i = 0; i < 12; ++i) {
      mom = createUTC([2e3, i]);
      this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._longMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  } else {
    if (format2 === "MMM") {
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._longMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._longMonthsParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
      this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
    }
    if (!strict && !this._monthsParse[i]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
}
function setMonth(mom, value) {
  var dayOfMonth;
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value === "string") {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value);
      if (!isNumber(value)) {
        return mom;
      }
    }
  }
  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
  mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a, b2) {
    return b2.length - a.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    shortPieces.push(this.monthsShort(mom, ""));
    longPieces.push(this.months(mom, ""));
    mixedPieces.push(this.months(mom, ""));
    mixedPieces.push(this.monthsShort(mom, ""));
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i = 0; i < 12; i++) {
    shortPieces[i] = regexEscape(shortPieces[i]);
    longPieces[i] = regexEscape(longPieces[i]);
  }
  for (i = 0; i < 24; i++) {
    mixedPieces[i] = regexEscape(mixedPieces[i]);
  }
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
}
addFormatToken("Y", 0, 0, function() {
  var y2 = this.year();
  return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addUnitAlias("year", "y");
addUnitPriority("year", 1);
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array) {
  array[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function createDate(y2, m2, d2, h2, M2, s, ms) {
  var date;
  if (y2 < 100 && y2 >= 0) {
    date = new Date(y2 + 400, m2, d2, h2, M2, s, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y2);
    }
  } else {
    date = new Date(y2, m2, d2, h2, M2, s, ms);
  }
  return date;
}
function createUTCDate(y2) {
  var date, args;
  if (y2 < 100 && y2 >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y2 + 400;
    date = new Date(Date.UTC.apply(null, args));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y2);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }
  return date;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addUnitAlias("week", "w");
addUnitAlias("isoWeek", "W");
addUnitPriority("week", 5);
addUnitPriority("isoWeek", 5);
addRegexToken("w", match1to2);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
  week[token2.substr(0, 1)] = toInt(input);
});
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  doy: 6
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addUnitAlias("day", "d");
addUnitAlias("weekday", "e");
addUnitAlias("isoWeekday", "E");
addUnitPriority("day", 11);
addUnitPriority("weekday", 11);
addUnitPriority("isoWeekday", 11);
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n2) {
  return ws.slice(n2, 7).concat(ws.slice(0, n2));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m2, format2) {
  var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
}
function localeWeekdaysShort(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i, ii2, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i = 0; i < 7; ++i) {
      mom = createUTC([2e3, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii2 = indexOf.call(this._weekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else if (format2 === "ddd") {
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  } else {
    if (format2 === "dddd") {
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else if (format2 === "ddd") {
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
      this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
      this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
    }
    if (!this._weekdaysParse[i]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a, b2) {
    return b2.length - a.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
  this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}
meridiem("a", true);
meridiem("A", false);
addUnitAlias("hour", "h");
addUnitPriority("hour", 13);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2);
addRegexToken("h", match1to2);
addRegexToken("k", match1to2);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i, minl = Math.min(arr1.length, arr2.length);
  for (i = 0; i < minl; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  var i = 0, j, next, locale2, split;
  while (i < names.length) {
    split = normalizeLocale(names[i]).split("-");
    j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale2 = loadLocale(split.slice(0, j).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return globalLocale;
}
function isLocaleNameSane(name) {
  return name.match("^[^/\\\\]*$") != null;
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e2) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Locale " + key + " not found. Did you forget to load it?");
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x2) {
        defineLocale(x2.name, x2.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys(locales);
}
function checkOverflow(m2) {
  var overflow, a = m2._a;
  if (a && getParsingFlags(m2).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m2).overflow = overflow;
  }
  return m2;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i, l2, string2 = config._i, match = extendedIsoRegex.exec(string2) || basicIsoRegex.exec(string2), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
  if (match) {
    getParsingFlags(config).iso = true;
    for (i = 0, l2 = isoDatesLen; i < l2; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match[3]) {
      for (i = 0, l2 = isoTimesLen; i < l2; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          timeFormat = (match[2] || " ") + isoTimes[i][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s) {
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
    return h2 * 60 + m2;
  }
}
function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match) {
    parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
  config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
});
function defaults(a, b2, c2) {
  if (a != null) {
    return a;
  }
  if (b2 != null) {
    return b2;
  }
  return c2;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i, date, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w2 = config._w;
  if (w2.GG != null || w2.W != null || w2.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(w2.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
    week = defaults(w2.W, 1);
    weekday = defaults(w2.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
    week = defaults(w2.w, curWeek.week);
    if (w2.d != null) {
      weekday = w2.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w2.e != null) {
      weekday = w2.e + dow;
      if (w2.e < 0 || w2.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string2 = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string2.length, totalParsedInputLength = 0, era, tokenLen;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  tokenLen = tokens2.length;
  for (i = 0; i < tokenLen; i++) {
    token2 = tokens2[i];
    parsedInput = (string2.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string2.substr(0, string2.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string2 = string2.slice(string2.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string2.length > 0) {
    getParsingFlags(config).unusedInput.push(string2);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
  if (configfLen === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }
  for (i = 0; i < configfLen; i++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (isValid(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
  config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
    return obj && parseInt(obj, 10);
  });
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray(input)) {
    config._a = map(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c2 = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
    input = void 0;
  }
  c2._isAMomentObject = true;
  c2._useUTC = c2._isUTC = isUTC;
  c2._l = locale2;
  c2._i = input;
  c2._f = format2;
  c2._strict = strict;
  return createFromConfig(c2);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other < this ? this : other;
  } else {
    return createInvalid();
  }
}), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other > this ? this : other;
  } else {
    return createInvalid();
  }
});
function pickBy(fn, moments) {
  var res, i;
  if (moments.length === 1 && isArray(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now = function() {
  return Date.now ? Date.now() : +new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m2) {
  var key, unitHasDecimal = false, i, orderLen = ordering.length;
  for (key in m2) {
    if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
      return false;
    }
  }
  for (i = 0; i < orderLen; ++i) {
    if (m2[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number2) {
  if (number2 < 0) {
    return Math.round(-1 * number2) * -1;
  } else {
    return Math.round(number2);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset2 = this.utcOffset(), sign2 = "+";
    if (offset2 < 0) {
      offset2 = -offset2;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string2) {
  var matches = (string2 || "").match(matcher), chunk, parts, minutes2;
  if (matches === null) {
    return null;
  }
  chunk = matches[matches.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m2) {
  return -Math.round(m2._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset2 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset2 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(this, createDuration(input - offset2, "m"), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset2 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c2 = {}, other;
  copyConfig(c2, this);
  c2 = prepareConfig(c2);
  if (c2._a) {
    other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
    this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match = aspNetRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign2,
      h: toInt(match[HOUR]) * sign2,
      m: toInt(match[MINUTE]) * sign2,
      s: toInt(match[SECOND]) * sign2,
      ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
    };
  } else if (match = isoRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign2),
      M: parseIso(match[3], sign2),
      w: parseIso(match[4], sign2),
      d: parseIso(match[5], sign2),
      h: parseIso(match[6], sign2),
      m: parseIso(match[7], sign2),
      s: parseIso(match[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base2, other) {
  var res = {};
  res.months = other.month() - base2.month() + (other.year() - base2.year()) * 12;
  if (base2.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base2.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base2, other) {
  var res;
  if (!(base2.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base2);
  if (base2.isBefore(other)) {
    res = positiveMomentsDifference(base2, other);
  } else {
    res = positiveMomentsDifference(other, base2);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, property, propertyLen = properties.length;
  for (i = 0; i < propertyLen; i += 1) {
    property = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, property;
  for (i = 0; i < properties.length; i += 1) {
    property = properties[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a, b2) {
  if (a.date() < b2.date()) {
    return -monthDiff(b2, a);
  }
  var wholeMonthDiff = (b2.year() - a.year()) * 12 + (b2.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b2 - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b2 - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b2 - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
  if (m2.year() < 0 || m2.year() > 9999) {
    return formatMoment(m2, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  if (isFunction(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
    }
  }
  return formatMoment(m2, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
  if (key === void 0) {
    return this.localeData();
  } else {
    return this.locale(key);
  }
});
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return new Date(y2, m2, d2).valueOf();
  }
}
function utcStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y2, m2, d2);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m2 = this;
  return [
    m2.year(),
    m2.month(),
    m2.date(),
    m2.hour(),
    m2.minute(),
    m2.second(),
    m2.millisecond()
  ];
}
function toObject() {
  var m2 = this;
  return {
    years: m2.year(),
    months: m2.month(),
    date: m2.date(),
    hours: m2.hours(),
    minutes: m2.minutes(),
    seconds: m2.seconds(),
    milliseconds: m2.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
  var era = config._locale.erasParse(input, token2, config._strict);
  if (era) {
    getParsingFlags(config).era = era;
  } else {
    getParsingFlags(config).invalidEra = input;
  }
});
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array, config, token2) {
  var match;
  if (config._locale._eraYearOrdinalRegex) {
    match = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  } else {
    array[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m2, format2) {
  var i, l2, date, eras = this._eras || getLocale("en")._eras;
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    switch (typeof eras[i].since) {
      case "string":
        date = hooks(eras[i].since).startOf("day");
        eras[i].since = date.valueOf();
        break;
    }
    switch (typeof eras[i].until) {
      case "undefined":
        eras[i].until = Infinity;
        break;
      case "string":
        date = hooks(eras[i].until).startOf("day").valueOf();
        eras[i].until = date.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i, l2, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    name = eras[i].name.toUpperCase();
    abbr = eras[i].abbr.toUpperCase();
    narrow = eras[i].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].name;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].narrow;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i, l2, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].abbr;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i, l2, dir, val, eras = this.localeData().eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    dir = eras[i].since <= eras[i].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
      return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, eras = this.eras();
  for (i = 0, l2 = eras.length; i < l2; ++i) {
    namePieces.push(regexEscape(eras[i].name));
    abbrPieces.push(regexEscape(eras[i].abbr));
    narrowPieces.push(regexEscape(eras[i].narrow));
    mixedPieces.push(regexEscape(eras[i].name));
    mixedPieces.push(regexEscape(eras[i].abbr));
    mixedPieces.push(regexEscape(eras[i].narrow));
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addUnitAlias("weekYear", "gg");
addUnitAlias("isoWeekYear", "GG");
addUnitPriority("weekYear", 1);
addUnitPriority("isoWeekYear", 1);
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
  week[token2.substr(0, 2)] = toInt(input);
});
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addUnitAlias("quarter", "Q");
addUnitPriority("quarter", 7);
addRegexToken("Q", match1);
addParseToken("Q", function(input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addUnitAlias("date", "D");
addUnitPriority("date", 9);
addRegexToken("D", match1to2);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addUnitAlias("dayOfYear", "DDD");
addUnitPriority("dayOfYear", 4);
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addUnitAlias("minute", "m");
addUnitPriority("minute", 14);
addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addUnitAlias("second", "s");
addUnitPriority("second", 15);
addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addUnitAlias("millisecond", "ms");
addUnitPriority("millisecond", 16);
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array) {
  array[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string2) {
  return string2;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(format2, index2, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index2);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index2, field) {
  if (isNumber(format2)) {
    index2 = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index2 != null) {
    return get$1(format2, index2, field, "month");
  }
  var i, out = [];
  for (i = 0; i < 12; i++) {
    out[i] = get$1(format2, i, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index2, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index2 = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
  if (index2 != null) {
    return get$1(format2, (index2 + shift) % 7, field, "day");
  }
  for (i = 0; i < 7; i++) {
    out[i] = get$1(format2, (i + shift) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index2) {
  return listMonthsImpl(format2, index2, "months");
}
function listMonthsShort(format2, index2) {
  return listMonthsImpl(format2, index2, "monthsShort");
}
function listWeekdays(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number2) {
    var b2 = number2 % 10, output = toInt(number2 % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
    return number2 + output;
  }
});
hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1(input, value) {
  return addSubtract$1(this, input, value, 1);
}
function subtract$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}
function absCeil(number2) {
  if (number2 < 0) {
    return Math.floor(number2);
  } else {
    return Math.ceil(number2);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data.days = days2;
  data.months = months2;
  data.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function valueOf$1() {
  if (!this.isValid()) {
    return NaN;
  }
  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() {
  return createDuration(this);
}
function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function substituteTimeAgo(string2, number2, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number2 || 1, !!withoutSuffix, string2, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale2;
  return substituteTimeAgo.apply(null, a);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th2 = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th2 = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th2.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th2, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x2) {
  return (x2 > 0) - (x2 < 0) || +x2;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.29.3";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn2.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames.default = classNames;
      module2.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);
var classnames = classnames$1.exports;
const ButtonAsLink = (props) => {
  const _a2 = props, {
    children,
    className
  } = _a2, buttonProps = __objRest(_a2, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({}, buttonProps), {
    className: classnames("button-link", className),
    children
  }));
};
const DeleteNoteButton = (props) => {
  const _a2 = props, {
    noteId
  } = _a2, buttonProps = __objRest(_a2, [
    "noteId"
  ]);
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      noteId
    },
    refetchQueries: [{
      query: GET_MY_NOTES
    }, {
      query: GET_NOTES
    }],
    onCompleted: () => {
      navigate(`/mynotes`);
    }
  });
  return /* @__PURE__ */ jsx(ButtonAsLink, __spreadProps(__spreadValues({}, buttonProps), {
    onClick: () => deleteNote(),
    children: "Delete"
  }));
};
const FavoriteNote = (props) => {
  const {
    noteId,
    favoriteCount,
    me: me2
  } = props;
  React.useState(favoriteCount);
  const [favorited, setFavorited] = React.useState(me2.favorites.find((note) => note._id === noteId) !== void 0);
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      noteId
    },
    refetchQueries: [{
      query: GET_MY_FAVORITES
    }, {
      query: GET_ME
    }]
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(ButtonAsLink, {
      onClick: () => {
        setFavorited(!favorited);
        toggleFavorite();
      },
      children: favorited ? "Remove favorite" : "Add favorite"
    })
  });
};
const NoteUser = (props) => {
  const {
    note
  } = props;
  const {
    data,
    loading,
    error
  } = useQuery(GET_ME);
  if (loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    });
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx(FavoriteNote, {
      noteId: note._id,
      me: data.currentUser,
      favoriteCount: note.favoriteCount
    }), /* @__PURE__ */ jsx("br", {}), data.currentUser._id === note.author._id && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(Link, {
        className: "button-link",
        to: `/notes/${note._id}/edit`,
        children: "Edit"
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(DeleteNoteButton, {
        noteId: note._id
      })]
    })]
  });
};
const NoteItem = (props) => {
  const {
    note,
    className
  } = props;
  const {
    data,
    loading,
    error
  } = useQuery(IS_LOGGED_IN);
  if (loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    });
  return /* @__PURE__ */ jsxs("article", {
    className: classnames("note", className),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "metadata mb-3",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pr-4",
        children: /* @__PURE__ */ jsx("img", {
          src: note.author.avatar,
          alt: `${note.author.username} avatar`,
          style: {
            height: "50px"
          }
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "pr-4",
        children: [/* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("span", {
            className: "italic",
            children: "by"
          }), " ", note.author.username]
        }), /* @__PURE__ */ jsx("div", {
          children: hooks(note.createdAt).fromNow()
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "ml-[auto]",
        children: data.isLoggedIn ? /* @__PURE__ */ jsx(NoteUser, {
          note
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx("em", {
            children: "Favorites:"
          }), " ", note.favoriteCount]
        })
      })]
    }), /* @__PURE__ */ jsx(ReactMarkdown, {
      children: note.content
    })]
  });
};
const NoteList = (props) => {
  const {
    notes
  } = props;
  return /* @__PURE__ */ jsx("div", {
    children: notes.map((note) => /* @__PURE__ */ jsxs("div", {
      className: "note-wrapper",
      children: [/* @__PURE__ */ jsx(NoteItem, {
        className: "mb-2",
        note
      }), /* @__PURE__ */ jsx(Link, {
        className: "button-link",
        to: `/notes/${note._id}`,
        children: "Permalink"
      })]
    }, note._id))
  });
};
const FavoritesPage = (_props) => {
  const {
    data,
    loading,
    error
  } = useQuery(GET_MY_FAVORITES);
  React.useEffect(() => {
    document.title = "Favorites - Notedly";
  }, []);
  if (loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    });
  const favorites = data.currentUser.favorites;
  if (favorites.length !== 0)
    return /* @__PURE__ */ jsx(NoteList, {
      notes: favorites
    });
  return /* @__PURE__ */ jsx("p", {
    children: "No favorites yet"
  });
};
var logo = "/notedly/assets/logo.fe899dce.svg";
const MainHeader = (_props) => {
  const {
    data,
    client: client2
  } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("header", {
    className: "main-header",
    children: [/* @__PURE__ */ jsx("img", {
      src: logo,
      alt: "Notedly Logo",
      className: "inline-svg"
    }), /* @__PURE__ */ jsx("h1", {
      className: "logo-text",
      children: "Notedly"
    }), /* @__PURE__ */ jsx("div", {
      className: "user-state",
      children: data.isLoggedIn ? /* @__PURE__ */ jsx(ButtonAsLink, {
        onClick: () => {
          localStorage.removeItem("token");
          client2.resetStore();
          client2.writeQuery({
            query: IS_LOGGED_IN,
            data: {
              isLoggedIn: false
            }
          });
          navigate("/");
        },
        children: "Log Out"
      }) : /* @__PURE__ */ jsxs("p", {
        children: [/* @__PURE__ */ jsx(Link, {
          to: "/signin",
          children: "Sign In"
        }), " or", " ", /* @__PURE__ */ jsx(Link, {
          to: "/signup",
          children: "Sign Up"
        })]
      })
    })]
  });
};
const MainNav = (_props) => {
  return /* @__PURE__ */ jsx("nav", {
    className: "main-nav",
    children: /* @__PURE__ */ jsxs("ul", {
      className: "main-navlist items-center",
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(Link, {
          to: "/",
          children: /* @__PURE__ */ jsxs("div", {
            className: "inline-block flex justify-center items-center",
            children: [/* @__PURE__ */ jsx("span", {
              "aria-hidden": "true",
              role: "img",
              children: "\u{1F3E0}"
            }), "Home"]
          })
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsxs(Link, {
          to: "/mynotes",
          children: [/* @__PURE__ */ jsx("span", {
            "aria-hidden": "true",
            role: "img",
            children: "\u{1F4D3}"
          }), "My Notes"]
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsxs(Link, {
          to: "/favorites",
          children: [/* @__PURE__ */ jsx("span", {
            "aria-hidden": "true",
            role: "img",
            children: "\u{1F31F}"
          }), "Favorites"]
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsxs(Link, {
          to: "/new",
          children: [/* @__PURE__ */ jsx("span", {
            "aria-hidden": "true",
            role: "img",
            children: "\u2795"
          }), "New"]
        })
      })]
    })
  });
};
const DefaultLayout = (_props) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(MainHeader, {}), /* @__PURE__ */ jsxs("div", {
      className: "default-layout",
      children: [/* @__PURE__ */ jsx(MainNav, {}), /* @__PURE__ */ jsx("main", {
        children: /* @__PURE__ */ jsx(Outlet, {})
      })]
    })]
  });
};
const SIGNUP_USER = gql`
  mutation signUp($userData: CreateUserDto!) {
    signUp(userData: $userData)
  }
`;
const SignUpPage = (_props) => {
  const navigate = useNavigate();
  const client2 = useApolloClient();
  const [signUp, {
    loading,
    error
  }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      client2.cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true
        }
      });
      localStorage.setItem("token", data.signUp);
      navigate("/");
    }
  });
  React.useEffect(() => {
    document.title = "Sign Up - Notedly";
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(UserForm, {
      formType: "signup",
      onFinish: signUp
    }), loading && /* @__PURE__ */ jsx("p", {
      children: "Loading..."
    }), error && /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    })]
  });
};
const SIGNIN_USER = gql`
  mutation signIn($userData: LoginUserDto!) {
    signIn(userData: $userData)
  }
`;
const SignInPage = (_props) => {
  const navigate = useNavigate();
  const client2 = useApolloClient();
  const [signIn, {
    loading,
    error
  }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      client2.cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true
        }
      });
      localStorage.setItem("token", data.signIn);
      navigate("/");
    }
  });
  React.useEffect(() => {
    document.title = "Sign In - Notedly";
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(UserForm, {
      formType: "signin",
      onFinish: signIn
    }), /* @__PURE__ */ jsxs("div", {
      className: "m-[auto] flex justify-center mt-2",
      children: [loading && /* @__PURE__ */ jsx("p", {
        children: "Loading..."
      }), error && /* @__PURE__ */ jsxs("p", {
        className: "text-red-500",
        children: ["Error: ", error.message]
      })]
    })]
  });
};
const UserForm = (props) => {
  const {
    onFinish,
    formType
  } = props;
  const [values, setValues] = React.useState({});
  const onChange = (e2) => {
    setValues(__spreadProps(__spreadValues({}, values), {
      [e2.target.name]: e2.target.value
    }));
  };
  const title = formType === "signup" ? "Sign Up" : "Sign In";
  return /* @__PURE__ */ jsxs("div", {
    className: "user-form-container",
    children: [/* @__PURE__ */ jsx("h2", {
      className: "border-b-[1px] pb-3",
      children: title
    }), /* @__PURE__ */ jsxs("form", {
      className: "form",
      onSubmit: (e2) => {
        e2.preventDefault();
        onFinish({
          variables: {
            userData: __spreadValues({}, values)
          }
        });
        console.log(values);
      },
      children: [/* @__PURE__ */ jsx("label", {
        htmlFor: "username",
        children: "Username:"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        autoComplete: "off",
        type: "text",
        id: "username",
        name: "username",
        placeholder: "username",
        onChange
      }), /* @__PURE__ */ jsx("label", {
        htmlFor: "password",
        children: "Password:"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        autoComplete: "off",
        type: "password",
        id: "password",
        name: "password",
        placeholder: "password",
        onChange
      }), /* @__PURE__ */ jsx("button", {
        className: "button m-[auto] rounded-md",
        type: "submit",
        children: "Submit"
      })]
    })]
  });
};
const NoteForm = (props) => {
  const {
    onFinish,
    data = {}
  } = props;
  const [values, setValues] = React.useState(data);
  const onChange = (e2) => {
    setValues(__spreadProps(__spreadValues({}, values), {
      [e2.target.name]: e2.target.value
    }));
  };
  return /* @__PURE__ */ jsx("div", {
    className: "h-full",
    children: /* @__PURE__ */ jsxs("form", {
      className: "form h-full",
      onSubmit: (e2) => {
        e2.preventDefault();
        onFinish({
          variables: {
            noteData: __spreadValues({}, values)
          }
        });
      },
      children: [/* @__PURE__ */ jsx("textarea", {
        className: "w-full h-5/6",
        required: true,
        name: "content",
        placeholder: "note...",
        onChange,
        value: values.content
      }), /* @__PURE__ */ jsx("button", {
        className: "button m-[auto]",
        children: "Save"
      })]
    })
  });
};
const NewNotePage = (_props) => {
  const navigate = useNavigate();
  const [createNote, {
    loading,
    error
  }] = useMutation(NEW_NOTE, {
    refetchQueries: [{
      query: GET_NOTES
    }, {
      query: GET_MY_NOTES
    }],
    onCompleted: (data) => {
      navigate(`/notes/${data.createNote._id}`);
    }
  });
  React.useEffect(() => {
    document.title = "New Note - Notedly";
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NoteForm, {
      onFinish: createNote
    }), /* @__PURE__ */ jsxs("div", {
      className: "m-[auto] flex justify-center mt-2",
      children: [loading && /* @__PURE__ */ jsx("p", {
        children: "Loading..."
      }), error && /* @__PURE__ */ jsxs("p", {
        className: "text-red-500",
        children: ["Error: ", error.message]
      })]
    })]
  });
};
const NotePage = (_props) => {
  const {
    noteId
  } = useParams();
  const {
    data,
    loading,
    error
  } = useQuery(GET_NOTE, {
    variables: {
      noteId
    }
  });
  if (!data || loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsx("p", {
      children: "Error! Note not found"
    });
  return /* @__PURE__ */ jsx(NoteItem, {
    note: data.note
  });
};
const EditNotePage = (_props) => {
  const {
    noteId
  } = useParams();
  const navigate = useNavigate();
  const {
    data,
    loading,
    error
  } = useQuery(GET_NOTE, {
    variables: {
      noteId
    }
  });
  const {
    data: userData,
    loading: loadingUser
  } = useQuery(GET_ME);
  const [updateNote, {
    loading: loadingUpdated,
    error: errorUpdated
  }] = useMutation(EDIT_NOTE, {
    variables: {
      noteData: {
        noteId
      }
    },
    onCompleted: () => navigate(`/notes/${noteId}`)
  });
  React.useEffect(() => {
    document.title = "Edit Note - Notedly";
  }, []);
  if (loading || loadingUser)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error Note not found: ", error.message]
    });
  if (userData.currentUser._id !== data.note.author._id)
    return /* @__PURE__ */ jsx("p", {
      children: "You do not have access to edit this note"
    });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NoteForm, {
      onFinish: updateNote,
      data: {
        noteId,
        content: data.note.content
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "m-[auto] flex justify-center mt-2",
      children: [loadingUpdated && /* @__PURE__ */ jsx("p", {
        children: "Loading..."
      }), errorUpdated && /* @__PURE__ */ jsxs("p", {
        className: "text-red-500",
        children: ["Error: ", errorUpdated.message]
      })]
    })]
  });
};
const MyNotesPage = (_props) => {
  const {
    data,
    loading,
    error
  } = useQuery(GET_MY_NOTES);
  React.useEffect(() => {
    document.title = "My Notes - Notedly";
  }, []);
  if (loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    });
  const notes = data.currentUser.notes;
  if (notes.length !== 0)
    return /* @__PURE__ */ jsx(NoteList, {
      notes
    });
  return /* @__PURE__ */ jsx("p", {
    children: "No notes yet"
  });
};
const Container = (_props) => {
  const {
    data,
    loading,
    error
  } = useQuery(IS_LOGGED_IN);
  const location = useLocation();
  if (loading)
    return null;
  if (error)
    return /* @__PURE__ */ jsxs("p", {
      children: ["Error: ", error.message]
    });
  const displayLoggedIn = () => /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Route, {
      path: "/mynotes",
      element: /* @__PURE__ */ jsx(MyNotesPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "/favorites",
      element: /* @__PURE__ */ jsx(FavoritesPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "/new",
      element: /* @__PURE__ */ jsx(NewNotePage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "/notes/:noteId/edit",
      element: /* @__PURE__ */ jsx(EditNotePage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "*",
      element: /* @__PURE__ */ jsx(Navigate, {
        to: "/",
        replace: true,
        state: {
          from: location
        }
      })
    })]
  });
  const displayLoggedOut = () => /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Route, {
      path: "/signup",
      element: /* @__PURE__ */ jsx(SignUpPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "/signin",
      element: /* @__PURE__ */ jsx(SignInPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "*",
      element: /* @__PURE__ */ jsx(Navigate, {
        to: "/signin",
        replace: true,
        state: {
          from: location
        }
      })
    })]
  });
  return /* @__PURE__ */ jsx(Routes, {
    children: /* @__PURE__ */ jsxs(Route, {
      element: /* @__PURE__ */ jsx(DefaultLayout, {}),
      children: [/* @__PURE__ */ jsx(Route, {
        path: "/",
        element: /* @__PURE__ */ jsx(HomePage, {})
      }), /* @__PURE__ */ jsx(Route, {
        path: "/notes/:noteId",
        element: /* @__PURE__ */ jsx(NotePage, {})
      }), data.isLoggedIn ? displayLoggedIn() : displayLoggedOut()]
    })
  });
};
const container = document.getElementById("root");
const root = createRoot(container);
const httpLink = createHttpLink({
  uri: "https://notedly-service.herokuapp.com/graphql"
});
const authLink = setContext((_, {
  headers
}) => ({
  headers: __spreadProps(__spreadValues({}, headers), {
    authorization: `Bearer ${localStorage.getItem("token") || ""}`
  })
}));
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});
const isLoggedInQuery = () => ({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});
cache.writeQuery(isLoggedInQuery());
client.onResetStore(() => Promise.resolve(cache.writeQuery(isLoggedInQuery())));
const DebugRouter = ({
  children
}) => {
  useLocation();
  return children;
};
const App = () => {
  return /* @__PURE__ */ jsx(BrowserRouter, {
    basename: "/notedly/",
    children: /* @__PURE__ */ jsx(ApolloProvider, {
      client,
      children: /* @__PURE__ */ jsx(DebugRouter, {
        children: /* @__PURE__ */ jsx(Container, {})
      })
    })
  });
};
root.render(/* @__PURE__ */ jsx(App, {}));
//# sourceMappingURL=index.73ebe639.js.map
