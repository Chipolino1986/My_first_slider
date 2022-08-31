'use strict'

let images = document.querySelectorAll('.slider img');
let corrent = images.length -1;

function slider () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity_0');
    }
    images[corrent].classList.remove('opacity_0');
}

document.querySelector('.button_slider_box_right button').onclick = function() {
    if (corrent +1 == images.length) {
        corrent = 0;
    } else {
        corrent ++;
    }
    slider();
};

document.querySelector('.button_slider_box_left button').onclick = function() {
    if (corrent -1 == -1) {
        corrent = images.length -1;
    } else {
        corrent --;
    }
    slider();
};
