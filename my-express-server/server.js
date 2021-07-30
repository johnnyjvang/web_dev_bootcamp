const express = require("express");

const app = express();


// method provided by express to get request
// "/" this is the homepage, or root webpage
// request = large json info
app.get("/", function(require, response){
  // this statement prints out the webpage information
  // console.log(require);

  // youcannot send more than 1 response??
  // response.send("hello");
  response.send("<h1>Hello World!</h1>")
});


// contact route
app.get("/contact", function(require, response){
  response.send("<h1>This is my contact page</h1>")
});

// hobbies route
app.get("/hobbies", function(require, response){
  response.send("<h1>This is my hobbies</h1>")
});

// aboute route 
app.get("/about", function(require, response){
  response.send("<h1>This is my about page</h1>")
});


app.listen(3000, function(){
  console.log('you are port 3000')
});
