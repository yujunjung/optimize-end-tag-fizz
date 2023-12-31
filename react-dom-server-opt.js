/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";
var ba = require("util"),
  ca = require("crypto"),
  fa = require("async_hooks"),
  ha = require("react"),
  ia = require("react-dom");
function na(a) {
  "function" === typeof a.flush && a.flush();
}
var k = null,
  m = 0,
  oa = !0;
function u(a, b) {
  if ("string" === typeof b) {
    if (0 !== b.length)
      if (2048 < 3 * b.length)
        0 < m && (ua(a, k.subarray(0, m)), (k = new Uint8Array(2048)), (m = 0)),
          ua(a, va.encode(b));
      else {
        var c = k;
        0 < m && (c = k.subarray(m));
        c = va.encodeInto(b, c);
        var d = c.read;
        m += c.written;
        d < b.length &&
          (ua(a, k.subarray(0, m)),
          (k = new Uint8Array(2048)),
          (m = va.encodeInto(b.slice(d), k).written));
        2048 === m && (ua(a, k), (k = new Uint8Array(2048)), (m = 0));
      }
  } else
    0 !== b.byteLength &&
      (2048 < b.byteLength
        ? (0 < m &&
            (ua(a, k.subarray(0, m)), (k = new Uint8Array(2048)), (m = 0)),
          ua(a, b))
        : ((c = k.length - m),
          c < b.byteLength &&
            (0 === c
              ? ua(a, k)
              : (k.set(b.subarray(0, c), m),
                (m += c),
                ua(a, k),
                (b = b.subarray(c))),
            (k = new Uint8Array(2048)),
            (m = 0)),
          k.set(b, m),
          (m += b.byteLength),
          2048 === m && (ua(a, k), (k = new Uint8Array(2048)), (m = 0))));
}
function ua(a, b) {
  a = a.write(b);
  oa = oa && a;
}
function w(a, b) {
  u(a, b);
  return oa;
}
function wa(a) {
  k && 0 < m && a.write(k.subarray(0, m));
  k = null;
  m = 0;
  oa = !0;
}
var va = new ba.TextEncoder();
function x(a) {
  return va.encode(a);
}
var y = Object.assign,
  z = Object.prototype.hasOwnProperty,
  xa = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  ya = {},
  Ea = {};
function Fa(a) {
  if (z.call(Ea, a)) return !0;
  if (z.call(ya, a)) return !1;
  if (xa.test(a)) return (Ea[a] = !0);
  ya[a] = !0;
  return !1;
}
var Ga = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ),
  Ha = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
  Ia = /["'&<>]/;
function A(a) {
  if ("boolean" === typeof a || "number" === typeof a) return "" + a;
  a = "" + a;
  var b = Ia.exec(a);
  if (b) {
    var c = "",
      d,
      e = 0;
    for (d = b.index; d < a.length; d++) {
      switch (a.charCodeAt(d)) {
        case 34:
          b = "&quot;";
          break;
        case 38:
          b = "&amp;";
          break;
        case 39:
          b = "&#x27;";
          break;
        case 60:
          b = "&lt;";
          break;
        case 62:
          b = "&gt;";
          break;
        default:
          continue;
      }
      e !== d && (c += a.slice(e, d));
      e = d + 1;
      c += b;
    }
    a = e !== d ? c + a.slice(e, d) : c;
  }
  return a;
}
var Ja = /([A-Z])/g,
  Ka = /^ms-/,
  La = Array.isArray,
  Ra = ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sa = { pending: !1, data: null, method: null, action: null },
  Ta = ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,
  ob = {
    prefetchDNS: Ua,
    preconnect: Va,
    preload: Wa,
    preloadModule: Xa,
    preinitStyle: Ya,
    preinitScript: Za,
    preinitModuleScript: nb,
  },
  pb = [],
  qb = x('"></template>'),
  rb = x("<script>"),
  sb = x("\x3c/script>"),
  tb = x('<script src="'),
  ub = x('<script type="module" src="'),
  vb = x('" nonce="'),
  wb = x('" integrity="'),
  xb = x('" crossorigin="'),
  yb = x('" async="">\x3c/script>'),
  zb = /(<\/|<)(s)(cript)/gi;
function Ib(a, b, c, d) {
  return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
}
var Jb = x('<script type="importmap">'),
  Kb = x("\x3c/script>");
function C(a, b, c) {
  return { insertionMode: a, selectedValue: b, tagScope: c };
}
function Lb(a, b, c) {
  switch (b) {
    case "noscript":
      return C(2, null, a.tagScope | 1);
    case "select":
      return C(2, null != c.value ? c.value : c.defaultValue, a.tagScope);
    case "svg":
      return C(3, null, a.tagScope);
    case "picture":
      return C(2, null, a.tagScope | 2);
    case "math":
      return C(4, null, a.tagScope);
    case "foreignObject":
      return C(2, null, a.tagScope);
    case "table":
      return C(5, null, a.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return C(6, null, a.tagScope);
    case "colgroup":
      return C(8, null, a.tagScope);
    case "tr":
      return C(7, null, a.tagScope);
  }
  return 5 <= a.insertionMode
    ? C(2, null, a.tagScope)
    : 0 === a.insertionMode
    ? "html" === b
      ? C(1, null, a.tagScope)
      : C(2, null, a.tagScope)
    : 1 === a.insertionMode
    ? C(2, null, a.tagScope)
    : a;
}
var Mb = x("\x3c!-- --\x3e");
function Nb(a, b, c, d) {
  if ("" === b) return d;
  d && a.push(Mb);
  a.push(A(b));
  return !0;
}
var Ob = new Map(),
  Pb = x(' style="'),
  Qb = x(":"),
  Rb = x(";");
function Sb(a, b) {
  if ("object" !== typeof b)
    throw Error(
      "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
    );
  var c = !0,
    d;
  for (d in b)
    if (z.call(b, d)) {
      var e = b[d];
      if (null != e && "boolean" !== typeof e && "" !== e) {
        if (0 === d.indexOf("--")) {
          var f = A(d);
          e = A(("" + e).trim());
        } else
          (f = Ob.get(d)),
            void 0 === f &&
              ((f = x(
                A(d.replace(Ja, "-$1").toLowerCase().replace(Ka, "-ms-"))
              )),
              Ob.set(d, f)),
            (e =
              "number" === typeof e
                ? 0 === e || Ga.has(d)
                  ? "" + e
                  : e + "px"
                : A(("" + e).trim()));
        c ? ((c = !1), a.push(Pb, f, Qb, e)) : a.push(Rb, f, Qb, e);
      }
    }
  c || a.push(G);
}
var L = x(" "),
  M = x('="'),
  G = x('"'),
  Tb = x('=""');
function Ub(a, b, c) {
  c && "function" !== typeof c && "symbol" !== typeof c && a.push(L, b, Tb);
}
function N(a, b, c) {
  "function" !== typeof c &&
    "symbol" !== typeof c &&
    "boolean" !== typeof c &&
    a.push(L, b, M, A(c), G);
}
function Vb(a) {
  var b = a.nextFormID++;
  return a.idPrefix + b;
}
var Wb = x(
    A("javascript:throw new Error('A React form was unexpectedly submitted.')")
  ),
  Xb = x('<input type="hidden"');
function Yb(a, b) {
  this.push(Xb);
  if ("string" !== typeof a)
    throw Error(
      "File/Blob fields are not yet supported in progressive forms. It probably means you are closing over binary data or FormData in a Server Action."
    );
  N(this, "name", b);
  N(this, "value", a);
  this.push(Zb);
}
function $b(a, b, c, d, e, f, g, h) {
  var l = null;
  "function" === typeof d &&
    ("function" === typeof d.$$FORM_ACTION
      ? ((e = Vb(b)),
        (b = d.$$FORM_ACTION(e)),
        (h = b.name),
        (d = b.action || ""),
        (e = b.encType),
        (f = b.method),
        (g = b.target),
        (l = b.data))
      : (a.push(L, "formAction", M, Wb, G),
        (g = f = e = d = h = null),
        ac(b, c)));
  null != h && O(a, "name", h);
  null != d && O(a, "formAction", d);
  null != e && O(a, "formEncType", e);
  null != f && O(a, "formMethod", f);
  null != g && O(a, "formTarget", g);
  return l;
}
function O(a, b, c) {
  switch (b) {
    case "className":
      N(a, "class", c);
      break;
    case "tabIndex":
      N(a, "tabindex", c);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      N(a, b, c);
      break;
    case "style":
      Sb(a, c);
      break;
    case "src":
    case "href":
    case "action":
    case "formAction":
      if (
        null == c ||
        "function" === typeof c ||
        "symbol" === typeof c ||
        "boolean" === typeof c
      )
        break;
      a.push(L, b, M, A("" + c), G);
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      Ub(a, b.toLowerCase(), c);
      break;
    case "xlinkHref":
      if (
        "function" === typeof c ||
        "symbol" === typeof c ||
        "boolean" === typeof c
      )
        break;
      a.push(L, "xlink:href", M, A("" + c), G);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      "function" !== typeof c &&
        "symbol" !== typeof c &&
        a.push(L, b, M, A(c), G);
      break;
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      c && "function" !== typeof c && "symbol" !== typeof c && a.push(L, b, Tb);
      break;
    case "capture":
    case "download":
      !0 === c
        ? a.push(L, b, Tb)
        : !1 !== c &&
          "function" !== typeof c &&
          "symbol" !== typeof c &&
          a.push(L, b, M, A(c), G);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      "function" !== typeof c &&
        "symbol" !== typeof c &&
        !isNaN(c) &&
        1 <= c &&
        a.push(L, b, M, A(c), G);
      break;
    case "rowSpan":
    case "start":
      "function" === typeof c ||
        "symbol" === typeof c ||
        isNaN(c) ||
        a.push(L, b, M, A(c), G);
      break;
    case "xlinkActuate":
      N(a, "xlink:actuate", c);
      break;
    case "xlinkArcrole":
      N(a, "xlink:arcrole", c);
      break;
    case "xlinkRole":
      N(a, "xlink:role", c);
      break;
    case "xlinkShow":
      N(a, "xlink:show", c);
      break;
    case "xlinkTitle":
      N(a, "xlink:title", c);
      break;
    case "xlinkType":
      N(a, "xlink:type", c);
      break;
    case "xmlBase":
      N(a, "xml:base", c);
      break;
    case "xmlLang":
      N(a, "xml:lang", c);
      break;
    case "xmlSpace":
      N(a, "xml:space", c);
      break;
    default:
      if (
        !(2 < b.length) ||
        ("o" !== b[0] && "O" !== b[0]) ||
        ("n" !== b[1] && "N" !== b[1])
      )
        if (((b = Ha.get(b) || b), Fa(b))) {
          switch (typeof c) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var d = b.toLowerCase().slice(0, 5);
              if ("data-" !== d && "aria-" !== d) return;
          }
          a.push(L, b, M, A(c), G);
        }
  }
}
var Q = x(">"),
  Zb = x("/>");
function bc(a, b, c) {
  if (null != b) {
    if (null != c)
      throw Error(
        "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
      );
    if ("object" !== typeof b || !("__html" in b))
      throw Error(
        "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
      );
    b = b.__html;
    null !== b && void 0 !== b && a.push("" + b);
  }
}
function cc(a) {
  var b = "";
  ha.Children.forEach(a, function (c) {
    null != c && (b += c);
  });
  return b;
}
var dc = x(' selected=""'),
  ec = x(
    'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'A React form was unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.getRootNode(),(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,\nd,b))}});'
  );
function ac(a, b) {
  0 !== (a.instructions & 16) ||
    b.externalRuntimeScript ||
    ((a.instructions |= 16),
    b.bootstrapChunks.unshift(b.startInlineScript, ec, sb));
}
var fc = x("\x3c!--F!--\x3e"),
  gc = x("\x3c!--F--\x3e");
function hc(a, b, c, d, e, f, g) {
  var h = b.rel,
    l = b.href,
    n = b.precedence;
  if (
    3 === f ||
    g ||
    null != b.itemProp ||
    "string" !== typeof h ||
    "string" !== typeof l ||
    "" === l
  )
    return R(a, b), null;
  if ("stylesheet" === b.rel) {
    if ("string" !== typeof n || null != b.disabled || b.onLoad || b.onError)
      return R(a, b);
    f = d.styles.get(n);
    g = c.styleResources.hasOwnProperty(l) ? c.styleResources[l] : void 0;
    null !== g
      ? ((c.styleResources[l] = null),
        f ||
          ((f = { precedence: A(n), rules: [], hrefs: [], sheets: new Map() }),
          d.styles.set(n, f)),
        (b = {
          state: 0,
          props: y({}, b, {
            "data-precedence": b.precedence,
            precedence: null,
          }),
        }),
        g &&
          (2 === g.length && ic(b.props, g),
          (c = d.preloads.stylesheets.get(l)) && 0 < c.length
            ? (c.length = 0)
            : (b.state = 1)),
        f.sheets.set(l, b),
        d.boundaryResources && d.boundaryResources.stylesheets.add(b))
      : f &&
        (l = f.sheets.get(l)) &&
        d.boundaryResources &&
        d.boundaryResources.stylesheets.add(l);
    e && a.push(Mb);
    return null;
  }
  if (b.onLoad || b.onError) return R(a, b);
  e && a.push(Mb);
  switch (b.rel) {
    case "preconnect":
    case "dns-prefetch":
      return R(d.preconnectChunks, b);
    case "preload":
      return R(d.preloadChunks, b);
    default:
      return R(d.hoistableChunks, b);
  }
}
function R(a, b) {
  a.push(T("link"));
  for (var c in b)
    if (z.call(b, c)) {
      var d = b[c];
      if (null != d)
        switch (c) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(
              "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
            );
          default:
            O(a, c, d);
        }
    }
  a.push(Zb);
  return null;
}
function qc(a, b, c) {
  a.push(T(c));
  for (var d in b)
    if (z.call(b, d)) {
      var e = b[d];
      if (null != e)
        switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(
              c +
                " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
            );
          default:
            O(a, d, e);
        }
    }
  a.push(Zb);
  return null;
}
function rc(a, b) {
  a.push(T("title"));
  var c = null,
    d = null,
    e;
  for (e in b)
    if (z.call(b, e)) {
      var f = b[e];
      if (null != f)
        switch (e) {
          case "children":
            c = f;
            break;
          case "dangerouslySetInnerHTML":
            d = f;
            break;
          default:
            O(a, e, f);
        }
    }
  a.push(Q);
  b = Array.isArray(c) ? (2 > c.length ? c[0] : null) : c;
  "function" !== typeof b &&
    "symbol" !== typeof b &&
    null !== b &&
    void 0 !== b &&
    a.push(A("" + b));
  bc(a, d, c);
  a.push(sc("title"));
  return null;
}
function tc(a, b) {
  a.push(T("script"));
  var c = null,
    d = null,
    e;
  for (e in b)
    if (z.call(b, e)) {
      var f = b[e];
      if (null != f)
        switch (e) {
          case "children":
            c = f;
            break;
          case "dangerouslySetInnerHTML":
            d = f;
            break;
          default:
            O(a, e, f);
        }
    }
  a.push(Q);
  bc(a, d, c);
  "string" === typeof c && a.push(A(c));
  a.push(sc("script"));
  return null;
}
function uc(a, b, c) {
  a.push(T(c));
  var d = (c = null),
    e;
  for (e in b)
    if (z.call(b, e)) {
      var f = b[e];
      if (null != f)
        switch (e) {
          case "children":
            c = f;
            break;
          case "dangerouslySetInnerHTML":
            d = f;
            break;
          default:
            O(a, e, f);
        }
    }
  a.push(Q);
  bc(a, d, c);
  return "string" === typeof c ? (a.push(A(c)), null) : c;
}
var vc = x("\n"),
  wc = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  xc = new Map();
function T(a) {
  var b = xc.get(a);
  if (void 0 === b) {
    if (!wc.test(a)) throw Error("Invalid tag: " + a);
    b = x("<" + a);
    xc.set(a, b);
  }
  return b;
}
var yc = x("<!DOCTYPE html>");
function zc(a, b, c, d, e, f, g) {
  switch (b) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      a.push(T("select"));
      var h = null,
        l = null,
        n;
      for (n in c)
        if (z.call(c, n)) {
          var q = c[n];
          if (null != q)
            switch (n) {
              case "children":
                h = q;
                break;
              case "dangerouslySetInnerHTML":
                l = q;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                O(a, n, q);
            }
        }
      a.push(Q);
      bc(a, l, h);
      return h;
    case "option":
      var r = f.selectedValue;
      a.push(T("option"));
      var p = null,
        v = null,
        E = null,
        Y = null,
        t;
      for (t in c)
        if (z.call(c, t)) {
          var B = c[t];
          if (null != B)
            switch (t) {
              case "children":
                p = B;
                break;
              case "selected":
                E = B;
                break;
              case "dangerouslySetInnerHTML":
                Y = B;
                break;
              case "value":
                v = B;
              default:
                O(a, t, B);
            }
        }
      if (null != r) {
        var H = null !== v ? "" + v : cc(p);
        if (La(r))
          for (var ja = 0; ja < r.length; ja++) {
            if ("" + r[ja] === H) {
              a.push(dc);
              break;
            }
          }
        else "" + r === H && a.push(dc);
      } else E && a.push(dc);
      a.push(Q);
      bc(a, Y, p);
      return p;
    case "textarea":
      a.push(T("textarea"));
      var D = null,
        U = null,
        F = null,
        da;
      for (da in c)
        if (z.call(c, da)) {
          var ka = c[da];
          if (null != ka)
            switch (da) {
              case "children":
                F = ka;
                break;
              case "value":
                D = ka;
                break;
              case "defaultValue":
                U = ka;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                O(a, da, ka);
            }
        }
      null === D && null !== U && (D = U);
      a.push(Q);
      if (null != F) {
        if (null != D)
          throw Error(
            "If you supply `defaultValue` on a <textarea>, do not pass children."
          );
        if (La(F)) {
          if (1 < F.length)
            throw Error("<textarea> can only have at most one child.");
          D = "" + F[0];
        }
        D = "" + F;
      }
      "string" === typeof D && "\n" === D[0] && a.push(vc);
      null !== D && a.push(A("" + D));
      return null;
    case "input":
      a.push(T("input"));
      var pa = null,
        S = null,
        Z = null,
        I = null,
        la = null,
        J = null,
        qa = null,
        ra = null,
        Ma = null,
        ea;
      for (ea in c)
        if (z.call(c, ea)) {
          var aa = c[ea];
          if (null != aa)
            switch (ea) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "name":
                pa = aa;
                break;
              case "formAction":
                S = aa;
                break;
              case "formEncType":
                Z = aa;
                break;
              case "formMethod":
                I = aa;
                break;
              case "formTarget":
                la = aa;
                break;
              case "defaultChecked":
                Ma = aa;
                break;
              case "defaultValue":
                qa = aa;
                break;
              case "checked":
                ra = aa;
                break;
              case "value":
                J = aa;
                break;
              default:
                O(a, ea, aa);
            }
        }
      var cd = $b(a, d, e, S, Z, I, la, pa);
      null !== ra ? Ub(a, "checked", ra) : null !== Ma && Ub(a, "checked", Ma);
      null !== J ? O(a, "value", J) : null !== qa && O(a, "value", qa);
      a.push(Zb);
      null !== cd && cd.forEach(Yb, a);
      return null;
    case "button":
      a.push(T("button"));
      var $a = null,
        dd = null,
        ed = null,
        fd = null,
        gd = null,
        hd = null,
        id = null,
        ab;
      for (ab in c)
        if (z.call(c, ab)) {
          var ma = c[ab];
          if (null != ma)
            switch (ab) {
              case "children":
                $a = ma;
                break;
              case "dangerouslySetInnerHTML":
                dd = ma;
                break;
              case "name":
                ed = ma;
                break;
              case "formAction":
                fd = ma;
                break;
              case "formEncType":
                gd = ma;
                break;
              case "formMethod":
                hd = ma;
                break;
              case "formTarget":
                id = ma;
                break;
              default:
                O(a, ab, ma);
            }
        }
      var jd = $b(a, d, e, fd, gd, hd, id, ed);
      a.push(Q);
      null !== jd && jd.forEach(Yb, a);
      bc(a, dd, $a);
      if ("string" === typeof $a) {
        a.push(A($a));
        var kd = null;
      } else kd = $a;
      return kd;
    case "form":
      a.push(T("form"));
      var bb = null,
        ld = null,
        sa = null,
        cb = null,
        db = null,
        eb = null,
        fb;
      for (fb in c)
        if (z.call(c, fb)) {
          var ta = c[fb];
          if (null != ta)
            switch (fb) {
              case "children":
                bb = ta;
                break;
              case "dangerouslySetInnerHTML":
                ld = ta;
                break;
              case "action":
                sa = ta;
                break;
              case "encType":
                cb = ta;
                break;
              case "method":
                db = ta;
                break;
              case "target":
                eb = ta;
                break;
              default:
                O(a, fb, ta);
            }
        }
      var jc = null,
        kc = null;
      if ("function" === typeof sa)
        if ("function" === typeof sa.$$FORM_ACTION) {
          var df = Vb(d),
            Na = sa.$$FORM_ACTION(df);
          sa = Na.action || "";
          cb = Na.encType;
          db = Na.method;
          eb = Na.target;
          jc = Na.data;
          kc = Na.name;
        } else
          a.push(L, "action", M, Wb, G), (eb = db = cb = sa = null), ac(d, e);
      null != sa && O(a, "action", sa);
      null != cb && O(a, "encType", cb);
      null != db && O(a, "method", db);
      null != eb && O(a, "target", eb);
      a.push(Q);
      null !== kc &&
        (a.push(Xb),
        N(a, "name", kc),
        a.push(Zb),
        null !== jc && jc.forEach(Yb, a));
      bc(a, ld, bb);
      if ("string" === typeof bb) {
        a.push(A(bb));
        var md = null;
      } else md = bb;
      return md;
    case "menuitem":
      a.push(T("menuitem"));
      for (var Ab in c)
        if (z.call(c, Ab)) {
          var nd = c[Ab];
          if (null != nd)
            switch (Ab) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                O(a, Ab, nd);
            }
        }
      a.push(Q);
      return null;
    case "title":
      if (3 === f.insertionMode || f.tagScope & 1 || null != c.itemProp)
        var od = rc(a, c);
      else rc(e.hoistableChunks, c), (od = null);
      return od;
    case "link":
      return hc(a, c, d, e, g, f.insertionMode, !!(f.tagScope & 1));
    case "script":
      var lc = c.async;
      if (
        "string" !== typeof c.src ||
        !c.src ||
        !lc ||
        "function" === typeof lc ||
        "symbol" === typeof lc ||
        c.onLoad ||
        c.onError ||
        3 === f.insertionMode ||
        f.tagScope & 1 ||
        null != c.itemProp
      )
        var pd = tc(a, c);
      else {
        var Bb = c.src;
        if ("module" === c.type) {
          var Cb = d.moduleScriptResources;
          var qd = e.preloads.moduleScripts;
        } else (Cb = d.scriptResources), (qd = e.preloads.scripts);
        var Db = Cb.hasOwnProperty(Bb) ? Cb[Bb] : void 0;
        if (null !== Db) {
          Cb[Bb] = null;
          var mc = c;
          if (Db) {
            2 === Db.length && ((mc = y({}, c)), ic(mc, Db));
            var rd = qd.get(Bb);
            rd && (rd.length = 0);
          }
          var sd = [];
          e.scripts.add(sd);
          tc(sd, mc);
        }
        g && a.push(Mb);
        pd = null;
      }
      return pd;
    case "style":
      var Eb = c.precedence,
        za = c.href;
      if (
        3 === f.insertionMode ||
        f.tagScope & 1 ||
        null != c.itemProp ||
        "string" !== typeof Eb ||
        "string" !== typeof za ||
        "" === za
      ) {
        a.push(T("style"));
        var Oa = null,
          td = null,
          gb;
        for (gb in c)
          if (z.call(c, gb)) {
            var Fb = c[gb];
            if (null != Fb)
              switch (gb) {
                case "children":
                  Oa = Fb;
                  break;
                case "dangerouslySetInnerHTML":
                  td = Fb;
                  break;
                default:
                  O(a, gb, Fb);
              }
          }
        a.push(Q);
        var hb = Array.isArray(Oa) ? (2 > Oa.length ? Oa[0] : null) : Oa;
        "function" !== typeof hb &&
          "symbol" !== typeof hb &&
          null !== hb &&
          void 0 !== hb &&
          a.push(A("" + hb));
        bc(a, td, Oa);
        a.push(sc("style"));
        var ud = null;
      } else {
        var Aa = e.styles.get(Eb);
        if (
          null !==
          (d.styleResources.hasOwnProperty(za) ? d.styleResources[za] : void 0)
        ) {
          d.styleResources[za] = null;
          Aa
            ? Aa.hrefs.push(A(za))
            : ((Aa = {
                precedence: A(Eb),
                rules: [],
                hrefs: [A(za)],
                sheets: new Map(),
              }),
              e.styles.set(Eb, Aa));
          var vd = Aa.rules,
            Pa = null,
            wd = null,
            Gb;
          for (Gb in c)
            if (z.call(c, Gb)) {
              var nc = c[Gb];
              if (null != nc)
                switch (Gb) {
                  case "children":
                    Pa = nc;
                    break;
                  case "dangerouslySetInnerHTML":
                    wd = nc;
                }
            }
          var ib = Array.isArray(Pa) ? (2 > Pa.length ? Pa[0] : null) : Pa;
          "function" !== typeof ib &&
            "symbol" !== typeof ib &&
            null !== ib &&
            void 0 !== ib &&
            vd.push(A("" + ib));
          bc(vd, wd, Pa);
        }
        Aa && e.boundaryResources && e.boundaryResources.styles.add(Aa);
        g && a.push(Mb);
        ud = void 0;
      }
      return ud;
    case "meta":
      if (3 === f.insertionMode || f.tagScope & 1 || null != c.itemProp)
        var xd = qc(a, c, "meta");
      else
        g && a.push(Mb),
          (xd =
            "string" === typeof c.charSet
              ? qc(e.charsetChunks, c, "meta")
              : "viewport" === c.name
              ? qc(e.preconnectChunks, c, "meta")
              : qc(e.hoistableChunks, c, "meta"));
      return xd;
    case "listing":
    case "pre":
      a.push(T(b));
      var jb = null,
        kb = null,
        lb;
      for (lb in c)
        if (z.call(c, lb)) {
          var Hb = c[lb];
          if (null != Hb)
            switch (lb) {
              case "children":
                jb = Hb;
                break;
              case "dangerouslySetInnerHTML":
                kb = Hb;
                break;
              default:
                O(a, lb, Hb);
            }
        }
      a.push(Q);
      if (null != kb) {
        if (null != jb)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if ("object" !== typeof kb || !("__html" in kb))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
          );
        var Ba = kb.__html;
        null !== Ba &&
          void 0 !== Ba &&
          ("string" === typeof Ba && 0 < Ba.length && "\n" === Ba[0]
            ? a.push(vc, Ba)
            : a.push("" + Ba));
      }
      "string" === typeof jb && "\n" === jb[0] && a.push(vc);
      return jb;
    case "img":
      var P = c.src,
        K = c.srcSet;
      if (
        !(
          "lazy" === c.loading ||
          (!P && !K) ||
          ("string" !== typeof P && null != P) ||
          ("string" !== typeof K && null != K)
        ) &&
        "low" !== c.fetchPriority &&
        !1 === !!(f.tagScope & 2) &&
        ("string" !== typeof P ||
          ":" !== P[4] ||
          ("d" !== P[0] && "D" !== P[0]) ||
          ("a" !== P[1] && "A" !== P[1]) ||
          ("t" !== P[2] && "T" !== P[2]) ||
          ("a" !== P[3] && "A" !== P[3])) &&
        ("string" !== typeof K ||
          ":" !== K[4] ||
          ("d" !== K[0] && "D" !== K[0]) ||
          ("a" !== K[1] && "A" !== K[1]) ||
          ("t" !== K[2] && "T" !== K[2]) ||
          ("a" !== K[3] && "A" !== K[3]))
      ) {
        var yd = "string" === typeof c.sizes ? c.sizes : void 0,
          mb = K ? K + "\n" + (yd || "") : P,
          oc = e.preloads.images,
          Ca = oc.get(mb);
        if (Ca) {
          if ("high" === c.fetchPriority || 10 > e.highImagePreloads.size)
            oc.delete(mb), e.highImagePreloads.add(Ca);
        } else
          d.imageResources.hasOwnProperty(mb) ||
            ((d.imageResources[mb] = pb),
            (Ca = []),
            R(Ca, {
              rel: "preload",
              as: "image",
              href: K ? void 0 : P,
              imageSrcSet: K,
              imageSizes: yd,
              crossOrigin: c.crossOrigin,
              integrity: c.integrity,
              type: c.type,
              fetchPriority: c.fetchPriority,
              referrerPolicy: c.referrerPolicy,
            }),
            "high" === c.fetchPriority || 10 > e.highImagePreloads.size
              ? e.highImagePreloads.add(Ca)
              : (e.bulkPreloads.add(Ca), oc.set(mb, Ca)));
      }
      return qc(a, c, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return qc(a, c, b);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > f.insertionMode && null === e.headChunks) {
        e.headChunks = [];
        var zd = uc(e.headChunks, c, "head");
      } else zd = uc(a, c, "head");
      return zd;
    case "html":
      if (0 === f.insertionMode && null === e.htmlChunks) {
        e.htmlChunks = [yc];
        var Ad = uc(e.htmlChunks, c, "html");
      } else Ad = uc(a, c, "html");
      return Ad;
    default:
      if (-1 !== b.indexOf("-")) {
        a.push(T(b));
        var pc = null,
          Bd = null,
          Qa;
        for (Qa in c)
          if (z.call(c, Qa)) {
            var Da = c[Qa];
            if (null != Da) {
              var ef = Qa;
              switch (Qa) {
                case "children":
                  pc = Da;
                  break;
                case "dangerouslySetInnerHTML":
                  Bd = Da;
                  break;
                case "style":
                  Sb(a, Da);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  Fa(Qa) &&
                    "function" !== typeof Da &&
                    "symbol" !== typeof Da &&
                    a.push(L, ef, M, A(Da), G);
              }
            }
          }
        a.push(Q);
        bc(a, Bd, pc);
        return pc;
      }
  }
  return uc(a, c, b);
}
var Ac = new Map();
function sc(a) {
  var b = Ac.get(a);
  void 0 === b && ((b = x("</" + a + ">")), Ac.set(a, b));
  return b;
}
function Bc(a, b) {
  b = b.bootstrapChunks;
  for (var c = 0; c < b.length - 1; c++) u(a, b[c]);
  return c < b.length ? ((c = b[c]), (b.length = 0), w(a, c)) : !0;
}
var Cc = x('<template id="'),
  Dc = x('"></template>'),
  Ec = x("\x3c!--$--\x3e"),
  Fc = x('\x3c!--$?--\x3e<template id="'),
  Gc = x('"></template>'),
  Hc = x("\x3c!--$!--\x3e"),
  Ic = x("\x3c!--/$--\x3e"),
  Jc = x("<template"),
  Kc = x('"'),
  Lc = x(' data-dgst="');
x(' data-msg="');
x(' data-stck="');
var Mc = x("></template>");
function Nc(a, b, c) {
  u(a, Fc);
  if (null === c)
    throw Error(
      "An ID must have been assigned before we can complete the boundary."
    );
  u(a, b.boundaryPrefix);
  u(a, c.toString(16));
  return w(a, Gc);
}
var Oc = x('<div hidden id="'),
  Pc = x('">'),
  Qc = x("</div>"),
  Rc = x('<svg aria-hidden="true" style="display:none" id="'),
  Sc = x('">'),
  Tc = x("</svg>"),
  Uc = x('<math aria-hidden="true" style="display:none" id="'),
  Vc = x('">'),
  Wc = x("</math>"),
  Xc = x('<table hidden id="'),
  Yc = x('">'),
  Zc = x("</table>"),
  $c = x('<table hidden><tbody id="'),
  ad = x('">'),
  bd = x("</tbody></table>"),
  Cd = x('<table hidden><tr id="'),
  Dd = x('">'),
  Ed = x("</tr></table>"),
  Fd = x('<table hidden><colgroup id="'),
  Gd = x('">'),
  Hd = x("</colgroup></table>");
function Id(a, b, c, d) {
  switch (c.insertionMode) {
    case 0:
    case 1:
    case 2:
      return u(a, Oc), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Pc);
    case 3:
      return u(a, Rc), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Sc);
    case 4:
      return u(a, Uc), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Vc);
    case 5:
      return u(a, Xc), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Yc);
    case 6:
      return u(a, $c), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, ad);
    case 7:
      return u(a, Cd), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Dd);
    case 8:
      return u(a, Fd), u(a, b.segmentPrefix), u(a, d.toString(16)), w(a, Gd);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
function Jd(a, b) {
  switch (b.insertionMode) {
    case 0:
    case 1:
    case 2:
      return w(a, Qc);
    case 3:
      return w(a, Tc);
    case 4:
      return w(a, Wc);
    case 5:
      return w(a, Zc);
    case 6:
      return w(a, bd);
    case 7:
      return w(a, Ed);
    case 8:
      return w(a, Hd);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
var Kd = x(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ),
  Ld = x('$RS("'),
  Md = x('","'),
  Nd = x('")\x3c/script>'),
  Od = x('<template data-rsi="" data-sid="'),
  Pd = x('" data-pid="'),
  Qd = x(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
  ),
  Rd = x('$RC("'),
  Sd = x(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
  ),
  Td = x(
    '$RM=new Map;\n$RR=function(r,t,w){for(var u=$RC,n=$RM,p=new Map,q=document,g,b,h=q.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&n.set(b.getAttribute("href"),b),p.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var f=w[b++];if(!f){k=!1;b=0;continue}var c=!1,m=0;var d=f[m++];if(a=n.get(d)){var e=a._p;c=!0}else{a=q.createElement("link");a.href=d;a.rel="stylesheet";for(a.dataset.precedence=\nl=f[m++];e=f[m++];)a.setAttribute(e,f[m++]);e=a._p=new Promise(function(x,y){a.onload=x;a.onerror=y});n.set(d,a)}d=a.getAttribute("media");!e||"l"===e.s||d&&!matchMedia(d).matches||h.push(e);if(c)continue}else{a=v[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=p.get(l)||g;c===g&&(g=a);p.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=q.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(u.bind(null,r,t,""),u.bind(null,r,t,"Resource failed to load"))};$RR("'
  ),
  Ud = x('$RR("'),
  Vd = x('","'),
  Wd = x('",'),
  Xd = x('"'),
  Yd = x(")\x3c/script>"),
  Zd = x('<template data-rci="" data-bid="'),
  $d = x('<template data-rri="" data-bid="'),
  ae = x('" data-sid="'),
  be = x('" data-sty="'),
  ce = x(
    '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("'
  ),
  de = x('$RX("'),
  ee = x('"'),
  fe = x(","),
  ge = x(")\x3c/script>"),
  he = x('<template data-rxi="" data-bid="'),
  ie = x('" data-dgst="'),
  je = x('" data-msg="'),
  ke = x('" data-stck="'),
  le = /[<\u2028\u2029]/g;
function me(a) {
  return JSON.stringify(a).replace(le, function (b) {
    switch (b) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  });
}
var ne = /[&><\u2028\u2029]/g;
function oe(a) {
  return JSON.stringify(a).replace(ne, function (b) {
    switch (b) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  });
}
var pe = x('<style media="not all" data-precedence="'),
  qe = x('" data-href="'),
  re = x('">'),
  se = x("</style>"),
  te = !1,
  ue = !0;
function ve(a) {
  var b = a.rules,
    c = a.hrefs,
    d = 0;
  if (c.length) {
    u(this, pe);
    u(this, a.precedence);
    for (u(this, qe); d < c.length - 1; d++) u(this, c[d]), u(this, we);
    u(this, c[d]);
    u(this, re);
    for (d = 0; d < b.length; d++) u(this, b[d]);
    ue = w(this, se);
    te = !0;
    b.length = 0;
    c.length = 0;
  }
}
function xe(a) {
  return 2 !== a.state ? (te = !0) : !1;
}
function ye(a, b, c) {
  te = !1;
  ue = !0;
  b.styles.forEach(ve, a);
  b.stylesheets.forEach(xe);
  te && (c.stylesToHoist = !0);
  return ue;
}
function ze(a) {
  for (var b = 0; b < a.length; b++) u(this, a[b]);
  a.length = 0;
}
var Ae = [];
function Be(a) {
  R(Ae, a.props);
  for (var b = 0; b < Ae.length; b++) u(this, Ae[b]);
  Ae.length = 0;
  a.state = 2;
}
var Ce = x('<style data-precedence="'),
  De = x('" data-href="'),
  we = x(" "),
  Ee = x('">'),
  Fe = x("</style>");
function Ge(a) {
  var b = 0 < a.sheets.size;
  a.sheets.forEach(Be, this);
  a.sheets.clear();
  var c = a.rules,
    d = a.hrefs;
  if (!b || d.length) {
    u(this, Ce);
    u(this, a.precedence);
    a = 0;
    if (d.length) {
      for (u(this, De); a < d.length - 1; a++) u(this, d[a]), u(this, we);
      u(this, d[a]);
    }
    u(this, Ee);
    for (a = 0; a < c.length; a++) u(this, c[a]);
    u(this, Fe);
    c.length = 0;
    d.length = 0;
  }
}
function He(a) {
  if (0 === a.state) {
    a.state = 1;
    var b = a.props;
    R(Ae, {
      rel: "preload",
      as: "style",
      href: a.props.href,
      crossOrigin: b.crossOrigin,
      fetchPriority: b.fetchPriority,
      integrity: b.integrity,
      media: b.media,
      hrefLang: b.hrefLang,
      referrerPolicy: b.referrerPolicy,
    });
    for (a = 0; a < Ae.length; a++) u(this, Ae[a]);
    Ae.length = 0;
  }
}
function Ie(a) {
  a.sheets.forEach(He, this);
  a.sheets.clear();
}
var Je = x("["),
  Ke = x(",["),
  Le = x(","),
  Me = x("]");
function Ne(a, b) {
  u(a, Je);
  var c = Je;
  b.stylesheets.forEach(function (d) {
    if (2 !== d.state)
      if (3 === d.state)
        u(a, c), u(a, oe("" + d.props.href)), u(a, Me), (c = Ke);
      else {
        u(a, c);
        var e = d.props["data-precedence"],
          f = d.props;
        u(a, oe("" + d.props.href));
        e = "" + e;
        u(a, Le);
        u(a, oe(e));
        for (var g in f)
          if (z.call(f, g)) {
            var h = f[g];
            if (null != h)
              switch (g) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  a: {
                    e = a;
                    var l = g.toLowerCase();
                    switch (typeof h) {
                      case "function":
                      case "symbol":
                        break a;
                    }
                    switch (g) {
                      case "innerHTML":
                      case "dangerouslySetInnerHTML":
                      case "suppressContentEditableWarning":
                      case "suppressHydrationWarning":
                      case "style":
                        break a;
                      case "className":
                        l = "class";
                        h = "" + h;
                        break;
                      case "hidden":
                        if (!1 === h) break a;
                        h = "";
                        break;
                      case "src":
                      case "href":
                        h = "" + h;
                        break;
                      default:
                        if (
                          (2 < g.length &&
                            ("o" === g[0] || "O" === g[0]) &&
                            ("n" === g[1] || "N" === g[1])) ||
                          !Fa(g)
                        )
                          break a;
                        h = "" + h;
                    }
                    u(e, Le);
                    u(e, oe(l));
                    u(e, Le);
                    u(e, oe(h));
                  }
              }
          }
        u(a, Me);
        c = Ke;
        d.state = 3;
      }
  });
  u(a, Me);
}
function Oe(a, b) {
  u(a, Je);
  var c = Je;
  b.stylesheets.forEach(function (d) {
    if (2 !== d.state)
      if (3 === d.state)
        u(a, c), u(a, A(JSON.stringify("" + d.props.href))), u(a, Me), (c = Ke);
      else {
        u(a, c);
        var e = d.props["data-precedence"],
          f = d.props;
        u(a, A(JSON.stringify("" + d.props.href)));
        e = "" + e;
        u(a, Le);
        u(a, A(JSON.stringify(e)));
        for (var g in f)
          if (z.call(f, g)) {
            var h = f[g];
            if (null != h)
              switch (g) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  a: {
                    e = a;
                    var l = g.toLowerCase();
                    switch (typeof h) {
                      case "function":
                      case "symbol":
                        break a;
                    }
                    switch (g) {
                      case "innerHTML":
                      case "dangerouslySetInnerHTML":
                      case "suppressContentEditableWarning":
                      case "suppressHydrationWarning":
                      case "style":
                        break a;
                      case "className":
                        l = "class";
                        h = "" + h;
                        break;
                      case "hidden":
                        if (!1 === h) break a;
                        h = "";
                        break;
                      case "src":
                      case "href":
                        h = "" + h;
                        break;
                      default:
                        if (
                          (2 < g.length &&
                            ("o" === g[0] || "O" === g[0]) &&
                            ("n" === g[1] || "N" === g[1])) ||
                          !Fa(g)
                        )
                          break a;
                        h = "" + h;
                    }
                    u(e, Le);
                    u(e, A(JSON.stringify(l)));
                    u(e, Le);
                    u(e, A(JSON.stringify(h)));
                  }
              }
          }
        u(a, Me);
        c = Ke;
        d.state = 3;
      }
  });
  u(a, Me);
}
function Ua(a) {
  var b = Pe();
  if (b) {
    var c = b.resumableState,
      d = b.renderState;
    if ("string" === typeof a && a) {
      if (!c.dnsResources.hasOwnProperty(a)) {
        var e = [];
        c.dnsResources[a] = null;
        R(e, { href: a, rel: "dns-prefetch" });
        d.preconnects.add(e);
      }
      Qe(b);
    }
  }
}
function Va(a, b) {
  var c = Pe();
  if (c) {
    var d = c.resumableState,
      e = c.renderState;
    if ("string" === typeof a && a) {
      d =
        "use-credentials" === b
          ? d.connectResources.credentials
          : "string" === typeof b
          ? d.connectResources.anonymous
          : d.connectResources.default;
      if (!d.hasOwnProperty(a)) {
        var f = [];
        d[a] = null;
        R(f, { rel: "preconnect", href: a, crossOrigin: b });
        e.preconnects.add(f);
      }
      Qe(c);
    }
  }
}
function Wa(a, b, c) {
  var d = Pe();
  if (d) {
    var e = d.resumableState,
      f = d.renderState;
    if (b && a) {
      switch (b) {
        case "image":
          if (c) {
            var g = c.imageSrcSet;
            var h = c.imageSizes;
            var l = c.fetchPriority;
          }
          h = g ? g + "\n" + (h || "") : a;
          if (e.imageResources.hasOwnProperty(h)) return;
          e.imageResources[h] = pb;
          e = [];
          R(e, y({ rel: "preload", href: g ? void 0 : a, as: b }, c));
          "high" === l
            ? f.highImagePreloads.add(e)
            : (f.bulkPreloads.add(e), f.preloads.images.set(h, e));
          break;
        case "style":
          if (e.styleResources.hasOwnProperty(a)) return;
          g = [];
          R(g, y({ rel: "preload", href: a, as: b }, c));
          e.styleResources[a] =
            !c ||
            ("string" !== typeof c.crossOrigin &&
              "string" !== typeof c.integrity)
              ? pb
              : [c.crossOrigin, c.integrity];
          f.preloads.stylesheets.set(a, g);
          f.bulkPreloads.add(g);
          break;
        case "script":
          if (e.scriptResources.hasOwnProperty(a)) return;
          g = [];
          f.preloads.scripts.set(a, g);
          f.bulkPreloads.add(g);
          R(g, y({ rel: "preload", href: a, as: b }, c));
          e.scriptResources[a] =
            !c ||
            ("string" !== typeof c.crossOrigin &&
              "string" !== typeof c.integrity)
              ? pb
              : [c.crossOrigin, c.integrity];
          break;
        default:
          if (e.unknownResources.hasOwnProperty(b)) {
            if (((g = e.unknownResources[b]), g.hasOwnProperty(a))) return;
          } else (g = {}), (e.unknownResources[b] = g);
          e = [];
          c = y({ rel: "preload", href: a, as: b }, c);
          switch (b) {
            case "font":
              f.fontPreloads.add(e);
              break;
            default:
              f.bulkPreloads.add(e);
          }
          R(e, c);
          g[a] = pb;
      }
      Qe(d);
    }
  }
}
function Xa(a, b) {
  var c = Pe();
  if (c) {
    var d = c.resumableState,
      e = c.renderState;
    if (a) {
      var f = b && "string" === typeof b.as ? b.as : "script";
      switch (f) {
        case "script":
          if (d.moduleScriptResources.hasOwnProperty(a)) return;
          f = [];
          d.moduleScriptResources[a] =
            !b ||
            ("string" !== typeof b.crossOrigin &&
              "string" !== typeof b.integrity)
              ? pb
              : [b.crossOrigin, b.integrity];
          e.preloads.moduleScripts.set(a, f);
          break;
        default:
          if (d.moduleUnknownResources.hasOwnProperty(f)) {
            var g = d.unknownResources[f];
            if (g.hasOwnProperty(a)) return;
          } else (g = {}), (d.moduleUnknownResources[f] = g);
          f = [];
          g[a] = pb;
      }
      R(f, y({ rel: "modulepreload", href: a }, b));
      e.bulkPreloads.add(f);
      Qe(c);
    }
  }
}
function Ya(a, b, c) {
  var d = Pe();
  if (d) {
    var e = d.resumableState,
      f = d.renderState;
    if (a) {
      b = b || "default";
      var g = f.styles.get(b),
        h = e.styleResources.hasOwnProperty(a) ? e.styleResources[a] : void 0;
      null !== h &&
        ((e.styleResources[a] = null),
        g ||
          ((g = { precedence: A(b), rules: [], hrefs: [], sheets: new Map() }),
          f.styles.set(b, g)),
        (b = {
          state: 0,
          props: y({ rel: "stylesheet", href: a, "data-precedence": b }, c),
        }),
        h &&
          (2 === h.length && ic(b.props, h),
          (f = f.preloads.stylesheets.get(a)) && 0 < f.length
            ? (f.length = 0)
            : (b.state = 1)),
        g.sheets.set(a, b),
        Qe(d));
    }
  }
}
function Za(a, b) {
  var c = Pe();
  if (c) {
    var d = c.resumableState,
      e = c.renderState;
    if (a) {
      var f = d.scriptResources.hasOwnProperty(a)
        ? d.scriptResources[a]
        : void 0;
      null !== f &&
        ((d.scriptResources[a] = null),
        (b = y({ src: a, async: !0 }, b)),
        f &&
          (2 === f.length && ic(b, f), (a = e.preloads.scripts.get(a))) &&
          (a.length = 0),
        (a = []),
        e.scripts.add(a),
        tc(a, b),
        Qe(c));
    }
  }
}
function nb(a, b) {
  var c = Pe();
  if (c) {
    var d = c.resumableState,
      e = c.renderState;
    if (a) {
      var f = d.moduleScriptResources.hasOwnProperty(a)
        ? d.moduleScriptResources[a]
        : void 0;
      null !== f &&
        ((d.moduleScriptResources[a] = null),
        (b = y({ src: a, type: "module", async: !0 }, b)),
        f &&
          (2 === f.length && ic(b, f), (a = e.preloads.moduleScripts.get(a))) &&
          (a.length = 0),
        (a = []),
        e.scripts.add(a),
        tc(a, b),
        Qe(c));
    }
  }
}
function ic(a, b) {
  null == a.crossOrigin && (a.crossOrigin = b[0]);
  null == a.integrity && (a.integrity = b[1]);
}
function Re(a) {
  this.styles.add(a);
}
function Se(a) {
  this.stylesheets.add(a);
}
var Te = new fa.AsyncLocalStorage(),
  Ue = Symbol.for("react.element"),
  Ve = Symbol.for("react.portal"),
  We = Symbol.for("react.fragment"),
  Xe = Symbol.for("react.strict_mode"),
  Ye = Symbol.for("react.profiler"),
  Ze = Symbol.for("react.provider"),
  $e = Symbol.for("react.context"),
  af = Symbol.for("react.server_context"),
  bf = Symbol.for("react.forward_ref"),
  cf = Symbol.for("react.suspense"),
  ff = Symbol.for("react.suspense_list"),
  gf = Symbol.for("react.memo"),
  hf = Symbol.for("react.lazy"),
  jf = Symbol.for("react.scope"),
  kf = Symbol.for("react.debug_trace_mode"),
  lf = Symbol.for("react.offscreen"),
  mf = Symbol.for("react.legacy_hidden"),
  nf = Symbol.for("react.cache"),
  of = Symbol.for("react.default_value"),
  pf = Symbol.iterator;
function qf(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case We:
      return "Fragment";
    case Ve:
      return "Portal";
    case Ye:
      return "Profiler";
    case Xe:
      return "StrictMode";
    case cf:
      return "Suspense";
    case ff:
      return "SuspenseList";
    case nf:
      return "Cache";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case $e:
        return (a.displayName || "Context") + ".Consumer";
      case Ze:
        return (a._context.displayName || "Context") + ".Provider";
      case bf:
        var b = a.render;
        a = a.displayName;
        a ||
          ((a = b.displayName || b.name || ""),
          (a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef"));
        return a;
      case gf:
        return (
          (b = a.displayName || null), null !== b ? b : qf(a.type) || "Memo"
        );
      case hf:
        b = a._payload;
        a = a._init;
        try {
          return qf(a(b));
        } catch (c) {}
    }
  return null;
}
var rf = {};
function sf(a, b) {
  a = a.contextTypes;
  if (!a) return rf;
  var c = {},
    d;
  for (d in a) c[d] = b[d];
  return c;
}
var tf = null;
function uf(a, b) {
  if (a !== b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    var c = b.parent;
    if (null === a) {
      if (null !== c)
        throw Error(
          "The stacks must reach the root at the same time. This is a bug in React."
        );
    } else {
      if (null === c)
        throw Error(
          "The stacks must reach the root at the same time. This is a bug in React."
        );
      uf(a, c);
    }
    b.context._currentValue = b.value;
  }
}
function vf(a) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  null !== a && vf(a);
}
function wf(a) {
  var b = a.parent;
  null !== b && wf(b);
  a.context._currentValue = a.value;
}
function xf(a, b) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  if (null === a)
    throw Error(
      "The depth must equal at least at zero before reaching the root. This is a bug in React."
    );
  a.depth === b.depth ? uf(a, b) : xf(a, b);
}
function yf(a, b) {
  var c = b.parent;
  if (null === c)
    throw Error(
      "The depth must equal at least at zero before reaching the root. This is a bug in React."
    );
  a.depth === c.depth ? uf(a, c) : yf(a, c);
  b.context._currentValue = b.value;
}
function zf(a) {
  var b = tf;
  b !== a &&
    (null === b
      ? wf(a)
      : null === a
      ? vf(b)
      : b.depth === a.depth
      ? uf(b, a)
      : b.depth > a.depth
      ? xf(b, a)
      : yf(b, a),
    (tf = a));
}
var Af = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (a, b) {
    a = a._reactInternals;
    null !== a.queue && a.queue.push(b);
  },
  enqueueReplaceState: function (a, b) {
    a = a._reactInternals;
    a.replace = !0;
    a.queue = [b];
  },
  enqueueForceUpdate: function () {},
};
function Bf(a, b, c, d) {
  var e = void 0 !== a.state ? a.state : null;
  a.updater = Af;
  a.props = c;
  a.state = e;
  var f = { queue: [], replace: !1 };
  a._reactInternals = f;
  var g = b.contextType;
  a.context = "object" === typeof g && null !== g ? g._currentValue : d;
  g = b.getDerivedStateFromProps;
  "function" === typeof g &&
    ((g = g(c, e)),
    (e = null === g || void 0 === g ? e : y({}, e, g)),
    (a.state = e));
  if (
    "function" !== typeof b.getDerivedStateFromProps &&
    "function" !== typeof a.getSnapshotBeforeUpdate &&
    ("function" === typeof a.UNSAFE_componentWillMount ||
      "function" === typeof a.componentWillMount)
  )
    if (
      ((b = a.state),
      "function" === typeof a.componentWillMount && a.componentWillMount(),
      "function" === typeof a.UNSAFE_componentWillMount &&
        a.UNSAFE_componentWillMount(),
      b !== a.state && Af.enqueueReplaceState(a, a.state, null),
      null !== f.queue && 0 < f.queue.length)
    )
      if (
        ((b = f.queue),
        (g = f.replace),
        (f.queue = null),
        (f.replace = !1),
        g && 1 === b.length)
      )
        a.state = b[0];
      else {
        f = g ? b[0] : a.state;
        e = !0;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, f, c, d) : h;
          null != h && (e ? ((e = !1), (f = y({}, f, h))) : y(f, h));
        }
        a.state = f;
      }
    else f.queue = null;
}
var Cf = { id: 1, overflow: "" };
function Df(a, b, c) {
  var d = a.id;
  a = a.overflow;
  var e = 32 - Ef(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - Ef(b) + e;
  if (30 < f) {
    var g = e - (e % 5);
    f = (d & ((1 << g) - 1)).toString(32);
    d >>= g;
    e -= g;
    return { id: (1 << (32 - Ef(b) + e)) | (c << e) | d, overflow: f + a };
  }
  return { id: (1 << f) | (c << e) | d, overflow: a };
}
var Ef = Math.clz32 ? Math.clz32 : Ff,
  Gf = Math.log,
  Hf = Math.LN2;
function Ff(a) {
  a >>>= 0;
  return 0 === a ? 32 : (31 - ((Gf(a) / Hf) | 0)) | 0;
}
var If = Error(
  "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
);
function Jf() {}
function Kf(a, b, c) {
  c = a[c];
  void 0 === c ? a.push(b) : c !== b && (b.then(Jf, Jf), (b = c));
  switch (b.status) {
    case "fulfilled":
      return b.value;
    case "rejected":
      throw b.reason;
    default:
      if ("string" !== typeof b.status)
        switch (
          ((a = b),
          (a.status = "pending"),
          a.then(
            function (d) {
              if ("pending" === b.status) {
                var e = b;
                e.status = "fulfilled";
                e.value = d;
              }
            },
            function (d) {
              if ("pending" === b.status) {
                var e = b;
                e.status = "rejected";
                e.reason = d;
              }
            }
          ),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
      Lf = b;
      throw If;
  }
}
var Lf = null;
function Mf() {
  if (null === Lf)
    throw Error(
      "Expected a suspended thenable. This is a bug in React. Please file an issue."
    );
  var a = Lf;
  Lf = null;
  return a;
}
function Nf(a, b) {
  return (a === b && (0 !== a || 1 / a === 1 / b)) || (a !== a && b !== b);
}
var Of = "function" === typeof Object.is ? Object.is : Nf,
  Pf = null,
  Qf = null,
  Rf = null,
  Sf = null,
  Tf = null,
  V = null,
  Uf = !1,
  Vf = !1,
  Wf = 0,
  Xf = 0,
  Yf = -1,
  Zf = 0,
  $f = null,
  ag = null,
  bg = 0;
function cg() {
  if (null === Pf)
    throw Error(
      "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
    );
  return Pf;
}
function dg() {
  if (0 < bg)
    throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function eg() {
  null === V
    ? null === Tf
      ? ((Uf = !1), (Tf = V = dg()))
      : ((Uf = !0), (V = Tf))
    : null === V.next
    ? ((Uf = !1), (V = V.next = dg()))
    : ((Uf = !0), (V = V.next));
  return V;
}
function fg(a, b, c, d) {
  for (; Vf; )
    (Vf = !1),
      (Xf = Wf = 0),
      (Yf = -1),
      (Zf = 0),
      (bg += 1),
      (V = null),
      (c = a(b, d));
  gg();
  return c;
}
function hg() {
  var a = $f;
  $f = null;
  return a;
}
function gg() {
  Sf = Rf = Qf = Pf = null;
  Vf = !1;
  Tf = null;
  bg = 0;
  V = ag = null;
}
function ig(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function jg(a, b, c) {
  Pf = cg();
  V = eg();
  if (Uf) {
    var d = V.queue;
    b = d.dispatch;
    if (null !== ag && ((c = ag.get(d)), void 0 !== c)) {
      ag.delete(d);
      d = V.memoizedState;
      do (d = a(d, c.action)), (c = c.next);
      while (null !== c);
      V.memoizedState = d;
      return [d, b];
    }
    return [V.memoizedState, b];
  }
  a = a === ig ? ("function" === typeof b ? b() : b) : void 0 !== c ? c(b) : b;
  V.memoizedState = a;
  a = V.queue = { last: null, dispatch: null };
  a = a.dispatch = kg.bind(null, Pf, a);
  return [V.memoizedState, a];
}
function lg(a, b) {
  Pf = cg();
  V = eg();
  b = void 0 === b ? null : b;
  if (null !== V) {
    var c = V.memoizedState;
    if (null !== c && null !== b) {
      var d = c[1];
      a: if (null === d) d = !1;
      else {
        for (var e = 0; e < d.length && e < b.length; e++)
          if (!Of(b[e], d[e])) {
            d = !1;
            break a;
          }
        d = !0;
      }
      if (d) return c[0];
    }
  }
  a = a();
  V.memoizedState = [a, b];
  return a;
}
function kg(a, b, c) {
  if (25 <= bg)
    throw Error(
      "Too many re-renders. React limits the number of renders to prevent an infinite loop."
    );
  if (a === Pf)
    if (
      ((Vf = !0),
      (a = { action: c, next: null }),
      null === ag && (ag = new Map()),
      (c = ag.get(b)),
      void 0 === c)
    )
      ag.set(b, a);
    else {
      for (b = c; null !== b.next; ) b = b.next;
      b.next = a;
    }
}
function mg() {
  throw Error("startTransition cannot be called during server rendering.");
}
function ng() {
  throw Error("Cannot update optimistic state while rendering.");
}
function og(a, b, c) {
  if (void 0 !== a) return "p" + a;
  a = JSON.stringify([b, null, c]);
  b = ca.createHash("md5");
  b.update(a);
  return "k" + b.digest("hex");
}
function pg(a) {
  var b = Zf;
  Zf += 1;
  null === $f && ($f = []);
  return Kf($f, a, b);
}
function qg() {
  throw Error("Cache cannot be refreshed during server rendering.");
}
function rg() {}
var tg = {
    readContext: function (a) {
      return a._currentValue;
    },
    use: function (a) {
      if (null !== a && "object" === typeof a) {
        if ("function" === typeof a.then) return pg(a);
        if (a.$$typeof === $e || a.$$typeof === af) return a._currentValue;
      }
      throw Error("An unsupported type was passed to use(): " + String(a));
    },
    useContext: function (a) {
      cg();
      return a._currentValue;
    },
    useMemo: lg,
    useReducer: jg,
    useRef: function (a) {
      Pf = cg();
      V = eg();
      var b = V.memoizedState;
      return null === b ? ((a = { current: a }), (V.memoizedState = a)) : b;
    },
    useState: function (a) {
      return jg(ig, a);
    },
    useInsertionEffect: rg,
    useLayoutEffect: rg,
    useCallback: function (a, b) {
      return lg(function () {
        return a;
      }, b);
    },
    useImperativeHandle: rg,
    useEffect: rg,
    useDebugValue: rg,
    useDeferredValue: function (a) {
      cg();
      return a;
    },
    useTransition: function () {
      cg();
      return [!1, mg];
    },
    useId: function () {
      var a = Qf.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << (32 - Ef(a) - 1))).toString(32) + b;
      var c = sg;
      if (null === c)
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component."
        );
      b = Wf++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    },
    useSyncExternalStore: function (a, b, c) {
      if (void 0 === c)
        throw Error(
          "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
        );
      return c();
    },
    useCacheRefresh: function () {
      return qg;
    },
    useHostTransitionStatus: function () {
      cg();
      return Sa;
    },
    useOptimistic: function (a) {
      cg();
      return [a, ng];
    },
    useFormState: function (a, b, c) {
      cg();
      var d = Xf++,
        e = Rf;
      if ("function" === typeof a.$$FORM_ACTION) {
        var f = null,
          g = Sf;
        e = e.formState;
        var h = a.$$IS_SIGNATURE_EQUAL;
        if (null !== e && "function" === typeof h) {
          var l = e[1];
          h.call(a, e[2], e[3]) &&
            ((f = og(c, g, d)), l === f && ((Yf = d), (b = e[0])));
        }
        var n = a.bind(null, b);
        a = function (r) {
          n(r);
        };
        "function" === typeof n.$$FORM_ACTION &&
          (a.$$FORM_ACTION = function (r) {
            r = n.$$FORM_ACTION(r);
            void 0 !== c && ((c += ""), (r.action = c));
            var p = r.data;
            p && (null === f && (f = og(c, g, d)), p.append("$ACTION_KEY", f));
            return r;
          });
        return [b, a];
      }
      var q = a.bind(null, b);
      return [
        b,
        function (r) {
          q(r);
        },
      ];
    },
  },
  sg = null,
  ug = {
    getCacheSignal: function () {
      throw Error("Not implemented.");
    },
    getCacheForType: function () {
      throw Error("Not implemented.");
    },
  },
  vg = Ra.ReactCurrentDispatcher,
  wg = Ra.ReactCurrentCache;
function xg(a) {
  console.error(a);
  return null;
}
function yg() {}
var zg = null;
function Pe() {
  if (zg) return zg;
  var a = Te.getStore();
  return a ? a : null;
}
function Ag(a, b) {
  a.pingedTasks.push(b);
  1 === a.pingedTasks.length &&
    ((a.flushScheduled = null !== a.destination),
    setImmediate(function () {
      return Bg(a);
    }));
}
function Cg(a, b) {
  return {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: b,
    errorDigest: null,
    resources: { styles: new Set(), stylesheets: new Set() },
    trackedContentKeyPath: null,
    trackedFallbackNode: null,
  };
}
function Dg(a, b, c, d, e, f, g, h, l, n, q, r) {
  a.allPendingTasks++;
  null === e ? a.pendingRootTasks++ : e.pendingTasks++;
  var p = {
    replay: null,
    node: c,
    childIndex: d,
    ping: function () {
      return Ag(a, p);
    },
    blockedBoundary: e,
    blockedSegment: f,
    abortSet: g,
    keyPath: h,
    formatContext: l,
    legacyContext: n,
    context: q,
    treeContext: r,
    thenableState: b,
  };
  g.add(p);
  return p;
}
function Eg(a, b, c, d, e, f, g, h, l, n, q, r) {
  a.allPendingTasks++;
  null === f ? a.pendingRootTasks++ : f.pendingTasks++;
  c.pendingTasks++;
  var p = {
    replay: c,
    node: d,
    childIndex: e,
    ping: function () {
      return Ag(a, p);
    },
    blockedBoundary: f,
    blockedSegment: null,
    abortSet: g,
    keyPath: h,
    formatContext: l,
    legacyContext: n,
    context: q,
    treeContext: r,
    thenableState: b,
  };
  g.add(p);
  return p;
}
function Fg(a, b, c, d, e, f) {
  return {
    status: 0,
    id: -1,
    index: b,
    parentFlushed: !1,
    chunks: [],
    children: [],
    parentFormatContext: d,
    boundary: c,
    lastPushedText: e,
    textEmbedded: f,
  };
}
function W(a, b) {
  a = a.onError(b);
  if (null != a && "string" !== typeof a)
    throw Error(
      'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
        typeof a +
        '" instead'
    );
  return a;
}
function Gg(a, b) {
  var c = a.onShellError;
  c(b);
  c = a.onFatalError;
  c(b);
  null !== a.destination
    ? ((a.status = 2), a.destination.destroy(b))
    : ((a.status = 1), (a.fatalError = b));
}
function Hg(a, b, c, d, e) {
  var f = d.render(),
    g = e.childContextTypes;
  if (null !== g && void 0 !== g) {
    c = b.legacyContext;
    if ("function" !== typeof d.getChildContext) e = c;
    else {
      d = d.getChildContext();
      for (var h in d)
        if (!(h in g))
          throw Error(
            (qf(e) || "Unknown") +
              '.getChildContext(): key "' +
              h +
              '" is not defined in childContextTypes.'
          );
      e = y({}, c, d);
    }
    b.legacyContext = e;
    X(a, b, null, f, -1);
    b.legacyContext = c;
  } else
    (e = b.keyPath), (b.keyPath = c), X(a, b, null, f, -1), (b.keyPath = e);
}
function Ig(a, b, c, d, e, f, g) {
  var h = !1;
  if (0 !== f && null !== a.formState) {
    var l = b.blockedSegment;
    if (null !== l) {
      h = !0;
      l = l.chunks;
      for (var n = 0; n < f; n++) n === g ? l.push(fc) : l.push(gc);
    }
  }
  f = b.keyPath;
  b.keyPath = c;
  e
    ? ((c = b.treeContext),
      (b.treeContext = Df(c, 1, 0)),
      Jg(a, b, d, -1),
      (b.treeContext = c))
    : h
    ? Jg(a, b, d, -1)
    : X(a, b, null, d, -1);
  b.keyPath = f;
}
function Kg(a, b) {
  if (a && a.defaultProps) {
    b = y({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Lg(a, b, c, d, e, f, g) {
  if ("function" === typeof e)
    if (e.prototype && e.prototype.isReactComponent) {
      d = sf(e, b.legacyContext);
      var h = e.contextType;
      h = new e(f, "object" === typeof h && null !== h ? h._currentValue : d);
      Bf(h, e, f, d);
      Hg(a, b, c, h, e);
    } else {
      h = sf(e, b.legacyContext);
      Pf = {};
      Qf = b;
      Rf = a;
      Sf = c;
      Xf = Wf = 0;
      Yf = -1;
      Zf = 0;
      $f = d;
      d = e(f, h);
      d = fg(e, f, d, h);
      g = 0 !== Wf;
      var l = Xf,
        n = Yf;
      "object" === typeof d &&
      null !== d &&
      "function" === typeof d.render &&
      void 0 === d.$$typeof
        ? (Bf(d, e, f, h), Hg(a, b, c, d, e))
        : Ig(a, b, c, d, g, l, n);
    }
  else if ("string" === typeof e)
    if (((d = b.blockedSegment), null === d))
      (d = f.children),
        (h = b.formatContext),
        (g = b.keyPath),
        (b.formatContext = Lb(h, e, f)),
        (b.keyPath = c),
        Jg(a, b, d, -1),
        (b.formatContext = h),
        (b.keyPath = g);
    else {
      g = zc(
        d.chunks,
        e,
        f,
        a.resumableState,
        a.renderState,
        b.formatContext,
        d.lastPushedText
      );
      d.lastPushedText = !1;
      h = b.formatContext;
      l = b.keyPath;
      b.formatContext = Lb(h, e, f);
      b.keyPath = c;
      Jg(a, b, g, -1);
      b.formatContext = h;
      b.keyPath = l;
      a: {
        b = d.chunks;
        a = a.resumableState;
        switch (e) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break a;
          case "body":
            if (1 >= h.insertionMode) {
              a.hasBody = !0;
              break a;
            }
            break;
          case "html":
            if (0 === h.insertionMode) {
              a.hasHtml = !0;
              break a;
            }
        }
        b.push(sc(e));
      }
      d.lastPushedText = !1;
    }
  else {
    switch (e) {
      case mf:
      case kf:
      case Xe:
      case Ye:
      case We:
        e = b.keyPath;
        b.keyPath = c;
        X(a, b, null, f.children, -1);
        b.keyPath = e;
        return;
      case lf:
        "hidden" !== f.mode &&
          ((e = b.keyPath),
          (b.keyPath = c),
          X(a, b, null, f.children, -1),
          (b.keyPath = e));
        return;
      case ff:
        e = b.keyPath;
        b.keyPath = c;
        X(a, b, null, f.children, -1);
        b.keyPath = e;
        return;
      case jf:
        throw Error("ReactDOMServer does not yet support scope components.");
      case cf:
        a: if (null !== b.replay) {
          e = b.keyPath;
          b.keyPath = c;
          c = f.children;
          try {
            Jg(a, b, c, -1);
          } finally {
            b.keyPath = e;
          }
        } else {
          n = b.keyPath;
          e = b.blockedBoundary;
          var q = b.blockedSegment;
          d = f.fallback;
          var r = f.children;
          f = new Set();
          g = Cg(a, f);
          null !== a.trackedPostpones && (g.trackedContentKeyPath = c);
          l = Fg(a, q.chunks.length, g, b.formatContext, !1, !1);
          q.children.push(l);
          q.lastPushedText = !1;
          var p = Fg(a, 0, null, b.formatContext, !1, !1);
          p.parentFlushed = !0;
          b.blockedBoundary = g;
          b.blockedSegment = p;
          a.renderState.boundaryResources = g.resources;
          b.keyPath = c;
          try {
            if (
              (Jg(a, b, r, -1),
              p.lastPushedText && p.textEmbedded && p.chunks.push(Mb),
              (p.status = 1),
              Mg(g, p),
              0 === g.pendingTasks && 0 === g.status)
            ) {
              g.status = 1;
              break a;
            }
          } catch (v) {
            (p.status = 4), (g.status = 4), (h = W(a, v)), (g.errorDigest = h);
          } finally {
            (a.renderState.boundaryResources = e ? e.resources : null),
              (b.blockedBoundary = e),
              (b.blockedSegment = q),
              (b.keyPath = n);
          }
          h = [c[0], "Suspense Fallback", c[2]];
          n = a.trackedPostpones;
          null !== n &&
            ((q = [h[1], h[2], [], null]),
            n.workingMap.set(h, q),
            5 === g.status
              ? (n.workingMap.get(c)[4] = q)
              : (g.trackedFallbackNode = q));
          b = Dg(
            a,
            null,
            d,
            -1,
            e,
            l,
            f,
            h,
            b.formatContext,
            b.legacyContext,
            b.context,
            b.treeContext
          );
          a.pingedTasks.push(b);
        }
        return;
    }
    if ("object" === typeof e && null !== e)
      switch (e.$$typeof) {
        case bf:
          e = e.render;
          Pf = {};
          Qf = b;
          Rf = a;
          Sf = c;
          Xf = Wf = 0;
          Yf = -1;
          Zf = 0;
          $f = d;
          d = e(f, g);
          f = fg(e, f, d, g);
          Ig(a, b, c, f, 0 !== Wf, Xf, Yf);
          return;
        case gf:
          e = e.type;
          f = Kg(e, f);
          Lg(a, b, c, d, e, f, g);
          return;
        case Ze:
          h = f.children;
          d = b.keyPath;
          e = e._context;
          f = f.value;
          g = e._currentValue;
          e._currentValue = f;
          l = tf;
          tf = f = {
            parent: l,
            depth: null === l ? 0 : l.depth + 1,
            context: e,
            parentValue: g,
            value: f,
          };
          b.context = f;
          b.keyPath = c;
          X(a, b, null, h, -1);
          a = tf;
          if (null === a)
            throw Error(
              "Tried to pop a Context at the root of the app. This is a bug in React."
            );
          c = a.parentValue;
          a.context._currentValue = c === of ? a.context._defaultValue : c;
          a = tf = a.parent;
          b.context = a;
          b.keyPath = d;
          return;
        case $e:
          f = f.children;
          f = f(e._currentValue);
          e = b.keyPath;
          b.keyPath = c;
          X(a, b, null, f, -1);
          b.keyPath = e;
          return;
        case hf:
          h = e._init;
          e = h(e._payload);
          f = Kg(e, f);
          Lg(a, b, c, d, e, f, void 0);
          return;
      }
    throw Error(
      "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
        ((null == e ? e : typeof e) + ".")
    );
  }
}
function Ng(a, b, c, d, e) {
  var f = b.replay,
    g = b.blockedBoundary,
    h = Fg(a, 0, null, b.formatContext, !1, !1);
  h.id = c;
  h.parentFlushed = !0;
  try {
    (b.replay = null),
      (b.blockedSegment = h),
      Jg(a, b, d, e),
      (h.status = 1),
      null === g
        ? (a.completedRootSegment = h)
        : (Mg(g, h), g.parentFlushed && a.partialBoundaries.push(g));
  } finally {
    (b.replay = f), (b.blockedSegment = null);
  }
}
function X(a, b, c, d, e) {
  if (null !== b.replay && "number" === typeof b.replay.slots)
    Ng(a, b, b.replay.slots, d, e);
  else {
    b.node = d;
    b.childIndex = e;
    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Ue:
          var f = d.type,
            g = d.key,
            h = d.props,
            l = d.ref,
            n = qf(f),
            q = null == g ? (-1 === e ? 0 : e) : g;
          g = [b.keyPath, n, q];
          if (null !== b.replay)
            a: {
              var r = b.replay;
              e = r.nodes;
              for (d = 0; d < e.length; d++) {
                var p = e[d];
                if (q === p[1]) {
                  if (4 === p.length) {
                    if (null !== n && n !== p[0])
                      throw Error(
                        "Expected the resume to render <" +
                          p[0] +
                          "> in this slot but instead it rendered <" +
                          n +
                          ">. The tree doesn't match so React will fallback to client rendering."
                      );
                    n = p[2];
                    p = p[3];
                    q = b.node;
                    b.replay = { nodes: n, slots: p, pendingTasks: 1 };
                    try {
                      Lg(a, b, g, c, f, h, l);
                      if (
                        1 === b.replay.pendingTasks &&
                        0 < b.replay.nodes.length
                      )
                        throw Error(
                          "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                        );
                      b.replay.pendingTasks--;
                    } catch (H) {
                      if (
                        "object" === typeof H &&
                        null !== H &&
                        (H === If || "function" === typeof H.then)
                      )
                        throw (b.node === q && (b.replay = r), H);
                      b.replay.pendingTasks--;
                      g = a;
                      a = b.blockedBoundary;
                      c = H;
                      h = W(g, c);
                      Og(g, a, n, p, c, h);
                    }
                    b.replay = r;
                  } else {
                    if (f !== cf)
                      throw Error(
                        "Expected the resume to render <Suspense> in this slot but instead it rendered <" +
                          (qf(f) || "Unknown") +
                          ">. The tree doesn't match so React will fallback to client rendering."
                      );
                    b: {
                      r = void 0;
                      c = p[5];
                      f = p[2];
                      l = p[3];
                      n = null === p[4] ? [] : p[4][2];
                      p = null === p[4] ? null : p[4][3];
                      q = b.keyPath;
                      var v = b.replay,
                        E = b.blockedBoundary,
                        Y = h.children;
                      h = h.fallback;
                      var t = new Set(),
                        B = Cg(a, t);
                      B.parentFlushed = !0;
                      B.rootSegmentID = c;
                      b.blockedBoundary = B;
                      b.replay = { nodes: f, slots: l, pendingTasks: 1 };
                      a.renderState.boundaryResources = B.resources;
                      try {
                        Jg(a, b, Y, -1);
                        if (
                          1 === b.replay.pendingTasks &&
                          0 < b.replay.nodes.length
                        )
                          throw Error(
                            "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                          );
                        b.replay.pendingTasks--;
                        if (0 === B.pendingTasks && 0 === B.status) {
                          B.status = 1;
                          a.completedBoundaries.push(B);
                          break b;
                        }
                      } catch (H) {
                        (B.status = 4),
                          (r = W(a, H)),
                          (B.errorDigest = r),
                          b.replay.pendingTasks--,
                          a.clientRenderedBoundaries.push(B);
                      } finally {
                        (a.renderState.boundaryResources = E
                          ? E.resources
                          : null),
                          (b.blockedBoundary = E),
                          (b.replay = v),
                          (b.keyPath = q);
                      }
                      b = Eg(
                        a,
                        null,
                        { nodes: n, slots: p, pendingTasks: 0 },
                        h,
                        -1,
                        E,
                        t,
                        [g[0], "Suspense Fallback", g[2]],
                        b.formatContext,
                        b.legacyContext,
                        b.context,
                        b.treeContext
                      );
                      a.pingedTasks.push(b);
                    }
                  }
                  e.splice(d, 1);
                  break a;
                }
              }
            }
          else Lg(a, b, g, c, f, h, l);
          return;
        case Ve:
          throw Error(
            "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
          );
        case hf:
          h = d._init;
          d = h(d._payload);
          X(a, b, null, d, e);
          return;
      }
      if (La(d)) {
        Pg(a, b, d, e);
        return;
      }
      null === d || "object" !== typeof d
        ? (h = null)
        : ((h = (pf && d[pf]) || d["@@iterator"]),
          (h = "function" === typeof h ? h : null));
      if (h && (h = h.call(d))) {
        d = h.next();
        if (!d.done) {
          g = [];
          do g.push(d.value), (d = h.next());
          while (!d.done);
          Pg(a, b, g, e);
        }
        return;
      }
      if ("function" === typeof d.then) return X(a, b, null, pg(d), e);
      if (d.$$typeof === $e || d.$$typeof === af)
        return X(a, b, null, d._currentValue, e);
      e = Object.prototype.toString.call(d);
      throw Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === e
            ? "object with keys {" + Object.keys(d).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      );
    }
    "string" === typeof d
      ? ((e = b.blockedSegment),
        null !== e &&
          (e.lastPushedText = Nb(e.chunks, d, a.renderState, e.lastPushedText)))
      : "number" === typeof d &&
        ((e = b.blockedSegment),
        null !== e &&
          (e.lastPushedText = Nb(
            e.chunks,
            "" + d,
            a.renderState,
            e.lastPushedText
          )));
  }
}
function Pg(a, b, c, d) {
  var e = b.keyPath;
  if (
    -1 !== d &&
    ((b.keyPath = [b.keyPath, "Fragment", d]), null !== b.replay)
  ) {
    for (var f = b.replay, g = f.nodes, h = 0; h < g.length; h++) {
      var l = g[h];
      if (l[1] === d) {
        d = l[2];
        l = l[3];
        b.replay = { nodes: d, slots: l, pendingTasks: 1 };
        try {
          Pg(a, b, c, -1);
          if (1 === b.replay.pendingTasks && 0 < b.replay.nodes.length)
            throw Error(
              "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
            );
          b.replay.pendingTasks--;
        } catch (r) {
          if (
            "object" === typeof r &&
            null !== r &&
            (r === If || "function" === typeof r.then)
          )
            throw r;
          b.replay.pendingTasks--;
          c = a;
          var n = b.blockedBoundary,
            q = r;
          a = W(c, q);
          Og(c, n, d, l, q, a);
        }
        b.replay = f;
        g.splice(h, 1);
        break;
      }
    }
    b.keyPath = e;
    return;
  }
  f = b.treeContext;
  g = c.length;
  if (
    null !== b.replay &&
    ((h = b.replay.slots), null !== h && "object" === typeof h)
  ) {
    for (d = 0; d < g; d++)
      (l = c[d]),
        (b.treeContext = Df(f, g, d)),
        (n = h[d]),
        "number" === typeof n
          ? (Ng(a, b, n, l, d), delete h[d])
          : Jg(a, b, l, d);
    b.treeContext = f;
    b.keyPath = e;
    return;
  }
  for (h = 0; h < g; h++)
    (d = c[h]), (b.treeContext = Df(f, g, h)), Jg(a, b, d, h);
  b.treeContext = f;
  b.keyPath = e;
}
function Jg(a, b, c, d) {
  var e = b.formatContext,
    f = b.legacyContext,
    g = b.context,
    h = b.keyPath,
    l = b.treeContext,
    n = b.blockedSegment;
  if (null === n)
    try {
      return X(a, b, null, c, d);
    } catch (p) {
      if (
        (gg(),
        (c = p === If ? Mf() : p),
        "object" === typeof c && null !== c && "function" === typeof c.then)
      ) {
        d = hg();
        a = Eg(
          a,
          d,
          b.replay,
          b.node,
          b.childIndex,
          b.blockedBoundary,
          b.abortSet,
          b.keyPath,
          b.formatContext,
          b.legacyContext,
          b.context,
          b.treeContext
        ).ping;
        c.then(a, a);
        b.formatContext = e;
        b.legacyContext = f;
        b.context = g;
        b.keyPath = h;
        b.treeContext = l;
        zf(g);
        return;
      }
    }
  else {
    var q = n.children.length,
      r = n.chunks.length;
    try {
      return X(a, b, null, c, d);
    } catch (p) {
      if (
        (gg(),
        (n.children.length = q),
        (n.chunks.length = r),
        (c = p === If ? Mf() : p),
        "object" === typeof c && null !== c && "function" === typeof c.then)
      ) {
        d = hg();
        n = b.blockedSegment;
        q = Fg(a, n.chunks.length, null, b.formatContext, n.lastPushedText, !0);
        n.children.push(q);
        n.lastPushedText = !1;
        a = Dg(
          a,
          d,
          b.node,
          b.childIndex,
          b.blockedBoundary,
          q,
          b.abortSet,
          b.keyPath,
          b.formatContext,
          b.legacyContext,
          b.context,
          b.treeContext
        ).ping;
        c.then(a, a);
        b.formatContext = e;
        b.legacyContext = f;
        b.context = g;
        b.keyPath = h;
        b.treeContext = l;
        zf(g);
        return;
      }
    }
  }
  b.formatContext = e;
  b.legacyContext = f;
  b.context = g;
  b.keyPath = h;
  b.treeContext = l;
  zf(g);
  throw c;
}
function Qg(a) {
  var b = a.blockedBoundary;
  a = a.blockedSegment;
  null !== a && ((a.status = 3), Rg(this, b, a));
}
function Og(a, b, c, d, e, f) {
  for (var g = 0; g < c.length; g++) {
    var h = c[g];
    if (4 === h.length) Og(a, b, h[2], h[3], e, f);
    else {
      h = h[5];
      var l = a,
        n = f,
        q = Cg(l, new Set());
      q.parentFlushed = !0;
      q.rootSegmentID = h;
      q.status = 4;
      q.errorDigest = n;
      q.parentFlushed && l.clientRenderedBoundaries.push(q);
    }
  }
  c.length = 0;
  if (null !== d) {
    if (null === b)
      throw Error(
        "We should not have any resumable nodes in the shell. This is a bug in React."
      );
    4 !== b.status &&
      ((b.status = 4),
      (b.errorDigest = f),
      b.parentFlushed && a.clientRenderedBoundaries.push(b));
    if ("object" === typeof d) for (var r in d) delete d[r];
  }
}
function Sg(a, b, c) {
  var d = a.blockedBoundary,
    e = a.blockedSegment;
  null !== e && (e.status = 3);
  if (null === d) {
    if (1 !== b.status && 2 !== b.status) {
      a = a.replay;
      if (null === a) {
        W(b, c);
        Gg(b, c);
        return;
      }
      a.pendingTasks--;
      0 === a.pendingTasks &&
        0 < a.nodes.length &&
        ((d = W(b, c)), Og(b, null, a.nodes, a.slots, c, d));
      b.pendingRootTasks--;
      0 === b.pendingRootTasks &&
        ((b.onShellError = yg), (a = b.onShellReady), a());
    }
  } else
    d.pendingTasks--,
      4 !== d.status &&
        ((d.status = 4),
        (d.errorDigest = W(b, c)),
        d.parentFlushed && b.clientRenderedBoundaries.push(d)),
      d.fallbackAbortableTasks.forEach(function (f) {
        return Sg(f, b, c);
      }),
      d.fallbackAbortableTasks.clear();
  b.allPendingTasks--;
  0 === b.allPendingTasks && ((a = b.onAllReady), a());
}
function Mg(a, b) {
  if (
    0 === b.chunks.length &&
    1 === b.children.length &&
    null === b.children[0].boundary
  ) {
    var c = b.children[0];
    c.id = b.id;
    c.parentFlushed = !0;
    1 === c.status && Mg(a, c);
  } else a.completedSegments.push(b);
}
function Rg(a, b, c) {
  if (null === b) {
    if (null !== c && c.parentFlushed) {
      if (null !== a.completedRootSegment)
        throw Error(
          "There can only be one root segment. This is a bug in React."
        );
      a.completedRootSegment = c;
    }
    a.pendingRootTasks--;
    0 === a.pendingRootTasks &&
      ((a.onShellError = yg), (b = a.onShellReady), b());
  } else
    b.pendingTasks--,
      4 !== b.status &&
        (0 === b.pendingTasks
          ? (0 === b.status && (b.status = 1),
            null !== c && c.parentFlushed && 1 === c.status && Mg(b, c),
            b.parentFlushed && a.completedBoundaries.push(b),
            1 === b.status &&
              (b.fallbackAbortableTasks.forEach(Qg, a),
              b.fallbackAbortableTasks.clear()))
          : null !== c &&
            c.parentFlushed &&
            1 === c.status &&
            (Mg(b, c),
            1 === b.completedSegments.length &&
              b.parentFlushed &&
              a.partialBoundaries.push(b)));
  a.allPendingTasks--;
  0 === a.allPendingTasks && ((a = a.onAllReady), a());
}
function Bg(a) {
  if (2 !== a.status) {
    var b = tf,
      c = vg.current;
    vg.current = tg;
    var d = wg.current;
    wg.current = ug;
    var e = zg;
    zg = a;
    var f = sg;
    sg = a.resumableState;
    try {
      var g = a.pingedTasks,
        h;
      for (h = 0; h < g.length; h++) {
        var l = g[h],
          n = a,
          q = l.blockedBoundary;
        n.renderState.boundaryResources = q ? q.resources : null;
        var r = l.blockedSegment;
        if (null === r) {
          var p = n;
          if (0 !== l.replay.pendingTasks) {
            zf(l.context);
            try {
              var v = l.thenableState;
              l.thenableState = null;
              X(p, l, v, l.node, -1);
              if (1 === l.replay.pendingTasks && 0 < l.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              l.replay.pendingTasks--;
              l.abortSet.delete(l);
              Rg(p, l.blockedBoundary, null);
            } catch (J) {
              gg();
              var E = J === If ? Mf() : J;
              if (
                "object" === typeof E &&
                null !== E &&
                "function" === typeof E.then
              ) {
                var Y = l.ping;
                E.then(Y, Y);
                l.thenableState = hg();
              } else {
                l.replay.pendingTasks--;
                l.abortSet.delete(l);
                n = void 0;
                var t = p,
                  B = l.blockedBoundary,
                  H = E,
                  ja = l.replay.nodes,
                  D = l.replay.slots;
                n = W(t, H);
                Og(t, B, ja, D, H, n);
                p.pendingRootTasks--;
                if (0 === p.pendingRootTasks) {
                  p.onShellError = yg;
                  var U = p.onShellReady;
                  U();
                }
                p.allPendingTasks--;
                if (0 === p.allPendingTasks) {
                  var F = p.onAllReady;
                  F();
                }
              }
            } finally {
              p.renderState.boundaryResources = null;
            }
          }
        } else if (((p = void 0), (t = r), 0 === t.status)) {
          zf(l.context);
          var da = t.children.length,
            ka = t.chunks.length;
          try {
            var pa = l.thenableState;
            l.thenableState = null;
            X(n, l, pa, l.node, l.childIndex);
            t.lastPushedText && t.textEmbedded && t.chunks.push(Mb);
            l.abortSet.delete(l);
            t.status = 1;
            Rg(n, l.blockedBoundary, t);
          } catch (J) {
            gg();
            t.children.length = da;
            t.chunks.length = ka;
            var S = J === If ? Mf() : J;
            if (
              "object" === typeof S &&
              null !== S &&
              "function" === typeof S.then
            ) {
              var Z = l.ping;
              S.then(Z, Z);
              l.thenableState = hg();
            } else {
              l.abortSet.delete(l);
              t.status = 4;
              var I = l.blockedBoundary;
              p = W(n, S);
              null === I
                ? Gg(n, S)
                : (I.pendingTasks--,
                  4 !== I.status &&
                    ((I.status = 4),
                    (I.errorDigest = p),
                    I.parentFlushed && n.clientRenderedBoundaries.push(I)));
              n.allPendingTasks--;
              if (0 === n.allPendingTasks) {
                var la = n.onAllReady;
                la();
              }
            }
          } finally {
            n.renderState.boundaryResources = null;
          }
        }
      }
      g.splice(0, h);
      null !== a.destination && Tg(a, a.destination);
    } catch (J) {
      W(a, J), Gg(a, J);
    } finally {
      (sg = f), (vg.current = c), (wg.current = d), c === tg && zf(b), (zg = e);
    }
  }
}
function Ug(a, b, c) {
  c.parentFlushed = !0;
  switch (c.status) {
    case 0:
      c.id = a.nextSegmentId++;
    case 5:
      var d = c.id;
      c.lastPushedText = !1;
      c.textEmbedded = !1;
      a = a.renderState;
      u(b, Cc);
      u(b, a.placeholderPrefix);
      a = d.toString(16);
      u(b, a);
      return w(b, Dc);
    case 1:
      c.status = 2;
      var e = !0;
      d = c.chunks;
      var f = 0;
      c = c.children;
      for (var g = 0; g < c.length; g++) {
        for (e = c[g]; f < e.index; f++) u(b, d[f]);
        e = Vg(a, b, e);
      }
      for (; f < d.length - 1; f++) u(b, d[f]);
      f < d.length && (e = w(b, d[f]));
      return e;
    default:
      throw Error(
        "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
      );
  }
}
function Vg(a, b, c) {
  var d = c.boundary;
  if (null === d) return Ug(a, b, c);
  d.parentFlushed = !0;
  if (4 === d.status)
    (d = d.errorDigest),
      w(b, Hc),
      u(b, Jc),
      d && (u(b, Lc), u(b, A(d)), u(b, Kc)),
      w(b, Mc),
      Ug(a, b, c);
  else if (1 !== d.status)
    0 === d.status && (d.rootSegmentID = a.nextSegmentId++),
      0 < d.completedSegments.length && a.partialBoundaries.push(d),
      Nc(b, a.renderState, d.rootSegmentID),
      Ug(a, b, c);
  else if (d.byteSize > a.progressiveChunkSize)
    (d.rootSegmentID = a.nextSegmentId++),
      a.completedBoundaries.push(d),
      Nc(b, a.renderState, d.rootSegmentID),
      Ug(a, b, c);
  else {
    c = d.resources;
    var e = a.renderState.boundaryResources;
    e && (c.styles.forEach(Re, e), c.stylesheets.forEach(Se, e));
    w(b, Ec);
    d = d.completedSegments;
    if (1 !== d.length)
      throw Error(
        "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
      );
    Vg(a, b, d[0]);
  }
  return w(b, Ic);
}
function Wg(a, b, c) {
  Id(b, a.renderState, c.parentFormatContext, c.id);
  Vg(a, b, c);
  return Jd(b, c.parentFormatContext);
}
function Xg(a, b, c) {
  a.renderState.boundaryResources = c.resources;
  for (var d = c.completedSegments, e = 0; e < d.length; e++) Yg(a, b, c, d[e]);
  d.length = 0;
  ye(b, c.resources, a.renderState);
  d = a.resumableState;
  a = a.renderState;
  e = c.rootSegmentID;
  c = c.resources;
  var f = a.stylesToHoist;
  a.stylesToHoist = !1;
  var g = 0 === d.streamingFormat;
  g
    ? (u(b, a.startInlineScript),
      f
        ? 0 === (d.instructions & 2)
          ? ((d.instructions |= 10), u(b, 2048 < Sd.length ? Sd.slice() : Sd))
          : 0 === (d.instructions & 8)
          ? ((d.instructions |= 8), u(b, Td))
          : u(b, Ud)
        : 0 === (d.instructions & 2)
        ? ((d.instructions |= 2), u(b, Qd))
        : u(b, Rd))
    : f
    ? u(b, $d)
    : u(b, Zd);
  d = e.toString(16);
  u(b, a.boundaryPrefix);
  u(b, d);
  g ? u(b, Vd) : u(b, ae);
  u(b, a.segmentPrefix);
  u(b, d);
  f ? (g ? (u(b, Wd), Ne(b, c)) : (u(b, be), Oe(b, c))) : g && u(b, Xd);
  d = g ? w(b, Yd) : w(b, qb);
  return Bc(b, a) && d;
}
function Yg(a, b, c, d) {
  if (2 === d.status) return !0;
  var e = d.id;
  if (-1 === e) {
    if (-1 === (d.id = c.rootSegmentID))
      throw Error(
        "A root segment ID must have been assigned by now. This is a bug in React."
      );
    return Wg(a, b, d);
  }
  if (e === c.rootSegmentID) return Wg(a, b, d);
  Wg(a, b, d);
  c = a.resumableState;
  a = a.renderState;
  (d = 0 === c.streamingFormat)
    ? (u(b, a.startInlineScript),
      0 === (c.instructions & 1) ? ((c.instructions |= 1), u(b, Kd)) : u(b, Ld))
    : u(b, Od);
  u(b, a.segmentPrefix);
  e = e.toString(16);
  u(b, e);
  d ? u(b, Md) : u(b, Pd);
  u(b, a.placeholderPrefix);
  u(b, e);
  b = d ? w(b, Nd) : w(b, qb);
  return b;
}
function Tg(a, b) {
  k = new Uint8Array(2048);
  m = 0;
  oa = !0;
  try {
    var c,
      d = a.completedRootSegment;
    if (null !== d)
      if (0 === a.pendingRootTasks) {
        var e = a.renderState;
        if (
          (0 !== a.allPendingTasks || null !== a.trackedPostpones) &&
          e.externalRuntimeScript
        ) {
          var f = e.externalRuntimeScript,
            g = a.resumableState,
            h = f.src,
            l = f.chunks;
          g.scriptResources.hasOwnProperty(h) ||
            ((g.scriptResources[h] = null), e.scripts.add(l));
        }
        var n = e.htmlChunks,
          q = e.headChunks;
        f = 0;
        if (n) {
          for (f = 0; f < n.length; f++) u(b, n[f]);
          if (q) for (f = 0; f < q.length; f++) u(b, q[f]);
          else u(b, T("head")), u(b, Q);
        } else if (q) for (f = 0; f < q.length; f++) u(b, q[f]);
        var r = e.charsetChunks;
        for (f = 0; f < r.length; f++) u(b, r[f]);
        r.length = 0;
        e.preconnects.forEach(ze, b);
        e.preconnects.clear();
        var p = e.preconnectChunks;
        for (f = 0; f < p.length; f++) u(b, p[f]);
        p.length = 0;
        e.fontPreloads.forEach(ze, b);
        e.fontPreloads.clear();
        e.highImagePreloads.forEach(ze, b);
        e.highImagePreloads.clear();
        e.styles.forEach(Ge, b);
        var v = e.importMapChunks;
        for (f = 0; f < v.length; f++) u(b, v[f]);
        v.length = 0;
        e.bootstrapScripts.forEach(ze, b);
        e.scripts.forEach(ze, b);
        e.scripts.clear();
        e.bulkPreloads.forEach(ze, b);
        e.bulkPreloads.clear();
        var E = e.preloadChunks;
        for (f = 0; f < E.length; f++) u(b, E[f]);
        E.length = 0;
        var Y = e.hoistableChunks;
        for (f = 0; f < Y.length; f++) u(b, Y[f]);
        Y.length = 0;
        n && null === q && u(b, sc("head"));
        Vg(a, b, d);
        a.completedRootSegment = null;
        Bc(b, a.renderState);
      } else return;
    var t = a.renderState;
    d = 0;
    t.preconnects.forEach(ze, b);
    t.preconnects.clear();
    var B = t.preconnectChunks;
    for (d = 0; d < B.length; d++) u(b, B[d]);
    B.length = 0;
    t.fontPreloads.forEach(ze, b);
    t.fontPreloads.clear();
    t.highImagePreloads.forEach(ze, b);
    t.highImagePreloads.clear();
    t.styles.forEach(Ie, b);
    t.scripts.forEach(ze, b);
    t.scripts.clear();
    t.bulkPreloads.forEach(ze, b);
    t.bulkPreloads.clear();
    var H = t.preloadChunks;
    for (d = 0; d < H.length; d++) u(b, H[d]);
    H.length = 0;
    var ja = t.hoistableChunks;
    for (d = 0; d < ja.length; d++) u(b, ja[d]);
    ja.length = 0;
    var D = a.clientRenderedBoundaries;
    for (c = 0; c < D.length; c++) {
      var U = D[c];
      t = b;
      var F = a.resumableState,
        da = a.renderState,
        ka = U.rootSegmentID,
        pa = U.errorDigest,
        S = U.errorMessage,
        Z = U.errorComponentStack,
        I = 0 === F.streamingFormat;
      I
        ? (u(t, da.startInlineScript),
          0 === (F.instructions & 4)
            ? ((F.instructions |= 4), u(t, ce))
            : u(t, de))
        : u(t, he);
      u(t, da.boundaryPrefix);
      u(t, ka.toString(16));
      I && u(t, ee);
      if (pa || S || Z)
        I ? (u(t, fe), u(t, me(pa || ""))) : (u(t, ie), u(t, A(pa || "")));
      if (S || Z)
        I ? (u(t, fe), u(t, me(S || ""))) : (u(t, je), u(t, A(S || "")));
      Z && (I ? (u(t, fe), u(t, me(Z))) : (u(t, ke), u(t, A(Z))));
      if (I ? !w(t, ge) : !w(t, qb)) {
        a.destination = null;
        c++;
        D.splice(0, c);
        return;
      }
    }
    D.splice(0, c);
    var la = a.completedBoundaries;
    for (c = 0; c < la.length; c++)
      if (!Xg(a, b, la[c])) {
        a.destination = null;
        c++;
        la.splice(0, c);
        return;
      }
    la.splice(0, c);
    wa(b);
    k = new Uint8Array(2048);
    m = 0;
    oa = !0;
    var J = a.partialBoundaries;
    for (c = 0; c < J.length; c++) {
      var qa = J[c];
      a: {
        D = a;
        U = b;
        D.renderState.boundaryResources = qa.resources;
        var ra = qa.completedSegments;
        for (F = 0; F < ra.length; F++)
          if (!Yg(D, U, qa, ra[F])) {
            F++;
            ra.splice(0, F);
            var Ma = !1;
            break a;
          }
        ra.splice(0, F);
        Ma = ye(U, qa.resources, D.renderState);
      }
      if (!Ma) {
        a.destination = null;
        c++;
        J.splice(0, c);
        return;
      }
    }
    J.splice(0, c);
    var ea = a.completedBoundaries;
    for (c = 0; c < ea.length; c++)
      if (!Xg(a, b, ea[c])) {
        a.destination = null;
        c++;
        ea.splice(0, c);
        return;
      }
    ea.splice(0, c);
  } finally {
    0 === a.allPendingTasks &&
    0 === a.pingedTasks.length &&
    0 === a.clientRenderedBoundaries.length &&
    0 === a.completedBoundaries.length
      ? ((a.flushScheduled = !1),
        (a = a.resumableState),
        a.hasBody && u(b, sc("body")),
        a.hasHtml && u(b, sc("html")),
        wa(b),
        na(b),
        b.end())
      : (wa(b), na(b));
  }
}
function Zg(a) {
  a.flushScheduled = null !== a.destination;
  setImmediate(function () {
    return Te.run(a, Bg, a);
  });
}
function Qe(a) {
  if (
    !1 === a.flushScheduled &&
    0 === a.pingedTasks.length &&
    null !== a.destination
  ) {
    var b = a.destination;
    a.flushScheduled = !0;
    setImmediate(function () {
      return Tg(a, b);
    });
  }
}
function $g(a, b) {
  if (1 === a.status) (a.status = 2), b.destroy(a.fatalError);
  else if (2 !== a.status && null === a.destination) {
    a.destination = b;
    try {
      Tg(a, b);
    } catch (c) {
      W(a, c), Gg(a, c);
    }
  }
}
function ah(a, b) {
  try {
    var c = a.abortableTasks;
    if (0 < c.size) {
      var d =
        void 0 === b
          ? Error("The render was aborted by the server without a reason.")
          : b;
      c.forEach(function (e) {
        return Sg(e, a, d);
      });
      c.clear();
    }
    null !== a.destination && Tg(a, a.destination);
  } catch (e) {
    W(a, e), Gg(a, e);
  }
}
function bh(a, b) {
  return function () {
    return $g(b, a);
  };
}
function ch(a, b) {
  return function () {
    a.destination = null;
    ah(a, Error(b));
  };
}
function dh(a, b) {
  var c = b ? b.identifierPrefix : void 0;
  var d = 0;
  void 0 !== (b ? b.unstable_externalRuntimeSrc : void 0) && (d = 1);
  c = {
    idPrefix: void 0 === c ? "" : c,
    nextFormID: 0,
    streamingFormat: d,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {},
  };
  var e = b ? b.nonce : void 0,
    f = b ? b.bootstrapScriptContent : void 0,
    g = b ? b.bootstrapScripts : void 0,
    h = b ? b.bootstrapModules : void 0,
    l = b ? b.unstable_externalRuntimeSrc : void 0;
  d = b ? b.importMap : void 0;
  var n = void 0 === e ? rb : x('<script nonce="' + A(e) + '">'),
    q = c.idPrefix,
    r = [],
    p = null;
  void 0 !== f && r.push(n, ("" + f).replace(zb, Ib), sb);
  void 0 !== l &&
    ("string" === typeof l
      ? ((p = { src: l, chunks: [] }),
        tc(p.chunks, { src: l, async: !0, integrity: void 0, nonce: e }))
      : ((p = { src: l.src, chunks: [] }),
        tc(p.chunks, {
          src: l.src,
          async: !0,
          integrity: l.integrity,
          nonce: e,
        })));
  f = [];
  void 0 !== d &&
    (f.push(Jb), f.push(("" + JSON.stringify(d)).replace(zb, Ib)), f.push(Kb));
  d = {
    placeholderPrefix: x(q + "P:"),
    segmentPrefix: x(q + "S:"),
    boundaryPrefix: x(q + "B:"),
    startInlineScript: n,
    htmlChunks: null,
    headChunks: null,
    externalRuntimeScript: p,
    bootstrapChunks: r,
    charsetChunks: [],
    preconnectChunks: [],
    importMapChunks: f,
    preloadChunks: [],
    hoistableChunks: [],
    preconnects: new Set(),
    fontPreloads: new Set(),
    highImagePreloads: new Set(),
    styles: new Map(),
    bootstrapScripts: new Set(),
    scripts: new Set(),
    bulkPreloads: new Set(),
    preloads: {
      images: new Map(),
      stylesheets: new Map(),
      scripts: new Map(),
      moduleScripts: new Map(),
    },
    nonce: e,
    boundaryResources: null,
    stylesToHoist: !1,
  };
  if (void 0 !== g)
    for (n = 0; n < g.length; n++) {
      var v = g[n];
      f = p = void 0;
      l = { rel: "preload", as: "script", fetchPriority: "low", nonce: e };
      "string" === typeof v
        ? (l.href = q = v)
        : ((l.href = q = v.src),
          (l.integrity = f =
            "string" === typeof v.integrity ? v.integrity : void 0),
          (l.crossOrigin = p =
            "string" === typeof v || null == v.crossOrigin
              ? void 0
              : "use-credentials" === v.crossOrigin
              ? "use-credentials"
              : ""));
      v = c;
      var E = q;
      v.scriptResources[E] = null;
      v.moduleScriptResources[E] = null;
      v = [];
      R(v, l);
      d.bootstrapScripts.add(v);
      r.push(tb, A(q));
      e && r.push(vb, A(e));
      "string" === typeof f && r.push(wb, A(f));
      "string" === typeof p && r.push(xb, A(p));
      r.push(yb);
    }
  if (void 0 !== h)
    for (g = 0; g < h.length; g++)
      (l = h[g]),
        (p = q = void 0),
        (f = { rel: "modulepreload", fetchPriority: "low", nonce: e }),
        "string" === typeof l
          ? (f.href = n = l)
          : ((f.href = n = l.src),
            (f.integrity = p =
              "string" === typeof l.integrity ? l.integrity : void 0),
            (f.crossOrigin = q =
              "string" === typeof l || null == l.crossOrigin
                ? void 0
                : "use-credentials" === l.crossOrigin
                ? "use-credentials"
                : "")),
        (l = c),
        (v = n),
        (l.scriptResources[v] = null),
        (l.moduleScriptResources[v] = null),
        (l = []),
        R(l, f),
        d.bootstrapScripts.add(l),
        r.push(ub, A(n)),
        e && r.push(vb, A(e)),
        "string" === typeof p && r.push(wb, A(p)),
        "string" === typeof q && r.push(xb, A(q)),
        r.push(yb);
  e = b ? b.namespaceURI : void 0;
  e = C(
    "http://www.w3.org/2000/svg" === e
      ? 3
      : "http://www.w3.org/1998/Math/MathML" === e
      ? 4
      : 0,
    null,
    0
  );
  r = b ? b.progressiveChunkSize : void 0;
  g = b ? b.onError : void 0;
  n = b ? b.onAllReady : void 0;
  q = b ? b.onShellReady : void 0;
  p = b ? b.onShellError : void 0;
  f = b ? b.onPostpone : void 0;
  l = b ? b.formState : void 0;
  Ta.current = ob;
  b = [];
  h = new Set();
  c = {
    destination: null,
    flushScheduled: !1,
    resumableState: c,
    renderState: d,
    rootFormatContext: e,
    progressiveChunkSize: void 0 === r ? 12800 : r,
    status: 0,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: h,
    pingedTasks: b,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    trackedPostpones: null,
    onError: void 0 === g ? xg : g,
    onPostpone: void 0 === f ? yg : f,
    onAllReady: void 0 === n ? yg : n,
    onShellReady: void 0 === q ? yg : q,
    onShellError: void 0 === p ? yg : p,
    onFatalError: yg,
    formState: void 0 === l ? null : l,
  };
  d = Fg(c, 0, null, e, !1, !1);
  d.parentFlushed = !0;
  a = Dg(c, null, a, -1, null, d, h, null, e, rf, null, Cf);
  b.push(a);
  return c;
}
exports.renderToPipeableStream = function (a, b) {
  var c = dh(a, b),
    d = !1;
  Zg(c);
  return {
    pipe: function (e) {
      if (d)
        throw Error(
          "React currently only supports piping to one writable stream."
        );
      d = !0;
      $g(c, e);
      e.on("drain", bh(e, c));
      e.on(
        "error",
        ch(c, "The destination stream errored while writing data.")
      );
      e.on("close", ch(c, "The destination stream closed early."));
      return e;
    },
    abort: function (e) {
      ah(c, e);
    },
  };
};
exports.version = "18.3.0-PLACEHOLDER";
