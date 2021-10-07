Section 27: Mongoose
-----------------------------------------------------------------
336. Introduction to Mongoose
-----------------------------------------------------------------
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

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

The permitted SchemaTypes are:

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map

create a new "schema" 


const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number, 
  review: String 
}); 


// mongoose.model(modelName, schema)
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

how do we use the find function from mongo in javascript/node? 

// this code will log the entire fruits array 
Fruit.find(function(err, fruits){
  if (err){
    console.log(err);  
  } else {
    console.log(fruits); 
  }
});


- log only the name of the fruits 
// this code will console.log only the name of each fruit 
fruits.forEach( (item) =>{
 console.log(item.name); 
})


- good practice to close the database once you are done with the app/code 

	mongoose.connection.close() 

This code will end the code, will avoid needing to cltr+c 


-----------------------------------------------------------------
338. Data Validation with Mongoose
-----------------------------------------------------------------
how to add validation in the schema 


const fruitSchema = new mongoose.Schema(
  // if name not given, will throw an error 
  name: {
    type: String, 
    requried: [true, "No name specified, add fruit name!"] 
  }, 
  // if rating is not between 1-10, will throw an error 
  rating: {
    type: Number,  
    min: 1, 
    max: 10
  },
  review: String
});

- will not add new item if it does not pass the validation 

- make the name field required! 


-----------------------------------------------------------------
339. Updating and Deleting Data Using Mongoose
-----------------------------------------------------------------
Write operations like update(), updateOne(), updateMany(), and findOneAndUpdate() only check the top-level schema's strict mode setting.

// update data entry with id, change/add name to peach  
Fruit.updateOne({_id: "...."}, {name: "peach"}, function(err){
  if (err){
    console.log(err);  
  } else {
    console.log("update was sucessfull"); 
  }
});


how to delete the peach entry: 

Fruit.deleteOne({_id: "...."}) 
or 
Fruit.deleteOne({name: "peach"}, function(err){
  if (err){
    console.log(err);  
  } else {
    console.log("delete was sucessfull"); 
  }
}); 



how to delete many:

Person.deleteMany({name: "John"} function(err){
  if (err){
    console.log(err);  
  } else {
    console.log("delete was sucessfull"); 
  }
}); 

-----------------------------------------------------------------
340. Establishing Relationships and Embedding Documents using Mongoose 
-----------------------------------------------------------------


how to make a relationship between Person and Fruits DB 

- have "john" have a favorite "fruit" 


update personSchema to have a favoriteFruit! 

// note that the entry for favorite fruit was another schema! 
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const person = new Person({
  name: "Amy", 
  age: 12, 
  favoriteFruit: orange
});

person.save(); 

db.people.find(); 

favoriteFruit -> embedded document of the fruitSchema of the fruit 


- update John to have a favorite fruit (banana)  

Person.updateOne({name: "john"}, {favoriteFruit: banana}, function(err){
  if (err){
    console.log(err);  
  } else {
    console.log("delete was sucessfull"); 
  }
}); 


