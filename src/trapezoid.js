import Shape from './shape';


class Trapezoid extends Shape {
  constructor(x ,y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/trapezoid.png";
    this.handle.radius = 55;
    this.name = "trapezoid";
  }
}

export default Trapezoid;