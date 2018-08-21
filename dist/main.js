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
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/diamond.png";
    this.handle.radius = 50;
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
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/hexagon.png";
    this.handle.radius = 70;
    this.name = "hexagon";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hexagon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: onMouseMove, onMouseUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseMove", function() { return onMouseMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseUp", function() { return onMouseUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ "./src/square.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diamond */ "./src/diamond.js");
/* harmony import */ var _skinny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skinny */ "./src/skinny.js");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triangle */ "./src/triangle.js");
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
/* harmony import */ var _trapezoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trapezoid */ "./src/trapezoid.js");
/* harmony import */ var _trashbin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trashbin */ "./src/trashbin.js");









let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let select = true;
let drag = false;
let follow = false;
let angle = 0;
let currentShape = [];
let x = 0;
let count = 0;
let trash = new _trashbin__WEBPACK_IMPORTED_MODULE_7__["default"](context);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let height = canvas.height;
let width = canvas.width;
let shapes = document.getElementsByClassName("shape-img");

const PLACED_SHAPES = {
  triangle: [],
  hexagon: [],
  square: [],
  diamond: [],
  skinny: [],
  trapezoid: []
};

const addClickListener = () => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", _shapes__WEBPACK_IMPORTED_MODULE_0__["addActive"]);
    shape.addEventListener("click", e => {
      Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["setCurrent"])(e, currentShape, angle = 0, follow);
    });
  }
};

function distanceXY(x0, y0, x1, y1) {
  let dx = x1 - x0,
      dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
}

function circlePointCollision(mouseX, mouseY, circle) {
  return distanceXY(mouseX, mouseY, circle.x, circle.y) < circle.radius;
}

function shapeFollow(e) {
  e.stopPropagation();
  context.clearRect(0, 0, width, height);
  currentShape[0].handle.x = e.clientX;
  currentShape[0].handle.y = e.clientY;
  currentShape[0].draw();
}

function onMouseDown(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  if (follow === false) {
    drag = true;
    placedCoords.forEach(sub => {
      // iterate through all of the shapes on the canvas,
      for (let i = 0; i < sub.length; i++) {
        if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
          // if the mouse is clicking on a shape.
          currentShape[0] = sub[i];
          Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["updateActive"])(currentShape[0]); // places the active class on the selected canvas shape.
          canvas.addEventListener('mousemove', onMouseMove);
          break;
        }
      }
    });
  }
}

const onMouseMove = e => {
  e.stopPropagation();
  follow = true;
  shapeFollow(e);
  rotateShape(e);
};

function deleteShape(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  if (circlePointCollision(e.clientX, e.clientY, trash.handle)) {
    placedCoords.forEach(sub => {
      for (let i = 0; i < sub.length; i++) {
        if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
          sub.splice(i, 1);
          currentShape = [];
          break;
        }
      }
    });
  }
}

function onMouseUp(e) {
  e.stopPropagation();
  follow = false;
  drag = false;
  canvas.removeEventListener('mousemove', onMouseMove);
}

function drawShapes() {
  let placedCoords = Object.values(PLACED_SHAPES);
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      if (sub[i] === null) {
        continue;
      }
      sub[i].draw();
    }
  });
}

function clearCanvas(e) {
  e.stopPropagation();
  let shapes = Object.keys(PLACED_SHAPES);
  shapes.forEach(shape => {
    PLACED_SHAPES[shape] = [];
    return PLACED_SHAPES;
  });
  context.clearRect(0, 0, width, height);
}

let button = document.getElementsByClassName("clear-canvas")[0];

function rotateShape(e) {
  e.stopPropagation();
  switch (e.keyCode) {
    case 37:
      currentShape[0].handle.angle += 3;
      context.clearRect(0, 0, width, height);
      currentShape[0].draw(e);
      break;
    case 39:
      currentShape[0].handle.angle -= 3;
      context.clearRect(0, 0, width, height);
      currentShape[0].draw();
      break;
    case 65:
      currentShape[0].handle.angle += 3;
      context.clearRect(0, 0, width, height);
      currentShape[0].draw(e);
      break;
    case 68:
      currentShape[0].handle.angle -= 3;
      context.clearRect(0, 0, width, height);
      currentShape[0].draw(e);
      break;

  }
}

document.addEventListener('keydown', rotateShape);
canvas.addEventListener('mouseup', e => {
  Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["addToPojo"])(e, PLACED_SHAPES, currentShape, follow, drag);
});
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", deleteShape);

addClickListener(currentShape, angle, follow);

function animate() {
  trash.draw();
  drawShapes();
  button.addEventListener("click", clearCanvas);
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
  constructor(x, y, angle) {
    this.handle = {
      x: this.x,
      y: this.y,
      angle
    };
  }

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
/*! exports provided: setCurrent, addToPojo, addActive, updateActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrent", function() { return setCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToPojo", function() { return addToPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActive", function() { return addActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActive", function() { return updateActive; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ "./src/square.js");
/* harmony import */ var _hexagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexagon */ "./src/hexagon.js");
/* harmony import */ var _skinny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skinny */ "./src/skinny.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diamond */ "./src/diamond.js");
/* harmony import */ var _trapezoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trapezoid */ "./src/trapezoid.js");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triangle */ "./src/triangle.js");









const setCurrent = function (e, current, angle = 0, follow) {
  e.stopPropagation();
  let selected = document.getElementsByClassName("active")[0];
  follow = true;
  switch (selected.id) {
    case "triangle":
      current[0] = new _triangle__WEBPACK_IMPORTED_MODULE_6__["default"](e.clientX, e.clientY, angle);
      break;
    case "square":
      current[0] = new _square__WEBPACK_IMPORTED_MODULE_1__["default"](e.clientX, e.clientY, angle);
      break;
    case "hexagon":
      current[0] = new _hexagon__WEBPACK_IMPORTED_MODULE_2__["default"](e.clientX, e.clientY, angle);
      break;
    case "skinny":
      current[0] = new _skinny__WEBPACK_IMPORTED_MODULE_3__["default"](e.clientX, e.clientY, angle, context);
      break;
    case "diamond":
      current[0] = new _diamond__WEBPACK_IMPORTED_MODULE_4__["default"](e.clientX, e.clientY, angle);
      break;
    case "trapezoid":
      current[0] = new _trapezoid__WEBPACK_IMPORTED_MODULE_5__["default"](e.clientX, e.clientY, angle);
      break;
    default:
      break;
  }
  return current;
};

const addToPojo = function (e, pojo, current, follow, drag) {
  e.stopPropagation();
  if (current.length > 0 && follow === true && drag === false) {
    follow = false;
    switch (current[0].name) {
      case "triangle":
        pojo["triangle"].push(current[0]);
        break;
      case "square":
        pojo["square"].push(current[0]);
        break;
      case "hexagon":
        pojo["hexagon"].push(current[0]);
        break;
      case "skinny":
        pojo["skinny"].push(current[0]);
        break;
      case "diamond":
        pojo["diamond"].push(current[0]);
        break;
      case "trapezoid":
        pojo["trapezoid"].push(current[0]);
        break;
      default:
        break;
    }
  }
};

const addActive = function (e, select) {
  e.stopPropagation();
  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.
  if (active) {
    // if there is an element that has active on it, change className to shape-img
    active.className = "shape-img";
  }

  shape.className += " active"; // the element that was clicked now has the active Class;
  select = true;
  canvas.addEventListener('mousemove', _index__WEBPACK_IMPORTED_MODULE_0__["onMouseMove"]);
  canvas.addEventListener("mouseup", _index__WEBPACK_IMPORTED_MODULE_0__["onMouseUp"]);
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

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

class Skinny extends _shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/skinny.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 30
    };
    this.name = "skinny";
  }
  draw() {
    const { shape, handle } = this;
    context.save();
    context.translate(handle.x, handle.y);
    context.rotate(handle.angle * (Math.PI / 180));
    context.drawImage(shape, -shape.width * 0.5, -shape.height * 0.5, shape.width, shape.height);
    context.restore();
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
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/square.png";
    this.handle.radius = 40;
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
  span.addEventListener("click", closeModal);
  document.addEventListener("click", closeModal);
  info.addEventListener("click", openModal);
});

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.stopPropagation();
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  e.stopPropagation();
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {

  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
let modal = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];
let info = document.getElementsByClassName("info")[0];

const closeModal = function (e) {
  e.stopPropagation();
  modal.style.display = "none";
};

const openModal = function (e) {
  e.stopPropagation();
  modal.style.display = "block";
};

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
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/trapezoid.png";
    this.handle.radius = 55;
    this.name = "trapezoid";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trapezoid);

/***/ }),

/***/ "./src/trashbin.js":
/*!*************************!*\
  !*** ./src/trashbin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Trashbin(context, canvas) {
  let trash = new Image();
  trash.src = "./shapePics/trashbin.png";
  this.handle = {
    x: 50,
    y: 600,
    radius: 100
  };

  this.draw = function () {
    context.drawImage(trash, 50, 600, trash.height * 0.25, trash.width * 0.25);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Trashbin);

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
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/triangle.png";
    this.handle.radius = 25;
    this.name = "triangle";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Triangle);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map