let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Trapezoid(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 150
  };
  this.draw = function () {
    let trapezoid = new Image();
    trapezoid.src = "../shapePics/trapezoid.png";
    context.drawImage(trapezoid, this.handle.x - (trapezoid.width * 0.3) / 2, this.handle.y - (trapezoid.height * 0.3) / 2,
      trapezoid.width * 0.3, trapezoid.height * 0.3);
      
  };

}