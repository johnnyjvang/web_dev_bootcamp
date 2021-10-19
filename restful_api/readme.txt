Section 31: Build your own RESTful API from Scratch

---------------------------------------------------
362. What is Rest?
---------------------------------------------------
REpresentational 
State
Transfer 


Client -> Server 

HTTP Request (hyper text transfer protocol) 
app.get(function(request, response))

if does not exist = 404 Error 

FTP (file transfer protocol) 


REST is just an type of arcitectural style for designing API's 

SOAP, graphQL, FALCOR (other styles for API) 

REST came about from an PHD student from UC Irvine (2000) 

Architectural Styles and the design of Network-based Software Architectures 

Rules to make API Restful:

1) Use HTTP Request Verbs
	GET / POST / PUT / PATCH (newer) / DELETE 
2) Use Specific Pattern of Routes/Endpoints URLs 

CRUD = create, read, update, delete


PATCH vs PUT

PUT = renew entire entry with new one 
PATCH = update only what is needed to change 

bycle analogy:

You get a bycle with the front wheel that is damaged. 

You can ask amazon to ship you an entirely new bike (PUT), 
or you can ask amazon to ship you just a new front tire (PATCH). 


Routes = ("/route")

/articles 

---------------------------------------------------
363. Creating a Database with Robo 3T
---------------------------------------------------
Build a wikipedia Style type API 
- build articles on each topic you have learned 

-Cilent / Server / Databse

Will be using a mongoDB database

robomongo (visualization for mongoDB) 

setup robomongo, download, etc. 

Open robomongo
- Create a new mongoDB connection 

in command prompt:

	mongod 

robo 3T

	connect 

instead of using command prompt with "mongo", we can now use robo 3T to do the same thing visually 


add to articles: 

{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}





---------------------------------------------------
364. Set up Server Challenge
---------------------------------------------------
https://github.com/londonappbrewery/Build-Your-Own-RESTful-API

Task: 

Create new Directory called Wiki-API
initialize NPM and install body-parser, mongoose, ejs, and express
Create a new file called app.js
Inside app.js, add server code (Write/Copy) 

Setup MongoDB:
- DB name is wikiDB
- Collection name is articles
- Document has 2 fields: title and content  
----------------------------------------------------------------
Server Starting Code:
-----------------------------------------------------------------
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});




---------------------------------------------------
365. Set Up Server Solution
---------------------------------------------------


---------------------------------------------------
366. Get All Articiles 
---------------------------------------------------

---------------------------------------------------
367. POST a New Article
---------------------------------------------------


---------------------------------------------------
368. DELETE All Articles 
---------------------------------------------------


---------------------------------------------------
369. Chained Route Handlers Using Express
---------------------------------------------------


---------------------------------------------------
370. GET a Specific Article 
---------------------------------------------------


---------------------------------------------------
371. PUT a Specific Article 
---------------------------------------------------


---------------------------------------------------
372. PATCH a Specific Article
---------------------------------------------------


---------------------------------------------------
373. DELETE A Specific Article
---------------------------------------------------


---------------------------------------------------
374..
---------------------------------------------------

 