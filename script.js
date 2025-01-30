// Function to handle registration
function registerEvent(event) {
    // You can customize this to direct users to the registration form for each event
    if (event === 'praklap') {
        window.location.href = 'register_praklap.html';
    } else if (event === 'abhivyakti') {
        window.location.href = 'register_abhivyakti.html';
    } else if (event === 'battleblitz') {
        window.location.href = 'register_battleblitz.html';
    }
}

// Function to show event details
function showEventDetails(event) {
    let url = '';

    if (event === 'praklap') {
        url = 'praklap_details.pdf';
    } else if (event === 'abhivyakti') {
        url = 'abhivyakti_details.pdf';
    } else if (event === 'battleblitz') {
        url = 'battleblitz_details.pdf';
    }

    // Open the PDF document in a new tab
    window.open(url, '_blank');
}
