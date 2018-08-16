import Shape from './shape';


class Triangle extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/triangle.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 25
    };
    this.name = "triangle";
  }
}

export default Triangle;