//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(require, response){
  // response.send("<h1>Hello World! Calculator</h1>")
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body);
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

app.listen(3000, function(){
  console.log('you are port 3000')
});
