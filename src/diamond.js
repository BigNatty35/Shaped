let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
import Shape from './shape';


class Diamond extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/diamond.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 50
    };
    this.name = "diamond";
  }
}

export default Diamond;