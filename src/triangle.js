import Shape from './shape';


class Triangle extends Shape {
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/triangle.png";
    this.handle.radius = 25;
    this.name = "triangle";
  }
}

export default Triangle;