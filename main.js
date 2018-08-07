let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  context.clear();
  let shape = new Image();
  shape.src = "shapes/hex.png";
  context.drawImage(shape, e.clientX - 50, e.clientY - 50);
  context.clear();
  
};

let dragShape = function(e) {
  let shape = new Image();
  shape.src = "shapes/hex.png";

};


canvas.addEventListener("mousemove", putShape);
// canvas.addEventListener("mousemove", dragShape);