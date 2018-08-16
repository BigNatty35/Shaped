let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
const TO_RADIANS = Math.PI / 180;

export default function Triangle(e) {
  this.name = "triangle";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: 0,
    radius: 25
  };
  this.draw = function () {
    let triangle = new Image();
    triangle.src = "../shapePics/triangle.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(triangle, -triangle.width * 0.15, -triangle.height * 0.15, triangle.width * 0.3, triangle.height * 0.3);
    context.restore();
  };

}