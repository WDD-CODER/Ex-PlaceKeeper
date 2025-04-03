'use strict';

var gClockIntervalId


function onStartClockAndDate() {
    clearInterval(gClockIntervalId)
    onUpdateTimeAndDate()
    gClockIntervalId = setInterval(onUpdateTimeAndDate, 1000)
}

function onUpdateTimeAndDate() {
    document.querySelector('.time').innerText = getTodaysTime()
    document.querySelector('.date').innerText = getTodaysDate()
}
