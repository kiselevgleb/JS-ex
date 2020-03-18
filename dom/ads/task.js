let textRotator = document.querySelectorAll(".rotator__case");
console.log(textRotator.length);
let coin = 0;
let inter = 1000;

function interval() {
    Array.from(textRotator).forEach(element => element.classList.remove("rotator__case_active"));
    textRotator[coin].classList.add("rotator__case_active");
    inter = textRotator[coin].getAttribute("data-speed");
    textRotator[coin].style.color = textRotator[coin].getAttribute("data-color");
    coin++;
    if (coin > textRotator.length - 1) {
        coin = 0;
        index = 0;
    }
    console.log(inter);
}
setInterval(interval, inter);