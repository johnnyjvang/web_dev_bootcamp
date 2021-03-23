// randomNumber1(){
//   return random.randint(1,6)
// }

// alert("working");
// going to set the source image from 1-6 numbers
// use the setAttribute() to do this
// math.random() = number from 0-.999
var randomNumber1 = Math.floor(Math.random()* 6) + 1; // numbers 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

// set the top innerHTML using querySelector()
// or you can add a class to the list and use CSS to change the font/etc.

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
