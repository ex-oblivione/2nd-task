// Передать вторую дату во второй инпут
$('#start_one').datepicker({
  onSelect: function (fd, d, picker) {
    $("#start_one").val(fd.split("-")[0]);
    $("#end_one").val(fd.split("-")[1]);
  }
});

// Открыть календарь при клике на второй инпут
$('#end_one').on('click', function () {
  $('#start_one').data('datepicker').show();
});

// Скрыть календарь при нажании кнопки Применить (бывшая - Сегодня)
// Закомментировал, поскольку реализовал эту функцию в кода самого календаря
// $('[data-action="today"]').on('click', function () {
//   $('#start_one').data('datepicker').hide();
// });