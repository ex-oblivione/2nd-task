let btnsRoomSlider = document.querySelectorAll('.slider__control');


btnsRoomSlider.forEach(btnsRoomSlider => {

  btnsRoomSlider.addEventListener('click',
    function () {
      // Cоставляем псевдомассив из всех пунктов с картинками в слайдере
      let slides = this.parentElement.querySelectorAll('.slider__item');
      // Берем значение data- индекса текущего слайдера
      let index = this.parentElement.querySelector('.slider__items').dataset.index;

      slides[index].className = 'slider__item';
      if (this.classList.contains('slider__control_next')) {
        index++;
      };
      if (this.classList.contains('slider__control_prev')) {
        index--;
      };
      index = (index + slides.length) % slides.length;
      this.parentElement.querySelector('.slider__items').dataset.index = index;
      slides[index].className = 'slider__item slider__item_showing';
      console.log(index);

    })
});
