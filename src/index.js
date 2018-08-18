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
let background = new Image();
let trash = new Image();
trash.src = '../shapePics/recycle.jpg';
background.src = '../shapePics/background.jpg';
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
    context.clearRect(0, 0, width, height);
    currentShape[0].handle.x = e.clientX;
    currentShape[0].handle.y = e.clientY;
    console.log('shape is following');
}

function onMouseDown(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  
  // debugger
  if(follow === false) {
    placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,
      for (let i = 0; i < sub.length; i++) {
       if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) { // if the mouse is clicking on a shape.
          currentShape[0] = sub[i];
          // debugger
          updateActive(currentShape[0]); // places the active class on the selected canvas shape.
          // sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
          canvas.addEventListener('mousemove', onMouseMove);
  
          console.log("yooo MOUSE DOWN");
          break;
        }
      }
  
    }));
  }
}


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
  e.stopPropagation();
    follow = true;
    shapeFollow(e);
    rotateShape(e);
    console.log(`onmouse move:${currentShape[0].name}`);
    console.log(PLACED_SHAPES);
    console.log(`Follow is ${follow}`);
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
  follow = false;
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




function rotateShape(e) {
  e.stopPropagation();
  switch (e.keyCode) {
    case 37:
    console.log('left');
    currentShape[0].handle.angle += 10;
    context.clearRect(0, 0, width, height);
    currentShape[0].draw(e);
    console.log(currentShape[0].handle.angle);
    console.log(PLACED_SHAPES);
    break;
    case 39:
    console.log("right");
    currentShape[0].handle.angle -= 10;
    context.clearRect(0, 0, width, height);
    currentShape[0].draw();
    console.log(currentShape[0].handle.angle);
    console.log(PLACED_SHAPES);
    break;
  }
}




document.addEventListener('keydown', rotateShape);
// canvas.addEventListener('dblclick', deleteShape);
canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("click", dropShape);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseup", deleteShape);

addClickListener(PLACED_SHAPES, currentShape, angle, follow);

export default function animate(){
  context.drawImage(trash, 50, 100, 300, 190);
  drawShapes();
  button.addEventListener("click", clearCanvas);
  requestAnimationFrame(animate);
}