//Код через библиотеку

const slider = $('.slider__list').bxSlider({
  pager: false,
  controls: false,
});

$(".left-arrow").on('click', e => {
  e.preventDefault();

  slider.goToPrevSlide();
});

$(".right-arrow").on('click', e => {  
  e.preventDefault();

  slider.goToNextSlide();
});

//Код на ванильном JS

// const compound = document.querySelectorAll('.slider__compound-link');
// const ingredients = document.querySelectorAll('.slider__ingredients-list');
// const ingredient = document.querySelector('.slider__ingredients-list');
// const leftBtn = document.querySelector('.left-arrow');
// const rightBtn = document.querySelector('.right-arrow');
// const sliderList = document.querySelector('.slider__list');
// const sliderItems = document.querySelectorAll('.slider__item')
// const computedStyles = window.getComputedStyle(Slider_list);

// const MIN_RIGHT = 0;
// const STEP = 100;
// const MAX_RIGHT = (slider_items.length - 1) * STEP;
// let currentPos = 0;

// compound.forEach((compoundBtn) => compoundBtn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (ingredient.style.display != 'flex') {
//     ingredients.forEach((displayFlex) => displayFlex.style.display = 'flex');
//   } else {
//     ingredients.forEach((displayNone) => displayNone.style.display = 'none');
//   }
// }));

// sliderList.style.right = currentPos;

// leftBtn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (currentPos > MIN_RIGHT) {
//     currentPos -= STEP;
//     sliderList.style.right = `${currentPos}%`;
//   } else {
//     currentPos = MAX_RIGHT;
//     sliderList.style.right = `${currentPos}%`;
//   }
// });

// rightBtn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (currentPos < MAX_RIGHT) {
//     currentPos += STEP;
//     sliderList.style.right = `${currentPos}%`
//   } else {
//     currentPos = MIN_RIGHT;
//     sliderList.style.right = `${currentPos}%`;
//   }
// });