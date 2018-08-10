import {addShape} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';

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
  placedCoords.forEach((sub) => {
    for (let i = 0; i < sub.length; i++) {
      if(circlePointCollision(e.clientX, e.clientY, sub[i].handle));
      return true;
    }
  });
}
  const putShape = function(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("active")[0];

    if(!drag && !touching(e)){
      switch (selected.id) {
        case "triangle":
          let triangle = new Triangle(e);
          currentShape = triangle;
          triangle.draw();
          placedShapes["triangle"].push(currentShape);
          break;
        case "square":
          let square = new Square(e);
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
  
 

  
  let shapes = document.getElementsByClassName("shapeIcon");

  console.log({shapes});

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
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
  placedCoords.forEach((sub => {
    for(let i = 0; i < sub.length; i++)

    if (circlePointCollision(e.clientX, e.clientY, sub[i].handle)) {
      drag = true;
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseup', onMouseUp);
      break;
    }

  }));
 }

function onMouseMove(e) {
  e.preventDefault();
  // console.log(e.clientX, e.clientY);
  // context.clearRect(0, 0, width, height);
  if(drag){
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

export default function animate() {
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