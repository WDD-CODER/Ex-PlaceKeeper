'use strict';


function onIndexInit() {
    onStartClockAndDate()
   const UserData = loadFromLocalStorage('userDate')
    console.log("🚀 ~ onIndexInit ~ userData:", UserData)
    if (!UserData) return

    const { email, textColor, bgc , birthDate, birthTime } = UserData 

    onRenderBirthDayAndTime(birthDate, birthTime)
    onRenderStyle(textColor, bgc)
}

function onRenderBirthDayAndTime(birthDate, birthTime) {
    document.querySelectorAll('p.birth-date').forEach((element, idx) => {
         console.log("🚀 ~ document.querySelectorAll ~ idx:", idx)
         element.innerText = (idx < 1) ? birthDate : birthTime
    });
}
function onRenderStyle(textColor, bgc) {
    document.body.style.color = textColor
    document.body.style.backgroundColor = bgc
}


