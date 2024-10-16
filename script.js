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

  
  let btn = document.getElementById("btn");
  let explore = document.querySelector("#Explore");
  
  btn.addEventListener("click", function() {
    btn.innerText = "Try Again";  
    explore.scrollIntoView({ behavior: "smooth" });
  });

  

// Front-end Dev section

// Function to clone and populate the template
function populateTemplate(data) {
  const template = document.getElementById('card-template');
  const container = document.getElementById('content-container');

  data.forEach(item => {
    const clone = template.content.cloneNode(true);

    // Populate cloned template with API data
    clone.querySelector('img').src = item.imageUrl;
    clone.querySelector('p').textContent = item.text;

    // Add event listener to the button
    const button = clone.querySelector('.frontbtn');
    button.addEventListener('click', () => {
      window.open(item.url, '_blank');  // Open the link in a new tab
    });

    // Append the cloned element to the container
    container.appendChild(clone);
  });
}

// Fetch the data and populate the template
document.addEventListener('DOMContentLoaded', () => {
  const data = fetchData();  // Fetching data from the simulated API
  populateTemplate(data);
});

// Front-end Dev section end