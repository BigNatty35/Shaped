let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Square(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 40
  };
  this.draw = function() {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.drawImage(square, e.clientX - (square.width * 0.3) / 2, e.clientY - (square.height * 0.3) / 2,
      square.width * 0.3, square.height * 0.3);
  };

}