Seciton 29: Deplying your Web Application

----------------------------------------------
250. How to Deploy Web apps with a database
----------------------------------------------

Currently the todo_list is running locally or hosted from a laptop 

Website runs on http://localhost:3000
mongodb runs on mongodb://localhost:27017


http://localhost:3000 -> https://yourapp.herokuapp.com 
mongodb://localhost:27017 -> mongoDB Atlas 

- use mongoDB Atlast (mongoDB server) 
mongodb://cluster0.mongodb.net:27017

node.js -> Heroku 
mongoDB -> mongoDB Atlas 

----------------------------------------------
251. How to Setup MongoDB Atlas
----------------------------------------------

Task: 

- signup for mongoDB Atlast Database service 
- deploy a new account for free 

https://www.mongodb.com/try?jmp=nav

- cloud provider -> AWS
- North America (North Virginia (free tier)) 

Cluster Tier -> M0 (free tier) 

Good option to use this method so you do not need to give any payment options since it is totally free. 

Cluster Name = Cluster0 

- Add new user/password (admin-ojboba) 
- change URL path for app.js 
- add path for mongo to mongoDB Atlas 

admin-joni
pw: Joni-Woni

mongo --verison 
-> Mongo v5.0.3

paste into command prompt: 
mongo "mongodb+srv://cluster0.pnhqp.mongodb.net/myFirstDatabase" --username admin-joni

in same tab, wrote: 
show dbs 

admin 0.000GB
local 3.956GB 


- make new collection using mongodb website
database_name = test
collection_name = test

in terminal:
show dbs
use test
show collections
db.test.find() 

change mongoose.connect link to: 

mongodb+srv://admin-joni:<password>@cluster0.pnhqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

where password = Joni-Woni

Run App.js in another termianl:

	node app.js

Now if you check your collections at Mongo Atlas, there should be a new database and collections 

----------------------------------------------
252. Deploying an App with a Database to Heroku 
----------------------------------------------

- setup heroku for your new node application  
- push todolist to heroku using git commands 
- todolist should now work on the heroku url with using the mongodb atlas 


documentation to launch app on heroku:
https://devcenter.heroku.com/


Steps after installing Heroku:
https://devcenter.heroku.com/articles/getting-started-with-nodejs#prepare-the-app


Preparing a Codebase for Heroku Deployment:
https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment

-----------------------------------------------------------
1. Track your codebase in a Git repository
-----------------------------------------------------------
- install git 

-----------------------------------------------------------
2. Add a Heroku Git remote
-----------------------------------------------------------
go to project directory, and add to git. 

git init 
git add . (adds all files) 
git commit -m 'initial commit' 


log into heroku:
heroku login 

create new project:
heroku create 

$ heroku create
 	»   Warning: heroku update available from 7.51.0 to 7.59.0.
	Creating app... done, ⬢ shrouded-everglades-54533
	https://shrouded-everglades-54533.herokuapp.com/ | https://git.heroku.com/shrouded-everglades-54533.git

-----------------------------------------------------------
3. Add a Procfile
-----------------------------------------------------------
add Procfile to project folder 
touch Procfile

copy/paste into Procfile:
web: node app.js


-----------------------------------------------------------
4. Listen on the correct port
-----------------------------------------------------------
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

-----------------------------------------------------------
5. Use a database or object storage instead of writing to your local filesystem
-----------------------------------------------------------
- use Mongo Atlas 

-----------------------------------------------------------
6. Complete language-specific setup
-----------------------------------------------------------
Specify the version of node to package.json

"engines": {
    "node": "14.x"
  },

$ node --version
v14.16.0


{
  "name": "todolist-v1",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "engines": {
    "node": "14.16.0"
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "ejs": "^2.6.1",
    "express": "^4.16.3",
    "lodash": "^4.17.21",
    "mongoose": "^6.0.9"
  },
  "keywords": [],
  "description": ""
}



Prevent build artifacts from going into revision control by creating a .gitignore file that looks something like this:

touch .gitignore 

copy/paste into ".gitignore" :

	/node_modules
	npm-debug.log
	.DS_Store
	/*.env


Deploy your application to Heroku

git add .
git commit -m "Added a Procfile."
heroku login
	Enter your Heroku credentials.
	...
heroku create (not needed) 
	Creating arcane-lowlands-8408... done, stack is cedar
	http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-	lowlands-8408.git
	Git remote heroku added
git push heroku master
	...
	-----> Node.js app detected
	...
	-----> Launching... done
       http://arcane-lowlands-8408.herokuapp.com deployed to Heroku


heroku app: 
https://shrouded-everglades-54533.herokuapp.com/


