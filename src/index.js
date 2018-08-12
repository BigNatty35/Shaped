import {addShape, updateActive, addMouseOver} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';

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
  const putShape = function(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("active")[0];
    // while drag is equal to false
     if(!drag) {
       follow = true;  
      switch (selected.id) {
        case "triangle":
          let triangle = new Triangle(e);
          currentShape = triangle;
          triangle.draw();
          placedShapes["triangle"].push(currentShape);
          break;
        case "square":
          let square = new Square(e, angle);
          currentShape = square;
          square.draw();
          placedShapes["square"].push(currentShape);
          // debugger
          break;
        case "hexagon":
          let hexagon = new Hexagon(e);
          currentShape = hexagon;
          hexagon.draw();
          placedShapes["hexagon"].push(currentShape);
          break;
        case "skinny":
          let skinny = new Skinny(e);
          currentShape = skinny;
          skinny.draw();
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
  placedCoords.forEach((sub => { // iterate through all of the shapes on the canvas,
    for (let i = 0; i < sub.length; i++) {
     if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) { // if the mouse is clicking on a shape.
        drag = true;
        follow = false;
        currentShape = sub[i];
        updateActive(currentShape); // places the active class on the selected canvas shape.
        console.log(currentShape);
        sub.splice(i, 1); // delete the current shape from placedShape Object so it can be redrawn
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        // canvas.removeEventListener("mousemove", shapeFollow);
        break;
      }
    }

  }));
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


// function moveSomething(e) {
//   e.preventDefault();
//   switch (e.keyCode) {
//     case 37: // left key is pressed
//       currentShape.angle += 1;
//       currentShape.rotate();
//       console.log("left");
//       break;
//     case 39: // right key is pressed
//       currentShape.angle -= 1;
//       currentShape.rotate();
//       console.log('right');
//       break;
//   }
// }

// canvas.addEventListener('keydown', moveSomething, false);
canvas.addEventListener("click", putShape);
canvas.addEventListener('mousedown', onMouseDown);
// canvas.addEventListener("mouseover", shapeFollow);

let background = new Image();
background.src = '../shapePics/background.jpg';

export default function animate() {
  
  drawShapes();
  addMouseOver();
  

  button.addEventListener("click", clearCanvas);
  // canvas.addEventListener("mousemove", shapeFollow);
  
  requestAnimationFrame(animate);
}