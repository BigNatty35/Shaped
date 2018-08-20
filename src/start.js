import animate from './index';

document.addEventListener("DOMContentLoaded", () => {
  console.log("its loaded");
  disableScroll();
  animate();
  span.addEventListener("click", closeModal);
  document.addEventListener("click", closeModal);
  info.addEventListener("click", openModal);
});



var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
let modal = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];
let info = document.getElementsByClassName("info")[0];

const closeModal = function (e) {
  modal.style.display = "none";
};

const openModal = function(e) {
  e.stopPropagation();
  modal.style.display = "block";
};



