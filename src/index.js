let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



  
  let putShape = function (shapeType) {
    let url = shapeType;
    debugger
    // newShape.src = shapeType;
    let active = document.getElementsByClassName("active")[0];
    if (active) {
      active.className = "shapeIcon";
    }
    return url;
    // console.log(newShape);
  };

const addShape = function (e) {
  let shape = e.target;
  let newShape = putShape(shape.style.backgroundImage);
  
  shape.className += " active";
  // context.drawImage(newShape, e.clientX - newShape.width / 2, e.clientY - newShape.height / 2);
};
  
  
  let shapes = document.getElementsByClassName("shapeIcon");
  console.log(shapes);
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.addEventListener("click", addShape);
  }
  
  


canvas.addEventListener("mousedown", putShape);
