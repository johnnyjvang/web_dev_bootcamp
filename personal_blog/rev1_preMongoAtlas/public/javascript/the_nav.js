// global variable
let active_page = "home";
let active_index = 1;

const nav_slide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const circle = document.querySelectorAll('.circle');

  // object.onclick = function(){myScript};
  hamburger.onclick = function() {
    // toggle navigation to appear and disappear
    nav.classList.toggle('nav-active');
    console.log('hamburger has been clicked');

    // Animate nav links, opacity 0 -> 1
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
        console.log('restart value');
      } else {
        // index/7 = calculated delay for animation, larger index = longer delay
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`
      }
      // console.log(index/7);
    });

    // Hamburger Animation
    hamburger.classList.toggle('rotate');
  }

  // active-nav when clicked
  navLinks.forEach((link, index) => {
    console.log('change');
    console.log("active_index: ", active_index);
    link.onclick = function() {
      // console.log('clicked on', link);
      //remove all active class from buttons
      circle.forEach((item) => {
        item.classList.remove('active-circle');
      });
      // add class to button that was clicked
      circle[index].classList.add('active-circle');
      active_index = index;
      console.log("active_index has been changed to: ", active_index);
    }
  });
}

// convert the length of text to a minimum of 200 characters
const limited_text = () => {
  const card_p = document.querySelectorAll(".cards .para");
  card_p.forEach(item => {
    // console.log(item.textContent);
    let shorter = item.textContent.substring(0, 200);
    // console.log(shorter);
    item.textContent = shorter + " ...";
  });
}

// -----------------------------------------------------------------------------
const change_circles = () => {
  const header_circles = document.querySelectorAll(".circle");
  let article = document.querySelector("article");
  header_circles.forEach((item) => {
    item.classList.remove("active-circle")
    console.log(item);
  })
  // header_circles[active_index-1].classList.add("active-circle");
  console.log("active_index: ", active_index);
  console.log("changed circle dots");
  const current_article = document.querySelector("article").getAttribute("id");
  console.log("current article = ", current_article);
  if (current_article == "home") {
    header_circles[0].classList.add("active-circle");
    console.log("changed to home");
  }
  else if(current_article == "contact") {
    header_circles[2].classList.add("active-circle");
    console.log("changed to contact");
  }
  else if(current_article == "about") {
    header_circles[1].classList.add("active-circle");
    console.log("changed to about");
  }
}




nav_slide();

limited_text();

change_circles();
