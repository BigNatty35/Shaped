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
  e.stopPropagation();
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  e.stopPropagation();
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
// Make sure to listen if the scroll is happening and then disable it
function disableScroll() {
  if (window.addEventListener) 
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove = preventDefault;
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
  e.stopPropagation();
  modal.style.display = "none";
};

const openModal = function(e) {
  e.stopPropagation();
  modal.style.display = "block";
};



