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
  // draw() {
  //   const {shape, handle} = this;
  //   context.save();
  //   context.translate(handle.x, handle.y);
  //   context.rotate(handle.angle * (Math.PI / 180));
  //   context.drawImage(shape, -shape.width * 0.15, -shape.height * 0.15, shape.width * 0.5, shape.height * 0.3);
  //   context.restore();
  // }
}

export default Skinny;