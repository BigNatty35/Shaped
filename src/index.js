import {addActive, updateActive} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';
import {addToPojo} from './shapes';

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let select = true;
let drag = false;
let follow = false;
let angle = 0;
let currentShape = [];
let x = 0;
let count = 0;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let height = canvas.height;
let width = canvas.width;
let shapes = document.getElementsByClassName("shape-img");


// let angle = currentShape.handle.angle;

 const PLACED_SHAPES = {
  triangle: [],
  hexagon: [],
  square: [],
  diamond: [],
  skinny: [],
  trapezoid: []
};

// addCurrent(angle, currentShape);
const addClickListener = () => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addActive);
    shape.addEventListener("click", (e) => { addToPojo(e, PLACED_SHAPES, currentShape, angle = 0, follow);});
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
  e.stopPropagation();
  // debugger
  let selected = document.getElementsByClassName("active")[0];
    context.clearRect(0, 0, width, height);
    // debugger
    // if (currentShape.name !== selected.id) {
    //   currentShape = addCurrent(angle);
    // } 
    currentShape[0].handle.x = e.clientX;
    currentShape[0].handle.y = e.clientY;
    // currentShape.draw();
    console.log('shape is following');
}

function onMouseDown(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  follow = false;
  // debugger
  placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,

    for (let i = 0; i < sub.length; i++) {
     if (circlePointCollision(e.clientX, e.clientY, sub[i].handle) && follow === false) { // if the mouse is clicking on a shape.
        currentShape.shift();
        currentShape.push(sub[i]);
        // debugger
      //  angle = currentShape.handle.angle;
        updateActive(currentShape[0]); // places the active class on the selected canvas shape.
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);

        console.log("yooo MOUSE DOWN");
        break;
      }
    }

  }));
}


function put

export const deletePrevious = function(e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = PLACED_SHAPES[selected.id];
  // debugger
 shapesArr.splice(shapesArr[shapesArr - 1], 1);
};

export const removeTrail = function(e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = PLACED_SHAPES[selected.id];
  // debugger
  for(let i = shapesArr.length - 1; i < shapesArr.length; i++){
    if(shapesArr.length > 0){
    shapesArr.splice(i, 1);
    } 
  }
};



export const onMouseMove = (e) => {
  // debugger
  e.stopPropagation();
    select = true;
    if(select) {
    // drawShapes();
    // putShape(e);
    shapeFollow(e);
    // removeTrail();
    // context.clearRect(0, 0, width, height);
    rotateShape(e);
    
        // context.clearRect(0, 0, width, height);
      console.log(`onmouse move:${currentShape}`);
      console.log(PLACED_SHAPES);
    }
 
};

function deleteShape(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
      if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) { // if the mouse is clicking on a shape.
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

  }));
}

function onMouseUp(e) {
  e.stopPropagation();
  // select = false;
  // debugger
  // angle = 0;
  
  // putShape(e);
  
  canvas.removeEventListener('click', dropShape);
  // currentShape = null;
  drag = false;
  canvas.removeEventListener('mousemove', onMouseMove);
  console.log("im up");
  console.log(PLACED_SHAPES);
}

function drawShapes() {
  let placedCoords = Object.values(PLACED_SHAPES);
  // debugger
  placedCoords.forEach(sub => {
    for (let i = 0; i < sub.length; i++) {
      if(sub[i] === null) {
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
  console.log(PLACED_SHAPES, "DROPSHAPE");
  canvas.removeEventListener("mousemove", onMouseMove);
}


function rotateShape(e) {
  e.stopPropagation();
  switch (e.keyCode) {
    case 37:
    console.log('left');
    // currentShape.handle.angle += 5;
    currentShape.handle.angle += 10;
    context.clearRect(0, 0, width, height);
    currentShape.draw(e);
    console.log(currentShape.handle.angle);
    console.log(PLACED_SHAPES);
    break;
    case 39:
    console.log("right");
    // currentShape.handle.angle -= 5;
    currentShape.handle.angle -= 10;
    context.clearRect(0, 0, width, height);
    currentShape.draw();
    console.log(currentShape.handle.angle);
    console.log(PLACED_SHAPES);
    break;
  }
}




// canvas.addEventListener("click", addCurrent);
document.addEventListener('keydown', rotateShape);
// canvas.addEventListener('dblclick', deleteShape);
canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("click", dropShape);
canvas.addEventListener("mouseup", onMouseUp);

let background = new Image();
background.src = '../shapePics/background.jpg';
addClickListener(PLACED_SHAPES, currentShape, angle);

export default function animate(){
  drawShapes();
  // canvas.addEventListener('keydown', rotateShape, false);
  // canvas.addEventListener('mousemove', onMouseMove);
  // canvas.addEventListener("click", putShape);
  button.addEventListener("click", clearCanvas);
  // canvas.addEventListener("mousemove", shapeFollow);  
  requestAnimationFrame(animate);
}