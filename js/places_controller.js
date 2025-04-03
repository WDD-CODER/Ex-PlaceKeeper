'use strict';

var gMap = null;
function onMapInit() {
    onStartClockAndDate()
    initMap()
    renderPlaces()
}

// const gPlaces = [
//     { id: '1p3', lat: 30.1416, lng: 38.831213, name: 'soukis house' },
//     { id: '1p3', lat: 29.550360, lng: 34.952278, name: 'soukis house' },
// ]


function onRemovePlace(placeId) {
    if (!confirm('are you sure ?')) return
        
    removePlace(placeId)
    renderPlaces()
 }


function renderPlaces() {
    const places = getPlaces()
    const strHtml = places.map(place => {
        return `<li> ${place.name}
                <button onclick="onRemovePlace('${place.id}')">X</button>
                </li>`
                // <button onclick="onPanToPlace('${place.id}')">Go</button>
    })
    console.log("🚀 ~ renderPlaces ~ strHtml:", strHtml)

    document.querySelector('.places ul').innerHTML = strHtml.join('')
}


function initMap() {
    const elMap = document.querySelector('.map-container')
    const defaultLoc = { lat: 29.557669, lng: 34.951923 }

    gMap = new google.maps.Map(elMap, {
        zoom: 13,
        center: defaultLoc,
        //   mapId: makeId()
    })

}


