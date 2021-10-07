Section 27: Mongoose

336. Introduction to Mongoose

https://mongoosejs.com/

mongoose = object document mapper (ODM) 

allow your node.js app to talk with your mongodb (database) 

SUPer SIMPle: 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


how to run mongodb:

	mongod (start server) 
	mongo (script mongodb here) 

mkdir Fruits Project 
touch app.js
npm init -y 
npm i mongoose 
	
note:
do not name your folder any names similar to an npm package 
- had an error when i nammed the folder mongoose while installing mongoose 
- gave me an error saying you cannot install the package under the same project folder name 

resolve deprecated error: 

pass option { useNewURLPraser: true} 

// do not use this for this version! will give an error 
mongoose.connect('mongodb://localhost:27017/test', { useNewURLPraser: true} );


create a new "schema" 

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number, 
  review: String 
}); 

const Fruit = mongoose.model('Fruit', fruitSchema); 
- fruit will be pluralized 

const fruit = new Fruit ({
  name: "apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

fruit.save() 

-----------------------------------------------------------------
app.js 

// require the mongoose npm
const mongoose = require('mongoose');

// how to connect to mongodb server with "database"
// if database does not exist, will make a new one
mongoose.connect('mongodb://localhost:27017/testDB');

// can add a Schema of how the collection is composed/arrange

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

-----------------------------------------------------------------
fruit.js
// require the mongoose npm
const mongoose = require('mongoose');

// how to connect to mongodb server with "database"
// if database does not exist, will make a new one
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// can add a Schema of how the collection is composed/arrange

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "pretty solid as a fruit"
});

fruit.save().then(() => console.log('fruit saved'));

-----------------------------------------------------------------
Run code: 
	// run in js terminal 
	node app.js 

	// run in mongo terminal 
	show dbs
	use fruitsDB
	show collections
	db.fruits.find() 


- create a new collection for people 
	- name, age (new schema) 

const personSchema = new mongoose.Schema({
  name: String, 
  age: Number
});

const Person = mongoose.model("Person", personSchema); 

const person = new Person({
  name: "john", 
  age: 27
});

person.save(); 

show collections
db.person.find()

const kiwi = new Fruit({
  name: "kiwi", 
  score: 10,
  review: "the best fruit!"
}); 

const orange = new Fruit({
  name: "orange ", 
  score: 8,
  review: "vitamin C"
}); 

const banana = new Fruit({
  name: "banana", 
  score: 7,
  review: "thats what she said!"
}); 


Fruit.insertMant([], function(err){
  if (err) {
    console.log(err); 
  } else {
    console.log("sucessfully saved all the fruits to fruitsDB!"); 
  }
});


db.fruits.find() -> show all new fruits 


-----------------------------------------------------------------
337. Reading from Your Database with Mongoose
-----------------------------------------------------------------










-----------------------------------------------------------------
338. Data Validation with Mongoose
-----------------------------------------------------------------




-----------------------------------------------------------------
339. Updating and Deleting Data Using Mongoose
-----------------------------------------------------------------





-----------------------------------------------------------------
340. Establishing Relationships and Embedding Documents using Mongoose 
-----------------------------------------------------------------










