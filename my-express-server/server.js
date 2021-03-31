const express = require("express");

const app = express();

app.get("/", function(require, response){
  // this statement prints out the webpage information
  // console.log(require);

  // youcannot send more than 1 response??
  // response.send("hello");
  response.send("<h1>Hello World!</h1>")
});


app.get("/contact", function(require, response){
  response.send("<h1>This is my contact page</h1>")
});

app.get("/hobbies", function(require, response){
  response.send("<h1>This is my hobbies</h1>")
});

app.get("/about", function(require, response){
  response.send("<h1>This is my about page</h1>")
});


app.listen(3000, function(){
  console.log('you are port 3000')
});
