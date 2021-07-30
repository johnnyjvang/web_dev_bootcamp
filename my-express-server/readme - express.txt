Express 
	- a node framework 
	- helps organize and structure your code 

Atom is built from electron (hence the logo) that is built upon node.js 

Node = a screwdriver (not robust) 
express = motorized screwdriver (much better to build larger/harder code) 

mkdir my-express-server
touch server.js
npm init 
 - initialize with server.js 
 - description: my first express server 
 - entry point (server.js) 
 - author: Name
 - default: rest 

shortcut to open file w/atom 

atom "filename" 
ex: atom server.js 
or 
atom . (this will open atom up) 

npm install express --save 	
 - (--save) is not necessary after npm 5.0 + 
 - typically this will add express to be a dependencies 


const express = require('express' 4.16.3); 
 - version is not required but can be added 
 - default will be the version you have installed 

const app = express() 
 - a function that binds to the express function 
 - best practice to call it "app" 

app.listen(3000) 
 - listens to the port 3000 
 - barebones of a server 

to stop server press (cltr+c)

app.listen(3000, function(){
 console.log("server started on port 3000")
}) 
 - this will print to the command prompt 
 - localhost:3000 
	- when looking at this in browser, it will error 
 	- will say (Cannot GET /) in browser 
	- unable to get a request/response from server 


example:
like when you go to your browser to type in:
 - www.google.com
 - google will receive a request (from the user) to then send a response of the website
	- response: website (html/css/javascript/etc.)  


app.get("/", function(require, response){
 response.send("<h1>hello world!</h1>")
});

- when a user enters the homepage, it will trigger the app.get() function 
- the require is the information from the user, like authentication, etc. 
- the response, is what the server decides to send back to the user
	- in this case, it is going to send back html saying "hello world" 

shorten version: 
app.get("/", function(req, res){
	- shorten for best practices 
});

------------------------------------------------------------------------------
nodemon - a npm package that will make it way easier to auto start a server 

npm install -g nodemon or sudo npm install -g nodemon (note sudo only works in mac or linux) 





