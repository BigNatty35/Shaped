let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  let shape = new Image();
  shape.src = "../shapes_pics/orangesquare.png";
  context.drawImage(shape, e.clientX - shape.width/2, e.clientY - shape.height/2);
  
};
let coords = function(e) {
  console.log("hey");
};


canvas.addEventListener("mousedown", putShape);
// canvas.addEventListener("mousemove", coords);
// canvas.addEventListener("mousemove", dragShape);

