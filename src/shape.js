let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

class Shape {
  constructor() {
  }

  draw() {
    const {shape, handle} = this;
      context.save();
      context.translate(handle.x, handle.y);
      context.rotate(handle.angle * (Math.PI / 180));
      context.drawImage(shape, -shape.width * 0.15, -shape.height * 0.15, shape.width * 0.3, shape.height * 0.3);
      context.restore();
  
  }
}


export default Shape;