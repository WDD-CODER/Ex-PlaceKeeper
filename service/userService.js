'use strict';



// local storag

// פה חן עשתה שמור נתוני משתמש
// כאילו עשתה את זה כאובייקט אחד 

// בנוסף למה שיש פה שהיה ביוטיל,   




// local storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
