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
/*! exports provided: TO_RADIANS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_RADIANS", function() { return TO_RADIANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diamond; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI / 180;

function Diamond(e, angle) {
  this.name = 'diamond';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 50
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(diamond, -diamond.width * 0.15, -diamond.height * 0.15, diamond.width * 0.3, diamond.height * 0.3);
    context.restore();
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
const TO_RADIANS = Math.PI / 180;

function Hexagon(e, angle) {
  this.name = 'hexagon';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 70
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(hexagon, -hexagon.width * 0.15, -hexagon.height * 0.15, hexagon.width * 0.3, hexagon.height * 0.3);
    context.restore();
  };
}

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
let angle = 0;
let currentShape = {};
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
      let triangle = new _triangle__WEBPACK_IMPORTED_MODULE_4__["default"](e, angle);
      console.log("new triangle");
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
      let hexagon = new _hexagon__WEBPACK_IMPORTED_MODULE_5__["default"](e, angle);
      currentShape = hexagon;
      // debugger
      hexagon.draw();
      placedShapes["hexagon"].push(currentShape);
      break;
    case "skinny":
      let skinny = new _skinny__WEBPACK_IMPORTED_MODULE_3__["default"](e, angle);
      currentShape = skinny;
      skinny.draw();
      // onMouseMove(e);
      placedShapes["skinny"].push(currentShape);
      break;
    case "diamond":
      let diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"](e, angle);
      currentShape = diamond;
      diamond.draw();
      placedShapes["diamond"].push(currentShape);
      break;
    case "trapezoid":
      let trapezoid = new _trapezoid__WEBPACK_IMPORTED_MODULE_6__["default"](e, angle);
      currentShape = trapezoid;
      trapezoid.draw();
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

  // debugger
  context.clearRect(0, 0, width, height);
  currentShape.handle.x = e.clientX;
  currentShape.handle.y = e.clientY;
  currentShape.draw();
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
        Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["updateActive"])(currentShape); // places the active class on the selected canvas shape.
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);
        // canvas.addEventListener('mouseup', onMouseUp);
        // canvas.removeEventListener("mousemove", shapeFollow);
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
  // debugger
  select = true;
  if (select) {
    // drawShapes();
    putShape(e);
    removeTrail();
    rotateShape(e);
    context.clearRect(0, 0, width, height);
    currentShape.handle.x = e.clientX;
    currentShape.handle.y = e.clientY;
    currentShape.draw();
    // context.clearRect(0, 0, width, height);
    console.log(`onmouse move:${currentShape}`);
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
      currentShape.handle.angle += 10;
      angle += 10;
      context.clearRect(0, 0, width, height);
      console.log(currentShape.handle.angle);
      console.log(placedShapes);
      break;
    case 39:
      console.log("right");
      currentShape.handle.angle -= 10;
      angle -= 10;
      context.clearRect(0, 0, width, height);
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
// canvas.addEventListener("mouseover", shapeFollow);
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

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: addMouseOver, addShape, updateActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMouseOver", function() { return addMouseOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShape", function() { return addShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActive", function() { return updateActive; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");


// adds eventlisteners to all of the shapes on the tool bar
const addMouseOver = (select, follow) => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
  }
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
const updateActive = function (currentShape) {
  let name = currentShape.name;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skinny; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI / 180;

function Skinny(e, angle) {
  this.name = "skinny";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 70
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(skinny, -skinny.width * 0.15, -skinny.height * 0.15, skinny.width * 0.3, skinny.height * 0.3);
    context.restore();
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
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
    angle: angle,
    radius: 40
  };
  // this.angle = angle;

  this.draw = function () {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(square, -square.width * 0.15, -square.height * 0.15, square.width * 0.3, square.height * 0.3);
    context.restore();
  };
}

// class Square extends Shape {
//   constructor(e, imgUrl, name) {
//     super(imgUrl);
//     this.handle = {
//       x: e.clientX,
//       y: e.clientY,
//       angle: 0,
//       radius: 40
//     };
//     this.name = name;
//   }
// }

// export default Square;

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trapezoid; });
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI / 180;

function Trapezoid(e, angle) {
  this.name = 'trapezoid';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 55
  };
  this.draw = function () {
    let trapezoid = new Image();
    trapezoid.src = "../shapePics/trapezoid.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(trapezoid, -trapezoid.width * 0.15, -trapezoid.height * 0.15, trapezoid.width * 0.3, trapezoid.height * 0.3);
    context.restore();
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
const TO_RADIANS = Math.PI / 180;

function Triangle(e, angle) {
  this.name = "triangle";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 25
  };
  this.draw = function () {
    let triangle = new Image();
    triangle.src = "../shapePics/triangle.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(triangle, -triangle.width * 0.15, -triangle.height * 0.15, triangle.width * 0.3, triangle.height * 0.3);
    context.restore();
  };
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map