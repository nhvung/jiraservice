/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2);
} else {}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(3),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4);
} else {}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(6);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(7);
} else {}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(3),ca=__webpack_require__(8);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(9);
} else {}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bytes2hex": () => (/* binding */ bytes2hex),
/* harmony export */   "guid": () => (/* binding */ guid),
/* harmony export */   "guid8": () => (/* binding */ guid8),
/* harmony export */   "hash": () => (/* binding */ hash)
/* harmony export */ });
async function hash(clearText, hashName) {
    try {
        const encodedText = new TextEncoder().encode(clearText);
        const hexValue = await crypto.subtle.digest(hashName, encodedText)
            .then(bytes2hex)
            .catch(() => '');
        return hexValue;
    }
    catch (e) {
        console.log(e);
    }
}
function bytes2hex(buffer) {
    try {
        const bufferBytes = Array.from(new Uint8Array(buffer));
        const hex = bufferBytes.map((b) => b.toString(16).padStart(2, '0')).join('');
        return hex;
    }
    catch (e) {
    }
    return '';
}
function guid() {
    try {
        const baseNumber = 16;
        let timeNow = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-1517-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (timeNow + Math.random() * baseNumber) % baseNumber | 0;
            timeNow = Math.floor(timeNow / baseNumber);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(baseNumber);
        });
        return uuid;
    }
    catch (e) {
        return '';
    }
}
function guid8() {
    let result = guid().substring(28);
    return result;
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_default_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_default_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_default_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_default_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_default_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 12 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 13 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 14 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 16 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 17 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default-background-color: #fff;\n  --default-color: #fff;\n  --default-border: 1px solid #eee;\n  --default-hover-border-color: #0a51a5;\n  --default-background-hover-color: #0a51a5;\n  --default-hover-color: #fff;\n  --default-font-size: .75em;\n  --default-font-family: Arial,\n      sans-serif;\n  --default-button-background-color: #eee;\n  --default-button-background-hover-color: #0a51a5;\n  --default-button-hover-color: #fff;\n  --default-button-background-title-color: #0a51a5;\n  --default-button-title-color: #fff;\n  --default-background-header-color: #0a51a5;\n  --default-header-color: #fff;\n  --default-active-color: #0a51a5;\n  --default-border-radius: 5px 5px;\n  --default-box-shadow: #3c40434d 0px 1px 2px 0px, #3c404326 0px 1px 3px 1px;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  position: absolute;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 10px;\n}\n\nbody {\n  font-family: var(--default-font-family);\n  font-size: var(--default-font-size);\n  background-color: var(--default-background-color);\n}\n\nbutton {\n  font-size: var(--default-font-size);\n  padding: 6px 8px;\n  border: none;\n  background-color: var(--default-button-background-color);\n  border-radius: var(--default-border-radius);\n}\nbutton:hover:enabled {\n  cursor: pointer;\n  color: var(--default-button-hover-color);\n  background-color: var(--default-button-background-hover-color);\n  transition: 0.1s;\n}\n\n@media (min-width: 720px) {\n  :root {\n    --default-font-size: 10pt;\n  }\n  button {\n    font-size: var(--default-font-size);\n  }\n}", "",{"version":3,"sources":["webpack://./src/default-styles.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;EAEA,qBAAA;EAEA,gCAAA;EAEA,qCAAA;EAEA,yCAAA;EACA,2BAAA;EACA,0BAAA;EACA;gBAAA;EAGA,uCAAA;EACA,gDAAA;EACA,kCAAA;EAEA,gDAAA;EACA,kCAAA;EAEA,0CAAA;EACA,4BAAA;EAEA,+BAAA;EAEA,gCAAA;EAEA,0EAAA;AATJ;;AAYA;EACI,UAAA;EACA,WAAA;EACA,kBAAA;AATJ;;AAYA;EACI,gBAAA;EACA,mBAAA;AATJ;;AAYA;EACI,uCAAA;EACA,mCAAA;EACA,iDAAA;AATJ;;AAYA;EACI,mCAAA;EACA,gBAAA;EACA,YAAA;EACA,wDAAA;EACA,2CAAA;AATJ;AAWI;EACI,eAAA;EACA,wCAAA;EACA,8DAAA;EACA,gBAAA;AATR;;AAaA;EACI;IACI,yBAAA;EAVN;EAaE;IACI,mCAAA;EAXN;AACF","sourcesContent":[":root {\r\n    --default-background-color: #fff;\r\n    // --default-background-color: #f0f0f0;\r\n    --default-color: #fff;\r\n\r\n    --default-border: 1px solid #eee;\r\n\r\n    --default-hover-border-color: #0a51a5;\r\n\r\n    --default-background-hover-color: #0a51a5;\r\n    --default-hover-color: #fff;\r\n    --default-font-size: .75em;\r\n    --default-font-family: Arial,\r\n        sans-serif;\r\n\r\n    --default-button-background-color: #eee;\r\n    --default-button-background-hover-color: #0a51a5;\r\n    --default-button-hover-color: #fff;\r\n\r\n    --default-button-background-title-color: #0a51a5;\r\n    --default-button-title-color: #fff;\r\n\r\n    --default-background-header-color: #0a51a5;\r\n    --default-header-color: #fff;\r\n\r\n    --default-active-color: #0a51a5;\r\n\r\n    --default-border-radius: 5px 5px;\r\n\r\n    --default-box-shadow: #3c40434d 0px 1px 2px 0px, #3c404326 0px 1px 3px 1px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n    height: 0px;\r\n    position: absolute;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #aaa;\r\n    border-radius: 10px;\r\n}\r\n\r\nbody {\r\n    font-family: var(--default-font-family);\r\n    font-size: var(--default-font-size);\r\n    background-color: var(--default-background-color);\r\n}\r\n\r\nbutton {\r\n    font-size: var(--default-font-size);\r\n    padding: 6px 8px;\r\n    border: none;\r\n    background-color: var(--default-button-background-color);\r\n    border-radius: var(--default-border-radius);\r\n\r\n    &:hover:enabled {\r\n        cursor: pointer;\r\n        color: var(--default-button-hover-color);\r\n        background-color: var(--default-button-background-hover-color);\r\n        transition: .1s;\r\n    }\r\n}\r\n\r\n@media (min-width: 720px) {\r\n    :root {\r\n        --default-font-size: 10pt;\r\n    }\r\n\r\n    button {\r\n        font-size: var(--default-font-size);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 20 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _ui_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);




function App(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.guid8)();
    const apiUrl = props.apiUrl ?? window.location.href;
    const headers = {
        "j-url": localStorage.getItem('j-url'),
        "j-email": localStorage.getItem('j-email'),
        "j-token": localStorage.getItem('j-token')
    };
    let className = _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].App;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_List__WEBPACK_IMPORTED_MODULE_3__["default"], { id: `${thisId}-list`, apiUrl: apiUrl, headers: headers }) }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 23 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".IMqM {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.Lkzm {\n  position: relative;\n  background-color: blue;\n}\n.r6Bq {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.D7JI {\n  padding: 0 !important;\n  padding-right: 5px !important;\n}\n.fU2o span {\n  width: 100% !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.gmxo {\n  pointer-events: none;\n}\n.aYAi {\n  right: 0;\n  position: absolute;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 5px;\n}\n.V1RD {\n  top: 0;\n  left: 0;\n}", "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AACJ;AACI;EACI,kBAAA;EACA,sBAAA;AACR;AAGQ;EACI,gBAAA;EACA,iBAAA;AADZ;AAGY;EACI,qBAAA;EAEA,6BAAA;AAFhB;AAKoB;EACI,sBAAA;EACA,iBAAA;EACA,kBAAA;AAHxB;AAWI;EACI,oBAAA;AATR;AAYI;EACI,QAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,YAAA;AAVR;AAaI;EACI,MAAA;EACA,OAAA;AAXR","sourcesContent":[".App {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    &-content {\r\n        position: relative;\r\n        background-color: blue;\r\n    }\r\n\r\n    &-footer {\r\n        &-name {\r\n            margin-left: 5px;\r\n            margin-right: 5px;\r\n\r\n            &-agencies {\r\n                padding: 0 !important;\r\n                // padding-left: 5px !important;\r\n                padding-right: 5px !important;\r\n\r\n                &-item {\r\n                    span {\r\n                        width: 100% !important;\r\n                        padding-left: 8px;\r\n                        padding-right: 8px;\r\n                    }\r\n\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-logo {\r\n        pointer-events: none;\r\n    }\r\n\r\n    &-component-name {\r\n        right: 0;\r\n        position: absolute;\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        padding: 5px;\r\n    }\r\n\r\n    &-layout {\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": "IMqM",
	"App-content": "Lkzm",
	"App-footer-name": "r6Bq",
	"App-footer-name-agencies": "D7JI",
	"App-footer-name-agencies-item": "fU2o",
	"App-logo": "gmxo",
	"App-component-name": "aYAi",
	"App-layout": "V1RD"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_forms_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _components_forms_filters_ButtonFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _components_forms_filters_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _components_forms_filters_LabelFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _components_forms_filters_OptionsFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _components_forms_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _components_forms_table_PagingTableV2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);
/* harmony import */ var _components_forms_toolstrip_ToolStripMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56);
/* harmony import */ var _components_router_methods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var _extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60);
/* harmony import */ var _List_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61);
/* harmony import */ var _WorkLog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63);
















function List(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)();
    const [boards, setBoards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [sprints, setSprints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [tableKey, setTableKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [usageTableKey, setUsageTableKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const jUrl = localStorage.getItem('j-url');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        reload();
    }, []);
    function reload() {
        try {
            loadBoards();
        }
        catch (e) {
        }
    }
    function loadBoards() {
        try {
            setBoards(undefined);
            setSprints(undefined);
            setProjects(undefined);
            const url = `${props.apiUrl}/api/jira/getallboards`;
            (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.getAsync)(url, props.headers, async (response) => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setBoards(rObjs.map((b) => { return { id: b.ID, name: b.Name, checked: false }; }));
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applyBoardClick(itemObjs) {
        try {
            boards?.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                boards.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
                loadSprints(id);
                loadProjects(id);
            }
        }
        catch (e) {
        }
    }
    function loadSprints(boardId) {
        try {
            const url = `${props.apiUrl}/api/jira/getsprints?boardId=${boardId}`;
            (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.getAsync)(url, props.headers, async (response) => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setSprints(rObjs.map((b, idx) => { return { id: b.ID, name: b.Name, checked: idx == 0 }; }));
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applySprintClick(itemObjs) {
        try {
            sprints?.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                sprints?.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
            }
        }
        catch (e) {
        }
    }
    function loadProjects(boardId) {
        try {
            const url = `${props.apiUrl}/api/jira/getprojects?boardId=${boardId}`;
            (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.getAsync)(url, props.headers, async (response) => {
                if (response.status == 200) {
                    const rObjs = await response.json();
                    setProjects(rObjs.map((b, idx) => { return { id: b.ID, name: b.Name, checked: idx == 0 }; }));
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    function applyProjectClick(itemObjs) {
        try {
            projects.forEach(ite => {
                ite.checked = false;
            });
            if (itemObjs?.length > 0) {
                const id = itemObjs[0].id;
                projects.forEach(ite => {
                    if (ite.id.toString() === id) {
                        ite.checked = true;
                    }
                });
            }
        }
        catch (e) {
        }
    }
    function onSearchClick(evt) {
        setTableKey((0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)());
    }
    function fetchData(pageSize, pageNumber) {
        try {
            if (!tableKey) {
                return;
            }
            pageSize = pageSize;
            const sprintObj = sprints.find(ite => ite.checked);
            const projectObj = projects.find(ite => ite.checked);
            if (sprintObj || projectObj) {
                let url = `${props.apiUrl}/api/jira/getstoryinsprint?includeSubtasks`;
                if (sprintObj) {
                    url += `&sprintId=${sprintObj.id}`;
                }
                if (projectObj) {
                    url += `&pjKey=${projectObj.id}`;
                }
                const taskRowSelector = (task, itemIdx, rowIdx, parentIdx, hasWorklogs) => {
                    const rowObj = {
                        id: task.Key,
                        className: parentIdx > 0 ? _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-row-subtask"] : _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-row-story"],
                        cells: [
                            { text: parentIdx > 0 ? `${parentIdx}.${itemIdx + rowIdx}` : `${itemIdx + rowIdx}`, align: 'center' },
                            { text: `${task.Key}`, align: 'center', element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-task-link"], target: "_blank", href: `${jUrl}/browse/${task.Key}`, children: task.Key })) },
                            {
                                element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { contentEditable: true, className: parentIdx > 0 ? _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-summary"] : _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-psummary"], defaultValue: task.Summary, children: task.Summary }))
                            },
                            { text: `${task.Assignee}`, },
                            { text: `${task.Status}`, align: 'center' },
                            { align: 'center', element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-sps"], type: "number", defaultValue: task.StoryPoints }) })) },
                            { align: "center", element: hasWorklogs ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WorkLog__WEBPACK_IMPORTED_MODULE_15__["default"], { id: (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)(), delayMiliseconds: 500, storyPoints: task.StoryPoints, headers: props.headers, apiUrl: props.apiUrl, issueKey: task.Key })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})) }
                        ]
                    };
                    return rowObj;
                };
                const convertData = async (response) => {
                    if (response.status === 200) {
                        const data = await response.json();
                        const rIdx = pageSize * (pageNumber - 1) + 1;
                        const records = [];
                        [...data].forEach((ite, idx) => {
                            records.push(taskRowSelector(ite.MainTask, idx, rIdx, 0, !ite.HasSubTasks));
                            if (ite.SubTasks?.length > 0) {
                                [...ite.SubTasks].forEach((sIte, sIdx) => {
                                    records.push(taskRowSelector(sIte, sIdx, 1, idx + 1, true));
                                });
                            }
                        });
                        const result = {
                            records: records
                        };
                        return result;
                    }
                    else if (response.status === 401) {
                        (0,_components_router_methods__WEBPACK_IMPORTED_MODULE_11__.navigate)("/jira/login");
                    }
                    else {
                        return {
                            totalPages: 0,
                            totalRecords: 0,
                            pageNumber: 0,
                            records: []
                        };
                    }
                };
                return (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.getAsync)(url, props.headers, convertData, async (err) => {
                    if (err.status === 401) {
                        (0,_components_router_methods__WEBPACK_IMPORTED_MODULE_11__.navigate)('/jira/login');
                    }
                    return {
                        totalPages: 0,
                        totalRecords: 0,
                        pageNumber: 0,
                        records: []
                    };
                }, () => setUsageTableKey((0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)()));
            }
        }
        catch (e) {
        }
        return Promise.resolve({
            totalPages: 0,
            totalRecords: 0,
            pageNumber: 0,
            records: []
        });
    }
    function fetchUsageData(pageSize, pageNumber) {
        try {
            if (!tableKey) {
                return;
            }
            pageSize = pageSize;
            const url = `${props.apiUrl}/api/jira/getusageinsprint`;
            const convertData = async (response) => {
                if (response.status === 200) {
                    const data = await response.json();
                    const rIdx = pageSize * (pageNumber - 1) + 1;
                    const records = [];
                    [...data].forEach((ite, idx) => {
                        const assigneeRowObj = {
                            className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list-row-assignee"],
                            cells: [
                                // { text: `${idx + 1}`, align: 'center' },
                                { text: `${ite.Assignee}`, colSpan: 2 },
                                { text: `${ite.Total}`, align: 'center' },
                                { text: `` },
                            ]
                        };
                        records.push(assigneeRowObj);
                        if (ite.Tasks?.length > 0) {
                            [...ite.Tasks].forEach(t => {
                                if (t.Key) {
                                    records.push({
                                        className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list-row-ptask"],
                                        cells: [
                                            // { text: ``, align: 'center' },
                                            { align: 'center', element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-task-link"], target: "_blank", href: `${jUrl}/browse/${t.Key}`, children: t.Key })) },
                                            { element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { contentEditable: !(t.Tasks?.length > 0), className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-psummary"], children: t.Summary })), text: `${t.Summary}`, },
                                            {
                                                align: 'center',
                                                element: t.Tasks?.length > 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-sps"], type: "number", defaultValue: t.StoryPoints }) }))
                                            },
                                            {
                                                align: "center",
                                                element: t.Tasks?.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WorkLog__WEBPACK_IMPORTED_MODULE_15__["default"], { id: (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)(), delayMiliseconds: 500, storyPoints: t.StoryPoints, headers: props.headers, apiUrl: props.apiUrl, issueKey: t.Key }))
                                            }
                                        ]
                                    });
                                    if (t.Tasks?.length > 0) {
                                        [...t.Tasks].forEach((st, stIdx) => {
                                            records.push({
                                                className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list-row-task"],
                                                cells: [
                                                    // { text: ``, align: 'center' },
                                                    { align: 'center', element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-task-link"], target: "_blank", href: `${jUrl}/browse/${st.Key}`, children: st.Key })) },
                                                    { element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { contentEditable: true, className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-summary"], children: st.Summary })) },
                                                    { element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-txt-sps"], type: "number", defaultValue: st.StoryPoints }) })), align: 'center' },
                                                    { align: "center", element: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WorkLog__WEBPACK_IMPORTED_MODULE_15__["default"], { id: (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)(), delayMiliseconds: 500, storyPoints: st.StoryPoints, headers: props.headers, apiUrl: props.apiUrl, issueKey: st.Key })) }
                                                ]
                                            });
                                        });
                                    }
                                }
                            });
                        }
                        // records.push(taskRowSelector(ite, 0, 0, 0));
                    });
                    const result = {
                        records: records
                    };
                    return result;
                }
                else if (response.status === 401) {
                    (0,_components_router_methods__WEBPACK_IMPORTED_MODULE_11__.navigate)("/jira/login");
                }
                else {
                    return {
                        totalPages: 0,
                        totalRecords: 0,
                        pageNumber: 0,
                        records: []
                    };
                }
            };
            return (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.getAsync)(url, props.headers, convertData, async (err) => {
                if (err.status === 401) {
                    (0,_components_router_methods__WEBPACK_IMPORTED_MODULE_11__.navigate)('/jira/login');
                }
                return {
                    totalPages: 0,
                    totalRecords: 0,
                    pageNumber: 0,
                    records: []
                };
            });
        }
        catch (e) {
        }
        return Promise.resolve({
            totalPages: 0,
            totalRecords: 0,
            pageNumber: 0,
            records: []
        });
    }
    function onUpdateStory() {
        const dUpdateStory = {
            zIndex: 1,
            id: (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)(),
            body: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-dialog-updatestory"], children: "Are you sure?" })),
            title: 'Update stories',
            confirmButtons: _components_forms_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__.ConfirmButtons.YesNo,
            onAcceptHandler: updateStory
        };
        (0,_components_forms_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__.openDialog)(dUpdateStory);
    }
    function updateStory() {
        try {
            var taskObjs = [];
            var rowClassNames = [_List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-row-story"], _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list-row-subtask"]];
            rowClassNames.forEach(rowClassName => {
                try {
                    var taskRowObjs = document.getElementsByClassName(rowClassName);
                    if (taskRowObjs?.length > 0) {
                        [...taskRowObjs].forEach((rowObj, rIdx) => {
                            try {
                                const key = rowObj.childNodes[2].innerText;
                                const summary = rowObj.childNodes[3].innerText;
                                let storypoints = 0;
                                try {
                                    storypoints = parseInt(rowObj.childNodes[6].getElementsByTagName("input")[0].value);
                                }
                                catch (e) {
                                }
                                if (storypoints > 0) {
                                    taskObjs.push({ key, summary, storypoints });
                                }
                            }
                            catch (e) {
                            }
                        });
                    }
                }
                catch (e) {
                }
            });
            if (taskObjs?.length > 0) {
                let url = `${props.apiUrl}/api/jira/issue/update`;
                (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.postAsync)(url, taskObjs, props.headers, async (response) => {
                    if (response.status === 200) {
                    }
                }, undefined, () => setTableKey((0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)()));
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    function onUpdateStorage() {
        const dUpdateStory = {
            zIndex: 1,
            id: (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)(),
            body: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-dialog-updatestorage"], children: "Are you sure?" })),
            title: 'Update storages',
            confirmButtons: _components_forms_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__.ConfirmButtons.YesNo,
            onAcceptHandler: updateStorage
        };
        (0,_components_forms_dialog_Dialog__WEBPACK_IMPORTED_MODULE_2__.openDialog)(dUpdateStory);
    }
    function updateStorage() {
        try {
            var taskObjs = [];
            var rowClassNames = [_List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list-row-ptask"], _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list-row-task"]];
            rowClassNames.forEach(rowClassName => {
                try {
                    var taskRowObjs = document.getElementsByClassName(rowClassName);
                    if (taskRowObjs?.length > 0) {
                        [...taskRowObjs].forEach((rowObj, rIdx) => {
                            try {
                                const key = rowObj.childNodes[0].innerText;
                                const summary = rowObj.childNodes[1].innerText;
                                let storypoints = 0;
                                try {
                                    storypoints = parseInt(rowObj.childNodes[2].getElementsByTagName("input")[0].value);
                                }
                                catch (e) {
                                }
                                if (storypoints > 0) {
                                    taskObjs.push({ key, summary, storypoints });
                                }
                            }
                            catch (e) {
                            }
                        });
                    }
                }
                catch (e) {
                }
            });
            if (taskObjs?.length > 0) {
                let url = `${props.apiUrl}/api/jira/issue/update`;
                (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_13__.postAsync)(url, taskObjs, props.headers, async (response) => {
                    if (response.status === 200) {
                    }
                }, undefined, () => setTableKey((0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_12__.guid8)()));
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    let className = _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].List;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        const filterElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_forms_filters_Filters__WEBPACK_IMPORTED_MODULE_4__["default"], { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-layout-header"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_LabelFilter__WEBPACK_IMPORTED_MODULE_5__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { title: 'Click to refresh', children: "Filters:" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_ButtonFilter__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: reload, children: "\u21BB" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_OptionsFilter__WEBPACK_IMPORTED_MODULE_6__["default"], { id: `${thisId}-ft-board`, text: `Board`, options: boards, applyClick: (evt, itemObjs) => applyBoardClick(itemObjs) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_OptionsFilter__WEBPACK_IMPORTED_MODULE_6__["default"], { id: `${thisId}-ft-sprint`, text: `Sprint`, options: sprints, applyClick: (evt, itemObjs) => applySprintClick(itemObjs) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_OptionsFilter__WEBPACK_IMPORTED_MODULE_6__["default"], { id: `${thisId}-ft-project`, text: `Project`, options: projects, applyClick: (evt, itemObjs) => applyProjectClick(itemObjs) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_filters_ButtonFilter__WEBPACK_IMPORTED_MODULE_3__["default"], { text: `Search`, onClick: onSearchClick })] }));
        const jAccountId = sessionStorage.getItem('j-accountid');
        const jName = sessionStorage.getItem('j-name');
        let footerElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-layout-footer"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Account:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-layout-footer-account"], children: jName }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => (0,_components_router_methods__WEBPACK_IMPORTED_MODULE_11__.navigate)('/jira/login'), children: "Logout" }) })] }));
        let tableHeaders = ["No.", "Key", "Summary", "Assinee", "Status", "Story Points", "Work Logs"];
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_forms_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], { header: filterElement, footer: footerElement, className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-layout"], maxHeight: 900, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-container-stories"] + (mode == 0 ? "" : " " + _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-container-stories-hide"]), id: `${thisId}-story-container`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_forms_toolstrip_ToolStripMenu__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Menu" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Switch to usage mode", onClick: () => setMode(1) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Update", onClick: onUpdateStory })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_table_PagingTableV2__WEBPACK_IMPORTED_MODULE_8__["default"], { id: `${thisId}-table-contents`, headers: tableHeaders, fetchData: req => fetchData(req.pageSize, req.pageNumber), noPaging: true, className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-list"], onInitMessage: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Please select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Filters" }), " then click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Search" })] })), includeCheckbox: true, height: '90%' }, tableKey)] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-container-usages"] + (mode == 1 ? "" : " " + _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-container-usages-hide"]), id: `${thisId}-usage-container`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_forms_toolstrip_ToolStripMenu__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Menu" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Switch to story mode", onClick: () => setMode(0) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_toolstrip_ToolStripItem__WEBPACK_IMPORTED_MODULE_9__["default"], { text: "Update", onClick: onUpdateStorage })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_table_PagingTableV2__WEBPACK_IMPORTED_MODULE_8__["default"], { id: `${thisId}-table-usage`, headers: ["Key", "Summary", "Story Points", "Work Logs"], fetchData: req => fetchUsageData(req.pageSize, req.pageNumber), noPaging: true, className: _List_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"]["List-usage-list"], onInitMessage: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Please select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Filters" }), " then click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Search" })] })), height: '90%' }, usageTableKey)] })] }) }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmButtons": () => (/* binding */ ConfirmButtons),
/* harmony export */   "DialogResult": () => (/* binding */ DialogResult),
/* harmony export */   "closeDialog": () => (/* binding */ closeDialog),
/* harmony export */   "closeProcessing": () => (/* binding */ closeProcessing),
/* harmony export */   "openDialog": () => (/* binding */ openDialog),
/* harmony export */   "openFile": () => (/* binding */ openFile),
/* harmony export */   "openProcessing": () => (/* binding */ openProcessing)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);






var ConfirmButtons;
(function (ConfirmButtons) {
    ConfirmButtons[ConfirmButtons["None"] = 0] = "None";
    ConfirmButtons[ConfirmButtons["YesNo"] = 1] = "YesNo";
    ConfirmButtons[ConfirmButtons["YesNoCancel"] = 2] = "YesNoCancel";
    ConfirmButtons[ConfirmButtons["Ok"] = 3] = "Ok";
    ConfirmButtons[ConfirmButtons["OkClose"] = 4] = "OkClose";
    ConfirmButtons[ConfirmButtons["Close"] = 5] = "Close";
    ConfirmButtons[ConfirmButtons["OkCancel"] = 6] = "OkCancel";
    ConfirmButtons[ConfirmButtons["Cancel"] = 7] = "Cancel";
})(ConfirmButtons || (ConfirmButtons = {}));
var DialogResult;
(function (DialogResult) {
    DialogResult[DialogResult["Close"] = 0] = "Close";
    DialogResult[DialogResult["Yes"] = 1] = "Yes";
    DialogResult[DialogResult["No"] = 2] = "No";
    DialogResult[DialogResult["Cancel"] = 3] = "Cancel";
    DialogResult[DialogResult["Ok"] = 1] = "Ok";
})(DialogResult || (DialogResult = {}));
function closeModal(modalId) {
    try {
        if (modalId) {
            const modalDiv = document.getElementById(modalId);
            if (modalDiv) {
                modalDiv.remove();
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}
function actionClickHandler(evt, onPreClick, onClick, dialogId, result) {
    try {
        let accepted = true;
        if (onPreClick != undefined) {
            accepted = onPreClick(evt);
        }
        if (accepted) {
            closeModal(dialogId);
            if (onClick != undefined) {
                onClick(evt);
            }
        }
    }
    catch (e) {
        console.log(e);
    }
    return result;
}
function yesClickHandler(evt, onClick, dialogId, onPreClick) {
    return actionClickHandler(evt, onPreClick, onClick, dialogId, DialogResult.Yes);
}
function noClickHandler(evt, onClick, dialogId, onPreClick) {
    return actionClickHandler(evt, onPreClick, onClick, dialogId, DialogResult.No);
}
function cancelClickHandler(evt, onClick, dialogId, onPreClick) {
    return actionClickHandler(evt, onPreClick, onClick, dialogId, DialogResult.Cancel);
}
async function openDialog(options) {
    let result = DialogResult.Close;
    try {
        const dialogId = options?.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
        const butId = `${dialogId}-but`;
        const dialogDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateTag)(dialogId, "div", undefined, true);
        const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(dialogDiv);
        let confirmButtonGroup = undefined;
        if (options?.confirmButtons === ConfirmButtons.YesNo) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => yesClickHandler(evt, options?.onAcceptHandler, dialogId, options?.onPreAcceptHandler), children: "Yes" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => noClickHandler(evt, options?.onDenyHandler, dialogId, options?.onPreDenyHandler), children: "No" })] }));
        }
        else if (options?.confirmButtons === ConfirmButtons.YesNoCancel) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => yesClickHandler(evt, options?.onAcceptHandler, dialogId, options?.onPreAcceptHandler), children: "Yes" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => noClickHandler(evt, options?.onDenyHandler, dialogId, options?.onPreDenyHandler), children: "No" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => cancelClickHandler(evt, options?.onCancelHandler, dialogId, options?.onPreCancelHandler), children: "Cancel" })] }));
        }
        else if (options?.confirmButtons === ConfirmButtons.Ok) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => yesClickHandler(evt, options?.onAcceptHandler, dialogId, options?.onPreAcceptHandler), children: "Ok" }) }));
        }
        else if (options?.confirmButtons === ConfirmButtons.OkClose) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => yesClickHandler(evt, options?.onAcceptHandler, dialogId, options?.onPreAcceptHandler), children: "Ok" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => closeModal(dialogId), children: "Close" })] }));
        }
        else if (options?.confirmButtons === ConfirmButtons.OkCancel) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => yesClickHandler(evt, options?.onAcceptHandler, dialogId, options?.onPreAcceptHandler), children: "Ok" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => cancelClickHandler(evt, options?.onCancelHandler, dialogId, options?.onPreCancelHandler), children: "Cancel" })] }));
        }
        else if (options?.confirmButtons === ConfirmButtons.Cancel) {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => cancelClickHandler(evt, options?.onCancelHandler, dialogId, options?.onPreCancelHandler), children: "Cancel" }) }));
        }
        else if (options?.confirmButtons === ConfirmButtons.None) {
            confirmButtonGroup = (undefined);
        }
        else {
            confirmButtonGroup = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: butId, className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => closeModal(dialogId), children: "Close" }) }));
        }
        let contentsClassName = _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].contents;
        if (options.className) {
            contentsClassName += " " + options.className;
        }
        let bodyClassName = _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body;
        if (options.bodyClassName) {
            bodyClassName += " " + options.bodyClassName;
        }
        const zIndex = options.zIndex ?? 1;
        root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dialog, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].background, style: { zIndex: zIndex } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].main, style: { zIndex: zIndex + 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: contentsClassName, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title, children: options?.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: bodyClassName, children: options?.body }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonGroup, children: confirmButtonGroup })] }) })] }));
        await (0,_extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__.sleep)(1);
        (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(butId)?.focus();
    }
    catch (e) {
        console.log(e);
    }
    return result;
}
function openProcessing(options) {
    try {
        const zIndex = options.zIndex ?? 1;
        const dialogId = options?.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
        const dialogDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateTag)(dialogId, "div");
        const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(dialogDiv);
        let cancelButton = undefined;
        if (true) {
            cancelButton = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, onClick: evt => cancelClickHandler(evt, options?.onCancelHandler, dialogId, undefined), children: "Cancel" }) });
        }
        root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dialog, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].background, style: { zIndex: zIndex } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].main, style: { zIndex: zIndex + 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].contents, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title, children: options?.title ?? '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body, children: "Processing..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonGroup, children: cancelButton })] }) })] }));
    }
    catch (e) {
        console.log(e);
    }
}
function closeProcessing(id) {
    closeModal(id);
}
function closeDialog(id) {
    closeModal(id);
}
function openFile(opts) {
    const input = document.createElement("input");
    input.type = "file";
    input.hidden = true;
    input.multiple = opts?.multiple;
    if (opts.isFolderPicker) {
        input.setAttribute("webkitdirectory", "true");
        input.setAttribute("directory", "");
    }
    if (opts.extensions?.length > 0) {
        input.accept = opts.extensions.join(",");
    }
    input.onchange = _ => {
        if (input.files?.length > 0 && opts.onSelected) {
            opts.onSelected({ files: [...input.files] });
        }
    };
    input.click();
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildren": () => (/* binding */ getChildren),
/* harmony export */   "getElementById": () => (/* binding */ getElementById),
/* harmony export */   "getOrCreateDiv": () => (/* binding */ getOrCreateDiv),
/* harmony export */   "getOrCreateTag": () => (/* binding */ getOrCreateTag),
/* harmony export */   "isInElement": () => (/* binding */ isInElement),
/* harmony export */   "isInElementV2": () => (/* binding */ isInElementV2),
/* harmony export */   "keydownNumber": () => (/* binding */ keydownNumber),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "showElementRelative": () => (/* binding */ showElementRelative),
/* harmony export */   "showElementRelativeTarget": () => (/* binding */ showElementRelativeTarget),
/* harmony export */   "updateTitle": () => (/* binding */ updateTitle)
/* harmony export */ });
/* harmony import */ var _HashFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _ThreadExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function getOrCreateDiv(id, parentContaner) {
    try {
        if (!id) {
            id = (0,_HashFuncs__WEBPACK_IMPORTED_MODULE_0__.guid8)();
        }
        let div = document.getElementById(id);
        if (!div) {
            div = document.createElement("div");
            div.id = id;
            if (parentContaner) {
                parentContaner.appendChild(div);
            }
            else {
                document.body.appendChild(div);
            }
        }
        return div;
    }
    catch (e) {
    }
    return null;
}
function getOrCreateTag(id, tagName, parentContaner, remove) {
    try {
        if (!id) {
            id = (0,_HashFuncs__WEBPACK_IMPORTED_MODULE_0__.guid8)();
        }
        let div = document.getElementById(id);
        if (div) {
            if (remove) {
                div.remove();
                div = undefined;
            }
        }
        if (!div) {
            div = document.createElement(tagName);
            div.id = id;
            if (parentContaner) {
                parentContaner.appendChild(div);
            }
            else {
                document.body.appendChild(div);
            }
            div.focus();
        }
        return div;
    }
    catch (e) {
    }
    return null;
}
function removeElement(id) {
    try {
        const elementObj = document.getElementById(id);
        if (elementObj) {
            elementObj.remove();
        }
    }
    catch (e) {
    }
}
function showElementRelative(element, evt, position, deltaMarginValue) {
    try {
        // await sleep(1);
        var rect = evt.currentTarget.getBoundingClientRect();
        var elementRect = element.getBoundingClientRect();
        let posX = rect.x;
        let posY = rect.y + rect.height + 5;
        if (position === "right") {
            posX = rect.right + 2 + deltaMarginValue;
            posY = rect.top;
        }
        const screenHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
        const screenWidth = screen.availWidth - (window.outerWidth - window.innerWidth);
        if (rect.bottom + elementRect.height >= screenHeight) {
            posY = rect.bottom - elementRect.height - rect.height - 5;
            if (position === "right") {
                posY = posY + rect.height + 5 + deltaMarginValue;
            }
        }
        if (rect.right + elementRect.width >= screenWidth) {
            posX = rect.right - elementRect.width;
            if (position === "right") {
                posX = posX - elementRect.width - 2 - deltaMarginValue;
            }
        }
        if (posX < 0) {
            posX = 0;
        }
        if (posY < 0) {
            posY = 0;
        }
        Object.assign(element.style, {
            left: `${posX}px`,
            top: `${posY}px`,
        });
    }
    catch (e) {
    }
}
async function showElementRelativeTarget(element, target, position) {
    try {
        await (0,_ThreadExtension__WEBPACK_IMPORTED_MODULE_1__.sleep)(1);
        let targetObj = undefined;
        const targetType = typeof (target);
        if (targetType == "object") {
            try {
                targetObj = target;
            }
            catch (e) {
            }
        }
        if (!targetObj) {
            targetObj = document.getElementById(target);
        }
        if (targetObj) {
            var rect = targetObj.getBoundingClientRect();
            var elementRect = element.getBoundingClientRect();
            let posX = rect.x;
            let posY = rect.y + rect.height + 5;
            if (position === "right") {
                posX = rect.right + 2;
                posY = rect.top;
            }
            const screenHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
            const screenWidth = screen.availWidth - (window.outerWidth - window.innerWidth);
            if (rect.bottom + elementRect.height >= screenHeight) {
                posY = rect.bottom - elementRect.height - rect.height - 5;
                if (position === "right") {
                    posY = posY + rect.height + 5;
                }
            }
            if (rect.right + elementRect.width >= screenWidth) {
                posX = Math.min(rect.right - elementRect.width, rect.left);
                if (position === "right") {
                    posX = posX - elementRect.width - 2;
                }
            }
            if (posX < 0) {
                posX = 0;
            }
            if (posY < 0) {
                posY = 0;
            }
            Object.assign(element.style, {
                left: `${posX}px`,
                top: `${posY}px`,
            });
        }
    }
    catch (e) {
    }
}
function getElementById(id) {
    return document.getElementById(id);
}
function updateTitle(title) {
    return document.title = title;
}
function isInElement(evt, element) {
    const rect = element.getBoundingClientRect();
    return evt.clientX >= rect.left && evt.clientX <= rect.right && evt.clientY >= rect.top && evt.clientY <= rect.bottom;
}
function isInElementV2(evt, element) {
    try {
        const rect = element.getBoundingClientRect();
        return evt.clientX >= rect.left && evt.clientX <= rect.right && evt.clientY >= rect.top && evt.clientY <= rect.bottom;
    }
    catch (e) {
        console.log(e);
    }
    return false;
}
function getChildren(props) {
    let result = [];
    try {
        if (props.children) {
            if (Array.isArray(props.children)) {
                Array.from(props.children).forEach((ite) => result.push(ite));
            }
            if (result.length == 0) {
                result.push(props.children);
            }
        }
    }
    catch (e) {
    }
    return result;
}
function keydownNumber(evt, maxLength) {
    try {
        const keyCode = evt.which;
        if (keyCode === 0 || keyCode === 37 || keyCode === 39 || keyCode === 8 || keyCode === 9) {
            return;
        }
        else if (keyCode === 190 || keyCode === 110) {
            if (evt.currentTarget.value.indexOf(evt.key) >= 0) {
                evt.preventDefault();
            }
        }
        else if (keyCode == 47) {
            evt.preventDefault();
        }
        else if (keyCode < 96 && (keyCode < 48 || keyCode > 56)) {
            evt.preventDefault();
        }
        else if (keyCode < 96 || keyCode > 105) {
            evt.preventDefault();
        }
        else {
            if (maxLength > 0) {
                if (evt.currentTarget.value.length > maxLength) {
                    evt.preventDefault();
                }
            }
        }
    }
    catch (e) {
    }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
function sleep(ms, value) {
    return new Promise((resolver) => setTimeout(() => {
        resolver(value);
    }, ms));
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 29 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sJfA .eFjg, .sJfA .xMmL {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #aaa;\n  opacity: 0.7;\n}\n.sJfA .xMmL {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  opacity: 1;\n  position: absolute;\n}\n.sJfA .xMmL .KIUr {\n  position: absolute;\n  background-color: #fff;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px 5px;\n}\n.sJfA .xMmL .KIUr .xEZ_ {\n  min-height: 30px;\n  background-color: var(--default-button-background-title-color);\n  color: var(--default-button-title-color);\n  width: 100%;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sJfA .xMmL .KIUr .snSH {\n  min-height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-top: auto;\n}\n.sJfA .xMmL .KIUr .FGrH {\n  min-height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-top: auto;\n}\n.sJfA .xMmL .KIUr .FGrH .Ddm6 {\n  min-width: 70px;\n  text-align: center;\n  border: 1px solid var(--default-border-color);\n  padding: 5pt;\n  margin: 5pt;\n  cursor: pointer;\n  border-radius: 5px 5px;\n  background-color: var(--default-button-background-color);\n}\n.sJfA .xMmL .KIUr .FGrH .Ddm6:hover {\n  background-color: var(--default-button-background-hover-color);\n  color: var(--default-button-hover-color);\n}", "",{"version":3,"sources":["webpack://./src/components/forms/dialog/Dialog.module.scss"],"names":[],"mappings":"AACI;EACI,eAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,YAAA;AAAR;AAGI;EAEI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,6BAAA;EACA,UAAA;EACA,kBAAA;AAFR;AAIQ;EACI,kBAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AAFZ;AAIY;EACI,gBAAA;EACA,8DAAA;EACA,wCAAA;EACA,WAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAFhB;AAKY;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAHhB;AAMY;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAJhB;AAMgB;EACI,eAAA;EACA,kBAAA;EACA,6CAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,wDAAA;AAJpB;AAMoB;EACI,8DAAA;EACA,wCAAA;AAJxB","sourcesContent":[".dialog {\r\n    .background {\r\n        position: fixed;\r\n        left: 0;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #aaa;\r\n        opacity: .7;\r\n    }\r\n\r\n    .main {\r\n        @extend .background;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: transparent;\r\n        opacity: 1;\r\n        position: absolute;\r\n\r\n        .contents {\r\n            position: absolute;\r\n            background-color: #fff;\r\n            min-width: 300px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            border-radius: 5px 5px;\r\n\r\n            .title {\r\n                min-height: 30px;\r\n                background-color: var(--default-button-background-title-color);\r\n                color: var(--default-button-title-color);\r\n                width: 100%;\r\n                margin: 0;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n            }\r\n\r\n            .body {\r\n                min-height: 75px;\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                width: 100%;\r\n                margin-top: auto;\r\n            }\r\n\r\n            .buttonGroup {\r\n                min-height: 30px;\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                width: 100%;\r\n                margin-top: auto;\r\n\r\n                .button {\r\n                    min-width: 70px;\r\n                    text-align: center;\r\n                    border: 1px solid var(--default-border-color);\r\n                    padding: 5pt;\r\n                    margin: 5pt;\r\n                    cursor: pointer;\r\n                    border-radius: 5px 5px;\r\n                    background-color: var(--default-button-background-color);\r\n\r\n                    &:hover {\r\n                        background-color: var(--default-button-background-hover-color);\r\n                        color: var(--default-button-hover-color);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"dialog": "sJfA",
	"background": "eFjg",
	"main": "xMmL",
	"contents": "KIUr",
	"title": "xEZ_",
	"body": "snSH",
	"buttonGroup": "FGrH",
	"button": "Ddm6"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);




function ButtonFilter(props) {
    let id = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__.guid8)();
    let className = `${_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].FilterItem ?? ''} ${_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].ButtonFilter} ${props.children ? _ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["ButtonFilter-element"] : undefined}`;
    function onClick(evt) {
        try {
            if (props.onClick) {
                props.onClick(evt);
            }
        }
        catch (e) {
        }
    }
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: id, className: className, onClick: onClick, children: props.children ?? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content, children: props.text })) }, id));
        return contents;
    }
    catch (e) {
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonFilter);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 32 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".JQxu {\n  background-color: transparent;\n  cursor: pointer;\n  padding: 6px 6px;\n  min-width: 70px;\n  display: flex;\n  justify-content: center;\n  border: var(--default-border);\n  border-radius: 5px;\n  margin-left: 5px;\n  white-space: nowrap;\n}\n.JQxu:hover {\n  cursor: pointer;\n  border-color: #E5E5E5;\n  background-color: #f5f5f5;\n}\n._mWl {\n  flex-direction: column;\n  display: flex;\n  position: fixed;\n  min-width: 200px;\n  max-width: 300px;\n  box-shadow: 1px 1px 3px #aaaaaa;\n  background-color: #fff;\n  border-radius: 5px;\n  z-index: 2;\n}\n.bZNB {\n  display: none;\n}\n\n@media (min-width: 720px) {\n  ._mWl {\n    max-width: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/forms/filters/FilterItem.module.scss"],"names":[],"mappings":"AAAA;EACI,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EAEA,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,eAAA;EACA,qBAAA;EACA,yBAAA;AAAR;AAGI;EACI,sBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;AADR;AAGQ;EACI,aAAA;AADZ;;AAMA;EAEQ;IACI,eAAA;EAJV;AACF","sourcesContent":[".FilterItem {\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    padding: 6px 6px;\r\n    min-width: 70px;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    border: var(--default-border);\r\n    border-radius: 5px;\r\n    margin-left: 5px;\r\n    white-space: nowrap;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        border-color: #E5E5E5;\r\n        background-color: #f5f5f5;\r\n    }\r\n\r\n    &-box-container {\r\n        flex-direction: column;\r\n        display: flex;\r\n        position: fixed;\r\n        min-width: 200px;\r\n        max-width: 300px;\r\n        box-shadow: 1px 1px 3px #aaaaaa;\r\n        background-color: #fff;\r\n        border-radius: 5px;\r\n        z-index: 2;\r\n\r\n        &-hide {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 720px) {\r\n    .FilterItem {\r\n        &-box-container {\r\n            max-width: none;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FilterItem": "JQxu",
	"FilterItem-box-container": "_mWl",
	"FilterItem-box-container-hide": "bZNB"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ButtonFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 34 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wbaD {\n  position: relative;\n  background-color: #eee;\n  color: #000;\n  display: flex;\n  align-items: center;\n}\n.wbaD:hover {\n  background-color: #0a51a5;\n  color: #fff;\n}\n.D4DP {\n  min-width: 35px !important;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/filters/ButtonFilter.module.scss"],"names":[],"mappings":"AAAA;EAEI,kBAAA;EACA,sBAAA;EAEA,WAAA;EACA,aAAA;EACA,mBAAA;AADJ;AAGI;EACI,yBATuB;EAUvB,WAAA;AADR;AAII;EACI,0BAAA;AAFR","sourcesContent":[".ButtonFilter {\r\n    $default-background-color: #0a51a5;\r\n    position: relative;\r\n    background-color: #eee;\r\n\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    &:hover {\r\n        background-color: $default-background-color;\r\n        color: #fff;\r\n    }\r\n\r\n    &-element {\r\n        min-width: 35px !important;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ButtonFilter": "wbaD",
	"ButtonFilter-element": "D4DP"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);





function Filters(props) {
    const filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        document.addEventListener('click', (evt) => onFocus(evt));
        return () => {
            document.removeEventListener('click', (evt) => onFocus(evt));
        };
    }, []);
    function onFocus(evt) {
        let popupClasses = [
            {
                show: _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["FilterItem-box-container"],
                hide: _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["FilterItem-box-container-hide"]
            },
        ];
        popupClasses.forEach(popupCls => {
            const popupClassName = popupCls.show;
            const hidePopupClassName = popupCls.hide;
            let filterId = undefined;
            const itemClassName = _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].FilterItem;
            var subItemObjs = document.getElementsByClassName(itemClassName);
            if (subItemObjs?.length > 0) {
                Array.from(subItemObjs).forEach(ite => {
                    // const popupId = `${ite.id}-box-container`;
                    var iteRect = ite.getBoundingClientRect();
                    if (evt.clientX >= iteRect.left && evt.clientX <= iteRect.right
                        && evt.clientY >= iteRect.top && evt.clientY <= iteRect.bottom) {
                        filterId = ite.id;
                    }
                });
            }
            if (!filterId) {
                let popupDiv = undefined;
                var popupItems = document.getElementsByClassName(popupClassName);
                if (popupItems?.length > 0) {
                    Array.from(popupItems).forEach(ite => {
                        var iteRect = ite.getBoundingClientRect();
                        if (evt.clientX >= iteRect.left && evt.clientX <= iteRect.right
                            && evt.clientY >= iteRect.top && evt.clientY <= iteRect.bottom) {
                            popupDiv = ite;
                        }
                        if (!ite.classList.contains(hidePopupClassName)) {
                            ite.classList.add(hidePopupClassName);
                        }
                    });
                }
                if (popupDiv) {
                    const treeId = popupDiv.getAttribute('tree-id');
                    if (treeId) {
                        if (popupItems?.length > 0) {
                            Array.from(popupItems).forEach(ite => {
                                const iteTreeId = ite.getAttribute('tree-id');
                                if (iteTreeId === treeId) {
                                    ite.classList.remove(hidePopupClassName);
                                }
                            });
                        }
                    }
                    popupDiv.classList.remove(hidePopupClassName);
                }
            }
            else {
                let popupDiv = undefined;
                var popupItems = document.getElementsByClassName(popupClassName);
                if (popupItems?.length > 0) {
                    Array.from(popupItems).forEach(ite => {
                        if (!ite.classList.contains(hidePopupClassName)) {
                            if (ite.id === `${filterId}-box-container`) {
                                popupDiv = ite;
                            }
                            ite.classList.add(hidePopupClassName);
                        }
                    });
                }
                if (popupDiv) {
                    popupDiv.classList.remove(hidePopupClassName);
                }
            }
        });
    }
    let className = _Filters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Filters ?? '';
    if (props.dock) {
        className += ` ${_Filters_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][props.dock] ?? ''}`;
    }
    if (props.className) {
        className += ` ${props.className}`;
    }
    let contents = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className, ref: filterRef, style: props.style, children: props.children });
    return contents;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Filters_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 37 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".limO {\n  position: absolute;\n  display: flex;\n  background-color: #fff;\n  width: 100%;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  border-radius: 2px 2px;\n}\n.limO.ZTGg {\n  width: auto;\n  height: 100%;\n  left: 0;\n  min-width: 30px;\n  flex-direction: column;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/filters/Filters.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EAEA,sBAAA;AAAJ;AAEI;EACI,WAAA;EACA,YAAA;EACA,OAAA;EACA,eAAA;EACA,sBAAA;AAAR","sourcesContent":[".Filters {\r\n    position: absolute;\r\n    display: flex;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    flex-wrap: nowrap;\r\n    // user-select: none;\r\n    border-radius: 2px 2px;\r\n\r\n    &.left {\r\n        width: auto;\r\n        height: 100%;\r\n        left: 0;\r\n        min-width: 30px;\r\n        flex-direction: column;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Filters": "limO",
	"left": "ZTGg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);




function LabelFilter(props) {
    let id = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__.guid8)();
    let className = `${_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].FilterItem ?? ''} ${_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].LabelFilter ?? ''}`;
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { id: id, className: className, children: props.text ?? props.children }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelFilter);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_LabelFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 40 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hhZj {\n  position: relative;\n  pointer-events: none;\n  border: none;\n  font-weight: bold;\n  padding: 6px 6px;\n  min-width: 30px;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/filters/LabelFilter.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,oBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AACJ","sourcesContent":[".LabelFilter {\r\n    position: relative;\r\n    pointer-events: none;\r\n    border: none;\r\n    font-weight: bold;\r\n    padding: 6px 6px;\r\n    min-width: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LabelFilter": "hhZj"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);






function OptionsFilter(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
    let className = `${_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].FilterItem ?? ''} ${_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].OptionsFilter ?? ''}`;
    let selectItemValue = undefined, selectItemTitle = undefined;
    let selectItemValues = undefined;
    const displayTextLength = 20;
    let displayFormat = props.displayFormat;
    if (!displayFormat) {
        displayFormat = (t, v) => `${v ?? t}`;
    }
    const options = getOptions();
    if (options?.length > 0) {
        const checkItems = options.filter(ite => ite.checked);
        selectItemTitle = undefined;
        selectItemValues = undefined;
        if (checkItems?.length > 0) {
            if (checkItems.length == 1) {
                selectItemValue = checkItems[0].name;
                if (selectItemValue.length > displayTextLength) {
                    selectItemValue = selectItemValue.substring(0, displayTextLength) + '...';
                    selectItemTitle = checkItems[0].name;
                }
            }
            else {
                selectItemValue = `${checkItems.length} seleted`;
            }
            selectItemValues = checkItems.map(ite => ite.name);
        }
    }
    else {
        className = `${_FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].FilterItem ?? ''} ${_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-disabled"] ?? ''}`;
    }
    if (props.className) {
        className += ` ${props.className}`;
    }
    let popupRoot;
    function onClick(evt) {
        try {
            const thisDiv = document.getElementById(thisId);
            hideAllPopup();
            const popupClassName = _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["FilterItem-box-container"];
            const hidePopupClassName = _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["FilterItem-box-container-hide"];
            const popupId = `${thisId}-box-container`;
            let popupDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateDiv)(popupId, thisDiv?.parentElement);
            const options = getOptions();
            if (options?.length > 0) {
                if (!popupRoot) {
                    popupRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(popupDiv);
                    const subItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item"];
                    const checkedItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-active"];
                    const key = (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
                    let searchDiv = options.length > 10 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`OptionsFilter-box-search`], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: 'Search...', onChange: searchText }) })) : undefined;
                    let selectionDiv = (props.multiselect ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-select"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { title: 'For visibled items only', onClick: evt => checkItems(evt, true), children: "Select items..." }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { title: 'For visibled items only', onClick: evt => checkItems(evt, false), children: "Deselect items..." })] })) : undefined);
                    popupRoot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [searchDiv, selectionDiv, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: `${thisId}-box-items`, className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items"], children: options.map((opt, idx) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: `${opt?.id ?? `${key}-${idx + 1}`}`, className: opt.checked ? `${subItemClassName} ${checkedItemClassName}` : `${subItemClassName}`, onClick: onItemClick, "data-value": opt.key ?? opt.id ?? opt, children: typeof (opt) === "string" ? opt : opt.name }, `${key}-${idx + 1}`)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-buttons"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: apply, children: "Apply" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: hideAllPopup, children: "Cancel" })] })] }));
                }
                if (!popupDiv.classList.contains(popupClassName)) {
                    popupDiv.classList.add(popupClassName);
                }
                if (popupDiv.classList.contains(hidePopupClassName)) {
                    popupDiv.classList.remove(hidePopupClassName);
                }
                (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.showElementRelativeTarget)(popupDiv, thisId, props.position);
            }
            if (props.onClick) {
                props.onClick(evt);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    function checkItems(evt, isChecked) {
        try {
            const boxItemsId = `${thisId}-box-items`;
            let boxDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateDiv)(boxItemsId);
            if (boxDiv) {
                const itemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item"];
                const hideItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-hide"];
                const checkedItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-active"];
                var itemObjs = boxDiv.getElementsByClassName(itemClassName);
                if (itemObjs?.length > 0) {
                    Array.from(itemObjs).forEach(ite => {
                        if (!ite.classList.contains(hideItemClassName)) {
                            if (isChecked) {
                                if (!ite.classList.contains(checkedItemClassName)) {
                                    ite.classList.add(checkedItemClassName);
                                }
                            }
                            else {
                                ite.classList.remove(checkedItemClassName);
                            }
                        }
                    });
                }
            }
        }
        catch (e) {
        }
    }
    function unCheckItems(evt) {
        try {
            const boxItemsId = `${thisId}-box-items`;
            let boxDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateDiv)(boxItemsId);
            if (boxDiv) {
                const checkedItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-active"];
                const checkItems = boxDiv.getElementsByClassName(checkedItemClassName);
                if (checkItems?.length > 0) {
                    Array.from(checkItems).forEach(ite => {
                        if (ite.id !== evt.currentTarget.id) {
                            if (ite.classList.contains(checkedItemClassName)) {
                                ite.classList.remove(checkedItemClassName);
                            }
                        }
                    });
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    function onItemClick(evt) {
        try {
            const checkedItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-active"];
            if (!props.multiselect) {
                unCheckItems(evt);
            }
            evt.currentTarget.classList.toggle(checkedItemClassName);
        }
        catch (e) {
            console.log(e);
        }
    }
    function hideAllPopup() {
        try {
            const popupClassName = _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["FilterItem-box-container"];
            const hidePopupClassName = _FilterItem_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["FilterItem-box-container-hide"];
            const popupItems = document.getElementsByClassName(popupClassName);
            if (popupItems?.length > 0) {
                Array.from(popupItems).forEach(ite => {
                    if (!ite.classList.contains(hidePopupClassName)) {
                        ite.classList.add(hidePopupClassName);
                    }
                });
            }
        }
        catch (e) {
        }
    }
    function getOptions() {
        let result = Array();
        if (props.options) {
            if (typeof (props.options) === 'function') {
                result = props.options();
            }
            else {
                props.options.forEach((opt) => {
                    result.push(opt);
                });
            }
        }
        return result;
    }
    function searchText(evt) {
        try {
            const textVal = evt.target.value?.toLocaleLowerCase();
            var boxDiv = document.getElementById(`${thisId}-box-items`);
            if (boxDiv) {
                var rect = boxDiv.getBoundingClientRect();
                Object.assign(boxDiv.style, { width: `${rect.width}px` });
                const itemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item"];
                const hideItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-hide"];
                var itemObjs = boxDiv.getElementsByClassName(itemClassName);
                if (itemObjs?.length > 0) {
                    Array.from(itemObjs).forEach(itemObj => {
                        itemObj.classList.remove(hideItemClassName);
                    });
                    if (textVal) {
                        Array.from(itemObjs).forEach(itemObj => {
                            var itemText = itemObj.innerHTML.toLocaleLowerCase();
                            if (itemText.indexOf(textVal, 0) < 0) {
                                itemObj.classList.add(hideItemClassName);
                            }
                        });
                    }
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    function apply(evt) {
        try {
            selectItemValue = undefined;
            const boxItemsId = `${thisId}-box-items`;
            let boxDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getOrCreateDiv)(boxItemsId);
            if (boxDiv) {
                const checkedItemClassName = _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["OptionsFilter-box-items-sub-item-active"];
                const checkedElements = Array.from(boxDiv.getElementsByClassName(checkedItemClassName));
                const checkItems = checkedElements?.map((ite, idx) => {
                    return {
                        id: ite.id,
                        key: ite.getAttribute('data-value'),
                        name: ite.innerText,
                        checked: true
                    };
                });
                selectItemTitle = undefined;
                selectItemValues = undefined;
                if (checkItems?.length > 0) {
                    if (checkItems.length == 1) {
                        selectItemValue = checkItems[0].name;
                        if (selectItemValue.length > displayTextLength) {
                            selectItemValue = selectItemValue.substring(0, displayTextLength) + '...';
                            selectItemTitle = checkItems[0].name;
                        }
                    }
                    else {
                        selectItemValue = `${checkItems.length} seleted`;
                    }
                    selectItemValues = checkItems.map(ite => ite.name);
                }
                const selectValueElement = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(`${thisId}-select-value`);
                if (selectValueElement) {
                    selectValueElement.innerHTML = selectItemValue ?? props.text ?? 'Selection Filter';
                    selectValueElement.title = selectItemTitle;
                }
                if (props.applyClick) {
                    props.applyClick(evt, checkItems);
                }
            }
            hideAllPopup();
        }
        catch (e) {
            console.log(e);
        }
    }
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: thisId, className: className, onClick: onClick, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { id: `${thisId}-select-value`, className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].content, title: selectItemTitle, children: displayFormat(props.text, selectItemValue, selectItemValues) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["expand-icon"], children: "\u2304" })] }, thisId));
        return contents;
    }
    catch (e) {
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsFilter);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_OptionsFilter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 43 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.DeDE {\n  position: relative;\n}\n.X59Y {\n  background-color: #aaaaaa;\n  color: #eee;\n  pointer-events: none;\n}\n.DeDE .DPDt {\n  padding-right: 10px;\n}\n.DeDE .DiJp {\n  display: flex;\n  justify-content: center;\n  float: right;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 3px;\n  min-width: 10px;\n  font-size: 12pt;\n}\n.yfs_ {\n  flex-direction: column;\n  display: flex;\n  position: fixed;\n  min-width: 200px;\n  box-shadow: 1px 1px 3px #aaaaaa;\n  background-color: #fff;\n  border-radius: var(--default-border-radius);\n}\n.J2yY {\n  display: none;\n}\n.FNLE {\n  display: flex;\n  justify-content: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.FNLE input {\n  width: 100%;\n  border: var(--default-border);\n  border-radius: var(--default-border-radius);\n  min-height: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  outline: none;\n}\n.dTMT {\n  display: flex;\n  justify-content: center;\n  border-bottom: solid 1px #eee;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.dTMT button {\n  min-width: 80px;\n  margin-right: 10px;\n}\n.dTMT button:nth-child(1) {\n  margin-left: 10px;\n}\n.a8vz {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.XXWu {\n  display: block;\n  position: relative;\n  text-align: left;\n  cursor: pointer;\n  margin: 1px;\n  padding: 8px 10px;\n  padding-left: 30px;\n  border: var(--default-border);\n  border-radius: var(--default-border-radius);\n  margin: 5px 5px;\n}\n.XXWu:hover {\n  border: solid 1px var(--default-background-hover-color);\n  border-radius: var(--default-border-radius);\n}\n.bUg2::before {\n  content: \"✓\";\n  position: absolute;\n  left: 10px;\n  top: 5%;\n  color: var(--default-active-color);\n  font-size: 12pt;\n  font-weight: bold;\n}\n.yHYg {\n  display: none;\n}\n.uqkR {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-top: solid 1px #eee;\n}\n.uqkR button {\n  margin: 2px 2px;\n  min-width: 80px;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/filters/OptionsFilter.module.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EAII,kBAAA;AADJ;AAII;EACI,yBAAA;EACA,WAAA;EACA,oBAAA;AAFR;AAKI;EACI,mBAZe;AASvB;AAMI;EACI,aAAA;EAEA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,eAxBe;EAyBf,eAAA;AALR;AAQI;EACI,sBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,2CAAA;AANR;AAQQ;EACI,aAAA;AANZ;AAUI;EACI,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AARR;AAUQ;EACI,WAAA;EACA,6BAAA;EACA,2CAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;AARZ;AAYI;EACI,aAAA;EACA,uBAAA;EACA,6BAAA;EACA,oBAAA;EACA,iBAAA;AAVR;AAYQ;EACI,eAAA;EAMA,kBAAA;AAfZ;AAWY;EACI,iBAAA;AAThB;AAgBI;EAEI,iBAAA;EACA,gBAAA;AAfR;AAiBQ;EACI,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,2CAAA;EACA,eAAA;AAfZ;AAiBY;EACI,uDAAA;EACA,2CAAA;AAfhB;AAkBY;EACI,YAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,kCAAA;EACA,eAAA;EACA,iBAAA;AAhBhB;AAmBY;EACI,aAAA;AAjBhB;AAsBI;EACI,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0BAAA;AApBR;AAsBQ;EACI,eAAA;EACA,eAAA;AApBZ","sourcesContent":[".OptionsFilter {\r\n\r\n    $expand-icon-size: 10px;\r\n\r\n    position: relative;\r\n\r\n\r\n    &-disabled {\r\n        background-color: #aaaaaa;\r\n        color: #eee;\r\n        pointer-events: none;\r\n    }\r\n\r\n    .content {\r\n        padding-right: $expand-icon-size;\r\n    }\r\n\r\n    .expand-icon {\r\n        display: flex;\r\n        // align-items: center;\r\n        justify-content: center;\r\n        float: right;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        right: 3px;\r\n        min-width: $expand-icon-size;\r\n        font-size: 12pt;\r\n    }\r\n\r\n    &-box-container {\r\n        flex-direction: column;\r\n        display: flex;\r\n        position: fixed;\r\n        min-width: 200px;\r\n        box-shadow: 1px 1px 3px #aaaaaa;\r\n        background-color: #fff;\r\n        border-radius: var(--default-border-radius);\r\n\r\n        &-hide {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &-box-search {\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n        margin-top: 10px;\r\n\r\n        input {\r\n            width: 100%;\r\n            border: var(--default-border);\r\n            border-radius: var(--default-border-radius);\r\n            min-height: 30px;\r\n            padding-left: 20px;\r\n            padding-right: 20px;\r\n            outline: none;\r\n        }\r\n    }\r\n\r\n    &-box-select {\r\n        display: flex;\r\n        justify-content: center;\r\n        border-bottom: solid 1px #eee;\r\n        padding-bottom: 10px;\r\n        padding-top: 10px;\r\n\r\n        button {\r\n            min-width: 80px;\r\n\r\n            &:nth-child(1) {\r\n                margin-left: 10px;\r\n            }\r\n\r\n            margin-right: 10px;\r\n        }\r\n    }\r\n\r\n    &-box-items {\r\n\r\n        max-height: 300px;\r\n        overflow-y: auto;\r\n\r\n        &-sub-item {\r\n            display: block;\r\n            position: relative;\r\n            text-align: left;\r\n            cursor: pointer;\r\n            margin: 1px;\r\n            padding: 8px 10px;\r\n            padding-left: 30px;\r\n            border: var(--default-border);\r\n            border-radius: var(--default-border-radius);\r\n            margin: 5px 5px;\r\n\r\n            &:hover {\r\n                border: solid 1px var(--default-background-hover-color);\r\n                border-radius: var(--default-border-radius);\r\n            }\r\n\r\n            &-active::before {\r\n                content: '\\2713';\r\n                position: absolute;\r\n                left: 10px;\r\n                top: 5%;\r\n                color: var(--default-active-color);\r\n                font-size: 12pt;\r\n                font-weight: bold;\r\n            }\r\n\r\n            &-hide {\r\n                display: none;\r\n            }\r\n        }\r\n    }\r\n\r\n    &-box-buttons {\r\n        padding-top: 10px;\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n        border-top: solid 1px #eee;\r\n\r\n        button {\r\n            margin: 2px 2px;\r\n            min-width: 80px;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"OptionsFilter": "DeDE",
	"OptionsFilter-disabled": "X59Y",
	"content": "DPDt",
	"expand-icon": "DiJp",
	"OptionsFilter-box-container": "yfs_",
	"OptionsFilter-box-container-hide": "J2yY",
	"OptionsFilter-box-search": "FNLE",
	"OptionsFilter-box-select": "dTMT",
	"OptionsFilter-box-items": "a8vz",
	"OptionsFilter-box-items-sub-item": "XXWu",
	"OptionsFilter-box-items-sub-item-active": "bUg2",
	"OptionsFilter-box-items-sub-item-hide": "yHYg",
	"OptionsFilter-box-buttons": "uqkR"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);






function Layout(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
    let className = _Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Layout;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    const headerId = `${thisId}-header`;
    const footerId = `${thisId}-footer`;
    const contentId = `${thisId}-content`;
    const [contentHeight, setContentHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const updateElements = async () => {
            await (0,_extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__.sleep)(10);
            const contentDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(contentId);
            let hasHeaderOrFooter = false;
            let contentHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
            if (contentDiv) {
                if (contentDiv.parentElement) {
                    var rect = contentDiv.parentElement.getBoundingClientRect();
                    contentHeight = rect.height;
                }
            }
            let top = 0, bottom = 0;
            const headerDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(headerId);
            if (headerDiv) {
                var rect = headerDiv.getBoundingClientRect();
                top = rect.height;
                contentHeight -= rect.height;
                hasHeaderOrFooter = true;
            }
            const footerDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(footerId);
            if (footerDiv) {
                var rect = footerDiv.getBoundingClientRect();
                contentHeight -= rect.height;
                bottom = rect.top;
                hasHeaderOrFooter = true;
            }
            if (props.maxHeight) {
                if (props.maxHeight < contentHeight) {
                    contentHeight = props.maxHeight;
                }
            }
            if (hasHeaderOrFooter) {
                Object.assign(contentDiv.style, {
                    top: `${top}px`,
                });
            }
            setContentHeight(contentHeight);
        };
        updateElements();
    }, []);
    try {
        let headerDiv = undefined;
        if (props.header) {
            headerDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `${_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["Layout-header-sticky"]} ${props.headerClassName}`, id: headerId, children: props.header }));
        }
        let footerDiv = undefined;
        if (props.footer) {
            footerDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `${_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["Layout-footer-sticky"]} ${props.footerClassName}`, id: footerId, children: props.footer }));
        }
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: thisId, className: className, children: [headerDiv, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: contentId, style: { maxHeight: props.maxHeight, height: contentHeight }, className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["Layout-content"], children: props.children }), footerDiv] }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 46 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vlA6 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.dqw2 {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.IrL1, .t2v5, .vgtR, .Bvdj {\n  z-index: auto;\n}\n.IrL1, .t2v5 {\n  position: absolute;\n  width: 100%;\n  overflow-x: auto;\n  display: flex;\n}\n.t2v5 {\n  top: 0;\n}\n.vgtR, .Bvdj {\n  position: relative;\n  display: flex;\n  width: 100%;\n}\n.Bvdj {\n  position: fixed;\n  bottom: 0;\n}\n\n@media (min-width: 720px) {\n  .dqw2 {\n    display: flex;\n    justify-content: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/forms/Layout.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;AACJ;AACI;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EAEA,eAAA;EAEA,mBAAA;EACA,aAAA;EACA,uBAAA;AADR;AAII;EAEI,aAAA;AAHR;AAOI;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EAEA,aAAA;AANR;AAQQ;EAGI,MAAA;AARZ;AAYI;EACI,kBAAA;EACA,aAAA;EACA,WAAA;AAVR;AAYQ;EAEI,eAAA;EACA,SAAA;AAXZ;;AAgBA;EAGQ;IACI,aAAA;IACA,uBAAA;EAfV;AACF","sourcesContent":[".Layout {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    &-content {\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        // display: block;\r\n        flex-wrap: wrap;\r\n        // overflow-y: auto;\r\n        align-items: center;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n\r\n    &-header,\r\n    &-footer {\r\n        z-index: auto;\r\n        // background-color: #f7f7f7;\r\n    }\r\n\r\n    &-header {\r\n        position: absolute;\r\n        width: 100%;\r\n        overflow-x: auto;\r\n\r\n        display: flex;\r\n\r\n        &-sticky {\r\n            @extend .Layout-header;\r\n            // position: fixed;\r\n            top: 0;\r\n        }\r\n    }\r\n\r\n    &-footer {\r\n        position: relative;\r\n        display: flex;\r\n        width: 100%;\r\n\r\n        &-sticky {\r\n            @extend .Layout-footer;\r\n            position: fixed;\r\n            bottom: 0;\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 720px) {\r\n    .Layout {\r\n\r\n        &-content {\r\n            display: flex;\r\n            justify-content: center;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Layout": "vlA6",
	"Layout-content": "dqw2",
	"Layout-header": "IrL1",
	"Layout-header-sticky": "t2v5",
	"Layout-footer": "vgtR",
	"Layout-footer-sticky": "Bvdj"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);





function PagingTableV2(props) {
    const thisId = props?.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
    let tPageSize = props.pageSize;
    if (!tPageSize) {
        if (props.itemsPerPages?.length > 0) {
            tPageSize = props.itemsPerPages[0];
        }
        if (!tPageSize) {
            tPageSize = 100;
        }
    }
    let [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tPageSize);
    let [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [headerElement, setHeaderElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
        let headerObj = undefined;
        if (props.headers?.length > 0) {
            const rowKey = `${thisId}-row-${(0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)()}`;
            let headerClassName = _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-header"];
            headerObj = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { id: `${thisId}-header`, className: headerClassName, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [props.includeCheckbox ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-th-chk"]}`, align: 'center', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-chkallrows"]}`, id: `${thisId}-chkallrows`, type: "checkbox", onChange: chkAllRows }) }) : undefined, Array.from(props.headers).map((header, headerIdx) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: header.className, colSpan: header.colSpan, rowSpan: header.rowSpan, align: header.align, children: header?.element ?? header?.text ?? header }, `${rowKey}-${headerIdx}`))] }, rowKey) }));
        }
        return headerObj;
    });
    let totalRef;
    let setTotalRef;
    [totalRef, setTotalRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const noPaging = props.noPaging ?? false;
    let bodyClassName = _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-body"];
    const bodyId = `${thisId}-body`;
    let refreshTimeoutFunc = undefined;
    const [bodyKey, setBodyKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            if (props.fetchData) {
                const thisDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(thisId);
                if (thisDiv) {
                    executeFetchData();
                }
            }
        }
        catch (e) {
        }
    }, [pageSize, pageNumber]);
    async function executeFetchData() {
        try {
            const thisDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.getElementById)(thisId);
            if (!thisDiv) {
                if (refreshTimeoutFunc) {
                    clearTimeout(refreshTimeoutFunc);
                }
                if (props.dispose) {
                    props.dispose();
                }
                return;
            }
            setLoaded(false);
            if (refreshTimeoutFunc) {
                clearTimeout(refreshTimeoutFunc);
            }
            if (props.openProcessing) {
                props.openProcessing({});
            }
            props.fetchData({ pageSize, pageNumber })
                .then((resData) => {
                if (resData.ignoreRender) {
                    return;
                }
                else {
                    if (!totalRef || totalRef?.totalPages !== resData.totalPages || totalRef?.totalRecords !== resData.totalRecords || totalRef.pageNumber !== resData.pageNumber) {
                        setTotalRef({
                            totalPages: resData.totalPages,
                            totalRecords: resData.totalRecords,
                            records: resData.records,
                            pageNumber: resData.pageNumber
                        });
                    }
                }
                setLoaded(true);
            }).finally(() => {
                if (props.closeProcessing) {
                    props.closeProcessing();
                }
                if (props.autoRefreshInterval) {
                    const autoRefreshInterval = props?.autoRefreshInterval();
                    if (autoRefreshInterval > 0) {
                        refreshTimeoutFunc = setTimeout(executeFetchData, autoRefreshInterval);
                    }
                }
            });
        }
        catch (e) {
        }
    }
    function changePage(pIdx) {
        if (pIdx > 0 && pIdx != pageNumber && pIdx <= totalRef?.totalPages) {
            setPageNumber(pIdx);
        }
    }
    function changePageSize(pSize) {
        if (pSize > 0 && pSize != pageSize) {
            setPageNumber(1);
            setPageSize(pSize);
            if (props.pageSizeChange) {
                props.pageSizeChange(pSize);
            }
        }
    }
    function chkAllRows(evt) {
        try {
            const { checked } = evt.currentTarget;
            const chkRowClassName = `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-chkrow"]}`;
            var chkItemObjs = document.getElementsByClassName(chkRowClassName);
            if (chkItemObjs?.length > 0) {
                Array.from(chkItemObjs).forEach(ite => {
                    const iteName = ite.getAttribute("name");
                    if (iteName === thisId) {
                        ite.checked = checked;
                    }
                });
            }
            if (props.checkAllRowsChange) {
                props.checkAllRowsChange(evt);
            }
            updateCheckValues();
        }
        catch (e) {
        }
    }
    function chkRowChange(evt) {
        try {
            const chkAllId = thisId + '-chkallrows';
            var chkAll = document.getElementById(chkAllId);
            if (chkAll) {
                let isChkAll = true;
                const chkRowClassName = `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-chkrow"]}`;
                var chkItemObjs = document.getElementsByClassName(chkRowClassName);
                if (chkItemObjs?.length > 0) {
                    Array.from(chkItemObjs).forEach(ite => {
                        const iteName = ite.getAttribute("name");
                        if (iteName === thisId) {
                            if (!ite.checked) {
                                isChkAll = false;
                            }
                        }
                    });
                }
                else {
                    isChkAll = false;
                }
                chkAll.checked = isChkAll;
            }
            if (props.checkRowChange) {
                props.checkRowChange(evt);
            }
            updateCheckValues();
        }
        catch (e) {
        }
    }
    function updateCheckValues() {
        try {
            if (props.includeCheckbox && props.rowCheckChange) {
                const chkRowClassName = `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-chkrow"]}`;
                var chkItemObjs = document.getElementsByClassName(chkRowClassName);
                let values = Array();
                if (chkItemObjs?.length > 0) {
                    Array.from(chkItemObjs).forEach(ite => {
                        const iteName = ite.getAttribute("name");
                        if (iteName === thisId) {
                            if (ite.checked) {
                                values.push(ite.value);
                            }
                        }
                    });
                }
                props.rowCheckChange(values);
            }
        }
        catch (e) {
        }
    }
    try {
        let className = _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].PagingTable;
        if (props.className) {
            className += ` ${props.className}`;
        }
        const fromRecordIdx = (pageSize * (pageNumber - 1)) + 1;
        let toRecordIdx = 0;
        if (totalRef?.totalRecords > 0) {
            toRecordIdx = Math.min(pageSize * pageNumber, totalRef?.totalRecords);
        }
        const pagingClassName = _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-paging"];
        const pagingId = `${thisId}-paging`;
        const itemsPerPageId = `${pagingId}-itemsperpage`;
        let itemsPerPageValue = props.itemsPerPages;
        if (!itemsPerPageValue) {
            itemsPerPageValue = [50, 100, 200];
        }
        let itemsPerPageObj = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { id: itemsPerPageId, onChange: evt => changePageSize(parseInt(evt.currentTarget.value)), children: Array.from(itemsPerPageValue).map((ite, idx) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: ite, selected: pageSize == ite, children: ite }, (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)())) }));
        let pageStepsObj = undefined;
        if (props.pageSteps > 0) {
            const step = Math.floor(props.pageSteps / 2);
            let fromIndex = Math.max(1, pageNumber - step);
            let toIndex = Math.min(fromIndex + props.pageSteps - 1, props.pageSteps + pageNumber - 1, totalRef?.totalPages ?? 0);
            while (toIndex - fromIndex < props.pageSteps - 1) {
                if (fromIndex == 1) {
                    break;
                }
                fromIndex--;
            }
            let pageIndexes = [];
            for (var i = fromIndex; i <= toIndex; i++) {
                pageIndexes.push(i);
            }
            pageStepsObj = pageIndexes.map(p => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: pageNumber === p ? _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-paging-active"] : '', onClick: evt => changePage(p), children: p }, (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)()));
        }
        let pagingDiv = undefined;
        let pagingHeight = 1;
        let labelRecord = undefined;
        if (totalRef?.totalRecords > 0) {
            labelRecord = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: fromRecordIdx }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: toRecordIdx }), " of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: totalRef?.totalRecords }), " records."] }));
            if (window.screen.availWidth < 720) {
                // labelRecord = (<><br /><label className={thisCss["PagingTable-paging-record"]}>from <b>{fromRecordIdx}</b> to <b>{toRecordIdx}</b> of <b>{totalRef?.totalRecords}</b> records.</label></>);
            }
        }
        let bodyElement = undefined;
        if (props.onInitMessage) {
            bodyElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { align: 'center', colSpan: props.headers?.length + (props.includeCheckbox ? 1 : 0), children: props.onInitMessage }) }));
        }
        if (!loaded) {
            if (props.onLoadingMessage) {
                bodyElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { align: 'center', colSpan: props.headers?.length + (props.includeCheckbox ? 1 : 0), children: props.onLoadingMessage }) }));
            }
        }
        else {
            bodyElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { align: 'center', colSpan: props.headers?.length + (props.includeCheckbox ? 1 : 0), children: "No Record." }) }));
            if (totalRef?.records?.length > 0) {
                const rowKey = `${thisId}-row-${(0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)()}`;
                bodyElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from(totalRef.records).map((record, rowIdx) => {
                        if (record.cells?.length > 0) {
                            const cellKey = `${rowKey}-cell`;
                            const rowId = record.id ?? `${rowKey}-${rowIdx}`;
                            let rowObj = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { id: rowId, onClick: evt => {
                                    if (props.checkRowOnClick) {
                                        const chkId = `${rowId}-chk`;
                                        const chkRow = document.getElementById(chkId);
                                        if (chkRow) {
                                            if (!(0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_2__.isInElement)(evt, chkRow)) {
                                                chkRow.checked = !chkRow.checked;
                                                chkRowChange();
                                            }
                                        }
                                    }
                                    if (record.onClick) {
                                        record.onClick(evt);
                                    }
                                }, onDoubleClick: record.onDoubleClick, className: record.className, children: [props.includeCheckbox ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-td-chk"]}`, align: 'center', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { id: `${rowId}-chk`, name: thisId, className: `${_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-chkrow"]}`, defaultValue: rowId, type: "checkbox", onChange: props.checkRowOnClick ? undefined : chkRowChange }) }, cellKey) : undefined, Array.from(record.cells).map((cell, colIdx) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: cell.className, align: cell.align, colSpan: cell.colSpan ?? 1, rowSpan: cell.rowSpan ?? 1, onClick: cell.onClick, onDoubleClick: cell.onDoubleClick, children: cell?.element ?? cell?.text ?? cell }, `${cellKey}-${colIdx}`))] }, `${rowKey}-${rowIdx}`));
                            return rowObj;
                        }
                        return undefined;
                    }) }));
            }
        }
        if ((totalRef == undefined || totalRef?.totalRecords > 0) && !noPaging) {
            pagingHeight = 30;
            if (totalRef?.totalPages > 1) {
                pagingDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: pagingId, className: pagingClassName, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["\u00A0 \u00A0Items per page:\u00A0", itemsPerPageObj, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: evt => changePage(1), children: "First" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: evt => changePage(pageNumber - 1), children: "Prev" }), pageStepsObj, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: evt => changePage(pageNumber + 1), children: "Next" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: evt => changePage(totalRef?.totalPages), children: "Last" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["PagingTable-paging-record"], children: labelRecord })] }));
            }
            else {
                pagingDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: pagingId, className: pagingClassName, children: ["\u00A0 \u00A0Items per page:\u00A0", itemsPerPageObj, labelRecord] }));
            }
        }
        const heightValue = props.height ?? '100%';
        const maxHeightValue = props.maxHeight;
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...props, id: thisId, className: className, style: {
                height: heightValue,
                maxHeight: maxHeightValue
            }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'pTable', style: { height: `calc(100% - ${pagingHeight}px)` }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { id: `${thisId}-table`, width: '100%', cellSpacing: props.cellSpacing ?? 0, cellPadding: props.cellPadding ?? 0, border: 0, children: [headerElement, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { id: bodyId, className: bodyClassName, children: bodyElement })] }) }), pagingDiv] }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagingTableV2);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PagingTable_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 49 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".EBTX {\n  position: absolute;\n  width: 100%;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.EBTX div[class=pTable] {\n  overflow: auto;\n}\n.EBTX div[class=pTable]::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n}\n.TaX9 {\n  font-weight: bold;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.TaX9 tr {\n  height: 30px;\n}\n.TaX9 tr th {\n  background-color: rgb(241, 240, 240);\n  border-left: solid 1px #eee;\n  border-right: solid 1px #eee;\n}\n.TaX9 tr th input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n}\n.sddy tr {\n  height: 25px;\n}\n.sddy tr:nth-child(2n) {\n  background-color: rgba(65, 105, 225, 0.0666666667);\n}\n.sddy tr td {\n  border-left: solid 1px #eee;\n  border-right: solid 1px #eee;\n  padding: 4px 6px;\n}\n.sddy tr:hover {\n  background-color: #eee;\n}\n.sddy tr:nth-last-child(1) td {\n  border-bottom: solid 1px #eee;\n}\n.VjdC, .fHVv {\n  width: 30px;\n}\n.wd4M, .F85y {\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n}\n.RmJ_ {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  min-height: 30px;\n  display: flex;\n  align-items: center;\n  background-color: #eee;\n}\n.RmJ_ button {\n  padding: 6px 10px;\n  border: 1px solid #eee;\n  border-radius: 5px 5px;\n  cursor: pointer;\n  min-width: 30px;\n  min-height: 20px;\n}\n.RmJ_ button:hover {\n  background-color: #0a51a5;\n  color: #fff;\n}\n.xNo2 {\n  background-color: #0a51a5;\n  color: #fff;\n  pointer-events: none;\n}\n.RmJ_ select {\n  border: 1px solid #eee;\n  padding: 2px 6px;\n  cursor: pointer;\n  border-radius: 2px 2px;\n}\n.RmJ_ select option {\n  border: none;\n}\n.N883 {\n  position: relative;\n  right: 0;\n  margin-right: 10px;\n}\n\n@media (min-width: 720px) {\n  .N883 {\n    position: absolute;\n    right: 0;\n    margin-right: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/forms/table/PagingTable.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,MAAA;EACA,OAAA;AACJ;AACI;EACI,cAAA;AACR;AAEQ;EACI,UAAA;EACA,6BAAA;AAAZ;AAII;EACI,iBAAA;EACA,gBAAA;EACA,MAAA;EACA,UAAA;AAFR;AAIQ;EACI,YAAA;AAFZ;AAIY;EACI,oCAAA;EACA,2BAAA;EACA,4BAAA;AAFhB;AAIgB;EACI,WAAA;EACA,YAAA;AAFpB;AASQ;EACI,YAAA;AAPZ;AASY;EACI,kDAAA;AAPhB;AAUY;EACI,2BAAA;EACA,4BAAA;EACA,gBAAA;AARhB;AAWY;EACI,sBAAA;AAThB;AAagB;EACI,6BAAA;AAXpB;AAiBI;EAEI,WAAA;AAhBR;AAmBI;EAEI,eAAA;EACA,WAAA;EACA,YAAA;AAlBR;AAqBI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;AAnBR;AAqBQ;EACI,iBAAA;EACA,sBAAA;EACA,sBAAA;EACA,eAAA;EAOA,eAAA;EACA,gBAAA;AAzBZ;AAmBY;EACI,yBAAA;EACA,WAAA;AAjBhB;AA0BQ;EACI,yBAAA;EACA,WAAA;EACA,oBAAA;AAxBZ;AA2BQ;EACI,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;AAzBZ;AA2BY;EACI,YAAA;AAzBhB;AA6BQ;EACI,kBAAA;EACA,QAAA;EACA,kBAAA;AA3BZ;;AAgCA;EAKY;IACI,kBAAA;IACA,QAAA;IACA,kBAAA;EAjCd;AACF","sourcesContent":[".PagingTable {\r\n    position: absolute;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    div[class=\"pTable\"] {\r\n        overflow: auto;\r\n        // height: calc(100% - 5px);\r\n\r\n        &::-webkit-scrollbar {\r\n            width: 5px;\r\n            background-color: transparent;\r\n        }\r\n    }\r\n\r\n    &-header {\r\n        font-weight: bold;\r\n        position: sticky;\r\n        top: 0;\r\n        z-index: 1;\r\n\r\n        tr {\r\n            height: 30px;\r\n\r\n            th {\r\n                background-color: rgb(241, 240, 240);\r\n                border-left: solid 1px #eee;\r\n                border-right: solid 1px #eee;\r\n\r\n                input[type=\"checkbox\"] {\r\n                    width: 15px;\r\n                    height: 15px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-body {\r\n        tr {\r\n            height: 25px;\r\n\r\n            &:nth-child(2n) {\r\n                background-color: #4169e111;\r\n            }\r\n\r\n            td {\r\n                border-left: solid 1px #eee;\r\n                border-right: solid 1px #eee;\r\n                padding: 4px 6px;\r\n            }\r\n\r\n            &:hover {\r\n                background-color: #eee;\r\n            }\r\n\r\n            &:nth-last-child(1) {\r\n                td {\r\n                    border-bottom: solid 1px #eee;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    &-th-chk,\r\n    &-td-chk {\r\n        width: 30px;\r\n    }\r\n\r\n    &-chkrow,\r\n    &-chkallrows {\r\n        cursor: pointer;\r\n        width: 15px;\r\n        height: 15px;\r\n    }\r\n\r\n    &-paging {\r\n        width: 100%;\r\n        position: absolute;\r\n        bottom: 0;\r\n        min-height: 30px;\r\n        display: flex;\r\n        align-items: center;\r\n        background-color: #eee;\r\n\r\n        button {\r\n            padding: 6px 10px;\r\n            border: 1px solid #eee;\r\n            border-radius: 5px 5px;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n                background-color: #0a51a5;\r\n                color: #fff;\r\n            }\r\n\r\n            min-width: 30px;\r\n            min-height: 20px;\r\n\r\n\r\n        }\r\n\r\n        &-active {\r\n            background-color: #0a51a5;\r\n            color: #fff;\r\n            pointer-events: none;\r\n        }\r\n\r\n        select {\r\n            border: 1px solid #eee;\r\n            padding: 2px 6px;\r\n            cursor: pointer;\r\n            border-radius: 2px 2px;\r\n\r\n            option {\r\n                border: none;\r\n            }\r\n        }\r\n\r\n        &-record {\r\n            position: relative;\r\n            right: 0;\r\n            margin-right: 10px;\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 720px) {\r\n    .PagingTable {\r\n\r\n        &-paging {\r\n\r\n            &-record {\r\n                position: absolute;\r\n                right: 0;\r\n                margin-right: 10px;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PagingTable": "EBTX",
	"PagingTable-header": "TaX9",
	"PagingTable-body": "sddy",
	"PagingTable-th-chk": "VjdC",
	"PagingTable-td-chk": "fHVv",
	"PagingTable-chkrow": "wd4M",
	"PagingTable-chkallrows": "F85y",
	"PagingTable-paging": "RmJ_",
	"PagingTable-paging-active": "xNo2",
	"PagingTable-paging-record": "N883"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var _ToolStripSplitItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);








function ToolStripItem(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    const treeId = props.treeId ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    const level = props.level ?? 1;
    let children = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.getChildren)(props);
    if (children.length == 1) {
        if (typeof (children[0]) === "string") {
            children = [];
        }
    }
    let haveToolStripItem = children.findIndex(child => child.type?.name === "ToolStripItem") >= 0;
    const subItemsPopupId = `${thisId}-popup-${level}`;
    let className = _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].ToolStripItem;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    const popupShowClassName = _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-sub-popup"];
    const popupHideClassName = _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-sub-popup-hide"];
    let subPopup = undefined;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (level === 1) {
            const thisElement = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.getElementById)(thisId);
            addEventListener("click", evt => {
                if (!(0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.isInElementV2)(evt, thisElement)) {
                    closePopups();
                }
            });
            return () => {
                removeEventListener("click", undefined);
            };
        }
    }, []);
    function closePopups() {
        try {
            let popupObjs = Array.from(document.getElementsByClassName(popupShowClassName));
            if (popupObjs?.length > 0) {
                Array.from(popupObjs).forEach(ite => {
                    const iteTreeId = ite.getAttribute('treeId');
                    if (iteTreeId.length >= thisId.length) {
                        if (!ite.classList.contains(popupHideClassName)) {
                            ite.classList.add(popupHideClassName);
                        }
                    }
                });
            }
        }
        catch (e) {
        }
    }
    function createSubPopup() {
        if (!subPopup) {
            if (children?.length > 0) {
                subPopup = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.getOrCreateTag)(subItemsPopupId, "div");
                subPopup.classList.add(popupShowClassName);
                subPopup.classList.add(popupHideClassName);
                subPopup.setAttribute('treeId', thisId);
                subPopup.setAttribute('level', level.toString());
                const itemKey = `${thisId}-${(0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)()}`;
                let contents = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children.map((ite, idx) => {
                        if (ite.type.name == "ToolStripItem") {
                            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToolStripItem, { treeId: treeId, id: `${itemKey}-${idx}`, level: level + 1, ...ite.props }, `${itemKey}-${idx}`);
                        }
                        else if (ite.type.name == "ToolStripSplitItem") {
                            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ToolStripSplitItem__WEBPACK_IMPORTED_MODULE_7__["default"], { treeId: treeId, id: `${itemKey}-${idx}`, level: level + 1, ...ite.props }, `${itemKey}-${idx}`);
                        }
                        else {
                            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToolStripItem, { treeId: treeId, id: `${itemKey}-${idx}`, level: level + 1, ...ite.props, children: ite }, `${itemKey}-${idx}`);
                        }
                    }) });
                const subPopupRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(subPopup);
                subPopupRoot.render(contents);
            }
        }
    }
    async function showMenu(position) {
        try {
            await (0,_extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_5__.sleep)(1);
            createSubPopup();
            closePopups();
            if (subPopup) {
                if (subPopup.classList.contains(popupHideClassName)) {
                    subPopup.classList.remove(popupHideClassName);
                }
                (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.showElementRelativeTarget)(subPopup, thisId, position);
            }
        }
        catch (e) {
        }
    }
    try {
        const text = props.text ?? props.children;
        let contents = undefined;
        if (children?.length > 0) {
            if (level === 1) {
                if (props.onClick) {
                    contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label-link"], onClick: props.onClick, children: text ?? children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-dropdown-link"], onClick: evt => showMenu("top"), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: "block", marginTop: 1 }, children: "\u2304" }) })] }));
                }
                else {
                    className += ` ${_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-nolink"]}`;
                    contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, onClick: evt => showMenu("top"), children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: text ?? children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-dropdown"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: "block", marginTop: 1 }, children: "\u2304" }) })] }));
                }
            }
            else {
                if (props.onClick) {
                    contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label-link-n"], onClick: props.onClick, onMouseEnter: evt => level > 1 ? closePopups() : undefined, children: text ?? children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: "block", width: 1, height: 20, backgroundColor: "#aaa" }, children: "\u00A0" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-dropright-link"], onMouseEnter: evt => showMenu("right"), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: "block", marginTop: 1 }, children: "\uFF1E" }) })] }));
                }
                else {
                    className += ` ${_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-nolink"]}`;
                    contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, onMouseEnter: evt => showMenu("right"), children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["NavItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label-n"], children: text ?? children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-dropright"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { display: "block", marginTop: 1 }, children: "\uFF1E" }) })] }));
                }
            }
        }
        else {
            if (!props.onClick) {
                className += ' ' + _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-disabled"];
            }
            if (props.onClick) {
                contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, onMouseEnter: evt => level > 1 ? closePopups() : undefined, children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: level === 1 ? _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label"] : _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label-n"], onClick: props.onClick, children: text ?? children })] }));
            }
            else {
                className += ` ${_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-nolink"]}`;
                contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { id: thisId, className: className, children: [props.icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-icon"], children: props.icon }) : undefined, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: _ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["ToolStripItem-label-n"], children: text ?? children })] }));
            }
        }
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolStripItem);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 52 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Pkem {\n  display: flex;\n  align-items: center;\n  border-radius: 3px 3px;\n  border: 1px solid transparent;\n  user-select: none;\n  height: 100%;\n}\n.IXM9, .QK8n {\n  padding: 5px;\n  border-radius: 3px 3px;\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.QK8n {\n  padding: 6px;\n  justify-content: center;\n}\n.QK8n:hover {\n  background-color: #aaa;\n}\n.Pkem:hover {\n  cursor: pointer;\n  background-color: #E5E5E5;\n}\n.a9eX {\n  padding: 5px;\n}\n.a9eX:hover {\n  cursor: pointer;\n  background-color: #E5E5E5;\n}\n.ENon, .iI1G {\n  padding-bottom: 5px;\n  border-radius: 3px 3px;\n  border: 1px solid transparent;\n  height: 100%;\n  width: 10px;\n  font-size: 11pt;\n  display: block;\n}\n.iI1G {\n  display: flex;\n  justify-content: center;\n}\n.iI1G:hover {\n  background-color: #aaa;\n}\n.hNLL, .CJgq {\n  border-radius: 3px 3px;\n  padding: 5px;\n  display: flex;\n  width: calc(100% - 20px);\n  align-items: center;\n}\n.CJgq:hover {\n  background-color: #aaa;\n}\n.t96T, .XqTm {\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  border: 1px solid transparent;\n  font-size: 8pt;\n  width: 20px;\n  border-radius: 3px 3px;\n}\n.XqTm:hover {\n  background-color: #aaa;\n}\n.Y018 {\n  pointer-events: none;\n  color: #aaa;\n}\n.uahA {\n  pointer-events: none;\n}\n.cqf0 {\n  border-radius: 3px 3px;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 200px;\n  max-width: 300px;\n  background-color: #fff;\n  box-shadow: var(--default-box-shadow);\n  z-index: 3;\n}\n.S4W8 {\n  display: none;\n}\n.cqf0 a {\n  width: 100%;\n  color: inherit;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/toolstrip/ToolStripItem.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,6BAAA;EACA,iBAAA;EACA,YAAA;AACJ;AACI;EAEI,YAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAAR;AAGI;EACI,YAAA;EACA,uBAAA;AADR;AAGQ;EACI,sBAAA;AADZ;AAKI;EACI,eAAA;EACA,yBAAA;AAHR;AAMI;EACI,YAAA;AAJR;AAMQ;EACI,eAAA;EACA,yBAAA;AAJZ;AAQI;EAEI,mBAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;AAPR;AAUI;EACI,aAAA;EACA,uBAAA;AARR;AAUQ;EACI,sBAAA;AARZ;AAYI;EAEI,sBAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;AAXR;AAeQ;EACI,sBAAA;AAbZ;AAiBI;EAEI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,6BAAA;EACA,cAAA;EACA,WAAA;EACA,sBAAA;AAhBR;AAoBQ;EACI,sBAAA;AAlBZ;AAuBI;EACI,oBAAA;EACA,WAAA;AArBR;AAwBI;EACI,oBAAA;AAtBR;AA0BI;EACI,sBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,qCAAA;EACA,UAAA;AAxBR;AA0BQ;EACI,aAAA;AAxBZ;AA2BQ;EACI,WAAA;EACA,cAAA;AAzBZ","sourcesContent":[".ToolStripItem {\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3px 3px;\r\n    border: 1px solid transparent;\r\n    user-select: none;\r\n    height: 100%;\r\n\r\n    &-label,\r\n    &-label-link {\r\n        padding: 5px;\r\n        border-radius: 3px 3px;\r\n        display: flex;\r\n        height: 100%;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    &-label-link {\r\n        padding: 6px;\r\n        justify-content: center;\r\n\r\n        &:hover {\r\n            background-color: #aaa;\r\n        }\r\n    }\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        background-color: #E5E5E5;\r\n    }\r\n\r\n    &-nolink {\r\n        padding: 5px;\r\n\r\n        &:hover {\r\n            cursor: pointer;\r\n            background-color: #E5E5E5;\r\n        }\r\n    }\r\n\r\n    &-dropdown,\r\n    &-dropdown-link {\r\n        padding-bottom: 5px;\r\n        border-radius: 3px 3px;\r\n        border: 1px solid transparent;\r\n        height: 100%;\r\n        width: 10px;\r\n        font-size: 11pt;\r\n        display: block;\r\n    }\r\n\r\n    &-dropdown-link {\r\n        display: flex;\r\n        justify-content: center;\r\n\r\n        &:hover {\r\n            background-color: #aaa;\r\n        }\r\n    }\r\n\r\n    &-label-n,\r\n    &-label-link-n {\r\n        border-radius: 3px 3px;\r\n        padding: 5px;\r\n        display: flex;\r\n        width: calc(100% - 20px);\r\n        align-items: center;\r\n    }\r\n\r\n    &-label-link-n {\r\n        &:hover {\r\n            background-color: #aaa;\r\n        }\r\n    }\r\n\r\n    &-dropright,\r\n    &-dropright-link {\r\n        padding: 5px;\r\n        display: flex;\r\n        justify-content: center;\r\n        border: 1px solid transparent;\r\n        font-size: 8pt;\r\n        width: 20px;\r\n        border-radius: 3px 3px;\r\n    }\r\n\r\n    &-dropright-link {\r\n        &:hover {\r\n            background-color: #aaa;\r\n        }\r\n    }\r\n\r\n\r\n    &-disabled {\r\n        pointer-events: none;\r\n        color: #aaa;\r\n    }\r\n\r\n    &-readonly {\r\n        pointer-events: none;\r\n    }\r\n\r\n\r\n    &-sub-popup {\r\n        border-radius: 3px 3px;\r\n        position: fixed;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        min-width: 200px;\r\n        max-width: 300px;\r\n        background-color: #fff;\r\n        box-shadow: var(--default-box-shadow);\r\n        z-index: 3;\r\n\r\n        &-hide {\r\n            display: none;\r\n        }\r\n\r\n        a {\r\n            width: 100%;\r\n            color: inherit;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ToolStripItem": "Pkem",
	"ToolStripItem-label": "IXM9",
	"ToolStripItem-label-link": "QK8n",
	"ToolStripItem-nolink": "a9eX",
	"ToolStripItem-dropdown": "ENon",
	"ToolStripItem-dropdown-link": "iI1G",
	"ToolStripItem-label-n": "hNLL",
	"ToolStripItem-label-link-n": "CJgq",
	"ToolStripItem-dropright": "t96T",
	"ToolStripItem-dropright-link": "XqTm",
	"ToolStripItem-disabled": "Y018",
	"ToolStripItem-readonly": "uahA",
	"ToolStripItem-sub-popup": "cqf0",
	"ToolStripItem-sub-popup-hide": "S4W8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



function ToolStripSplitItem(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_1__.guid8)();
    let className = _ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ToolStripSplitItem;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolStripSplitItem);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripSplitItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 55 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Kpza {\n  position: relative;\n  width: 100%;\n  border: var(--default-border);\n  margin-top: 2px;\n  margin-bottom: 2px;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/toolstrip/ToolStripSplitItem.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,6BAAA;EACA,eAAA;EACA,kBAAA;AACJ","sourcesContent":[".ToolStripSplitItem {\r\n    position: relative;\r\n    width: 100%;\r\n    border: var(--default-border);\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ToolStripSplitItem": "Kpza"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _ToolStripItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _ToolStripSplitItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);






function ToolStripMenu(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.guid8)();
    let children = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_1__.getChildren)(props);
    let className = _ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].ToolStripMenu;
    if (props.dock) {
        className += ` ${_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"][`ToolStripMenu-${props.dock}`]}`;
    }
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let itemsObj = undefined;
        if (children?.length > 0) {
            const itemKey = `${thisId}-1`;
            itemsObj = children.map((ite, idx) => {
                if (ite) {
                    if (ite.type.name == "ToolStripItem") {
                        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ToolStripItem__WEBPACK_IMPORTED_MODULE_3__["default"], { id: `${itemKey}-${idx}`, ...ite.props, level: 1 }, `${itemKey}-${idx}`);
                    }
                    else if (ite.type.name == "ToolStripSplitItem") {
                        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ToolStripSplitItem__WEBPACK_IMPORTED_MODULE_5__["default"], { id: `${itemKey}-${idx}`, ...ite.props, level: 1 }, `${itemKey}-${idx}`);
                    }
                    else {
                        return ite;
                    }
                }
                else {
                    return ite;
                }
            });
        }
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className, children: itemsObj }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolStripMenu);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_ToolStripMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 58 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cO0V {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  min-height: 30px;\n  width: 100%;\n  padding: 3px;\n}\n.Vai_, .kYwd {\n  position: absolute;\n  width: 100%;\n}\n.Vai_ {\n  top: 0;\n}\n.kYwd {\n  top: auto;\n  bottom: 0;\n}\n.OVd6 {\n  display: inline-block;\n  align-items: center;\n  position: absolute;\n  left: 5px;\n  top: 2px;\n}\n.OVd6 span {\n  position: absolute;\n  padding: 6px;\n  border: var(--default-border);\n}\n.OVd6 span:hover {\n  cursor: pointer;\n  background-color: #aaa;\n}\n.bHXv {\n  position: relative;\n  padding: 10px;\n  margin-left: 25px;\n}\n.KPHa {\n  display: none;\n}\n.F6ns {\n  display: block;\n  z-index: 100;\n  position: relative;\n  background-color: #fff;\n}\n\n@media (min-width: 600px) {\n  .cO0V {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .OVd6 {\n    display: none;\n  }\n  .bHXv {\n    margin-left: 5px;\n  }\n  .KPHa {\n    display: flex;\n    height: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/forms/toolstrip/ToolStripMenu.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AACJ;AACI;EAEI,kBAAA;EACA,WAAA;AAAR;AAGI;EACI,MAAA;AADR;AAKI;EACI,SAAA;EACA,SAAA;AAHR;AAMI;EACI,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;AAJR;AAOQ;EACI,kBAAA;EACA,YAAA;EACA,6BAAA;AALZ;AAQY;EACI,eAAA;EACA,sBAAA;AANhB;AAWI;EACI,kBAAA;EACA,aAAA;EACA,iBAAA;AATR;AAYI;EAEI,aAAA;AAXR;AAcQ;EACI,cAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;AAZZ;;AAiBA;EACI;IACI,aAAA;IACA,eAAA;EAdN;EAgBM;IACI,aAAA;EAdV;EAiBM;IACI,gBAAA;EAfV;EAkBM;IAEI,aAAA;IACA,YAAA;EAjBV;AACF","sourcesContent":[".ToolStripMenu {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    min-height: 30px;\r\n    width: 100%;\r\n    padding: 3px;\r\n\r\n    &-top,\r\n    &-bottom {\r\n        position: absolute;\r\n        width: 100%;\r\n    }\r\n\r\n    &-top {\r\n        top: 0;\r\n\r\n    }\r\n\r\n    &-bottom {\r\n        top: auto;\r\n        bottom: 0;\r\n    }\r\n\r\n    &-menu-icon {\r\n        display: inline-block;\r\n        align-items: center;\r\n        position: absolute;\r\n        left: 5px;\r\n        top: 2px;\r\n\r\n\r\n        span {\r\n            position: absolute;\r\n            padding: 6px;\r\n            border: var(--default-border);\r\n            // border-radius: var(--default-border-radius);\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n                background-color: #aaa;\r\n            }\r\n        }\r\n    }\r\n\r\n    &-menu-logo {\r\n        position: relative;\r\n        padding: 10px;\r\n        margin-left: 25px;\r\n    }\r\n\r\n    &-menu-group {\r\n\r\n        display: none;\r\n\r\n\r\n        &-show {\r\n            display: block;\r\n            z-index: 100;\r\n            position: relative;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .ToolStripMenu {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n\r\n        &-menu-icon {\r\n            display: none;\r\n        }\r\n\r\n        &-menu-logo {\r\n            margin-left: 5px;\r\n        }\r\n\r\n        &-menu-group {\r\n\r\n            display: flex;\r\n            height: 100%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ToolStripMenu": "cO0V",
	"ToolStripMenu-top": "Vai_",
	"ToolStripMenu-bottom": "kYwd",
	"ToolStripMenu-menu-icon": "OVd6",
	"ToolStripMenu-menu-logo": "bHXv",
	"ToolStripMenu-menu-group": "KPHa",
	"ToolStripMenu-menu-group-show": "F6ns"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigate": () => (/* binding */ navigate)
/* harmony export */ });
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function navigate(path, target) {
    if (path) {
        if (window.location.protocol === 'file:') {
            window.location.hash = `#${path}`;
            window.location.reload();
        }
        else {
            if (target) {
                if (target === "popup") {
                    window.open(`${path}`, (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_0__.guid8)(), "popup");
                }
                else {
                    window.open(`${path}`, (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_0__.guid8)());
                }
            }
            else {
                window.location.href = `${path}`;
            }
        }
    }
}


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteAsync": () => (/* binding */ deleteAsync),
/* harmony export */   "getAsync": () => (/* binding */ getAsync),
/* harmony export */   "optionAsync": () => (/* binding */ optionAsync),
/* harmony export */   "postAsync": () => (/* binding */ postAsync),
/* harmony export */   "putAsync": () => (/* binding */ putAsync),
/* harmony export */   "uploadFilesAsync": () => (/* binding */ uploadFilesAsync)
/* harmony export */ });
var httpMethodMap;
(function (httpMethodMap) {
    httpMethodMap["GET"] = "get";
    httpMethodMap["POST"] = "post";
    httpMethodMap["PUT"] = "put";
    httpMethodMap["OPTIONS"] = "options";
    httpMethodMap["DELETE"] = "delete";
})(httpMethodMap || (httpMethodMap = {}));
function httpActionAsync(url, method, data, headers, onSuccess, onError, onFinally) {
    try {
        const uri = new URL(url);
        const reqConfig = {
            method,
            headers,
            // credentials: "same-origin",
            keepalive: true,
            // mode: "no-cors",
        };
        if (data) {
            reqConfig.body = JSON.stringify(data);
        }
        return fetch(url, reqConfig)
            .then(onSuccess)
            .catch(err => {
            onError(err);
        })
            .finally(onFinally);
    }
    catch (e) {
        console.log(e);
        if (onError) {
            return onError(e);
        }
    }
}
function postAsync(url, data, headers, onSuccess, onError, onFinally) {
    return httpActionAsync(url, httpMethodMap.POST, data, headers, onSuccess, onError, onFinally);
}
function getAsync(url, headers, onSuccess, onError, onFinally) {
    return httpActionAsync(url, httpMethodMap.GET, undefined, headers, onSuccess, onError, onFinally);
}
function optionAsync(url, data, headers, onSuccess, onError, onFinally) {
    return httpActionAsync(url, httpMethodMap.OPTIONS, data, headers, onSuccess, onError, onFinally);
}
function putAsync(url, data, headers, onSuccess, onError, onFinally) {
    return httpActionAsync(url, httpMethodMap.PUT, data, headers, onSuccess, onError, onFinally);
}
function deleteAsync(url, data, headers, onSuccess, onError, onFinally) {
    return httpActionAsync(url, httpMethodMap.DELETE, data, headers, onSuccess, onError, onFinally);
}
async function uploadFilesAsync(url, fileList, headers, onSuccess, onError, onFinally) {
    try {
        if (fileList?.length > 0) {
            for (var i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                const reqHeaders = new Headers(headers);
                let fileType = file.type;
                if (fileType == '') {
                    fileType = 'application/octet-stream';
                }
                reqHeaders.set("Content-Type", fileType);
                reqHeaders.set("Content-Length", `${file.size}`);
                reqHeaders.set("FileName", file.name);
                const reqConfig = {
                    method: 'post',
                    headers: reqHeaders,
                    body: file,
                };
                await fetch(url, reqConfig)
                    .then(onSuccess)
                    .catch(onError);
            }
            if (onFinally) {
                onFinally();
            }
        }
    }
    catch (e) {
        console.log(e);
        if (onError) {
            return onError(e);
        }
    }
}


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_List_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_List_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_List_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_List_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_List_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 62 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jQpj {\n  position: absolute;\n  margin-top: 10px;\n  height: 93%;\n  width: 95%;\n  border: var(--default-border);\n  box-shadow: var(--default-box-shadow);\n  border-radius: var(--default-border-radius);\n  background-color: #fff !important;\n}\n.vIQ6 {\n  position: absolute;\n  background-color: #fff !important;\n}\n.LQ7d {\n  position: relative;\n  margin-top: 10px;\n  background-color: #fff;\n}\n.Wlxa {\n  background-color: #fff;\n}\n.UXg5 {\n  position: fixed;\n  bottom: 10px;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n}\n.lYAL {\n  display: block;\n  padding: 0;\n  color: darkred;\n}\n.UXg5 div {\n  font-weight: bold;\n  padding: 3px;\n}\n.McrG, .O3zL {\n  position: relative;\n  width: 99%;\n  height: 100%;\n}\n.lC_7 {\n  display: none;\n}\n.nlvP {\n  display: none;\n}\n.e23T, .tTBy {\n  position: relative;\n  font-size: 9pt;\n}\n.e23T {\n  position: relative;\n}\n.e23T thead tr th:nth-child(2) {\n  width: 50px;\n}\n.e23T thead tr th:nth-child(3) {\n  width: 80px;\n}\n.e23T thead tr th:nth-child(5) {\n  width: 150px;\n}\n.e23T thead tr th:nth-child(6) {\n  width: 100px;\n}\n.e23T thead tr th:nth-child(7) {\n  width: 80px;\n}\n.e23T thead tr th:nth-child(8) {\n  width: 150px;\n}\n.e23T tbody tr td:nth-child(3) {\n  width: auto;\n}\n.e23T tbody tr td:nth-child(6) {\n  width: 80px;\n}\n.hO7j {\n  background-color: rgba(131, 179, 233, 0.2823529412) !important;\n}\n.hO7j td {\n  border-top: 1px solid #aaa;\n}\n.nuCT {\n  background-color: #fff !important;\n}\n.hO7j:hover, .nuCT:hover {\n  background-color: #eee !important;\n  cursor: pointer;\n}\n.e23T textarea,\n.e23T input {\n  font-family: var(--default-font);\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n.FgPQ {\n  display: flex;\n  align-items: center;\n}\n.kpIH {\n  border: none;\n  outline: none;\n  text-align: center;\n  background-color: transparent;\n}\n.ezgV, .nFQq {\n  outline: none;\n}\n.ezgV {\n  margin-left: 20px;\n}\n.enHY {\n  text-decoration: none;\n  color: #000;\n}\n.enHY:hover {\n  font-weight: bold;\n  text-decoration: dashed;\n  color: blue;\n}\n.tTBy {\n  position: relative;\n}\n.zCt0 {\n  background-color: #4663b4 !important;\n  color: #fff;\n  font-weight: bold;\n  top: 30px;\n  position: sticky;\n}\n.AwUj {\n  background-color: rgba(131, 179, 233, 0.2823529412) !important;\n}\n.Q9lO {\n  background-color: #fff !important;\n}\n.AwUj:hover, .Q9lO:hover {\n  background-color: #eee !important;\n  cursor: pointer;\n}\n.tTBy thead tr th:nth-child(1) {\n  width: 80px;\n}\n.jQpj input[type=number] {\n  -moz-appearance: textfield;\n}\n.jQpj input::-webkit-outer-spin-button,\n.jQpj input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/ui/List.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;EACA,6BAAA;EACA,qCAAA;EACA,2CAAA;EACA,iCAAA;AACJ;AACI;EACI,kBAAA;EACA,iCAAA;AACR;AACQ;EACI,kBAAA;EACA,gBAAA;EACA,sBAAA;AACZ;AACY;EACI,sBAAA;AAChB;AAGQ;EACI,eAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;AADZ;AAGY;EACI,cAAA;EACA,UAAA;EACA,cAAA;AADhB;AAIY;EACI,iBAAA;EACA,YAAA;AAFhB;AAOI;EAEI,kBAAA;EACA,UAAA;EACA,YAAA;AANR;AAUQ;EACI,aAAA;AARZ;AAaQ;EACI,aAAA;AAXZ;AAeI;EAEI,kBAAA;EACA,cAAA;AAdR;AAiBI;EACI,kBAAA;AAfR;AAoBgB;EACI,WAAA;AAlBpB;AAqBgB;EACI,WAAA;AAnBpB;AA0BgB;EACI,YAAA;AAxBpB;AA2BgB;EACI,YAAA;AAzBpB;AA4BgB;EACI,WAAA;AA1BpB;AA6BgB;EACI,YAAA;AA3BpB;AAkCgB;EACI,WAAA;AAhCpB;AAmCgB;EACI,WAAA;AAjCpB;AAuCY;EACI,8DAAA;AArChB;AAuCgB;EACI,0BAAA;AArCpB;AAyCY;EACI,iCAAA;AAvChB;AA4CgB;EACI,iCAAA;EACA,eAAA;AA1CpB;AA+CQ;;EAEI,gCAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;AA7CZ;AAiDY;EACI,aAAA;EACA,mBAAA;AA/ChB;AAoDY;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,6BAAA;AAlDhB;AAqDY;EAEI,aAAA;AApDhB;AAuDY;EACI,iBAAA;AArDhB;AAyDQ;EACI,qBAAA;EACA,WAAA;AAvDZ;AAyDY;EACI,iBAAA;EACA,uBAAA;EACA,WAAA;AAvDhB;AA4DI;EACI,kBAAA;AA1DR;AA6DY;EACI,oCAAA;EACA,WAAA;EACA,iBAAA;EACA,SAAA;EACA,gBAAA;AA3DhB;AA8DY;EACI,8DAAA;AA5DhB;AAiEY;EACI,iCAAA;AA/DhB;AAoEgB;EACI,iCAAA;EACA,eAAA;AAlEpB;AAyEgB;EACI,WAAA;AAvEpB;AA6EI;EACI,0BAAA;AA3ER;AA8EI;;EAEI,wBAAA;EACA,SAAA;AA5ER","sourcesContent":[".List {\n    position: absolute;\n    margin-top: 10px;\n    height: 93%;\n    width: 95%;\n    border: var(--default-border);\n    box-shadow: var(--default-box-shadow);\n    border-radius: var(--default-border-radius);\n    background-color: #fff !important;\n\n    &-layout {\n        position: absolute;\n        background-color: #fff !important;\n\n        &-header {\n            position: relative;\n            margin-top: 10px;\n            background-color: #fff;\n\n            &-white {\n                background-color: #fff;\n            }\n        }\n\n        &-footer {\n            position: fixed;\n            bottom: 10px;\n            margin-left: 10px;\n            display: flex;\n            align-items: center;\n\n            &-account {\n                display: block;\n                padding: 0;\n                color: darkred;\n            }\n\n            div {\n                font-weight: bold;\n                padding: 3px;\n            }\n        }\n    }\n\n    &-container-stories,\n    &-container-usages {\n        position: relative;\n        width: 99%;\n        height: 100%;\n    }\n\n    &-container-stories {\n        &-hide {\n            display: none;\n        }\n    }\n\n    &-container-usages {\n        &-hide {\n            display: none;\n        }\n    }\n\n    &-list,\n    &-usage-list {\n        position: relative;\n        font-size: 9pt;\n    }\n\n    &-list {\n        position: relative;\n\n        thead {\n            tr {\n\n                th:nth-child(2) {\n                    width: 50px;\n                }\n\n                th:nth-child(3) {\n                    width: 80px;\n                }\n\n                th:nth-child(4) {\n                    // width: auto;\n                }\n\n                th:nth-child(5) {\n                    width: 150px;\n                }\n\n                th:nth-child(6) {\n                    width: 100px;\n                }\n\n                th:nth-child(7) {\n                    width: 80px;\n                }\n\n                th:nth-child(8) {\n                    width: 150px;\n                }\n            }\n        }\n\n        tbody {\n            tr {\n                td:nth-child(3) {\n                    width: auto;\n                }\n\n                td:nth-child(6) {\n                    width: 80px;\n                }\n            }\n        }\n\n        &-row {\n            &-story {\n                background-color: #83b3e948 !important;\n\n                td {\n                    border-top: 1px solid #aaa;\n                }\n            }\n\n            &-subtask {\n                background-color: #fff !important;\n            }\n\n            &-story,\n            &-subtask {\n                &:hover {\n                    background-color: #eee !important;\n                    cursor: pointer;\n                }\n            }\n        }\n\n        textarea,\n        input {\n            font-family: var(--default-font);\n            border: none;\n            outline: none;\n            background-color: transparent;\n        }\n\n        &-div {\n            &-summary {\n                display: flex;\n                align-items: center;\n            }\n        }\n\n        &-txt {\n            &-sps {\n                border: none;\n                outline: none;\n                text-align: center;\n                background-color: transparent;\n            }\n\n            &-summary,\n            &-psummary {\n                outline: none;\n            }\n\n            &-summary {\n                margin-left: 20px;\n            }\n        }\n\n        &-task-link {\n            text-decoration: none;\n            color: #000;\n\n            &:hover {\n                font-weight: bold;\n                text-decoration: dashed;\n                color: blue;\n            }\n        }\n    }\n\n    &-usage-list {\n        position: relative;\n\n        &-row {\n            &-assignee {\n                background-color: #4663b4 !important;\n                color: #fff;\n                font-weight: bold;\n                top: 30px;\n                position: sticky;\n            }\n\n            &-ptask {\n                background-color: #83b3e948 !important;\n                // font-weight: bold;\n\n            }\n\n            &-task {\n                background-color: #fff !important;\n            }\n\n            &-ptask,\n            &-task {\n                &:hover {\n                    background-color: #eee !important;\n                    cursor: pointer;\n                }\n            }\n        }\n\n        thead {\n            tr {\n                th:nth-child(1) {\n                    width: 80px;\n                }\n            }\n        }\n    }\n\n    input[type=number] {\n        -moz-appearance: textfield;\n    }\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"List": "jQpj",
	"List-layout": "vIQ6",
	"List-layout-header": "LQ7d",
	"List-layout-header-white": "Wlxa",
	"List-layout-footer": "UXg5",
	"List-layout-footer-account": "lYAL",
	"List-container-stories": "McrG",
	"List-container-usages": "O3zL",
	"List-container-stories-hide": "lC_7",
	"List-container-usages-hide": "nlvP",
	"List-list": "e23T",
	"List-usage-list": "tTBy",
	"List-list-row-story": "hO7j",
	"List-list-row-subtask": "nuCT",
	"List-list-div-summary": "FgPQ",
	"List-list-txt-sps": "kpIH",
	"List-list-txt-summary": "ezgV",
	"List-list-txt-psummary": "nFQq",
	"List-list-task-link": "enHY",
	"List-usage-list-row-assignee": "zCt0",
	"List-usage-list-row-ptask": "AwUj",
	"List-usage-list-row-task": "Q9lO"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64);






function WorkLog(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.guid8)();
    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [loadded, setLoadded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const delayMiliseconds = props.delayMiliseconds ?? 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        load();
    }, []);
    async function load() {
        await (0,_extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_4__.sleep)(delayMiliseconds);
        const url = `${props.apiUrl}/api/jira/getissueworklogs?issueKey=${props.issueKey}`;
        await (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_3__.getAsync)(url, props.headers, async (response) => {
            if (response.status == 200) {
                const rObjs = await response.json();
                // console.log(rObjs);
                if (rObjs?.length > 0) {
                    setLogs(rObjs);
                }
                else {
                    setLogs(undefined);
                }
                setLoadded(true);
            }
        });
    }
    let className = _WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].WorkLog;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    try {
        let logsElement = loadded ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Not yet" })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Loading..." }));
        if (logs?.length > 0) {
            let totalSeconds = 0;
            logs.forEach(log => {
                totalSeconds += log.TimeSpentSeconds;
            });
            logsElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [Math.round(totalSeconds / 3600), "h / ", props.storyPoints * 2, "h"] }, `${props.issueKey}-worklogs`));
        }
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: thisId, className: className, children: logsElement }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkLog);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_WorkLog_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 65 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
function Routes(props) {
    let isValid = true;
    if (props.onValidating) {
        isValid = props.onValidating();
    }
    let contents = undefined;
    if (isValid) {
        contents = (props.children);
    }
    else {
        if (props.fallback) {
            contents = props.fallback();
        }
    }
    return contents;
}


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function Route(props) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (props.onloaded) {
            props.onloaded();
        }
    }, []);
    let contents = undefined;
    try {
        debugger;
        let tPath = `${window.location.pathname}`;
        if (window.location.protocol == 'file:') {
            tPath = '/';
            if (window.location.hash) {
                tPath = window.location.hash.substring(1);
            }
        }
        if (tPath) {
            while (tPath.startsWith('/')) {
                tPath = tPath.substring(1);
            }
            while (tPath.endsWith('/')) {
                tPath = tPath.substring(0, tPath.length - 1);
            }
            tPath = `/${tPath}`;
        }
        tPath += "/";
        let aliasPath = props.aliasPath;
        if (aliasPath) {
            while (aliasPath.startsWith('/')) {
                aliasPath = aliasPath.substring(1);
            }
            while (aliasPath.endsWith('/')) {
                aliasPath = aliasPath.substring(0, aliasPath.length - 1);
            }
            aliasPath = `/${aliasPath}`;
            if (tPath.indexOf(aliasPath) === 0) {
                tPath = `/${tPath.substring(aliasPath.length)}`;
            }
        }
        if (tPath.localeCompare(`${props.path}/`, undefined, { sensitivity: 'accent' }) === 0) {
            if (props.redirectPath) {
                window.location.pathname = props.redirectPath;
                return undefined;
            }
            contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.element ?? props.children }));
        }
        else if (tPath.startsWith(`${props.prefixPath}/`)) {
            if (props.redirectPath) {
                window.location.pathname = props.redirectPath;
                return undefined;
            }
            contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.element ?? props.children }));
        }
    }
    catch (e) {
    }
    return contents;
}


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_forms_Authenticate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var _components_router_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);







;
function Login(props) {
    console.log("view login");
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    let className = _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Login;
    if (props?.className) {
        className += ` ${props.className}`;
    }
    const apiUrl = props.apiUrl ?? window.location.href;
    const alias = props.alias ?? '';
    const jUrl = localStorage.getItem('j-url');
    const jEmail = localStorage.getItem('j-email');
    const jToken = localStorage.getItem('j-token');
    const loginElement = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_forms_Authenticate__WEBPACK_IMPORTED_MODULE_2__["default"], { apiUrlOptionsHandler: () => ["https://evidenceiq.atlassian.net"], logoPath: './eiq-logo-blue.webp', submitHandler: submitHandler, successHandler: () => new Promise(r => r((0,_components_router_methods__WEBPACK_IMPORTED_MODULE_3__.navigate)(`/jira/main`))), apiUrlLabel: "Jira url", defaultUrl: jUrl, usernameLabel: "Email", defaultUsername: jEmail, passwordLabel: "Jira token", defaultPassword: jToken, zIndex: 1 }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
        }
        catch (e) {
        }
    }, []);
    async function submitHandler(submit) {
        try {
            const url = `${apiUrl}/api/jira/myself`;
            const headers = {
                "j-url": submit.apiUrl,
                "j-email": submit.username,
                "j-token": submit.clearpassword
            };
            const result = await (0,_extensions_HttpExtension__WEBPACK_IMPORTED_MODULE_5__.getAsync)(url, headers, async (response) => {
                if (response.status === 200) {
                    const myselfObj = await response.json();
                    localStorage.setItem('j-url', submit.apiUrl);
                    localStorage.setItem('j-email', submit.username);
                    localStorage.setItem('j-token', submit.clearpassword);
                    sessionStorage.setItem('j-accountid', myselfObj.AccountId);
                    sessionStorage.setItem('j-name', myselfObj.DisplayName);
                    return 200;
                }
            }, undefined, () => {
                return "Invalid username or password";
            });
            return result;
        }
        catch (e) {
        }
    }
    try {
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: thisId, className: className, children: [loginElement, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["Login-gettoken"], children: ["If you have not token yet, get ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { target: "_blank", className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["Login-gettoken-link"], href: "https://id.atlassian.com/manage-profile/security/api-tokens", children: "here" })] })] }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationType": () => (/* binding */ AuthenticationType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var _AutoCompleteTextbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);






var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["UsernameAndPassword"] = "u&p";
    AuthenticationType["Code"] = "code";
})(AuthenticationType || (AuthenticationType = {}));
function Authenticate(props) {
    const thisId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.guid8)();
    const thisRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [hasDialog, setHasDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const zIndex = props.zIndex ?? 0;
    const authType = props.type ?? AuthenticationType.UsernameAndPassword;
    const keyDownHandler = (evt) => {
        try {
            if (evt.code === "Enter" || evt.code === "NumpadEnter") {
                evt.preventDefault();
                console.log(evt.currentTarget);
                onSubmit();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    async function onSubmit() {
        try {
            const apiUrl = document.getElementById(`${thisId}-api-url`)?.value;
            const username = document.getElementById(`${thisId}-username`)?.value;
            const password = document.getElementById(`${thisId}-password`)?.value;
            if (!apiUrl && (props.apiUrlOptions || props.apiUrlOptionsHandler)) {
                if (!hasDialog) {
                    setHasDialog(true);
                    (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openDialog)({
                        zIndex: zIndex + 1,
                        title: props.title ?? 'Authentication',
                        body: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Please input api url" }),
                        confirmButtons: _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmButtons.Ok,
                        onAcceptHandler: () => { setHasDialog(false); }
                    });
                }
                return;
            }
            else {
                setHasDialog(false);
            }
            if (!username) {
                if (!hasDialog) {
                    setHasDialog(true);
                    (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openDialog)({
                        zIndex: zIndex + 1,
                        title: props.title ?? 'Authentication',
                        body: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Please input username" }),
                        confirmButtons: _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmButtons.Ok,
                        onAcceptHandler: () => { setHasDialog(false); }
                    });
                }
                return;
            }
            else {
                setHasDialog(false);
            }
            if (!password) {
                if (!hasDialog) {
                    setHasDialog(true);
                    (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openDialog)({
                        zIndex: zIndex + 1,
                        title: props.title ?? 'Authentication',
                        body: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Please input password" }),
                        confirmButtons: _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmButtons.Ok,
                        onAcceptHandler: () => { setHasDialog(false); }
                    });
                }
                return;
            }
            else {
                setHasDialog(false);
            }
            let sha512password = undefined;
            if (password.length === 128) {
                try {
                    sha512password = await (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.hash)(password, 'sha-512');
                }
                catch (e) {
                    console.log(e);
                }
            }
            if (props.submitHandler) {
                const submitObj = { username, apiUrl, sha512password };
                if (!sha512password) {
                    submitObj.clearpassword = password;
                }
                const dialogId = (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_2__.guid8)();
                (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openProcessing)({
                    id: dialogId,
                    title: props.title ?? 'Authentication'
                });
                await props.submitHandler(submitObj)
                    .then(async (data) => {
                    if (data == 'success' || data === 200) {
                        if (props.successHandler) {
                            await props.successHandler(apiUrl, username)
                                .then(() => (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.closeProcessing)(dialogId));
                        }
                        else {
                            (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.closeProcessing)(dialogId);
                        }
                    }
                    else {
                        (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.closeProcessing)(dialogId);
                        (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openDialog)({
                            id: dialogId,
                            title: props.title ?? 'Authentication',
                            body: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: data ?? "Authentication invalid." }),
                            confirmButtons: _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmButtons.Ok,
                        });
                    }
                })
                    .catch(err => {
                    (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.closeProcessing)(dialogId);
                    console.log(err);
                    (0,_dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.openDialog)({
                        id: dialogId,
                        title: props.title ?? 'Authentication',
                        body: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: err }),
                        confirmButtons: _dialog_Dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmButtons.Ok,
                    });
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    try {
        let className = _Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Authenticate;
        if (props?.className) {
            className += ` ${props.className}`;
        }
        let logoDiv = undefined;
        if (props.logoPath) {
            logoDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["Authenticate-logo"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.logoPath, alt: '' }) }));
        }
        let titleDiv = undefined;
        if (props.title) {
            titleDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["Authenticate-title"], children: props.title }));
        }
        let authenticateDiv = undefined;
        let tabIndex = 0;
        let apiUrlDiv = undefined;
        if (props.apiUrlOptions || props.apiUrlOptionsHandler) {
            apiUrlDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AutoCompleteTextbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: `${thisId}-api-url`, type: "text", placeholder: props.apiUrlLabel ?? "Api url", optionsHandler: () => Promise.resolve(props.apiUrlOptionsHandler()), options: props.apiUrlOptions, tabIndex: ++tabIndex, defaultValue: props.defaultUrl }));
        }
        if (authType == AuthenticationType.UsernameAndPassword) {
            let usernameDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AutoCompleteTextbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: `${thisId}-username`, type: "text", placeholder: props.usernameLabel ?? "Username", tabIndex: ++tabIndex, defaultValue: props.defaultUsername }));
            let passwordDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AutoCompleteTextbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: `${thisId}-password`, type: "password", placeholder: props.passwordLabel ?? "Password", tabIndex: ++tabIndex, defaultValue: props.defaultPassword }));
            authenticateDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [apiUrlDiv, usernameDiv, passwordDiv] }));
        }
        else if (authType == AuthenticationType.Code) {
            let usernameDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AutoCompleteTextbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: `${thisId}-username`, type: "text", placeholder: "Email", tabIndex: ++tabIndex, defaultValue: props.defaultUsername }));
            authenticateDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [apiUrlDiv, usernameDiv] }));
        }
        let submitDiv = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { tabIndex: ++tabIndex, className: _Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["Authenticate-submit"], onClick: onSubmit, type: "submit", value: "Submit", children: "Submit" }) }));
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: thisRef, className: className, onKeyDown: keyDownHandler, style: { zIndex: zIndex }, children: [logoDiv, titleDiv, authenticateDiv, submitDiv] }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authenticate);


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Authenticate_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 71 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".xzXs {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.iZMz {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.iZMz img {\n  max-height: 20px;\n}\n.gtxB {\n  margin-top: 10px;\n  padding: 6px 18px;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/Authenticate.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACR;AACQ;EACI,gBAAA;AACZ;AAII;EACI,gBAAA;EACA,iBAAA;AAFR","sourcesContent":[".Authenticate {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &-logo {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        margin-bottom: 10px;\r\n\r\n        img {\r\n            max-height: 20px;\r\n        }\r\n\r\n    }\r\n\r\n    &-submit {\r\n        margin-top: 10px;\r\n        padding: 6px 18px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Authenticate": "xzXs",
	"Authenticate-logo": "iZMz",
	"Authenticate-submit": "gtxB"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);







function AutoCompleteTextbox(props) {
    const inputId = props.id ?? (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    const thisId = (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)();
    const thisRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        document.addEventListener('click', (evt) => onFocus(evt));
        return () => {
            document.removeEventListener('click', (evt) => onFocus(evt));
        };
    }, []);
    function onFocus(evt) {
        try {
            const componentDiv = document.getElementById(thisId);
            if (componentDiv) {
                const popupClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-box-container"];
                var popupItems = document.getElementsByClassName(popupClassName);
                if (popupItems?.length > 0) {
                    Array.from(popupItems).forEach(ite => {
                        ite.remove();
                    });
                }
            }
        }
        catch (e) {
        }
    }
    function onChange() {
        try {
            const clearHideClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-button-hide"];
            const btnId = `${thisId}-clear`;
            const inputObj = document.getElementById(inputId);
            const btnObj = document.getElementById(btnId);
            if (!inputObj.value) {
                btnObj.innerHTML = "";
                if (!btnObj.classList.contains(clearHideClassName)) {
                    btnObj.classList.add(clearHideClassName);
                }
            }
            else {
                btnObj.innerHTML = "&#x2716;";
                if (btnObj.classList.contains(clearHideClassName)) {
                    btnObj.classList.remove(clearHideClassName);
                }
            }
        }
        catch (e) {
        }
    }
    function clearInput() {
        try {
            const clearHideClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-button-hide"];
            document.getElementById(inputId).value = '';
            const btnObj = document.getElementById(`${thisId}-clear`);
            if (btnObj) {
                btnObj.innerHTML = "";
                if (!btnObj.classList.contains(clearHideClassName)) {
                    btnObj.classList.add(clearHideClassName);
                }
            }
        }
        catch (e) {
        }
    }
    function setInput(text) {
        try {
            if (text) {
                document.getElementById(inputId).value = text;
                const clearHideClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-button-hide"];
                const btnObj = document.getElementById(`${thisId}-clear`);
                if (btnObj) {
                    btnObj.innerHTML = '&#x2716;';
                    if (btnObj.classList.contains(clearHideClassName)) {
                        btnObj.classList.remove(clearHideClassName);
                    }
                }
            }
        }
        catch (e) {
        }
    }
    let popupRoot;
    const popupId = `${thisId}-popup`;
    async function onClick(evt) {
        try {
            await (0,_extensions_ThreadExtension__WEBPACK_IMPORTED_MODULE_5__.sleep)(1);
            let options = props.options;
            if (props.optionsHandler) {
                options = await props.optionsHandler();
            }
            if (options?.length > 0) {
                const popupClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-box-container"];
                const hidePopupClassName = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-box-container-hide"];
                let popupDiv = (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.getOrCreateTag)(popupId, "div");
                if (popupRoot) {
                    popupRoot.unmount();
                }
                popupRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(popupDiv);
                popupRoot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: options.filter((ite) => ite != undefined && ite != '').map((ite, idx) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-item"], onClick: () => { setInput(ite); }, children: [props.showItemNumber ? `${idx + 1}. ` : undefined, ite] }, (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_4__.guid8)())) }));
                if (!popupDiv.classList.contains(popupClassName)) {
                    popupDiv.classList.add(popupClassName);
                }
                if (popupDiv.classList.contains(hidePopupClassName)) {
                    popupDiv.classList.remove(hidePopupClassName);
                }
                (0,_extensions_ElementExtension__WEBPACK_IMPORTED_MODULE_3__.showElementRelativeTarget)(popupDiv, thisId, "top");
            }
        }
        catch (e) {
        }
    }
    try {
        let className = _AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].AutoCompleteTextbox;
        if (props?.className) {
            className += ` ${props.className}`;
        }
        let contents = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: thisRef, id: thisId, className: className, onClick: evt => onClick(evt), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { tabIndex: props.tabIndex, id: inputId, onChange: onChange, type: props.type, placeholder: props.placeholder, required: props.required, defaultValue: props.defaultValue, defaultChecked: props.defaultChecked }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { id: `${thisId}-clear`, className: `${_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-button"]} ${_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["AutoCompleteTextbox-button-hide"]}`, onClick: clearInput })] }));
        return contents;
    }
    catch (e) {
        console.log(e);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoCompleteTextbox);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_AutoCompleteTextbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 74 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ODme {\n  margin: 5px 0 5px 0;\n  border: 1px solid #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\n.ODme div {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ODme div input {\n  position: relative;\n  padding-left: 15px;\n  min-height: 25px;\n  border: none;\n  outline: none;\n  margin-left: 10px;\n}\n.dF8a {\n  background-color: #fff !important;\n  border-radius: 5px;\n  min-height: 28px;\n  min-width: 30px;\n  color: #eee;\n  outline: none;\n  cursor: pointer;\n}\n.dF8a:hover {\n  color: darkred;\n}\n.L3ek {\n  pointer-events: none;\n}\n.T7D1 {\n  flex-direction: column;\n  display: flex;\n  position: fixed;\n  min-width: 200px;\n  box-shadow: 1px 1px 3px #aaaaaa;\n  background-color: #fff;\n  z-index: 10;\n  border-radius: 5px 5px;\n}\n.hEYt {\n  display: none;\n}\n.XrF_ {\n  padding: 6px 10px;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 1px;\n  margin-top: 1px;\n  cursor: pointer;\n  border-radius: 2px 2px;\n}\n.XrF_:nth-child(2n) {\n  background-color: #eee;\n}\n.XrF_:hover {\n  background-color: #aaaaaa;\n}", "",{"version":3,"sources":["webpack://./src/components/forms/AutoCompleteTextbox.module.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,sBAAA;EAIA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAFJ;AAII;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;AAFR;AAIQ;EACI,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;AAFZ;AAOI;EACI,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AALR;AAOQ;EACI,cAAA;AALZ;AAQQ;EACI,oBAAA;AANZ;AAUI;EAEI,sBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;AATR;AAYQ;EACI,aAAA;AAVZ;AAcI;EACI,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,sBAAA;AAZR;AAcQ;EACI,sBAAA;AAZZ;AAeQ;EACI,yBAAA;AAbZ","sourcesContent":[".AutoCompleteTextbox {\r\n    margin: 5px 0 5px 0;\r\n    border: 1px solid #eee;\r\n    // border-radius: 5px 5px;\r\n    // min-height: 40px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #fff;\r\n\r\n    div {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n\r\n        input {\r\n            position: relative;\r\n            padding-left: 15px;\r\n            min-height: 25px;\r\n            border: none;\r\n            outline: none;\r\n            margin-left: 10px;\r\n        }\r\n    }\r\n\r\n\r\n    &-button {\r\n        background-color: #fff !important;\r\n        border-radius: 5px;\r\n        min-height: 28px;\r\n        min-width: 30px;\r\n        color: #eee;\r\n        outline: none;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n            color: darkred;\r\n        }\r\n\r\n        &-hide {\r\n            pointer-events: none;\r\n        }\r\n    }\r\n\r\n    &-box-container {\r\n        // border: 1px solid transparent;\r\n        flex-direction: column;\r\n        display: flex;\r\n        position: fixed;\r\n        min-width: 200px;\r\n        box-shadow: 1px 1px 3px #aaaaaa;\r\n        background-color: #fff;\r\n        z-index: 10;\r\n        border-radius: 5px 5px;\r\n        // min-height: 200px;\r\n\r\n        &-hide {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &-item {\r\n        padding: 6px 10px;\r\n        margin-left: 3px;\r\n        margin-right: 3px;\r\n        margin-bottom: 1px;\r\n        margin-top: 1px;\r\n        cursor: pointer;\r\n        border-radius: 2px 2px;\r\n\r\n        &:nth-child(2n) {\r\n            background-color: #eee;\r\n        }\r\n\r\n        &:hover {\r\n            background-color: #aaaaaa;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AutoCompleteTextbox": "ODme",
	"AutoCompleteTextbox-button": "dF8a",
	"AutoCompleteTextbox-button-hide": "L3ek",
	"AutoCompleteTextbox-box-container": "T7D1",
	"AutoCompleteTextbox-box-container-hide": "hEYt",
	"AutoCompleteTextbox-item": "XrF_"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 76 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".xDI1 {\n  position: absolute;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  bottom: 35%;\n}\n.cDle {\n  padding: 3px;\n  text-decoration: none;\n  font-weight: bold;\n  color: black;\n}\n.cDle:hover {\n  color: blue;\n}", "",{"version":3,"sources":["webpack://./src/ui/Login.module.scss"],"names":[],"mappings":"AACI;EACI,kBAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,WAAA;AAAR;AAEQ;EACI,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;AAAZ;AAEY;EACI,WAAA;AAAhB","sourcesContent":[".Login {\n    &-gettoken {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n        bottom: 35%;\n\n        &-link {\n            padding: 3px;\n            text-decoration: none;\n            font-weight: bold;\n            color: black;\n\n            &:hover {\n                color: blue;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Login-gettoken": "xDI1",
	"Login-gettoken-link": "cDle"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _default_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _components_router_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);
/* harmony import */ var _components_router_Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _ui_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68);









const divRootId = (0,_extensions_HashFuncs__WEBPACK_IMPORTED_MODULE_3__.guid8)();
let divRoot = document.getElementById(divRootId);
if (!divRoot) {
    divRoot = document.createElement("div");
    divRoot.id = divRootId;
    document.body.appendChild(divRoot);
}
const alias = 'jira';
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(divRoot);
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_router_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_router_Route__WEBPACK_IMPORTED_MODULE_7__.Route, { path: "/", redirectPath: `/jira/login` }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_router_Route__WEBPACK_IMPORTED_MODULE_7__.Route, { path: `/jira/login`, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Login__WEBPACK_IMPORTED_MODULE_8__["default"], { alias: alias }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_router_Route__WEBPACK_IMPORTED_MODULE_7__.Route, { path: `/jira/main`, element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {}) })] }) }));

})();

/******/ })()
;
//# sourceMappingURL=index.main.js.map