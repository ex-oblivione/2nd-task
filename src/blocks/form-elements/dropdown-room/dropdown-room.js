const dropdownRoom = $('.dropdown-room__btn,.dropdown-room__content');
const dropdownRoomBtn = $('.dropdown-room__btn');
const dropdownRoomContent = $('.dropdown-room__content');

dropdownRoomBtn.click(function (event) {
  dropdownRoom.toggleClass('active-dropdown');
});

$(document).mouseup(function (e) {
  if (!dropdownRoomBtn.is(e.target) &&
    dropdownRoomBtn.has(e.target).length === 0 &&
    !dropdownRoomContent.is(e.target) &&
    dropdownRoomContent.has(e.target).length === 0) {
    dropdownRoom.removeClass('active-dropdown');
  }
});