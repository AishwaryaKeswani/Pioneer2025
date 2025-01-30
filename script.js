// Function to handle registration redirection
function registerEvent(event) {
    if (event === 'praklap') {
        window.location.href = 'register_praklap.html';
    } else if (event === 'abhivyakti') {
        window.location.href = 'register_abhivyakti.html';
    } else if (event === 'battleblitz') {
        window.location.href = 'register_battleblitz.html';
    }
}

// Function to show event details in a modal
function showEventDetails(event) {
    let url = '';

    if (event === 'praklap') {
        url = 'praklap_details.pdf'; // Add the correct path to your PDF
    } else if (event === 'abhivyakti') {
        url = 'abhivyakti_details.pdf'; // Add the correct path to your PDF
    } else if (event === 'battleblitz') {
        url = 'battleblitz_details.pdf'; // Add the correct path to your PDF
    }

    document.getElementById('eventDetailsIframe').src = url;
    document.getElementById('eventModal').style.display = 'flex';
}

// Close the modal
function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
}
