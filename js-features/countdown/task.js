'use strict';

let timer = document.getElementById("timer");
let mas = timer.textContent.split(':');
let hours = mas[0];
let min = mas[1];
let sec = mas[2];
let hoursZero;
let minZero;
let secZero;
let interval = setInterval(t, 1);

function t() {
    if (hours > 0 || min > 0 || sec > 0) {
        if (sec == 0) {
            if (min == 0 && hours > 0) {
                sec = 60;
                min = 60;
                hours -= 1;
            } else if (min > 0) {
                min -= 1;
                sec = 60;
            }
        } else if (sec > 0) {
            sec -= 1;
        }
        if (hours < 10) {
            hoursZero = "0" + Number.parseInt(hours);
        } else {
            hoursZero = hours;
        };
        if (min < 10) {
            minZero = "0" + min;
        } else {
            minZero = min;
        };
        if (sec < 10) {
            secZero = "0" + sec;
        } else {
            secZero = sec;
        };
        timer.textContent = hoursZero + ":" + minZero + ":" + secZero;
    } else {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');

    }
}