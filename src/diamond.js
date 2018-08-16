let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
export const TO_RADIANS = Math.PI / 180;


export default function Diamond(e, angle) {
  this.name = 'diamond';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 50
  };
  this.draw = function () {
    let diamond = new Image();
    diamond.src = "../shapePics/diamond.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(diamond, -diamond.width * 0.15, -diamond.height * 0.15, diamond.width * 0.3, diamond.height * 0.3);
    context.restore();
  };

}