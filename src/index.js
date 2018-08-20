import {addActive, updateActive} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';
import {setCurrent, addToPojo} from './shapes';
import Trashbin from './trashbin';
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let select = true;
let drag = false;
let follow = false;
let angle = 0;
let currentShape = [];
let x = 0;
let count = 0;
let trash = new Trashbin(context);

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
    shape.addEventListener("click", addActive);
    shape.addEventListener("click", (e) => { setCurrent(e,currentShape, angle = 0, follow);});
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
  if(follow === false) {
    drag = true;
    placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,
      for (let i = 0; i < sub.length; i++) {
       if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) { // if the mouse is clicking on a shape.
          currentShape[0] = sub[i];
          updateActive(currentShape[0]); // places the active class on the selected canvas shape.
          canvas.addEventListener('mousemove', onMouseMove);
          break;
        }
      }
    }));
  }
}


export const onMouseMove = (e) => {
  e.stopPropagation();
    follow = true;
    shapeFollow(e);
    rotateShape(e);
};

function deleteShape(e) {
  e.stopPropagation();
  let placedCoords = Object.values(PLACED_SHAPES);
  if(circlePointCollision(e.clientX, e.clientY, trash.handle)) { 
    placedCoords.forEach((sub) => {
      for(let i = 0; i < sub.length; i++) {
        if(circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
          sub.splice(i, 1);
          currentShape = [];
          break;
        }
      }
    });
  }
}

export function onMouseUp(e) {
  e.stopPropagation();
  follow = false;
  drag = false;
  canvas.removeEventListener('mousemove', onMouseMove);
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
canvas.addEventListener('mouseup', (e) => {addToPojo(e, PLACED_SHAPES, currentShape, follow, drag);});
canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("click", dropShape);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", deleteShape);

addClickListener(currentShape, angle, follow);

export default function animate(){
  trash.draw();
  drawShapes();
  button.addEventListener("click", clearCanvas);
  requestAnimationFrame(animate);
}