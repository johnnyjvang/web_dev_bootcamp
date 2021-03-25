// $('h1');

var buttonClours = ["red", "blue", "green", "yellow"];

// var randomChosenColour = getRandomIntInclusive(0, 3);

var gamePattern = [];

// gamePattern.push(randomChosenColour);
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
  // check whether the game is over
  if (!started){
    $('#level-title').text("level " + level);
    nextSequence();
    // will not allow for any more button press until level is restarted
    started = true;
  }
});

// button press before the game will just gameover the simon game
$(".btn").click(function(){
  // when a button is clicked, checks if it was the correct button
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  // play the sound even if it was wrong
  playSound(userChosenColour);
  // check if the answer is correct, minus 1 because list starts at 0
  checkAnswer(userClickedPattern.length-1)
  // if correct, move to next level
  // if not correct, will restart level
});


function checkAnswer(currentLevel){
  // current level = used to pick out the game pattern color
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    // playSound(userChosenColour);
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  } else{
    // play wrong sound when the wrong click is done
    playSound("wrong");
    // change the body color, will be removed after 200 mil seconds
    $("body").addClass("game-over");
    $("#level-title").text("game over, press any key to restart");

    setTimeout(function(){
      $('body').removeClass("game-over");
    },200);

    startOver();
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  // this will choose a random color to pick to light up
  $('#level-title').text("level " + level);
  var randomNumber = getRandomIntInclusive(0,3);
  var randomChosenColour = buttonClours[randomNumber];
  gamePattern.push(randomChosenColour);
  // this one will show you the new button to click
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(audio_file) {
  var audio = new Audio("sounds/" + audio_file + ".mp3");
  audio.play();
}

// starts over level, restarts variables and pattern
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

// this action is used to add animation to the button you just clicked
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}





// // how to add flash to a button
// $("#green").fadeOut(100).fadeIn(100);
//
// // how to add sound to button
// var greenAudio = new Audio('sounds/green.mp3');
// $('#green').click(function(){
//   greenAudio.play();
//   //animate button pressed
//   $("#green").fadeOut(100).fadeIn(100);
// });
//
// // how to add sound to button
// $('#blue').click(function(){
//   var blueAudio = new Audio('sounds/blue.mp3');
//   blueAudio.play();
// });

// how to start game
// - will need to randomly light up a color
// - save that to an array and wait for button clicks, mainly the ones that are needed

// game over, restart and clear the variable
// - if wrong button press, then restart the game pretty much
