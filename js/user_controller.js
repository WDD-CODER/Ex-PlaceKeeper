'use strict';

function onUserInit() {
    onStartClockAndDate()
}

function onSubmit(ev) {
    ev.preventDefault()
    const { email, textColor, bgc, birthDate, birthTime, age, gender } = ev.target

    const userDate = {
        email: email.value,
        textColor: textColor.value,
        bgc: bgc.value,
        birthDate: birthDate.value,
        birthTime: birthTime.value,
        age: age.value,
        gender: gender.value,
    }
    saveToLocalStorage('userDate', userDate)

    window.location.href = '/html/index.html'
}

function onShowAgeRange(value){
document.querySelector('.age').innerText = value
}
