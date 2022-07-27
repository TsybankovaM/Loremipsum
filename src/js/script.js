const slider = document.querySelector('.form__slider');
    output = document.querySelector('.form__slider-value');
    output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}