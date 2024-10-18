// Function to clone and populate the backend template
function populateTemplateBackend(backendData) {
  const template = document.getElementById('card-template-backend');
  const container = document.getElementById('content-container-backend');

  backendData.forEach(item => {
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

// Fetch the backend developer data and populate the template on page load
document.addEventListener('DOMContentLoaded', () => {
  const backendData = fetchDataBackend();  // Fetching data from the simulated API
  populateTemplateBackend(backendData);
});
