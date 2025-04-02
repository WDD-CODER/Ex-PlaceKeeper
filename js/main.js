'use strict';

var gClockIntervalId


function onInit() {
    startClockAndDate() 
}
function startClockAndDate() {
    updateClock()
    onShowDate()
    clearInterval(gClockIntervalId)
    gClockIntervalId = setInterval(updateClock, 1000)
}

function render(){

}

function   onGetInput(el){
    switch (true) {
        case el.name === 'user-email':
            saveToLocalStorage(el.name, el.value);
            break;
            
            case el.name === 'text-color':
                saveToLocalStorage(el.name, el.value);
                document.documentElement.style.setProperty('--text-color', el.value);
            break;
            case el.name === 'background-color':
                saveToLocalStorage(el.name, el.value);
                document.documentElement.style.setProperty('--bg-color', el.value);
            break;
    
        default:
            break;
    }
}

function onShowDate() {
    const now = new Date()
    const timeString = now.toLocaleDateString()
    document.querySelector('.date span').innerText = timeString
}

function moveToPage(str){
    switch (true) {
        case str === 'index':
            window.location.href ='index.html' 
            break;
    
        case str === 'map':
            window.location.href = 'map.html' 
            break;
        case str === 'user-prefs':
            window.location.href = 'user-prefs.html'
            break;    
    }
}

