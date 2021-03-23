// alert('hello');
// this method is to ensure the jQuery library is ready
$(document).ready(function(){
  $('h1').css("color","white");
  // this targets the h1 with a class of hello
  $('h1.hello').css('color','purple');
  // an h2 with an id of monster
  $('h2#monster').css('color','yellow');
  // an h1 inside a div with class hello1
  $('.hello1 h1').css('color','green');
  // adding class to all h1
  $('h1').addClass('big-title');
  // adding two classes via javascript
  $('.hello1 h1').addClass('margin-50 purple');
  // change text
  $('h2#monster').text('text changed via javascript');
  // changed entire html tag
  $('h1.hello').html('<em>double changed</em>');
  // changing the href on the anchor tag from google to yahoo
  // this can be done for various things
  $('a').attr('href','https://www.yahoo.com/');

  $('button').click(function(){
    $('h1').css('color','orange');
  });

  $(document).keypress(function(event) {
    $('h1').text(event.key);
  })

  $('button').on('mouseover', function(){
    $('button').css('background-color','brown');
  });

  // how to add elements into the code
  $('h2#monster').before('<h1>before</h1/>');
  $('h2#monster').after('<h1>after</h1/>');
  $('h2#monster').prepend('<h1>prepend</h1/>');
  $('h2#monster').append('<h1>append</h1/>');

  // this toggles the h1 (on/off) with a button
  $('button').click(function(){
    $('h1.ani').toggle();
  });
  // multiple animations at once
  // the animate function can only be used on things with numerical values
  $('h3.ani1').click(function(){
    // $('h1.ani').slideUp.slideDown.animate({oppacity: 50});
    $('h1.ani').slideUp().slideDown().animate({margin: 50});
  });

});
// this will console back the color of the h1
// can be used for any other property like font-size, style, etc.
console.log($('h1').css('color'));
// $('h1').css("color","white");
// var h1List = document.querySelector('h1');
// alerts outside of the ready function does not work
// alert(h1List);
