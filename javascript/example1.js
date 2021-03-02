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
