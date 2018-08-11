let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Hexagon(e) {
  this.name = 'hexagon';
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 70
  };
  this.draw = function () {
    let hexagon = new Image();
    hexagon.src = "../shapePics/hexagon.png";
    context.drawImage(hexagon, this.handle.x - (hexagon.width * 0.15), this.handle.y - (hexagon.height * 0.15),
      hexagon.width * 0.3, hexagon.height * 0.3);
  };

}