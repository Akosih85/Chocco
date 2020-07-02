const compound = document.querySelectorAll('.slider__compound-link');
const ingredients = document.querySelectorAll('.slider__ingredients-list');
const ingredient = document.querySelector('.slider__ingredients-list');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const sliderList = document.querySelector('.slider__list');
const sliderItems = document.querySelectorAll('.slider__item')
const computedStyles = window.getComputedStyle(sliderList);

const minRight = 0;
const step = 100;
const maxRight = (sliderItems.length - 1) * step;
let currentPos = 0;

compound.forEach((compoundBtn) => compoundBtn.addEventListener('click', e => {
  e.preventDefault();
  
  if (ingredient.style.display != 'flex') {
    currentDisplay = 'flex';  // для проверки текущего состояния
    ingredients.forEach((displayFlex) => displayFlex.style.display = 'flex');
    console.log(currentDisplay); // вывод текущего состояния
  } else {
    currentDisplay = 'none';
    ingredients.forEach((displayNone) => displayNone.style.display = 'none');
    console.log(currentDisplay);
  }
}));

sliderList.style.right = currentPos;

leftBtn.addEventListener('click', e => {
  e.preventDefault();
  
  if (currentPos > minRight) {
    currentPos -= step;
    sliderList.style.right = `${currentPos}%`;
  }
});

rightBtn.addEventListener('click', e => {
  e.preventDefault();
  
  if (currentPos < maxRight) {
    currentPos += step;
    sliderList.style.right = `${currentPos}%`
  }
});