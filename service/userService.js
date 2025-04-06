'use strict';

function getUserData(){
  return  loadFromLocalStorage(key)
}

function saveUserData(){
  return  saveToLocalStorage(key, value)
}

// function validateAgeMatch(form) {
//   const birth = form.elements.birthDate.value
//   const age = form.elements.age
//   const birthYear = new Date(birth).getFullYear()
//   const currentYear = new Date().getFullYear()
//   const calcAge = currentYear - birthYear
//   if (!birth || Number(age.value) !== calcAge) {
//     age.setCustomValidity('Age does not match birth year')
//   } else {
//     age.setCustomValidity('')
//   }
// }
