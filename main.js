let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  let shape = new Image();
  
  shape.src = "shapes/hex.png";
  context.beginPath();
  context.drawImage(shape, e.offsetX - 50, e.offsetY - 50);
};

canvas.addEventListener("mousedown", putShape);