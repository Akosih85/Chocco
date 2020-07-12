const Open_item = item => {
  const Container = item.closest('.team__item');
  const ContentBlock = Container.find('.team__content');
  const TextBlock = ContentBlock.find('.team__content-block');
  const Req_height = TextBlock.height();

  Container.addClass('active');
  ContentBlock.height(Req_height);
}

const Close_every_item = Container => {
  const Items = Container.find('.team__content');
  const Item_container = Container.find('.team__item');

  Item_container.removeClass('active');
  Items.height(0);
}


$('.team__title').on('click', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const Container = $this.closest('.team');
  const Elem_container = $this.closest('.team__item');

  if (Elem_container.hasClass('active')) {
    Close_every_item(Container);
  } else {
    Close_every_item(Container);
    Open_item($this);
  }

})