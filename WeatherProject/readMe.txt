---------------------------------------------------------------------------------
Lesson 239 - Why do we need APIs?

APIs - Application Programming Interfaces 

 - online database/resource that are public/private for you to use for your application 

Applications built in this lesson: 
	- Weather App 
		- takes current location of your browser and gives you the weather 
		- utilize weather api to give you the proper data 
		- API: https://openweathermap.org/api
	- Email Data Collection 
		- mailchip api: https://mailchimp.com/developer/ 


An Application Programming Interface (API) is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.

commands/functions 
- you can acess weather via existing function (getWeather())
protocols 
 - iterable protocols (for loops) 
objects 
- already made variables 
- Have a "state" and "behavior" 
for a dog: 
- state (name, color, breed, hungry)
- behavior (barking, fetching, wagging tail) 

https://docs.oracle.com/javase/tutorial/java/concepts/object.html

As you do, you'll notice that real-world objects vary in complexity; your desktop lamp may have only two possible states (on and off) and two possible behaviors (turn on, turn off), but your desktop radio might have additional states (on, off, current volume, current station) and behavior (turn on, turn off, increase volume, decrease volume, seek, scan, and tune). 

Analogy: 

Restaurant: Can buy already made food (for the public) 
 - menu - public info for the customer 
Kitchen: Ingridents/supply necessary to make food (private, for chefs)

 
Your Server => API (request) => Someone Else's Server 

Someone Else's Server => API (Response) => Your Server 


---------------------------------------------------------------------------------
240: API Endpoints, Paths, Parameters 
---------------------------------------------------------------------------------

REST stands for Representational State Transfer while API stands for Application Program Interface. ... Therefore, it is the connector between two applications, and it is an essential part of any application development. A REST API is a web service API which uses URIs and HTTP protocol and JSON for data format.

Endpoint (link/starting URL) 
- get https://api.kanye.rest 
	- get a random quote from kanye west 

joke api:
sv443.net/jokeapi/v2

base query: 
https://sv443.net/jokeapi/v2/joke/["category/-ies"]


Paths
- extra query selectors like caegories 
- Query: any joke (option is available) 
	- ex: https://sv443.net/jokeapi/v2/joke/any


Parameters 
- A query that has not been created (needs a search query) 
Query: debugging
	- ex: https://sv443.net/jokeapi/v2/joke/Programming?contains=ddebugging

single parameter: starts out with a question mark 

	?contains=debugging

More than 1 parameter: subsequent queries are followed using &

	?contains=debugging&type=single 



---------------------------------------------------------------------------------
241. API Authentication and Postman
---------------------------------------------------------------------------------

- Authentication 
 	- user should have a unique ID key 
	- this ID key allows the API to track your usage 
	- Some api are monetary where they only allow a number of request per minute/time 


Sample: Demo API Key 

https://openweathermap.org/current

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}



POSTMAN
- a GUI or application that you use to test out API "GET" HTTP request 

Steps to use:
1. Put in the endpoint URL
2. Add parameters
3. Add appid/key 

api.openweathermap.org/data/2.5/weather?q=fresno&appid=bb578b75d4e04600feb8a1fcdda9f907&units=imperial

Query Params
q=fresno
appid=.....
units=imperial 

Comes back as a JSON file (javascript object notation) 

---------------------------------------------------------------------------------
242. What is JSON?
---------------------------------------------------------------------------------
- Looks just like a javascript object

Vanilla JS object: 

var wardrobe = {
	doors: 2,
	drawers: 2,
	colour: "red"
}


JSON Structure:
- easily readible by human, and easily compressed to transfer over the web 
- most favored format 

Other formats:
XML 
HTML 

Useful chrome add-on:
JSON Viewer Awesome (will beautify the JSON) 
	- TREE | Chart | JSON Input 


---------------------------------------------------------------------------------
243. Making GET Requests with the Node HTTPS Module
---------------------------------------------------------------------------------
(Done locally) 
Cilent Browser -> Get Request -> Your Server 
Your Server -> Response -> Cilent Browser 

(Done over an API) 
Your Server -> Request -> Someones Else Server
Someones Else Server -> Response -> Your Server 

Make WeatherProject Folder

	mkdir WeatherProject 

Make Working Files

	touch index.html app.js 

Intialize NPM

	npm init (default all)

Install Expess

	npm i express 


const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("Server is up and running"); 
});

app.listen(3000, function(){
  console.log("Server is running on port 3000"); 
});


How to make "get" Request via API (outdated):
https://stackoverflow.com/questions/40222563/how-to-make-a-external-api-call-inside-express-server

More up to date version of "get" Request:
https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

Native Http Node Request: 
https://nodejs.org/api/https.html

---------------------------------------------------------------------------------
244. How to Parse JSON
---------------------------------------------------------------------------------
const weatherData = JSON.parse(data); 
JSON.stringify(data) -> Turn JSON object into a string 

Take JSON file, then you got to extract like you would for any CSS naming convention or class function/ojbects. 

{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}

const menu = JSON.parse(data); 
const id = menu.id 

---------------------------------------------------------------------------------
245. Using Express to Render a Website with Live API Data
---------------------------------------------------------------------------------

Note:
Can only had 1 res.send() method or it will error 

To have multiple lines sent over res.send(), use multiple res.write()

res.write("hello world");
res.write("no world");
res.send(); 

---------------------------------------------------------------------------------
246. Using Body Parser to Parse POST Requests to the Server
---------------------------------------------------------------------------------

res.sendFile(__dirname + "/index.html")

__dirname (allows you to get the file path without writing it down) 

    <form class="" action="/" method="post">
      <label for="cityInput">City Name</label>
      <input id="cityInput" type="text" name="cityName">
      <button type="submit">GO</button>
    </form>


method="post" 

	- this method will process once the button has been clicked
	- type="submit" (will activate the post request) 

action="/" (root route) 

npm i body-parser (need to install to look at the body of the post request) 

	const bodyParser = require("body-parser");
	app.use(bodyParser.urlencoded({extended: true}));

Post method will fetch the data which is the name of the input data
	- input -> name ="cityName" 
	- console.log(req.body.cityName);

---------------------------------------------------------------------------------
247. The Mailchimp API - What You'll Make
---------------------------------------------------------------------------------

---------------------------------------------------------------------------------
248. Setting Up the Sign Up Page
---------------------------------------------------------------------------------

---------------------------------------------------------------------------------
249. Posting Data to Mailchimp's Servers via their API
---------------------------------------------------------------------------------

---------------------------------------------------------------------------------
250. Adding Success and Failure Pages
---------------------------------------------------------------------------------

---------------------------------------------------------------------------------
251. Deploying Your Server with Heroku
---------------------------------------------------------------------------------
