const sliderInputLeft = document.getElementById('range-slider__input-left');
const sliderInputRight = document.getElementById('range-slider__input-right');

const thumbLeft = document.querySelector('.thumb-left');
const thumbRight = document.querySelector('.thumb-right');

const rangeSliderRange = document.querySelector('.range-slider__range');

function setLeftValue() {
  let _this = sliderInputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(sliderInputRight.value) - 5);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + '%';
  rangeSliderRange.style.left = percent + '%';

  let x = document.body.querySelector('.range-slider__text-left');
  x.textContent = (((sliderInputLeft.value * 200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")) + '₽ - ');

}
setLeftValue();

function setRightValue() {
  let _this = sliderInputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(sliderInputLeft.value) + 5);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + '%';
  rangeSliderRange.style.right = (100 - percent) + '%';

  let x = document.body.querySelector('.range-slider__text-right');
  x.textContent = (((sliderInputRight.value * 200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")) + '₽');

}
setRightValue();


sliderInputLeft.addEventListener("input", setLeftValue);
sliderInputRight.addEventListener("input", setRightValue);
