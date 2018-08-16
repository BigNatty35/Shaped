import {addShape, updateActive, addMouseOver} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let select = true;
let drag = false;
let follow = false;
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
  const putShape = function(e) {
    e.stopPropagation();
    let selected = document.getElementsByClassName("active")[0];
      switch (selected.id) {
        case "triangle":
          let triangle = new Triangle(e);
          currentShape = triangle;
          triangle.draw();
          placedShapes["triangle"].push(currentShape);
          break;
        case "square":
          let square = new Square(e,);
          currentShape = square;
          square.draw();
          placedShapes["square"].push(currentShape);
          // debugger
          break;
        case "hexagon":
          let hexagon = new Hexagon(e);
          currentShape = hexagon;
          // debugger
          hexagon.draw();
          placedShapes["hexagon"].push(currentShape);
          break;
        case "skinny":
          let skinny = new Skinny(e);
          currentShape = skinny;
          skinny.draw();
          // onMouseMove(e);
          placedShapes["skinny"].push(currentShape);
          break;
        case "diamond":
          let diamond = new Diamond(e);
          currentShape = diamond;
          diamond.draw();
          placedShapes["diamond"].push(currentShape);
          break;
        case "trapezoid":
          let trapezoid = new Trapezoid(e);
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
  placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
     if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) { // if the mouse is clicking on a shape.
        currentShape = sub[i];
        updateActive(currentShape); // places the active class on the selected canvas shape.
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);
        // canvas.addEventListener('mouseup', onMouseUp);
        // canvas.removeEventListener("mousemove", shapeFollow);
        console.log("yooo MOUSE DOWN");
        break;
      }
    }

  }));
}


export const deletePrevious = function(e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = placedShapes[selected.id];
  // debugger
 shapesArr.splice(shapesArr[shapesArr - 1], 1);
};

export const removeTrail = function(e) {
  let selected = document.getElementsByClassName("active")[0];
  let shapesArr = placedShapes[selected.id];
  // debugger
  for(let i = shapesArr.length - 1; i < shapesArr.length; i++){
    if(shapesArr.length > 0){
    shapesArr.splice(i, 1);
    } 
  }
};



export const onMouseMove = (e) => {
  e.stopPropagation();
  // debugger
    select = true;
    if(select) {
    // drawShapes();
    putShape(e);
    removeTrail();
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
    currentShape.handle.angle += 5;
    context.clearRect(0, 0, width, height);
    console.log(currentShape.handle.angle);
    console.log(placedShapes)
    break;
    case 39:
    console.log("right");
    currentShape.handle.angle -= 5;
    context.clearRect(0, 0, width, height);
    console.log(currentShape.handle.angle);
    console.log(placedShapes)
    break;
  }
}



document.addEventListener('keydown', rotateShape);
canvas.addEventListener('dblclick', deleteShape);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("click", dropShape);
// canvas.addEventListener("mouseup", onMouseUp);

let background = new Image();
background.src = '../shapePics/background.jpg';
// canvas.addEventListener("mouseover", shapeFollow);
addMouseOver(select, currentShape);

export default function animate(){
  drawShapes();
  // canvas.addEventListener('keydown', rotateShape, false);
  // canvas.addEventListener('mousemove', onMouseMove);
  // canvas.addEventListener("click", putShape);
  button.addEventListener("click", clearCanvas);
  // canvas.addEventListener("mousemove", shapeFollow);  
  requestAnimationFrame(animate);
}