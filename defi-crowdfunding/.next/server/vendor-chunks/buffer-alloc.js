/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-alloc";
exports.ids = ["vendor-chunks/buffer-alloc"];
exports.modules = {

/***/ "(ssr)/../node_modules/buffer-alloc/index.js":
/*!*********************************************!*\
  !*** ../node_modules/buffer-alloc/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bufferFill = __webpack_require__(/*! buffer-fill */ \"(ssr)/../node_modules/buffer-fill/index.js\")\nvar allocUnsafe = __webpack_require__(/*! buffer-alloc-unsafe */ \"(ssr)/../node_modules/buffer-alloc-unsafe/index.js\")\n\nmodule.exports = function alloc (size, fill, encoding) {\n  if (typeof size !== 'number') {\n    throw new TypeError('\"size\" argument must be a number')\n  }\n\n  if (size < 0) {\n    throw new RangeError('\"size\" argument must not be negative')\n  }\n\n  if (Buffer.alloc) {\n    return Buffer.alloc(size, fill, encoding)\n  }\n\n  var buffer = allocUnsafe(size)\n\n  if (size === 0) {\n    return buffer\n  }\n\n  if (fill === undefined) {\n    return bufferFill(buffer, 0)\n  }\n\n  if (typeof encoding !== 'string') {\n    encoding = undefined\n  }\n\n  return bufferFill(buffer, fill, encoding)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQywrREFBYTtBQUN0QyxrQkFBa0IsbUJBQU8sQ0FBQywrRUFBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3N1YmhhbXJha3NoaXQvRGVza3RvcC9DcmVhdGVOQ29kZS1FU3VtbWl0LTIwMjQvbm9kZV9tb2R1bGVzL2J1ZmZlci1hbGxvYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYnVmZmVyRmlsbCA9IHJlcXVpcmUoJ2J1ZmZlci1maWxsJylcbnZhciBhbGxvY1Vuc2FmZSA9IHJlcXVpcmUoJ2J1ZmZlci1hbGxvYy11bnNhZmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5hbGxvYykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG4gIH1cblxuICB2YXIgYnVmZmVyID0gYWxsb2NVbnNhZmUoc2l6ZSlcblxuICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiBidWZmZXJcbiAgfVxuXG4gIGlmIChmaWxsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYnVmZmVyRmlsbChidWZmZXIsIDApXG4gIH1cblxuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gYnVmZmVyRmlsbChidWZmZXIsIGZpbGwsIGVuY29kaW5nKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/buffer-alloc/index.js\n");

/***/ })

};
;