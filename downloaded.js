const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Testimonials-BUcbrTka.js",
      "assets/Testimonials-BBnn_H_2.css",
      "assets/PremiumCarousel-DXD6BU8Q.js",
      "assets/PremiumCarousel-DewOVh0P.css",
    ]),
) => i.map((i) => d[i]);
var u0 = Object.defineProperty;
var d0 = (e, t, n) =>
  t in e
    ? u0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var at = (e, t, n) => d0(e, typeof t != "symbol" ? t + "" : t, n);
function h0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function f0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ih = { exports: {} },
  Ls = {},
  sh = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
  p0 = Symbol.for("react.portal"),
  m0 = Symbol.for("react.fragment"),
  g0 = Symbol.for("react.strict_mode"),
  y0 = Symbol.for("react.profiler"),
  x0 = Symbol.for("react.provider"),
  v0 = Symbol.for("react.context"),
  k0 = Symbol.for("react.forward_ref"),
  w0 = Symbol.for("react.suspense"),
  b0 = Symbol.for("react.memo"),
  j0 = Symbol.for("react.lazy"),
  Sc = Symbol.iterator;
function S0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sc && e[Sc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lh = Object.assign,
  ah = {};
function Jn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ah),
    (this.updater = n || oh));
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ch() {}
ch.prototype = Jn.prototype;
function Yl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ah),
    (this.updater = n || oh));
}
var Xl = (Yl.prototype = new ch());
Xl.constructor = Yl;
lh(Xl, Jn.prototype);
Xl.isPureReactComponent = !0;
var Cc = Array.isArray,
  uh = Object.prototype.hasOwnProperty,
  Zl = { current: null },
  dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function hh(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      uh.call(t, r) && !dh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ti,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: Zl.current,
  };
}
function C0(e, t) {
  return {
    $$typeof: ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ql(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function L0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lc = /\/+/g;
function Zs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? L0("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (s) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ti:
          case p0:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Zs(l, 0) : r),
      Cc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Lc, "$&/") + "/"),
          Ri(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ql(i) &&
            (i = C0(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Lc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Cc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var c = r + Zs(s, a);
      l += Ri(s, t, n, c, i);
    }
  else if (((c = S0(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (c = r + Zs(s, a++)), (l += Ri(s, t, n, c, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return l;
}
function hi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function P0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Ai = { transition: null },
  T0 = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: Zl,
  };
function fh() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: hi,
  forEach: function (e, t, n) {
    hi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ql(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
N.Component = Jn;
N.Fragment = m0;
N.Profiler = y0;
N.PureComponent = Yl;
N.StrictMode = g0;
N.Suspense = w0;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T0;
N.act = fh;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = lh({}, e.props),
    i = e.key,
    s = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (l = Zl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      uh.call(t, c) &&
        !dh.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ti, type: e.type, key: i, ref: s, props: r, _owner: l };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: v0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: x0, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = hh;
N.createFactory = function (e) {
  var t = hh.bind(null, e);
  return ((t.type = e), t);
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: k0, render: e };
};
N.isValidElement = ql;
N.lazy = function (e) {
  return { $$typeof: j0, _payload: { _status: -1, _result: e }, _init: P0 };
};
N.memo = function (e, t) {
  return { $$typeof: b0, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = Ai.transition;
  Ai.transition = {};
  try {
    e();
  } finally {
    Ai.transition = t;
  }
};
N.unstable_act = fh;
N.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
N.useContext = function (e) {
  return xe.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
N.useId = function () {
  return xe.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return xe.current.useRef(e);
};
N.useState = function (e) {
  return xe.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return xe.current.useTransition();
};
N.version = "18.3.1";
sh.exports = N;
var j = sh.exports;
const ph = f0(j),
  E0 = h0({ __proto__: null, default: ph }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W0 = j,
  M0 = Symbol.for("react.element"),
  R0 = Symbol.for("react.fragment"),
  A0 = Object.prototype.hasOwnProperty,
  D0 = W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  N0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function mh(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) A0.call(t, r) && !N0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: M0,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: D0.current,
  };
}
Ls.Fragment = R0;
Ls.jsx = mh;
Ls.jsxs = mh;
ih.exports = Ls;
var o = ih.exports,
  Io = {},
  gh = { exports: {} },
  Ae = {},
  yh = { exports: {} },
  xh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, R) {
    var A = T.length;
    T.push(R);
    e: for (; 0 < A; ) {
      var Z = (A - 1) >>> 1,
        re = T[Z];
      if (0 < i(re, R)) ((T[Z] = R), (T[A] = re), (A = Z));
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var R = T[0],
      A = T.pop();
    if (A !== R) {
      T[0] = A;
      e: for (var Z = 0, re = T.length, ui = re >>> 1; Z < ui; ) {
        var Gt = 2 * (Z + 1) - 1,
          Xs = T[Gt],
          Yt = Gt + 1,
          di = T[Yt];
        if (0 > i(Xs, A))
          Yt < re && 0 > i(di, Xs)
            ? ((T[Z] = di), (T[Yt] = A), (Z = Yt))
            : ((T[Z] = Xs), (T[Gt] = A), (Z = Gt));
        else if (Yt < re && 0 > i(di, A)) ((T[Z] = di), (T[Yt] = A), (Z = Yt));
        else break e;
      }
    }
    return R;
  }
  function i(T, R) {
    var A = T.sortIndex - R.sortIndex;
    return A !== 0 ? A : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var c = [],
    u = [],
    d = 1,
    h = null,
    f = 3,
    y = !1,
    x = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= T)
        (r(u), (R.sortIndex = R.expirationTime), t(c, R));
      else break;
      R = n(u);
    }
  }
  function k(T) {
    if (((v = !1), g(T), !x))
      if (n(c) !== null) ((x = !0), bt(b));
      else {
        var R = n(u);
        R !== null && Q(k, R.startTime - T);
      }
  }
  function b(T, R) {
    ((x = !1), v && ((v = !1), m(S), (S = -1)), (y = !0));
    var A = f;
    try {
      for (
        g(R), h = n(c);
        h !== null && (!(h.expirationTime > R) || (T && !O()));
      ) {
        var Z = h.callback;
        if (typeof Z == "function") {
          ((h.callback = null), (f = h.priorityLevel));
          var re = Z(h.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof re == "function" ? (h.callback = re) : h === n(c) && r(c),
            g(R));
        } else r(c);
        h = n(c);
      }
      if (h !== null) var ui = !0;
      else {
        var Gt = n(u);
        (Gt !== null && Q(k, Gt.startTime - R), (ui = !1));
      }
      return ui;
    } finally {
      ((h = null), (f = A), (y = !1));
    }
  }
  var L = !1,
    P = null,
    S = -1,
    D = 5,
    W = -1;
  function O() {
    return !(e.unstable_now() - W < D);
  }
  function qe() {
    if (P !== null) {
      var T = e.unstable_now();
      W = T;
      var R = !0;
      try {
        R = P(!0, T);
      } finally {
        R ? Je() : ((L = !1), (P = null));
      }
    } else L = !1;
  }
  var Je;
  if (typeof p == "function")
    Je = function () {
      p(qe);
    };
  else if (typeof MessageChannel < "u") {
    var ke = new MessageChannel(),
      yn = ke.port2;
    ((ke.port1.onmessage = qe),
      (Je = function () {
        yn.postMessage(null);
      }));
  } else
    Je = function () {
      w(qe, 0);
    };
  function bt(T) {
    ((P = T), L || ((L = !0), Je()));
  }
  function Q(T, R) {
    S = w(function () {
      T(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || y || ((x = !0), bt(b));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var A = f;
      f = R;
      try {
        return T();
      } finally {
        f = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = f;
      f = T;
      try {
        return R();
      } finally {
        f = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, R, A) {
      var Z = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Z + A : Z))
          : (A = Z),
        T)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = A + re),
        (T = {
          id: d++,
          callback: R,
          priorityLevel: T,
          startTime: A,
          expirationTime: re,
          sortIndex: -1,
        }),
        A > Z
          ? ((T.sortIndex = A),
            t(u, T),
            n(c) === null &&
              T === n(u) &&
              (v ? (m(S), (S = -1)) : (v = !0), Q(k, A - Z)))
          : ((T.sortIndex = re), t(c, T), x || y || ((x = !0), bt(b))),
        T
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (T) {
      var R = f;
      return function () {
        var A = f;
        f = R;
        try {
          return T.apply(this, arguments);
        } finally {
          f = A;
        }
      };
    }));
})(xh);
yh.exports = xh;
var B0 = yh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0 = j,
  Me = B0;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vh = new Set(),
  Ar = {};
function pn(e, t) {
  (Un(e, t), Un(e + "Capture", t));
}
function Un(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) vh.add(t[e]);
}
var gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zo = Object.prototype.hasOwnProperty,
  z0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pc = {},
  Tc = {};
function _0(e) {
  return zo.call(Tc, e)
    ? !0
    : zo.call(Pc, e)
      ? !1
      : z0.test(e)
        ? (Tc[e] = !0)
        : ((Pc[e] = !0), !1);
}
function V0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function F0(e, t, n, r) {
  if (t === null || typeof t > "u" || V0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, s, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = l));
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jl = /[\-:]([a-z])/g;
function ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jl, ea);
    ce[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jl, ea);
    ce[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Jl, ea);
  ce[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (F0(t, n, i, r) && (n = null),
    r || i === null
      ? _0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fi = Symbol.for("react.element"),
  vn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  na = Symbol.for("react.strict_mode"),
  _o = Symbol.for("react.profiler"),
  kh = Symbol.for("react.provider"),
  wh = Symbol.for("react.context"),
  ra = Symbol.for("react.forward_ref"),
  Vo = Symbol.for("react.suspense"),
  Fo = Symbol.for("react.suspense_list"),
  ia = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  bh = Symbol.for("react.offscreen"),
  Ec = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ec && e[Ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  qs;
function fr(e) {
  if (qs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qs = (t && t[1]) || "";
    }
  return (
    `
` +
    qs +
    e
  );
}
var Js = !1;
function eo(e, t) {
  if (!e || Js) return "";
  Js = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          l = i.length - 1,
          a = s.length - 1;
        1 <= l && 0 <= a && i[l] !== s[a];
      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== s[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== s[a])) {
                var c =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    ((Js = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function O0(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = eo(e.type, !1)), e);
    case 11:
      return ((e = eo(e.type.render, !1)), e);
    case 1:
      return ((e = eo(e.type, !0)), e);
    default:
      return "";
  }
}
function Oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case vn:
      return "Portal";
    case _o:
      return "Profiler";
    case na:
      return "StrictMode";
    case Vo:
      return "Suspense";
    case Fo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wh:
        return (e.displayName || "Context") + ".Consumer";
      case kh:
        return (e._context.displayName || "Context") + ".Provider";
      case ra:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ia:
        return (
          (t = e.displayName || null),
          t !== null ? t : Oo(e.type) || "Memo"
        );
      case Ct:
        ((t = e._payload), (e = e._init));
        try {
          return Oo(e(t));
        } catch {}
    }
  return null;
}
function U0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Oo(t);
    case 8:
      return t === na ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Q0(e) {
  var t = jh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          ((r = "" + l), s.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function pi(e) {
  e._valueTracker || (e._valueTracker = Q0(e));
}
function Sh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = jh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ki(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Uo(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Ch(e, t) {
  ((t = t.checked), t != null && ta(e, "checked", t, !1));
}
function Qo(e, t) {
  Ch(e, t);
  var n = Vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ho(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ho(e, t.type, Vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ho(e, t, n) {
  (t !== "number" || Ki(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Vt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function Lh(e, t) {
  var n = Vt(t.value),
    r = Vt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ph(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ph(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var mi,
  Th = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mi = mi || document.createElement("div"),
          mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  H0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  H0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]));
  });
});
function Eh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Eh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var $0 = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Go(e, t) {
  if (t) {
    if ($0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Yo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xo = null;
function sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zo = null,
  In = null,
  zn = null;
function Dc(e) {
  if ((e = ii(e))) {
    if (typeof Zo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ms(t)), Zo(e.stateNode, e.type, t));
  }
}
function Mh(e) {
  In ? (zn ? zn.push(e) : (zn = [e])) : (In = e);
}
function Rh() {
  if (In) {
    var e = In,
      t = zn;
    if (((zn = In = null), Dc(e), t)) for (e = 0; e < t.length; e++) Dc(t[e]);
  }
}
function Ah(e, t) {
  return e(t);
}
function Dh() {}
var to = !1;
function Nh(e, t, n) {
  if (to) return e(t, n);
  to = !0;
  try {
    return Ah(e, t, n);
  } finally {
    ((to = !1), (In !== null || zn !== null) && (Dh(), Rh()));
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ms(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var qo = !1;
if (gt)
  try {
    var sr = {};
    (Object.defineProperty(sr, "passive", {
      get: function () {
        qo = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr));
  } catch {
    qo = !1;
  }
function K0(e, t, n, r, i, s, l, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var wr = !1,
  Gi = null,
  Yi = !1,
  Jo = null,
  G0 = {
    onError: function (e) {
      ((wr = !0), (Gi = e));
    },
  };
function Y0(e, t, n, r, i, s, l, a, c) {
  ((wr = !1), (Gi = null), K0.apply(G0, arguments));
}
function X0(e, t, n, r, i, s, l, a, c) {
  if ((Y0.apply(this, arguments), wr)) {
    if (wr) {
      var u = Gi;
      ((wr = !1), (Gi = null));
    } else throw Error(C(198));
    Yi || ((Yi = !0), (Jo = u));
  }
}
function mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Nc(e) {
  if (mn(e) !== e) throw Error(C(188));
}
function Z0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Nc(i), e);
        if (s === r) return (Nc(i), t);
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          ((l = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((l = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((l = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((l = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Ih(e) {
  return ((e = Z0(e)), e !== null ? zh(e) : null);
}
function zh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _h = Me.unstable_scheduleCallback,
  Bc = Me.unstable_cancelCallback,
  q0 = Me.unstable_shouldYield,
  J0 = Me.unstable_requestPaint,
  J = Me.unstable_now,
  eg = Me.unstable_getCurrentPriorityLevel,
  oa = Me.unstable_ImmediatePriority,
  Vh = Me.unstable_UserBlockingPriority,
  Xi = Me.unstable_NormalPriority,
  tg = Me.unstable_LowPriority,
  Fh = Me.unstable_IdlePriority,
  Ps = null,
  rt = null;
function ng(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : sg,
  rg = Math.log,
  ig = Math.LN2;
function sg(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((rg(e) / ig) | 0)) | 0);
}
var gi = 64,
  yi = 4194304;
function mr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = mr(a)) : ((s &= l), s !== 0 && (r = mr(s)));
  } else ((l = n & ~i), l !== 0 ? (r = mr(l)) : s !== 0 && (r = mr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ye(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function og(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function lg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var l = 31 - Ye(s),
      a = 1 << l,
      c = i[l];
    (c === -1
      ? (!(a & n) || a & r) && (i[l] = og(a, t))
      : c <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function el(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oh() {
  var e = gi;
  return ((gi <<= 1), !(gi & 4194240) && (gi = 64), e);
}
function no(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ni(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n));
}
function ag(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ye(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function la(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var I = 0;
function Uh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Qh,
  aa,
  Hh,
  $h,
  Kh,
  tl = !1,
  xi = [],
  Rt = null,
  At = null,
  Dt = null,
  Br = new Map(),
  Ir = new Map(),
  Pt = [],
  cg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ic(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function or(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ii(t)), t !== null && aa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ug(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Rt = or(Rt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((At = or(At, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Dt = or(Dt, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Br.set(s, or(Br.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Ir.set(s, or(Ir.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Gh(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bh(n)), t !== null)) {
          ((e.blockedOn = t),
            Kh(e.priority, function () {
              Hh(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Xo = r), n.target.dispatchEvent(r), (Xo = null));
    } else return ((t = ii(n)), t !== null && aa(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function zc(e, t, n) {
  Di(e) && n.delete(t);
}
function dg() {
  ((tl = !1),
    Rt !== null && Di(Rt) && (Rt = null),
    At !== null && Di(At) && (At = null),
    Dt !== null && Di(Dt) && (Dt = null),
    Br.forEach(zc),
    Ir.forEach(zc));
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tl ||
      ((tl = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, dg)));
}
function zr(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < xi.length) {
    lr(xi[0], e);
    for (var n = 1; n < xi.length; n++) {
      var r = xi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && lr(Rt, e),
      At !== null && lr(At, e),
      Dt !== null && lr(Dt, e),
      Br.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    ((r = Pt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    (Gh(n), n.blockedOn === null && Pt.shift());
}
var _n = wt.ReactCurrentBatchConfig,
  qi = !0;
function hg(e, t, n, r) {
  var i = I,
    s = _n.transition;
  _n.transition = null;
  try {
    ((I = 1), ca(e, t, n, r));
  } finally {
    ((I = i), (_n.transition = s));
  }
}
function fg(e, t, n, r) {
  var i = I,
    s = _n.transition;
  _n.transition = null;
  try {
    ((I = 4), ca(e, t, n, r));
  } finally {
    ((I = i), (_n.transition = s));
  }
}
function ca(e, t, n, r) {
  if (qi) {
    var i = nl(e, t, n, r);
    if (i === null) (fo(e, t, r, Ji, n), Ic(e, r));
    else if (ug(i, e, t, n, r)) r.stopPropagation();
    else if ((Ic(e, r), t & 4 && -1 < cg.indexOf(e))) {
      for (; i !== null; ) {
        var s = ii(i);
        if (
          (s !== null && Qh(s),
          (s = nl(e, t, n, r)),
          s === null && fo(e, t, r, Ji, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else fo(e, t, r, null, n);
  }
}
var Ji = null;
function nl(e, t, n, r) {
  if (((Ji = null), (e = sa(r)), (e = tn(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ji = e), null);
}
function Yh(e) {
  switch (e) {
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
      switch (eg()) {
        case oa:
          return 1;
        case Vh:
          return 4;
        case Xi:
        case tg:
          return 16;
        case Fh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  ua = null,
  Ni = null;
function Xh() {
  if (Ni) return Ni;
  var e,
    t = ua,
    n = t.length,
    r,
    i = "value" in Et ? Et.value : Et.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[s - r]; r++);
  return (Ni = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vi() {
  return !0;
}
function _c() {
  return !1;
}
function De(e) {
  function t(n, r, i, s, l) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = l),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? vi
        : _c),
      (this.isPropagationStopped = _c),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vi));
      },
      persist: function () {},
      isPersistent: vi,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  da = De(er),
  ri = G({}, er, { view: 0, detail: 0 }),
  pg = De(ri),
  ro,
  io,
  ar,
  Ts = G({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ha,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === "mousemove"
              ? ((ro = e.screenX - ar.screenX), (io = e.screenY - ar.screenY))
              : (io = ro = 0),
            (ar = e)),
          ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : io;
    },
  }),
  Vc = De(Ts),
  mg = G({}, Ts, { dataTransfer: 0 }),
  gg = De(mg),
  yg = G({}, ri, { relatedTarget: 0 }),
  so = De(yg),
  xg = G({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vg = De(xg),
  kg = G({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wg = De(kg),
  bg = G({}, er, { data: 0 }),
  Fc = De(bg),
  jg = {
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
    MozPrintableKey: "Unidentified",
  },
  Sg = {
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
    224: "Meta",
  },
  Cg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cg[e]) ? !!t[e] : !1;
}
function ha() {
  return Lg;
}
var Pg = G({}, ri, {
    key: function (e) {
      if (e.key) {
        var t = jg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Sg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ha,
    charCode: function (e) {
      return e.type === "keypress" ? Bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Tg = De(Pg),
  Eg = G({}, Ts, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oc = De(Eg),
  Wg = G({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ha,
  }),
  Mg = De(Wg),
  Rg = G({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ag = De(Rg),
  Dg = G({}, Ts, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ng = De(Dg),
  Bg = [9, 13, 27, 32],
  fa = gt && "CompositionEvent" in window,
  br = null;
gt && "documentMode" in document && (br = document.documentMode);
var Ig = gt && "TextEvent" in window && !br,
  Zh = gt && (!fa || (br && 8 < br && 11 >= br)),
  Uc = " ",
  Qc = !1;
function qh(e, t) {
  switch (e) {
    case "keyup":
      return Bg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var wn = !1;
function zg(e, t) {
  switch (e) {
    case "compositionend":
      return Jh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qc = !0), Uc);
    case "textInput":
      return ((e = t.data), e === Uc && Qc ? null : e);
    default:
      return null;
  }
}
function _g(e, t) {
  if (wn)
    return e === "compositionend" || (!fa && qh(e, t))
      ? ((e = Xh()), (Ni = ua = Et = null), (wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vg[e.type] : t === "textarea";
}
function ef(e, t, n, r) {
  (Mh(r),
    (t = es(t, "onChange")),
    0 < t.length &&
      ((n = new da("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var jr = null,
  _r = null;
function Fg(e) {
  hf(e, 0);
}
function Es(e) {
  var t = Sn(e);
  if (Sh(t)) return e;
}
function Og(e, t) {
  if (e === "change") return t;
}
var tf = !1;
if (gt) {
  var oo;
  if (gt) {
    var lo = "oninput" in document;
    if (!lo) {
      var $c = document.createElement("div");
      ($c.setAttribute("oninput", "return;"),
        (lo = typeof $c.oninput == "function"));
    }
    oo = lo;
  } else oo = !1;
  tf = oo && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  jr && (jr.detachEvent("onpropertychange", nf), (_r = jr = null));
}
function nf(e) {
  if (e.propertyName === "value" && Es(_r)) {
    var t = [];
    (ef(t, _r, e, sa(e)), Nh(Fg, t));
  }
}
function Ug(e, t, n) {
  e === "focusin"
    ? (Kc(), (jr = t), (_r = n), jr.attachEvent("onpropertychange", nf))
    : e === "focusout" && Kc();
}
function Qg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es(_r);
}
function Hg(e, t) {
  if (e === "click") return Es(t);
}
function $g(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function Kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Kg;
function Vr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zo.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yc(e, t) {
  var n = Gc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gc(n);
  }
}
function rf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? rf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sf() {
  for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ki(e.document);
  }
  return t;
}
function pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gg(e) {
  var t = sf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Yc(n, s)));
        var l = Yc(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Yg = gt && "documentMode" in document && 11 >= document.documentMode,
  bn = null,
  rl = null,
  Sr = null,
  il = !1;
function Xc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  il ||
    bn == null ||
    bn !== Ki(r) ||
    ((r = bn),
    "selectionStart" in r && pa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sr && Vr(Sr, r)) ||
      ((Sr = r),
      (r = es(rl, "onSelect")),
      0 < r.length &&
        ((t = new da("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var jn = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd"),
  },
  ao = {},
  of = {};
gt &&
  ((of = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete jn.animationend.animation,
    delete jn.animationiteration.animation,
    delete jn.animationstart.animation),
  "TransitionEvent" in window || delete jn.transitionend.transition);
function Ws(e) {
  if (ao[e]) return ao[e];
  if (!jn[e]) return e;
  var t = jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in of) return (ao[e] = t[n]);
  return e;
}
var lf = Ws("animationend"),
  af = Ws("animationiteration"),
  cf = Ws("animationstart"),
  uf = Ws("transitionend"),
  df = new Map(),
  Zc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Qt(e, t) {
  (df.set(e, t), pn(t, [e]));
}
for (var co = 0; co < Zc.length; co++) {
  var uo = Zc[co],
    Xg = uo.toLowerCase(),
    Zg = uo[0].toUpperCase() + uo.slice(1);
  Qt(Xg, "on" + Zg);
}
Qt(lf, "onAnimationEnd");
Qt(af, "onAnimationIteration");
Qt(cf, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(uf, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  qg = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function qc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), X0(r, t, void 0, e), (e.currentTarget = null));
}
function hf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            c = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), c !== s && i.isPropagationStopped())) break e;
          (qc(i, a, u), (s = c));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== s && i.isPropagationStopped())
          )
            break e;
          (qc(i, a, u), (s = c));
        }
    }
  }
  if (Yi) throw ((e = Jo), (Yi = !1), (Jo = null), e);
}
function _(e, t) {
  var n = t[cl];
  n === void 0 && (n = t[cl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ff(t, e, 2, !1), n.add(r));
}
function ho(e, t, n) {
  var r = 0;
  (t && (r |= 4), ff(n, e, r, t));
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[wi]) {
    ((e[wi] = !0),
      vh.forEach(function (n) {
        n !== "selectionchange" && (qg.has(n) || ho(n, !1, e), ho(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || ((t[wi] = !0), ho("selectionchange", !1, t));
  }
}
function ff(e, t, n, r) {
  switch (Yh(t)) {
    case 1:
      var i = hg;
      break;
    case 4:
      i = fg;
      break;
    default:
      i = ca;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !qo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function fo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var c = l.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = l.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = tn(a)), l === null)) return;
          if (((c = l.tag), c === 5 || c === 6)) {
            r = s = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nh(function () {
    var u = s,
      d = sa(n),
      h = [];
    e: {
      var f = df.get(e);
      if (f !== void 0) {
        var y = da,
          x = e;
        switch (e) {
          case "keypress":
            if (Bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Tg;
            break;
          case "focusin":
            ((x = "focus"), (y = so));
            break;
          case "focusout":
            ((x = "blur"), (y = so));
            break;
          case "beforeblur":
          case "afterblur":
            y = so;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Vc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = gg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Mg;
            break;
          case lf:
          case af:
          case cf:
            y = vg;
            break;
          case uf:
            y = Ag;
            break;
          case "scroll":
            y = pg;
            break;
          case "wheel":
            y = Ng;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = wg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Oc;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          m = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k),
              m !== null && ((k = Nr(p, m)), k != null && v.push(Or(p, k, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new y(f, x, null, n, d)), h.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Xo &&
            (x = n.relatedTarget || n.fromElement) &&
            (tn(x) || x[yt]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = u),
              (x = x ? tn(x) : null),
              x !== null &&
                ((w = mn(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = u)),
          y !== x)
        ) {
          if (
            ((v = Vc),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Oc),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = y == null ? f : Sn(y)),
            (g = x == null ? f : Sn(x)),
            (f = new v(k, p + "leave", y, n, d)),
            (f.target = w),
            (f.relatedTarget = g),
            (k = null),
            tn(d) === u &&
              ((v = new v(m, p + "enter", x, n, d)),
              (v.target = g),
              (v.relatedTarget = w),
              (k = v)),
            (w = k),
            y && x)
          )
            t: {
              for (v = y, m = x, p = 0, g = v; g; g = xn(g)) p++;
              for (g = 0, k = m; k; k = xn(k)) g++;
              for (; 0 < p - g; ) ((v = xn(v)), p--);
              for (; 0 < g - p; ) ((m = xn(m)), g--);
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                ((v = xn(v)), (m = xn(m)));
              }
              v = null;
            }
          else v = null;
          (y !== null && Jc(h, f, y, v, !1),
            x !== null && w !== null && Jc(h, w, x, v, !0));
        }
      }
      e: {
        if (
          ((f = u ? Sn(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var b = Og;
        else if (Hc(f))
          if (tf) b = $g;
          else {
            b = Qg;
            var L = Ug;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (b = Hg);
        if (b && (b = b(e, u))) {
          ef(h, b, n, d);
          break e;
        }
        (L && L(e, f, u),
          e === "focusout" &&
            (L = f._wrapperState) &&
            L.controlled &&
            f.type === "number" &&
            Ho(f, "number", f.value));
      }
      switch (((L = u ? Sn(u) : window), e)) {
        case "focusin":
          (Hc(L) || L.contentEditable === "true") &&
            ((bn = L), (rl = u), (Sr = null));
          break;
        case "focusout":
          Sr = rl = bn = null;
          break;
        case "mousedown":
          il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((il = !1), Xc(h, n, d));
          break;
        case "selectionchange":
          if (Yg) break;
        case "keydown":
        case "keyup":
          Xc(h, n, d);
      }
      var P;
      if (fa)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        wn
          ? qh(e, n) && (S = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      (S &&
        (Zh &&
          n.locale !== "ko" &&
          (wn || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && wn && (P = Xh())
            : ((Et = d),
              (ua = "value" in Et ? Et.value : Et.textContent),
              (wn = !0))),
        (L = es(u, S)),
        0 < L.length &&
          ((S = new Fc(S, e, null, n, d)),
          h.push({ event: S, listeners: L }),
          P ? (S.data = P) : ((P = Jh(n)), P !== null && (S.data = P)))),
        (P = Ig ? zg(e, n) : _g(e, n)) &&
          ((u = es(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Fc("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: u }),
            (d.data = P))));
    }
    hf(h, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Nr(e, n)),
      s != null && r.unshift(Or(e, s, i)),
      (s = Nr(e, t)),
      s != null && r.push(Or(e, s, i))),
      (e = e.return));
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jc(e, t, n, r, i) {
  for (var s = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((c = Nr(n, s)), c != null && l.unshift(Or(n, c, a)))
        : i || ((c = Nr(n, s)), c != null && l.push(Or(n, c, a)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Jg = /\r\n?/g,
  ey = /\u0000|\uFFFD/g;
function eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jg,
      `
`,
    )
    .replace(ey, "");
}
function bi(e, t, n) {
  if (((t = eu(t)), eu(e) !== t && n)) throw Error(C(425));
}
function ts() {}
var sl = null,
  ol = null;
function ll(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var al = typeof setTimeout == "function" ? setTimeout : void 0,
  ty = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tu = typeof Promise == "function" ? Promise : void 0,
  ny =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tu < "u"
        ? function (e) {
            return tu.resolve(null).then(e).catch(ry);
          }
        : al;
function ry(e) {
  setTimeout(function () {
    throw e;
  });
}
function po(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), zr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  zr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + tr,
  Ur = "__reactProps$" + tr,
  yt = "__reactContainer$" + tr,
  cl = "__reactEvents$" + tr,
  iy = "__reactListeners$" + tr,
  sy = "__reactHandles$" + tr;
function tn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nu(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = nu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ii(e) {
  return (
    (e = e[nt] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ms(e) {
  return e[Ur] || null;
}
var ul = [],
  Cn = -1;
function Ht(e) {
  return { current: e };
}
function V(e) {
  0 > Cn || ((e.current = ul[Cn]), (ul[Cn] = null), Cn--);
}
function z(e, t) {
  (Cn++, (ul[Cn] = e.current), (e.current = t));
}
var Ft = {},
  me = Ht(Ft),
  je = Ht(!1),
  cn = Ft;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Se(e) {
  return ((e = e.childContextTypes), e != null);
}
function ns() {
  (V(je), V(me));
}
function ru(e, t, n) {
  if (me.current !== Ft) throw Error(C(168));
  (z(me, t), z(je, n));
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, U0(e) || "Unknown", i));
  return G({}, n, r);
}
function rs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (cn = me.current),
    z(me, e),
    z(je, je.current),
    !0
  );
}
function iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = pf(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(je),
      V(me),
      z(me, e))
    : V(je),
    z(je, n));
}
var ut = null,
  Rs = !1,
  mo = !1;
function mf(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function oy(e) {
  ((Rs = !0), mf(e));
}
function $t() {
  if (!mo && ut !== null) {
    mo = !0;
    var e = 0,
      t = I;
    try {
      var n = ut;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ut = null), (Rs = !1));
    } catch (i) {
      throw (ut !== null && (ut = ut.slice(e + 1)), _h(oa, $t), i);
    } finally {
      ((I = t), (mo = !1));
    }
  }
  return null;
}
var Ln = [],
  Pn = 0,
  is = null,
  ss = 0,
  ze = [],
  _e = 0,
  un = null,
  dt = 1,
  ht = "";
function Zt(e, t) {
  ((Ln[Pn++] = ss), (Ln[Pn++] = is), (is = e), (ss = t));
}
function gf(e, t, n) {
  ((ze[_e++] = dt), (ze[_e++] = ht), (ze[_e++] = un), (un = e));
  var r = dt;
  e = ht;
  var i = 32 - Ye(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Ye(t) + i;
  if (30 < s) {
    var l = i - (i % 5);
    ((s = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (dt = (1 << (32 - Ye(t) + i)) | (n << i) | r),
      (ht = s + e));
  } else ((dt = (1 << s) | (n << i) | r), (ht = e));
}
function ma(e) {
  e.return !== null && (Zt(e, 1), gf(e, 1, 0));
}
function ga(e) {
  for (; e === is; )
    ((is = Ln[--Pn]), (Ln[Pn] = null), (ss = Ln[--Pn]), (Ln[Pn] = null));
  for (; e === un; )
    ((un = ze[--_e]),
      (ze[_e] = null),
      (ht = ze[--_e]),
      (ze[_e] = null),
      (dt = ze[--_e]),
      (ze[_e] = null));
}
var We = null,
  Ee = null,
  U = !1,
  Ge = null;
function yf(e, t) {
  var n = Ve(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Ee = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: dt, overflow: ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hl(e) {
  if (U) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (dl(e)) throw Error(C(418));
        t = Nt(n.nextSibling);
        var r = We;
        t && su(e, t)
          ? yf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (We = e));
      }
    } else {
      if (dl(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (U = !1), (We = e));
    }
  }
}
function ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function ji(e) {
  if (e !== We) return !1;
  if (!U) return (ou(e), (U = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (dl(e)) throw (xf(), Error(C(418)));
    for (; t; ) (yf(e, t), (t = Nt(t.nextSibling)));
  }
  if ((ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = We ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function xf() {
  for (var e = Ee; e; ) e = Nt(e.nextSibling);
}
function Hn() {
  ((Ee = We = null), (U = !1));
}
function ya(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var ly = wt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            l === null ? delete a[s] : (a[s] = l);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function lu(e) {
  var t = e._init;
  return t(e._payload);
}
function vf(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function i(m, p) {
    return ((m = _t(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function l(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, p, g, k) {
    return p === null || p.tag !== 6
      ? ((p = bo(g, m.mode, k)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function c(m, p, g, k) {
    var b = g.type;
    return b === kn
      ? d(m, p, g.props.children, k, g.key)
      : p !== null &&
          (p.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Ct &&
              lu(b) === p.type))
        ? ((k = i(p, g.props)), (k.ref = cr(m, p, g)), (k.return = m), k)
        : ((k = Ui(g.type, g.key, g.props, null, m.mode, k)),
          (k.ref = cr(m, p, g)),
          (k.return = m),
          k);
  }
  function u(m, p, g, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = jo(g, m.mode, k)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, k, b) {
    return p === null || p.tag !== 7
      ? ((p = ln(g, m.mode, k, b)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function h(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = bo("" + p, m.mode, g)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fi:
          return (
            (g = Ui(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = cr(m, null, p)),
            (g.return = m),
            g
          );
        case vn:
          return ((p = jo(p, m.mode, g)), (p.return = m), p);
        case Ct:
          var k = p._init;
          return h(m, k(p._payload), g);
      }
      if (pr(p) || ir(p))
        return ((p = ln(p, m.mode, g, null)), (p.return = m), p);
      Si(m, p);
    }
    return null;
  }
  function f(m, p, g, k) {
    var b = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : a(m, p, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fi:
          return g.key === b ? c(m, p, g, k) : null;
        case vn:
          return g.key === b ? u(m, p, g, k) : null;
        case Ct:
          return ((b = g._init), f(m, p, b(g._payload), k));
      }
      if (pr(g) || ir(g)) return b !== null ? null : d(m, p, g, k, null);
      Si(m, g);
    }
    return null;
  }
  function y(m, p, g, k, b) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((m = m.get(g) || null), a(p, m, "" + k, b));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case fi:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            c(p, m, k, b)
          );
        case vn:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            u(p, m, k, b)
          );
        case Ct:
          var L = k._init;
          return y(m, p, g, L(k._payload), b);
      }
      if (pr(k) || ir(k)) return ((m = m.get(g) || null), d(p, m, k, b, null));
      Si(p, k);
    }
    return null;
  }
  function x(m, p, g, k) {
    for (
      var b = null, L = null, P = p, S = (p = 0), D = null;
      P !== null && S < g.length;
      S++
    ) {
      P.index > S ? ((D = P), (P = null)) : (D = P.sibling);
      var W = f(m, P, g[S], k);
      if (W === null) {
        P === null && (P = D);
        break;
      }
      (e && P && W.alternate === null && t(m, P),
        (p = s(W, p, S)),
        L === null ? (b = W) : (L.sibling = W),
        (L = W),
        (P = D));
    }
    if (S === g.length) return (n(m, P), U && Zt(m, S), b);
    if (P === null) {
      for (; S < g.length; S++)
        ((P = h(m, g[S], k)),
          P !== null &&
            ((p = s(P, p, S)),
            L === null ? (b = P) : (L.sibling = P),
            (L = P)));
      return (U && Zt(m, S), b);
    }
    for (P = r(m, P); S < g.length; S++)
      ((D = y(P, m, S, g[S], k)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? S : D.key),
          (p = s(D, p, S)),
          L === null ? (b = D) : (L.sibling = D),
          (L = D)));
    return (
      e &&
        P.forEach(function (O) {
          return t(m, O);
        }),
      U && Zt(m, S),
      b
    );
  }
  function v(m, p, g, k) {
    var b = ir(g);
    if (typeof b != "function") throw Error(C(150));
    if (((g = b.call(g)), g == null)) throw Error(C(151));
    for (
      var L = (b = null), P = p, S = (p = 0), D = null, W = g.next();
      P !== null && !W.done;
      S++, W = g.next()
    ) {
      P.index > S ? ((D = P), (P = null)) : (D = P.sibling);
      var O = f(m, P, W.value, k);
      if (O === null) {
        P === null && (P = D);
        break;
      }
      (e && P && O.alternate === null && t(m, P),
        (p = s(O, p, S)),
        L === null ? (b = O) : (L.sibling = O),
        (L = O),
        (P = D));
    }
    if (W.done) return (n(m, P), U && Zt(m, S), b);
    if (P === null) {
      for (; !W.done; S++, W = g.next())
        ((W = h(m, W.value, k)),
          W !== null &&
            ((p = s(W, p, S)),
            L === null ? (b = W) : (L.sibling = W),
            (L = W)));
      return (U && Zt(m, S), b);
    }
    for (P = r(m, P); !W.done; S++, W = g.next())
      ((W = y(P, m, S, W.value, k)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? S : W.key),
          (p = s(W, p, S)),
          L === null ? (b = W) : (L.sibling = W),
          (L = W)));
    return (
      e &&
        P.forEach(function (qe) {
          return t(m, qe);
        }),
      U && Zt(m, S),
      b
    );
  }
  function w(m, p, g, k) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === kn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case fi:
          e: {
            for (var b = g.key, L = p; L !== null; ) {
              if (L.key === b) {
                if (((b = g.type), b === kn)) {
                  if (L.tag === 7) {
                    (n(m, L.sibling),
                      (p = i(L, g.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  L.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Ct &&
                    lu(b) === L.type)
                ) {
                  (n(m, L.sibling),
                    (p = i(L, g.props)),
                    (p.ref = cr(m, L, g)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, L);
                break;
              } else t(m, L);
              L = L.sibling;
            }
            g.type === kn
              ? ((p = ln(g.props.children, m.mode, k, g.key)),
                (p.return = m),
                (m = p))
              : ((k = Ui(g.type, g.key, g.props, null, m.mode, k)),
                (k.ref = cr(m, p, g)),
                (k.return = m),
                (m = k));
          }
          return l(m);
        case vn:
          e: {
            for (L = g.key; p !== null; ) {
              if (p.key === L)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  (n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = jo(g, m.mode, k)), (p.return = m), (m = p));
          }
          return l(m);
        case Ct:
          return ((L = g._init), w(m, p, L(g._payload), k));
      }
      if (pr(g)) return x(m, p, g, k);
      if (ir(g)) return v(m, p, g, k);
      Si(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = bo(g, m.mode, k)), (p.return = m), (m = p)),
        l(m))
      : n(m, p);
  }
  return w;
}
var $n = vf(!0),
  kf = vf(!1),
  os = Ht(null),
  ls = null,
  Tn = null,
  xa = null;
function va() {
  xa = Tn = ls = null;
}
function ka(e) {
  var t = os.current;
  (V(os), (e._currentValue = t));
}
function fl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vn(e, t) {
  ((ls = e),
    (xa = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null)));
}
function Oe(e) {
  var t = e._currentValue;
  if (xa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (ls === null) throw Error(C(308));
      ((Tn = e), (ls.dependencies = { lanes: 0, firstContext: e }));
    } else Tn = Tn.next = e;
  return t;
}
var nn = null;
function wa(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function wf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), wa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bf(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), wa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Ii(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n));
  }
}
function au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = l) : (s = s.next = l), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Lt = !1;
  var s = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var c = a,
      u = c.next;
    ((c.next = null), l === null ? (s = u) : (l.next = u), (l = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var h = i.baseState;
    ((l = 0), (d = u = c = null), (a = s));
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == "function")) {
                h = x.call(y, h, f);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = v.payload),
                (f = typeof x == "function" ? x.call(y, h, f) : x),
                f == null)
              )
                break e;
              h = G({}, h, f);
              break e;
            case 2:
              Lt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (c = h)) : (d = d.next = y),
          (l |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = h),
      (i.baseState = c),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((l |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((hn |= l), (e.lanes = l), (e.memoizedState = h));
  }
}
function cu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var si = {},
  it = Ht(si),
  Qr = Ht(si),
  Hr = Ht(si);
function rn(e) {
  if (e === si) throw Error(C(174));
  return e;
}
function ja(e, t) {
  switch ((z(Hr, t), z(Qr, e), z(it, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ko(t, e)));
  }
  (V(it), z(it, t));
}
function Kn() {
  (V(it), V(Qr), V(Hr));
}
function jf(e) {
  rn(Hr.current);
  var t = rn(it.current),
    n = Ko(t, e.type);
  t !== n && (z(Qr, e), z(it, n));
}
function Sa(e) {
  Qr.current === e && (V(it), V(Qr));
}
var H = Ht(0);
function cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var go = [];
function Ca() {
  for (var e = 0; e < go.length; e++)
    go[e]._workInProgressVersionPrimary = null;
  go.length = 0;
}
var zi = wt.ReactCurrentDispatcher,
  yo = wt.ReactCurrentBatchConfig,
  dn = 0,
  K = null,
  te = null,
  ie = null,
  us = !1,
  Cr = !1,
  $r = 0,
  ay = 0;
function ue() {
  throw Error(C(321));
}
function La(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Pa(e, t, n, r, i, s) {
  if (
    ((dn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zi.current = e === null || e.memoizedState === null ? hy : fy),
    (e = n(r, i)),
    Cr)
  ) {
    s = 0;
    do {
      if (((Cr = !1), ($r = 0), 25 <= s)) throw Error(C(301));
      ((s += 1),
        (ie = te = null),
        (t.updateQueue = null),
        (zi.current = py),
        (e = n(r, i)));
    } while (Cr);
  }
  if (
    ((zi.current = ds),
    (t = te !== null && te.next !== null),
    (dn = 0),
    (ie = te = K = null),
    (us = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ta() {
  var e = $r !== 0;
  return (($r = 0), e);
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e), ie);
}
function Ue() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = ie === null ? K.memoizedState : ie.next;
  if (t !== null) ((ie = t), (te = e));
  else {
    if (e === null) throw Error(C(310));
    ((te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e));
  }
  return ie;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var l = i.next;
      ((i.next = s.next), (s.next = l));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (l = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((dn & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((a = c = h), (l = r)) : (c = c.next = h),
          (K.lanes |= d),
          (hn |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (c === null ? (l = r) : (c.next = a),
      Ze(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (K.lanes |= s), (hn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do ((s = e(s, l.action)), (l = l.next));
    while (l !== i);
    (Ze(s, t.memoizedState) || (be = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Sf() {}
function Cf(e, t) {
  var n = K,
    r = Ue(),
    i = t(),
    s = !Ze(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (be = !0)),
    (r = r.queue),
    Ea(Tf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Pf.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(C(349));
    dn & 30 || Lf(n, t, i);
  }
  return i;
}
function Lf(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Pf(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ef(t) && Wf(e));
}
function Tf(e, t, n) {
  return n(function () {
    Ef(t) && Wf(e);
  });
}
function Ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Wf(e) {
  var t = xt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function uu(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dy.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mf() {
  return Ue().memoizedState;
}
function _i(e, t, n, r) {
  var i = tt();
  ((K.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function As(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var l = te.memoizedState;
    if (((s = l.destroy), r !== null && La(r, l.deps))) {
      i.memoizedState = Gr(t, n, s, r);
      return;
    }
  }
  ((K.flags |= e), (i.memoizedState = Gr(1 | t, n, s, r)));
}
function du(e, t) {
  return _i(8390656, 8, e, t);
}
function Ea(e, t) {
  return As(2048, 8, e, t);
}
function Rf(e, t) {
  return As(4, 2, e, t);
}
function Af(e, t) {
  return As(4, 4, e, t);
}
function Df(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Nf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    As(4, 4, Df.bind(null, t, e), n)
  );
}
function Wa() {}
function Bf(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function If(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t, n) {
  return dn & 21
    ? (Ze(n, t) || ((n = Oh()), (K.lanes |= n), (hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function cy(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = yo.transition;
  yo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (yo.transition = r));
  }
}
function _f() {
  return Ue().memoizedState;
}
function uy(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vf(e))
  )
    Ff(t, n);
  else if (((n = wf(e, t, n, r)), n !== null)) {
    var i = ye();
    (Xe(n, e, r, i), Of(n, t, r));
  }
}
function dy(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vf(e)) Ff(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = s(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ze(a, l))) {
          var c = t.interleaved;
          (c === null
            ? ((i.next = i), wa(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = wf(e, t, i, r)),
      n !== null && ((i = ye()), Xe(n, e, r, i), Of(n, t, r)));
  }
}
function Vf(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Ff(e, t) {
  Cr = us = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n));
  }
}
var ds = {
    readContext: Oe,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  hy = {
    readContext: Oe,
    useCallback: function (e, t) {
      return ((tt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Oe,
    useEffect: du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _i(4194308, 4, Df.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = uy.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: uu,
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = uu(!1),
        t = e[0];
      return ((e = cy.bind(null, e[1])), (tt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = tt();
      if (U) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(C(349));
        dn & 30 || Lf(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        du(Tf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Gr(9, Pf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = se.identifierPrefix;
      if (U) {
        var n = ht,
          r = dt;
        ((n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ay++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fy = {
    readContext: Oe,
    useCallback: Bf,
    useContext: Oe,
    useEffect: Ea,
    useImperativeHandle: Nf,
    useInsertionEffect: Rf,
    useLayoutEffect: Af,
    useMemo: If,
    useReducer: xo,
    useRef: Mf,
    useState: function () {
      return xo(Kr);
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = Ue();
      return zf(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(Kr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Cf,
    useId: _f,
    unstable_isNewReconciler: !1,
  },
  py = {
    readContext: Oe,
    useCallback: Bf,
    useContext: Oe,
    useEffect: Ea,
    useImperativeHandle: Nf,
    useInsertionEffect: Rf,
    useLayoutEffect: Af,
    useMemo: If,
    useReducer: vo,
    useRef: Mf,
    useState: function () {
      return vo(Kr);
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = Ue();
      return te === null ? (t.memoizedState = e) : zf(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = vo(Kr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Cf,
    useId: _f,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    ((t = G({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pl(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ds = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = zt(e),
      s = ft(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (Xe(t, e, i, r), Ii(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = zt(e),
      s = ft(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Bt(e, s, i)),
      t !== null && (Xe(t, e, i, r), Ii(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = zt(e),
      i = ft(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (Xe(t, e, r, n), Ii(t, e, r)));
  },
};
function hu(e, t, n, r, i, s, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vr(n, r) || !Vr(i, s)
        : !0
  );
}
function Uf(e, t, n) {
  var r = !1,
    i = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Oe(s))
      : ((i = Se(t) ? cn : me.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Qn(e, i) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ds),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function fu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ds.enqueueReplaceState(t, t.state, null));
}
function ml(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), ba(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Oe(s))
    : ((s = Se(t) ? cn : me.current), (i.context = Qn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (pl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ds.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += O0(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ko(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var my = typeof WeakMap == "function" ? WeakMap : Map;
function Qf(e, t, n) {
  ((n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (fs || ((fs = !0), (Ll = r)), gl(e, t));
    }),
    n
  );
}
function Hf(e, t, n) {
  ((n = ft(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gl(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (gl(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new my();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Ey.bind(null, e, t, n)), t.then(e, e));
}
function mu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ft(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gy = wt.ReactCurrentOwner,
  be = !1;
function ge(e, t, n, r) {
  t.child = e === null ? kf(t, null, n, r) : $n(t, e.child, n, r);
}
function yu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Vn(t, i),
    (r = Pa(e, t, n, r, s, i)),
    (n = Ta()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && n && ma(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function xu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !za(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), $f(e, t, s, r, i))
      : ((e = Ui(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var l = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vr), n(l, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $f(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Vr(s, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (be = !0);
      else return ((t.lanes = e.lanes), vt(e, t, i));
  }
  return yl(e, t, n, r, i);
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Wn, Te),
        (Te |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Wn, Te),
          (Te |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        z(Wn, Te),
        (Te |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Wn, Te),
      (Te |= r));
  return (ge(e, t, i, n), t.child);
}
function Gf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yl(e, t, n, r, i) {
  var s = Se(n) ? cn : me.current;
  return (
    (s = Qn(t, s)),
    Vn(t, i),
    (n = Pa(e, t, n, r, s, i)),
    (r = Ta()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (U && r && ma(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function vu(e, t, n, r, i) {
  if (Se(n)) {
    var s = !0;
    rs(t);
  } else s = !1;
  if ((Vn(t, i), t.stateNode === null))
    (Vi(e, t), Uf(t, n, r), ml(t, n, r, i), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var c = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Oe(u))
      : ((u = Se(n) ? cn : me.current), (u = Qn(t, u)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || c !== u) && fu(t, l, r, u)),
      (Lt = !1));
    var f = t.memoizedState;
    ((l.state = f),
      as(t, r, l, i),
      (c = t.memoizedState),
      a !== r || f !== c || je.current || Lt
        ? (typeof d == "function" && (pl(t, n, d, r), (c = t.memoizedState)),
          (a = Lt || hu(t, n, a, r, f, c, u))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (l.props = r),
          (l.state = c),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      bf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : $e(t.type, a)),
      (l.props = u),
      (h = t.pendingProps),
      (f = l.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Oe(c))
        : ((c = Se(n) ? cn : me.current), (c = Qn(t, c))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== h || f !== c) && fu(t, l, r, c)),
      (Lt = !1),
      (f = t.memoizedState),
      (l.state = f),
      as(t, r, l, i));
    var x = t.memoizedState;
    a !== h || f !== x || je.current || Lt
      ? (typeof y == "function" && (pl(t, n, y, r), (x = t.memoizedState)),
        (u = Lt || hu(t, n, u, r, f, x, c) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, x, c),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, x, c)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = c),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xl(e, t, n, r, s, i);
}
function xl(e, t, n, r, i, s) {
  Gf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (i && iu(t, n, !1), vt(e, t, s));
  ((r = t.stateNode), (gy.current = t));
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = $n(t, e.child, null, s)), (t.child = $n(t, null, a, s)))
      : ge(e, t, a, s),
    (t.memoizedState = r.state),
    i && iu(t, n, !0),
    t.child
  );
}
function Yf(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ru(e, t.context, !1),
    ja(e, t.containerInfo));
}
function ku(e, t, n, r, i) {
  return (Hn(), ya(i), (t.flags |= 256), ge(e, t, n, r), t.child);
}
var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function kl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xf(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    s = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(H, i & 1),
    e === null)
  )
    return (
      hl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = l))
                : (s = Is(l, r, 0, null)),
              (e = ln(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = kl(n)),
              (t.memoizedState = vl),
              e)
            : Ma(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return yy(e, t, l, r, a, i, n);
  if (s) {
    ((s = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = _t(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = _t(a, s)) : ((s = ln(s, l, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? kl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (s.memoizedState = l),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = vl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = _t(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ma(e, t) {
  return (
    (t = Is({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ci(e, t, n, r) {
  return (
    r !== null && ya(r),
    $n(t, e.child, null, n),
    (e = Ma(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yy(e, t, n, r, i, s, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ko(Error(C(422)))), Ci(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Is({ mode: "visible", children: r.children }, i, 0, null)),
          (s = ln(s, i, l, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && $n(t, e.child, null, l),
          (t.child.memoizedState = kl(l)),
          (t.memoizedState = vl),
          s);
  if (!(t.mode & 1)) return Ci(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(C(419))),
      (r = ko(s, r, void 0)),
      Ci(e, t, l, r)
    );
  }
  if (((a = (l & e.childLanes) !== 0), be || a)) {
    if (((r = se), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), xt(e, i), Xe(r, e, i, -1)));
    }
    return (Ia(), (r = ko(Error(C(421)))), Ci(e, t, l, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Wy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ee = Nt(i.nextSibling)),
      (We = t),
      (U = !0),
      (Ge = null),
      e !== null &&
        ((ze[_e++] = dt),
        (ze[_e++] = ht),
        (ze[_e++] = un),
        (dt = e.id),
        (ht = e.overflow),
        (un = t)),
      (t = Ma(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), fl(e.return, t, n));
}
function wo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ge(e, t, r.children, n), (r = H.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wu(e, n, t);
        else if (e.tag === 19) wu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((z(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && cs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          wo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && cs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        wo(t, !0, n, null, s);
        break;
      case "together":
        wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = _t(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function xy(e, t, n) {
  switch (t.tag) {
    case 3:
      (Yf(t), Hn());
      break;
    case 5:
      jf(t);
      break;
    case 1:
      Se(t.type) && rs(t);
      break;
    case 4:
      ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (z(os, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Xf(e, t, n)
            : (z(H, H.current & 1),
              (e = vt(e, t, n)),
              e !== null ? e.sibling : null);
      z(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Kf(e, t, n));
  }
  return vt(e, t, n);
}
var qf, wl, Jf, ep;
qf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
wl = function () {};
Jf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), rn(it.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Uo(e, i)), (r = Uo(e, r)), (s = []));
        break;
      case "select":
        ((i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = $o(e, i)), (r = $o(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ts);
    }
    Go(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ar.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (c && c.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in c)
              c.hasOwnProperty(l) &&
                a[l] !== c[l] &&
                (n || (n = {}), (n[l] = c[l]));
          } else (n || (s || (s = []), s.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (s = s || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (s = s || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ar.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && _("scroll", e),
                    s || a === c || (s = []))
                  : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ep = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function vy(e, t, n) {
  var r = t.pendingProps;
  switch ((ga(t), t.tag)) {
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
      return (de(t), null);
    case 1:
      return (Se(t.type) && ns(), de(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        V(je),
        V(me),
        Ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (El(Ge), (Ge = null)))),
        wl(e, t),
        de(t),
        null
      );
    case 5:
      Sa(t);
      var i = rn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Jf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (de(t), null);
        }
        if (((e = rn(it.current)), ji(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[nt] = t), (r[Ur] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (_("cancel", r), _("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              _("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) _(gr[i], r);
              break;
            case "source":
              _("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (_("error", r), _("load", r));
              break;
            case "details":
              _("toggle", r);
              break;
            case "input":
              (Wc(r, s), _("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                _("invalid", r));
              break;
            case "textarea":
              (Rc(r, s), _("invalid", r));
          }
          (Go(n, s), (i = null));
          for (var l in s)
            if (s.hasOwnProperty(l)) {
              var a = s[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      bi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ar.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  _("scroll", r);
            }
          switch (n) {
            case "input":
              (pi(r), Mc(r, s, !0));
              break;
            case "textarea":
              (pi(r), Ac(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ts);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ph(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[nt] = t),
            (e[Ur] = r),
            qf(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = Yo(n, r)), n)) {
              case "dialog":
                (_("cancel", e), _("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (_("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) _(gr[i], e);
                i = r;
                break;
              case "source":
                (_("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (_("error", e), _("load", e), (i = r));
                break;
              case "details":
                (_("toggle", e), (i = r));
                break;
              case "input":
                (Wc(e, r), (i = Uo(e, r)), _("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  _("invalid", e));
                break;
              case "textarea":
                (Rc(e, r), (i = $o(e, r)), _("invalid", e));
                break;
              default:
                i = r;
            }
            (Go(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var c = a[s];
                s === "style"
                  ? Wh(e, c)
                  : s === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Th(e, c))
                    : s === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Dr(e, c)
                        : typeof c == "number" && Dr(e, "" + c)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Ar.hasOwnProperty(s)
                          ? c != null && s === "onScroll" && _("scroll", e)
                          : c != null && ta(e, s, c, l));
              }
            switch (n) {
              case "input":
                (pi(e), Mc(e, r, !1));
                break;
              case "textarea":
                (pi(e), Ac(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Bn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ts);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (de(t), null);
    case 6:
      if (e && t.stateNode != null) ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = rn(Hr.current)), rn(it.current), ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (s = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                bi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r));
      }
      return (de(t), null);
    case 13:
      if (
        (V(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ee !== null && t.mode & 1 && !(t.flags & 128))
          (xf(), Hn(), (t.flags |= 98560), (s = !1));
        else if (((s = ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[nt] = t;
          } else
            (Hn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (de(t), (s = !1));
        } else (Ge !== null && (El(Ge), (Ge = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ne === 0 && (ne = 3) : Ia())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Kn(),
        wl(e, t),
        e === null && Fr(t.stateNode.containerInfo),
        de(t),
        null
      );
    case 10:
      return (ka(t.type._context), de(t), null);
    case 17:
      return (Se(t.type) && ns(), de(t), null);
    case 19:
      if ((V(H), (s = t.memoizedState), s === null)) return (de(t), null);
      if (((r = (t.flags & 128) !== 0), (l = s.rendering), l === null))
        if (r) ur(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = cs(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    ur(s, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (l = s.alternate),
                    l === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = l.childLanes),
                        (s.lanes = l.lanes),
                        (s.child = l.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = l.memoizedProps),
                        (s.memoizedState = l.memoizedState),
                        (s.updateQueue = l.updateQueue),
                        (s.type = l.type),
                        (e = l.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (z(H, (H.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            J() > Yn &&
            ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = cs(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(s, !0),
              s.tail === null && s.tailMode === "hidden" && !l.alternate && !U)
            )
              return (de(t), null);
          } else
            2 * J() - s.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = s.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (s.last = l));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = H.current),
          z(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Ba(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ky(e, t) {
  switch ((ga(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        V(je),
        V(me),
        Ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Sa(t), null);
    case 13:
      if ((V(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Hn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (V(H), null);
    case 4:
      return (Kn(), null);
    case 10:
      return (ka(t.type._context), null);
    case 22:
    case 23:
      return (Ba(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Li = !1,
  fe = !1,
  wy = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function En(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function bl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var bu = !1;
function by(e, t) {
  if (((sl = qi), (e = sf()), pa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            c = -1,
            u = 0,
            d = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = l + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (c = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (y = h.firstChild) !== null;
            )
              ((f = h), (h = y));
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++u === i && (a = l),
                f === s && ++d === r && (c = l),
                (y = h.nextSibling) !== null)
              )
                break;
              ((h = f), (f = h.parentNode));
            }
            h = y;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ol = { focusedElem: e, selectionRange: n }, qi = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (E = e));
    else
      for (; E !== null; ) {
        t = E;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps,
                    w = x.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $e(t.type, v),
                      w,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (k) {
          X(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (E = e));
          break;
        }
        E = t.return;
      }
  return ((x = bu), (bu = !1), x);
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && bl(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ns(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), tp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Ur], delete t[cl], delete t[iy], delete t[sy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function np(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || np(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ts)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sl(e, t, n), e = e.sibling; e !== null; )
      (Sl(e, t, n), (e = e.sibling));
}
function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; )
      (Cl(e, t, n), (e = e.sibling));
}
var oe = null,
  Ke = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) (rp(e, t, n), (n = n.sibling));
}
function rp(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(Ps, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || En(n, t);
    case 6:
      var r = oe,
        i = Ke;
      ((oe = null),
        jt(e, t, n),
        (oe = r),
        (Ke = i),
        oe !== null &&
          (Ke
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode)));
      break;
    case 18:
      oe !== null &&
        (Ke
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? po(e.parentNode, n)
              : e.nodeType === 1 && po(e, n),
            zr(e))
          : po(oe, n.stateNode));
      break;
    case 4:
      ((r = oe),
        (i = Ke),
        (oe = n.stateNode.containerInfo),
        (Ke = !0),
        jt(e, t, n),
        (oe = r),
        (Ke = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            l = s.destroy;
          ((s = s.tag),
            l !== void 0 && (s & 2 || s & 4) && bl(n, t, l),
            (i = i.next));
        } while (i !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (En(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          X(n, t, a);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), jt(e, t, n), (fe = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Su(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new wy()),
      t.forEach(function (r) {
        var i = My.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((oe = a.stateNode), (Ke = !1));
              break e;
            case 3:
              ((oe = a.stateNode.containerInfo), (Ke = !0));
              break e;
            case 4:
              ((oe = a.stateNode.containerInfo), (Ke = !0));
              break e;
          }
          a = a.return;
        }
        if (oe === null) throw Error(C(160));
        (rp(s, l, i), (oe = null), (Ke = !1));
        var c = i.alternate;
        (c !== null && (c.return = null), (i.return = null));
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (ip(t, e), (t = t.sibling));
}
function ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), et(e), r & 4)) {
        try {
          (Lr(3, e, e.return), Ns(3, e));
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Lr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      (Qe(t, e), et(e), r & 512 && n !== null && En(n, n.return));
      break;
    case 5:
      if (
        (Qe(t, e),
        et(e),
        r & 512 && n !== null && En(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Dr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          l = n !== null ? n.memoizedProps : s,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Ch(i, s),
              Yo(a, l));
            var u = Yo(a, s);
            for (l = 0; l < c.length; l += 2) {
              var d = c[l],
                h = c[l + 1];
              d === "style"
                ? Wh(i, h)
                : d === "dangerouslySetInnerHTML"
                  ? Th(i, h)
                  : d === "children"
                    ? Dr(i, h)
                    : ta(i, d, h, u);
            }
            switch (a) {
              case "input":
                Qo(i, s);
                break;
              case "textarea":
                Lh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Bn(i, !!s.multiple, y, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Bn(i, !!s.multiple, s.defaultValue, !0)
                      : Bn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ur] = s;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      (Qe(t, e), et(e));
      break;
    case 13:
      (Qe(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Da = J())),
        r & 4 && Su(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (u = fe) || d), Qe(t, e), (fe = u)) : Qe(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (E = e, d = e.child; d !== null; ) {
            for (h = E = d; E !== null; ) {
              switch (((f = E), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, f, f.return);
                  break;
                case 1:
                  En(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  En(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Lu(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (E = y)) : Lu(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                ((i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = h.stateNode),
                      (c = h.memoizedProps.style),
                      (l =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = Eh("display", l))));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (d === h && (d = null), (h = h.return));
          }
          (d === h && (d = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Qe(t, e), et(e), r & 4 && Su(e));
      break;
    case 21:
      break;
    default:
      (Qe(t, e), et(e));
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (np(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Dr(i, ""), (r.flags &= -33));
          var s = ju(e);
          Cl(e, s, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ju(e);
          Sl(e, a, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (c) {
      X(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jy(e, t, n) {
  ((E = e), sp(e));
}
function sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var i = E,
      s = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Li;
      if (!l) {
        var a = i.alternate,
          c = (a !== null && a.memoizedState !== null) || fe;
        a = Li;
        var u = fe;
        if (((Li = l), (fe = c) && !u))
          for (E = i; E !== null; )
            ((l = E),
              (c = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Pu(i)
                : c !== null
                  ? ((c.return = l), (E = c))
                  : Pu(i));
        for (; s !== null; ) ((E = s), sp(s), (s = s.sibling));
        ((E = i), (Li = a), (fe = u));
      }
      Cu(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (E = s)) : Cu(e);
  }
}
function Cu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || Ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && cu(t, s, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cu(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && zr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        fe || (t.flags & 512 && jl(t));
      } catch (f) {
        X(t, t.return, f);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function Lu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function Pu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ns(4, t);
          } catch (c) {
            X(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              X(t, i, c);
            }
          }
          var s = t.return;
          try {
            jl(t);
          } catch (c) {
            X(t, s, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            jl(t);
          } catch (c) {
            X(t, l, c);
          }
      }
    } catch (c) {
      X(t, t.return, c);
    }
    if (t === e) {
      E = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (E = a));
      break;
    }
    E = t.return;
  }
}
var Sy = Math.ceil,
  hs = wt.ReactCurrentDispatcher,
  Ra = wt.ReactCurrentOwner,
  Fe = wt.ReactCurrentBatchConfig,
  B = 0,
  se = null,
  ee = null,
  ae = 0,
  Te = 0,
  Wn = Ht(0),
  ne = 0,
  Yr = null,
  hn = 0,
  Bs = 0,
  Aa = 0,
  Pr = null,
  we = null,
  Da = 0,
  Yn = 1 / 0,
  ct = null,
  fs = !1,
  Ll = null,
  It = null,
  Pi = !1,
  Wt = null,
  ps = 0,
  Tr = 0,
  Pl = null,
  Fi = -1,
  Oi = 0;
function ye() {
  return B & 6 ? J() : Fi !== -1 ? Fi : (Fi = J());
}
function zt(e) {
  return e.mode & 1
    ? B & 2 && ae !== 0
      ? ae & -ae
      : ly.transition !== null
        ? (Oi === 0 && (Oi = Oh()), Oi)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yh(e.type))),
          e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (Pl = null), Error(C(185)));
  (ni(e, n, r),
    (!(B & 2) || e !== se) &&
      (e === se && (!(B & 2) && (Bs |= n), ne === 4 && Tt(e, ae)),
      Ce(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Yn = J() + 500), Rs && $t())));
}
function Ce(e, t) {
  var n = e.callbackNode;
  lg(e, t);
  var r = Zi(e, e === se ? ae : 0);
  if (r === 0)
    (n !== null && Bc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bc(n), t === 1))
      (e.tag === 0 ? oy(Tu.bind(null, e)) : mf(Tu.bind(null, e)),
        ny(function () {
          !(B & 6) && $t();
        }),
        (n = null));
    else {
      switch (Uh(r)) {
        case 1:
          n = oa;
          break;
        case 4:
          n = Vh;
          break;
        case 16:
          n = Xi;
          break;
        case 536870912:
          n = Fh;
          break;
        default:
          n = Xi;
      }
      n = fp(n, op.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function op(e, t) {
  if (((Fi = -1), (Oi = 0), B & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Zi(e, e === se ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var s = ap();
    (se !== e || ae !== t) && ((ct = null), (Yn = J() + 500), on(e, t));
    do
      try {
        Py();
        break;
      } catch (a) {
        lp(e, a);
      }
    while (!0);
    (va(),
      (hs.current = s),
      (B = i),
      ee !== null ? (t = 0) : ((se = null), (ae = 0), (t = ne)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = el(e)), i !== 0 && ((r = i), (t = Tl(e, i)))), t === 1)
    )
      throw ((n = Yr), on(e, 0), Tt(e, r), Ce(e, J()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Cy(i) &&
          ((t = ms(e, r)),
          t === 2 && ((s = el(e)), s !== 0 && ((r = s), (t = Tl(e, s)))),
          t === 1))
      )
        throw ((n = Yr), on(e, 0), Tt(e, r), Ce(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          qt(e, we, ct);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = Da + 500 - J()), 10 < t))
          ) {
            if (Zi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (ye(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = al(qt.bind(null, e, we, ct), t);
            break;
          }
          qt(e, we, ct);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ye(r);
            ((s = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~s));
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Sy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = al(qt.bind(null, e, we, ct), r);
            break;
          }
          qt(e, we, ct);
          break;
        case 5:
          qt(e, we, ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (Ce(e, J()), e.callbackNode === n ? op.bind(null, e) : null);
}
function Tl(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = ms(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && El(t)),
    e
  );
}
function El(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Cy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Tt(e, t) {
  for (
    t &= ~Aa,
      t &= ~Bs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Tu(e) {
  if (B & 6) throw Error(C(327));
  Fn();
  var t = Zi(e, 0);
  if (!(t & 1)) return (Ce(e, J()), null);
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = el(e);
    r !== 0 && ((t = r), (n = Tl(e, r)));
  }
  if (n === 1) throw ((n = Yr), on(e, 0), Tt(e, t), Ce(e, J()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, we, ct),
    Ce(e, J()),
    null
  );
}
function Na(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    ((B = n), B === 0 && ((Yn = J() + 500), Rs && $t()));
  }
}
function fn(e) {
  Wt !== null && Wt.tag === 0 && !(B & 6) && Fn();
  var t = B;
  B |= 1;
  var n = Fe.transition,
    r = I;
  try {
    if (((Fe.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (Fe.transition = n), (B = t), !(B & 6) && $t());
  }
}
function Ba() {
  ((Te = Wn.current), V(Wn));
}
function on(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ty(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((ga(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ns());
          break;
        case 3:
          (Kn(), V(je), V(me), Ca());
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          V(H);
          break;
        case 19:
          V(H);
          break;
        case 10:
          ka(r.type._context);
          break;
        case 22:
        case 23:
          Ba();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (ee = e = _t(e.current, null)),
    (ae = Te = t),
    (ne = 0),
    (Yr = null),
    (Aa = Bs = hn = 0),
    (we = Pr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var l = s.next;
          ((s.next = i), (r.next = l));
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function lp(e, t) {
  do {
    var n = ee;
    try {
      if ((va(), (zi.current = ds), us)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        us = !1;
      }
      if (
        ((dn = 0),
        (ie = te = K = null),
        (Cr = !1),
        ($r = 0),
        (Ra.current = null),
        n === null || n.return === null)
      ) {
        ((ne = 1), (Yr = t), (ee = null));
        break;
      }
      e: {
        var s = e,
          l = n.return,
          a = n,
          c = t;
        if (
          ((t = ae),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = a,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = mu(l);
          if (y !== null) {
            ((y.flags &= -257),
              gu(y, l, a, s, t),
              y.mode & 1 && pu(s, u, t),
              (t = y),
              (c = u));
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              (v.add(c), (t.updateQueue = v));
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (pu(s, u, t), Ia());
              break e;
            }
            c = Error(C(426));
          }
        } else if (U && a.mode & 1) {
          var w = mu(l);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              gu(w, l, a, s, t),
              ya(Gn(c, a)));
            break e;
          }
        }
        ((s = c = Gn(c, a)),
          ne !== 4 && (ne = 2),
          Pr === null ? (Pr = [s]) : Pr.push(s),
          (s = l));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = Qf(s, c, t);
              au(s, m);
              break e;
            case 1:
              a = c;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (It === null || !It.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var k = Hf(s, a, t);
                au(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      up(n);
    } catch (b) {
      ((t = b), ee === n && n !== null && (ee = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function ap() {
  var e = hs.current;
  return ((hs.current = ds), e === null ? ds : e);
}
function Ia() {
  ((ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    se === null || (!(hn & 268435455) && !(Bs & 268435455)) || Tt(se, ae));
}
function ms(e, t) {
  var n = B;
  B |= 2;
  var r = ap();
  (se !== e || ae !== t) && ((ct = null), on(e, t));
  do
    try {
      Ly();
      break;
    } catch (i) {
      lp(e, i);
    }
  while (!0);
  if ((va(), (B = n), (hs.current = r), ee !== null)) throw Error(C(261));
  return ((se = null), (ae = 0), ne);
}
function Ly() {
  for (; ee !== null; ) cp(ee);
}
function Py() {
  for (; ee !== null && !q0(); ) cp(ee);
}
function cp(e) {
  var t = hp(e.alternate, e, Te);
  ((e.memoizedProps = e.pendingProps),
    t === null ? up(e) : (ee = t),
    (Ra.current = null));
}
function up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ky(n, t)), n !== null)) {
        ((n.flags &= 32767), (ee = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ne = 6), (ee = null));
        return;
      }
    } else if (((n = vy(n, t, Te)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function qt(e, t, n) {
  var r = I,
    i = Fe.transition;
  try {
    ((Fe.transition = null), (I = 1), Ty(e, t, n, r));
  } finally {
    ((Fe.transition = i), (I = r));
  }
  return null;
}
function Ty(e, t, n, r) {
  do Fn();
  while (Wt !== null);
  if (B & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (ag(e, s),
    e === se && ((ee = se = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      fp(Xi, function () {
        return (Fn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Fe.transition), (Fe.transition = null));
    var l = I;
    I = 1;
    var a = B;
    ((B |= 4),
      (Ra.current = null),
      by(e, n),
      ip(n, e),
      Gg(ol),
      (qi = !!sl),
      (ol = sl = null),
      (e.current = n),
      jy(n),
      J0(),
      (B = a),
      (I = l),
      (Fe.transition = s));
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (Wt = e), (ps = i)),
    (s = e.pendingLanes),
    s === 0 && (It = null),
    ng(n.stateNode),
    Ce(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (fs) throw ((fs = !1), (e = Ll), (Ll = null), e);
  return (
    ps & 1 && e.tag !== 0 && Fn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Pl ? Tr++ : ((Tr = 0), (Pl = e))) : (Tr = 0),
    $t(),
    null
  );
}
function Fn() {
  if (Wt !== null) {
    var e = Uh(ps),
      t = Fe.transition,
      n = I;
    try {
      if (((Fe.transition = null), (I = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (ps = 0), B & 6)) throw Error(C(331));
        var i = B;
        for (B |= 4, E = e.current; E !== null; ) {
          var s = E,
            l = s.child;
          if (E.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (E = u; E !== null; ) {
                  var d = E;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, d, s);
                  }
                  var h = d.child;
                  if (h !== null) ((h.return = d), (E = h));
                  else
                    for (; E !== null; ) {
                      d = E;
                      var f = d.sibling,
                        y = d.return;
                      if ((tp(d), d === u)) {
                        E = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = y), (E = f));
                        break;
                      }
                      E = y;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var w = v.sibling;
                    ((v.sibling = null), (v = w));
                  } while (v !== null);
                }
              }
              E = s;
            }
          }
          if (s.subtreeFlags & 2064 && l !== null) ((l.return = s), (E = l));
          else
            e: for (; E !== null; ) {
              if (((s = E), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (E = m));
                break e;
              }
              E = s.return;
            }
        }
        var p = e.current;
        for (E = p; E !== null; ) {
          l = E;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) ((g.return = l), (E = g));
          else
            e: for (l = p; E !== null; ) {
              if (((a = E), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(9, a);
                  }
                } catch (b) {
                  X(a, a.return, b);
                }
              if (a === l) {
                E = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (E = k));
                break e;
              }
              E = a.return;
            }
        }
        if (
          ((B = i), $t(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(Ps, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (Fe.transition = t));
    }
  }
  return !1;
}
function Eu(e, t, n) {
  ((t = Gn(n, t)),
    (t = Qf(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = ye()),
    e !== null && (ni(e, 1, t), Ce(e, t)));
}
function X(e, t, n) {
  if (e.tag === 3) Eu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          ((e = Gn(n, e)),
            (e = Hf(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = ye()),
            t !== null && (ni(t, 1, e), Ce(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Ey(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ae & n) === n &&
      (ne === 4 || (ne === 3 && (ae & 130023424) === ae && 500 > J() - Da)
        ? on(e, 0)
        : (Aa |= n)),
    Ce(e, t));
}
function dp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = ye();
  ((e = xt(e, t)), e !== null && (ni(e, t, n), Ce(e, n)));
}
function Wy(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), dp(e, n));
}
function My(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), dp(e, n));
}
var hp;
hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((be = !1), xy(e, t, n));
      be = !!(e.flags & 131072);
    }
  else ((be = !1), U && t.flags & 1048576 && gf(t, ss, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Vi(e, t), (e = t.pendingProps));
      var i = Qn(t, me.current);
      (Vn(t, n), (i = Pa(null, t, r, e, i, n)));
      var s = Ta();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((s = !0), rs(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ba(t),
            (i.updater = Ds),
            (t.stateNode = i),
            (i._reactInternals = t),
            ml(t, r, e, n),
            (t = xl(null, t, r, !0, s, n)))
          : ((t.tag = 0), U && s && ma(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ay(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = yl(null, t, r, e, n);
            break e;
          case 1:
            t = vu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = xu(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        yl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        vu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Yf(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          bf(e, t),
          as(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Gn(Error(C(423)), t)), (t = ku(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Gn(Error(C(424)), t)), (t = ku(e, t, r, n, i)));
            break e;
          } else
            for (
              Ee = Nt(t.stateNode.containerInfo.firstChild),
                We = t,
                U = !0,
                Ge = null,
                n = kf(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Hn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jf(t),
        e === null && hl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ll(r, i) ? (l = null) : s !== null && ll(r, s) && (t.flags |= 32),
        Gf(e, t),
        ge(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && hl(t), null);
    case 13:
      return Xf(e, t, n);
    case 4:
      return (
        ja(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        yu(e, t, r, i, n)
      );
    case 7:
      return (ge(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ge(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ge(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (l = i.value),
          z(os, r._currentValue),
          (r._currentValue = l),
          s !== null)
        )
          if (Ze(s.value, l)) {
            if (s.children === i.children && !je.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                l = s.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      ((c = ft(-1, n & -n)), (c.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      fl(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((l = s.return), l === null)) throw Error(C(341));
                ((l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  fl(l, n, t),
                  (l = s.sibling));
              } else l = s.child;
              if (l !== null) l.return = s;
              else
                for (l = s; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((s = l.sibling), s !== null)) {
                    ((s.return = l.return), (l = s));
                    break;
                  }
                  l = l.return;
                }
              s = l;
            }
        (ge(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        xu(e, t, r, i, n)
      );
    case 15:
      return $f(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Vi(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), rs(t)) : (e = !1),
        Vn(t, n),
        Uf(t, r, i),
        ml(t, r, i, n),
        xl(null, t, r, !0, e, n)
      );
    case 19:
      return Zf(e, t, n);
    case 22:
      return Kf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function fp(e, t) {
  return _h(e, t);
}
function Ry(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ve(e, t, n, r) {
  return new Ry(e, t, n, r);
}
function za(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Ay(e) {
  if (typeof e == "function") return za(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ra)) return 11;
    if (e === ia) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ui(e, t, n, r, i, s) {
  var l = 2;
  if (((r = e), typeof e == "function")) za(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case kn:
        return ln(n.children, i, s, t);
      case na:
        ((l = 8), (i |= 8));
        break;
      case _o:
        return (
          (e = Ve(12, n, t, i | 2)),
          (e.elementType = _o),
          (e.lanes = s),
          e
        );
      case Vo:
        return ((e = Ve(13, n, t, i)), (e.elementType = Vo), (e.lanes = s), e);
      case Fo:
        return ((e = Ve(19, n, t, i)), (e.elementType = Fo), (e.lanes = s), e);
      case bh:
        return Is(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case kh:
              l = 10;
              break e;
            case wh:
              l = 9;
              break e;
            case ra:
              l = 11;
              break e;
            case ia:
              l = 14;
              break e;
            case Ct:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(l, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function ln(e, t, n, r) {
  return ((e = Ve(7, e, r, t)), (e.lanes = n), e);
}
function Is(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = bh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bo(e, t, n) {
  return ((e = Ve(6, e, null, t)), (e.lanes = n), e);
}
function jo(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dy(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = no(0)),
    (this.expirationTimes = no(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = no(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function _a(e, t, n, r, i, s, l, a, c) {
  return (
    (e = new Dy(e, t, n, a, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ve(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ba(s),
    e
  );
}
function Ny(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pp(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return pf(e, n, t);
  }
  return t;
}
function mp(e, t, n, r, i, s, l, a, c) {
  return (
    (e = _a(n, r, !0, e, i, s, l, a, c)),
    (e.context = pp(null)),
    (n = e.current),
    (r = ye()),
    (i = zt(n)),
    (s = ft(r, i)),
    (s.callback = t ?? null),
    Bt(n, s, i),
    (e.current.lanes = i),
    ni(e, i, r),
    Ce(e, r),
    e
  );
}
function zs(e, t, n, r) {
  var i = t.current,
    s = ye(),
    l = zt(i);
  return (
    (n = pp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ft(s, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, l)),
    e !== null && (Xe(e, i, l, s), Ii(e, i, l)),
    l
  );
}
function gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Va(e, t) {
  (Wu(e, t), (e = e.alternate) && Wu(e, t));
}
function By() {
  return null;
}
var gp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fa(e) {
  this._internalRoot = e;
}
_s.prototype.render = Fa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  zs(e, t, null, null);
};
_s.prototype.unmount = Fa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (fn(function () {
      zs(null, e, null, null);
    }),
      (t[yt] = null));
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $h();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    (Pt.splice(n, 0, e), n === 0 && Gh(e));
  }
};
function Oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mu() {}
function Iy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = gs(l);
        s.call(u);
      };
    }
    var l = mp(t, r, e, 0, null, !1, !1, "", Mu);
    return (
      (e._reactRootContainer = l),
      (e[yt] = l.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = gs(c);
      a.call(u);
    };
  }
  var c = _a(e, 0, !1, null, null, !1, !1, "", Mu);
  return (
    (e._reactRootContainer = c),
    (e[yt] = c.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      zs(t, c, n, r);
    }),
    c
  );
}
function Fs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var l = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var c = gs(l);
        a.call(c);
      };
    }
    zs(t, l, e, i);
  } else l = Iy(n, t, e, i, r);
  return gs(l);
}
Qh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (la(t, n | 1), Ce(t, J()), !(B & 6) && ((Yn = J() + 500), $t()));
      }
      break;
    case 13:
      (fn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = ye();
          Xe(r, e, 1, i);
        }
      }),
        Va(e, 1));
  }
};
aa = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Xe(t, e, 134217728, n);
    }
    Va(e, 134217728);
  }
};
Hh = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = ye();
      Xe(n, e, t, r);
    }
    Va(e, t);
  }
};
$h = function () {
  return I;
};
Kh = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
Zo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ms(r);
            if (!i) throw Error(C(90));
            (Sh(r), Qo(r, i));
          }
        }
      }
      break;
    case "textarea":
      Lh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Bn(e, !!n.multiple, t, !1));
  }
};
Ah = Na;
Dh = fn;
var zy = { usingClientEntryPoint: !1, Events: [ii, Sn, Ms, Mh, Rh, Na] },
  dr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _y = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Ih(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || By,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ti.isDisabled && Ti.supportsFiber)
    try {
      ((Ps = Ti.inject(_y)), (rt = Ti));
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zy;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oa(t)) throw Error(C(200));
  return Ny(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!Oa(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = _a(e, 1, !1, null, null, n, !1, r, i)),
    (e[yt] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Fa(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = Ih(t)), (e = e === null ? null : e.stateNode), e);
};
Ae.flushSync = function (e) {
  return fn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!Vs(t)) throw Error(C(200));
  return Fs(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!Oa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    l = gp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = mp(t, null, e, 1, n ?? null, i, !1, s, l)),
    (e[yt] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new _s(t);
};
Ae.render = function (e, t, n) {
  if (!Vs(t)) throw Error(C(200));
  return Fs(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Vs(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (fn(function () {
        Fs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[yt] = null));
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = Na;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Fs(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function yp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp);
    } catch (e) {
      console.error(e);
    }
}
(yp(), (gh.exports = Ae));
var Vy = gh.exports,
  Ru = Vy;
((Io.createRoot = Ru.createRoot), (Io.hydrateRoot = Ru.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ys() {
  return (
    (ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ys.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Mt || (Mt = {}));
const Au = "popstate";
function Fy(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: l, hash: a } = r.location;
    return Wl(
      "",
      { pathname: s, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : vp(i);
  }
  return Uy(t, n, null, e);
}
function Pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function xp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Oy() {
  return Math.random().toString(36).substr(2, 8);
}
function Du(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Wl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ys(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Os(t) : t,
      { state: n, key: (t && t.key) || r || Oy() },
    )
  );
}
function vp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Os(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Uy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    l = i.history,
    a = Mt.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), l.replaceState(ys({}, l.state, { idx: u }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function h() {
    a = Mt.Pop;
    let w = d(),
      m = w == null ? null : w - u;
    ((u = w), c && c({ action: a, location: v.location, delta: m }));
  }
  function f(w, m) {
    a = Mt.Push;
    let p = Wl(v.location, w, m);
    u = d() + 1;
    let g = Du(p, u),
      k = v.createHref(p);
    try {
      l.pushState(g, "", k);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      i.location.assign(k);
    }
    s && c && c({ action: a, location: v.location, delta: 1 });
  }
  function y(w, m) {
    a = Mt.Replace;
    let p = Wl(v.location, w, m);
    u = d();
    let g = Du(p, u),
      k = v.createHref(p);
    (l.replaceState(g, "", k),
      s && c && c({ action: a, location: v.location, delta: 0 }));
  }
  function x(w) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : vp(w);
    return (
      (p = p.replace(/ $/, "%20")),
      Pe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(w) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Au, h),
        (c = w),
        () => {
          (i.removeEventListener(Au, h), (c = null));
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: x,
    encodeLocation(w) {
      let m = x(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: y,
    go(w) {
      return l.go(w);
    },
  };
  return v;
}
var Nu;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Nu || (Nu = {}));
function Qy(e, t, n) {
  return (n === void 0 && (n = "/"), Hy(e, t, n));
}
function Hy(e, t, n, r) {
  let i = typeof t == "string" ? Os(t) : t,
    s = bp(i.pathname || "/", n);
  if (s == null) return null;
  let l = kp(e);
  $y(l);
  let a = null;
  for (let c = 0; a == null && c < l.length; ++c) {
    let u = ix(s);
    a = tx(l[c], u);
  }
  return a;
}
function kp(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (s, l, a) => {
    let c = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: l,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (Pe(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = On([r, c.relativePath]),
      d = n.concat(c);
    (s.children &&
      s.children.length > 0 &&
      (Pe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      kp(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Jy(u, s.index), routesMeta: d }));
  };
  return (
    e.forEach((s, l) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, l);
      else for (let c of wp(s.path)) i(s, l, c);
    }),
    t
  );
}
function wp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let l = wp(r.join("/")),
    a = [];
  return (
    a.push(...l.map((c) => (c === "" ? s : [s, c].join("/")))),
    i && a.push(...l),
    a.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function $y(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ex(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Ky = /^:[\w-]+$/,
  Gy = 3,
  Yy = 2,
  Xy = 1,
  Zy = 10,
  qy = -2,
  Bu = (e) => e === "*";
function Jy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Bu) && (r += qy),
    t && (r += Yy),
    n
      .filter((i) => !Bu(i))
      .reduce((i, s) => i + (Ky.test(s) ? Gy : s === "" ? Xy : Zy), r)
  );
}
function ex(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function tx(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    l = [];
  for (let a = 0; a < r.length; ++a) {
    let c = r[a],
      u = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      h = nx(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d,
      ),
      f = c.route;
    if (!h) return null;
    (Object.assign(i, h.params),
      l.push({
        params: i,
        pathname: On([s, h.pathname]),
        pathnameBase: sx(On([s, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (s = On([s, h.pathnameBase])));
  }
  return l;
}
function nx(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = rx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    l = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, d, h) => {
      let { paramName: f, isOptional: y } = d;
      if (f === "*") {
        let v = a[h] || "";
        l = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[h];
      return (
        y && !x ? (u[f] = void 0) : (u[f] = (x || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: e,
  };
}
function rx(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    xp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, c) => (
            r.push({ paramName: a, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ix(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      xp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function bp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const On = (e) => e.join("/").replace(/\/\/+/g, "/"),
  sx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function ox(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jp = ["post", "put", "patch", "delete"];
new Set(jp);
const lx = ["get", ...jp];
new Set(lx);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xs.apply(this, arguments)
  );
}
const ax = j.createContext(null),
  cx = j.createContext(null),
  Sp = j.createContext(null),
  Us = j.createContext(null),
  Qs = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Cp = j.createContext(null);
function Ua() {
  return j.useContext(Us) != null;
}
function Lp() {
  return (Ua() || Pe(!1), j.useContext(Us).location);
}
function ux(e, t) {
  return dx(e, t);
}
function dx(e, t, n, r) {
  Ua() || Pe(!1);
  let { navigator: i } = j.useContext(Sp),
    { matches: s } = j.useContext(Qs),
    l = s[s.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let c = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Lp(),
    d;
  if (t) {
    var h;
    let w = typeof t == "string" ? Os(t) : t;
    (c === "/" || ((h = w.pathname) != null && h.startsWith(c)) || Pe(!1),
      (d = w));
  } else d = u;
  let f = d.pathname || "/",
    y = f;
  if (c !== "/") {
    let w = c.replace(/^\//, "").split("/");
    y = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let x = Qy(e, { pathname: y }),
    v = gx(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: On([
              c,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? c
                : On([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return t && v
    ? j.createElement(
        Us.Provider,
        {
          value: {
            location: xs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: Mt.Pop,
          },
        },
        v,
      )
    : v;
}
function hx() {
  let e = kx(),
    t = ox(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const fx = j.createElement(hx, null);
class px extends j.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Qs.Provider,
          { value: this.props.routeContext },
          j.createElement(Cp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function mx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = j.useContext(ax);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Qs.Provider, { value: t }, r)
  );
}
function gx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let d = l.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0,
    );
    (d >= 0 || Pe(!1), (l = l.slice(0, Math.min(l.length, d + 1))));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let h = l[d];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = d),
        h.route.id)
      ) {
        let { loaderData: f, errors: y } = n,
          x =
            h.route.loader &&
            f[h.route.id] === void 0 &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || x) {
          ((c = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((d, h, f) => {
    let y,
      x = !1,
      v = null,
      w = null;
    n &&
      ((y = a && h.route.id ? a[h.route.id] : void 0),
      (v = h.route.errorElement || fx),
      c &&
        (u < 0 && f === 0
          ? (wx("route-fallback"), (x = !0), (w = null))
          : u === f &&
            ((x = !0), (w = h.route.hydrateFallbackElement || null))));
    let m = t.concat(l.slice(0, f + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = v)
            : x
              ? (g = w)
              : h.route.Component
                ? (g = j.createElement(h.route.Component, null))
                : h.route.element
                  ? (g = h.route.element)
                  : (g = d),
          j.createElement(mx, {
            match: h,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
      ? j.createElement(px, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Pp = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Pp || {});
function yx(e) {
  let t = j.useContext(cx);
  return (t || Pe(!1), t);
}
function xx(e) {
  let t = j.useContext(Qs);
  return (t || Pe(!1), t);
}
function vx(e) {
  let t = xx(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Pe(!1), n.route.id);
}
function kx() {
  var e;
  let t = j.useContext(Cp),
    n = yx(Pp.UseRouteError),
    r = vx();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Iu = {};
function wx(e, t, n) {
  Iu[e] || (Iu[e] = !0);
}
function bx(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Tp(e) {
  Pe(!1);
}
function jx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Mt.Pop,
    navigator: s,
    static: l = !1,
    future: a,
  } = e;
  Ua() && Pe(!1);
  let c = t.replace(/^\/*/, "/"),
    u = j.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: l,
        future: xs({ v7_relativeSplatPath: !1 }, a),
      }),
      [c, a, s, l],
    );
  typeof r == "string" && (r = Os(r));
  let {
      pathname: d = "/",
      search: h = "",
      hash: f = "",
      state: y = null,
      key: x = "default",
    } = r,
    v = j.useMemo(() => {
      let w = bp(d, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: f, state: y, key: x },
            navigationType: i,
          };
    }, [c, d, h, f, y, x, i]);
  return v == null
    ? null
    : j.createElement(
        Sp.Provider,
        { value: u },
        j.createElement(Us.Provider, { children: n, value: v }),
      );
}
function Sx(e) {
  let { children: t, location: n } = e;
  return ux(Ml(t), n);
}
new Promise(() => {});
function Ml(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, i) => {
      if (!j.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === j.Fragment) {
        n.push.apply(n, Ml(r.props.children, s));
        return;
      }
      (r.type !== Tp && Pe(!1), !r.props.index || !r.props.children || Pe(!1));
      let l = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (l.children = Ml(r.props.children, s)), n.push(l));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Cx = "6";
try {
  window.__reactRouterVersion = Cx;
} catch {}
const Lx = "startTransition",
  zu = E0[Lx];
function Px(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = j.useRef();
  s.current == null && (s.current = Fy({ window: i, v5Compat: !0 }));
  let l = s.current,
    [a, c] = j.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    d = j.useCallback(
      (h) => {
        u && zu ? zu(() => c(h)) : c(h);
      },
      [c, u],
    );
  return (
    j.useLayoutEffect(() => l.listen(d), [l, d]),
    j.useEffect(() => bx(r), [r]),
    j.createElement(jx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
      future: r,
    })
  );
}
var _u;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(_u || (_u = {}));
var Vu;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Vu || (Vu = {}));
const Tx = "modulepreload",
  Ex = function (e) {
    return "/" + e;
  },
  Fu = {},
  Qa = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        a =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((c) => {
          if (((c = Ex(c)), c in Fu)) return;
          Fu[c] = !0;
          const u = c.endsWith(".css"),
            d = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = u ? "stylesheet" : Tx),
            u || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            a && h.setAttribute("nonce", a),
            document.head.appendChild(h),
            u)
          )
            return new Promise((f, y) => {
              (h.addEventListener("load", f),
                h.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function s(l) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = l), window.dispatchEvent(a), !a.defaultPrevented))
        throw l;
    }
    return i.then((l) => {
      for (const a of l || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  },
  Ep = j.createContext({});
function Wp(e) {
  const t = j.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ha = j.createContext(null),
  Mp = j.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Wx(e = !0) {
  const t = j.useContext(Ha);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = j.useId();
  j.useEffect(() => {
    e && i(s);
  }, [e]);
  const l = j.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, l] : [!0];
}
const $a = typeof window < "u",
  Rp = $a ? j.useLayoutEffect : j.useEffect,
  Le = (e) => e;
let T8 = Le,
  Ap = Le;
function Ka(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  pt = (e) => e * 1e3,
  mt = (e) => e / 1e3,
  Mx = { useManualTiming: !1 };
function Rx(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (s.has(u) && (c.schedule(u), e()), u(l));
  }
  const c = {
    schedule: (u, d = !1, h = !1) => {
      const y = h && r ? t : n;
      return (d && s.add(u), y.has(u) || y.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), s.delete(u));
    },
    process: (u) => {
      if (((l = u), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(u)));
    },
  };
  return c;
}
const Ei = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Ax = 40;
function Dp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    l = Ei.reduce((m, p) => ((m[p] = Rx(s)), m), {}),
    {
      read: a,
      resolveKeyframes: c,
      update: u,
      preRender: d,
      render: h,
      postRender: f,
    } = l,
    y = () => {
      const m = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Ax), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        c.process(i),
        u.process(i),
        d.process(i),
        h.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y)));
    },
    x = () => {
      ((n = !0), (r = !0), i.isProcessing || e(y));
    };
  return {
    schedule: Ei.reduce((m, p) => {
      const g = l[p];
      return (
        (m[p] = (k, b = !1, L = !1) => (n || x(), g.schedule(k, b, L))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Ei.length; p++) l[Ei[p]].cancel(m);
    },
    state: i,
    steps: l,
  };
}
const {
    schedule: F,
    cancel: Ot,
    state: le,
    steps: So,
  } = Dp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Le, !0),
  Np = j.createContext({ strict: !1 }),
  Ou = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Zn = {};
for (const e in Ou) Zn[e] = { isEnabled: (t) => Ou[e].some((n) => !!t[n]) };
function Dx(e) {
  for (const t in e) Zn[t] = { ...Zn[t], ...e[t] };
}
const Nx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function vs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Nx.has(e)
  );
}
let Bp = (e) => !vs(e);
function Bx(e) {
  e && (Bp = (t) => (t.startsWith("on") ? !vs(t) : e(t)));
}
try {
  Bx(require("@emotion/is-prop-valid").default);
} catch {}
function Ix(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Bp(i) ||
        (n === !0 && vs(i)) ||
        (!t && !vs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function zx(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Hs = j.createContext({});
function Xr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function $s(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ga = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ya = ["initial", ...Ga];
function Ks(e) {
  return $s(e.animate) || Ya.some((t) => Xr(e[t]));
}
function Ip(e) {
  return !!(Ks(e) || e.variants);
}
function _x(e, t) {
  if (Ks(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xr(n) ? n : void 0,
      animate: Xr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Vx(e) {
  const { initial: t, animate: n } = _x(e, j.useContext(Hs));
  return j.useMemo(() => ({ initial: t, animate: n }), [Uu(t), Uu(n)]);
}
function Uu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Fx = Symbol.for("motionComponentSymbol");
function Mn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Ox(e, t, n) {
  return j.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r)));
    },
    [t],
  );
}
const Xa = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Ux = "framerAppearId",
  zp = "data-" + Xa(Ux),
  { schedule: Za } = Dp(queueMicrotask, !1),
  _p = j.createContext({});
function Qx(e, t, n, r, i) {
  var s, l;
  const { visualElement: a } = j.useContext(Hs),
    c = j.useContext(Np),
    u = j.useContext(Ha),
    d = j.useContext(Mp).reducedMotion,
    h = j.useRef(null);
  ((r = r || c.renderer),
    !h.current &&
      r &&
      (h.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const f = h.current,
    y = j.useContext(_p);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    Hx(h.current, n, i, y);
  const x = j.useRef(!1);
  j.useInsertionEffect(() => {
    f && x.current && f.update(n, u);
  });
  const v = n[zp],
    w = j.useRef(
      !!v &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, v)
        ) &&
        ((l = window.MotionHasOptimisedAnimation) === null || l === void 0
          ? void 0
          : l.call(window, v)),
    );
  return (
    Rp(() => {
      f &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Za.render(f.render),
        w.current && f.animationState && f.animationState.animateChanges());
    }),
    j.useEffect(() => {
      f &&
        (!w.current && f.animationState && f.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, v);
          }),
          (w.current = !1)));
    }),
    f
  );
}
function Hx(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: l,
    dragConstraints: a,
    layoutScroll: c,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Vp(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!l || (a && Mn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: u,
    }));
}
function Vp(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Vp(e.parent);
}
function $x({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, l;
  e && Dx(e);
  function a(u, d) {
    let h;
    const f = { ...j.useContext(Mp), ...u, layoutId: Kx(u) },
      { isStatic: y } = f,
      x = Vx(u),
      v = r(u, y);
    if (!y && $a) {
      Gx();
      const w = Yx(f);
      ((h = w.MeasureLayout),
        (x.visualElement = Qx(i, v, f, t, w.ProjectionNode)));
    }
    return o.jsxs(Hs.Provider, {
      value: x,
      children: [
        h && x.visualElement
          ? o.jsx(h, { visualElement: x.visualElement, ...f })
          : null,
        n(i, u, Ox(v, x.visualElement, d), v, y, x.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(l = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && l !== void 0 ? l : ""})`}`;
  const c = j.forwardRef(a);
  return ((c[Fx] = i), c);
}
function Kx({ layoutId: e }) {
  const t = j.useContext(Ep).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Gx(e, t) {
  j.useContext(Np).strict;
}
function Yx(e) {
  const { drag: t, layout: n } = Zn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Xx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function qa(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Xx.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Qu(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Ja(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Qu(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Qu(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Rl = (e) => Array.isArray(e),
  Zx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  qx = (e) => (Rl(e) ? e[e.length - 1] || 0 : e),
  pe = (e) => !!(e && e.getVelocity);
function Qi(e) {
  const t = pe(e) ? e.get() : e;
  return Zx(t) ? t.toValue() : t;
}
function Jx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const l = { latestValues: e2(r, i, s, e), renderState: t() };
  return (
    n &&
      ((l.onMount = (a) => n({ props: r, current: a, ...l })),
      (l.onUpdate = (a) => n(a))),
    l
  );
}
const Fp = (e) => (t, n) => {
  const r = j.useContext(Hs),
    i = j.useContext(Ha),
    s = () => Jx(e, t, r, i);
  return n ? s() : Wp(s);
};
function e2(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = Qi(s[f]);
  let { initial: l, animate: a } = e;
  const c = Ks(e),
    u = Ip(e);
  t &&
    u &&
    !c &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || l === !1;
  const h = d ? a : l;
  if (h && typeof h != "boolean" && !$s(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let y = 0; y < f.length; y++) {
      const x = Ja(e, f[y]);
      if (x) {
        const { transitionEnd: v, transition: w, ...m } = x;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const k = d ? g.length - 1 : 0;
            g = g[k];
          }
          g !== null && (i[p] = g);
        }
        for (const p in v) i[p] = v[p];
      }
    }
  }
  return i;
}
const nr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gn = new Set(nr),
  Op = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Up = Op("--"),
  t2 = Op("var(--"),
  ec = (e) => (t2(e) ? n2.test(e.split("/*")[0].trim()) : !1),
  n2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Qp = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  kt = (e, t, n) => (n > t ? t : n < e ? e : n),
  rr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Zr = { ...rr, transform: (e) => kt(0, 1, e) },
  Wi = { ...rr, default: 1 },
  oi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = oi("deg"),
  st = oi("%"),
  M = oi("px"),
  r2 = oi("vh"),
  i2 = oi("vw"),
  Hu = {
    ...st,
    parse: (e) => st.parse(e) / 100,
    transform: (e) => st.transform(e * 100),
  },
  s2 = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
  },
  o2 = {
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Wi,
    scaleX: Wi,
    scaleY: Wi,
    scaleZ: Wi,
    skew: St,
    skewX: St,
    skewY: St,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Zr,
    originX: Hu,
    originY: Hu,
    originZ: M,
  },
  $u = { ...rr, transform: Math.round },
  tc = {
    ...s2,
    ...o2,
    zIndex: $u,
    size: M,
    fillOpacity: Zr,
    strokeOpacity: Zr,
    numOctaves: $u,
  },
  l2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  a2 = nr.length;
function c2(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < a2; s++) {
    const l = nr[s],
      a = e[l];
    if (a === void 0) continue;
    let c = !0;
    if (
      (typeof a == "number"
        ? (c = a === (l.startsWith("scale") ? 1 : 0))
        : (c = parseFloat(a) === 0),
      !c || n)
    ) {
      const u = Qp(a, tc[l]);
      if (!c) {
        i = !1;
        const d = l2[l] || l;
        r += `${d}(${u}) `;
      }
      n && (t[l] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function nc(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let l = !1,
    a = !1;
  for (const c in t) {
    const u = t[c];
    if (gn.has(c)) {
      l = !0;
      continue;
    } else if (Up(c)) {
      i[c] = u;
      continue;
    } else {
      const d = Qp(u, tc[c]);
      c.startsWith("origin") ? ((a = !0), (s[c] = d)) : (r[c] = d);
    }
  }
  if (
    (t.transform ||
      (l || n
        ? (r.transform = c2(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
const u2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  d2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function h2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? u2 : d2;
  e[s.offset] = M.transform(-r);
  const l = M.transform(t),
    a = M.transform(n);
  e[s.array] = `${l} ${a}`;
}
function Ku(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function f2(e, t, n) {
  const r = Ku(t, e.x, e.width),
    i = Ku(n, e.y, e.height);
  return `${r} ${i}`;
}
function rc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: l,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...u
  },
  d,
  h,
) {
  if ((nc(e, u, h), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: y, dimensions: x } = e;
  (f.transform && (x && (y.transform = f.transform), delete f.transform),
    x &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = f2(
        x,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    l !== void 0 && h2(f, l, a, c, !1));
}
const ic = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Hp = () => ({ ...ic(), attrs: {} }),
  sc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $p(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Kp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Gp(e, t, n, r) {
  $p(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Kp.has(i) ? i : Xa(i), t.attrs[i]);
}
const ks = {};
function p2(e) {
  Object.assign(ks, e);
}
function Yp(e, { layout: t, layoutId: n }) {
  return (
    gn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ks[e] || e === "opacity"))
  );
}
function oc(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const l in i)
    (pe(i[l]) ||
      (t.style && pe(t.style[l])) ||
      Yp(l, e) ||
      ((r = n == null ? void 0 : n.getValue(l)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[l] = i[l]);
  return s;
}
function Xp(e, t, n) {
  const r = oc(e, t, n);
  for (const i in e)
    if (pe(e[i]) || pe(t[i])) {
      const s =
        nr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function m2(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Gu = ["x", "y", "width", "height", "cx", "cy", "r"],
  g2 = {
    useVisualState: Fp({
      scrapeMotionValuesFromProps: Xp,
      createRenderState: Hp,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (gn.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let l = !t;
        if (t)
          for (let a = 0; a < Gu.length; a++) {
            const c = Gu[a];
            e[c] !== t[c] && (l = !0);
          }
        l &&
          F.read(() => {
            (m2(n, r),
              F.render(() => {
                (rc(r, i, sc(n.tagName), e.transformTemplate), Gp(n, r));
              }));
          });
      },
    }),
  },
  y2 = {
    useVisualState: Fp({
      scrapeMotionValuesFromProps: oc,
      createRenderState: ic,
    }),
  };
function Zp(e, t, n) {
  for (const r in t) !pe(t[r]) && !Yp(r, n) && (e[r] = t[r]);
}
function x2({ transformTemplate: e }, t) {
  return j.useMemo(() => {
    const n = ic();
    return (nc(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function v2(e, t) {
  const n = e.style || {},
    r = {};
  return (Zp(r, n, e), Object.assign(r, x2(e, t)), r);
}
function k2(e, t) {
  const n = {},
    r = v2(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function w2(e, t, n, r) {
  const i = j.useMemo(() => {
    const s = Hp();
    return (
      rc(s, t, sc(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (Zp(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function b2(e = !1) {
  return (n, r, i, { latestValues: s }, l) => {
    const c = (qa(n) ? w2 : k2)(r, s, l, n),
      u = Ix(r, typeof n == "string", e),
      d = n !== j.Fragment ? { ...u, ...c, ref: i } : {},
      { children: h } = r,
      f = j.useMemo(() => (pe(h) ? h.get() : h), [h]);
    return j.createElement(n, { ...d, children: f });
  };
}
function j2(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const l = {
      ...(qa(r) ? g2 : y2),
      preloadedFeatures: e,
      useRender: b2(i),
      createVisualElement: t,
      Component: r,
    };
    return $x(l);
  };
}
function qp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Gs(e, t, n) {
  const r = e.getProps();
  return Ja(r, t, n !== void 0 ? n : r.custom, e);
}
const S2 = Ka(() => window.ScrollTimeline !== void 0);
class C2 {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (S2() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class L2 extends C2 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function lc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Al = 2e4;
function Jp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Al; ) ((t += n), (r = e.next(t)));
  return t >= Al ? 1 / 0 : t;
}
function ac(e) {
  return typeof e == "function";
}
function Yu(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const cc = (e) => Array.isArray(e) && typeof e[0] == "number",
  P2 = { linearEasing: void 0 };
function T2(e, t) {
  const n = Ka(e);
  return () => {
    var r;
    return (r = P2[t]) !== null && r !== void 0 ? r : n();
  };
}
const ws = T2(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  em = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Xn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function tm(e) {
  return !!(
    (typeof e == "function" && ws()) ||
    !e ||
    (typeof e == "string" && (e in Dl || ws())) ||
    cc(e) ||
    (Array.isArray(e) && e.every(tm))
  );
}
const yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Dl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yr([0, 0.65, 0.55, 1]),
    circOut: yr([0.55, 0, 1, 0.45]),
    backIn: yr([0.31, 0.01, 0.66, -0.59]),
    backOut: yr([0.33, 1.53, 0.69, 0.99]),
  };
function nm(e, t) {
  if (e)
    return typeof e == "function" && ws()
      ? em(e, t)
      : cc(e)
        ? yr(e)
        : Array.isArray(e)
          ? e.map((n) => nm(n, t) || Dl.easeOut)
          : Dl[e];
}
const He = { x: !1, y: !1 };
function rm() {
  return He.x || He.y;
}
function E2(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function im(e, t) {
  const n = E2(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Xu(e) {
  return (t) => {
    t.pointerType === "touch" || rm() || e(t);
  };
}
function W2(e, t, n = {}) {
  const [r, i, s] = im(e, n),
    l = Xu((a) => {
      const { target: c } = a,
        u = t(a);
      if (typeof u != "function" || !c) return;
      const d = Xu((h) => {
        (u(h), c.removeEventListener("pointerleave", d));
      });
      c.addEventListener("pointerleave", d, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", l, i);
    }),
    s
  );
}
const sm = (e, t) => (t ? (e === t ? !0 : sm(e, t.parentElement)) : !1),
  uc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  M2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function R2(e) {
  return M2.has(e.tagName) || e.tabIndex !== -1;
}
const xr = new WeakSet();
function Zu(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Co(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const A2 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Zu(() => {
    if (xr.has(n)) return;
    Co(n, "down");
    const i = Zu(() => {
        Co(n, "up");
      }),
      s = () => Co(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function qu(e) {
  return uc(e) && !rm();
}
function D2(e, t, n = {}) {
  const [r, i, s] = im(e, n),
    l = (a) => {
      const c = a.currentTarget;
      if (!qu(a) || xr.has(c)) return;
      xr.add(c);
      const u = t(a),
        d = (y, x) => {
          (window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            !(!qu(y) || !xr.has(c)) &&
              (xr.delete(c), typeof u == "function" && u(y, { success: x })));
        },
        h = (y) => {
          d(y, n.useGlobalTarget || sm(c, y.target));
        },
        f = (y) => {
          d(y, !1);
        };
      (window.addEventListener("pointerup", h, i),
        window.addEventListener("pointercancel", f, i));
    };
  return (
    r.forEach((a) => {
      (!R2(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", l, i),
        a.addEventListener("focus", (u) => A2(u, i), i));
    }),
    s
  );
}
function N2(e) {
  return e === "x" || e === "y"
    ? He[e]
      ? null
      : ((He[e] = !0),
        () => {
          He[e] = !1;
        })
    : He.x || He.y
      ? null
      : ((He.x = He.y = !0),
        () => {
          He.x = He.y = !1;
        });
}
const om = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...nr,
]);
let Hi;
function B2() {
  Hi = void 0;
}
const ot = {
  now: () => (
    Hi === void 0 &&
      ot.set(
        le.isProcessing || Mx.useManualTiming
          ? le.timestamp
          : performance.now(),
      ),
    Hi
  ),
  set: (e) => {
    ((Hi = e), queueMicrotask(B2));
  },
};
function dc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class fc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (dc(this.subscriptions, t), () => hc(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const l = this.subscriptions[s];
          l && l(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function lm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ju = 30,
  I2 = (e) => !isNaN(parseFloat(e)),
  ed = { current: void 0 };
class z2 {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = ot.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = ot.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = I2(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            F.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return (ed.current && ed.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ot.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ju
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ju);
    return lm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function qr(e, t) {
  return new z2(e, t);
}
function _2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qr(n));
}
function pc(e, t) {
  const n = Gs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const l in s) {
    const a = qx(s[l]);
    _2(e, l, a);
  }
}
function V2(e) {
  return !!(pe(e) && e.add);
}
function Nl(e, t) {
  const n = e.getValue("willChange");
  if (V2(n)) return n.add(t);
}
function am(e) {
  return e.props[zp];
}
const cm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  F2 = 1e-7,
  O2 = 12;
function U2(e, t, n, r, i) {
  let s,
    l,
    a = 0;
  do ((l = t + (n - t) / 2), (s = cm(l, r, i) - e), s > 0 ? (n = l) : (t = l));
  while (Math.abs(s) > F2 && ++a < O2);
  return l;
}
function li(e, t, n, r) {
  if (e === t && n === r) return Le;
  const i = (s) => U2(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : cm(i(s), t, r));
}
const um = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  dm = (e) => (t) => 1 - e(1 - t),
  hm = li(0.33, 1.53, 0.69, 0.99),
  mc = dm(hm),
  fm = um(mc),
  pm = (e) =>
    (e *= 2) < 1 ? 0.5 * mc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  gc = (e) => 1 - Math.sin(Math.acos(e)),
  mm = dm(gc),
  gm = um(gc),
  ym = (e) => /^0[^.\s]+$/u.test(e);
function Q2(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || ym(e)
      : !0;
}
const Er = (e) => Math.round(e * 1e5) / 1e5,
  yc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function H2(e) {
  return e == null;
}
const $2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  xc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && $2.test(n) && n.startsWith(e)) ||
      (t && !H2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  xm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, l, a] = r.match(yc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(l),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  K2 = (e) => kt(0, 255, e),
  Lo = { ...rr, transform: (e) => Math.round(K2(e)) },
  sn = {
    test: xc("rgb", "red"),
    parse: xm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Lo.transform(e) +
      ", " +
      Lo.transform(t) +
      ", " +
      Lo.transform(n) +
      ", " +
      Er(Zr.transform(r)) +
      ")",
  };
function G2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Bl = { test: xc("#"), parse: G2, transform: sn.transform },
  Rn = {
    test: xc("hsl", "hue"),
    parse: xm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      st.transform(Er(t)) +
      ", " +
      st.transform(Er(n)) +
      ", " +
      Er(Zr.transform(r)) +
      ")",
  },
  he = {
    test: (e) => sn.test(e) || Bl.test(e) || Rn.test(e),
    parse: (e) =>
      sn.test(e) ? sn.parse(e) : Rn.test(e) ? Rn.parse(e) : Bl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? sn.transform(e)
          : Rn.transform(e),
  },
  Y2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function X2(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(yc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Y2)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const vm = "number",
  km = "color",
  Z2 = "var",
  q2 = "var(",
  td = "${}",
  J2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      J2,
      (c) => (
        he.test(c)
          ? (r.color.push(s), i.push(km), n.push(he.parse(c)))
          : c.startsWith(q2)
            ? (r.var.push(s), i.push(Z2), n.push(c))
            : (r.number.push(s), i.push(vm), n.push(parseFloat(c))),
        ++s,
        td
      ),
    )
    .split(td);
  return { values: n, split: a, indexes: r, types: i };
}
function wm(e) {
  return Jr(e).values;
}
function bm(e) {
  const { split: t, types: n } = Jr(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let l = 0; l < r; l++)
      if (((s += t[l]), i[l] !== void 0)) {
        const a = n[l];
        a === vm
          ? (s += Er(i[l]))
          : a === km
            ? (s += he.transform(i[l]))
            : (s += i[l]);
      }
    return s;
  };
}
const e1 = (e) => (typeof e == "number" ? 0 : e);
function t1(e) {
  const t = wm(e);
  return bm(e)(t.map(e1));
}
const Ut = {
    test: X2,
    parse: wm,
    createTransformer: bm,
    getAnimatableNone: t1,
  },
  n1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function r1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(yc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = n1.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const i1 = /\b([a-z-]*)\(.*?\)/gu,
  Il = {
    ...Ut,
    getAnimatableNone: (e) => {
      const t = e.match(i1);
      return t ? t.map(r1).join(" ") : e;
    },
  },
  s1 = {
    ...tc,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Il,
    WebkitFilter: Il,
  },
  vc = (e) => s1[e];
function jm(e, t) {
  let n = vc(e);
  return (
    n !== Il && (n = Ut),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const o1 = new Set(["auto", "none", "0"]);
function l1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !o1.has(s) && Jr(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = jm(n, i);
}
const nd = (e) => e === rr || e === M,
  rd = (e, t) => parseFloat(e.split(", ")[t]),
  id =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return rd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? rd(s[1], e) : 0;
      }
    },
  a1 = new Set(["x", "y", "z"]),
  c1 = nr.filter((e) => !a1.has(e));
function u1(e) {
  const t = [];
  return (
    c1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const qn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: id(4, 13),
  y: id(5, 14),
};
qn.translateX = qn.x;
qn.translateY = qn.y;
const an = new Set();
let zl = !1,
  _l = !1;
function Sm() {
  if (_l) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = u1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, l]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(l);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((_l = !1), (zl = !1), an.forEach((e) => e.complete()), an.clear());
}
function Cm() {
  an.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (_l = !0));
  });
}
function d1() {
  (Cm(), Sm());
}
class kc {
  constructor(t, n, r, i, s, l = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = l));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (an.add(this), zl || ((zl = !0), F.read(Cm), F.resolveKeyframes(Sm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const l = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (l !== void 0) t[0] = l;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          (t[0] === void 0 && (t[0] = a), i && l === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      an.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), an.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Lm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  h1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function f1(e) {
  const t = h1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Pm(e, t, n = 1) {
  const [r, i] = f1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const l = s.trim();
    return Lm(l) ? parseFloat(l) : l;
  }
  return ec(i) ? Pm(i, t, n + 1) : i;
}
const Tm = (e) => (t) => t.test(e),
  p1 = { test: (e) => e === "auto", parse: (e) => e },
  Em = [rr, M, st, St, i2, r2, p1],
  sd = (e) => Em.find(Tm(e));
class Wm extends kc {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && ((u = u.trim()), ec(u))) {
        const d = Pm(u, n.current);
        (d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !om.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      l = sd(i),
      a = sd(s);
    if (l !== a)
      if (nd(l) && nd(a))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Q2(t[i]) && r.push(i);
    r.length && l1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = qn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const l = i.length - 1,
      a = i[l];
    ((i[l] = qn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([c, u]) => {
          n.getValue(c).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const od = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Ut.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function m1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function g1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    l = od(i, t),
    a = od(s, t);
  return !l || !a ? !1 : m1(e) || ((n === "spring" || ac(n)) && r);
}
const y1 = (e) => e !== null;
function Ys(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(y1),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const x1 = 40;
class Mm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: l = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ot.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: l,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > x1
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && d1(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = ot.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: l,
      onComplete: a,
      onUpdate: c,
      isGenerator: u,
    } = this.options;
    if (!u && !g1(t, r, i, s))
      if (l) this.options.duration = 0;
      else {
        (c && c(Ys(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const $ = (e, t, n) => e + (t - e) * n;
function Po(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function v1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    l = 0;
  if (!t) i = s = l = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - a;
    ((i = Po(c, a, e + 1 / 3)), (s = Po(c, a, e)), (l = Po(c, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(l * 255),
    alpha: r,
  };
}
function bs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const To = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  k1 = [Bl, sn, Rn],
  w1 = (e) => k1.find((t) => t.test(e));
function ld(e) {
  const t = w1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Rn && (n = v1(n)), n);
}
const ad = (e, t) => {
    const n = ld(e),
      r = ld(t);
    if (!n || !r) return bs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = To(n.red, r.red, s)),
      (i.green = To(n.green, r.green, s)),
      (i.blue = To(n.blue, r.blue, s)),
      (i.alpha = $(n.alpha, r.alpha, s)),
      sn.transform(i)
    );
  },
  b1 = (e, t) => (n) => t(e(n)),
  ai = (...e) => e.reduce(b1),
  Vl = new Set(["none", "hidden"]);
function j1(e, t) {
  return Vl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function S1(e, t) {
  return (n) => $(e, t, n);
}
function wc(e) {
  return typeof e == "number"
    ? S1
    : typeof e == "string"
      ? ec(e)
        ? bs
        : he.test(e)
          ? ad
          : P1
      : Array.isArray(e)
        ? Rm
        : typeof e == "object"
          ? he.test(e)
            ? ad
            : C1
          : bs;
}
function Rm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, l) => wc(s)(s, t[l]));
  return (s) => {
    for (let l = 0; l < r; l++) n[l] = i[l](s);
    return n;
  };
}
function C1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = wc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function L1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const l = t.types[s],
      a = e.indexes[l][i[l]],
      c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[s] = c), i[l]++);
  }
  return r;
}
const P1 = (e, t) => {
  const n = Ut.createTransformer(t),
    r = Jr(e),
    i = Jr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Vl.has(e) && !i.values.length) || (Vl.has(t) && !r.values.length)
      ? j1(e, t)
      : ai(Rm(L1(r, i), i.values), n)
    : bs(e, t);
};
function Am(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? $(e, t, n)
    : wc(e)(e, t);
}
const T1 = 5;
function Dm(e, t, n) {
  const r = Math.max(t - T1, 0);
  return lm(n - e(r), t - r);
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Eo = 0.001;
function E1({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i,
    s,
    l = 1 - t;
  ((l = kt(Y.minDamping, Y.maxDamping, l)),
    (e = kt(Y.minDuration, Y.maxDuration, mt(e))),
    l < 1
      ? ((i = (u) => {
          const d = u * l,
            h = d * e,
            f = d - n,
            y = Fl(u, l),
            x = Math.exp(-h);
          return Eo - (f / y) * x;
        }),
        (s = (u) => {
          const h = u * l * e,
            f = h * n + n,
            y = Math.pow(l, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-h),
            v = Fl(Math.pow(u, 2), l);
          return ((-i(u) + Eo > 0 ? -1 : 1) * ((f - y) * x)) / v;
        }))
      : ((i = (u) => {
          const d = Math.exp(-u * e),
            h = (u - n) * e + 1;
          return -Eo + d * h;
        }),
        (s = (u) => {
          const d = Math.exp(-u * e),
            h = (n - u) * (e * e);
          return d * h;
        })));
  const a = 5 / e,
    c = M1(i, s, a);
  if (((e = pt(e)), isNaN(c)))
    return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    const u = Math.pow(c, 2) * r;
    return { stiffness: u, damping: l * 2 * Math.sqrt(r * u), duration: e };
  }
}
const W1 = 12;
function M1(e, t, n) {
  let r = n;
  for (let i = 1; i < W1; i++) r = r - e(r) / t(r);
  return r;
}
function Fl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const R1 = ["duration", "bounce"],
  A1 = ["stiffness", "damping", "mass"];
function cd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function D1(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!cd(e, A1) && cd(e, R1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * kt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: s };
    } else {
      const n = E1(e);
      ((t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Nm(e = Y.visualDuration, t = Y.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    l = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: c,
      damping: u,
      mass: d,
      duration: h,
      velocity: f,
      isResolvedFromDuration: y,
    } = D1({ ...n, velocity: -mt(n.velocity || 0) }),
    x = f || 0,
    v = u / (2 * Math.sqrt(c * d)),
    w = l - s,
    m = mt(Math.sqrt(c / d)),
    p = Math.abs(w) < 5;
  (r || (r = p ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = p ? Y.restDelta.granular : Y.restDelta.default));
  let g;
  if (v < 1) {
    const b = Fl(m, v);
    g = (L) => {
      const P = Math.exp(-v * m * L);
      return (
        l - P * (((x + v * m * w) / b) * Math.sin(b * L) + w * Math.cos(b * L))
      );
    };
  } else if (v === 1) g = (b) => l - Math.exp(-m * b) * (w + (x + m * w) * b);
  else {
    const b = m * Math.sqrt(v * v - 1);
    g = (L) => {
      const P = Math.exp(-v * m * L),
        S = Math.min(b * L, 300);
      return (
        l - (P * ((x + v * m * w) * Math.sinh(S) + b * w * Math.cosh(S))) / b
      );
    };
  }
  const k = {
    calculatedDuration: (y && h) || null,
    next: (b) => {
      const L = g(b);
      if (y) a.done = b >= h;
      else {
        let P = 0;
        v < 1 && (P = b === 0 ? pt(x) : Dm(g, b, L));
        const S = Math.abs(P) <= r,
          D = Math.abs(l - L) <= i;
        a.done = S && D;
      }
      return ((a.value = a.done ? l : L), a);
    },
    toString: () => {
      const b = Math.min(Jp(k), Al),
        L = em((P) => k.next(b * P).value, b, 30);
      return b + "ms " + L;
    },
  };
  return k;
}
function ud({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: l,
  min: a,
  max: c,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const h = e[0],
    f = { done: !1, value: h },
    y = (S) => (a !== void 0 && S < a) || (c !== void 0 && S > c),
    x = (S) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - S) < Math.abs(c - S)
          ? a
          : c;
  let v = n * t;
  const w = h + v,
    m = l === void 0 ? w : l(w);
  m !== w && (v = m - h);
  const p = (S) => -v * Math.exp(-S / r),
    g = (S) => m + p(S),
    k = (S) => {
      const D = p(S),
        W = g(S);
      ((f.done = Math.abs(D) <= u), (f.value = f.done ? m : W));
    };
  let b, L;
  const P = (S) => {
    y(f.value) &&
      ((b = S),
      (L = Nm({
        keyframes: [f.value, x(f.value)],
        velocity: Dm(g, S, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let D = !1;
        return (
          !L && b === void 0 && ((D = !0), k(S), P(S)),
          b !== void 0 && S >= b ? L.next(S - b) : (!D && k(S), f)
        );
      },
    }
  );
}
const N1 = li(0.42, 0, 1, 1),
  B1 = li(0, 0, 0.58, 1),
  Bm = li(0.42, 0, 0.58, 1),
  I1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  z1 = {
    linear: Le,
    easeIn: N1,
    easeInOut: Bm,
    easeOut: B1,
    circIn: gc,
    circInOut: gm,
    circOut: mm,
    backIn: mc,
    backInOut: fm,
    backOut: hm,
    anticipate: pm,
  },
  dd = (e) => {
    if (cc(e)) {
      Ap(e.length === 4);
      const [t, n, r, i] = e;
      return li(t, n, r, i);
    } else if (typeof e == "string") return z1[e];
    return e;
  };
function _1(e, t, n) {
  const r = [],
    i = n || Am,
    s = e.length - 1;
  for (let l = 0; l < s; l++) {
    let a = i(e[l], e[l + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[l] || Le : t;
      a = ai(c, a);
    }
    r.push(a);
  }
  return r;
}
function V1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ap(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const l = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = _1(t, r, i),
    c = a.length,
    u = (d) => {
      if (l && d < e[0]) return t[0];
      let h = 0;
      if (c > 1) for (; h < e.length - 2 && !(d < e[h + 1]); h++);
      const f = Xn(e[h], e[h + 1], d);
      return a[h](f);
    };
  return n ? (d) => u(kt(e[0], e[s - 1], d)) : u;
}
function F1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xn(0, t, r);
    e.push($(n, 1, i));
  }
}
function O1(e) {
  const t = [0];
  return (F1(t, e.length - 1), t);
}
function U1(e, t) {
  return e.map((n) => n * t);
}
function Q1(e, t) {
  return e.map(() => t || Bm).splice(0, e.length - 1);
}
function js({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = I1(r) ? r.map(dd) : dd(r),
    s = { done: !1, value: t[0] },
    l = U1(n && n.length === t.length ? n : O1(t), e),
    a = V1(l, t, { ease: Array.isArray(i) ? i : Q1(t, i) });
  return {
    calculatedDuration: e,
    next: (c) => ((s.value = a(c)), (s.done = c >= e), s),
  };
}
const H1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => F.update(t, !0),
      stop: () => Ot(t),
      now: () => (le.isProcessing ? le.timestamp : ot.now()),
    };
  },
  $1 = { decay: ud, inertia: ud, tween: js, keyframes: js, spring: Nm },
  K1 = (e) => e / 100;
class bc extends Mm {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: c } = this.options;
        c && c();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      l = (i == null ? void 0 : i.KeyframeResolver) || kc,
      a = (c, u) => this.onKeyframesResolved(c, u);
    ((this.resolver = new l(s, a, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: l = 0,
      } = this.options,
      a = ac(n) ? n : $1[n] || js;
    let c, u;
    a !== js &&
      typeof t[0] != "number" &&
      ((c = ai(K1, Am(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -l })),
      d.calculatedDuration === null && (d.calculatedDuration = Jp(d)));
    const { calculatedDuration: h } = d,
      f = h + i,
      y = f * (r + 1) - i;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: S } = this.options;
      return { done: !0, value: S[S.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: l,
      mapPercentToKeyframes: a,
      keyframes: c,
      calculatedDuration: u,
      totalDuration: d,
      resolvedDuration: h,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: x,
      repeatDelay: v,
      onUpdate: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > d;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let g = this.currentTime,
      k = s;
    if (y) {
      const S = Math.min(this.currentTime, d) / h;
      let D = Math.floor(S),
        W = S % 1;
      (!W && S >= 1 && (W = 1),
        W === 1 && D--,
        (D = Math.min(D, y + 1)),
        !!(D % 2) &&
          (x === "reverse"
            ? ((W = 1 - W), v && (W -= v / h))
            : x === "mirror" && (k = l)),
        (g = kt(0, 1, W) * h));
    }
    const b = p ? { done: !1, value: c[0] } : k.next(g);
    a && (b.value = a(b.value));
    let { done: L } = b;
    !p &&
      u !== null &&
      (L = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && L));
    return (
      P && i !== void 0 && (b.value = Ys(c, this.options, i)),
      w && w(b.value),
      P && this.finish(),
      b
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? mt(t.calculatedDuration) : 0;
  }
  get time() {
    return mt(this.currentTime);
  }
  set time(t) {
    ((t = pt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = mt(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = H1, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const G1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function Y1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: l = "loop",
    ease: a = "easeInOut",
    times: c,
  } = {},
) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = nm(a, i);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: s + 1,
      direction: l === "reverse" ? "alternate" : "normal",
    })
  );
}
const X1 = Ka(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ss = 10,
  Z1 = 2e4;
function q1(e) {
  return ac(e.type) || e.type === "spring" || !tm(e.ease);
}
function J1(e, t) {
  const n = new bc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < Z1; ) ((r = n.sample(s)), i.push(r.value), (s += Ss));
  return { times: void 0, keyframes: i, duration: s - Ss, ease: "linear" };
}
const Im = { anticipate: pm, backInOut: fm, circInOut: gm };
function ev(e) {
  return e in Im;
}
class hd extends Mm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new Wm(
      s,
      (l, a) => this.onKeyframesResolved(l, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: l,
      motionValue: a,
      name: c,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && ws() && ev(s) && (s = Im[s]), q1(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: f,
          motionValue: y,
          element: x,
          ...v
        } = this.options,
        w = J1(t, v);
      ((t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = w.duration),
        (i = w.times),
        (s = w.ease),
        (l = "keyframes"));
    }
    const d = Y1(a.owner.current, c, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Yu(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: h } = this.options;
            (a.set(Ys(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: i, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return mt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return mt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = pt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Le;
      const { animation: r } = n;
      Yu(r, t);
    }
    return Le;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: l,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: d,
          onComplete: h,
          element: f,
          ...y
        } = this.options,
        x = new bc({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: l,
          times: a,
          isGenerator: !0,
        }),
        v = pt(this.time);
      u.setWithVelocity(x.sample(v - Ss).value, x.sample(v).value, Ss);
    }
    const { onStop: c } = this.options;
    (c && c(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: l,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: c, transformTemplate: u } = n.owner.getProps();
    return (
      X1() &&
      r &&
      G1.has(r) &&
      !c &&
      !u &&
      !i &&
      s !== "mirror" &&
      l !== 0 &&
      a !== "inertia"
    );
  }
}
const tv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  nv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  rv = { type: "keyframes", duration: 0.8 },
  iv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  sv = (e, { keyframes: t }) =>
    t.length > 2
      ? rv
      : gn.has(e)
        ? e.startsWith("scale")
          ? nv(t[1])
          : tv
        : iv;
function ov({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: l,
  repeatDelay: a,
  from: c,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
const jc =
  (e, t, n, r = {}, i, s) =>
  (l) => {
    const a = lc(r, e) || {},
      c = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - pt(c);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (l(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (ov(a) || (d = { ...d, ...sv(e, d) }),
      d.duration && (d.duration = pt(d.duration)),
      d.repeatDelay && (d.repeatDelay = pt(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let h = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (h = !0)),
      h && !s && t.get() !== void 0)
    ) {
      const f = Ys(d.keyframes, a);
      if (f !== void 0)
        return (
          F.update(() => {
            (d.onUpdate(f), d.onComplete());
          }),
          new L2([])
        );
    }
    return !s && hd.supports(d) ? new hd(d) : new bc(d);
  };
function lv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function zm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: l = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (l = r);
  const u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const h in c) {
    const f = e.getValue(
        h,
        (s = e.latestValues[h]) !== null && s !== void 0 ? s : null,
      ),
      y = c[h];
    if (y === void 0 || (d && lv(d, h))) continue;
    const x = { delay: n, ...lc(l || {}, h) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = am(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, h, F);
        p !== null && ((x.startTime = p), (v = !0));
      }
    }
    (Nl(e, h),
      f.start(
        jc(h, f, y, e.shouldReduceMotion && om.has(h) ? { type: !1 } : x, e, v),
      ));
    const w = f.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        F.update(() => {
          a && pc(e, a);
        });
      }),
    u
  );
}
function Ol(e, t, n = {}) {
  var r;
  const i = Gs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const l = i ? () => Promise.all(zm(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: h,
              staggerDirection: f,
            } = s;
            return av(e, t, d + u, h, f, n);
          }
        : () => Promise.resolve(),
    { when: c } = s;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [l, a] : [a, l];
    return u().then(() => d());
  } else return Promise.all([l(), a(n.delay)]);
}
function av(e, t, n = 0, r = 0, i = 1, s) {
  const l = [],
    a = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(cv)
      .forEach((u, d) => {
        (u.notify("AnimationStart", t),
          l.push(
            Ol(u, t, { ...s, delay: n + c(d) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(l)
  );
}
function cv(e, t) {
  return e.sortNodePosition(t);
}
function _m(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ol(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ol(e, t, n);
  else {
    const i = typeof t == "function" ? Gs(e, t, n.custom) : t;
    r = Promise.all(zm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const uv = Ya.length;
function Vm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Vm(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < uv; n++) {
    const r = Ya[n],
      i = e.props[r];
    (Xr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const dv = [...Ga].reverse(),
  hv = Ga.length;
function fv(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => _m(e, n, r)));
}
function pv(e) {
  let t = fv(e),
    n = fd(),
    r = !0;
  const i = (c) => (u, d) => {
    var h;
    const f = Gs(
      e,
      d,
      c === "exit"
        ? (h = e.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0,
    );
    if (f) {
      const { transition: y, transitionEnd: x, ...v } = f;
      u = { ...u, ...v, ...x };
    }
    return u;
  };
  function s(c) {
    t = c(e);
  }
  function l(c) {
    const { props: u } = e,
      d = Vm(e.parent) || {},
      h = [],
      f = new Set();
    let y = {},
      x = 1 / 0;
    for (let w = 0; w < hv; w++) {
      const m = dv[w],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : d[m],
        k = Xr(g),
        b = m === c ? p.isActive : null;
      b === !1 && (x = w);
      let L = g === d[m] && g !== u[m] && k;
      if (
        (L && r && e.manuallyAnimateOnMount && (L = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && b === null) ||
          (!g && !p.prevProp) ||
          $s(g) ||
          typeof g == "boolean")
      )
        continue;
      const P = mv(p.prevProp, g);
      let S = P || (m === c && p.isActive && !L && k) || (w > x && k),
        D = !1;
      const W = Array.isArray(g) ? g : [g];
      let O = W.reduce(i(m), {});
      b === !1 && (O = {});
      const { prevResolvedValues: qe = {} } = p,
        Je = { ...qe, ...O },
        ke = (Q) => {
          ((S = !0),
            f.has(Q) && ((D = !0), f.delete(Q)),
            (p.needsAnimating[Q] = !0));
          const T = e.getValue(Q);
          T && (T.liveStyle = !1);
        };
      for (const Q in Je) {
        const T = O[Q],
          R = qe[Q];
        if (y.hasOwnProperty(Q)) continue;
        let A = !1;
        (Rl(T) && Rl(R) ? (A = !qp(T, R)) : (A = T !== R),
          A
            ? T != null
              ? ke(Q)
              : f.add(Q)
            : T !== void 0 && f.has(Q)
              ? ke(Q)
              : (p.protectedKeys[Q] = !0));
      }
      ((p.prevProp = g),
        (p.prevResolvedValues = O),
        p.isActive && (y = { ...y, ...O }),
        r && e.blockInitialAnimation && (S = !1),
        S &&
          (!(L && P) || D) &&
          h.push(...W.map((Q) => ({ animation: Q, options: { type: m } }))));
    }
    if (f.size) {
      const w = {};
      (f.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        (g && (g.liveStyle = !0), (w[m] = p ?? null));
      }),
        h.push({ animation: w }));
    }
    let v = !!h.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(h) : Promise.resolve()
    );
  }
  function a(c, u) {
    var d;
    if (n[c].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(c, u);
      }),
      (n[c].isActive = u));
    const h = l(c);
    for (const f in n) n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: l,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = fd()), (r = !0));
    },
  };
}
function mv(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qp(t, e) : !1;
}
function Xt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function fd() {
  return {
    animate: Xt(!0),
    whileInView: Xt(),
    whileHover: Xt(),
    whileTap: Xt(),
    whileDrag: Xt(),
    whileFocus: Xt(),
    exit: Xt(),
  };
}
class Kt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class gv extends Kt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = pv(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    $s(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let yv = 0;
class xv extends Kt {
  constructor() {
    (super(...arguments), (this.id = yv++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vv = { animation: { Feature: gv }, exit: { Feature: xv } };
function ei(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ci(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const kv = (e) => (t) => uc(t) && e(t, ci(t));
function Wr(e, t, n, r) {
  return ei(e, t, kv(n), r);
}
const pd = (e, t) => Math.abs(e - t);
function wv(e, t) {
  const n = pd(e.x, t.x),
    r = pd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Fm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Mo(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = wv(h.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: x } = h,
          { timestamp: v } = le;
        this.history.push({ ...x, timestamp: v });
        const { onStart: w, onMove: m } = this.handlers;
        (f ||
          (w && w(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, f) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Wo(f, this.transformPagePoint)),
          F.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: x, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Mo(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Wo(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && y && y(h, w), x && x(h, w));
      }),
      !uc(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const l = ci(t),
      a = Wo(l, this.transformPagePoint),
      { point: c } = a,
      { timestamp: u } = le;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    (d && d(t, Mo(a, this.history)),
      (this.removeListeners = ai(
        Wr(this.contextWindow, "pointermove", this.handlePointerMove),
        Wr(this.contextWindow, "pointerup", this.handlePointerUp),
        Wr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Ot(this.updatePoint));
  }
}
function Wo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function md(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mo({ point: e }, t) {
  return {
    point: e,
    delta: md(e, Om(t)),
    offset: md(e, bv(t)),
    velocity: jv(t, 0.1),
  };
}
function bv(e) {
  return e[0];
}
function Om(e) {
  return e[e.length - 1];
}
function jv(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Om(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > pt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = mt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const l = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l);
}
const Um = 1e-4,
  Sv = 1 - Um,
  Cv = 1 + Um,
  Qm = 0.01,
  Lv = 0 - Qm,
  Pv = 0 + Qm;
function Re(e) {
  return e.max - e.min;
}
function Tv(e, t, n) {
  return Math.abs(e - t) <= n;
}
function gd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = $(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (e.translate = $(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Sv && e.scale <= Cv) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Lv && e.translate <= Pv) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Mr(e, t, n, r) {
  (gd(e.x, t.x, n.x, r ? r.originX : void 0),
    gd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function yd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Re(t)));
}
function Ev(e, t, n) {
  (yd(e.x, t.x, n.x), yd(e.y, t.y, n.y));
}
function xd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Re(t)));
}
function Rr(e, t, n) {
  (xd(e.x, t.x, n.x), xd(e.y, t.y, n.y));
}
function Wv(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? $(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? $(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function vd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Mv(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: vd(e.x, n, i), y: vd(e.y, t, r) };
}
function kd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Rv(e, t) {
  return { x: kd(e.x, t.x), y: kd(e.y, t.y) };
}
function Av(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = Xn(t.min, t.max - r, e.min))
      : r > i && (n = Xn(e.min, e.max - i, t.min)),
    kt(0, 1, n)
  );
}
function Dv(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ul = 0.35;
function Nv(e = Ul) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ul),
    { x: wd(e, "left", "right"), y: wd(e, "top", "bottom") }
  );
}
function wd(e, t, n) {
  return { min: bd(e, t), max: bd(e, n) };
}
function bd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const jd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  An = () => ({ x: jd(), y: jd() }),
  Sd = () => ({ min: 0, max: 0 }),
  q = () => ({ x: Sd(), y: Sd() });
function Ie(e) {
  return [e("x"), e("y")];
}
function Hm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Bv({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Iv(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ro(e) {
  return e === void 0 || e === 1;
}
function Ql({ scale: e, scaleX: t, scaleY: n }) {
  return !Ro(e) || !Ro(t) || !Ro(n);
}
function Jt(e) {
  return (
    Ql(e) ||
    $m(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function $m(e) {
  return Cd(e.x) || Cd(e.y);
}
function Cd(e) {
  return e && e !== "0%";
}
function Cs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ld(e, t, n, r, i) {
  return (i !== void 0 && (e = Cs(e, i, r)), Cs(e, n, r) + t);
}
function Hl(e, t = 0, n = 1, r, i) {
  ((e.min = Ld(e.min, t, n, r, i)), (e.max = Ld(e.max, t, n, r, i)));
}
function Km(e, { x: t, y: n }) {
  (Hl(e.x, t.translate, t.scale, t.originPoint),
    Hl(e.y, n.translate, n.scale, n.originPoint));
}
const Pd = 0.999999999999,
  Td = 1.0000000000001;
function zv(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, l;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (l = s.projectionDelta));
    const { visualElement: c } = s.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Nn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), Km(e, l)),
      r && Jt(s.latestValues) && Nn(e, s.latestValues));
  }
  (t.x < Td && t.x > Pd && (t.x = 1), t.y < Td && t.y > Pd && (t.y = 1));
}
function Dn(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Ed(e, t, n, r, i = 0.5) {
  const s = $(e.min, e.max, i);
  Hl(e, t, n, s, r);
}
function Nn(e, t) {
  (Ed(e.x, t.x, t.scaleX, t.scale, t.originX),
    Ed(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Gm(e, t) {
  return Hm(Iv(e.getBoundingClientRect(), t));
}
function _v(e, t, n) {
  const r = Gm(e, n),
    { scroll: i } = t;
  return (i && (Dn(r.x, i.offset.x), Dn(r.y, i.offset.y)), r);
}
const Ym = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Vv = new WeakMap();
class Fv {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: h } = this.getProps();
        (h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ci(d).point));
      },
      s = (d, h) => {
        const { drag: f, dragPropagation: y, onDragStart: x } = this.getProps();
        if (
          f &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = N2(f)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((w) => {
            let m = this.getAxisMotionValue(w).get() || 0;
            if (st.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[w];
                g && (m = Re(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[w] = m;
          }),
          x && F.postRender(() => x(d, h)),
          Nl(this.visualElement, "transform"));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      l = (d, h) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: x,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: w } = h;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = Ov(w)),
            this.currentDirection !== null && x && x(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, w),
          this.updateAxis("y", h.point, w),
          this.visualElement.render(),
          v && v(d, h));
      },
      a = (d, h) => this.stop(d, h),
      c = () =>
        Ie((d) => {
          var h;
          return (
            this.getAnimationState(d) === "paused" &&
            ((h = this.getAxisMotionValue(d).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Fm(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: l,
        onSessionEnd: a,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Ym(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && F.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Mi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (l = Wv(l, this.constraints[t], this.elastic[t])),
      s.set(l));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && Mn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = Mv(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Nv(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((l) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(l) &&
            (this.constraints[l] = Dv(i.layoutBox[l], this.constraints[l]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = _v(r, i.root, this.visualElement.getTransformPagePoint());
    let l = Rv(i.layout.layoutBox, s);
    if (n) {
      const a = n(Bv(l));
      ((this.hasMutatedConstraints = !!a), a && (l = Hm(a)));
    }
    return l;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: l,
        onDragTransitionEnd: a,
      } = this.getProps(),
      c = this.constraints || {},
      u = Ie((d) => {
        if (!Mi(d, n, this.currentDirection)) return;
        let h = (c && c[d]) || {};
        l && (h = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...h,
          };
        return this.startAxisValueAnimation(d, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Nl(this.visualElement, t),
      r.start(jc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!Mi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: l, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - $(l, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Mn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((l) => {
      const a = this.getAxisMotionValue(l);
      if (a && this.constraints !== !1) {
        const c = a.get();
        i[l] = Av({ min: c, max: c }, this.constraints[l]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((l) => {
        if (!Mi(l, t, null)) return;
        const a = this.getAxisMotionValue(l),
          { min: c, max: u } = this.constraints[l];
        a.set($(c, u, i[l]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Vv.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Wr(t, "pointerdown", (c) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Mn(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      F.read(r));
    const l = ei(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ie((d) => {
              const h = this.getAxisMotionValue(d);
              h &&
                ((this.originPoint[d] += c[d].translate),
                h.set(h.get() + c[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (l(), n(), s(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: l = Ul,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: l,
      dragMomentum: a,
    };
  }
}
function Mi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ov(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class Uv extends Kt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Le),
      (this.removeListeners = Le),
      (this.controls = new Fv(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Le));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Wd = (e) => (t, n) => {
  e && F.postRender(() => e(t, n));
};
class Qv extends Kt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Le));
  }
  onPointerDown(t) {
    this.session = new Fm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ym(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Wd(t),
      onStart: Wd(n),
      onMove: r,
      onEnd: (s, l) => {
        (delete this.session, i && F.postRender(() => i(s, l)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Wr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const $i = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Md(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Md(e, t.target.x),
        r = Md(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Hv = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ut.parse(e);
      if (i.length > 5) return r;
      const s = Ut.createTransformer(e),
        l = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + l] /= a), (i[1 + l] /= c));
      const u = $(a, c, 0.5);
      return (
        typeof i[2 + l] == "number" && (i[2 + l] /= u),
        typeof i[3 + l] == "number" && (i[3 + l] /= u),
        s(i)
      );
    },
  };
class $v extends j.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (p2(Kv),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($i.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      l = r.projection;
    return (
      l &&
        ((l.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? l.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? l.promote()
            : l.relegate() ||
              F.postRender(() => {
                const a = l.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Za.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xm(e) {
  const [t, n] = Wx(),
    r = j.useContext(Ep);
  return o.jsx($v, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: j.useContext(_p),
    isPresent: t,
    safeToRemove: n,
  });
}
const Kv = {
  borderRadius: {
    ...hr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: hr,
  borderTopRightRadius: hr,
  borderBottomLeftRadius: hr,
  borderBottomRightRadius: hr,
  boxShadow: Hv,
};
function Gv(e, t, n) {
  const r = pe(e) ? e : qr(e);
  return (r.start(jc("", r, t, n)), r.animation);
}
function Yv(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Xv = (e, t) => e.depth - t.depth;
class Zv {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (dc(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (hc(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Xv),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function qv(e, t) {
  const n = ot.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Ot(r), e(s - t));
    };
  return (F.read(r, !0), () => Ot(r));
}
const Zm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Jv = Zm.length,
  Rd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ad = (e) => typeof e == "number" || M.test(e);
function e5(e, t, n, r, i, s) {
  i
    ? ((e.opacity = $(0, n.opacity !== void 0 ? n.opacity : 1, t5(r))),
      (e.opacityExit = $(t.opacity !== void 0 ? t.opacity : 1, 0, n5(r))))
    : s &&
      (e.opacity = $(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let l = 0; l < Jv; l++) {
    const a = `border${Zm[l]}Radius`;
    let c = Dd(t, a),
      u = Dd(n, a);
    if (c === void 0 && u === void 0) continue;
    (c || (c = 0),
      u || (u = 0),
      c === 0 || u === 0 || Ad(c) === Ad(u)
        ? ((e[a] = Math.max($(Rd(c), Rd(u), r), 0)),
          (st.test(u) || st.test(c)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = $(t.rotate || 0, n.rotate || 0, r));
}
function Dd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const t5 = qm(0, 0.5, mm),
  n5 = qm(0.5, 0.95, Le);
function qm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xn(e, t, r)));
}
function Nd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ne(e, t) {
  (Nd(e.x, t.x), Nd(e.y, t.y));
}
function Bd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Id(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Cs(e, 1 / n, r)),
    i !== void 0 && (e = Cs(e, 1 / i, r)),
    e
  );
}
function r5(e, t = 0, n = 1, r = 0.5, i, s = e, l = e) {
  if (
    (st.test(t) &&
      ((t = parseFloat(t)), (t = $(l.min, l.max, t / 100) - l.min)),
    typeof t != "number")
  )
    return;
  let a = $(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = Id(e.min, t, n, a, i)),
    (e.max = Id(e.max, t, n, a, i)));
}
function zd(e, t, [n, r, i], s, l) {
  r5(e, t[n], t[r], t[i], t.scale, s, l);
}
const i5 = ["x", "scaleX", "originX"],
  s5 = ["y", "scaleY", "originY"];
function _d(e, t, n, r) {
  (zd(e.x, t, i5, n ? n.x : void 0, r ? r.x : void 0),
    zd(e.y, t, s5, n ? n.y : void 0, r ? r.y : void 0));
}
function Vd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Jm(e) {
  return Vd(e.x) && Vd(e.y);
}
function Fd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function o5(e, t) {
  return Fd(e.x, t.x) && Fd(e.y, t.y);
}
function Od(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function e0(e, t) {
  return Od(e.x, t.x) && Od(e.y, t.y);
}
function Ud(e) {
  return Re(e.x) / Re(e.y);
}
function Qd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class l5 {
  constructor() {
    this.members = [];
  }
  add(t) {
    (dc(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (hc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function a5(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    l = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || l) && (r = `translate3d(${i}px, ${s}px, ${l}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: h,
      rotateY: f,
      skewX: y,
      skewY: x,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      h && (r += `rotateX(${h}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      x && (r += `skewY(${x}deg) `));
  }
  const a = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none");
}
const en = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  vr = typeof window < "u" && window.MotionDebug !== void 0,
  Ao = ["", "X", "Y", "Z"],
  c5 = { visibility: "hidden" },
  Hd = 1e3;
let u5 = 0;
function Do(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function t0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = am(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", F, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && t0(r);
}
function n0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(l = {}, a = t == null ? void 0 : t()) {
      ((this.id = u5++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            vr &&
              (en.totalNodes =
                en.resolvedTargetDeltas =
                en.recalculatedProjection =
                  0),
            this.nodes.forEach(f5),
            this.nodes.forEach(x5),
            this.nodes.forEach(v5),
            this.nodes.forEach(p5),
            vr && window.MotionDebug.record(en));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Zv());
    }
    addEventListener(l, a) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new fc()),
        this.eventHandlers.get(l).add(a)
      );
    }
    notifyListeners(l, ...a) {
      const c = this.eventHandlers.get(l);
      c && c.notify(...a);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    mount(l, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Yv(l)), (this.instance = l));
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(l, () => {
          ((this.root.updateBlockedByResize = !0),
            h && h(),
            (h = qv(f, 250)),
            $i.hasAnimatedSinceResize &&
              (($i.hasAnimatedSinceResize = !1), this.nodes.forEach(Kd)));
        });
      }
      (c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          d &&
          (c || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || S5,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } =
                  d.getProps(),
                p = !this.targetLayout || !e0(this.targetLayout, x) || y,
                g = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, g));
                const k = { ...lc(v, "layout"), onPlay: w, onComplete: m };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k));
              } else
                (f || Kd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = x;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const l = this.getStack();
      (l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ot(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(k5),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          t0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        ((h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach($d));
        return;
      }
      (this.isUpdating || this.nodes.forEach(g5),
        (this.isUpdating = !1),
        this.nodes.forEach(y5),
        this.nodes.forEach(d5),
        this.nodes.forEach(h5),
        this.clearAllSnapshots());
      const a = ot.now();
      ((le.delta = kt(0, 1e3 / 60, a - le.timestamp)),
        (le.timestamp = a),
        (le.isProcessing = !0),
        So.update.process(le),
        So.preRender.process(le),
        So.render.process(le),
        (le.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Za.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(m5), this.sharedNodes.forEach(w5));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const l = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          l ? l.layoutBox : void 0,
        );
    }
    updateScroll(l = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === l &&
          (a = !1),
        a)
      ) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const l =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Jm(this.projectionDelta),
        c = this.getTransformTemplate(),
        u = c ? c(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      l &&
        (a || Jt(this.latestValues) || d) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(l = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return (
        l && (c = this.removeTransform(c)),
        C5(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var l;
      const { visualElement: a } = this.options;
      if (!a) return q();
      const c = a.measureViewportBox();
      if (
        !(
          ((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) ||
          this.path.some(L5)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Dn(c.x, d.offset.x), Dn(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(l) {
      var a;
      const c = q();
      if (
        (Ne(c, l), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          { scroll: h, options: f } = d;
        d !== this.root &&
          h &&
          f.layoutScroll &&
          (h.wasRoot && Ne(c, l), Dn(c.x, h.offset.x), Dn(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(l, a = !1) {
      const c = q();
      Ne(c, l);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Nn(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Jt(d.latestValues) && Nn(c, d.latestValues));
      }
      return (Jt(this.latestValues) && Nn(c, this.latestValues), c);
    }
    removeTransform(l) {
      const a = q();
      Ne(a, l);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Jt(u.latestValues)) continue;
        Ql(u.latestValues) && u.updateSnapshot();
        const d = q(),
          h = u.measurePageBox();
        (Ne(d, h),
          _d(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d));
      }
      return (Jt(this.latestValues) && _d(a, this.latestValues), a);
    }
    setTargetDelta(l) {
      ((this.targetDelta = l),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var a;
      const c = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== c;
      if (
        !(
          l ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = q()),
              (this.relativeTargetOrigin = q()),
              Rr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox,
              ),
              Ne(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = q()), (this.targetWithTransforms = q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Ev(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ne(this.target, this.layout.layoutBox),
                  Km(this.target, this.targetDelta))
                : Ne(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = q()),
                (this.relativeTargetOrigin = q()),
                Rr(this.relativeTargetOrigin, this.target, y.target),
                Ne(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr && en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ql(this.parent.latestValues) ||
          $m(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var l;
      const a = this.getLead(),
        c = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty)) &&
          (u = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || h))
      )
        return;
      Ne(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      (zv(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = q())));
      const { target: x } = a;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Bd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Bd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== y ||
          !Qd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Qd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        vr && en.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        l)
      ) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = An()),
        (this.projectionDelta = An()),
        (this.projectionDeltaWithTransform = An()));
    }
    setAnimationOrigin(l, a = !1) {
      const c = this.snapshot,
        u = c ? c.latestValues : {},
        d = { ...this.latestValues },
        h = An();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = q(),
        y = c ? c.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        v = y !== x,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(j5));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (k) => {
        const b = k / 1e3;
        (Gd(h.x, l.x, b),
          Gd(h.y, l.y, b),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            b5(this.relativeTarget, this.relativeTargetOrigin, f, b),
            g && o5(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = q()),
            Ne(g, this.relativeTarget)),
          v &&
            ((this.animationValues = d), e5(d, u, this.latestValues, b, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(l) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = F.update(() => {
          (($i.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Gv(0, Hd, {
              ...l,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), l.onUpdate && l.onUpdate(a));
              },
              onComplete: () => {
                (l.onComplete && l.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const l = this.getStack();
      (l && l.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Hd),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let {
        targetWithTransforms: a,
        target: c,
        layout: u,
        latestValues: d,
      } = l;
      if (!(!a || !c || !u)) {
        if (
          this !== l &&
          this.layout &&
          u &&
          r0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          c = this.target || q();
          const h = Re(this.layout.layoutBox.x);
          ((c.x.min = l.target.x.min), (c.x.max = c.x.min + h));
          const f = Re(this.layout.layoutBox.y);
          ((c.y.min = l.target.y.min), (c.y.max = c.y.min + f));
        }
        (Ne(a, c),
          Nn(a, d),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(l, a) {
      (this.sharedNodes.has(l) || this.sharedNodes.set(l, new l5()),
        this.sharedNodes.get(l).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: a } = this.options;
      return a
        ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: a } = this.options;
      return a
        ? (l = this.getStack()) === null || l === void 0
          ? void 0
          : l.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l) return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: a, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      (u && u.promote(this, c),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: l } = this.options;
      if (!l) return;
      let a = !1;
      const { latestValues: c } = l;
      if (
        ((c.z ||
          c.rotate ||
          c.rotateX ||
          c.rotateY ||
          c.rotateZ ||
          c.skewX ||
          c.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      c.z && Do("z", l, u, this.animationValues);
      for (let d = 0; d < Ao.length; d++)
        (Do(`rotate${Ao[d]}`, l, u, this.animationValues),
          Do(`skew${Ao[d]}`, l, u, this.animationValues));
      l.render();
      for (const d in u)
        (l.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]));
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var a, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return c5;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Qi(l == null ? void 0 : l.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Qi(l == null ? void 0 : l.pointerEvents) || "")),
          this.hasProjected &&
            !Jt(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = h.animationValues || h.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = a5(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        d && (u.transform = d(f, u.transform)));
      const { x: y, y: x } = this.projectionDelta;
      ((u.transformOrigin = `${y.origin * 100}% ${x.origin * 100}% 0`),
        h.animationValues
          ? (u.opacity =
              h === this
                ? (c =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              h === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const v in ks) {
        if (f[v] === void 0) continue;
        const { correct: w, applyTo: m } = ks[v],
          p = u.transform === "none" ? f[v] : w(f[v], h);
        if (m) {
          const g = m.length;
          for (let k = 0; k < g; k++) u[m[k]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            h === this
              ? Qi(l == null ? void 0 : l.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((l) => {
        var a;
        return (a = l.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach($d),
        this.root.sharedNodes.clear());
    }
  };
}
function d5(e) {
  e.updateLayout();
}
function h5(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      l = n.source !== e.layout.source;
    s === "size"
      ? Ie((h) => {
          const f = l ? n.measuredBox[h] : n.layoutBox[h],
            y = Re(f);
          ((f.min = r[h].min), (f.max = f.min + y));
        })
      : r0(s, n.layoutBox, r) &&
        Ie((h) => {
          const f = l ? n.measuredBox[h] : n.layoutBox[h],
            y = Re(r[h]);
          ((f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + y)));
        });
    const a = An();
    Mr(a, r, n.layoutBox);
    const c = An();
    l ? Mr(c, e.applyTransform(i, !0), n.measuredBox) : Mr(c, r, n.layoutBox);
    const u = !Jm(a);
    let d = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: y } = h;
        if (f && y) {
          const x = q();
          Rr(x, n.layoutBox, f.layoutBox);
          const v = q();
          (Rr(v, r, y.layoutBox),
            e0(x, v) || (d = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = h)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function f5(e) {
  (vr && en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function p5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function m5(e) {
  e.clearSnapshot();
}
function $d(e) {
  e.clearMeasurements();
}
function g5(e) {
  e.isLayoutDirty = !1;
}
function y5(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Kd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function x5(e) {
  e.resolveTargetDelta();
}
function v5(e) {
  e.calcProjection();
}
function k5(e) {
  e.resetSkewAndRotation();
}
function w5(e) {
  e.removeLeadSnapshot();
}
function Gd(e, t, n) {
  ((e.translate = $(t.translate, 0, n)),
    (e.scale = $(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Yd(e, t, n, r) {
  ((e.min = $(t.min, n.min, r)), (e.max = $(t.max, n.max, r)));
}
function b5(e, t, n, r) {
  (Yd(e.x, t.x, n.x, r), Yd(e.y, t.y, n.y, r));
}
function j5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const S5 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Xd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Zd = Xd("applewebkit/") && !Xd("chrome/") ? Math.round : Le;
function qd(e) {
  ((e.min = Zd(e.min)), (e.max = Zd(e.max)));
}
function C5(e) {
  (qd(e.x), qd(e.y));
}
function r0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Tv(Ud(t), Ud(n), 0.2))
  );
}
function L5(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const P5 = n0({
    attachResizeListener: (e, t) => ei(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  No = { current: void 0 },
  i0 = n0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!No.current) {
        const e = new P5({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (No.current = e));
      }
      return No.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  T5 = {
    pan: { Feature: Qv },
    drag: { Feature: Uv, ProjectionNode: i0, MeasureLayout: Xm },
  };
function Jd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && F.postRender(() => s(t, ci(t)));
}
class E5 extends Kt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = W2(
        t,
        (n) => (Jd(this.node, n, "Start"), (r) => Jd(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class W5 extends Kt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ai(
      ei(this.node.current, "focus", () => this.onFocus()),
      ei(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function eh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && F.postRender(() => s(t, ci(t)));
}
class M5 extends Kt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = D2(
        t,
        (n) => (
          eh(this.node, n, "Start"),
          (r, { success: i }) => eh(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const $l = new WeakMap(),
  Bo = new WeakMap(),
  R5 = (e) => {
    const t = $l.get(e.target);
    t && t(e);
  },
  A5 = (e) => {
    e.forEach(R5);
  };
function D5({ root: e, ...t }) {
  const n = e || document;
  Bo.has(n) || Bo.set(n, {});
  const r = Bo.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(A5, { root: e, ...t })),
    r[i]
  );
}
function N5(e, t, n) {
  const r = D5(t);
  return (
    $l.set(e, n),
    r.observe(e),
    () => {
      ($l.delete(e), r.unobserve(e));
    }
  );
}
const B5 = { some: 0, all: 1 };
class I5 extends Kt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      l = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : B5[i],
      },
      a = (c) => {
        const { isIntersecting: u } = c;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: d, onViewportLeave: h } = this.node.getProps(),
          f = u ? d : h;
        f && f(c);
      };
    return N5(this.node.current, l, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(z5(t, n)) && this.startObserver();
  }
  unmount() {}
}
function z5({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const _5 = {
    inView: { Feature: I5 },
    tap: { Feature: M5 },
    focus: { Feature: W5 },
    hover: { Feature: E5 },
  },
  V5 = { layout: { ProjectionNode: i0, MeasureLayout: Xm } },
  Kl = { current: null },
  s0 = { current: !1 };
function F5() {
  if (((s0.current = !0), !!$a))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Kl.current = e.matches);
      (e.addListener(t), t());
    } else Kl.current = !1;
}
const O5 = [...Em, he, Ut],
  U5 = (e) => O5.find(Tm(e)),
  th = new WeakMap();
function Q5(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (pe(i)) e.addValue(r, i);
    else if (pe(s)) e.addValue(r, qr(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const l = e.getValue(r);
        l.liveStyle === !0 ? l.jump(i) : l.hasAnimated || l.set(i);
      } else {
        const l = e.getStaticValue(r);
        e.addValue(r, qr(l !== void 0 ? l : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const nh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class H5 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: l,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = kc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = ot.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), F.render(this.render, !1, !0));
      }));
    const { latestValues: c, renderState: u, onUpdate: d } = l;
    ((this.onUpdate = d),
      (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ks(n)),
      (this.isVariantNode = Ip(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in f) {
      const x = f[y];
      c[y] !== void 0 && pe(x) && x.set(c[y], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      th.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      s0.current || F5(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Kl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (th.delete(this.current),
      this.projection && this.projection.unmount(),
      Ot(this.notifyUpdate),
      Ot(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = gn.has(t),
      i = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && F.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let l;
    (window.MotionCheckAppearSync &&
      (l = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), l && l(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Zn) {
      const n = Zn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < nh.length; r++) {
      const i = nh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        l = t[s];
      l && (this.propEventSubscriptions[i] = this.on(i, l));
    }
    ((this.prevMotionValues = Q5(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = qr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Lm(i) || ym(i))
          ? (i = parseFloat(i))
          : !U5(i) && Ut.test(n) && (i = jm(t, n)),
        this.setBaseTarget(t, pe(i) ? i.get() : i)),
      pe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const l = Ja(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      l && (i = l[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !pe(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new fc()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class o0 extends H5 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Wm));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function $5(e) {
  return window.getComputedStyle(e);
}
class K5 extends o0 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = $p));
  }
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = vc(n);
      return (r && r.default) || 0;
    } else {
      const r = $5(t),
        i = (Up(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gm(t, n);
  }
  build(t, n, r) {
    nc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return oc(t, n, r);
  }
}
class G5 extends o0 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = vc(n);
      return (r && r.default) || 0;
    }
    return ((n = Kp.has(n) ? n : Xa(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Xp(t, n, r);
  }
  build(t, n, r) {
    rc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Gp(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = sc(t.tagName)), super.mount(t));
  }
}
const Y5 = (e, t) =>
    qa(e) ? new G5(t) : new K5(t, { allowProjection: e !== j.Fragment }),
  X5 = j2({ ...vv, ..._5, ...T5, ...V5 }, Y5),
  l0 = zx(X5);
function Z5(e) {
  e.values.forEach((t) => t.stop());
}
function Gl(e, t) {
  [...t].reverse().forEach((r) => {
    const i = e.getVariant(r);
    (i && pc(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((s) => {
          Gl(s, t);
        }));
  });
}
function q5(e, t) {
  if (Array.isArray(t)) return Gl(e, t);
  if (typeof t == "string") return Gl(e, [t]);
  pc(e, t);
}
function J5() {
  const e = new Set(),
    t = {
      subscribe(n) {
        return (e.add(n), () => void e.delete(n));
      },
      start(n, r) {
        const i = [];
        return (
          e.forEach((s) => {
            i.push(_m(s, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return e.forEach((r) => {
          q5(r, n);
        });
      },
      stop() {
        e.forEach((n) => {
          Z5(n);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function e8() {
  const e = Wp(J5);
  return (Rp(e.mount, []), e);
}
const t8 = e8;
function Be({ children: e, delay: t = 0, className: n = "" }) {
  return o.jsx(l0.div, {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-50px" },
    transition: { duration: 0.6, delay: t, ease: [0.16, 1, 0.3, 1] },
    className: n,
    children: e,
  });
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var n8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r8 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  lt = (e, t) => {
    const n = j.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: l,
          className: a = "",
          children: c,
          ...u
        },
        d,
      ) =>
        j.createElement(
          "svg",
          {
            ref: d,
            ...n8,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: l ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${r8(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([h, f]) => j.createElement(h, f)),
            ...(Array.isArray(c) ? c : [c]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i8 = lt("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s8 = lt("BellRing", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o8 = lt("Cctv", [
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M16.75 12H22l-3.5 7-3.09-4.32", key: "1h9vqe" }],
  [
    "path",
    {
      d: "M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",
      key: "q5d122",
    },
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
  ["path", { d: "M2 21v-4", key: "l40lih" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l8 = lt("Fingerprint", [
  ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a8 = lt("Home", [
  [
    "path",
    { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" },
  ],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c8 = lt("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u8 = lt("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d8 = lt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h8 = lt("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f8 = lt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  p8 = j.lazy(() =>
    Qa(() => import("./Testimonials-BUcbrTka.js"), __vite__mapDeps([0, 1])),
  ),
  m8 = j.lazy(() =>
    Qa(() => import("./PremiumCarousel-DXD6BU8Q.js"), __vite__mapDeps([2, 3])),
  ),
  g8 = j.lazy(() => Qa(() => import("./ParallaxImage-DZ8cgg0g.js"), []));
function y8() {
  const e = j.useRef(null),
    t = j.useRef(!1);
  j.useEffect(() => {
    let r;
    const s = () => {
      if (e.current && !t.current) {
        const l = e.current;
        window.innerWidth <= 768 &&
          ((l.scrollLeft += 0.5),
          l.scrollLeft >= l.scrollWidth / 2 &&
            (l.scrollLeft -= l.scrollWidth / 2));
      }
      r = requestAnimationFrame(s);
    };
    return ((r = requestAnimationFrame(s)), () => cancelAnimationFrame(r));
  }, []);
  const n = [
    {
      title: "Home Automation",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
              fontStyle: "normal",
            },
            children: "Make life easier, one smart upgrade at a time.",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.2rem",
                    },
                    children: "Wireless Automation",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                    },
                    children: "Flexible, Smart & Effortless",
                  }),
                  o.jsx("div", {
                    style: {
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "44",
                      height: "44",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "18",
                          width: "18",
                          height: "28",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "6",
                          y1: "40",
                          x2: "24",
                          y2: "40",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("circle", {
                          cx: "15",
                          cy: "43.5",
                          r: "1.2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("polygon", {
                          points:
                            "32,14 52,30 48,30 48,46 36,46 36,36 44,36 44,30 32,20 20,30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M36 10 Q44 6 52 10",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M38 7 Q44 4 50 7",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "13",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    },
                    children: "Control via App or Panel",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.2rem",
                    },
                    children: "Wired Automation",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                    },
                    children: "Stable, Reliable & Seamless",
                  }),
                  o.jsx("div", {
                    style: {
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "44",
                      height: "44",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("polygon", {
                          points: "32,10 54,28 50,28 50,50 14,50 14,28 10,28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "36",
                          r: "6",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "28",
                          x2: "32",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "42",
                          x2: "32",
                          y2: "44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "24",
                          y1: "36",
                          x2: "26",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "36",
                          x2: "40",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("path", {
                          d: "M20 50 Q20 56 32 56 Q44 56 44 50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "56",
                          x2: "32",
                          y2: "60",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "29",
                          y1: "60",
                          x2: "35",
                          y2: "60",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    },
                    children: "Integrated Wired System",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.2rem",
                    },
                    children: "Presence Sensors",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                    },
                    children: "Adaptive, & Energy Efficient",
                  }),
                  o.jsx("div", {
                    style: {
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "44",
                      height: "44",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M20 28 Q20 16 32 16 Q44 16 44 28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.2)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("ellipse", {
                          cx: "32",
                          cy: "28",
                          rx: "12",
                          ry: "4",
                          fill: "#5b9bc8",
                          opacity: "0.5",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "26",
                          r: "3",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "30",
                          x2: "18",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          opacity: "0.6",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "30",
                          x2: "32",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          opacity: "0.6",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "30",
                          x2: "46",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "44",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "47",
                          x2: "44",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "40",
                          y1: "50",
                          x2: "48",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "54",
                          x2: "41",
                          y2: "60",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "54",
                          x2: "47",
                          y2: "60",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    },
                    children: "Motion & Climate Control",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      img: "/assets/smarthome.jpg",
    },
    {
      title: "Ai-CCTV System",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Smarter  •  Faster  •  Reliable",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
              justifyContent: "center",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "24",
                          width: "32",
                          height: "18",
                          rx: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "24",
                          cy: "33",
                          r: "6",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "24",
                          cy: "33",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("rect", {
                          x: "40",
                          y: "28",
                          width: "16",
                          height: "10",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "24",
                          x2: "20",
                          y2: "18",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "18",
                          x2: "26",
                          y2: "18",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("path", {
                          d: "M52 26 Q58 33 52 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "24/7 Monitoring",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Always watching, no blind spots.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(200,80,80,0.12)",
                      border: "2px solid rgba(200,80,80,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M16 38 Q16 18 32 18 Q48 18 48 38",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          fill: "rgba(200,80,80,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("ellipse", {
                          cx: "32",
                          cy: "38",
                          rx: "16",
                          ry: "5",
                          fill: "#c85050",
                          opacity: "0.4",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "43",
                          x2: "32",
                          y2: "48",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                        }),
                        o.jsx("line", {
                          x1: "27",
                          y1: "48",
                          x2: "37",
                          y2: "48",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "18",
                          x2: "32",
                          y2: "14",
                          stroke: "#c85050",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "14",
                          x2: "17",
                          y2: "10",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "14",
                          x2: "47",
                          y2: "10",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "24",
                          x2: "10",
                          y2: "22",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "24",
                          x2: "54",
                          y2: "22",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Instant Alerts",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Intrusion & unauthorized parking detection.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "44",
                          x2: "32",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "20",
                          x2: "32",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "38",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "26",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "28",
                          x2: "38",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "26",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "38",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "28",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "AI Detection",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Analyzes movements and unusual activity.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("circle", {
                          cx: "22",
                          cy: "26",
                          r: "10",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "19",
                          cy: "24",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "25",
                          cy: "24",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M19 29 Q22 32 25 29",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "34",
                          y: "30",
                          width: "24",
                          height: "12",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M38 30 L42 24 L52 24 L56 30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "40",
                          cy: "42",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "52",
                          cy: "42",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "42",
                          y: "33",
                          width: "8",
                          height: "5",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Recognition",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children:
                      "People counting, vehicle & license plate tracking.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "10",
                          y: "38",
                          width: "10",
                          height: "16",
                          rx: "2",
                          fill: "#5b9bc8",
                          opacity: "0.6",
                        }),
                        o.jsx("rect", {
                          x: "26",
                          y: "28",
                          width: "10",
                          height: "26",
                          rx: "2",
                          fill: "#5b9bc8",
                          opacity: "0.8",
                        }),
                        o.jsx("rect", {
                          x: "42",
                          y: "16",
                          width: "10",
                          height: "38",
                          rx: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "54",
                          x2: "56",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "14",
                          x2: "8",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M15 46 Q31 36 47 24",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeDasharray: "3 2",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Traffic Insights",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Understand visitor flow in real time.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      img: "/assets/ai camera.png",
    },
    {
      title: "Intrusion Alarms",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Security That Thinks for You",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 36 Q52 50 32 58 Q12 50 12 36 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "34",
                          r: "8",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "34",
                          r: "3",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M28 22 Q32 18 36 22",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "AI Threat Detection",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Identifies real threats instantly.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(200,80,80,0.12)",
                      border: "2px solid rgba(200,80,80,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M16 38 Q16 18 32 18 Q48 18 48 38",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          fill: "rgba(200,80,80,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("ellipse", {
                          cx: "32",
                          cy: "38",
                          rx: "16",
                          ry: "5",
                          fill: "#c85050",
                          opacity: "0.4",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "43",
                          x2: "32",
                          y2: "48",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                        }),
                        o.jsx("line", {
                          x1: "27",
                          y1: "48",
                          x2: "37",
                          y2: "48",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "14",
                          x2: "17",
                          y2: "10",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "14",
                          x2: "47",
                          y2: "10",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "24",
                          x2: "10",
                          y2: "22",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "24",
                          x2: "54",
                          y2: "22",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Alerts",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Real-time notifications when danger appears.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "44",
                          x2: "32",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "20",
                          x2: "32",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "38",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "26",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "28",
                          x2: "38",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "26",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "38",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "28",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "50",
                          x2: "28",
                          y2: "56",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "50",
                          x2: "22",
                          y2: "56",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "False Alarm Reduction",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "AI filters harmless movements.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "20",
                          width: "28",
                          height: "20",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "30",
                          r: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "30",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("rect", {
                          x: "34",
                          y: "24",
                          width: "12",
                          height: "8",
                          rx: "1.5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "50",
                          cy: "22",
                          r: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M43 38 Q43 30 50 30 Q57 30 57 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "10",
                          cy: "16",
                          r: "3",
                          fill: "#c85050",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Live Verification (IVaaS)",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "View live footage and respond immediately.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 36 Q52 50 32 58 Q12 50 12 36 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("path", {
                          d: "M36 18 L28 34 L34 34 L28 50 L40 30 L34 30 Z",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Proactive Security",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "A system that thinks before it reacts.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Imagine a security system that not only detects threats but thinks before it reacts, ensuring you get a security system that's always thinking ahead.",
          }),
        ],
      }),
      img: "/assets/intrusion alarm.png",
    },
    {
      title: "Multi-room Audio",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Music That Moves With You",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("polygon", {
                          points: "32,10 54,28 50,28 50,52 14,52 14,28 10,28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M28 42 L28 30 L38 27 L38 39",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "26",
                          cy: "42",
                          r: "3",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "36",
                          cy: "39",
                          r: "3",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M8 32 Q4 36 8 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M56 32 Q60 36 56 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Whole-Home Sound",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Music in every room.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "22",
                          width: "14",
                          height: "20",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "13",
                          cy: "32",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "13",
                          cy: "32",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("rect", {
                          x: "44",
                          y: "22",
                          width: "14",
                          height: "20",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "51",
                          cy: "32",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "51",
                          cy: "32",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M26 28 L26 22 L36 19 L36 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "24",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "34",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Sync or Stream",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Play different or same music.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "20",
                          width: "18",
                          height: "24",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "17",
                          cy: "32",
                          r: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "17",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M34 20 Q44 26 44 32 Q44 38 34 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M38 24 Q46 30 46 32 Q46 34 38 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                        o.jsx("path", {
                          d: "M50 18 L50 12 L58 10 L58 16",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "18",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "56",
                          cy: "16",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Control",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Use your phone to control it all.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "10",
                          y: "12",
                          width: "20",
                          height: "34",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "10",
                          y1: "40",
                          x2: "30",
                          y2: "40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "43",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M17 28 L17 22 L23 20 L23 26",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "15.5",
                          cy: "28",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "21.5",
                          cy: "26",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M34 22 Q40 26 40 32 Q40 38 34 42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M38 18 Q48 24 48 32 Q48 40 38 46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "54",
                          cy: "16",
                          r: "3.5",
                          fill: "#c85050",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Live Verification (IVaaS)",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "View live footage and respond immediately.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M16 32 Q16 16 32 16 Q48 16 48 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "10",
                          y: "30",
                          width: "10",
                          height: "16",
                          rx: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "44",
                          y: "30",
                          width: "10",
                          height: "16",
                          rx: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M28 50 L28 44 L36 41 L36 47",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "26",
                          cy: "50",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "34",
                          cy: "47",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Seamless Listening",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Enjoy music anywhere in your home.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Let your entire home echo with music, vibrant and clear. Experience music like never before, no matter where you are in your home.",
          }),
        ],
      }),
      img: "/assets/multiroomaudiosystem.png",
    },
    {
      title: "Access Control",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Secure  •  Fast  •  Contactless",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M10 20 L10 10 L20 10",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M44 10 L54 10 L54 20",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M10 44 L10 54 L20 54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M44 54 L54 54 L54 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "30",
                          r: "12",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "28",
                          r: "1.8",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "36",
                          cy: "28",
                          r: "1.8",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M27 34 Q32 38 37 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "30",
                          x2: "44",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1",
                          opacity: "0.4",
                          strokeDasharray: "2 2",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Face Recognition",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Touchless and instant authentication.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M22 44 Q12 40 14 30 Q14 22 22 20 Q24 14 32 14 Q40 14 42 20 Q50 22 50 30 Q52 40 42 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "44",
                          x2: "32",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "20",
                          x2: "32",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "38",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "26",
                          y1: "28",
                          x2: "26",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "28",
                          x2: "38",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "26",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "38",
                          cy: "36",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "28",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "AI Identification",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "High-accuracy user recognition.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 10 L50 18 L50 34 Q50 46 32 54 Q14 46 14 34 L14 18 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.08)",
                        }),
                        o.jsx("path", {
                          d: "M32 16 L46 22 L46 34 Q46 44 32 50 Q18 44 18 34 L18 22 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.08)",
                        }),
                        o.jsx("path", {
                          d: "M32 22 L42 26 L42 34 Q42 42 32 46 Q22 42 22 34 L22 26 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("path", {
                          d: "M26 34 L30 38 L38 28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Multi-Layer Security",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "RFID · PIN · Biometric options.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "14",
                          width: "36",
                          height: "42",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "24",
                          y: "10",
                          width: "16",
                          height: "8",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "28",
                          x2: "42",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "36",
                          x2: "42",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "44",
                          x2: "36",
                          y2: "44",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M18 27 L20 29 L24 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        o.jsx("path", {
                          d: "M18 35 L20 37 L24 33",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Entry Logs",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Track every entry and exit.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "16",
                          y: "10",
                          width: "28",
                          height: "46",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M16 10 Q30 14 30 32 Q30 50 16 56",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "38",
                          cy: "33",
                          r: "2.5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "18",
                          r: "8",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("path", {
                          d: "M44 18 L47 21 L52 14",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Versatile Access",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Ideal for offices, homes, and secure areas.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "No more keycards or PIN codes. Fast, reliable, and precise access control that works perfectly in offices, residences, and high-security areas.",
          }),
        ],
      }),
      img: "/assets/access control.png",
    },
    {
      title: "Digital Door Locks",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Security Meets Innovation",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M20 32 Q20 20 32 20 Q44 20 44 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M24 32 Q24 24 32 24 Q40 24 40 32 Q40 38 32 42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M28 32 Q28 28 32 28 Q36 28 36 32 Q36 36 32 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M10 22 L10 14 L18 14",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M46 14 L54 14 L54 22",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M10 42 L10 50 L18 50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M46 50 L54 50 L54 42",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Multiple Unlock",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Fingerprint, RFID, PIN, or Face Lock.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "10",
                          width: "28",
                          height: "40",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "44",
                          x2: "42",
                          y2: "44",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "48",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "28",
                          r: "9",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "25",
                          cy: "26",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "31",
                          cy: "26",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M24 32 Q28 35 32 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "14",
                          r: "2",
                          fill: "#5b9bc8",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "46",
                          cy: "12",
                          r: "4",
                          fill: "#c85050",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Video Doorbell",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Camera and screen — see who's at the door.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "16",
                          y: "30",
                          width: "32",
                          height: "24",
                          rx: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M22 30 L22 22 Q22 14 32 14 Q42 14 42 22 L42 30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "40",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "44",
                          x2: "32",
                          y2: "49",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                        }),
                        o.jsx("path", {
                          d: "M46 10 Q54 16 50 24",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("polyline", {
                          points: "48,24 50,24 50,20",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Auto-Locking",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Auto-locking for peace of mind.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "16",
                          width: "32",
                          height: "36",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "24",
                          y1: "16",
                          x2: "24",
                          y2: "12",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "40",
                          y1: "16",
                          x2: "40",
                          y2: "12",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "18",
                          y: "36",
                          width: "24",
                          height: "12",
                          rx: "2",
                          fill: "#5b9bc8",
                          opacity: "0.3",
                        }),
                        o.jsx("path", {
                          d: "M34 20 L28 34 L32 34 L28 48 L38 30 L34 30 Z",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Battery Backup",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Low battery indicators and emergency power.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("polygon", {
                          points: "32,12 52,28 48,28 48,50 16,50 16,28 12,28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "26",
                          y: "36",
                          width: "12",
                          height: "14",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "35",
                          cy: "43",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M22 18 Q32 12 42 18",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M25 14 Q32 9 39 14",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "20",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart & Connected",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Optional VDP and real-time visitor logs.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Say goodbye to keys and step into the future of home security with AI-powered digital smart locks.",
          }),
        ],
      }),
      img: "/assets/doorlock.jpg",
    },
    {
      title: "Gate Automation",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Secure  •  Convenient  •  Intelligent",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "14",
                          width: "8",
                          height: "40",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "50",
                          y: "14",
                          width: "8",
                          height: "40",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "14",
                          y: "18",
                          width: "16",
                          height: "32",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                          transform: "skewX(-15)",
                        }),
                        o.jsx("rect", {
                          x: "34",
                          y: "18",
                          width: "16",
                          height: "32",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                          transform: "skewX(15)",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "18",
                          x2: "20",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "18",
                          x2: "44",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          opacity: "0.5",
                        }),
                        o.jsx("path", {
                          d: "M28 32 L36 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("polyline", {
                          points: "33,29 36,32 33,35",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Automatic Entry",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Gate opens smoothly as you arrive.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("circle", {
                          cx: "20",
                          cy: "28",
                          r: "9",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "28",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "29",
                          y1: "34",
                          x2: "52",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "44",
                          x2: "44",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "46",
                          x2: "50",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "46",
                          cy: "18",
                          r: "7",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "17",
                          r: "1",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "17",
                          r: "1",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M43 21 Q46 23 49 21",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Multiple Access",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Face · Fingerprint RFID · QR · Password.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "16",
                          y: "10",
                          width: "22",
                          height: "38",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "42",
                          x2: "38",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "27",
                          cy: "46",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M22 28 L22 20 L32 17 L32 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "30",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M40 18 Q48 22 48 28 Q48 34 40 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M44 22 Q50 26 50 28 Q50 30 44 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Remote Control",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "IoT & GSM access from anywhere.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "24",
                          x2: "32",
                          y2: "38",
                          stroke: "#5b9bc8",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "44",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "52",
                          y1: "20",
                          x2: "56",
                          y2: "16",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "54",
                          y1: "24",
                          x2: "58",
                          y2: "24",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "52",
                          y1: "28",
                          x2: "56",
                          y2: "32",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Safety Protection",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Prevents accidents and unauthorized entry.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "12",
                          width: "32",
                          height: "42",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "24",
                          y: "8",
                          width: "12",
                          height: "8",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "20",
                          y: "22",
                          width: "20",
                          height: "10",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "40",
                          y1: "25",
                          x2: "43",
                          y2: "25",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "40",
                          y1: "29",
                          x2: "43",
                          y2: "29",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "21",
                          y: "23",
                          width: "12",
                          height: "8",
                          rx: "1",
                          fill: "#5b9bc8",
                          opacity: "0.4",
                        }),
                        o.jsx("path", {
                          d: "M35 38 L29 48 L33 48 L29 58 L39 44 L35 44 Z",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Power Backup",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Operates even during power outages.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Imagine pulling up to your home and your gate opens automatically— no buttons, no waiting.",
          }),
        ],
      }),
      img: "/assets/gate automation.jpg",
    },
    {
      title: "Video Door Phone",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Instant Verification  •  Enhanced Security",
          }),
          o.jsxs("div", {
            className: "vdp-mobile-swap",
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "18",
                          width: "38",
                          height: "26",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "44",
                          x2: "22",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "42",
                          y1: "44",
                          x2: "42",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "50",
                          x2: "48",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "20",
                          y: "12",
                          width: "14",
                          height: "10",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "27",
                          cy: "17",
                          r: "2.5",
                          fill: "#5b9bc8",
                          opacity: "0.7",
                        }),
                        o.jsx("path", {
                          d: "M48 22 Q54 26 54 31 Q54 36 48 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M52 25 Q57 29 57 31 Q57 33 52 37",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.3",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "14",
                          cy: "23",
                          r: "3",
                          fill: "#c85050",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Live Video",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "See who is at your door anytime.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "24",
                          y: "10",
                          width: "16",
                          height: "26",
                          rx: "8",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M16 32 Q16 46 32 46 Q48 46 48 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "46",
                          x2: "32",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                        }),
                        o.jsx("line", {
                          x1: "24",
                          y1: "54",
                          x2: "40",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "14",
                          r: "6",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "46",
                          cy: "14",
                          r: "1",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "14",
                          r: "1",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "50",
                          cy: "14",
                          r: "1",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Two-Way Communication",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Talk with visitors instantly.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "16",
                          y: "10",
                          width: "22",
                          height: "38",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "42",
                          x2: "38",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "27",
                          cy: "46",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M22 28 L22 20 L32 17 L32 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "30",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M40 18 Q48 22 48 28 Q48 34 40 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M44 22 Q50 26 50 28 Q50 30 44 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Remote Access",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Monitor and control from anywhere.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "14",
                          width: "22",
                          height: "32",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "17",
                          cy: "42",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("rect", {
                          x: "36",
                          y: "18",
                          width: "16",
                          height: "28",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "43",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "30",
                          x2: "36",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "30",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("path", {
                          d: "M30 30 L32 28 L34 30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "17",
                          cy: "24",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M11 36 Q11 30 17 30 Q23 30 23 36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Integration",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children:
                      "Works with intercoms, phones, and security systems.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("circle", {
                          cx: "32",
                          cy: "32",
                          r: "22",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M10 32 Q22 26 32 32 Q42 38 54 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M10 32 Q22 38 32 32 Q42 26 54 32",
                          stroke: "#5b9bc8",
                          strokeWidth: "1",
                          fill: "none",
                          opacity: "0.4",
                        }),
                        o.jsx("path", {
                          d: "M32 10 Q20 22 20 32 Q20 42 32 54",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M32 10 Q44 22 44 32 Q44 42 32 54",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "16",
                          r: "6",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "15",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M44 21 Q44 25 44 26",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "SIP Technology",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Crystal-clear audio video over IP networks.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "See who's at your door from anywhere. With remote access, real-time monitoring, and two-way communication, you can greet visitors, grant access, or secure your premises effortlessly—whether you're at home, in the office, or on the go.",
          }),
        ],
      }),
      img: "/assets/video door phone system.png",
    },
    {
      title: "Networking and Wi-Fi",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Data Network & Server Room Setup",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "6",
                          y: "24",
                          width: "18",
                          height: "16",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "10",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "28",
                          x2: "22",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "36",
                          x2: "22",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("rect", {
                          x: "40",
                          y: "24",
                          width: "18",
                          height: "16",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "28",
                          x2: "56",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "36",
                          x2: "56",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "24",
                          y1: "32",
                          x2: "40",
                          y2: "32",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("polyline", {
                          points: "30,28 34,32 30,36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        o.jsx("path", {
                          d: "M24 16 Q32 10 40 16",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M27 12 Q32 7 37 12",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "18",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "High-Speed Performance",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Ultra-fast network with seamless connectivity.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "24",
                          x2: "32",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "42",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("rect", {
                          x: "26",
                          y: "46",
                          width: "12",
                          height: "8",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M28 46 L28 44 Q28 40 32 40 Q36 40 36 44 L36 46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Advanced Security",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Enterprise-grade protection for your data.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "18",
                          y: "16",
                          width: "20",
                          height: "32",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "18",
                          y1: "42",
                          x2: "38",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "46",
                          r: "1.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M24 32 L24 24 L34 21 L34 29",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "22",
                          cy: "32",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "29",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M40 22 Q48 28 48 32 Q48 36 40 42",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M44 18 Q54 26 54 32 Q54 38 44 46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Scalability",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Easily expand and adapt to growing needs.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M16 38 Q10 38 10 30 Q10 22 18 22 Q18 14 28 14 Q36 14 38 22 Q46 22 46 30 Q46 38 40 38 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "30",
                          r: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "30",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "23",
                          x2: "28",
                          y2: "25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "35",
                          x2: "28",
                          y2: "37",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "21",
                          y1: "30",
                          x2: "23",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "33",
                          y1: "30",
                          x2: "35",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "38",
                          x2: "28",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "46",
                          x2: "36",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "46",
                          x2: "20",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "46",
                          x2: "28",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "36",
                          y1: "46",
                          x2: "36",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Centralized Management",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Cloud-based control and real-time monitoring.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("circle", {
                          cx: "32",
                          cy: "20",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "16",
                          cy: "38",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "38",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "24",
                          cy: "52",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "40",
                          cy: "52",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "24",
                          x2: "16",
                          y2: "34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "24",
                          x2: "48",
                          y2: "34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "16",
                          y1: "42",
                          x2: "24",
                          y2: "48",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "48",
                          y1: "42",
                          x2: "40",
                          y2: "48",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "38",
                          x2: "44",
                          y2: "38",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("path", {
                          d: "M24 14 Q32 8 40 14",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M27 10 Q32 6 37 10",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Reliable Wi-Fi",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children:
                      "Intelligent Wi-Fi 6 mesh system for unbeatable coverage.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "No downtime. No connectivity issues. Our infrastructure is expertly designed to keep your business running at peak efficiency.",
          }),
        ],
      }),
      img: "/assets/networking and wifi.png",
    },
    {
      title: "Curtain Automation",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Smart  •  Convenient  •  Effortless",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("line", {
                          x1: "8",
                          y1: "12",
                          x2: "56",
                          y2: "12",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "8",
                          y: "12",
                          width: "18",
                          height: "38",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "12",
                          x2: "14",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "12",
                          x2: "20",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("rect", {
                          x: "38",
                          y: "12",
                          width: "18",
                          height: "38",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "12",
                          x2: "44",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "12",
                          x2: "50",
                          y2: "50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "38",
                          r: "7",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "38",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "29",
                          x2: "32",
                          y2: "31",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "45",
                          x2: "32",
                          y2: "47",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "23",
                          y1: "38",
                          x2: "25",
                          y2: "38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "39",
                          y1: "38",
                          x2: "41",
                          y2: "38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Motorized Control",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Open and close with a button tap.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "10",
                          width: "22",
                          height: "38",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "42",
                          x2: "36",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "25",
                          cy: "46",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M20 28 L20 20 L30 17 L30 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "18",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M38 18 Q46 24 46 28 Q46 32 38 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M42 22 Q48 26 48 28 Q48 30 42 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Remote Access",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Operate curtains and blinds remotely.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M26 44 L26 24 Q26 20 30 20 Q34 20 34 24 L34 32 Q36 30 38 30 Q41 30 41 34 L41 42 Q41 50 34 52 L26 52 Q20 52 18 46 L18 40 Q18 36 22 36 Q24 36 26 38 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "44",
                          y: "10",
                          width: "12",
                          height: "36",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "48",
                          y1: "10",
                          x2: "48",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "42",
                          y1: "8",
                          x2: "58",
                          y2: "8",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Manual Override",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Easy switch between manual and automated.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "22",
                          x2: "32",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "42",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M38 16 L34 26 L37 26 L33 36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.5",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Safety Features",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Overload protection for secure operation.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("line", {
                          x1: "8",
                          y1: "14",
                          x2: "56",
                          y2: "14",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "16",
                          cy: "14",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "14",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "40",
                          cy: "14",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "52",
                          cy: "14",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M8 17 Q12 30 8 44 Q12 56 16 44 Q20 30 16 17",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("path", {
                          d: "M20 17 Q24 30 20 44 Q24 56 28 44 Q32 30 28 17",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("path", {
                          d: "M36 17 Q40 30 36 44 Q40 56 44 44 Q48 30 44 17",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("path", {
                          d: "M48 17 Q52 30 48 44 Q52 56 56 44 Q60 30 56 17",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Automatic Stroke",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Smooth motion and consistent alignment.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Effortlessly adjust your curtains and blinds with the touch of a button.",
          }),
        ],
      }),
      img: "/assets/curtain and blinds automation.png",
    },
    {
      title: "Shutter Automation",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Secure  •  Efficient  •  Easy to Control",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "10",
                          y: "8",
                          width: "44",
                          height: "8",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("rect", {
                          x: "10",
                          y: "18",
                          width: "44",
                          height: "6",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "10",
                          y: "26",
                          width: "44",
                          height: "6",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "10",
                          y: "34",
                          width: "44",
                          height: "6",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "10",
                          y: "42",
                          width: "44",
                          height: "6",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "52",
                          x2: "56",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "10",
                          y1: "8",
                          x2: "10",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "54",
                          y1: "8",
                          x2: "54",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Operation",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Open or close shutters effortlessly.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "10",
                          width: "22",
                          height: "38",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "42",
                          x2: "36",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "25",
                          cy: "46",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M20 28 L20 20 L30 17 L30 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "18",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M38 18 Q46 24 46 28 Q46 32 38 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M42 22 Q48 26 48 28 Q48 30 42 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Remote Control",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Operate via WiFi, GSM, or key switch.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 L52 16 L52 34 Q52 48 32 56 Q12 48 12 34 L12 16 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "22",
                          x2: "32",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "32",
                          cy: "42",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "46",
                          cy: "46",
                          r: "9",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("circle", {
                          cx: "46",
                          cy: "46",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "46",
                          y1: "37",
                          x2: "46",
                          y2: "41",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "46",
                          y1: "51",
                          x2: "46",
                          y2: "55",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "37",
                          y1: "46",
                          x2: "41",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "51",
                          y1: "46",
                          x2: "55",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Safety Brake",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Prevents sudden shutter drops.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(200,80,80,0.12)",
                      border: "2px solid rgba(200,80,80,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "18",
                          y: "44",
                          width: "28",
                          height: "8",
                          rx: "3",
                          stroke: "#c85050",
                          strokeWidth: "2.2",
                          fill: "rgba(200,80,80,0.2)",
                        }),
                        o.jsx("path", {
                          d: "M16 44 Q16 26 32 26 Q48 26 48 44",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          fill: "rgba(200,80,80,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "22",
                          x2: "32",
                          y2: "16",
                          stroke: "#c85050",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "28",
                          x2: "15",
                          y2: "23",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "28",
                          x2: "49",
                          y2: "23",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "38",
                          x2: "8",
                          y2: "36",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "38",
                          x2: "56",
                          y2: "36",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Security Alerts",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Flash alarm for unauthorized access.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "28",
                          width: "30",
                          height: "20",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "34",
                          x2: "32",
                          y2: "34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "40",
                          x2: "28",
                          y2: "40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "34",
                          cy: "38",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "22",
                          r: "10",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "48",
                          cy: "22",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "48",
                          y1: "10",
                          x2: "48",
                          y2: "14",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "48",
                          y1: "30",
                          x2: "48",
                          y2: "34",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "36",
                          y1: "22",
                          x2: "40",
                          y2: "22",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "56",
                          y1: "22",
                          x2: "60",
                          y2: "22",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "39",
                          y1: "13",
                          x2: "42",
                          y2: "16",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "54",
                          y1: "28",
                          x2: "57",
                          y2: "31",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "32",
                          x2: "38",
                          y2: "28",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Reliable Automation",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Smooth, secure, and stress-free control.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "No more struggling with manual locks or keys. Upgrade your shutters with intelligent automation and control it remotely anytime, anywhere.",
          }),
        ],
      }),
      img: "/assets/smart shutter automation.png",
    },
    {
      title: "Boom Barrier",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Smart  •  Secure  •  Efficient Parking Control",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "10",
                          y: "28",
                          width: "6",
                          height: "22",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("rect", {
                          x: "16",
                          y: "30",
                          width: "36",
                          height: "6",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("line", {
                          x1: "22",
                          y1: "30",
                          x2: "22",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          opacity: "0.6",
                        }),
                        o.jsx("line", {
                          x1: "30",
                          y1: "30",
                          x2: "30",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          opacity: "0.6",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "30",
                          x2: "38",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          opacity: "0.6",
                        }),
                        o.jsx("line", {
                          x1: "6",
                          y1: "52",
                          x2: "58",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "36",
                          y: "40",
                          width: "20",
                          height: "10",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M38 40 L40 34 L52 34 L54 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "40",
                          cy: "51",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "52",
                          cy: "51",
                          r: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Automated Access",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Smooth vehicle entry and exit.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "16",
                          y: "24",
                          width: "32",
                          height: "20",
                          rx: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M20 24 L22 16 L42 16 L44 24",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "20",
                          cy: "46",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("circle", {
                          cx: "44",
                          cy: "46",
                          r: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "52",
                          x2: "56",
                          y2: "52",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "56",
                          x2: "56",
                          y2: "56",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          opacity: "0.5",
                        }),
                        o.jsx("circle", {
                          cx: "12",
                          cy: "32",
                          r: "2.5",
                          fill: "#5b9bc8",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "52",
                          cy: "32",
                          r: "2.5",
                          fill: "#5b9bc8",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Vehicle Detection",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Loop detector for accurate sensing.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(200,80,80,0.12)",
                      border: "2px solid rgba(200,80,80,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "18",
                          y: "44",
                          width: "28",
                          height: "8",
                          rx: "3",
                          stroke: "#c85050",
                          strokeWidth: "2.2",
                          fill: "rgba(200,80,80,0.2)",
                        }),
                        o.jsx("path", {
                          d: "M16 44 Q16 26 32 26 Q48 26 48 44",
                          stroke: "#c85050",
                          strokeWidth: "2.5",
                          fill: "rgba(200,80,80,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "22",
                          x2: "32",
                          y2: "16",
                          stroke: "#c85050",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "28",
                          x2: "15",
                          y2: "23",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "44",
                          y1: "28",
                          x2: "49",
                          y2: "23",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "38",
                          x2: "8",
                          y2: "36",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "38",
                          x2: "56",
                          y2: "36",
                          stroke: "#c85050",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Safety Alerts",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Flash lamps and signals for visibility.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "18",
                          width: "20",
                          height: "32",
                          rx: "4",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "12",
                          y: "24",
                          width: "12",
                          height: "8",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("circle", {
                          cx: "14",
                          cy: "38",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "24",
                          cy: "38",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("line", {
                          x1: "18",
                          y1: "42",
                          x2: "18",
                          y2: "46",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M34 24 Q42 28 42 32 Q42 36 34 40",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M38 20 Q50 26 50 32 Q50 38 38 44",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                        o.jsx("circle", {
                          cx: "56",
                          cy: "32",
                          r: "5",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("circle", {
                          cx: "56",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Multiple Controls",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Key switch, push button, or remote.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "20",
                          width: "22",
                          height: "36",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("rect", {
                          x: "18",
                          y: "30",
                          width: "8",
                          height: "26",
                          rx: "1",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "12",
                          y1: "26",
                          x2: "16",
                          y2: "26",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "12",
                          y1: "32",
                          x2: "16",
                          y2: "32",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("line", {
                          x1: "12",
                          y1: "38",
                          x2: "16",
                          y2: "38",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("rect", {
                          x: "34",
                          y: "12",
                          width: "16",
                          height: "44",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "18",
                          x2: "46",
                          y2: "18",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "24",
                          x2: "46",
                          y2: "24",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("line", {
                          x1: "38",
                          y1: "30",
                          x2: "46",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.2",
                          opacity: "0.5",
                        }),
                        o.jsx("rect", {
                          x: "46",
                          y: "8",
                          width: "14",
                          height: "14",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                        o.jsx("path", {
                          d: "M50 10 L50 20 M50 10 L54 10 Q57 10 57 13 Q57 16 54 16 L50 16",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        o.jsx("line", {
                          x1: "6",
                          y1: "56",
                          x2: "58",
                          y2: "56",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Wide Applications",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Perfect for parking, tolls, and gated areas.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "Ideal for residential complexes, commercial buildings, toll booths, and gated communities.",
          }),
        ],
      }),
      img: "/assets/automatic boom barrier.png",
    },
    {
      title: "Sprinkler Automation",
      desc: o.jsxs(o.Fragment, {
        children: [
          o.jsx("span", {
            style: {
              display: "block",
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
            },
            children: "Smart & Efficient Irrigation",
          }),
          o.jsxs("div", {
            style: {
              display: "flex",
              gap: "0",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            },
            children: [
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "8",
                          y: "14",
                          width: "38",
                          height: "36",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "8",
                          y1: "24",
                          x2: "46",
                          y2: "24",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                        }),
                        o.jsx("line", {
                          x1: "18",
                          y1: "8",
                          x2: "18",
                          y2: "20",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "36",
                          y1: "8",
                          x2: "36",
                          y2: "20",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "18",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "27",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "36",
                          cy: "32",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "18",
                          cy: "40",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "27",
                          cy: "40",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M50 30 Q50 22 54 22 Q58 22 58 30 Q58 36 54 38 Q50 36 50 30 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.2)",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Smart Scheduling",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Automate watering with set timings.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M18 42 Q10 42 10 34 Q10 26 18 26 Q18 18 28 18 Q36 18 38 26 Q46 26 46 34 Q46 42 38 42 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "rgba(91,155,200,0.1)",
                        }),
                        o.jsx("circle", {
                          cx: "50",
                          cy: "18",
                          r: "7",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("line", {
                          x1: "50",
                          y1: "8",
                          x2: "50",
                          y2: "6",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "57",
                          y1: "11",
                          x2: "59",
                          y2: "9",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "60",
                          y1: "18",
                          x2: "62",
                          y2: "18",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "20",
                          y1: "46",
                          x2: "18",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "28",
                          y1: "46",
                          x2: "26",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("line", {
                          x1: "36",
                          y1: "46",
                          x2: "34",
                          y2: "54",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Weather Based",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Adjusts watering based on forecast.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("line", {
                          x1: "32",
                          y1: "56",
                          x2: "32",
                          y2: "30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M32 40 Q20 36 18 24 Q26 20 32 30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M32 34 Q44 30 46 18 Q38 14 32 26",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "rgba(91,155,200,0.15)",
                          strokeLinecap: "round",
                        }),
                        o.jsx("rect", {
                          x: "26",
                          y: "50",
                          width: "12",
                          height: "6",
                          rx: "2",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                        }),
                        o.jsx("path", {
                          d: "M14 52 Q20 46 26 50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M50 52 Q44 46 38 50",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Soil Moisture Sensors",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Optimizes usage, prevents overwatering.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("rect", {
                          x: "14",
                          y: "10",
                          width: "22",
                          height: "38",
                          rx: "3",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "none",
                        }),
                        o.jsx("line", {
                          x1: "14",
                          y1: "42",
                          x2: "36",
                          y2: "42",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("circle", {
                          cx: "25",
                          cy: "46",
                          r: "2",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M20 28 L20 20 L30 17 L30 25",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("circle", {
                          cx: "18",
                          cy: "28",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("circle", {
                          cx: "28",
                          cy: "25",
                          r: "2.5",
                          fill: "#5b9bc8",
                        }),
                        o.jsx("path", {
                          d: "M38 18 Q46 24 46 28 Q46 32 38 38",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                        }),
                        o.jsx("path", {
                          d: "M42 22 Q48 26 48 28 Q48 30 42 34",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                          fill: "none",
                          strokeLinecap: "round",
                          opacity: "0.6",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Remote Control",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Manage your sprinklers via mobile.",
                  }),
                ],
              }),
              o.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 0.5rem",
                },
                children: [
                  o.jsx("div", {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(91,155,200,0.12)",
                      border: "2px solid rgba(91,155,200,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75rem",
                    },
                    children: o.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "38",
                      height: "38",
                      viewBox: "0 0 64 64",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M32 8 Q20 22 20 36 Q20 50 32 52 Q44 50 44 36 Q44 22 32 8 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "2.2",
                          fill: "rgba(91,155,200,0.15)",
                        }),
                        o.jsx("path", {
                          d: "M32 44 Q22 36 26 26 Q30 22 32 26 Q34 22 38 26 Q42 36 32 44 Z",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.8",
                          fill: "rgba(91,155,200,0.3)",
                        }),
                        o.jsx("line", {
                          x1: "32",
                          y1: "44",
                          x2: "32",
                          y2: "36",
                          stroke: "#5b9bc8",
                          strokeWidth: "1.5",
                        }),
                        o.jsx("path", {
                          d: "M26 36 L30 40 L38 30",
                          stroke: "#5b9bc8",
                          strokeWidth: "2",
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  o.jsx("span", {
                    style: {
                      color: "#5b9bc8",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    },
                    children: "Water Conservation",
                  }),
                  o.jsx("span", {
                    style: {
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    },
                    children: "Efficient use for lush, healthy landscapes.",
                  }),
                ],
              }),
            ],
          }),
          o.jsx("span", {
            style: {
              display: "block",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              fontStyle: "italic",
            },
            children:
              "No more over-watering or under-watering. Set watering timings, optimize water usage based on soil moisture and real-time weather, and control everything remotely through your mobile. Keep your landscape lush and healthy year round, all while saving water, time, and effort.",
          }),
        ],
      }),
      img: "/assets/sprinkler automation.png",
    },
  ];
  return o.jsxs("main", {
    className: "home",
    children: [
      o.jsxs("section", {
        id: "home",
        className: "hero",
        children: [
          o.jsxs("div", {
            className: "hero-bg-wrapper",
            children: [
              o.jsx("img", {
                src: "/assets/smarthome.jpg",
                alt: "Luxury Automation",
                className: "hero-bg-img",
              }),
              o.jsx("div", { className: "hero-bg-overlay" }),
            ],
          }),
          o.jsxs("div", {
            className: "container hero-content glass-panel",
            children: [
              o.jsx(Be, {
                delay: 0.2,
                children: o.jsxs("h1", {
                  className: "hero-title",
                  children: [
                    "Welcome to the ",
                    o.jsx("br", {}),
                    o.jsx("span", {
                      className: "text-accent",
                      children: "Automation Expert Team",
                    }),
                  ],
                }),
              }),
              o.jsx(Be, {
                delay: 0.4,
                children: o.jsxs("div", {
                  className: "expert-solution-section",
                  children: [
                    o.jsxs("div", {
                      className: "expert-icons-row",
                      children: [
                        o.jsxs("div", {
                          className: "expert-icon-item",
                          children: [
                            o.jsx("div", {
                              className: "expert-icon-box",
                              children: o.jsx(a8, { size: 20 }),
                            }),
                            o.jsx("span", {
                              className: "expert-icon-label",
                              children: "AUTOMATION",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "expert-icon-item",
                          children: [
                            o.jsx("div", {
                              className: "expert-icon-box",
                              children: o.jsx(o8, { size: 20 }),
                            }),
                            o.jsx("span", {
                              className: "expert-icon-label",
                              children: "AI - CCTV",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "expert-icon-item",
                          children: [
                            o.jsx("div", {
                              className: "expert-icon-box",
                              children: o.jsx(c8, { size: 20 }),
                            }),
                            o.jsx("span", {
                              className: "expert-icon-label",
                              children: "IT SUPPORT",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "expert-icon-item",
                          children: [
                            o.jsx("div", {
                              className: "expert-icon-box",
                              children: o.jsx(s8, { size: 20 }),
                            }),
                            o.jsx("span", {
                              className: "expert-icon-label",
                              children: "ALARM",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "expert-icon-item",
                          children: [
                            o.jsx("div", {
                              className: "expert-icon-box",
                              children: o.jsx(l8, { size: 20 }),
                            }),
                            o.jsx("span", {
                              className: "expert-icon-label",
                              children: "BIOMETRIC",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "expert-banner",
                      children: "THE COMPLETE ELV SOLUTION EXPERT",
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "hero-services-label",
            children: [
              "Our ",
              o.jsx("span", {
                style: { color: "#ff4d4d" },
                children: "services",
              }),
              " -",
            ],
          }),
          o.jsx("div", {
            className: "hero-services-ticker",
            ref: e,
            onTouchStart: () => (t.current = !0),
            onTouchEnd: () => (t.current = !1),
            onMouseEnter: () => (t.current = !0),
            onMouseLeave: () => (t.current = !1),
            children: o.jsx("div", {
              className: "hero-services-track",
              children: [
                { label: "Home Automation", id: "service-home-automation" },
                { label: "Ai-CCTV System", id: "service-ai-cctv" },
                { label: "Intrusion Alarms", id: "service-intrusion-alarms" },
                { label: "Access Control", id: "service-access-control" },
                { label: "Video Door Phone", id: "service-video-door-phone" },
                { label: "Gate Automation", id: "service-gate-automation" },
                { label: "Networking & Wi-Fi", id: "service-networking-wifi" },
                {
                  label: "Curtain Automation",
                  id: "service-curtain-automation",
                },
                {
                  label: "Shutter Automation",
                  id: "service-shutter-automation",
                },
                { label: "Boom Barrier", id: "service-boom-barrier" },
                {
                  label: "Sprinkler Automation",
                  id: "service-sprinkler-automation",
                },
                { label: "Home Automation", id: "service-home-automation" },
                { label: "Ai-CCTV System", id: "service-ai-cctv" },
                { label: "Intrusion Alarms", id: "service-intrusion-alarms" },
                { label: "Access Control", id: "service-access-control" },
                { label: "Video Door Phone", id: "service-video-door-phone" },
                { label: "Gate Automation", id: "service-gate-automation" },
                { label: "Networking & Wi-Fi", id: "service-networking-wifi" },
                {
                  label: "Curtain Automation",
                  id: "service-curtain-automation",
                },
                {
                  label: "Shutter Automation",
                  id: "service-shutter-automation",
                },
                { label: "Boom Barrier", id: "service-boom-barrier" },
                {
                  label: "Sprinkler Automation",
                  id: "service-sprinkler-automation",
                },
              ].map((r, i) =>
                o.jsx(
                  "button",
                  {
                    className: "hero-services-item",
                    onClick: () => {
                      const s = document.getElementById(r.id);
                      s &&
                        s.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    },
                    children: r.label,
                  },
                  i,
                ),
              ),
            }),
          }),
          o.jsx("div", {
            className: "hero-carousel-placement",
            children: o.jsx(j.Suspense, {
              fallback: o.jsx("div", {
                style: { height: "320px", width: "100%" },
              }),
              children: o.jsx(m8, {}),
            }),
          }),
        ],
      }),
      o.jsx("section", {
        id: "about",
        className: "section about-section",
        children: o.jsx("div", {
          className: "container",
          style: { maxWidth: "900px", margin: "0 auto", textAlign: "center" },
          children: o.jsxs(Be, {
            children: [
              o.jsx("h2", {
                className: "title-large mb-8 about-title",
                children: "About Us",
              }),
              o.jsxs("div", {
                className: "about-text-container glass-panel",
                children: [
                  o.jsx("p", {
                    className: "text-body about-text",
                    children:
                      "Rovex brings the future of smart living to your doorstep. Whether upgrading your home or business, our technology puts control at your fingertips. With a focus on reliability and intelligent design, our solutions are designed for safety, comfort and peace of mind.",
                  }),
                  o.jsxs("p", {
                    className: "text-body about-text mt-4",
                    children: [
                      "In an era where technology is constantly redefining everyday life, we ensure people stay ahead—creating spaces that are safer, smarter, and seamlessly connected.",
                      o.jsx("br", {}),
                      o.jsx("br", {}),
                      o.jsx("span", {
                        className: "about-highlight",
                        children:
                          "Because the future isnʼt just coming itʼs here, and weʼre here to help the world embrace it.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      o.jsx("section", {
        className: "section stats-section pb-0 pt-0",
        children: o.jsx("div", {
          className: "container",
          children: o.jsx(Be, {
            delay: 0.2,
            children: o.jsxs("div", {
              className: "stats-grid",
              children: [
                o.jsxs("div", {
                  className: "stat-item",
                  children: [
                    o.jsxs("div", {
                      className: "stat-number",
                      children: [
                        o.jsx("span", {
                          className: "stat-digit",
                          children: "1000",
                        }),
                        o.jsx("span", {
                          className: "stat-plus",
                          children: "+",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "stat-label",
                      children: "Successful projects",
                    }),
                  ],
                }),
                o.jsx("div", { className: "stat-divider" }),
                o.jsxs("div", {
                  className: "stat-item",
                  children: [
                    o.jsxs("div", {
                      className: "stat-number",
                      children: [
                        o.jsx("span", {
                          className: "stat-digit",
                          children: "50",
                        }),
                        o.jsx("span", {
                          className: "stat-plus",
                          children: "+",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "stat-label",
                      children: "Brands",
                    }),
                  ],
                }),
                o.jsx("div", { className: "stat-divider" }),
                o.jsxs("div", {
                  className: "stat-item",
                  children: [
                    o.jsxs("div", {
                      className: "stat-number",
                      children: [
                        o.jsx("span", {
                          className: "stat-digit",
                          children: "15",
                        }),
                        o.jsx("span", {
                          className: "stat-plus red-plus",
                          children: "+",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "stat-label",
                      children: "Years Excellence",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      o.jsx("section", {
        id: "services",
        className: "section services-section grid-bg",
        children: o.jsxs("div", {
          className: "container",
          children: [
            o.jsx(Be, {
              children: o.jsx("h2", {
                className: "title-large mb-8",
                style: {
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  textAlign: "center",
                },
                children: "Services Provided",
              }),
            }),
            o.jsx("div", {
              className: "services-list",
              children: n.map((r, i) => {
                const s = {
                  "Home Automation": "service-home-automation",
                  "Ai-CCTV System": "service-ai-cctv",
                  "Intrusion Alarms": "service-intrusion-alarms",
                  "Access Control": "service-access-control",
                  "Video Door Phone": "service-video-door-phone",
                  "Gate Automation": "service-gate-automation",
                  "Networking and Wi-Fi": "service-networking-wifi",
                  "Curtain Automation": "service-curtain-automation",
                  "Shutter Automation": "service-shutter-automation",
                  "Boom Barrier": "service-boom-barrier",
                  "Sprinkler Automation": "service-sprinkler-automation",
                };
                return o.jsx(
                  "div",
                  {
                    id: s[r.title] || "",
                    children: o.jsxs(Be, {
                      delay: 0.1,
                      className: `service-layer ${i % 2 !== 0 ? "reverse" : ""}`,
                      children: [
                        o.jsxs("div", {
                          className: "service-text",
                          children: [
                            o.jsx("h3", {
                              className: `title-medium text-white ${r.title === "Networking and Wi-Fi" ? "networking-title" : ""}`,
                              children: r.title,
                            }),
                            o.jsx("div", { className: "accent-line" }),
                            o.jsx("p", {
                              className: "text-body max-w-lg mt-4",
                              children: r.desc,
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "service-image-wrap",
                          children: o.jsx(j.Suspense, {
                            fallback: o.jsx("div", {
                              style: {
                                height: "100%",
                                width: "100%",
                                backgroundColor: "#111",
                              },
                            }),
                            children: o.jsx(g8, {
                              src: r.img,
                              alt: r.title,
                              parallaxOffset: 8,
                            }),
                          }),
                        }),
                      ],
                    }),
                  },
                  i,
                );
              }),
            }),
          ],
        }),
      }),
      o.jsxs("section", {
        id: "brands",
        className: "section brands-section",
        children: [
          o.jsx("div", {
            className: "container",
            children: o.jsx(Be, {
              children: o.jsx("h2", {
                className: "title-large mb-8",
                style: {
                  textAlign: "center",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                },
                children: "Brands Provided",
              }),
            }),
          }),
          o.jsx("div", {
            className: "marquee-container mt-6",
            children: o.jsxs("div", {
              className: "marquee-track",
              children: [
                [
                  "abb.png",
                  "ajax.png",
                  "bosch.png",
                  "cisco.png",
                  "dlink.png",
                  "eglu.png",
                  "ezviz.png",
                  "fibaro.png",
                  "fortinet.png",
                  "hikvision.png",
                  "hogar.png",
                  "knx.png",
                  "legrand.png",
                  "netgear.png",
                  "panasonic.png",
                  "samsung.png",
                  "schneiderelectric.png",
                  "somfy.png",
                  "sophos.png",
                  "tenda.png",
                  "tplink.png",
                  "tuya.png",
                  "tyco.png",
                  "yalen.png",
                ].map((r, i) =>
                  o.jsx(
                    "div",
                    {
                      className: "brand-logo-wrap",
                      children: o.jsx("img", {
                        src: `/logo/${r}`,
                        alt: "Brand Logo",
                        loading: "lazy",
                      }),
                    },
                    i,
                  ),
                ),
                [
                  "abb.png",
                  "ajax.png",
                  "bosch.png",
                  "cisco.png",
                  "dlink.png",
                  "eglu.png",
                  "ezviz.png",
                  "fibaro.png",
                  "fortinet.png",
                  "hikvision.png",
                  "hogar.png",
                  "knx.png",
                  "legrand.png",
                  "netgear.png",
                  "panasonic.png",
                  "samsung.png",
                  "schneiderelectric.png",
                  "somfy.png",
                  "sophos.png",
                  "tenda.png",
                  "tplink.png",
                  "tuya.png",
                  "tyco.png",
                  "yalen.png",
                ].map((r, i) =>
                  o.jsx(
                    "div",
                    {
                      className: "brand-logo-wrap",
                      children: o.jsx("img", {
                        src: `/logo/${r}`,
                        alt: "Brand Logo",
                        loading: "lazy",
                      }),
                    },
                    `dup-${i}`,
                  ),
                ),
              ],
            }),
          }),
        ],
      }),
      o.jsx(j.Suspense, {
        fallback: o.jsx("div", { style: { height: "800px", width: "100%" } }),
        children: o.jsx(p8, {}),
      }),
      o.jsxs("section", {
        className: "section bg-soft",
        style: { paddingTop: "5rem", paddingBottom: "10rem" },
        children: [
          o.jsx("div", {
            className: "container",
            children: o.jsx(Be, {
              children: o.jsxs("h2", {
                className: "title-medium mb-6",
                style: { textAlign: "center" },
                children: [
                  "Trusted by ",
                  o.jsx("span", {
                    className: "text-accent",
                    children: "Industry Leaders",
                  }),
                ],
              }),
            }),
          }),
          o.jsx("div", {
            className: "logo-grid mt-6",
            children: [
              "adani.png",
              "ajion.png",
              "aps.jpg",
              "arabiann.jpg",
              "asianet.png",
              "cabriotn.png",
              "cmc.jpg",
              "co-operative.png",
              "emin.png",
              "farook.png",
              "fincare.png",
              "hp.png",
              "icici.png",
              "kaalyn.png",
              "karadan.png",
              "kdch.jpg",
              "kevabox.jpg",
              "ksebn.png",
              "kurikkaln.png",
              "lipin.png",
              "lulu.png",
              "m-dit.png",
              "meraldan.png",
              "minar.png",
              "nayara.png",
              "peekeyn.png",
              "preethi.jpg",
              "rg.png",
              "safi.png",
              "tc-onen.png",
              "tec.png",
              "the raviz.png",
              "theaddress.jpg",
              "xylem.jpg",
              "yashn.png",
              "sbin.png",
            ].map((r, i) =>
              o.jsx(
                "div",
                {
                  className: "brand-logo-wrap leader-card",
                  children: o.jsx("img", {
                    src: `/leaders/${r}`,
                    alt: "Industry Leader",
                    loading: "lazy",
                    style:
                      r === "kurikkaln.png"
                        ? { transform: "scale(1.7)" }
                        : r === "lipin.png"
                          ? { transform: "scale(1.8)" }
                          : r === "yashn.png"
                            ? { transform: "scale(1.9)" }
                            : r === "peekeyn.png"
                              ? { transform: "scale(1.9)" }
                              : r === "preethi.jpg"
                                ? { transform: "scale(1.6)" }
                                : r === "rg.png"
                                  ? { transform: "scale(1.5)" }
                                  : r === "safi.png"
                                    ? { transform: "scale(1.5)" }
                                    : r === "icici.png"
                                      ? { transform: "scale(1.5)" }
                                      : r === "emin.png"
                                        ? { transform: "scale(1.5)" }
                                        : r === "co-operative.png"
                                          ? { transform: "scale(1.5)" }
                                          : r === "farook.png"
                                            ? { transform: "scale(1.5)" }
                                            : r === "fincare.png"
                                              ? { transform: "scale(1.5)" }
                                              : r === "asianet.png"
                                                ? { transform: "scale(1.5)" }
                                                : r === "cabriotn.png"
                                                  ? { transform: "scale(1.5)" }
                                                  : r === "karadan.png"
                                                    ? {
                                                        transform: "scale(1.5)",
                                                      }
                                                    : void 0,
                  }),
                },
                i,
              ),
            ),
          }),
        ],
      }),
      o.jsx("section", {
        id: "contact",
        className: "section contact-page pb-0",
        children: o.jsxs("div", {
          className: "container",
          children: [
            o.jsx(Be, {
              children: o.jsxs("h2", {
                className: "title-large mb-6",
                style: { textAlign: "center" },
                children: [
                  "Get In Touch With ",
                  o.jsx("span", {
                    className: "text-accent",
                    children: "Rovex",
                  }),
                  ".",
                ],
              }),
            }),
            o.jsxs("div", {
              className: "contact-grid mt-6",
              children: [
                o.jsx("div", {
                  className: "contact-info",
                  children: o.jsxs(Be, {
                    children: [
                      o.jsxs("div", {
                        className: "contact-method",
                        children: [
                          o.jsx("h3", {
                            className: "title-medium mb-4",
                            style: { fontSize: "2rem" },
                            children: "Direct Access",
                          }),
                          o.jsx("p", {
                            className: "text-body mb-6",
                            children:
                              "For immediate response regarding new developments or existing infrastructure, connect directly with our engineers via WhatsApp. We ensure rapid, decisive communication.",
                          }),
                          o.jsxs("a", {
                            href: "https://wa.me/919995008007",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "btn-primary",
                            style: {
                              display: "inline-flex",
                              gap: "0.5rem",
                              width: "fit-content",
                            },
                            children: [
                              o.jsx(h8, { size: 20 }),
                              "WhatsApp Business",
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "contact-address mt-4",
                        style: { marginTop: "5rem" },
                        children: [
                          o.jsxs("h4", {
                            style: {
                              fontSize: "1.25rem",
                              fontWeight: 500,
                              marginBottom: "1rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "var(--text-primary)",
                            },
                            children: [
                              o.jsx(u8, { size: 20, className: "text-accent" }),
                              " Headquarters",
                            ],
                          }),
                          o.jsxs("p", {
                            className: "text-body",
                            children: [
                              "Rovex Automation LLP.",
                              o.jsx("br", {}),
                              "61/11564, Second Floor, Fathima Building",
                              o.jsx("br", {}),
                              "S K Pottekkat Road, Puthiyara Rd, Kasaba Village,",
                              o.jsx("br", {}),
                              "Kozhikode, Kerala 673004",
                              o.jsx("br", {}),
                              o.jsx("br", {}),
                              o.jsx("strong", { children: "Phone:" }),
                              " 099950 08007",
                            ],
                          }),
                          o.jsx("p", {
                            className: "text-body",
                            style: { marginTop: "1.5rem" },
                            children: o.jsx("a", {
                              href: "mailto:consulting@rovex.com",
                              style: { textDecoration: "underline" },
                              children: "consulting@rovex.com",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  className: "contact-form-container",
                  children: o.jsx(Be, {
                    delay: 0.2,
                    children: o.jsxs("form", {
                      className: "minimal-form",
                      onSubmit: (r) => r.preventDefault(),
                      children: [
                        o.jsxs("div", {
                          className: "form-group",
                          children: [
                            o.jsx("label", {
                              htmlFor: "name",
                              children: "Complete Name",
                            }),
                            o.jsx("input", {
                              type: "text",
                              id: "name",
                              placeholder: "E.g., Jonathan Architect",
                              required: !0,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "form-group",
                          children: [
                            o.jsx("label", {
                              htmlFor: "email",
                              children: "Email Address",
                            }),
                            o.jsx("input", {
                              type: "email",
                              id: "email",
                              placeholder: "jonathan@firm.com",
                              required: !0,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "form-group",
                          children: [
                            o.jsx("label", {
                              htmlFor: "project",
                              children: "Project Details",
                            }),
                            o.jsx("textarea", {
                              id: "project",
                              rows: 5,
                              placeholder:
                                "Briefly describe your project requirements and timelines...",
                              required: !0,
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          type: "submit",
                          className: "btn-secondary form-submit",
                          children: "Submit Inquiry",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "section map-section grid-bg",
        children: o.jsx("div", {
          className: "container",
          children: o.jsxs(Be, {
            children: [
              o.jsx("h2", {
                className: "title-large mb-6",
                style: {
                  textAlign: "center",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                },
                children: "Map View",
              }),
              o.jsx("div", {
                className: "map-container",
                children: o.jsx("iframe", {
                  src: "https://maps.google.com/maps?q=Rovex%20Automation%20LLP%20%7C%20Home%20Automation%20Company%2C%2061%2F%2011564%20%2C%20Second%20Floor%20%2C%20Fathima%20Building%20S%20K%20Pottekkat%20Road%2C%20Puthiyara%20Rd%2C%20Kasaba%20Village%2C%20Kozhikode%2C%20Kerala%20673004&t=&z=15&ie=UTF8&iwloc=&output=embed",
                  width: "100%",
                  height: "100%",
                  style: { border: 0 },
                  allowFullScreen: !1,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  title: "Rovex HQ",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function x8() {
  const [e, t] = j.useState(!1),
    [n, r] = j.useState({ left: -1e3, right: 0, top: -1e3, bottom: 0 });
  j.useEffect(() => {
    const a = () => {
      r({
        left: -window.innerWidth + 75,
        right: 0,
        top: -window.innerHeight + 140,
        bottom: 0,
      });
    };
    return (
      a(),
      window.addEventListener("resize", a),
      () => window.removeEventListener("resize", a)
    );
  }, []);
  const i = t8(),
    s = (a, c) => {
      const u = c.point.x < window.innerWidth / 2;
      i.start({ x: u ? n.left : 0 });
    },
    l = (a) => {
      t(!1);
      const c = document.getElementById(a);
      c && c.scrollIntoView({ behavior: "smooth" });
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("nav", {
        className: "navbar",
        children: o.jsxs("div", {
          className: "nav-container",
          children: [
            o.jsx("a", {
              href: "#home",
              onClick: (a) => {
                (a.preventDefault(), l("home"));
              },
              className: "nav-logo",
              children: o.jsx("img", {
                src: "/assets/whitelogo.png",
                alt: "Rovex Automation",
                className: "nav-logo-img",
              }),
            }),
            o.jsxs("div", {
              className: `nav-links ${e ? "mobile-open" : ""}`,
              children: [
                o.jsx("a", {
                  href: "#about",
                  onClick: (a) => {
                    (a.preventDefault(), l("about"));
                  },
                  className: "nav-link",
                  children: "About",
                }),
                o.jsx("a", {
                  href: "#services",
                  onClick: (a) => {
                    (a.preventDefault(), l("services"));
                  },
                  className: "nav-link",
                  children: "Services",
                }),
                o.jsx("a", {
                  href: "#brands",
                  onClick: (a) => {
                    (a.preventDefault(), l("brands"));
                  },
                  className: "nav-link",
                  children: "Brands",
                }),
                o.jsx("a", {
                  href: "#contact",
                  onClick: (a) => {
                    (a.preventDefault(), l("contact"));
                  },
                  className: "nav-link",
                  children: "Contact",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "nav-right",
              children: [
                o.jsx("a", {
                  href: "https://wa.me/919995008007",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "nav-whatsapp desktop-whatsapp",
                  "aria-label": "WhatsApp",
                  children: o.jsx("svg", {
                    viewBox: "0 0 24 24",
                    width: "28",
                    height: "28",
                    fill: "#25D366",
                    children: o.jsx("path", {
                      d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
                    }),
                  }),
                }),
                o.jsxs("button", {
                  className: `nav-mobile-btn ${e ? "open" : ""}`,
                  onClick: () => t(!e),
                  "aria-label": "Toggle Menu",
                  children: [
                    o.jsx(d8, { size: 24, className: "icon-menu" }),
                    o.jsx(f8, { size: 24, className: "icon-close" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      o.jsx(l0.a, {
        href: "https://wa.me/919995008007",
        target: "_blank",
        rel: "noreferrer",
        className: "floating-whatsapp",
        "aria-label": "WhatsApp",
        drag: !0,
        dragConstraints: n,
        dragElastic: 0.1,
        dragMomentum: !1,
        animate: i,
        onDragEnd: s,
        whileDrag: { scale: 1.1, cursor: "grabbing" },
        children: o.jsx("div", {
          className: "floating-whatsapp-inner",
          children: o.jsx("svg", {
            viewBox: "0 0 24 24",
            width: "28",
            height: "28",
            fill: "#ffffff",
            children: o.jsx("path", {
              d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z",
            }),
          }),
        }),
      }),
    ],
  });
}
function v8() {
  const e = (t) => {
    const n = document.getElementById(t);
    n && n.scrollIntoView({ behavior: "smooth" });
  };
  return o.jsx("footer", {
    className: "footer",
    children: o.jsxs("div", {
      className: "container",
      children: [
        o.jsxs("div", {
          className: "footer-top",
          children: [
            o.jsxs("div", {
              className: "footer-brand",
              children: [
                o.jsx("img", {
                  src: "/assets/whitelogo.png",
                  alt: "Rovex Automation",
                  className: "footer-logo-img",
                  loading: "lazy",
                }),
                o.jsxs("p", {
                  children: [
                    "Engineering Intelligent Living. ",
                    o.jsx("br", {}),
                    "Designed for modern architecture.",
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "footer-links-grid",
              children: [
                o.jsxs("div", {
                  className: "footer-col",
                  children: [
                    o.jsx("h4", { children: "Navigation" }),
                    o.jsx("a", {
                      href: "#home",
                      onClick: (t) => {
                        (t.preventDefault(), e("home"));
                      },
                      children: "Home",
                    }),
                    o.jsx("a", {
                      href: "#about",
                      onClick: (t) => {
                        (t.preventDefault(), e("about"));
                      },
                      children: "About",
                    }),
                    o.jsx("a", {
                      href: "#services",
                      onClick: (t) => {
                        (t.preventDefault(), e("services"));
                      },
                      children: "Services",
                    }),
                    o.jsx("a", {
                      href: "#contact",
                      onClick: (t) => {
                        (t.preventDefault(), e("contact"));
                      },
                      children: "Contact",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "footer-col",
                  style: { maxWidth: "280px" },
                  children: [
                    o.jsx("h4", { children: "Contact" }),
                    o.jsx("a", {
                      href: "mailto:consulting@rovex.com",
                      children: "consulting@rovex.com",
                    }),
                    o.jsx("a", {
                      href: "tel:+919995008007",
                      children: "099950 08007",
                    }),
                    o.jsxs("a", {
                      href: "https://wa.me/919995008007",
                      target: "_blank",
                      rel: "noreferrer",
                      children: ["WhatsApp ", o.jsx(i8, { size: 14 })],
                    }),
                    o.jsxs("p", {
                      style: {
                        marginTop: "1.5rem",
                        color: "#a0a0a0",
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                      },
                      children: [
                        "61/11564, Second Floor, Fathima Building",
                        o.jsx("br", {}),
                        "S K Pottekkat Road, Puthiyara Rd, Kasaba Village,",
                        o.jsx("br", {}),
                        "Kozhikode, Kerala 673004",
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "footer-col",
                  children: [
                    o.jsx("h4", { children: "Legal" }),
                    o.jsx("a", { href: "#", children: "Privacy Policy" }),
                    o.jsx("a", { href: "#", children: "Terms of Service" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsx("div", {
          className: "footer-bottom",
          children: o.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Rovex Automation Ltd. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
}
function a0(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
class k8 {
  advance(t) {
    var a;
    if (!this.isRunning) return;
    let n = !1;
    if (this.lerp)
      ((this.value =
        ((r = this.value),
        (i = this.to),
        (s = 60 * this.lerp),
        (l = t),
        (function (c, u, d) {
          return (1 - d) * c + d * u;
        })(r, i, 1 - Math.exp(-s * l)))),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (n = !0)));
    else {
      this.currentTime += t;
      const c = a0(0, this.currentTime / this.duration, 1);
      n = c >= 1;
      const u = n ? 1 : this.easing(c);
      this.value = this.from + (this.to - this.from) * u;
    }
    var r, i, s, l;
    ((a = this.onUpdate) == null || a.call(this, this.value, n),
      n && this.stop());
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    n,
    {
      lerp: r = 0.1,
      duration: i = 1,
      easing: s = (c) => c,
      onStart: l,
      onUpdate: a,
    },
  ) {
    ((this.from = this.value = t),
      (this.to = n),
      (this.lerp = r),
      (this.duration = i),
      (this.easing = s),
      (this.currentTime = 0),
      (this.isRunning = !0),
      l == null || l(),
      (this.onUpdate = a));
  }
}
class w8 {
  constructor({
    wrapper: t,
    content: n,
    autoResize: r = !0,
    debounce: i = 250,
  } = {}) {
    at(this, "resize", () => {
      (this.onWrapperResize(), this.onContentResize());
    });
    at(this, "onWrapperResize", () => {
      this.wrapper === window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    });
    at(this, "onContentResize", () => {
      this.wrapper === window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    });
    ((this.wrapper = t),
      (this.content = n),
      r &&
        ((this.debouncedResize = (function (s, l) {
          let a;
          return function () {
            let c = arguments,
              u = this;
            (clearTimeout(a),
              (a = setTimeout(function () {
                s.apply(u, c);
              }, l)));
          };
        })(this.resize, i)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize());
  }
  destroy() {
    var t, n;
    ((t = this.wrapperResizeObserver) == null || t.disconnect(),
      (n = this.contentResizeObserver) == null || n.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1));
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class c0 {
  constructor() {
    this.events = {};
  }
  emit(t, ...n) {
    let r = this.events[t] || [];
    for (let i = 0, s = r.length; i < s; i++) r[i](...n);
  }
  on(t, n) {
    var r;
    return (
      ((r = this.events[t]) != null && r.push(n)) || (this.events[t] = [n]),
      () => {
        var i;
        this.events[t] =
          (i = this.events[t]) == null ? void 0 : i.filter((s) => n !== s);
      }
    );
  }
  off(t, n) {
    var r;
    this.events[t] =
      (r = this.events[t]) == null ? void 0 : r.filter((i) => n !== i);
  }
  destroy() {
    this.events = {};
  }
}
const rh = 100 / 6;
class b8 {
  constructor(t, { wheelMultiplier: n = 1, touchMultiplier: r = 1 }) {
    at(this, "onTouchStart", (t) => {
      const { clientX: n, clientY: r } = t.targetTouches
        ? t.targetTouches[0]
        : t;
      ((this.touchStart.x = n),
        (this.touchStart.y = r),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t }));
    });
    at(this, "onTouchMove", (t) => {
      const { clientX: n, clientY: r } = t.targetTouches
          ? t.targetTouches[0]
          : t,
        i = -(n - this.touchStart.x) * this.touchMultiplier,
        s = -(r - this.touchStart.y) * this.touchMultiplier;
      ((this.touchStart.x = n),
        (this.touchStart.y = r),
        (this.lastDelta = { x: i, y: s }),
        this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: t }));
    });
    at(this, "onTouchEnd", (t) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t,
      });
    });
    at(this, "onWheel", (t) => {
      let { deltaX: n, deltaY: r, deltaMode: i } = t;
      ((n *= i === 1 ? rh : i === 2 ? this.windowWidth : 1),
        (r *= i === 1 ? rh : i === 2 ? this.windowHeight : 1),
        (n *= this.wheelMultiplier),
        (r *= this.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: n, deltaY: r, event: t }));
    });
    at(this, "onWindowResize", () => {
      ((this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight));
    });
    ((this.element = t),
      (this.wheelMultiplier = n),
      (this.touchMultiplier = r),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new c0()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  on(t, n) {
    return this.emitter.on(t, n);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
}
class j8 {
  constructor({
    wrapper: t = window,
    content: n = document.documentElement,
    wheelEventsTarget: r = t,
    eventsTarget: i = r,
    smoothWheel: s = !0,
    syncTouch: l = !1,
    syncTouchLerp: a = 0.075,
    touchInertiaMultiplier: c = 35,
    duration: u,
    easing: d = (g) => Math.min(1, 1.001 - Math.pow(2, -10 * g)),
    lerp: h = !u && 0.1,
    infinite: f = !1,
    orientation: y = "vertical",
    gestureOrientation: x = "vertical",
    touchMultiplier: v = 1,
    wheelMultiplier: w = 1,
    autoResize: m = !0,
    __experimental__naiveDimensions: p = !1,
  } = {}) {
    ((this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: g, deltaY: k, event: b }) => {
        if (b.ctrlKey) return;
        const L = b.type.includes("touch"),
          P = b.type.includes("wheel");
        if (
          this.options.syncTouch &&
          L &&
          b.type === "touchstart" &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const S = g === 0 && k === 0,
          D =
            (this.options.gestureOrientation === "vertical" && k === 0) ||
            (this.options.gestureOrientation === "horizontal" && g === 0);
        if (S || D) return;
        let W = b.composedPath();
        if (
          ((W = W.slice(0, W.indexOf(this.rootElement))),
          W.find((ke) => {
            var yn, bt, Q, T, R;
            return (
              ((yn = ke.hasAttribute) === null || yn === void 0
                ? void 0
                : yn.call(ke, "data-lenis-prevent")) ||
              (L &&
                ((bt = ke.hasAttribute) === null || bt === void 0
                  ? void 0
                  : bt.call(ke, "data-lenis-prevent-touch"))) ||
              (P &&
                ((Q = ke.hasAttribute) === null || Q === void 0
                  ? void 0
                  : Q.call(ke, "data-lenis-prevent-wheel"))) ||
              (((T = ke.classList) === null || T === void 0
                ? void 0
                : T.contains("lenis")) &&
                !(
                  !((R = ke.classList) === null || R === void 0) &&
                  R.contains("lenis-stopped")
                ))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void b.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && L) || (this.options.smoothWheel && P)),
          !this.isSmooth)
        )
          return ((this.isScrolling = !1), void this.animate.stop());
        b.preventDefault();
        let O = k;
        this.options.gestureOrientation === "both"
          ? (O = Math.abs(k) > Math.abs(g) ? k : g)
          : this.options.gestureOrientation === "horizontal" && (O = g);
        const qe = L && this.options.syncTouch,
          Je = L && b.type === "touchend" && Math.abs(O) > 5;
        (Je && (O = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + O,
            Object.assign(
              { programmatic: !1 },
              qe
                ? { lerp: Je ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  },
            ),
          ));
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const g = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - g)),
            this.emit());
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (t !== document.documentElement && t !== document.body) || (t = window),
      (this.options = {
        wrapper: t,
        content: n,
        wheelEventsTarget: r,
        eventsTarget: i,
        smoothWheel: s,
        syncTouch: l,
        syncTouchLerp: a,
        touchInertiaMultiplier: c,
        duration: u,
        easing: d,
        lerp: h,
        infinite: f,
        gestureOrientation: x,
        orientation: y,
        touchMultiplier: v,
        wheelMultiplier: w,
        autoResize: m,
        __experimental__naiveDimensions: p,
      }),
      (this.animate = new k8()),
      (this.emitter = new c0()),
      (this.dimensions = new w8({ wrapper: t, content: n, autoResize: m })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = l || s),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new b8(i, {
        touchMultiplier: v,
        wheelMultiplier: w,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1,
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1));
  }
  on(t, n) {
    return this.emitter.on(t, n);
  }
  off(t, n) {
    return this.emitter.off(t, n);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop());
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const n = t - (this.time || t);
    ((this.time = t), this.animate.advance(0.001 * n));
  }
  scrollTo(
    t,
    {
      offset: n = 0,
      immediate: r = !1,
      lock: i = !1,
      duration: s = this.options.duration,
      easing: l = this.options.easing,
      lerp: a = !s && this.options.lerp,
      onComplete: c,
      force: u = !1,
      programmatic: d = !0,
    } = {},
  ) {
    if ((!this.isStopped && !this.isLocked) || u) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        let h;
        if (
          (typeof t == "string"
            ? (h = document.querySelector(t))
            : t != null && t.nodeType && (h = t),
          h)
        ) {
          if (this.options.wrapper !== window) {
            const y = this.options.wrapper.getBoundingClientRect();
            n -= this.isHorizontal ? y.left : y.top;
          }
          const f = h.getBoundingClientRect();
          t = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (
          ((t += n),
          (t = Math.round(t)),
          this.options.infinite
            ? d && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = a0(0, t, this.limit)),
          r)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            void (c == null || c(this))
          );
        if (!d) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: s,
          easing: l,
          lerp: a,
          onStart: () => {
            (i && (this.isLocked = !0), (this.isScrolling = !0));
          },
          onUpdate: (h, f) => {
            ((this.isScrolling = !0),
              (this.velocity = h - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = h),
              this.setScroll(this.scroll),
              d && (this.targetScroll = h),
              f || this.emit(),
              f &&
                (this.reset(),
                this.emit(),
                c == null || c(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                })));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((t = this.animatedScroll), (n = this.limit), ((t % n) + n) % n)
      : this.animatedScroll;
    var t, n;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t &&
      ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isSmooth && (t += " lenis-smooth"),
      t
    );
  }
  toggleClassName(t, n) {
    (this.rootElement.classList.toggle(t, n),
      this.emitter.emit("className change", this));
  }
}
function S8() {
  return (
    j.useEffect(() => {
      const e = new j8({
        duration: 1.2,
        easing: (n) => 1 - Math.pow(1 - n, 3),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: !0,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });
      function t(n) {
        (e.raf(n), requestAnimationFrame(t));
      }
      return (
        requestAnimationFrame(t),
        () => {
          e.destroy();
        }
      );
    }, []),
    null
  );
}
function C8() {
  const { pathname: e } = Lp();
  return (
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
function L8() {
  return o.jsxs(Px, {
    children: [
      o.jsx(C8, {}),
      o.jsx(S8, {}),
      o.jsx(x8, {}),
      o.jsx(Sx, { children: o.jsx(Tp, { path: "/", element: o.jsx(y8, {}) }) }),
      o.jsx(v8, {}),
    ],
  });
}
Io.createRoot(document.getElementById("root")).render(
  o.jsx(ph.StrictMode, { children: o.jsx(L8, {}) }),
);
export {
  Be as F,
  Mp as M,
  Ot as a,
  E2 as b,
  lt as c,
  O1 as d,
  kt as e,
  F as f,
  le as g,
  Rp as h,
  V1 as i,
  o as j,
  ed as k,
  l0 as l,
  qr as m,
  Le as n,
  Xn as p,
  j as r,
  S2 as s,
  Wp as u,
  lm as v,
  T8 as w,
};
