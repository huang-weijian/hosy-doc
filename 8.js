(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{530:function(e,t,r){var o=r(531),n=r(532),c=r(533),i=r(535);e.exports=function(e,t){return o(e)||n(e,t)||c(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},531:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},532:function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var o,n,c=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);i=!0);}catch(e){u=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw n}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},533:function(e,t,r){var o=r(534);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},534:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},535:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},626:function(e,t,r){"use strict";r.r(t);var o=r(530),n=r.n(o),c=r(9),i=r(527),u=r(526),s=r(1);t.default=function(e){var t=Object(s.useState)(!1),r=n()(t,2),o=r[0],a=r[1],l=Object(s.useState)(!1),d=n()(l,2),f=d[0],p=d[1],x=Object(s.useState)(!1),b=n()(x,2),h=b[0],j=b[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{title:"checkbox"},void 0),Object(c.jsx)(i.d,{isCheck:o,label:"Checkbox",onChange:function(){return a((function(e){return!e}))}},void 0),Object(c.jsx)(u.a,{title:"color checkbox"},void 0),Object(c.jsx)(i.d,{isCheck:f,iconColor:"#67c23a",label:"Checkbox",onChange:function(){return p((function(e){return!e}))}},void 0),Object(c.jsx)(u.a,{title:"custom icon"},void 0),Object(c.jsx)(i.d,{isCheck:h,label:"Checkbox",iconRender:function(e){return e.isCheck?Object(c.jsx)("span",{children:"+"},void 0):Object(c.jsx)("span",{children:"-"},void 0)},onChange:function(){return j((function(e){return!e}))}},void 0)]},void 0)}}}]);
//# sourceMappingURL=8.js.map