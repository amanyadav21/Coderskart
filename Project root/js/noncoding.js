//////////////////////////////////////////////Start Website Section//////////////////////////////////////////////////////////

// Function to clone and populate the template
function populateTemplate(data) {
    const template = document.getElementById('card-template-website');
    const container = document.getElementById('content-container-website');
  
    data.forEach(item => {
      const clone = template.content.cloneNode(true);
  
      // Populate cloned template with API data
      clone.querySelector('h2').textContent = item.h;
      clone.querySelector('img').src = item.imageUrl;
      clone.querySelector('p').textContent = item.text;
  
      // Add event listener to the button
      const button = clone.querySelector('.uni-btn');
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
  
  //////////////////////////////////////////////End Website Section//////////////////////////////////////////////////////////

  //////////////////////////////////////////////Start Mobile Section//////////////////////////////////////////////////////////

// Function to clone and populate the template for mobile apps
function populateMobileTemplate(data) {
  const template = document.getElementById('card-template-mobile'); // Mobile template ID
  const container = document.getElementById('content-container-mobile'); // Mobile container ID

  data.forEach(item => {
    const clone = template.content.cloneNode(true);

    // Populate cloned template with API data
    clone.querySelector('h2').textContent = item.h;
    clone.querySelector('img').src = item.imageUrl;
    clone.querySelector('p').textContent = item.text;

    // Add event listener to the button
    const button = clone.querySelector('.uni-btn');
    button.addEventListener('click', () => {
      window.open(item.url, '_blank');  // Open the link in a new tab
    });

    // Append the cloned element to the container
    container.appendChild(clone);
  });
}

// Fetch the data and populate the template for mobile apps
document.addEventListener('DOMContentLoaded', () => {
  const mobileData = fetchMobileData();  // Fetching data for mobile tools
  populateMobileTemplate(mobileData);
});

//////////////////////////////////////////////End Mobile Section//////////////////////////////////////////////////////////