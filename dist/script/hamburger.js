const hamBtn = document.querySelector('.hamburger__menu-link');
const hamMenu = document.querySelector('.hamburger__overlay');
const hamClose = document.querySelector('.hamburger__close');

hamBtn.addEventListener('click', e => {
  e.preventDefault();
  hamMenu.style.display = 'flex';
})

hamClose.addEventListener('click', e => {
  e.preventDefault();
  hamMenu.style.display = 'none';
})

$('.hamburger__link').on('click', e => {
  e.preventDefault();

  const hamLink = e.currentTarget;
  const curLink = hamLink.closest('.hamburger__overlay');

  curLink.style.display = 'none';
})