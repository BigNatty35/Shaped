let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  let shape = new Image();
  shape.src = "shapes/hexagon.png";
  context.drawImage(shape, e.clientX - shape.width/2, e.clientY - shape.height/2);
  
};



canvas.addEventListener("mousedown", putShape);
// canvas.addEventListener("mousemove", dragShape);

