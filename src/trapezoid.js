import Shape from './shape';


class Trapezoid extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/trapezoid.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 55
    };
    this.name = "trapezoid";
  }
}

export default Trapezoid;