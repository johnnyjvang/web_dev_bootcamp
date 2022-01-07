const nav_slide = () =>{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const circle = document.querySelectorAll('.circle');

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

  // active-nav when clicked
  navLinks.forEach( (link, index) =>{
    console.log('working???');
    link.onclick = function(){
      console.log('clicked on', link);
      //remove all active class from buttons
      circle.forEach( (item)=>{
        item.classList.remove('active-circle');
      });
      // add class to button that was clicked
      circle[index].classList.add('active-circle')
    }
  });

  // hamburger.addEventListener('click', () =>{
  //   nav.classList.toggle('nav-active');
  //   console.log('hamburger has been clicked');
  // });
}

nav_slide();
