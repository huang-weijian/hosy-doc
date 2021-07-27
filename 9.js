(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{532:function(e,t,n){var o=n(533),r=n(534),i=n(535),s=n(537);e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},533:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},534:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var o,r,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},535:function(e,t,n){var o=n(536);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},536:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},537:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},839:function(e,t,n){"use strict";n.r(t);var o=n(532),r=n.n(o),i=(n(218),n(9)),s=n(1),a=n(526),c=n(527),l=n(844),u=n(830);function d(e){var t=Object(s.useState)(!1),n=r()(t,2),o=n[0],d=n[1],p=Object(s.useState)(!1),b=r()(p,2),j=b[0],f=b[1],x=Object(s.useState)(!1),y=r()(x,2),h=y[0],g=y[1],O=Object(s.useState)(!1),v=r()(O,2),m=v[0],C=v[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(a.a,{title:"dialog"},void 0),Object(i.jsx)(a.a,{title:"props"},void 0),Object(i.jsx)(l.a,Object.assign({language:"typescript",style:u.a},{children:"interface IDialogProps {\n  show: boolean;\n  className?: string;\n  maskClassName?: string;\n  bodyClassName?: string;\n  style?: CSSProperties;\n  bodyStyle?: CSSProperties;\n  /**\n   * 是否隐藏mask\n   * hide mask\n   */\n  hideMask?: boolean;\n  children?: ReactNode;\n  /**\n   *  Dialog打开后的事件 on Dialog opened\n   */\n  onOpened?: () => any;\n  /**\n   *  Dialog关闭后的事件 on Dialog closed\n   */\n  onClosed?: () => any;\n  /**\n   * 取消Dialog  cancel Dialog\n   */\n  onCancel: () => any;\n}"}),void 0),Object(i.jsx)(c.b,Object.assign({type:"primary",onClick:function(){return d(!0)}},{children:"dialog"}),void 0),Object(i.jsx)(c.f,{show:o,onCancel:function(){return d(!1)}},void 0),Object(i.jsx)(a.a,{title:"dialog style"},void 0),Object(i.jsx)(c.b,Object.assign({type:"primary",onClick:function(){return f((function(e){return!e}))}},{children:"dialog style"}),void 0),Object(i.jsxs)(c.f,Object.assign({show:j,bodyStyle:{height:"30%"},onCancel:function(){return f((function(e){return!e}))}},{children:[Object(i.jsx)(c.f,Object.assign({show:h,onCancel:function(){return g(!1)}},{children:Object(i.jsx)("p",{children:"I'm Child Dialog"},void 0)}),void 0),Object(i.jsx)("p",{children:"Hi!"},void 0),Object(i.jsx)("p",{children:"Hosy mobile ui for react"},void 0),Object(i.jsxs)("p",Object.assign({style:{textAlign:"center"}},{children:[Object(i.jsx)(c.b,Object.assign({type:"primary",onClick:function(){return g((function(e){return!e}))}},{children:"Child"}),void 0),Object(i.jsx)(c.b,Object.assign({type:"primary",onClick:function(){return f((function(e){return!e}))}},{children:"close"}),void 0)]}),void 0)]}),void 0),Object(i.jsx)(a.a,{title:"hide mask"},void 0),Object(i.jsx)(c.f,Object.assign({hideMask:!0,show:m,onCancel:function(){return C(!1)}},{children:"I had hide the mask"}),void 0),Object(i.jsx)(c.b,Object.assign({type:"primary",onClick:function(){return C(!0)}},{children:"hide mask"}),void 0)]},void 0)}!function(e){e.displayName="DemoDialog"}(d||(d={})),t.default=d}}]);
//# sourceMappingURL=9.js.map