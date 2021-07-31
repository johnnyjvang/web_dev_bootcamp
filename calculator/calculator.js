//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// initialize bodyParser, decode/parse the url request
// extended: true = allows us to post nested objects (must be explicited written)
app.use(bodyParser.urlencoded({extended: true}));

// respond when user goes to main page
app.get("/", function(require, response){
  // response.send("<h1>Hello World! Calculator</h1>")
  // send an entire html file to the page given its name and location
  response.sendFile(__dirname + "/index.html");
});

// method = "post"
// request = data inputed by the user
// response = data sent back by the server
app.post("/", function(req, res){
  // all the information sent by the request (JSON file)
  console.log(req.body);
  // the inputed num1 and num2 represetned by form data
  // must use body-parser, to parse information sent by request
  // req.body.num1 = string, must convert to Number to do calculations correctly
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var results = num1 + num2;

  res.send("The results of the calculation is " + results);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});

// listen to localhost:3000
// console.log to command prompt you are at port 3000
app.listen(3000, function(){
  console.log('you are port 3000')
});
