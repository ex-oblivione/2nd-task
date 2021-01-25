$(document).ready(function () {
  $('.expand-checkbox-list__btn').click(function (event) {
    $(this).parent().find('.expand-checkbox-list__expand-symbol,.expand-checkbox-list__content').toggleClass('active-checkbox-list');
  });
});