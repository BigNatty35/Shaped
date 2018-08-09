import {addShape} from './shapes';

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
      url = ".././shapePics/triangle.png";
      break;
    case "square":
      url = ".././shapePics/square.png";
      break;
    case "hexagon":
      url = ".././shapePics/hexagon.png";
      break;
    case "skinny":
      url = ".././shapePics/skinny.png";
      break;
    case "diamond":
      url = ".././shapePics/diamond.png";
      break;
    case "trapezoid":
      url = ".././shapePics/trapezoid.png";
      break;
    default:
      break;
  }
    currentShape.src = url;
    context.drawImage(currentShape, e.clientX - (currentShape.width * 0.3) / 2, e.clientY - (currentShape.height * 0.3) / 2,
    currentShape.width * 0.3, currentShape.height * 0.3);
  };

  
  let shapes = document.getElementsByClassName("shapeIcon");

  console.log({shapes});

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
  }
  
  // let drawShape = function(e) {

  // }


canvas.addEventListener("mousedown", putShape);
// canvas.addEventListener("mousemove", putShape);
