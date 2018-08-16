let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
const TO_RADIANS = Math.PI / 180;


export default function Hexagon(e) {
  this.name = 'hexagon';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    angle: 0,
    radius: 70
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.save();
    context.translate(this.handle.x, this.handle.y);
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(hexagon, -hexagon.width * 0.15, -hexagon.height * 0.15, hexagon.width * 0.3, hexagon.height * 0.3);
    context.restore();
  };

}