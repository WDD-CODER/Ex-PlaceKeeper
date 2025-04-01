'use strict';


function ShowDate() {
    const now = new Date()
    const timeString = now.toLocaleDateString()
    document.querySelector('.date span').innerText = timeString
}


function updateClock() {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    document.querySelector('.time span').innerText = timeString
}








// util


function getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
