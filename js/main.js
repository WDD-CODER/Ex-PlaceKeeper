'use strict';

var gClockIntervalId


function onInit() {
    startClockAndDate() 
}
function startClockAndDate() {
    updateClock()
    ShowDate()
    clearInterval(gClockIntervalId)
    gClockIntervalId = setInterval(updateClock, 1000)
}

function moveToPage(str){
    window.location.href = (str === 'map') ? 'map.html' : 'user-pref.html' 
}