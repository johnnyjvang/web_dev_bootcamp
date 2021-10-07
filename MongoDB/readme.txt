Section 26: MongoDB

how to install mongoDB 

https://www.mongodb.com/try/download/community

- Software tab -> go to software 
- version = current
- platform = windows
- package = msi 

Uncheck box - Install MongoDB Compass

in Local disk (C:)
- make a folder called data
- inside data, make another folder called db (database) 


VIM

i(insert)
esc = cancel 
save = :wq!

- vim .bash_profile
- add both two lines bottom to help add path 

alias mongod="/c/Program\ files/MongoDB/Server/4.2/bin/mongod.exe"

alias mongo="/C/Program\ files/MongoDB/Server/4.2/bin/mongo.exe"

check if mongodB works

mongo --version 

MongoDB shell version v5.0.3
Build Info: {
    "version": "5.0.3",
    "gitVersion": "657fea5a61a74d7a79df7aff8e4bcf0bc742b748",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}



328. MongoDB CRUD Operations in the Shell: Create

- mongodb documentation 
https://docs.mongodb.com/manual/tutorial/getting-started/

- look over MongoDB crud opeations 

how to spin up mongoDB 

	mongod 
	mongo (on a different shell) 

- type "help" to show helpful shortcuts for mongo 

- use shopDB (how to make a database) 
- typing ing "db" shows the current db 

- how to insert documents into a collection: 
	db.collection.insertOne() 
	db.collection.insertMany() 

db.users.insertOne(
	{
	name: "sue",
	age: 26, 
	status: "pending" 
	}
)

collection = like a table 

db.products.insertOne({_id:1, name:"pen", price: 1.20})

show collections -> products 

db.products.insertOne({_id:2, name: "pencil", price: 0.8}) 



329. MongoDB CRUD Operations in the Shell: Reading & Queries


> show collections 
products


Read Operations:

	db.collection.find()

db.users.find(query, project)

query, projection (optional) 


find all documents within products: 

	db.products.find()

query for a specific collection:

	db.products.find({name: "Pencil"}) 


query for products greater than 1 dollar (price>1) 

	db.products.find({price: {$gt: 1}}) 

	{$gt (greater than): 1} 


db.products.find(
	{_id: 1},     <- query 
	{name:1}     <- projection 
) 

query to return the item with id=1, but only the name of the dataset 



330. MongoDB CRUD Operations in the Shell: Update

db.collections.updateOne(query, set)

db.products.updateOne({_id:1}, {$set: {stock: 32}})

	- will add stock field to first id 

db.products.updateOne({_id:2}, {$set: {stock: 12}})




331. MongoDB CRUD Operations in the Shell: Delete


db.collection.deleteOne()
db.collection.deleteMany() 

db.users.deleteMany({status: "reject"}) 


db.products.deleteOne({_id: 2}) 
	- this will delete entire record, no undo method 



332. Relationships in MongoDB

a style of embedding relationships within a product 

db.products.insert(
 {
 _id: 3, 
 name: "rubber", 
 price: 1.30,
 stock: 43
 reviews: [
   {
	authorName: "sally", 
	rating: 5, 
	review: "best rubber ever!" 
   },
   {
	authorName: "sally", 
	rating: 5, 
	review: "best rubber ever!" 
   }
 ]
 }
)

recommendation: 

- write code in a blank text editor 


db.products.insertOne({
 _id: 2,
 name: "pencil", 
 price: 0.80, 
 stock: 12, 
 reviews: [
   {
	authorName: "sally", 
	rating: 5, 
	review: "best rubber ever!" 
   },
   {
	authorName: "sally", 
	rating: 5, 
	review: "best rubber ever!" 
   },
 ]
})


333. Working with The Native MongoDB Driver

ODM = object document mapper 
mongoose -> mongodb non-native 

difference between mongodb native driver vs mongoose 

- pick node.js mongo db driver 

https://docs.mongodb.com/drivers/node/current/quick-start/

mkdir FruitsProject
touch app.js
npm init -y (will say yes to all categories) 
npm i mongodb 

copy/paste mongodb code from website: 

old version (https://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/): 

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});



new version: 
https://docs.mongodb.com/drivers/node/current/quick-start/

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.

const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

const url = 'mongodb://localhost:27017'; 

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



how to run code:


	mongod
	node app.js 


Tasks: 

- add new option 
- add insert code into app.js 
- change insert code to add the fruits 
- find all collections (fruits) 



334. If You Have Forgotten to Quit the Mongod Server

You can use CTRL + C in your Terminal to shut down your mongod connection.


Open up a fresh Hyper Terminal tab

2. Paste the command below into Hyper:

sudo pkill -f mongod

3. Now enter the password that you use to log on to the Mac.

4. Open a new Hyper terminal, you should now be able to run the mongod command again.









