'use strict';

var gMap = null;
var gMarkers = [];
var gCoords = {}
function onMapInit() {
    onStartClockAndDate()
    initMap()
    renderPlaces()
}


function onRemovePlace(placeId) {
    const places = getPlaces()
    if (!confirm('are you sure ?')) return
    removePlace(placeId)
    renderPlaces()
    renderMarkers()
}

function onRemoveAllPlaces() {
    const places = getPlaces()
    if (!confirm('Are you sure you want to remove all!??')) return
    removePlaces()
    renderPlaces()
    renderMarkers()
}



function renderPlaces() {
    const places = getPlaces()
    const strHtml = places.map(place => {
        return `<li> ${place.name}
                <button onclick="onRemovePlace('${place.id}')">X</button>
                <button onclick="onPanToPlace('${place.id}')">Go</button>
                </li>`
    })
    document.querySelector('.places ul').innerHTML = strHtml.join('')
    renderMarkers()
}


function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}

function initMap() {
    const elMap = document.querySelector('.map-container')
    const defaultLoc = { lat: 29.557669, lng: 34.951923 }

    gMap = new google.maps.Map(elMap, {
        zoom: 13,
        center: defaultLoc,
        //   mapId: makeId()
    })

    gMap.addListener('click', ev => {
        onOpenModal()
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        gCoords = { lat, lng }
    })

}

function onOpenModal() {
    const modal = document.querySelector('.modal').showModal()
}

function onSuccess(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude

    // Optional: move the map to user location
    gMap.setCenter({ lat, lng })
    gMap.setZoom(15)
}

function onError(err) {
    console.error('Failed to get user location:', err)
}

function renderMarkers() {
    const places = getPlaces()
    gMarkers.forEach(marker => marker.setMap(null))
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name,

        })
    })
}
// onDownloadCSV()
function onDownloadCSV(el) {
    const csvFile = getCSVfil()
    var newCC = 'data:text/csv;charset=utf-8,' + csvFile
    console.log("🚀 ~ onDownloadCSV ~ csvFile:", csvFile)
    el.href = newCC
}

function onAddPlace(el) {
    addPlace(el.elements.placeName.value || 'no name', gCoords.lat, gCoords.lng, gMap.getZoom())
    //clear the value of the form
    el.elements.placeName.value = ''
    renderPlaces()
    renderMarkers()
}