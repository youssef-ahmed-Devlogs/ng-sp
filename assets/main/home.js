// MAIN SLIDER
const mainSliderContainer = document.querySelector(".main-slider-container");
const mainSlider = mainSliderContainer.querySelector(".main-slider");
const allSrcs = mainSliderContainer.querySelectorAll(".imgs-src span");
const nextBtn = mainSliderContainer.querySelector(".next-slide");
const prevBtn = mainSliderContainer.querySelector(".prev-slide");
let images = [];
let counter = 0;

setInterval(() => {
  // mainSlider.style.animation = "zoom 1s ease-in-out";
}, 1000);

allSrcs.forEach((item) => {
  images.push(item.dataset.src);
});

mainSlider.style.backgroundImage = `url(${images[1]})`;

nextBtn.addEventListener("click", () => {
  mainSlider.style.backgroundImage = `url(${images[counter]})`;
  if (counter < images.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
});

prevBtn.addEventListener("click", () => {
  mainSlider.style.backgroundImage = `url(${images[counter]})`;
  if (counter > 0) {
    counter--;
  } else {
    counter = images.length - 1;
  }
});

setInterval(() => {
  nextBtn.click();
}, mainSlider.dataset.duration);
