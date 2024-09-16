"use strict"
const myTimer = (timer, dueDate) => {
    const postfix = timer.dataset.postfix;
    const deadline = dueDate;
    const now = Date.parse(new Date());
    let stop = Date.parse(deadline);
    let dif = stop - now;

    const days = String(Math.floor(dif / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor(dif / (1000 * 60 * 60)) % 24).padStart(2, "0");
    const minutes = String(Math.round(dif / (1000 * 60)) % 60).padStart(2, "0");

    const daysElement = timer.querySelector(`.days-${postfix}`);
    const hoursElement = timer.querySelector(`.hours-${postfix}`);
    const minutesElement = timer.querySelector(`.minutes-${postfix}`);

    if (daysElement && hoursElement && minutesElement) {
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
    }
}

const timersInit = () => {
    const deadline = document.querySelector('.js-date').dateTime;
    const timers = [...document.querySelectorAll('[data-timer="true"]')];
    timers.forEach((timer) => {

        myTimer(timer, deadline);
        setInterval(() => { myTimer(timer) }, 10000);
    });
}

export {timersInit}