let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Skinny(e) {
  this.handle = {
    x: e.clientX,
    y: e.clientY,
    radius: 30
  };
  this.draw = function () {
    let skinny = new Image();
    skinny.src = "../shapePics/skinny.png";
    context.drawImage(skinny, e.clientX - (skinny.width * 0.3) / 2, e.clientY - (skinny.height * 0.3) / 2,
      skinny.width * 0.3, skinny.height * 0.3);
    
  };

}