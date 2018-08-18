import putShape from './index';
import {onMouseMove, onMoveSelect, shapeFollow, deletePrevious }  from './index';
import Square from './square';
import Hexagon from './hexagon';
import Skinny from './skinny';
import Diamond from './diamond';
import Trapezoid from './trapezoid';
import Triangle from './triangle';
// import {PLACED_SHAPES} from './index';
// let currentShape = {};
let count = 0;


export const addToPojo = function(PLACED_SHAPES, e, currentShape, angle = 0 ) {
  // debugger
  // e.stopPropagation();
  count += 1;
  let selected = document.getElementsByClassName("active")[0];
  // debugger
  switch (selected.id) {

    case "triangle":
      currentShape = new Triangle(e.clientX, e.clientY,angle);
      currentShape.draw();
      PLACED_SHAPES["triangle"].push(currentShape);
      break;
    case "square":
      currentShape = new Square(e.clientX, e.clientY, angle);
      currentShape.draw();
      PLACED_SHAPES["square"].push(currentShape);
      // debugger
      break;
    case "hexagon":
      currentShape = new Hexagon(e.clientX, e.clientY, angle);
      currentShape.draw();
      // debugger
      PLACED_SHAPES["hexagon"].push(currentShape);

      break;
    case "skinny":
      currentShape = new Skinny(e.clientX, e.clientY,angle);
      PLACED_SHAPES["skinny"].push(currentShape);
      break;
    case "diamond":
      currentShape = new Diamond(e.clientX, e.clientY,angle);
      PLACED_SHAPES["diamond"].push(currentShape);
      break;
    case "trapezoid":
      currentShape = new Trapezoid(e.clientX, e.clientY,angle);
      PLACED_SHAPES["trapezoid"].push(currentShape);
      break;
    default:
      break;
  }
  console.log("the" + count);
  return currentShape;
  // console.log(`after putshape ${currentShape.name}`);
};


export const addActive = function(e, select) {
  e.stopPropagation();
  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.
  // debugger
  if (active) { // if there is an element that has active on it, change className to shape-img
    // debugger
    active.className = "shape-img";
  }
  shape.className += " active"; // the element that was clicked now has the active Class;
  select = true;
  // currentShape.name = shape.id;
  canvas.addEventListener('mousemove', onMouseMove);
  // canvas.addEventListener("click", putShape);
  console.log(`Select is ${select}`);
};







let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

//this function changes the active shape to the one that was clicked on.
export const updateActive = function(cShape) {
  let name = cShape.name;
  let shape = document.getElementById(name); //selects toolbar shape based on currentShape's name
  let active = document.getElementsByClassName("active")[0];
   // if there is an element that has active on it, change className to shape-img
  if(active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};



// console.log({ shapes });

