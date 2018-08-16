let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI / 180;


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
    context.save();
    context.translate(this.handle.x - (trapezoid.width * 0.15), this.handle.y - (trapezoid.height * 0.15));
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(trapezoid, -trapezoid.width * 0.15, -trapezoid.height * 0.15, trapezoid.width * 0.3, trapezoid.height * 0.3);
    context.restore();
  };

}