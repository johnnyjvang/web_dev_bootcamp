--------------------------------------------------------------------------------
Lesson 231: making a calculator 

- Build a server that allows the user to have 2 inputs (numbers), once inputed, the user can click compute. 
- the server will take the request and respond back with the correct calculations 



mkdir calculator 
touch calculator.js
npm init (make sure you're in the correct directory)
atom calculator.js 
npm install express (npm module to make server) 
run nodemon 
 - nodemon calculator.js 
 - server should listen to port 3000 


note: 
 - to send entire file, you will need to use response.sendFile versus response.send
 - ex: response.send(__dirname + "/index.html")
 	- __dirname = current directory path
	- __dirname = /Users/User_name/Desktop/web_dev_bootcamp/Calculator
	- must add the "/" before index.html to indicate its inside the folder 


--------------------------------------------------------------------------------
Lesson 235: processing post request with body parser 

- if you do not process a post request, the browser will give you a 404 error 
	- Cannot Post /index.html 

- use form in the index.html 
	- <form action="/" method="post"></form>
	- must set action to server ("/") 
	- if not set, it will send to current page as default 


- require the module "body-parser" to allow us to easily parse through the users data request 
	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true})); 
		- extended = allow to post nested objects 

- console.log(require.body) = json file, all variables are string/text 

Benefits of using a server: 
- doing the code execute on a server versus doing it on the cilent front end side on the browser 

--------------------------------------------------------------------------------
Project notes: 

Refreshing the page will not work to restart the calculator app. 

You must re-enter/restart localhost:3000 into browser after you have clicked the calculator button. 

What to fix: 
 - Catch for errors 
	- not allowing calculator button to execute until both numbers have been inputed
	- only allowing numbers to be inputed 

--------------------------------------------------------------------------------
Lesson 236: BMI Routing Challenge 

touch bmiCalculator.html 

TODO:
 - add html form that will make make a post request to /bmicalculator 
	- <form action="/bmicalculator" method="post"></form>
		- post because we are sending information, not getting information 
 - add a button that says Caculate BMI
	<button type="submit">Caculate BMI</button>
		- make sure type = "submit", will trigger the method of the form 
 - add a get/post method for the /bmicalculator 
	- app.get("/bmicalculator", function(req,rep){
		response.sendFile(__dirname + "bmiCalculator.html); 
		});

	- app.post("/bmicalculator", function(req, res){
		bmi = some calculations 
		res.send("your BMI is " + bmi);
		});


how to run code: 
	
	nodemon calculator.js 
	
 - in browser, go to localhost:3000 
 - input the weight and height 
	- req.body.weight, req.body.height 
 - click calculate bmi button 

response: 
 - server should send back BMI in text 
 - ex: "your bmi is" + bmi
 - bmi should be a decimal number or float varible  










