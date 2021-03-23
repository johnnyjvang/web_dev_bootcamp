function test() {
    var a = "3";
    var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = a;
    b = c;
    a = b;


/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// ---------------------------------------------
// You have written 182 chracters, you have -42 characters left.
var tweet = promp("Compose your tweet:");
var tweetCount = tweet.length;
alert("you have written" + tweetCount + "characters, you have " + (140-tweetCount) + "characters remaining.")

// How to slice a variable
var tweetUnder140 = tweet.slice(0,140);
typeof(tweetUnder140);
alert(tweetUnder140);

// Turn to uppercase
var = name = "Angela"
name.toUpperCase();

// how to capitalize the first letter in a name
var name = prompt("what is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var capName = upperCaseFirstChar + restOfName;
alert("hello, " + capName);


// numbers
var dogAge = prompt("how old is your dog?");
var humangAge = ((dogAge - 2)*4+21);
alert("Your dog is" + humangAge + "years old in human years.");


// Karel solution
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

// how to make a function
function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
