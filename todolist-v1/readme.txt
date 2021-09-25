Section 22: EJS

EJS documentation (https://ejs.co/)

EJS = Embedded JavaScript Templating 

EJS is a package in node that allows you to make html templates utilizing EJS Tags (<%= EJS %>)

These EJS tags should contain a variable which could be called out in JavaScript 

Why do we need Templates???

To make it easier to manipulate a single html file versus having to create different unique one per instance. 

Example: 
One will be needed for the weekend and another for the week. 
Or 7 would be needed per day versus having 1 template with a single EJS paramater to switch out the HTML. 
Although, you could just switch out the innerhtml or text using javascript, probably not the best solution though. 

How to install EJS:

	npm install ejs

Use EJS in code:

	JAVSCRIPT:
		set at beggining: 
		app.set("view engine", "ejs");

		set in app.get:
	        res.render('EJS_file', {ejs_variable: javascript_variable});
		
EJS file should be placed in a "view" folder. 
EJS files should have a .ejs after the name (ex: list.ejs) 


<%= Outputs the value into the template (HTML escaped)

EJS HTML example: 
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Render</title>
  </head>
  <body>
    <h1>Today is <%= kindofday %></h1>
  </body>
</html>


Javascript example: 
app.get("/", function(req, res) {
  var today = new Date();
  let currentDay = today.getDay();
  let day = "";

  // if else statement
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "weekend";
  } else {
    day = "weekday";
  }
  res.render('list', {kindofday: day});
})


Tags

<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it



<% 'Scriptlet' tag, for control-flow, no output
	
	Allows you to write if/else, switch in HTML 
	must be used per single line 

  <body>
  <% if (kindofday === "Saturday" || kindofday === "Sunday") { %>
        <h1 style="color: blue">Todo list for <%= kindofday %></h1>
  <%  } else {%>
        <h1 style="color: green">Todo list for <%= kindofday %></h1>
  <%  }%>

  </body>


268. Passing Data from your Webpage to your Server


how to format a javascript data: 
https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

For different languages:
"en-US": For English
"hi-IN": For Hindi
"ja-JP": For Japanese

Example: 

	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();

	console.log(today.toLocaleDateString("en-US")); // 9/17/2016
	console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
	console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

Task:

- make form tag (method="post") with an input and button in list.ejs 
- add post request to app.js 
- console.log the new input using bodyParser 
- add the app.use(bodyParser.urlencoed({extended: true})) to app.js
- add EJS list item to list.ejs (<li> <%= newListItem%> </li>
- create global variable called items
- add new items to global variable from the post request 
- add newListItem to app.get to the res.render 
- add forloop using EJS snippet to add new <li> 


EJS:

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Render</title>
  </head>
  <body>
    <% if (kindofday === "Saturday" || kindofday === "Sunday") { %>
        <h1 style="color: blue">Todo list for <%= kindofday %></h1>
  <%  } else {%>
        <h1 style="color: green">Todo list for <%= kindofday %></h1>
  <%  }%>

  <ul>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
  <%  for (var i=0; i<newItems.length; i++){ %>
      <li> <%= newItems[i] %> </li>
      <!-- <li> <%= newItems[i] %> </li> -->
  <%  } %>

  </ul>

  <form class="" action="/" method="post">
    <input type="text" name="newItems">
    <button type="submit" name="button">Add</button>
  </form>

  </body>
</html>

JAVAscript:

let items = ["yellow"];
res.render('list', {kindofday: day, newItems: items});

app.post("/", function(request, response){
  items.push(request.body.newItems);
  // console.log(newItems);
  response.redirect("/")
});



269. The Concept of Scope in the Context of Javascript 


Scope - local vs global variables 

types of variable parameters: var, let, const 

creating variables inside control-flow (if/else, while, etc.) will make variables global 

creating variables inside functions makes them local only to that funciton 

wise words: always use "let" versus "var" 



270. Adding Pre-made CSS stylesheets to your Website

task:

- download styles.css 
- create new folder called public 
- add styles.css to public folder 
- app.use(express.static("public") - add to app.js 
	- allow express to pull from public folder 
- add link/stylesheet to list.ejs 
- add css class/ID's to specific html tags 

- add box/id class to "kindofDay"
- add box class and item class to UI/LI elements 


- for input tag, turn autocomplete="off" (removes suggested autocompletes) 

for more information on css selectors check MDN page:
https://www.w3schools.com/cssref/css_selectors.asp


271. Understanding Templating vs Layouts 

- change kindOfDay to listTitle (change for different todo categories / URL) 
- add app.get('/work') -> res.render("list", {listTitle: "Work list", newListItems: workItems}) 
- let workItems = []
- app.post("/work", function(request, response)) 
	let item = req.body.newItem 
	workItems.push(req.body.newItem) 

- fix app.post('/') to reroute for the app.post("/work") 
- add value to button, make it dynamic with EJS tag 
	value=<%= listTitle %> 

- add if/else statement into app.post("/") 
	check if button was pressed in route("/") or ("/work") 

- EJS, create a layout or partial for headers and footers 
- create header.ejs / footer.ejs
- create about.ejs
- add app.get('/about')
- add header/footer to about.ejs 


<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>


272. Understanding Node Module Exports: How to pass Functions and data between files


- repackage, make a module to generate the current date 
- create date.js - copy/paste code into it 
	- add console.log(module) statement 
- const date = require(__dirname + "/date.js"); 
- module.exports = "hello world" - add to date.js
	- module.export = getDate (pass function) 
	- note: leave as getDate not getData(), avoids running code 
- javascript object 
	- module.exports.getDate = getDate;
 	- module.exports.getDay = getDay;

- make both functions anonymous to reduce lines of code, clearer 
- turn functions into varibles 
- exports = module.exports (short-hand) 
- const in javascript, allows to push new items into the array 
	- not necessarily a constant 
	- does not protect items in the array 

const date = require(__dirname + "/date.js")

app.get("/", function(req, res) {
  let day = date.getDate();

  res.render('list', {
    listTitle: day,
    newItems: items
  });
})







