//////////////////////////////////////////////Start cloud platform//////////////////////////////////////////////////////////

// Function to clone and populate the template
function populateTemplate(data) {
    const template = document.getElementById('card-template-aitool');
    const container = document.getElementById('content-container-aitool');
  
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
  
  //////////////////////////////////////////////End Cloud platform//////////////////////////////////////////////////////////