let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Skinny(e) {
  this.name = "skinny";
  this.handle = {
    x: e.clientX || 0,
    y: e.clientY || 0,
    radius: 70
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.drawImage(skinny, this.handle.x - (skinny.width * 0.3) / 2, this.handle.y - (skinny.height * 0.3) / 2,
      skinny.width * 0.6, skinny.height * 0.6);
    
  };

}