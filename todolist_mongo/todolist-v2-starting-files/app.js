//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
// delete date
// const date = require(__dirname + "/date.js");

const app = express();

const mongodb_server = "mongodb://localhost:27017/";
const database_name = "todolistDB";
mongoose.connect(mongodb_server + database_name);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// create an itemSchema, with 1 field being a name:String
const itemsSchema = new mongoose.Schema({
  name: String
});

// Create a Model
// const = mongoose.model(<"singularCollectionName">, <schemaName> );
const Item = mongoose.model("Item", itemsSchema);

// create documents to put into your new database
// const <constantName> = new <ModelName> ({
//   <fieldName>: <fieldData>,
//   ....
// });

const item1 = new Item({
  name: "Wecome to your todolist!"
});

const item2 = new Item({
  name: "hit the + button to add a new item"
});

const item3 = new Item({
  name: "<-- hit this to delete an item"
});

// put all documents into an array
const defaultItems = [item1, item2, item3];


// <ModelName>.insertMany(<documentArray>, funciton(err){
//   // deal with error or log successs
// });

// move item into app.get("/")
// Item.insertMany(defaultItems, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("sucessfully saved deafultItems to DB");
//   }
// });



const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
  // not needed anymore
  // const day = date.getDate();

  Item.find({}, function(err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully savevd default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      // "today" replaced so you dont have to use date.js
      // foundItems finds all collections in Item Model
      res.render("list", {
        listTitle: "Today",
        newListItems: foundItems
      });
    }
  });

});

// app.get("category/:<paramName>", function(request, response){
//   // access request.params.paramName
// })

// this will load a url given a customListName
app.get("/:customListName", function(req, res) {
  // _.captialize -> upper case first letter, lowercase rest
  const customListName = _.capitalize(req.params.customListName);

  // <ModelName>.findOne({conditions}, function(err, results){
  // // use the found results docs.
  // });

  List.findOne({
    name: customListName
  }, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        //Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        // add so the new url list can redirect to the page
        res.redirect("/" + customListName);
      } else {
        //Show an existing list
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items
        });
      }
    }
  });
});

app.post("/", function(req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({
      name: listName
    }, function(err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});


app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err) {
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({
      name: listName
    }, {
      $pull: {
        items: {
          _id: checkedItemId
        }
      }
    }, function(err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

// not needed anymore with customListNAme
// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
