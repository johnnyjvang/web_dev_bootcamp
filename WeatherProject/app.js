const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
  // get the api, put link into the get method
  // const city_name = "fresno";
  // const key = "bb578b75d4e04600feb8a1fcdda9f907";
  // const units = imperial;
  // const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city_name + "&appid=" + key + "&units=" + units;
  //
  // https.get(url, function(response){
  //   console.log(response.statusCode);
  //
  //   response.on("data", function(data){
  //     const weatherData = JSON.parse(data);
  //     const temp = weatherData.main.temp
  //     const description = weatherData.weather[0].description
  //     const icon = weatherData.weather[0].icon
  //     const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
  //
  //     console.log(temp, description);
  //     res.write("<p>The weather description is " + description + "</p>");
  //     res.write("<h1>The weather in " + city_name + " is " + temp + " degrees kelvin</h1>");
  //     res.write("<img src=" + imageURL + ">")
  //     res.send()
  //   });
  // });
  // can only have 1 send
  // res.send("Server is up and running");
});

app.post("/", function(req, res){
  // input name = cityName
  console.log(req.body.cityName);
  // const city_name = "fresno";
  const city_name = req.body.cityName;
  const key = "bb578b75d4e04600feb8a1fcdda9f907";
  const units = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city_name + "&appid=" + key + "&units=" + units;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const description = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      console.log(temp, description);
      res.write("<p>The weather description is " + description + "</p>");
      res.write("<h1>The weather in " + city_name + " is " + temp + " degrees fahrenheit</h1>");
      res.write("<img src=" + imageURL + ">")
      res.send()
    });
  });
});


app.listen(3000, function(){
  console.log("server is running on port 3000.");
});
