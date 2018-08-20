import putShape from './index';
import {onMouseMove, onMoveSelect, shapeFollow, onMouseUp }  from './index';
import Square from './square';
import Hexagon from './hexagon';
import Skinny from './skinny';
import Diamond from './diamond';
import Trapezoid from './trapezoid';
import Triangle from './triangle';


export const setCurrent = function(e,current, angle = 0, follow) {
  // debugger
  e.stopPropagation();
  let selected = document.getElementsByClassName("active")[0];
  // debugger
  follow = true;
  switch (selected.id) {
    case "triangle":
      current[0] = new Triangle(e.clientX, e.clientY,angle);
      break;
    case "square":
      current[0] = new Square(e.clientX, e.clientY, angle);
      break;
    case "hexagon":
      current[0] = new Hexagon(e.clientX, e.clientY, angle);
      break;
    case "skinny":
      current[0] = new Skinny(e.clientX, e.clientY,angle, context);
      break;
    case "diamond":
      current[0] = new Diamond(e.clientX, e.clientY,angle);
      break;
    case "trapezoid":
      current[0] = new Trapezoid(e.clientX, e.clientY,angle);
      break;
    default:
      break;
  }
  return current;
};


export const addToPojo = function(e, pojo, current, follow, drag) {
  if (current.length > 0 && follow === true && drag === false) {
    follow = false;
    switch(current[0].name) {
      case "triangle":
      pojo["triangle"].push(current[0]);
      break;
      case "square":
      pojo["square"].push(current[0]);
      break;
      case "hexagon":
      pojo["hexagon"].push(current[0]);
      break;
      case "skinny":
      pojo["skinny"].push(current[0]);
      break;
      case "diamond":
      pojo["diamond"].push(current[0]);
      break;
      case "trapezoid":
      pojo["trapezoid"].push(current[0]);
      break;
      default:
      break;
    }
  }
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
  canvas.addEventListener("mouseup", onMouseUp);
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


