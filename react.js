/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";
var l = Symbol.for("react.element"),
  n = Symbol.for("react.portal"),
  p = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.server_context"),
  w = Symbol.for("react.forward_ref"),
  x = Symbol.for("react.suspense"),
  y = Symbol.for("react.memo"),
  z = Symbol.for("react.lazy"),
  A = Symbol.for("react.default_value"),
  B = Symbol.iterator;
function C(a) {
  if (null === a || "object" !== typeof a) return null;
  a = (B && a[B]) || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var D = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  E = Object.assign,
  F = {};
function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = d || D;
}
G.prototype.isReactComponent = {};
G.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, a, b, "setState");
};
G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function H() {}
H.prototype = G.prototype;
function I(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = d || D;
}
var J = (I.prototype = new H());
J.constructor = I;
E(J, G.prototype);
J.isPureReactComponent = !0;
var K = Array.isArray,
  L = Object.prototype.hasOwnProperty,
  M = { current: null },
  N = { key: !0, ref: !0, __self: !0, __source: !0 };
function O(a, b, d) {
  var c,
    e = {},
    f = null,
    g = null;
  if (null != b)
    for (c in (void 0 !== b.ref && (g = b.ref),
    void 0 !== b.key && (f = "" + b.key),
    b))
      L.call(b, c) && !N.hasOwnProperty(c) && (e[c] = b[c]);
  var h = arguments.length - 2;
  if (1 === h) e.children = d;
  else if (1 < h) {
    for (var k = Array(h), m = 0; m < h; m++) k[m] = arguments[m + 2];
    e.children = k;
  }
  if (a && a.defaultProps)
    for (c in ((h = a.defaultProps), h)) void 0 === e[c] && (e[c] = h[c]);
  return { $$typeof: l, type: a, key: f, ref: g, props: e, _owner: M.current };
}
function aa(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner,
  };
}
function P(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return (
    "$" +
    a.replace(/[=:]/g, function (a) {
      return b[a];
    })
  );
}
var Q = /\/+/g;
function R(a, b) {
  return "object" === typeof a && null !== a && null != a.key
    ? escape("" + a.key)
    : b.toString(36);
}
function S(a, b, d, c, e) {
  var f = typeof a;
  if ("undefined" === f || "boolean" === f) a = null;
  var g = !1;
  if (null === a) g = !0;
  else
    switch (f) {
      case "string":
      case "number":
        g = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            g = !0;
        }
    }
  if (g)
    return (
      (g = a),
      (e = e(g)),
      (a = "" === c ? "." + R(g, 0) : c),
      K(e)
        ? ((d = ""),
          null != a && (d = a.replace(Q, "$&/") + "/"),
          S(e, b, d, "", function (a) {
            return a;
          }))
        : null != e &&
          (P(e) &&
            (e = aa(
              e,
              d +
                (!e.key || (g && g.key === e.key)
                  ? ""
                  : ("" + e.key).replace(Q, "$&/") + "/") +
                a
            )),
          b.push(e)),
      1
    );
  g = 0;
  c = "" === c ? "." : c + ":";
  if (K(a))
    for (var h = 0; h < a.length; h++) {
      f = a[h];
      var k = c + R(f, h);
      g += S(f, b, d, k, e);
    }
  else if (((k = C(a)), "function" === typeof k))
    for (a = k.call(a), h = 0; !(f = a.next()).done; )
      (f = f.value), (k = c + R(f, h++)), (g += S(f, b, d, k, e));
  else if ("object" === f)
    throw (
      ((b = String(a)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === b
            ? "object with keys {" + Object.keys(a).join(", ") + "}"
            : b) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return g;
}
function T(a, b, d) {
  if (null == a) return a;
  var c = [],
    e = 0;
  S(a, c, "", "", function (a) {
    return b.call(d, a, e++);
  });
  return c;
}
function ba(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(
      function (b) {
        if (0 === a._status || -1 === a._status)
          (a._status = 1), (a._result = b);
      },
      function (b) {
        if (0 === a._status || -1 === a._status)
          (a._status = 2), (a._result = b);
      }
    );
    -1 === a._status && ((a._status = 0), (a._result = b));
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = { current: null };
function ca() {
  return new WeakMap();
}
function V() {
  return { s: 0, v: void 0, o: null, p: null };
}
var W = { current: null },
  X = { transition: null },
  Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: U,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: M,
    ContextRegistry: {},
  },
  Z = Y.ContextRegistry;
exports.Children = {
  map: T,
  forEach: function (a, b, d) {
    T(
      a,
      function () {
        b.apply(this, arguments);
      },
      d
    );
  },
  count: function (a) {
    var b = 0;
    T(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return (
      T(a, function (a) {
        return a;
      }) || []
    );
  },
  only: function (a) {
    if (!P(a))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return a;
  },
};
exports.Component = G;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = I;
exports.StrictMode = q;
exports.Suspense = x;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function (a) {
  return function () {
    var b = U.current;
    if (!b) return a.apply(null, arguments);
    var d = b.getCacheForType(ca);
    b = d.get(a);
    void 0 === b && ((b = V()), d.set(a, b));
    d = 0;
    for (var c = arguments.length; d < c; d++) {
      var e = arguments[d];
      if ("function" === typeof e || ("object" === typeof e && null !== e)) {
        var f = b.o;
        null === f && (b.o = f = new WeakMap());
        b = f.get(e);
        void 0 === b && ((b = V()), f.set(e, b));
      } else
        (f = b.p),
          null === f && (b.p = f = new Map()),
          (b = f.get(e)),
          void 0 === b && ((b = V()), f.set(e, b));
    }
    if (1 === b.s) return b.v;
    if (2 === b.s) throw b.v;
    try {
      var g = a.apply(null, arguments);
      d = b;
      d.s = 1;
      return (d.v = g);
    } catch (h) {
      throw ((g = b), (g.s = 2), (g.v = h), h);
    }
  };
};
exports.cloneElement = function (a, b, d) {
  if (null === a || void 0 === a)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        a +
        "."
    );
  var c = E({}, a.props),
    e = a.key,
    f = a.ref,
    g = a._owner;
  if (null != b) {
    void 0 !== b.ref && ((f = b.ref), (g = M.current));
    void 0 !== b.key && (e = "" + b.key);
    if (a.type && a.type.defaultProps) var h = a.type.defaultProps;
    for (k in b)
      L.call(b, k) &&
        !N.hasOwnProperty(k) &&
        (c[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k]);
  }
  var k = arguments.length - 2;
  if (1 === k) c.children = d;
  else if (1 < k) {
    h = Array(k);
    for (var m = 0; m < k; m++) h[m] = arguments[m + 2];
    c.children = h;
  }
  return { $$typeof: l, type: a.type, key: e, ref: f, props: c, _owner: g };
};
exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  };
  a.Provider = { $$typeof: t, _context: a };
  return (a.Consumer = a);
};
exports.createElement = O;
exports.createFactory = function (a) {
  var b = O.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return { current: null };
};
exports.createServerContext = function (a, b) {
  var d = !0;
  if (!Z[a]) {
    d = !1;
    var c = {
      $$typeof: v,
      _currentValue: b,
      _currentValue2: b,
      _defaultValue: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _globalName: a,
    };
    c.Provider = { $$typeof: t, _context: c };
    Z[a] = c;
  }
  c = Z[a];
  if (c._defaultValue === A)
    (c._defaultValue = b),
      c._currentValue === A && (c._currentValue = b),
      c._currentValue2 === A && (c._currentValue2 = b);
  else if (d) throw Error("ServerContext: " + a + " already defined");
  return c;
};
exports.forwardRef = function (a) {
  return { $$typeof: w, render: a };
};
exports.isValidElement = P;
exports.lazy = function (a) {
  return { $$typeof: z, _payload: { _status: -1, _result: a }, _init: ba };
};
exports.memo = function (a, b) {
  return { $$typeof: y, type: a, compare: void 0 === b ? null : b };
};
exports.startTransition = function (a) {
  var b = X.transition;
  X.transition = {};
  try {
    a();
  } finally {
    X.transition = b;
  }
};
exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
exports.unstable_useCacheRefresh = function () {
  return W.current.useCacheRefresh();
};
exports.use = function (a) {
  return W.current.use(a);
};
exports.useCallback = function (a, b) {
  return W.current.useCallback(a, b);
};
exports.useContext = function (a) {
  return W.current.useContext(a);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (a) {
  return W.current.useDeferredValue(a);
};
exports.useEffect = function (a, b) {
  return W.current.useEffect(a, b);
};
exports.useId = function () {
  return W.current.useId();
};
exports.useImperativeHandle = function (a, b, d) {
  return W.current.useImperativeHandle(a, b, d);
};
exports.useInsertionEffect = function (a, b) {
  return W.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function (a, b) {
  return W.current.useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return W.current.useMemo(a, b);
};
exports.useReducer = function (a, b, d) {
  return W.current.useReducer(a, b, d);
};
exports.useRef = function (a) {
  return W.current.useRef(a);
};
exports.useState = function (a) {
  return W.current.useState(a);
};
exports.useSyncExternalStore = function (a, b, d) {
  return W.current.useSyncExternalStore(a, b, d);
};
exports.useTransition = function () {
  return W.current.useTransition();
};
exports.version = "18.3.0-next-fecc288b7-20221025";