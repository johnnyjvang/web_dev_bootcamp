const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();

let items = ["yellow"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date.getDate();
  // // res.send("hello");
  // var today = new Date();
  // let currentDay = today.getDay();
  // let day = "";
  //
  // var options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };
  //
  // // For different languages:
  // // "en-US": For English
  // // "hi-IN": For Hindi
  // // "ja-JP": For Japanese
  //
  // day = today.toLocaleDateString("en-US", options);
  //
  // // if else statement
  // if (today.getDay() === 6 || today.getDay() === 0) {
  //   day = "weekend";
  //   // res.send("<h1>yay its the weekend!</h1>");
  // } else {
  //   day = "weekday";
  //   // res.send("<h1>booo! I have to work!</h1>")
  //   // res.sendFile(__dirname + "/index.html")
  // }
  //
  // // switch statement
  // switch (currentDay) {
  //   case 0:
  //     day = "sunday";
  //     break;
  //   case 1:
  //     day = "monday";
  //     break;
  //   case 2:
  //     day = "tuesday";
  //     break;
  //   case 3:
  //     day = "wednesday";
  //     break;
  //   case 4:
  //     day = "thrusday";
  //     break;
  //   case 5:
  //     day = "friday";
  //     break;
  //   case 6:
  //     day = "saturday";
  //     break;
  //   default:
  //     console.log("error: current day equal to " + currentDay);
  // }


  res.render('list', {
    listTitle: day,
    newItems: items
  });
})

app.post("/", function(request, response) {
  let item = request.body.newItems;
  if (request.body.list === "Work") {
    workItems.push(item);
    response.redirect("/work");
  } else {
    items.push(request.body.newItems);
    response.redirect("/")
  }
  // console.log(newItems);

});


let workItems = [];

app.get("/work", function(request, response) {
  response.render("list", {
    listTitle: "Work List",
    newItems: workItems
  });
});

app.get("/about", function(request, response){
  response.render("about");
});

app.post("/work", function(request, response) {
  let item = request.body.newItems;
  workItems.push(item);
  response.redirect("/work");
});


app.listen(3000, function() {
  console.log("server started on port 3000");
})
