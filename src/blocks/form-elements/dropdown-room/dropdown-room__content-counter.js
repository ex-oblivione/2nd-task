let counter = function () {
  let btn = document.querySelectorAll('.dropdown-room__content-counter-btn');

  btn.forEach(btn => {
    btn.addEventListener('click',
      function () {
        let direction = this.dataset.direction;
        let value = this.parentElement.querySelector('.dropdown-room__content-counter-value');
        let currentValue = +value.textContent;
        let newValue;

        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        value.textContent = newValue;

        // Создаем массив из всех счетчиков.
        let valuesArr = Array.from(this.parentElement.parentElement.parentElement.querySelectorAll('.dropdown-room__content-counter-value'));


        // Находим число спален, кроватей, ванных комнат.
        let bedroomSum = +valuesArr[0].textContent;
        let bedSum = +valuesArr[1].textContent;
        let bathroomSum = +valuesArr[2].textContent;

        // Составляем строку 'n спален'.
        let bedroomSumText = function () {
          // Находим цифру рязряда единиц от числа спален.
          let lastNumBedroom = bedroomSum % 10;

          // Получаем строку с числом спален и правильным склонением слова 'спальня'.
          if (bedroomSum === 0) {
            return '';
          } else if (lastNumBedroom === 1 && bedroomSum !== 11) {
            return bedroomSum + ' спальня';
          } else if ((lastNumBedroom === 2 && bedroomSum !== 12) || (lastNumBedroom === 3 && bedroomSum !== 13) || (lastNumBedroom === 4 && bedroomSum !== 14)) {
            return bedroomSum + ' спальни';
          } else {
            return bedroomSum + ' спален';
          }
        };


        // Составляем строку 'n кроватей'.
        let bedSumText = function () {
          let lastNumBed = bedSum % 10;

          if (bedSum === 0) {
            return '';
          } else if (lastNumBed === 1 && bedSum !== 11) {
            return bedSum + ' кровать';
          } else if ((lastNumBed === 2 && bedSum !== 12) || (lastNumBed === 3 && bedSum !== 13) || (lastNumBed === 4 && bedSum !== 14)) {
            return bedSum + ' кровати';
          } else {
            return bedSum + ' кроватей';
          }
        };


        // Составляем строку 'n ванных'.
        let bathroomSumText = function () {
          let lastNumBathroom = bathroomSum % 10;

          if (bathroomSum === 0) {
            return '';
          } else if (lastNumBathroom === 1 && bathroomSum !== 11) {
            return bathroomSum + ' ванная';
          } else if ((lastNumBathroom === 2 && bathroomSum !== 12) || (lastNumBathroom === 3 && bathroomSum !== 13) || (lastNumBathroom === 4 && bathroomSum !== 14)) {
            return bathroomSum + ' ванные';
          } else {
            return bathroomSum + ' ванных';
          }
        };


        // Переменные с текстом отдельных элементов комнаты.
        let bedroom = bedroomSumText();
        let bed = bedSumText();
        let bathroom = bathroomSumText();


        // Создаем массив элементов комнаты, отфильтровывая пустые значения
        let itemRoomArr = [bedroom, bed, bathroom].filter(elem => elem !== '');


        // Создаем итоговую строку для плейсхолдера
        function itemRoomText() {
          let result;

          if (itemRoomArr.length == 0) {
            result = 'Выберите из списка';
          }
          else if (itemRoomArr.length > 2) {
            result = itemRoomArr.slice(0, 2).join(', ') + '\u2026';
          } else {
            result = itemRoomArr.join(', ');
          }
          return result;
        }


        // Выводим получившуюся строку на страницу.
        // let counterPlaceholderText = document.body.querySelector('.dropdown-room__placeholder');
        let counterPlaceholderText = this.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-room__placeholder')
        counterPlaceholderText.textContent = itemRoomText();
      })
  })
};

counter();