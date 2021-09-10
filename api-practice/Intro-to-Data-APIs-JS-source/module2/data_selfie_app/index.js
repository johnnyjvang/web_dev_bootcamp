// to use express, must require it
const express = require('express');
// nedb is a open source free database
const Datastore = require('nedb');

const app = express();
// listens to port 3000, logs to console
app.listen(3000, () => console.log('listening at 3000'));
// allows you to use static html/css/js from public folder
// this is good because they are stored locally on your server
app.use(express.static('public'));
// allow express to read JSON, limit to 1mb per second
app.use(express.json({ limit: '1mb' }));
// how to create a database using nedb functions
const database = new Datastore('database.db');
database.loadDatabase();

// GET request from "/api" which returns the response of a json
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

// POST request of the data from database to the route "/api"
app.post('/api', (request, response) => {
  // request.body is where the JSON file was saved to 
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});
