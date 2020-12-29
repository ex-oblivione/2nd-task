$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('header-active');
    $('body').toggleClass('lock');
    // $('.header-menu__item-submenu').click(function () {
    //   $('.header-menu__item-submenu').toggleClass('header-menu-active');
    // })
    $('.header-menu__list_left,.main-page-link').click(function (event) {
      $('.header-burger,.header-menu').removeClass('header-active');
      $('body').removeClass('lock');
    })
  });
});