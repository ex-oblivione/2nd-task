// Открыть календарь при клике на второй инпут
$('#end_one').on('click', function () {
  $('#start_one').data('datepicker').show();
});

// Скрыть календарь при нажании кнопки Применить (бывшая - Сегодня)
$('[data-action="today"]').on('click', function () {
  $('#start_one').data('datepicker').hide();
});