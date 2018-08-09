/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ "./src/square.js");


let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const putShape = function (e) {
  let selected = document.getElementsByClassName("active")[0];
  // debugger
  let currentShape = new Image();
  let url;

  switch (selected.id) {
    case "triangle":
      url = ".././shapePics/triangle.png";
      break;
    case "square":
      let square = new _square__WEBPACK_IMPORTED_MODULE_1__["default"](e);
      square.draw();
      break;
    case "hexagon":
      url = ".././shapePics/hexagon.png";
      break;
    case "skinny":
      url = ".././shapePics/skinny.png";
      break;
    case "diamond":
      url = ".././shapePics/diamond.png";
      break;
    case "trapezoid":
      url = ".././shapePics/trapezoid.png";
      break;
    default:
      break;
  }
  // currentShape.src = url;
  // context.drawImage(currentShape, e.clientX - (currentShape.width * 0.3) / 2, e.clientY - (currentShape.height * 0.3) / 2,
  // currentShape.width * 0.3, currentShape.height * 0.3);
};

let shapes = document.getElementsByClassName("shapeIcon");

console.log({ shapes });

for (let i = 0; i < shapes.length; i++) {
  let shape = shapes[i];
  shape.addEventListener("click", _shapes__WEBPACK_IMPORTED_MODULE_0__["addShape"]);
}

canvas.addEventListener("mousedown", putShape);
// canvas.addEventListener("mousemove", putShape);

/***/ }),

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: addShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShape", function() { return addShape; });

// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");


const addShape = function (e) {
  let active = document.getElementsByClassName("active")[0];
  let shape = e.target;
  // debugger
  if (active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

function Square(e) {

  this.draw = function () {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.drawImage(square, e.clientX - square.width * 0.3 / 2, e.clientY - square.height * 0.3 / 2, square.width * 0.3, square.height * 0.3);
  };
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map