
// creates an array-like object of the shape elements on the toolbar
// let shapes = document.getElementsByClassName("shapeIcon");


export const addShape = function(e) {
  let active = document.getElementsByClassName("active")[0];
  let shape = e.target;
  // debugger
  if (active) {
    active.className = "shape-img";
  }
  
  shape.className += " active";
};


