'use strict';

const gQueryOptions = {
    page: { name: '' },
    textColor: { color: '' },
    bgColor: { color: '' },
    birthDate: { date: 0 },
}

var gClockIntervalId


function onInit() {
    render()
    startClockAndDate()
}
function startClockAndDate() {
    updateClock()
    onShowDate()
    clearInterval(gClockIntervalId)
    gClockIntervalId = setInterval(updateClock, 1000)
}

function render() {
    document.documentElement.style.setProperty('--text-color', loadFromLocalStorage('text-color'));
    document.documentElement.style.setProperty('--bg-color', loadFromLocalStorage('background-color'));
    // if (localStorage.getItem('birth-date')) {
    //     console.log('variable', variable);

//         const date = localStorage.getItem('birth-date')
//         // document.querySelector('time.birth-date').innerText =
//    }
//     // ('birth-date', loadFromLocalStorage('birth-date'))
}

function onGetInput(el) {
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
        case el.name === 'birth-date':
            saveToLocalStorage(el.name, el.value);
            gQueryOptions.birthDate.date = el.value;
            document.querySelector('time.birth-date').innerText = el.value;
            break;
    }
}

function onShowDate() {
    const now = new Date()
    const timeString = now.toLocaleDateString()
    document.querySelector('.date span').innerText = timeString
}

function moveToPage(str) {
    // saveToLocalStorage('page', str)
    switch (true) {
        case str === 'index':
            window.location.href = 'index.html'
            break;

        case str === 'map':
            window.location.href = 'map.html'
            break;
        case str === 'user-prefs':
            window.location.href = 'user-prefs.html'
            break;
    }
}
// PARAMS
// function setQueryParams() {
//     const queryParams = new URLSearchParams()

//     if (gQueryOptions.page.name !== undefined) {
//         queryParams.set('page', gQueryOptions.page.name)
//     }
//     if (gQueryOptions.textColor.color !== undefined) {
//         queryParams.set('textColor', gQueryOptions.textColor.color)
//     }
//     if (gQueryOptions.bgColor.color !== undefined) {
//         queryParams.set('bgColor', gQueryOptions.bgColor.color)
//     }

//     const newUrl =
//         window.location.protocol + "//" +
//         window.location.host +
//         window.location.pathname + '?' + queryParams.toString()

//     window.history.pushState({ path: newUrl }, '', newUrl)
// }
// function readQueryParams() {
//     const queryParams = new URLSearchParams(window.location.search)

//     gQueryOptions.page.name =queryParams.get('page') || 'index.html'
//     gQueryOptions.textColor.color =queryParams.get('textColor') || 'black'
//     gQueryOptions.bgColor.color =queryParams.get('bgColor') || ''
//     //     txt: queryParams.get('bookTitle') || '',
//     //     rating: queryParams.get('rating') || 0
//     // }
//     if (queryParams.get('sortField')) {
//         const sortField = queryParams.get('sortField')
//         gQueryOptions.sortBy.sortField = sortField
//     }

//     if (queryParams.get('pageIdx')) {
//         const pageIdx = +queryParams.get('pageIdx')
//         const pageSize = +queryParams.get('pageSize')

//         gQueryOptions.page.idx = +pageIdx || 1
//         gQueryOptions.page.size = +pageSize || gQueryOptions.page.size
//     }
//     if (queryParams.get('modalId')) {
//         const modalId = queryParams.get('modalId')
//         gQueryOptions.modal.modalId = modalId
//         const modalKind = queryParams.get('modalKind')
//         gQueryOptions.modal.modalKind = modalKind
//     }

//     renderQueryParams()
// }
// function renderQueryParams() {
//     const { filterBy, sortBy, page, modal } = gQueryOptions
//     document.querySelector('.filter-btn input').value = filterBy.txt
//     document.querySelector('.rating-field').value = repeatRatingStars(filterBy.rating)


//     if (sortBy.sortField) {
//         UpdateSortButtonHighlight(sortBy.sortField)
//     }

//     if (modal.modalId) {
//         if (modal.modalKind === 'UpdateBook') onUpdateBook(modal.modalId)
//         if (modal.modalKind === 'DetailsModal') onRenderDetailsModal(modal.modalId)
//     }
// }
