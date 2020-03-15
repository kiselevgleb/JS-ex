"use strict";

let slideNum = 0;
let slides = document.getElementsByClassName("slider__item");
let prev = document.querySelector(".slider__arrow.slider__arrow_prev");
let next = document.querySelector(".slider__arrow.slider__arrow_next");
let dots = document.getElementsByClassName("slider__dot");
let sliderDotsWrap = document.querySelector(".slider__dots");

function showSlides(n) {
    if (n > slides.length-1) {
        slideNum = 0;
    }
    if (n < 0) {
        slideNum = slides.length - 1;
    }
    console.log(slides.length);

    console.log(slideNum);

    for (let index = 0; index < slides.length; index++) {
        slides[index].classList.remove("slider__item_active");
        

    }
    // slides.forEach(element => element.classList.remove("slider__item_active"));
    for (let index = 0; index < dots.length; index++) {
        dots[index].classList.remove("slider__dot_active");

    }
    // dots.forEach(element => element.classList.remove("slider__dot_active"));
    slides[slideNum].classList.add("slider__item_active");
    dots[slideNum].classList.add("slider__dot_active");
}

function slider(n) {

    showSlides(slideNum += n);

}

function currentSlide(n) {
    showSlides(slideNum = n);
}

prev.addEventListener("click", function () {
    slider(-1);
});
next.addEventListener("click", function () {
    slider(1);
});
sliderDotsWrap.addEventListener("click", function (e) {
    for (let index = 0; index < dots.length; index++) {
       if(e.target.classList.contains("slider__dot")&&e.target==dots[index]){
            currentSlide(index);
        }
    }
});