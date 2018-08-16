class Shape {
  constructor(imgUrl) {
    this.imgUrl = imgUrl;
  }

  draw() {
      let shape = new Image();
      shape.src = this.imgUrl;
      context.save();
      context.translate(this.handle.x - (shape.width * 0.15), this.handle.y - (shape.height * 0.15));
      context.rotate(this.handle.angle * (Math.PI * 180));
      context.drawImage(shape, -shape.width * 0.15, -shape.height * 0.15, shape.width * 0.3, shape.height * 0.3);
      context.restore();
  
  }
}


export default Shape;