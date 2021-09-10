// this function post the geolocation of the user and POST the info to "/api"
// p5.js uses setup as a default
function setup() {
  // remove canvas since it is not necessary
  noCanvas();
  // setup webcam
  const video = createCapture(VIDEO);
  video.size(160, 120);
  // initialize latitude and longitude, items are global since they will change per button click
  let lat, lon;
  // DOM of button
  const button = document.getElementById('submit');
  // async function for button click
  button.addEventListener('click', async event => {
    const mood = document.getElementById('mood').value;
    video.loadPixels();
    // image64 is an easy way to convert the video into a string
    // strings are easier to move around over the server
    const image64 = video.canvas.toDataURL();
    // save current data
    const data = { lat, lon, mood, image64 };
    // setup method to POST, to save to "/api"
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // this will be the main content to send over
      body: JSON.stringify(data)
    };
    // POST the data using fetch()
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });

  // user must allow permission to give location
  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      // update the elements in index.html 
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;
    });
  } else {
    console.log('geolocation not available');
  }
}
