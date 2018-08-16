let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI /180;


export default function Skinny(e) {
  this.name = "skinny";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: 0,
    radius: 70
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.save();
    context.translate(this.handle.x - (skinny.width * 0.15), this.handle.y - (skinny.height * 0.15));
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(skinny, -skinny.width * 0.15, -skinny.height * 0.15, skinny.width * 0.3, skinny.height * 0.3);
    context.restore();
  };

}