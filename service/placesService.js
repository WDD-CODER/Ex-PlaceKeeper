'use strict';

var gPlaces
const PLACES_STORAGE_KEY = 'placesDB'
_createPlaces()
// const gPlaces = [
//     { id: '1p3', lat: 30.1416, lng: 38.831213, name: 'soukis house' },
//     { id: '1p3', lat: 29.550360, lng: 34.952278, name: 'soukis house' },
// { id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Pukis house' },
// ]

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    var placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
    saveToLocalStorage("PLACES_STORAGE_KEY", gPlaces)

}

function addPlace(name, lat, lng, zoom) {
    const newPlace = _createPlace(name, lat, lng, zoom)
    gPlaces.push(newPlace)
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
    
    gPlaces = loadFromLocalStorage('PLACES_STORAGE_KEY')

    if (!gPlaces || !gPlaces.length) {
        console.log('!gPlaces ', !gPlaces);

        var Places = []
        for (let i = 0; i < 3; i++) {
            Places.push(_createPlace('place' + i, 30.1416 + i, 38.831213 + i, 0 + i))
        }
        gPlaces = Places
        saveToLocalStorage("PLACES_STORAGE_KEY", gPlaces)
    }
    else return 
}


