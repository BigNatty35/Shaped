let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
import {removeTrail} from './index';
export const TO_RADIANS = Math.PI / 180;

export default function Square(e, angle) {
  this.name = "square";
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    angle: 0,
    radius: 40
  };
  // this.angle = angle;

  this.draw = function() {
    let square = new Image();
    square.src = "../shapePics/square.png";
    context.save();
    context.translate(this.handle.x - (square.width * 0.15), this.handle.y - (square.height * 0.15));
    context.rotate(this.handle.angle * TO_RADIANS);
    context.drawImage(square, -square.width * 0.15, -square.height * 0.15,square.width * 0.3, square.height * 0.3);
    context.restore();
    // removeTrail();
  };

}
