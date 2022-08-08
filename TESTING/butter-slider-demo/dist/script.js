import {
  CreateSlider,
  autoInit
} from "https://cdn.skypack.dev/butter-slider@v1.1.1";

const bar = document.querySelector(".bar");
const destroyBtn = document.querySelector(".js-destroy");
const initBtn = document.querySelector(".js-init");
const alertTag = document.querySelector(".js-alert");

autoInit();

const mySlider = new CreateSlider({
  container: ".slider",
  slider: ".slides",
  getScrollPercent: (e) => {
    bar.style.width = `${e}%`;
  },
  dragSpeed: 1.5,
  smoothAmount: 0.2,
  hasTouchEvent: true
});

new CreateSlider({
  container: ".container-text",
  slider: ".slider-text",
  dragSpeed: 2,
  smoothAmount: 0.1,
  hasTouchEvent: true
});

destroyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mySlider.destroy();
});

initBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mySlider.init();
});

alertTag.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});