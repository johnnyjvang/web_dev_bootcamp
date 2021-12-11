const nav_slide = () =>{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // object.onclick = function(){myScript};
  hamburger.onclick = function(){
    // toggle navigation to appear and disappear
    nav.classList.toggle('nav-active');
    console.log('hamburger has been clicked');

    // Animate nav links, opacity 0 -> 1
    navLinks.forEach( (link, index) =>{
      if (link.style.animation){
        link.style.animation = '';
        console.log('restart value');
      }
      else{
        // index/7 = calculated delay for animation, larger index = longer delay
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`
      }
      // console.log(index/7);
    });

    // Hamburger Animation
    hamburger.classList.toggle('rotate');

  }

  // hamburger.addEventListener('click', () =>{
  //   nav.classList.toggle('nav-active');
  //   console.log('hamburger has been clicked');
  // });
}

nav_slide();
