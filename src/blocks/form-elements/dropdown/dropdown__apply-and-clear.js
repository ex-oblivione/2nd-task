let dropdown = $('.dropdown');
let placeholder = $('.dropdown__placeholder').text('Сколько гостей');

$.each(dropdown, function (index) {

  let item = $('.dropdown__content-item'),
    btnClear = $('.dropdown__bottom-item-clear'),
    btnApply = $('.dropdown__bottom-item-apply'),
    dropdownCount = 0;

  btnApply.on('click', function () {
    $('.dropdown__btn,.dropdown__content').toggleClass('active-dropdown');
  })

  btnClear.on('click', function () {
    dropdownCount = 0
    $.each(item, (i, e) => {
      $(e).find('.dropdown__content-counter-value').text(0)
      placeholder.text('Сколько гостей')
    });
  });
});