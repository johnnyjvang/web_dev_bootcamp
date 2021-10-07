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

// fruit.save().then(() => console.log('fruit saved'));

// create a seperate schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "john",
  age: 27
});

// person.save().then(() => console.log('person saved'));

// how to insert more than 1 row of data 
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

Fruit.insertMany([kiwi, orange, banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("sucessfully saved all the fruits to fruitsDB!");
  }
});
