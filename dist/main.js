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
  this.name = 'diamond';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 100
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.drawImage(diamond, this.handle.x - diamond.width * 0.15, this.handle.y - diamond.height * 0.15, diamond.width * 0.3, diamond.height * 0.3);
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
  this.name = 'hexagon';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 70
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.drawImage(hexagon, this.handle.x - hexagon.width * 0.15, this.handle.y - hexagon.height * 0.15, hexagon.width * 0.3, hexagon.height * 0.3);
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
let follow = false;
let currentShape = {};
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let height = canvas.height;
let width = canvas.width;
let angle = 0;

let placedShapes = {
  triangle: [],
  hexagon: [],
  square: [],
  diamond: [],
  skinny: [],
  trapezoid: []
};

//draws the shape based on which shape is selected in the tool bar
const putShape = function (e) {
  e.preventDefault();
  let selected = document.getElementsByClassName("active")[0];
  // while drag is equal to false
  if (!drag) {
    follow = true;
    switch (selected.id) {
      case "triangle":
        let triangle = new _triangle__WEBPACK_IMPORTED_MODULE_4__["default"](e);
        currentShape = triangle;
        triangle.draw();
        placedShapes["triangle"].push(currentShape);
        break;
      case "square":
        let square = new _square__WEBPACK_IMPORTED_MODULE_1__["default"](e, angle);
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

function distanceXY(x0, y0, x1, y1) {
  let dx = x1 - x0,
      dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
}
// c
function circlePointCollision(mouseX, mouseY, circle) {
  return distanceXY(mouseX, mouseY, circle.x, circle.y) < circle.radius;
}

function shapeFollow(e) {
  e.preventDefault();
  // if(follow) {
  // debugger
  context.clearRect(0, 0, width, height);
  currentShape.handle.x = e.clientX;
  currentShape.handle.y = e.clientY;
  currentShape.draw();
}

function onMouseDown(e) {
  e.preventDefault();
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
      if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
        // if the mouse is clicking on a shape.
        drag = true;
        follow = false;
        currentShape = sub[i];
        Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["updateActive"])(currentShape); // places the active class on the selected canvas shape.
        console.log(currentShape);
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        // canvas.removeEventListener("mousemove", shapeFollow);
        break;
      }
    }
  });
}

function onMouseMove(e) {
  e.preventDefault();
  if (drag) {
    context.clearRect(0, 0, width, height);
    currentShape.handle.x = e.clientX;
    currentShape.handle.y = e.clientY;
    currentShape.draw();
  }
}

function onMouseUp(e) {
  e.preventDefault();
  drag = false;

  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('mouseup', onMouseUp);
  currentShape.draw();
  context.clearRect(0, 0, height, width);
  console.log(currentShape);
  console.log(drag);
}

function drawShapes() {
  let placedCoords = Object.values(placedShapes);

  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      sub[i].draw();
    }
  });
}

function clearCanvas(e) {
  e.preventDefault();
  let shapes = Object.keys(placedShapes);
  shapes.forEach(shape => {
    placedShapes[shape] = [];
    return placedShapes;
  });
  context.clearRect(0, 0, width, height);
  console.log("hello");
}

let button = document.getElementById("clear");

function moveSomething(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      // left key is pressed
      currentShape.angle += 1;
      currentShape.rotate();
      console.log("left");
      break;
    case 39:
      // right key is pressed
      currentShape.angle -= 1;
      currentShape.rotate();
      console.log('right');
      break;
  }
}

canvas.addEventListener('keydown', moveSomething, false);
canvas.addEventListener("click", putShape);
canvas.addEventListener('mousedown', onMouseDown);
// canvas.addEventListener("mouseover", shapeFollow);

let background = new Image();
background.src = '../shapePics/background.jpg';

function animate() {

  drawShapes();

  button.addEventListener("click", clearCanvas);
  // canvas.addEventListener("mousemove", shapeFollow);

  requestAnimationFrame(animate);
}

/***/ }),

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: addShape, updateActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShape", function() { return addShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActive", function() { return updateActive; });
// import shapeFollow from './index';
// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");

const addMouseOver = () => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("mouseover", addShape);
  }
};

const addShape = function (e, follow) {
  e.stopPropagation();
  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.

  if (active) {
    // if there is an element that has active on it, change className to shape-img
    // debugger
    active.className = "shape-img";
  }
  shape.className += " active"; // the element that was clicked now has the active Class;
  follow = true;
  console.log(follow);
};

addMouseOver();

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

//this function changes the active shape to the one that was clicked on.
const updateActive = function (currentShape, follow) {
  let name = currentShape.name;
  let shape = document.getElementById(name); //selects toolbar shape based on currentShape's name
  let active = document.getElementsByClassName("active")[0];
  // if there is an element that has active on it, change className to shape-img
  follow = true;
  if (active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};

console.log({ shapes });

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
  this.name = "skinny";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 70
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.drawImage(skinny, this.handle.x - skinny.width * 0.3 / 2, this.handle.y - skinny.height * 0.3 / 2, skinny.width * 0.6, skinny.height * 0.6);
  };
}

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/*! exports provided: TO_RADIANS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_RADIANS", function() { return TO_RADIANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

const TO_RADIANS = Math.PI / 180;

function Square(e, angle) {
  this.name = "square";
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 40
  };
  // this.angle = angle;

  this.draw = function () {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.drawImage(square, this.handle.x - square.width * 0.15, this.handle.y - square.height * 0.15, square.width * 0.3, square.height * 0.3);
  };

  this.rotate = function () {
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(TO_RADIANS);
    context.translate(0, 0);
    this.draw();
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
  this.name = 'trapezoid';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 70
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
  this.name = "triangle";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 25
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