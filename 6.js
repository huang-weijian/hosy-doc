(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{532:function(e,n,t){var r=t(533),o=t(534),s=t(535),i=t(537);e.exports=function(e,n){return r(e)||o(e,n)||s(e,n)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},533:function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},534:function(e,n){e.exports=function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,s=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},535:function(e,n,t){var r=t(536);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},536:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},537:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},827:function(e,n,t){"use strict";var r=t(138),o=t.n(r),s=t(139),i=t.n(s)()(o.a);i.push([e.i,".demo-colon-class {\n  color: red;\n}\n","",{version:3,sources:["webpack://./src/views/DemoCountDown/index.less"],names:[],mappings:"AAAA;EACE,UAAA;AACF",sourcesContent:[".demo-colon-class {\n  color: red;\n}\n\n"],sourceRoot:""}]),n.a=i},850:function(e,n,t){"use strict";t.r(n);var r=t(532),o=t.n(r),s=(t(218),t(9)),i=t(526),c=t(527),a=t(1),u=t(137),l=t.n(u),d=t(827),p={insert:"head",singleton:!1},m=(l()(d.a,p),d.a.locals,t(844)),b=t(830);function f(e){var n=Object(a.useRef)(),t=Object(a.useState)(0),r=o()(t,2),u=r[0],l=r[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"推荐直接使用本包内的useCountDown hook，有更多的扩展方法，可随时更改递减时间、递减值等"},void 0),Object(s.jsx)("p",{children:"It is recommended to directly use useCountDown hook in this package. There are more extension methods, and you can change the decrement time and decrement value at any time"},void 0),Object(s.jsx)(i.a,{title:"countDown"},void 0),Object(s.jsx)(i.a,{title:"props"},void 0),Object(s.jsx)(m.a,Object.assign({language:"typescript",style:b.a},{children:"interface ICountDownProps {\n  /**\n   * 倒计时数，单位毫秒\n   * countdown, unit millisecond\n   */\n  time: number;\n  /**\n   * 间隔时间\n   * Interval time\n   */\n  interval?: number;\n  /**\n   * 递减值\n   * decreasing value\n   */\n  decreasing?: number;\n  style?: CSSProperties;\n  className?: string;\n  dayClassName?: string;\n  hourClassName?: string;\n  minuteClassName?: string;\n  secondClassName?: string;\n  colonClassName?: string;\n  render?: (time: ICountDownTime, remaining: number) => ReactChild;\n}\n\ninterface ICountDownTime {\n  day: number;\n  hour: number;\n  minute: number;\n  second: number;\n}\n"}),void 0),Object(s.jsx)(c.e,{time:6e5,ref:n,interval:1e3,colonClassName:"demo-colon-class"},void 0),Object(s.jsxs)("div",{children:[Object(s.jsx)(c.b,Object.assign({type:"primary",onClick:function(){n.current&&n.current.restart()}},{children:"restart"}),void 0),Object(s.jsx)(c.b,Object.assign({type:"primary",onClick:function(){n.current&&n.current.continue()}},{children:"continue"}),void 0),Object(s.jsx)(c.b,Object.assign({type:"primary",onClick:function(){n.current&&n.current.stop()}},{children:"stop"}),void 0)]},void 0),Object(s.jsxs)("p",{children:[Object(s.jsx)(c.h,{type:"int",onInput:function(e){return l(parseInt(e))}},void 0),Object(s.jsx)(c.b,Object.assign({size:"mini",type:"primary",onClick:function(){n.current&&n.current.restart(u)}},{children:"reset input"}),void 0)]},void 0),Object(s.jsx)(i.a,{title:"custom"},void 0),Object(s.jsx)(c.e,{time:1e4,render:function(e){return"".concat(e.day,"天").concat(e.hour,"小时").concat(e.minute,"分").concat(e.second,"秒")}},void 0)]},void 0)}!function(e){e.displayName="DemoCountDown"}(f||(f={}));n.default=f}}]);
//# sourceMappingURL=6.js.map