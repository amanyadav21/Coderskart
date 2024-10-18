// Function to clone and populate the template
function populateTemplate(data) {
  const template = document.getElementById('card-template-cloud');
  const container = document.getElementById('content-container-cloud');

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

//////////////////////////////////////////////Free Image//////////////////////////////////////////////////////////
// Function to clone and populate the free image template
function populateTemplateautho(authoData) {
  const template = document.getElementById('card-template-autho');
  const container = document.getElementById('content-container-autho');

  authoData.forEach(item => {
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

// Fetch the free image data and populate the template on page load
document.addEventListener('DOMContentLoaded', () => {
  const authoData = fetchDataautho();  // Fetching data from the simulated API
  populateTemplateautho(authoData);
});
////////////////////////////////////////////// End Free Image//////////////////////////////////////////////////////////