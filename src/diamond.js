let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Diamond(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 60
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.drawImage(diamond, e.clientX - (diamond.width * 0.3) / 2, e.clientY - (diamond.height * 0.3) / 2,
      diamond.width * 0.3, diamond.height * 0.3);
  };

}