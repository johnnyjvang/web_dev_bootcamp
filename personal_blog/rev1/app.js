//jshint esversion:6
// -----------------------------------------------------------------------------
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

// create the express server
const app = express();
// sets up
app.set('view engine', 'ejs');

// Used to parse through data inputed from html forms/etc
app.use(bodyParser.urlencoded({extended: true}));
// allows you to pull/use EJS files from public folder
app.use(express.static("public"));

// connects to the mongoDB server, will create a new one if not there
// mongoose.connect("mongodb://localhost:27017/blogDB2", {useNewUrlParser: true});
const mongodb_server = "mongodb://localhost:27017/";
const database_name = "personblogDB";
// mongoose.connect(mongodb_server + database_name);

const pw = process.env.PASSWORD
const user_name = process.env.USER_NAME

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://" + user_name +  ":" +  pw  + "@cluster0.fww2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// const mongo_atlas_server =
// mongosh "mongodb+srv://cluster0.fww2s.mongodb.net/myFirstDatabase" --username admin-joni

// const uri= "mongodb+srv://admin-joni:" + pw + "@cluster0.fww2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(uri);

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const postsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: String
});

const Post = mongoose.model("Post", postsSchema);

// app.get("/", function(require, response){
//  response.render("home");
//  console.log("home");
// });
app.get("/", function(req, res){
  Post.find({}, function(err, posts) {
    res.render("home", {
      posts: posts
    });
  });
 console.log("home");
});

app.get("/contact", function(require, response){
 // response.send("<h1>hello world!</h1>");
 // res.sendFile(path [, options] [, fn])
 response.render("contact");
 console.log("contact");
});

app.get("/about", function(require, response){
 // response.send("<h1>hello world!</h1>");
 // res.sendFile(path [, options] [, fn])
 response.render("about");
 console.log("about");
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res){
  // already a javascript object, need to change to mongoose model (item)
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
    date: req.body.postDate
  });
  // post.save().then(() => console.log('post saved sucessfully'));
  // posts.push(post);
  post.save(function(err) {
    if (!err) {
      console.log("post saved!");
      res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){
// change to postID
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content,
      date: post.date
    });
  });

});

// checks ot see if localhost:3000 is working
// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started sucessfully");
});



// how to run mongodb:
//
// 	mongod (start server)
// 	mongo (script mongodb here)

// -----------------------------------------------------------------
// Run code:
// 	// run in js terminal
// 	node app.js
//
// 	// run in mongo terminal
// 	show dbs
// 	use fruitsDB
// 	show collections
// 	db.fruits.find()

// run in command prompt
// mongo "mongodb+srv://cluster0.fww2s.mongodb.net/myFirstDatabase" --username admin-joni

// make sure your IP is allowed or white listed on the mongoDB atlast website
// can also just make all Ip's work (not sure on the security)
