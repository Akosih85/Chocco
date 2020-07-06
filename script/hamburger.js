const Ham_btn = document.querySelector('.hamburger__menu-link');
const Ham_menu = document.querySelector('.hamburger__overlay');
const Ham_close = document.querySelector('.hamburger__close');

Ham_btn.addEventListener('click', e => {
  e.preventDefault();
  Ham_menu.style.display = 'flex';
})

Ham_close.addEventListener('click', e => {
  e.preventDefault();
  Ham_menu.style.display = 'none';
})