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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/diamond.js":
/*!************************!*\
  !*** ./src/diamond.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diamond; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

function Diamond(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 100
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.drawImage(diamond, this.handle.x - diamond.width * 0.3 / 2, this.handle.y - diamond.height * 0.3 / 2, diamond.width * 0.3, diamond.height * 0.3);
  };
}

/***/ }),

/***/ "./src/hexagon.js":
/*!************************!*\
  !*** ./src/hexagon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hexagon; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

function Hexagon(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 150
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.drawImage(hexagon, this.handle.x - hexagon.width * 0.3 / 2, this.handle.y - hexagon.height * 0.3 / 2, hexagon.width * 0.3, hexagon.height * 0.3);
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ "./src/square.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diamond */ "./src/diamond.js");
/* harmony import */ var _skinny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skinny */ "./src/skinny.js");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triangle */ "./src/triangle.js");
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
/* harmony import */ var _trapezoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trapezoid */ "./src/trapezoid.js");








let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let drag = false;
let currentShape;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let height = canvas.height;
let width = canvas.width;

let placedShapes = {
  triangle: [],
  hexagon: [],
  square: [],
  diamond: [],
  skinny: [],
  trapezoid: []
};

function touching(e) {
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) ;
      return true;
    }
  });
}
const putShape = function (e) {
  e.preventDefault();
  let selected = document.getElementsByClassName("active")[0];

  if (!drag && !touching(e)) {
    switch (selected.id) {
      case "triangle":
        let triangle = new _triangle__WEBPACK_IMPORTED_MODULE_4__["default"](e);
        currentShape = triangle;
        triangle.draw();
        placedShapes["triangle"].push(currentShape);
        break;
      case "square":
        let square = new _square__WEBPACK_IMPORTED_MODULE_1__["default"](e);
        currentShape = square;
        square.draw();
        placedShapes["square"].push(currentShape);
        // debugger
        break;
      case "hexagon":
        let hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_5__["default"](e);
        currentShape = hexagon;
        hexagon.draw();
        placedShapes["hexagon"].push(currentShape);
        break;
      case "skinny":
        let skinny = new _skinny__WEBPACK_IMPORTED_MODULE_3__["default"](e);
        currentShape = skinny;
        skinny.draw();
        placedShapes["skinny"].push(currentShape);
        break;
      case "diamond":
        let diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"](e);
        currentShape = diamond;
        diamond.draw();
        placedShapes["diamond"].push(currentShape);
        break;
      case "trapezoid":
        let trapezoid = new _trapezoid__WEBPACK_IMPORTED_MODULE_6__["default"](e);
        currentShape = trapezoid;
        trapezoid.draw();
        placedShapes["trapezoid"].push(currentShape);
        break;
      default:
        break;
    }
    console.log(placedShapes);
  }
};

let shapes = document.getElementsByClassName("shapeIcon");

console.log({ shapes });

for (let i = 0; i < shapes.length; i++) {
  let shape = shapes[i];
  shape.addEventListener("click", _shapes__WEBPACK_IMPORTED_MODULE_0__["addShape"]);
}

function distanceXY(x0, y0, x1, y1) {
  let dx = x1 - x0,
      dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
}
// c
function circlePointCollision(mouseX, mouseY, circle) {
  return distanceXY(mouseX, mouseY, circle.x, circle.y) < circle.radius;
}

function onMouseDown(e) {
  e.preventDefault();
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
      drag = true;
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseup', onMouseUp);
      break;
    }
  });
}

function onMouseMove(e) {
  e.preventDefault();
  // console.log(e.clientX, e.clientY);
  // context.clearRect(0, 0, width, height);
  if (drag) {
    // context.save();
    context.clearRect(0, 0, width, height);
    currentShape.handle.x = e.clientX;
    currentShape.handle.y = e.clientY;
    currentShape.draw();
    // context.clearRect(0, 0, width, height);
    // context.restore();
  }
}

function onMouseUp(e) {
  e.preventDefault();
  drag = false;
  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('mouseup', onMouseUp);
  context.clearRect(0, 0, height, width);
  console.log(currentShape.handle.x, currentShape.handle.y);
  console.log(drag);
}

canvas.addEventListener("click", putShape);
canvas.addEventListener('mousedown', onMouseDown);

function drawShapes() {
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      sub[i].draw();
    }
  });
}

function animate() {
  // context.fillRect(0, 0, width, height);
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      sub[i].draw();
      // console.log("hello");
    }
  });

  requestAnimationFrame(animate);
}

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

/***/ "./src/skinny.js":
/*!***********************!*\
  !*** ./src/skinny.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skinny; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

function Skinny(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 30
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.drawImage(skinny, e.clientX - skinny.width * 0.3 / 2, e.clientY - skinny.height * 0.3 / 2, skinny.width * 0.3, skinny.height * 0.3);
  };
}

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
let width = canvas.width;
let height = canvas.height;

function Square(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 40
  };

  this.draw = function () {
    let square = new Image();
    square.src = "../shapePics/square.png";
    // context.clearRect(this.handle.x, this.handle.y, square.width * 0.3, square.height * 0.3);
    context.save();
    context.drawImage(square, this.handle.x - square.width * 0.3 / 2, this.handle.y - square.height * 0.3 / 2, square.width * 0.3, square.height * 0.3);
    context.restore();
  };
}

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/trapezoid.js":
/*!**************************!*\
  !*** ./src/trapezoid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trapezoid; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

function Trapezoid(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 150
  };
  this.draw = function () {
    let trapezoid = new Image();
    trapezoid.src = "../shapePics/trapezoid.png";
    context.drawImage(trapezoid, this.handle.x - trapezoid.width * 0.3 / 2, this.handle.y - trapezoid.height * 0.3 / 2, trapezoid.width * 0.3, trapezoid.height * 0.3);
  };
}

/***/ }),

/***/ "./src/triangle.js":
/*!*************************!*\
  !*** ./src/triangle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Triangle; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

function Triangle(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 80
  };
  this.draw = function () {
    let triangle = new Image();
    triangle.src = "../shapePics/triangle.png";
    context.drawImage(triangle, this.handle.x - triangle.width * 0.3 / 2, this.handle.y - triangle.height * 0.3 / 2, triangle.width * 0.3, triangle.height * 0.3);
  };
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map