let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.heigth = window.innerHeight;
canvas.width = window.innerWidth;

let putShape = function(e) {
  
}

canvas.addEventListener("mousedown", putShape);