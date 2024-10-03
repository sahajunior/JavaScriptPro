/*
//  1. Using the Geolocation API
document.querySelector('#getLocation').addEventListener('click', () => {
  //  Tells me if the browser supports it!
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
    // navigator.geolocation.watchPosition(displayGeoData, displayError); => Constantly wathes the location & change it accordingly. Helpful in Uber, Slash
  }
});

const displayArea = document.querySelector('#locationDisplay');

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
};

const displayError = (err) => {
  displayArea.textContent = err.message;
};
*/

/**/
//  2. The getUserMedia API
//  3. Intersection Observers: Basics
//  4. Intersection Observers: Thresholds
//  5. Intersection Observers: Tracking Ad View Time
//  6. Intersection Observers: Multiple Entries
//  7. Intersection Observers: Lazy Loading Images
