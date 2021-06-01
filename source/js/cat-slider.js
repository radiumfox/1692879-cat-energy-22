let slideBefore = document.querySelector(".cat-slider__item--before");
let slideAfter = document.querySelector(".cat-slider__item--after");
let sliderBar = document.querySelector(".cat-slider__bar");

let showSlideBefore = function() {
  slideBefore.classList.add("cat-slider__item--active");
  slideAfter.classList.remove("cat-slider__item--active");
  sliderBar.classList.add("cat-slider__bar--before");
  sliderBar.classList.remove("cat-slider__bar--after")
}

let showSlideAfter = function() {
  slideAfter.classList.add("cat-slider__item--active");
  slideBefore.classList.remove("cat-slider__item--active");
  sliderBar.classList.add("cat-slider__bar--after");
  sliderBar.classList.remove("cat-slider__bar--before")
}
