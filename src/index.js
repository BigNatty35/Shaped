import {addShape} from './shapes';
import Square from './square';
import Diamond from './diamond';
import Skinny from './skinny';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Trapezoid from './trapezoid';
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


  
  const putShape = function(e) {
    let selected = document.getElementsByClassName("active")[0];
    // debugger
    let currentShape = new Image();
    let url;

    switch (selected.id) {
    case "triangle":
      let triangle = new Triangle(e);
      triangle.draw();
      break;
    case "square":
      let square = new Square(e);
      square.draw();
      break;
    case "hexagon":
      let hexagon = new Hexagon(e);
      hexagon.draw();
      break;
    case "skinny":
      let skinny = new Skinny(e);
      skinny.draw();
      break;
    case "diamond":
      let diamond = new Diamond(e);
      diamond.draw();
      break;
    case "trapezoid":
      let trapezoid = new Trapezoid(e);
      trapezoid.draw();
      break;
    default:
      break;
  }
    // currentShape.src = url;
    // context.drawImage(currentShape, e.clientX - (currentShape.width * 0.3) / 2, e.clientY - (currentShape.height * 0.3) / 2,
    // currentShape.width * 0.3, currentShape.height * 0.3);
  };

  
  let shapes = document.getElementsByClassName("shapeIcon");

  console.log({shapes});

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
  }
  



canvas.addEventListener("mousedown", putShape);
// canvas.addEventListener("mousemove", putShape);
