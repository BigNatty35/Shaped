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
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');


class Diamond extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/diamond.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 50
    };
    this.name = "diamond";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Diamond);

/***/ }),

/***/ "./src/hexagon.js":
/*!************************!*\
  !*** ./src/hexagon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");


class Hexagon extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/hexagon.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 70
    };
    this.name = "hexagon";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hexagon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: deletePrevious, removeTrail, onMouseMove, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePrevious", function() { return deletePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrail", function() { return removeTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseMove", function() { return onMouseMove; });
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
let select = true;
let drag = false;
let follow = false;
let currentShape;
let angle = 0;
let x = 0;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let height = canvas.height;
let width = canvas.width;
// let angle = currentShape.handle.angle;

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
  e.stopPropagation();
  let selected = document.getElementsByClassName("active")[0];
  switch (selected.id) {
    case "triangle":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      placedShapes["triangle"].push(currentShape);
      break;
    case "square":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      placedShapes["square"].push(currentShape);
      // debugger
      break;
    case "hexagon":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      // debugger
      placedShapes["hexagon"].push(currentShape);
      break;
    case "skinny":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      // onMouseMove(e, angle);
      placedShapes["skinny"].push(currentShape);
      break;
    case "diamond":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      placedShapes["diamond"].push(currentShape);
      break;
    case "trapezoid":
      currentShape = Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addCurrent"])(e, angle);
      placedShapes["trapezoid"].push(currentShape);
      break;
    default:
      break;
  }

  console.log(`after putshape ${currentShape.name}`);
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
  e.stopPropagation();
  context.clearRect(0, 0, width, height);
  currentShape.handle.x = e.clientX;
  currentShape.handle.y = e.clientY;
  currentShape.draw();
  console.log('shape is following');
}

function onMouseDown(e) {
  e.stopPropagation();
  let placedCoords = Object.values(placedShapes);
  drag = true;
  placedCoords.forEach(sub => {
    // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
      if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
        // if the mouse is clicking on a shape.
        currentShape = sub[i];
        //  angle = currentShape.handle.angle;
        Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["updateActive"])(currentShape); // places the active class on the selected canvas shape.
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);

        console.log("yooo MOUSE DOWN");
        break;
      }
    }
  });
}

const deletePrevious = function (e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = placedShapes[selected.id];
  // debugger
  shapesArr.splice(shapesArr[shapesArr - 1], 1);
};

const removeTrail = function (e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = placedShapes[selected.id];
  // debugger
  for (let i = shapesArr.length - 1; i < shapesArr.length; i++) {
    if (shapesArr.length > 0) {
      shapesArr.splice(i, 1);
    }
  }
};

const onMouseMove = e => {
  e.stopPropagation();
  select = true;
  if (select) {
    // drawShapes();
    putShape(e);
    removeTrail();
    // context.clearRect(0, 0, width, height);
    rotateShape(e);
    shapeFollow(e);
    // context.clearRect(0, 0, width, height);
    console.log(`onmouse move:${currentShape}`);
    console.log(currentShape.handle.angle);
  }
};

function deleteShape(e) {
  e.stopPropagation();
  let placedCoords = Object.values(placedShapes);
  placedCoords.forEach(sub => {
    // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
      if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
        // if the mouse is clicking on a shape.
        // currentShape = sub[i];
        // updateActive(currentShape); // places the active class on the selected canvas shape.
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        // canvas.addEventListener('mousemove', shapeFollow);
        // canvas.addEventListener('mouseup', onMouseUp);
        // canvas.removeEventListener("mousemove", shapeFollow);
        console.log("pimpin");
        break;
      }
    }
  });
}

function onMouseUp(e) {
  e.stopPropagation();
  // select = false;
  // debugger
  // angle = 0;
  canvas.removeEventListener('click', dropShape);
  if (drag) {
    putShape(e);
  }
  drag = false;
  canvas.removeEventListener('mousemove', shapeFollow);
  console.log(currentShape);
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
  e.stopPropagation();
  let shapes = Object.keys(placedShapes);
  shapes.forEach(shape => {
    placedShapes[shape] = [];
    return placedShapes;
  });
  context.clearRect(0, 0, width, height);
  console.log("hello");
}

let button = document.getElementById("clear");

function dropShape(e) {
  e.stopPropagation();
  // debugger
  console.log(`The current shape is: ${currentShape}`);
  // select = false;
  putShape(e);
  // select = true;
  console.log(placedShapes, "DROPSHAPE");
  canvas.removeEventListener("mousemove", onMouseMove);
}

function rotateShape(e) {
  e.stopPropagation();
  switch (e.keyCode) {
    case 37:
      console.log('left');
      // currentShape.handle.angle += 5;
      angle += 10;
      context.clearRect(0, 0, width, height);
      currentShape.draw(e);
      console.log(currentShape.handle.angle);
      console.log(placedShapes);
      break;
    case 39:
      console.log("right");
      // currentShape.handle.angle -= 5;
      angle -= 10;
      context.clearRect(0, 0, width, height);
      currentShape.draw();
      console.log(currentShape.handle.angle);
      console.log(placedShapes);
      break;
  }
}

document.addEventListener('keydown', rotateShape);
// canvas.addEventListener('dblclick', deleteShape);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("click", dropShape);
// canvas.addEventListener("mouseup", onMouseUp);

let background = new Image();
background.src = '../shapePics/background.jpg';
Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addMouseOver"])(select, currentShape);

function animate() {
  drawShapes();
  // canvas.addEventListener('keydown', rotateShape, false);
  // canvas.addEventListener('mousemove', onMouseMove);
  // canvas.addEventListener("click", putShape);
  button.addEventListener("click", clearCanvas);
  // canvas.addEventListener("mousemove", shapeFollow);  
  requestAnimationFrame(animate);
}

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

class Shape {
  constructor() {}

  draw() {
    const { shape, handle } = this;
    context.save();
    context.translate(handle.x, handle.y);
    context.rotate(handle.angle * (Math.PI / 180));
    context.drawImage(shape, -shape.width * 0.15, -shape.height * 0.15, shape.width * 0.3, shape.height * 0.3);
    context.restore();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Shape);

/***/ }),

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: addMouseOver, addCurrent, addShape, updateActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMouseOver", function() { return addMouseOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurrent", function() { return addCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShape", function() { return addShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActive", function() { return updateActive; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ "./src/square.js");
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
/* harmony import */ var _skinny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skinny */ "./src/skinny.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diamond */ "./src/diamond.js");
/* harmony import */ var _trapezoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trapezoid */ "./src/trapezoid.js");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triangle */ "./src/triangle.js");








let currentShape = {};
// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");


// adds eventlisteners to all of the shapes on the tool bar
const addMouseOver = (select, follow) => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
    shape.addEventListener("click", addCurrent);
  }
};

const addCurrent = function (e, angle = 0) {
  e.stopPropagation();
  let selected = document.getElementsByClassName("active")[0];
  switch (selected.id) {
    case "triangle":
      currentShape = new _triangle__WEBPACK_IMPORTED_MODULE_6__["default"](e, angle);
      break;
    case "square":
      currentShape = new _square__WEBPACK_IMPORTED_MODULE_1__["default"](e, angle);
      // debugger
      break;
    case "hexagon":
      currentShape = new _hexagon__WEBPACK_IMPORTED_MODULE_2__["default"](e, angle);
      break;
    case "skinny":
      currentShape = new _skinny__WEBPACK_IMPORTED_MODULE_3__["default"](e, angle);
      break;
    case "diamond":
      currentShape = new _diamond__WEBPACK_IMPORTED_MODULE_4__["default"](e, angle);
      break;
    case "trapezoid":
      currentShape = new _trapezoid__WEBPACK_IMPORTED_MODULE_5__["default"](e, angle);
      break;
    default:
      break;
  }
  return currentShape;
  // console.log(`after putshape ${currentShape.name}`);
};

const addShape = function (e, select) {
  e.stopPropagation();
  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.
  // debugger
  if (active) {
    // if there is an element that has active on it, change className to shape-img
    // debugger
    active.className = "shape-img";
  }
  shape.className += " active"; // the element that was clicked now has the active Class;
  select = true;
  // currentShape.name = shape.id;
  canvas.addEventListener('mousemove', _index__WEBPACK_IMPORTED_MODULE_0__["onMouseMove"]);
  // canvas.addEventListener("click", putShape);
  console.log(`Select is ${select}`);
};

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

//this function changes the active shape to the one that was clicked on.
const updateActive = function (cShape) {
  let name = cShape.name;
  let shape = document.getElementById(name); //selects toolbar shape based on currentShape's name
  let active = document.getElementsByClassName("active")[0];
  // if there is an element that has active on it, change className to shape-img
  if (active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};

// console.log({ shapes });

/***/ }),

/***/ "./src/skinny.js":
/*!***********************!*\
  !*** ./src/skinny.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");


class Skinny extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/skinny.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 70
    };
    this.name = "skinny";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Skinny);

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");


class Square extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/square.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 40
    };
    this.name = "square";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Square);

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
  console.log("its loaded");
  disableScroll();
  Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

/***/ }),

/***/ "./src/trapezoid.js":
/*!**************************!*\
  !*** ./src/trapezoid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");


class Trapezoid extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/trapezoid.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 55
    };
    this.name = "trapezoid";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trapezoid);

/***/ }),

/***/ "./src/triangle.js":
/*!*************************!*\
  !*** ./src/triangle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shape.js");


class Triangle extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/triangle.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 25
    };
    this.name = "triangle";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Triangle);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map