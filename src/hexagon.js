import Shape from './shape';


class Hexagon extends Shape {
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/hexagon.png";
    this.handle.radius = 70;
    this.name = "hexagon";
  }
}

export default Hexagon;