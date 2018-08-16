import Shape from './shape';

class Square extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/square.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 40
    };
    this.name = "square";
  }
}

export default Square;