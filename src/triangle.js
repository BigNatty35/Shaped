let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;


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
    context.drawImage(triangle, this.handle.x - (triangle.width * 0.15), this.handle.y - (triangle.height * 0.15),
    triangle.width * 0.3, triangle.height * 0.3);
  };

}