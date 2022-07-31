const tabsButtons = document.querySelectorAll('.tabs-caption');
const tabsItems = document.querySelectorAll('.tabs-content');

tabsButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.tabs-caption.is-active').classList.remove('is-active');
    document.querySelector('.tabs-content.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    tabsItems[index].classList.add('is-active');
  });
})

const sliderButtons = document.querySelectorAll('.slides-radio');
const sliderItems = document.querySelectorAll('.slider-item');

const sliderButtonNext = document.querySelector('.slider-next');
const sliderButtonPrev = document.querySelector('.slider-prev');

let index = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.slides-radio.is-active').classList.remove('is-active');
    document.querySelector('.slider-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderItems[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (index === sliderButtons.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (!index) {
    index = sliderButtons.length - 1;
  } else {
    index = index - 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});
