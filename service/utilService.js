'use strict';




function updateClock() {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    document.querySelector('.time span').innerText = timeString
}









