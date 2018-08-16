import Shape from './shape';


class Hexagon extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/hexagon.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 70
    };
    this.name = "hexagon";
  }
}

export default Hexagon;