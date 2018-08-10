let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Hexagon(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 150
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.drawImage(hexagon, this.handle.x - (hexagon.width * 0.3) / 2, this.handle.y - (hexagon.height * 0.3) / 2,
      hexagon.width * 0.3, hexagon.height * 0.3);
  };

}