"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(ssr)/../node_modules/has-proto/index.js":
/*!******************************************!*\
  !*** ../node_modules/has-proto/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar test = {\n\t__proto__: null,\n\tfoo: {}\n};\n\nvar $Object = Object;\n\n/** @type {import('.')} */\nmodule.exports = function hasProto() {\n\t// @ts-expect-error: TS errors on an inherited property for some reason\n\treturn { __proto__: test }.foo === test.foo\n\t\t&& !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2hhcy1wcm90by9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJoYW1yYWtzaGl0L0Rlc2t0b3AvQ3JlYXRlTkNvZGUtRVN1bW1pdC0yMDI0L25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0X19wcm90b19fOiBudWxsLFxuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGVycm9ycyBvbiBhbiBpbmhlcml0ZWQgcHJvcGVydHkgZm9yIHNvbWUgcmVhc29uXG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb29cblx0XHQmJiAhKHRlc3QgaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/has-proto/index.js\n");

/***/ })

};
;