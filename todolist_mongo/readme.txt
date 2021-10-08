Section 28: Putting Everything Together


-----------------------------------------------------------------------------------
342. Let's take the ToDoList Project to the Next Level and Connect it with Mongoose
-----------------------------------------------------------------------------------

Problem: 

nothing is being saved to the TODOLIST, everything is erased when server restarts 

https://www.appbrewery.co/p/web-development-course-resources/
Download: Todolist v2 starting files

cd to work directory: 
	
	npm i (install all previous node dependices) 
	npm i mongoose 

const mongoose = require("mongoose"); 
// new database being created called todolistDB 
mongoose.connect('mongodb://localhost:27017/todolistDB');

// create an itemSchema, with 1 field being a name: String

const itemsSchema = new mongoose.Schema({
	name: String 
});
vs
(non mongoose schema version) 
const itemsSchema = {
	name: String 
};

schema options:
required: true (entry must exist to save) 
unique: true (only 1 item named this) 
default: Date.now (if not entered, will default to something) 

Hey guys! I understand now and here it is, it is covered on the new authentication module Angela just added.

So basically you can define an schema just like that if.... you don't want to make anything fancy with it you can just define it with a JS Object BUT if you plan on making something fancy like encrypting the database then you need it to be specified as a mongoose schema (you'll understand it better later on in that module)

But yeah, basically depends on how much fancy use you'll give to that particular schema on the database.

Mongoose Model (we create an instance of the schema so it can be used in various places) 

const = mongoose.model(
  <"singularCollectionName">, 
  <schemaName> 
);

// this creates the Item database model 
const Item = mongoose.model("Item", itemSchemas); 


- delete date.js (not needed) 
- replace listTitle with a simple string "Today" 
- create 3 new mongoose document 

const <constantName> = new <ModelName> ({
  <fieldName>: <fieldData>,
  .... 
});

const item1 = new Item ({
  name: "Wecome to your todolist!"
});

const item2 = new Item ({
  name: "hit the + button to add a new item"
});


const item3 = new Item ({
  name: "--< hit this to delete an item"
});


- put 3 new document into an array

const defaultItems = [item1, item2, item3]; 

- use insertMany() into the database 

<ModelName>.insertMany(<documentArray>, funciton(err){
  // deal with error or log successs
});

currently we have a mongoose model called Item
we have 3 documents called items1, items2, items3 

Item.insertMany(defaultItems, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("sucessfully saved deafultItems to DB"); 
  }
});

how to run code:

	mongod
	mongo
	node app.js (save new todolistDB) 

> use todolistDB
switched to db todolistDB
> db      
todolistDB
> show collections
items
> db.items.find()
{ "_id" : ObjectId("615f5fb71eee521a56428993"), "name" : "Wecome to your todolist!", "__v" : 0 }
{ "_id" : ObjectId("615f5fb71eee521a56428994"), "name" : "hit the + button to add a new item", "__v" : 0 }
{ "_id" : ObjectId("615f5fb71eee521a56428995"), "name" : "--< hit this to delete an item", "__v" : 0 } 

-----------------------------------------------------------------------------------
343. Rendering Database Items in the ToDoList App
-----------------------------------------------------------------------------------

how to use find() in app.js (db.collection.find()) 

<ModelName>.find({conditions}, function(err, results){
  // use the found results docs. 
});

- find the data and send over the list 

// put code into app.get("/") 
Item.find({} function(err, foundItems){
  console.log(foundItems); 
}); 

// change newListItems Items -> foundItems 
// change listTitle: Day -> listTitle: "Today" 
	- this removes the need for day.js (delete) 

app.get("/", function(request, response){

  Item.find({} function(err, foundItems){
    console.log(foundItems); 
    res.render("list", {listTitle: "Today", newListItems: foundItems}
  });   

});


- how to address the problem of documents saving after every restart 

list.ejs

- change the field for <p></p> to only show the name field 

<p> <%= newListItems[i].name %> </p> 


javascript ES6 forEach()

<array>.forEach(function(<singleArrayItem>{
  // use each singleArrayItem 
});

- change forloop in list.ejs to be a .forEach()

    <% for (let i=0; i<newListItems.length; i++) { %>
      <div class="item">
        <input type="checkbox">
        <p><%=  newListItems[i]  %></p>
      </div>
      <% } %>

    <% newListItems.forEach( (item) =>{ %>
      <div class="item">
        <input type="checkbox">
        <p><%=  item.name  %></p>
      </div>
      <% } %>

- add defaultItems only if collections is empty 
- how to clear database
	- db.dropDatabase() 

- how to check if the array is empty 

if (foundItems.length === 0){
  Item.insertMany(defaultItems, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("sucessfully saved deafultItems to DB");
  }
  });
  // redirect back to the root route to redo the code 
  res.redirect("/"); 
} else {
  res.render("list", {listTitle: "Today", newListItems: foundItems}
}

-----------------------------------------------------------------------------------
344. Adding New Items to our ToDoList Database
-----------------------------------------------------------------------------------

- app.post("/") is broken since the variable "item" is broken 
- cannot add new todolist item 
- we know we can use "req.body.newItem"


- create a new item document 

ex: 
const item3 = new Item ({
  name: String 
});

const itemName = req.body.newItem; 

// create a new document using the Item Model 
const item = new Item({
  name: itemName; 
})

// how to save a single item 
item.save() 

- add new code to app.post("/") 

app.post("/", function(req, res){
  const itemName = req.body.newItem; 
  const item = new Item({
    name: itemName; 
  })
  item.save();
  res.redirect("/"); 
});


-----------------------------------------------------------------------------------
345. Deleting Items from our ToDoList Database
-----------------------------------------------------------------------------------


task: add function to delete a todolist item 


- add new <form> to newListItems.forEach 
- form will be a post method and action will be to delete 

   <form action="/delete" method="post">
    <% newListItems.forEach( (item) =>{ %>
      <div class="item">
        <input type="checkbox">
        <p><%=  item.name  %></p>
      </div>
      <% } %>
   </form>

- change form in css -> form.item 
- do not want the form css in the list.ejs page 

- make new app.post("/delete") 

app.post("/delete", function(request, response){
  // this console.log does absolutely nothing since the form does not execute 
  console.log(request.body); 
});

- the new form button does not have a button that "submits" or "executes" the post method 


query google: submit form when checkbox is checked 
https://stackoverflow.com/questions/10602470/submitting-a-form-when-a-checkbox-is-checked
Answer: 
<input onChange="this.form.submit()" ... />

- add onChange to checkbox 
<input type="checkbox" onChange="this.form.submit()">

- add name to checkbox (need name to tap into it at request.body) 
<input type="checkbox" name="checkbox" onChange="this.form.submit()">

console.log(request.body.checkbox) 
-> {checkbox: 'on'} 
console.log(request.body.checkbox)  
-> on 

- add value to the checkbox
value=<%= item._id%>
console.log(request.body.checkbox)  
-> on
-> id_number 

- delete item with _id 
- change app.post("/delete") 

Mongoose findByIdAndRemove()

<ModelName>.findByIdAndRemove(<Id>, function(err){
  if (err) {
    console.log(err)   
  } else {
    console.log("sucessfully deleted!") 
  }
});

app.post("/delete", function(request, response){
  const checkedItemId = req.body.checkbox; 

  Item.findByIdAndRemove(checkedItemId, function(err){
    if (err) {
      console.log(err)   
    } else {
      console.log("sucessfully deleted!") 
      // use to refresh the page with new deleted item 
      res.redirect("/"); 
    }
  });
})

- note, if you do not provide the callback in the "delete" method, it will not execute 


-----------------------------------------------------------------------------------
346. Creating Custom Lists using Express Route Parameters
-----------------------------------------------------------------------------------


task: how to make multiple list??? 

- create new list on the fly 
- localhost:3000/"route" -> will create new list 


- use route parameters to create new list via url 
- create a dynamic route 

- localhost:3000/"route" -> print last part of the URL in app.get() 

Express route parameters 

app.get("category/:<paramName>", function(request, response){
  // access request.params.paramName 
})


app.get("/:customListName", function(request, response){
  console.log(req.params.customListName); 
});

go to: localhost:3000/home
-> will log "home" 

app.get("/:customListName", function(request, response){
  const customListName = req.params.customListName; 
});

- create a new schema for new list 

const listSchema = {
  name: String,
  items: [itemsSchema]
};

- create mongoose model
const List = mongoose.model("List", listSchema); 

READY to create new list schema/model 

const customListName = req.params.customListName; 

const list = new List({
  name: customListName, 
  items: defaultItems
});

list.save()

----------------

app.get("/:customListName", function(request, response){
  const customListName = req.params.customListName; 

  const list = new List({
    name: customListName, 
    items: defaultItems
  });

  list.save()
});


- check to see if a customListName already exist 

Mongoose findOne()

<ModelName>.find({conditions}, function(err, results){
  // use the found results docs. 
});


List.findOne({name: customListName}, function(err, foundList{
  if (err) {
    console.log(err) 
  } else {
    console.log(foundList)
    if (!foundList) {
      console.log("does not exist!") 
    } else {
      console.log("Exist!")
    } 
  }
});

----------------------
List.findOne({name: customListName}, function(err, foundList{
  if (err) {
    console.log(err) 
  } else {
    if (!foundList) {
      // create a new list 
      const list = new List({
      name: customListName, 
      items: defaultItems
      });
      list.save()
      // add so the new url list can redirect to the page 
      res.redirect("/" + customListName)
    } else {
      // show an existing list
      res.render("list", {listTitle: foundList.name, newListItems: foundList.items}  
    } 
  }
});

db.lists.drop()

-----------------------------------------------------------------------------------
347. Adding New Items to the Custom ToDo Lists
-----------------------------------------------------------------------------------

- add value to button in form in list.ejs 
- value button will add the item per "/listTitle" versus jsut "/" 
<button type="submit" name="list" value="<%= listTitle%>" >+</button>

// add to app.post("/") 
const listName = request.body.list; 

if (listName === "Today"){
  item.save()
  res.redirect("/"); 
} else {
  List.findOne({name: ListName}, function(err, foundList){
    // we push the item because the list has an array versus a collection 
    foundList.items.push(item);
    foundList.save()
    res.redirect("/" + ListName); 
  }
}


-----------------------------------------------------------------------------------
348. Revisiting Lodash and Deleting Items from Custom ToDo Lists
-----------------------------------------------------------------------------------


Currently we are not able to delete items from custom todo list 


- when we try to delete the items, it will redirect us to "/" 
- no code currently written to delete functions for non "/" route 

- we need to know the ID of the document item and which list it was from 

<input type="hidden">

- add new input at the end of the div 

<input type="hidden" name="listName" value="<%= listTitle%>'></input> 

- add to app.post("/delete") 
const listName = request.body.listName;

if (listName === "Today"){
  // everything perviously 
} else{
  
}

query: mongoose remove document from array 

- use mongoDB function $pull

$pull operator removes from an existing array all instances of a value that match a specified condition 

- but! $pull is excuslive for mongoDB and not for node 


Mongoose findOneAndUpdate()

<ModelName>.findOneAndUpdate(
  {conditions},
  {updates}, 
  function(err, results){}
);

{updates} -> {$pull: {field: {_id: value}}} (nested) 


List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}, function(err, foundList){
  if(!err){
    res.redirect("/" + listName); 
  }
})


The routes: "home" and "Home" are different, how to we fix this? 

solution: use lodash 

- always capitalize the first letter

install lodash:
 
	npm i lodash 

_.capitalize([string='']) 

converts the first character of "string" to upper case and the remaining to lower case 


_.capitalized("FRED")  -> 'Fred' 


- add lodash to app.js

const _ = require("lodash"); 


- add lodash to custom app.get("route") 

const customListName = _.captialize(req.params.customListName); 

db.lists.drop() -> remove all 




