const Find_block_by_alias = (alias) => {
  return $(".reviews__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") === alias
  });
}

$(".interactive-avatar__link").on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const Target = $this.attr("data-open");
  const Item_to_show = Find_block_by_alias(Target);
  const Cur_item = $this.closest(".reviews__switcher-item");

  Item_to_show.addClass("active").siblings().removeClass("active");
  Cur_item.addClass("active").siblings().removeClass("active");
})