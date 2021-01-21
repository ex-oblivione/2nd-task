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
        // let valuesArr = Array.from(document.querySelectorAll('.dropdown__content-counter-value'));
        let valuesArr = Array.from(this.parentElement.parentElement.parentElement.querySelectorAll('.dropdown__content-counter-value'));

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
        // let counterPlaceholderText = document.body.querySelector('.dropdown__placeholder');
        let counterPlaceholderText = this.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown__placeholder');
        counterPlaceholderText.textContent = counterText();
      })
  })
};

counter();