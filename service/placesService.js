'use strict';


const gPlaces = [
    { id: '1p3', lat: 30.1416, lng: 38.831213, name: 'soukis house' },
    { id: '1p3', lat: 29.550360, lng: 34.952278, name: 'soukis house' },
]

// { id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Pukis house' },
function getPlaces() {
    return gPlaces 
 }

function removePlace(placeId) { 
    var placeIdx = gPlaces.findIndex(place => place.id === placeId)
    console.log("🚀 ~ removePlace ~ placeIdx:", placeIdx)
gPlaces.splice(placeIdx, 1)
console.log("🚀 ~ removePlace ~ gPlaces:", gPlaces)
}

function addPlace(name, lat, lng, zoom) {
  name =   prompt('choose name')
const newPlace = {
    name,
    lat: 32.1416,
    lng: 34.831213,
    zoom:getRandomInt(0, 3),
}
 gPlaces.push(newPlace)
 console.log('gPlaces', gPlaces);
 
 }

function getPlaceById(placeId) {

 }

function _createPlace(name, lat, lng, zoom) {

 }

function _createPlaces() {

 }


