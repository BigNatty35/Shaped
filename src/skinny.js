import Shape from './shape';


class Skinny extends Shape {
  constructor(e, angle) {
    super(angle);
    this.shape = new Image();
    this.shape.src = "../shapePics/skinny.png";
    this.handle = {
      x: e.clientX,
      y: e.clientY,
      angle: angle,
      radius: 70
    };
    this.name = "skinny";
  }
}

export default Skinny;