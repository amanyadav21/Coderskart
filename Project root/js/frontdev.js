// Function to clone and populate the template
function populateTemplate(data) {
    const template = document.getElementById('card-template');
    const container = document.getElementById('content-container');
  
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
  
  // Front-end Dev section end

///////////////////////////////////////////////////////////ICON/////////////////////////////////////////////////////////////////////////

// Function to clone and populate the icon template
function populateTemplateicon(iconData) {
  const template = document.getElementById('card-template-icon');
  const container = document.getElementById('content-container-icon');

  iconData.forEach(item => {
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

// Fetch the icon data and populate the template on page load
document.addEventListener('DOMContentLoaded', () => {
  const iconData = fetchDataicon();  // Fetching data from the simulated API
  populateTemplateicon(iconData);
});

//////////////////////////////////////////////Free Image//////////////////////////////////////////////////////////

// Function to clone and populate the free image template
function populateTemplateImage(imageData) {
  const template = document.getElementById('card-template-image');
  const container = document.getElementById('content-container-image');

  imageData.forEach(item => {
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
  const imageData = fetchDataImage();  // Fetching data from the simulated API
  populateTemplateImage(imageData);
});

////////////////////////////////////////////// End Free Image//////////////////////////////////////////////////////////


////////////////////////////////////////////// Start Font //////////////////////////////////////////////////////////

// Function to clone and populate the free image template
function populateTemplateFont(FontData) {
  const template = document.getElementById('card-template-font');
  const container = document.getElementById('content-container-font');

  FontData.forEach(item => {
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
  const FontData = fetchDataFont();  // Fetching data from the simulated API
  populateTemplateFont(FontData);
});

////////////////////////////////////////////// End Font //////////////////////////////////////////////////////////