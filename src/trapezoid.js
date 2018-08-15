let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Trapezoid(e) {
  this.name = 'trapezoid';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: 0,
    radius: 55
  };
  this.draw = function () {
    let trapezoid = new Image();
    trapezoid.src = "../shapePics/trapezoid.png";
    context.drawImage(trapezoid, this.handle.x - (trapezoid.width * 0.3) / 2, this.handle.y - (trapezoid.height * 0.3) / 2,
      trapezoid.width * 0.3, trapezoid.height * 0.3);
  };

}