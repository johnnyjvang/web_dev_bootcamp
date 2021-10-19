Blog Notes:

-----------------------------------------
Header
-----------------------------------------


how to make navigation fixed: 

position: fixed


how to change the size of navigation bar when scrooled 

In JavaScript:

object.onscroll = function(){myScript};

In JavaScript, using the addEventListener() method:

object.addEventListener("scroll", myScript);

https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp

<script>
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
</script>


how to remove <a></a> link:

text-decoration: none; 