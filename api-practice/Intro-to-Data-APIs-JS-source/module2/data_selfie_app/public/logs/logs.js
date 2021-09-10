getData();

// How to save data into the database
async function getData() {
  // GET request using fetch()
  const response = await fetch('/api');
  const data = await response.json();

  // for loop per JSON datafile
  for (item of data) {
    // create elements to be inserted into the Log index.html
    const root = document.createElement('p');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');
    // textContent > innerHTML (safer for user)
    // innerHTML has more holes for malicious people to change the content 
    mood.textContent = `mood: ${item.mood}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    // convert timestamp into readable language
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    // change src of image using the image64 code
    image.src = item.image64;
    // good to set image alt for people who cannot see
    image.alt = 'Dan Shiffman making silly faces.';
    // append information into the root element
    root.append(mood, geo, date, image);
    // append all data into the body of the page
    // can also be inserted after a certain element like header, etc.
    document.body.append(root);
  }
  console.log(data);
}
