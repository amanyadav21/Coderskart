// Scroll to top when page is refreshed
window.onload = function() {
    window.scrollTo(0, 0);
  };

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  // when we click on hamburger icon its close 
  
  const navLink = document.querySelectorAll(".nav-link");
  
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }

  // Home page section
  let btn = document.getElementById("btn");
  let explore = document.querySelector("#Explore");
  
  btn.addEventListener("click", function() {
    explore.scrollIntoView({ behavior: "smooth" });
  });


  