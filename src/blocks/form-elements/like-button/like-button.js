$(document).ready(function () {
  $('.like__input').click(function () {
    let val = $(this).siblings('.like__btn').find('.like__counter');
    if ($(this).is(':checked')) {
      val.html((+val.html()) + 1);
    } else {
      val.html((+val.html()) - 1);
    }
  });
});