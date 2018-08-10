
// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");


export const addShape = function(e) {

  let active = document.getElementsByClassName("active")[0]; // find the element that has the className "active"
  let shape = e.target; // shape is the element in the toolbar that was clicked.
  // debugger

  if (active) { // if there is an element that has active on it, change className to shape-img
    active.className = "shape-img";
  }
  
  shape.className += " active"; // the element that was clicked now has the active Class;
  
  // if(circlePointCollision(e.clientX, e.clientY, sub[i].handle)
};

export const updateActive = function(currentShape) {
  let name = currentShape.name;
  let shape = document.getElementById(name);
  let active = document.getElementsByClassName("active")[0];
   // if there is an element that has active on it, change className to shape-img
  if(active) {
    active.className = "shape-img";
  }

  shape.className += " active";
};


let shapes = document.getElementsByClassName("shapeIcon");

console.log({ shapes });

for (let i = 0; i < shapes.length; i++) {
  let shape = shapes[i];
  shape.addEventListener("click", addShape);
}
