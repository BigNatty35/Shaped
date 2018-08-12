// import shapeFollow from './index';
// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");

export const addMouseOver = () => {
  let shapes = document.getElementsByClassName("shape-img");
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("mouseover", addShape);
  }
};



export const addShape = function(e, follow) {
  e.stopPropagation();
  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.

  if (active) { // if there is an element that has active on it, change className to shape-img
    // debugger
    active.className = "shape-img";
  }
  shape.className += " active"; // the element that was clicked now has the active Class;
  follow = true;
  console.log(follow);
};








let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

//this function changes the active shape to the one that was clicked on.
export const updateActive = function(currentShape, follow) {
  let name = currentShape.name;
  let shape = document.getElementById(name); //selects toolbar shape based on currentShape's name
  let active = document.getElementsByClassName("active")[0];
   // if there is an element that has active on it, change className to shape-img
   follow = true;
  if(active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};



console.log({ shapes });

