import locations from '../script.js'

if ("geolocation" in navigator) {
    let options = {
        timeout: 3000
    };
    
    let watchId = navigator.geolocation.watchPosition(locationHandler, errorHandler, options);

    function locationHandler(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    }

    function errorHandler(error) {
        console.warn('ERROR(' + error.code + '): ' + error.message);
    }

} else {
    console.log("Geolocation is not supported by this browser.");
}


function hideBtn(element) {
    element.style.visibility = 'hidden';
}

function showBtn(element) {
    let btn = document.getElementById(element)
    btn.style.visibility = 'visible';
}