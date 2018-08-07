let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.heigth = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  let shape = new Image();
  shape.src = "shapes/hex.png";
  context.drawImage(shape, e.clientX, e.clientY);
};

canvas.addEventListener("mousedown", putShape);