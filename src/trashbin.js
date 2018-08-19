function Trashbin(context, canvas) {
  let trash = new Image();
  trash.src = "../shapePics/trashbin.png";
  this.handle = {
    x: 50,
    y: 600,
    radius: 100
  };

  this.draw = function() {
    context.drawImage(trash, 50, 600, trash.height * 0.25, trash.width * 0.25);
  };
}


export default Trashbin;