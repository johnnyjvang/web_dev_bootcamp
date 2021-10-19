Section 30: Boss Level Challenge 4 - Blog Website Upgrade

- add MongoDB and mongo Atlas to your blog website 
- all Blogs should not delete after "refresh" 

Currently all database is sent into an array which is hard coded called "posts". 

---------------------------------------------------------------
We need to create a new database called blog with a collection called post. Save to mongoDB 
---------------------------------------------------------------
add to app.js: 

const postsSchema = new mongoose.Schema({
  title: String,
  entry: String 
});

const Post = mongoose.model("Post", postsSchema); 

Post Example:

const post = new Post({
  title: "Post 1",
  content: "This is my first entry" 
});

post.save().then(() => console.log('post saved sucessfully'));

This code would mostly go inside the app.post("/compose") function 

app.post("/compose", function(request, response){
  const post = newPost({
	title: req.body.postTitle, 
        content: req.body.postBody
  });
  
  // save to database via mongoose.connect(database_name) 
  post.save() 
  res.redirect("/"); 
});
---------------------------------------------------------------
Read/Render data saved from mongoDB/Atlas 
---------------------------------------------------------------
most likely, will need to read/render at app.get("/") 
- use the .find() method 

const post1 = new Post({
  title: "Home"
  content: "Home first content" 
});

const post1 = new Post({
  title: "Day 0"
  content: "Test Entry Blog" 
});

const defaultItems = [post1, post2];

app.get("/", function(request, response){
  Post.find({}, function(err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      // foundItems finds all collections in Item Model
      // send to home to update all blog post 
      // we can send what ever content over
      res.render("home", {
   	 startingContent: homeStartingContent,
   	 posts: foundItems
      });
    }
  });
}); 

---------------------------------------------------------------
home.ejs, change posts.forEach() 
---------------------------------------------------------------
technically we can just update the posts array each time but maybe we should make a better one

- we need to change what is rendered to be an array so we can use a forloop

in the app.get("/"), change the res.render("post") content to foundItems only 
- res.render("post") only needed for independent blog pages 

we will need to actually send the link to res.render("home") 

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});

**note, posts is already a javascript object 

currently home has 4 EJS variables: 
1.   <p> <%= startingContent %> </p>
2.   <h1><%=post.title%></h1>
3.   <%=post.content.substring(0, 100) + " ..."%>
4.   <%=post.title%>

what we actually want to send over is the mongoDB database purely. 

  res.render("home", {
    startingContent: homeStartingContent,
    posts: foundItems
    });


In home.ejs you’ll need to change the href of the anchor tag based on the post id instead of the post name.

<a href="/posts/<%=post._id%>">Read More</a>

---------------------------------------------------------------
allowing onclick for post to seperate url
---------------------------------------------------------------
app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);
  let currentPosts = []; 
  Post.find({}, function(err, foundItems) {
    if (foundItems.length === 0) {
      res.redirect("/");
   } else {
     // save Post -> currentPost 
     currentPosts.push(Post); 
   }
  });
    
  // check which postTitle matches with the requestedTitle 
  // if they match, render the post to the post page 
  currentPosts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      }
     }
   });
});




---------------------------------------------------------------
Steps to add mongoDB to the blog:
---------------------------------------------------------------
install mongoose: 

	npm i mongoose 

const mongoose = require("mongoose"); 

Start server locally: 
const mongodb_server = "mongodb://localhost:27017/";
const database_name = "todolistDB";
mongoose.connect(mongodb_server + database_name);



3 Terminals:

	mongod
	mongo
	nodemon app.js 



