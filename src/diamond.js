let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Diamond(e) {
  this.name = 'diamond';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 100
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.drawImage(diamond, this.handle.x - (diamond.width * 0.15), this.handle.y - (diamond.height * 0.15),
      diamond.width * 0.3, diamond.height * 0.3);
  };

}