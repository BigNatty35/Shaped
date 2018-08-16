let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI /180;


export default function Skinny(e, angle) {
  this.name = "skinny";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: angle,
    radius: 70
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(skinny, -skinny.width * 0.15, -skinny.height * 0.15, skinny.width * 0.3, skinny.height * 0.3);
    context.restore();
  };

}