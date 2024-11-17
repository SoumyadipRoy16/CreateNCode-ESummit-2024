/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/strip-hex-prefix";
exports.ids = ["vendor-chunks/strip-hex-prefix"];
exports.modules = {

/***/ "(ssr)/../node_modules/strip-hex-prefix/src/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/strip-hex-prefix/src/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isHexPrefixed = __webpack_require__(/*! is-hex-prefixed */ \"(ssr)/../node_modules/is-hex-prefixed/src/index.js\");\n\n/**\n * Removes '0x' from a given `String` is present\n * @param {String} str the string value\n * @return {String|Optional} a string by pass if necessary\n */\nmodule.exports = function stripHexPrefix(str) {\n  if (typeof str !== 'string') {\n    return str;\n  }\n\n  return isHexPrefixed(str) ? str.slice(2) : str;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3N0cmlwLWhleC1wcmVmaXgvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQixtQkFBTyxDQUFDLDJFQUFpQjs7QUFFN0M7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWJoYW1yYWtzaGl0L0Rlc2t0b3AvQ3JlYXRlTkNvZGUtRVN1bW1pdC0yMDI0L25vZGVfbW9kdWxlcy9zdHJpcC1oZXgtcHJlZml4L3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNIZXhQcmVmaXhlZCA9IHJlcXVpcmUoJ2lzLWhleC1wcmVmaXhlZCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgJzB4JyBmcm9tIGEgZ2l2ZW4gYFN0cmluZ2AgaXMgcHJlc2VudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciB0aGUgc3RyaW5nIHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd8T3B0aW9uYWx9IGEgc3RyaW5nIGJ5IHBhc3MgaWYgbmVjZXNzYXJ5XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaXBIZXhQcmVmaXgoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXR1cm4gaXNIZXhQcmVmaXhlZChzdHIpID8gc3RyLnNsaWNlKDIpIDogc3RyO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/strip-hex-prefix/src/index.js\n");

/***/ })

};
;