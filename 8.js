(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{531:function(t,e,n){var r=n(532),o=n(533),i=n(534),s=n(536);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||s()},t.exports.default=t.exports,t.exports.__esModule=!0},532:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},533:function(t,e){t.exports=function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,i=[],s=!0,c=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{s||null==n.return||n.return()}finally{if(c)throw o}}return i}},t.exports.default=t.exports,t.exports.__esModule=!0},534:function(t,e,n){var r=n(535);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},535:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},536:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},629:function(t,e,n){"use strict";n.r(e);var r=n(531),o=n.n(r),i=(n(219),n(11)),s=n(2),c=n(527),a=n(528);function u(t){var e=Object(s.useState)(!1),n=o()(e,2),r=n[0],u=n[1],l=Object(s.useState)(!1),d=o()(l,2),f=d[0],p=d[1],j=Object(s.useState)(!1),b=o()(j,2),x=b[0],h=b[1],y=Object(s.useState)(!1),O=o()(y,2),v=O[0],g=O[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,{title:"dialog"},void 0),Object(i.jsx)(a.b,Object.assign({type:"primary",onClick:function(){return u(!0)}},{children:"dialog"}),void 0),Object(i.jsx)(a.f,{show:r,onCancel:function(){return u(!1)}},void 0),Object(i.jsx)(c.a,{title:"dialog style"},void 0),Object(i.jsx)(a.b,Object.assign({type:"primary",onClick:function(){return p((function(t){return!t}))}},{children:"dialog style"}),void 0),Object(i.jsxs)(a.f,Object.assign({show:f,bodyStyle:{height:"30%"},onCancel:function(){return p((function(t){return!t}))}},{children:[Object(i.jsx)(a.f,Object.assign({show:x,onCancel:function(){return h(!1)}},{children:Object(i.jsx)("p",{children:"I'm Child Dialog"},void 0)}),void 0),Object(i.jsx)("p",{children:"Hi!"},void 0),Object(i.jsx)("p",{children:"Hosy mobile ui for react"},void 0),Object(i.jsxs)("p",Object.assign({style:{textAlign:"center"}},{children:[Object(i.jsx)(a.b,Object.assign({type:"primary",onClick:function(){return h((function(t){return!t}))}},{children:"Child"}),void 0),Object(i.jsx)(a.b,Object.assign({type:"primary",onClick:function(){return p((function(t){return!t}))}},{children:"close"}),void 0)]}),void 0)]}),void 0),Object(i.jsx)(c.a,{title:"hide mask"},void 0),Object(i.jsx)(a.f,Object.assign({hideMask:!0,show:v,onCancel:function(){return g(!1)}},{children:"I had hide the mask"}),void 0),Object(i.jsx)(a.b,Object.assign({type:"primary",onClick:function(){return g(!0)}},{children:"hide mask"}),void 0)]},void 0)}!function(t){t.displayName="DemoDialog"}(u||(u={})),e.default=u}}]);
//# sourceMappingURL=8.js.map