document.getElementById('locate-me').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location-info').innerHTML = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationInfo = `
        <h2>Your Location</h2>
        <p>Latitude: ${latitude}</p>
        <p>Longitude: ${longitude}</p>
        <iframe id="user-map" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3153.112741182278!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7be1073e485%3A0x4e00961d6e73248e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638465221086!5m2!1sen!2sus"
                width="600" 
                height="450" 
                style="border:0; border-radius: 8px;" 
                allowfullscreen="" 
                loading="lazy"></iframe>
    `;
    document.getElementById('location-info').innerHTML = locationInfo;
}

function showError(error) {
    let errorMessage = "";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }
    document.getElementById('location-info').innerHTML = errorMessage;
}
