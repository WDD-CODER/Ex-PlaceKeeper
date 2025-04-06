'use strict';

var gPlaces
const PLACES_STORAGE_KEY = 'placesDB'
_createPlaces()

// Add & Remove
function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    var placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
    savePlaceToLocalStorage()
}

function removePlaces() {
    gPlaces.splice(0)
    savePlaceToLocalStorage()
}

function addPlace(name, lat, lng, zoom) {
    const newPlace = _createPlace(name, lat, lng, zoom)
    gPlaces.push(newPlace)
    savePlaceToLocalStorage()
}

function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function _createPlace(name, lat, lng, zoom) {
    const newPlace = {
        id: makeId(),
        name,
        lat,
        lng,
        zoom,
    }
    return newPlace
}

function savePlaceToLocalStorage() {
    saveToLocalStorage(PLACES_STORAGE_KEY, gPlaces)
}


function _createPlaces() {

    gPlaces = loadFromLocalStorage(PLACES_STORAGE_KEY)

    if (!gPlaces || !gPlaces.length) {
        var Places = []
        for (let i = 1; i <= 3; i++) {
            Places.push(_createPlace('place' + i, 30.1416 + i, 38.831213 + i, 0 + i))
        }
        gPlaces = Places
        savePlaceToLocalStorage()
    }
    else return
}

// Positioning
function currentPosition() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

function getCSVfil() {
    var csvHeadersStr = 'id, name, lat, lng, zoom'
    gPlaces.forEach(place => {
        const csvLine = `\n${place.id}, ${place.name}, ${place.lat}, ${place.lng}, ${place.zoom}`
        csvHeadersStr += csvLine
    });
    return csvHeadersStr
}

function getCSVTitles() {
    const Places = gPlaces || []
    const objectKeys = Object.keys(Places[0]).join(",")
}

function getModalValue(form) {
const name = form.elements['placeName'].value
console.log("🚀 ~ getModalValue ~ name:", name)
}

function closeModal(){
   const modal = document.querySelector('dialog').close()
}