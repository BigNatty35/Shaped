function Trashbin(context) {
  let trash = new Image();
  trash.src = "../shapePics/recyclebin.png"
  this.handle = {
    x: -300,
    y: -270,
    radius: 40
  }

  this.draw = function() {
    context.drawImage(trash, this.handle.x, this.handle.y, 800, 690)
  }
}


export default Trashbin;