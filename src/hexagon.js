let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Hexagon(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 30
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.drawImage(hexagon, e.clientX - (hexagon.width * 0.3) / 2, e.clientY - (hexagon.height * 0.3) / 2,
      hexagon.width * 0.3, hexagon.height * 0.3);
  };

}