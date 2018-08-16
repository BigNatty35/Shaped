import Shape from './shape';


class Trapezoid extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/trapeziod.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 55
    };
    this.name = "trapeziod";
  }
}

export default Trapezoid;