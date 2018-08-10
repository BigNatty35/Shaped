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



  const putShape = function(e) {
    
    let selected = document.getElementsByClassName("active")[0];
    let url;


    switch (selected.id) {
      case "triangle":
        let triangle = new Triangle(e);
        currentShape = triangle;
        triangle.draw();
        break;
      case "square":
        let square = new Square(e);
        currentShape = square;
        square.draw();
        break;
      case "hexagon":
        let hexagon = new Hexagon(e);
        currentShape = hexagon;
        hexagon.draw();
        break;
      case "skinny":
        let skinny = new Skinny(e);
        currentShape = skinny;
        skinny.draw();
        break;
      case "diamond":
        let diamond = new Diamond(e);
        currentShape = diamond;
        diamond.draw();
        break;
      case "trapezoid":
        let trapezoid = new Trapezoid(e);
        currentShape = trapezoid;
        trapezoid.draw();
        break;
      default:
        break;
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


function onMouseMove(e) {
  // console.log(e.clientX, e.clientY);
  if(drag){
    currentShape.handle.x = e.clientX;
    currentShape.handle.y = e.clientY;
    currentShape.draw();
  }
}

function onMouseUp(e) {
  drag = false;
  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('mouseup', onMouseUp);
  console.log(currentShape.handle.x, currentShape.handle.y);
  console.log(drag);
}

canvas.addEventListener("click", putShape);
canvas.addEventListener('mousedown', function(e) {
  console.log(currentShape);
  console.log(drag);
  if (circlePointCollision(e.clientX, e.clientY, currentShape.handle)) {
    drag = true;
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
  }
});

// canvas.addEventListener("mousemove", follow);
// canvas.addEventListener("mousemove", putShape);
