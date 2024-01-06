// JavaScript File: script.js

// Sample JSON data (replace it with your actual data)
let jsonData = [
    { title: 'Property 1', description: 'Description 1', address: 'Address 1', image: '/img/images', details: 'Details 1' },

];

// Load JSON data when the page loads
displayProperties(jsonData);

// Function to generate property elements
function generatePropertyElement(property) {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');

    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    imageElement.style.backgroundImage = `url(${property.image})`;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');
    detailsElement.innerHTML = `
        <h3>${property.title}</h3>
        <p>${property.description}</p>
        <p>Address: ${property.address}</p>
        <button onclick="showDetails('${property.details}')">Show Details</button>
    `;

    propertyElement.appendChild(imageElement);
    propertyElement.appendChild(detailsElement);

    return propertyElement;
}

// Function to display properties
function displayProperties(properties) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const propertiesPerRow = 3;

    for (let i = 0; i < properties.length; i += propertiesPerRow) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');

        const propertyGroup = properties.slice(i, i + propertiesPerRow);

        propertyGroup.forEach(property => {
            const propertyElement = generatePropertyElement(property);
            rowElement.appendChild(propertyElement);
        });

        resultsContainer.appendChild(rowElement);
    }
}

// Function to show property details
function showDetails(details) {
    alert(details); // Replace this with your desired way of displaying details
}
// JavaScript File: script.js

// ... (الأكواد السابقة) ...

// Function to generate property elements
function generatePropertyElement(property) {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');

    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    imageElement.style.backgroundImage = `url(${property.image})`;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');
    detailsElement.innerHTML = `
        <h3>${property.title}</h3>
        <p>${property.description}</p>
        <p>Address: ${property.address}</p>
        <div class="rating">
            <span onclick="rateProperty(1, '${property.title}')">&#9733;</span>
            <span onclick="rateProperty(2, '${property.title}')">&#9733;</span>
            <span onclick="rateProperty(3, '${property.title}')">&#9733;</span>
            <span onclick="rateProperty(4, '${property.title}')">&#9733;</span>
            <span onclick="rateProperty(5, '${property.title}')">&#9733;</span>
        </div>
        <button onclick="showDetails('${property.details}')">Show Details</button>
    `;

    propertyElement.appendChild(imageElement);
    propertyElement.appendChild(detailsElement);

    return propertyElement;
}

// Function to rate a property
function rateProperty(rating, title) {
    alert(`You rated ${title} with ${rating} stars!`);
}
