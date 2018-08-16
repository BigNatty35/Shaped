let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

class Shape {
  constructor() {
  }

  draw() {
    const {shape, handle} = this;
      context.save();
      context.translate(this.handle.x, this.handle.y);
      context.rotate(this.handle.angle * (Math.PI / 180));
      context.drawImage(this.shape, -shape.width * 0.15, -shape.height * 0.15, shape.width * 0.3, shape.height * 0.3);
      context.restore();
  
  }
}


export default Shape;