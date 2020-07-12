//Код через библиотеку

const Slider = $('.slider__list').bxSlider({
  pager: false,
  controls: false,
});

$(".left-arrow").on('click', e => {
  e.preventDefault();

  Slider.goToPrevSlide();
});

$(".right-arrow").on('click', e => {  
  e.preventDefault();

  Slider.goToNextSlide();
});

//Код на ванильном JS

// const Compound = document.querySelectorAll('.slider__compound-link');
// const Ingredients = document.querySelectorAll('.slider__ingredients-list');
// const Ingredient = document.querySelector('.slider__ingredients-list');
// const Left_btn = document.querySelector('.left-arrow');
// const Right_btn = document.querySelector('.right-arrow');
// const Slider_list = document.querySelector('.slider__list');
// const Slider_items = document.querySelectorAll('.slider__item')
// const Computed_styles = window.getComputedStyle(Slider_list);

// const Min_right = 0;
// const Step = 100;
// const Max_right = (Slider_items.length - 1) * Step;
// let currentPos = 0;

// Compound.forEach((compoundBtn) => compoundBtn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (Ingredient.style.display != 'flex') {
//     Ingredients.forEach((displayFlex) => displayFlex.style.display = 'flex');
//   } else {
//     Ingredients.forEach((displayNone) => displayNone.style.display = 'none');
//   }
// }));

// Slider_list.style.right = currentPos;

// Left_btn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (currentPos > Min_right) {
//     currentPos -= Step;
//     Slider_list.style.right = `${currentPos}%`;
//   } else {
//     currentPos = Max_right;
//     Slider_list.style.right = `${currentPos}%`;
//   }
// });

// Right_btn.addEventListener('click', e => {
//   e.preventDefault();
  
//   if (currentPos < Max_right) {
//     currentPos += Step;
//     Slider_list.style.right = `${currentPos}%`
//   } else {
//     currentPos = Min_right;
//     Slider_list.style.right = `${currentPos}%`;
//   }
// });