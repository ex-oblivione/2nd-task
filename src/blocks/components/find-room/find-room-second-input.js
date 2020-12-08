$('#end_one').on('click', function () {
  $('#start_one').data('datepicker').show();
});

$('[data-action="today"]').on('click', function () {
  $('#start_one').data('datepicker').hide();
});