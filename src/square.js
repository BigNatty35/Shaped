let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

export const TO_RADIANS = Math.PI / 180;

export default function Square(e, angle) {
  this.name = "square";
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 40
  };
  // this.angle = angle;

  this.draw = function() {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.drawImage(square, this.handle.x - (square.width * 0.15), this.handle.y - (square.height * 0.15),
    square.width * 0.3, square.height * 0.3);
  };

  this.rotate = function() {
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(TO_RADIANS);
    context.translate(0, 0);
    this.draw();
  };

}
