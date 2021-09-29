Section 23:

274. A new challenge format and what we'll make: a blog

Make:

Personal Blog diary type system 
- Home / About us / Contact US 
- All pages made with EJS

- hidden page: where the user can compose/upload a new post
- each new post will have their own unique URL 

275. Setting up the blog Project 

.DS_Store 
- user perference, compeletly irrelevant to the project 


- Node modules not installed, must install node modules locally 

	npm install (will install all node modules) 

276. Challenge 1

- When going to route ("/")
- should have a home route 
- add app.get("/") to app.js
- reponse.render("home") 
- Add <h1> home </h1> to home.ejs 

277. Challenge 2

- add const homeStartingContent to home page 
- add the <%= paragraph %> to the home page 
- response.render("home", {homeContent: homeStartingContent}); 

278. Challenge 3 

- add header/footer to the EJS

<%- include('header'); -%>

<h1>Home Page</h1>
<p> <%= homeContent %> </p>

<%- include('footer'); -%>


279. Challenge 4

- move header/footer EJS code into a folder called partials in the view folder 
- change file path to partial/header, partial/footer to fix error 


282. Challenge 5

- create about and contact page 
- localhost:3000/about
- localhost:3000/contact 

app.js:

app.get("/about", function(request, response){
  response.render("about", {aboutContent:aboutStartingContent});
});

app.get("/contact", function(request, response){
  response.render("contact", {contactContent:contactStartingContent});
});

EJS:

<%- include('partials/header'); -%>
<h1>About</h1>
<p> <%= aboutContent %> </p>
<%- include('partials/footer'); -%>


<%- include('partials/header'); -%>
<h1>Contact</h1>
<p> <%= contactContent %> </p>
<%- include('partials/footer'); -%>


286. Challenge 6

- change href of nav bar to according locations 
- home, about, contact 

      <ul class="nav navbar-nav navbar-right">
          <!-- 6 -->
          <li id="home"><a href="/">HOME</a></li>
          <li id="about"><a href="/about">ABOUT US</a></li>
          <li id="contact"><a href="/contact">CONTACT US</a></li>
        </ul>

289. Challege 7

- add compose.ejs page with input and butotn 

<!-- action goes to compose route  -->
<form class="" action="/compose" method="post">
  <!-- input must have a name in order to grab its input text -->
  <input type="text" name="textBox" value="inputText" placeholder="Text Here">
  <button type="submit" name="button">Publish</button>
</form>

290. Challenge 8

- add app.post("/compose")
- console.log("text") from input 

app.post("/compose", function(request, response){
  // grabs text from input (grab from "name" of input)
  // request is used because the input is a request from the server
  let text = request.body.textBox;
  console.log(text);
});

292. Challenge 9

- add multi line input (textarea) 
- <textarea></textarea> 
- add labels to each input/textarea 
- add bootstrap to forms (https://getbootstrap.com/docs/4.0/components/forms/) 

<form class="" action="/compose" method="post">
  <!-- input must have a name in order to grab its input text -->
  <div class="form-group">
    <label>Title</label>
    <input class="form-control" type="text" name="titleText" placeholder="Text Here">
  </div>

  <div class="form-group">
    <label>Post</label>
    <textarea class="form-control" name="postBody" rows="5" cols="30"></textarea>
  </div>

  <button class="btn btn-primary" type="submit" name="button">Publish</button>

</form>



294. Challenge 10 

- create javascript object that will contain both post text messages 

var objectName = {
  key: Value 
}

- ex: const car = {type:"Fiat", model:"500", color:"white"};

let titleText = request.body.postTitle;
let bodyText = request.body.postBody;

  const post = {
    body: bodyText,
    title: titleText
  };
  console.log(post);


296. Challenge 11

- change const post into a global variable 
- save the variable into an array 
- global.push()
- res.redirect("/") 

let posts = []; (set at very top) 
posts.push(post); 
response.redirect("/");


298. Challenge 12

- console.log in the home.ejs 

let posts = [];
response.render("home", {homeContent:homeStartingContent, postContent:posts});

<%- include('partials/header'); -%>

<h1>Home Page</h1>
<p> <%= homeContent %> </p>

<%  for (var i=0; i<postContent.length; i++){ %>
  <p> <%= postContent[i].body %> <%= postContent[i].title %> </p>
<%  } %>

<%- include('partials/footer'); -%>


300. Challenge 13

- print out post.title in a forloop 
- <%= postContent[i].title %> 


for (var i=0; i<upperBound; i++){
  array[i]; 
}

302. challenge 14

- use .forEach() for javascript forloop 

var array1 = ["a", "b", "c"];

array1.forEach( (letter)=>{
   console.log(letter); 
});


<h1>.forEach</h1>

<% postContent.forEach((item)=>{ %>
  <p>  <%= item.title %> <%= item.body %> </p>
<% }) %>


303. challenge 15

- render on homepage the posts 
- make it look like orignal post 

<% postContent.forEach((item)=>{ %>
  <h1><%= item.title %></h1>
  <p>  <%= item.body %> </p>
<% }) %>


305. Express Routing Parameters

- make a unique url for each post 
https://expressjs.com/en/guide/routing.html

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.


Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

app.get("/news/:topic", function(req,res){
	console.log(req.params.topic) 
})

- will log what ever was typed for :topic in url
- ex: localhost:3000/news/politics
- console.log(req.params.topic) -> politics 


In fact, the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})


306. challenge 16

- add console.log(req.params.topic) 
- add route parameters to your app.get request 


app.get("/posts/:post",function(request, response){
  console.log(request.params.post);
});






































