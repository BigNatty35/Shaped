import Shape from './shape';

class Square extends Shape {
  constructor(x, y, angle) {
    super(x, y, angle);
    this.shape = new Image();
    this.shape.src = "./shapePics/square.png";
    this.handle.radius = 40;
    this.name = "square";
  }
}

export default Square;