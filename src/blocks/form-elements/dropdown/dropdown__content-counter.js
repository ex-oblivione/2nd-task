// let dropdown = $('.dropdown');
// let placeholder = $('.dropdown__placeholder').text('Сколько гостей');

// $.each(dropdown, function (index) {

//   let item = $('.dropdown__content-item'),
//     btnClear = $('.dropdown__bottom-item-clear'),
//     btnApply = $('.dropdown__bottom-item-apply'),
//     dropdownCount = 0;

//   btnApply.on('click', function () {
//     $('.dropdown__btn,.dropdown__content').toggleClass('active-dropdown');
//   })

//   btnClear.on('click', function () {
//     dropdownCount = 0
//     $.each(item, (i, e) => {
//       $(e).find('.dropdown__content-counter-value').text(0)
//       placeholder.text('Сколько гостей')
//     })
//   })


//   $.each(item, function (index, elem) {
//     let itemCount = $(elem).find('.dropdown__content-counter-value'),
//       itemCountValue = +$(elem).find('.dropdown__content-counter-value').text(),
//       btnPlus = $(elem).find('.dropdown__content-counter-btn_plus'),
//       btnMinus = $(elem).find('.dropdown__content-counter-btn_minus');


//     btnPlus.on('click', function () {
//       itemCountValue = +$(elem).find('.dropdown__content-counter-value').text();

//       if (dropdownCount < 20) {
//         ++dropdownCount;
//         itemCount.text(++itemCountValue);
//       }
//       if (dropdownCount === 1) {
//         placeholder.text(dropdownCount + ' гость');
//       } else if (dropdownCount > 1 && dropdownCount < 5) {
//         placeholder.text(dropdownCount + ' гостя');
//       } else {
//         placeholder.text(dropdownCount + ' гостей');
//       }
//     });

//     btnMinus.on('click', function () {
//       itemCountValue = +$(elem).find('.dropdown__content-counter-value').text();
//       if (itemCountValue >= 1) {
//         --dropdownCount;
//         itemCount.text(--itemCountValue);
//       }
//       if (dropdownCount === 0) {
//         placeholder.text('Сколько гостей');
//       } else if (dropdownCount === 1) {
//         placeholder.text(dropdownCount + ' гость');
//       } else if (dropdownCount > 1 && dropdownCount < 5) {
//         placeholder.text(dropdownCount + ' гостя');
//       } else {
//         placeholder.text(dropdownCount + ' гостей');
//       }
//     });
//   });
// });


let counter = function () {
  let btn = document.querySelectorAll('.dropdown__content-counter-btn');

  btn.forEach(btn => {
    btn.addEventListener('click',
      function () {
        let direction = this.dataset.direction;
        let value = this.parentElement.querySelector('.dropdown__content-counter-value');
        let currentValue = +value.textContent;
        let newValue;

        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        value.textContent = newValue;

        // Создаем массив из всех счетчиков.
        let valuesArr = Array.from(document.querySelectorAll('.dropdown__content-counter-value'));

        // Находим сумму гостей (взрослых и детей).
        let guestsSum = +valuesArr[0].textContent + +valuesArr[1].textContent;

        // Составляем строку 'n гостей'.
        let guestsText = function () {
          // Находим цифру рязряда единиц от числа гостей.
          let lastNumGuest = guestsSum % 10;

          // Получаем строку с числом гостей и правильным склонением слова 'гость'.
          if (guestsSum === 0) {
            return '';
          } else if (lastNumGuest === 1 && guestsSum !== 11) {
            return guestsSum + ' гость';
          } else if ((lastNumGuest === 2 && guestsSum !== 12) || (lastNumGuest === 3 && guestsSum !== 13) || (lastNumGuest === 4 && guestsSum !== 14)) {
            return guestsSum + ' гостя';
          } else {
            return guestsSum + ' гостей';
          }
        };

        let infantSum = +valuesArr[2].textContent;

        let infantText = function () {
          let lastNumInfant = infantSum % 10;

          if (infantSum === 0) {
            return '';
          } else if (lastNumInfant === 1 && infantSum !== 11) {
            return infantSum + ' младенец';
          } else if ((lastNumInfant === 2 && infantSum !== 12) || (lastNumInfant === 3 && infantSum !== 13) || (lastNumInfant === 4 && infantSum !== 14)) {
            return infantSum + ' младенца';
          } else {
            return infantSum + ' младенцев';
          }
        }

        // Составляем общую строку с гостями и младенцами.
        let counterText = function () {
          let defaultText = 'Сколько гостей';

          let concatText = guestsText(guestsSum) + ', ' + infantText(infantSum);

          if (concatText === ', ') {
            return defaultText;
          } else if (infantText(infantSum) === '') {
            return guestsText(guestsSum);
          } else if (guestsText(guestsSum) === '') {
            return infantText(infantSum);
          } else {
            return concatText;
          }
        }

        // Выводим получившуюся строку на страницу.
        let counterPlaceholderText = document.body.querySelector('.dropdown__placeholder');
        counterPlaceholderText.textContent = counterText();
      })
  })
};

counter();