// alert('why dont you work');
// alert('why dont you work');
// alert('ilovesushi');
// var firstDrum = string(console.log(document.querySelector('.drum')));
// alert(firstDrum);

// both functions will work, do not repeat
document.querySelectorAll('h1')[0].addEventListener("click", function(){
  alert('yeehoo');
});
// document.querySelector('h1').addEventListener('click', function(){
//   alert('yelooo');
// });

// when using a function, did not add the () or it will run automatically


// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert('hello');
// }

for (var i=0; i<document.querySelectorAll('.drum').length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event){
  // event = keyboard event that triggered the even listner
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: consol.log(key)

  }
}


function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);
  // this is how you add a class to tag/etc
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

// constructor function
// take note that this function is capitalized
// seems to also be like a short class function
function BellBoy(name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function(){
    alert('cleaning in progress');
  }
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["english", "hmong"])

// how an event caller works
// function anotherAddEventListener(typeOfEvent, callback){
//   // Detect event code...
//   var eventThatHappened = {
//     eventType = "keypress",
//     key: "p",
//     durationOfKeypress: 2
//   }
//
//   if (eventThatHappened.eventType === typeOfEvent){
//     callback(eventThatHappened);
//   }
// }

// var tom1 = new Audio("sounds/tom-1.mp3");
// tom1.play();


// alert('why dont you work');

// console.log(document.querySelector("button"))
