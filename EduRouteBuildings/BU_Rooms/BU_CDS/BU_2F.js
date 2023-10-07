// Function to highlight a location on the map
function highlightLocation(coordinates) {
    const mapImage = document.getElementById('map-image');
    const [x, y] = coordinates.split(',').map(Number);

    // Create a div element for the highlight
    const highlight = document.createElement('div');
    highlight.classList.add('highlighted');
    highlight.style.position = 'absolute';
    highlight.style.left = `${x}px`;
    highlight.style.top = `${y}px`;
    highlight.style.width = '50px'; // Adjust the size as needed
    highlight.style.height = '50px'; // Adjust the size as needed

    // Append the highlight to the map container
    mapImage.parentNode.appendChild(highlight);

    // Remove the highlight after a delay (e.g., 2 seconds)
    setTimeout(() => {
        mapImage.parentNode.removeChild(highlight);
    }, 5000);
}

// Listen for click events on the location list
const locationList = document.getElementById('location-list');
locationList.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'LI') {
        const selectedLocation = e.target;
        const coordinates = selectedLocation.getAttribute('data-coordinates');

        // Highlight the selected location on the map
        highlightLocation(coordinates);
    }
});
