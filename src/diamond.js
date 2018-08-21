let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
import Shape from './shape';


class Diamond extends Shape {
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/diamond.png";
    this.handle.radius = 50;
    this.name = "diamond";
  }
}

export default Diamond;