$(document).ready(function () {
  $('.dropdown__btn').click(function (event) {
    $(this).parent().find('.dropdown__btn,.dropdown__content').toggleClass('active-dropdown');
  });
});