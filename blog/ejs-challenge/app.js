//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactStartingContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/posts/:post",function(request, response){
  let _posts = _.lowerCase(request.params.post);
  let currentPost = {};
  let currentparam = NaN;
  console.log(_posts);
  posts.forEach((item)=>{
    if ( _posts === _.lowerCase(item.title)){
      let currentTitle = item.title;
      let currentBody = item.body;
      response.render("post", {
        title: currentTitle,
        body: currentBody
      })

      currentPost = {
        body: currentBody,
        title: currentTitle
      }
      console.log(item.title, "match");
    } else{
      console.log("no match")
    }
  });
  // response.render("post", {postContent: currentPost})
  // console.log(request.params.post);
  // response.redirect("/");
});

app.get("/", function(request, response){
  response.render("home", {homeContent:homeStartingContent, postContent:posts});
});

app.get("/about", function(request, response){
  response.render("about", {aboutContent:aboutStartingContent});
});

app.get("/contact", function(request, response){
  response.render("contact", {contactContent:contactStartingContent});
});

app.get("/compose", function(request, response){
  response.render("compose");
});


app.post("/compose", function(request, response){
  // grabs text from input (grab from "name" of input)
  // request is used because the input is a request from the server
  let titleText = request.body.postTitle;
  let bodyText = request.body.postBody;
  // console.log(titleText);
  // console.log(bodyText);
  let post = {
    body: bodyText,
    title: titleText
  };
  // console.log(post);
  posts.push(post);
  console.log(posts);
  response.redirect("/");
});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
