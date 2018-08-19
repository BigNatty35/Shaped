function Trashbin(context) {
  let trash = new Image();
  trash.src = "../shapePics/trashbin.png"
  this.handle = {
    x: 50,
    y: 100,
    radius: 100
  }

  this.draw = function() {
    context.drawImage(trash, 50, 100, trash.height * 0.25, trash.width * 0.25)
  }
}


export default Trashbin;