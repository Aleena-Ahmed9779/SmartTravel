document.addEventListener('DOMContentLoaded', (event) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        document.getElementById('map').innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showMap(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const map = document.getElementById('map');

    map.innerHTML = `<iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=${lat},${lon}&key=YOUR_GOOGLE_MAPS_API_KEY"
        allowfullscreen>
    </iframe>`;
}

function showError(error) {
    let message;
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred.";
            break;
    }
    document.getElementById('map').innerHTML = message;
}
