import {addShape} from './shapes';

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


  
  const putShape = function(e) {
    let selected = document.getElementsByClassName("active")[0];
    let currentShape = new Image();
    let url;
    switch (selected.id) {
    case "triangle":
      url = ".././shapePics/greentriangle.png";
      break;
    case "square":
      url = ".././shapePics/orangesquare.png";
      break;
    case "hexagon":
      url = ".././shapePics/hexagon.png";
      break;
    case "skinny":
      url = ".././shapePics/browndiamond.png";
      break;
    case "diamond":
      url = ".././shapePics/bluediamond.png";
      break;
    case "trapezoid":
      url = ".././shapePics/red4sides.png";
      break;
    default:
      break;
  }
    currentShape.src = url;
    context.drawImage(currentShape, e.clientX - currentShape.width / 2, e.clientY - currentShape.height / 2);
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
