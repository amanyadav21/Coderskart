//////////////////////////////////////////////Start Tools and software Section//////////////////////////////////////////////////////////

// Function to clone and populate the template
function populateTemplate(data) {
    const template = document.getElementById('card-template-designtool');
    const container = document.getElementById('content-container-designtool');
  
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
  
  //////////////////////////////////////////////End Tools and software Section//////////////////////////////////////////////////////////

  //////////////////////////////////////////////Start Showcase & inspiration Section//////////////////////////////////////////////////////////

// Function to clone and populate the template for mobile apps
function populateshowcaseTemplate(data) {
  const template = document.getElementById('card-template-showcase'); // Mobile template ID
  const container = document.getElementById('content-container-showcase'); // Mobile container ID

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
  const showcaseData = fetchshowcaseData();  // Fetching data for mobile tools
  populateshowcaseTemplate(showcaseData);
});

//////////////////////////////////////////////End Showcase & inspiration Section//////////////////////////////////////////////////////////