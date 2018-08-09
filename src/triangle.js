let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');



export default function Triangle(e) {

  this.draw = function () {
    let triangle = new Image();
    triangle.src = "../shapePics/triangle.png";
    context.drawImage(triangle, e.clientX - (triangle.width * 0.3) / 2, e.clientY - (triangle.height * 0.3) / 2,
      triangle.width * 0.3, triangle.height * 0.3);
  };

}