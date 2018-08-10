let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;


export default function Square(e) {
  this.name = "square";
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 40
  };

  this.draw = function() {
    let square = new Image();
    square.src = "../shapePics/square.png";
    // context.clearRect(this.handle.x, this.handle.y, square.width * 0.3, square.height * 0.3);
    context.save();
    context.drawImage(square, this.handle.x - (square.width * 0.3) / 2, this.handle.y - (square.height * 0.3) / 2,
    square.width * 0.3, square.height * 0.3);
    context.restore();
  };

}
