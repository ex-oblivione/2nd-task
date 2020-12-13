let dropdown = $('.dropdown');
let placeholder = $('.dropdown__placeholder').text('Сколько гостей');

$.each(dropdown, function () {

  let btnApply = $('.dropdown__bottom-item-apply'),
    btnClear = $('.dropdown__bottom-item-clear');


  btnApply.on('click', function () {
    $(this).parent().parent().parent().find('.dropdown__btn,.dropdown__content').removeClass('active-dropdown');
  })

  btnClear.on('click', function () {
    $(this).parent().parent().parent().find('.dropdown__content-counter-value').text(0);
    $(this).parent().parent().parent().find(placeholder).text('Сколько гостей');
  });
});