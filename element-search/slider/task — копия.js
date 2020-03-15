let slider = document.getElementsByClassName("slider__item");
let but = document.getElementsByClassName("slider__arrows");
let mas = but.item(0).childNodes;
let dots = document.getElementsByClassName("slider__dot");

for (let index = 0; index < mas.length; index++) {
    const element = mas[index];
    if (element.className != undefined) {
        element.onclick = function () {
            if (element.className.includes("slider__arrow_prev")) {
                for (let index = 0; index < slider.length; index++) {
                    if (slider[index].className == ('slider__item slider__item_active') && index > 0) {
                        slider[index].className = "slider__item";
                        slider[index - 1].className = "slider__item slider__item_active";
                        dots[index].className = "slider__dot";
                        dots[index - 1].className = "slider__dot slider__dot_active";
                    } else if (slider[index].className == ('slider__item slider__item_active') && index == 0) {
                        slider[index].className = "slider__item";
                        dots[index].className = "slider__dot";
                        index = index + slider.length - 1;
                        slider[index].className = "slider__item slider__item_active";
                        dots[index].className = "slider__dot slider__dot_active";
                    }
                }
            } else if (element.className.includes("slider__arrow_next")) {
                for (let index = slider.length - 1; index > -1; index--) {
                    if (slider[index].className == ('slider__item slider__item_active') && index < slider.length - 1) {
                        slider[index].className = "slider__item";
                        dots[index].className = "slider__dot";
                        slider[index + 1].className = "slider__item slider__item_active";
                        dots[index + 1].className = "slider__dot slider__dot_active";
                    } else if (slider[index].className == ('slider__item slider__item_active') && index == slider.length - 1) {
                        slider[index].className = "slider__item";
                        dots[index].className = "slider__dot";
                        index = 0;
                        slider[index].className = "slider__item slider__item_active";
                        dots[index].className = "slider__dot slider__dot_active";
                    }
                }
            }
        }
    }
}
for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    element.onclick = function () {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].className == "slider__dot slider__dot_active") {
                dots[i].className = "slider__dot";
                slider[i].className = "slider__item";
            }
        }
        element.className = "slider__dot slider__dot_active";
        slider[index].className = "slider__item slider__item_active";
    }
}