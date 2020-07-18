const sections = $('section');
const display = $('.maincontent');
const sideMenu = $('.fixed-menu');
const menuItems = sideMenu.find('.fixed-menu__item');
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPos = (sectionEq) => {
  const position = sectionEq * -100;

  if (isNaN(position)) {
    console.error('передано неверное значение в countSectionPos');
    return 0;
  }

  return position;
}

const changeMenuThemeForSection = sectionEq => {
  const currSection = sections.eq(sectionEq);
  const sidemenuTheme = currSection.attr("data-sidemenu-theme");
  const activeClass = 'shadowed'

  if (sidemenuTheme === "dark") {
    sideMenu.addClass(activeClass);
  } else {        
    sideMenu.removeClass('shadowed');
  }
}

const resetActiveClassForItem = (item, itemEq, activeClass) => {
  item.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {
  if (inScroll) return;

  const transitionOver = 1000;
  const mousInertionOver = 300;
  
  inScroll = true;  
    
  const position = countSectionPos(sectionEq);

  changeMenuThemeForSection(sectionEq);

  display.css('transform', `translateY(${position}%)`);
  
  resetActiveClassForItem(sections, sectionEq, 'active');
    
  setTimeout(() => {
    inScroll = false;
    resetActiveClassForItem(menuItems, sectionEq, 'active');
  }, transitionOver + mousInertionOver);
}

const viewportScroller = () => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {
      if (nextSection.length) {
        performTransition(nextSection.index());
      }
      
    },

    prev() {
      if (prevSection.length) {
        performTransition(prevSection.index());
      }
    }
  }
}

$(window).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  const scroller = viewportScroller();

  if (deltaY > 0) {
    scroller.next();
  }
  
  if (deltaY < 0) {
    scroller.prev();
  }
});

$(window).on('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  const video = $('.player').hasClass('paused');
  const userTypingInInputs = tagName === 'input' || tagName === 'textarea';
  const watchingVideo = video === true;
  const userIsBusy = userTypingInInputs || watchingVideo;
  const scroller = viewportScroller();

  if (userIsBusy) return;

  switch (e.keyCode) {
    case 38:
      scroller.prev();
      break;
      
    case 40:
      scroller.next();
      break;
  }
})

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  performTransition(reqSection.index());
})

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
})

if (isMobile) {
  $('body').swipe ({
    swipe: function (event, direction) {
      const scroller = viewportScroller();
      let scrollDirection = '';
  
      if (direction === 'up') scrollDirection = 'next';
      if (direction === 'down') scrollDirection = 'prev';
  
      scroller[scrollDirection]();
    },
  });
}
