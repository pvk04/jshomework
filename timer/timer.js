"use strict"

let timer = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let interval;
let check = 0;

startButton.addEventListener("click", () => {
    check += 1;

    if (check == 1) {
        interval = setInterval(() => {
            timer.setAttribute("readOnly", true);
            timer.value -= 1;
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            timer.toggleAttribute("readOnly");
            check = 0;
        }, parseInt(timer.value) * 1000);
    }
});


stopButton.addEventListener("click", () => {
    clearInterval(interval);
    timer.removeAttribute("readOnly");
    check = 0;
});


