let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;


export default function Triangle(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 80
  };
  this.draw = function () {
    let triangle = new Image();
    triangle.src = "../shapePics/triangle.png";
    context.drawImage(triangle, this.handle.x - (triangle.width * 0.3) / 2, this.handle.y - (triangle.height * 0.3) / 2,
    triangle.width * 0.3, triangle.height * 0.3);
  };

}