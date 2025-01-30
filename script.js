// Function to show event details in the modal
function showDetails(event) {
    var modal = document.getElementById('eventModal');
    var eventDetails = document.getElementById('eventDetails');

    // Set the PDF or content for each event
    if (event === 'praklap') {
        eventDetails.src = 'praklap_details.pdf';  // Add your own PDF file path
    } else if (event === 'abhivyakti') {
        eventDetails.src = 'abhivyakti_details.pdf';  // Add your own PDF file path
    } else if (event === 'battleblitz') {
        eventDetails.src = 'battleblitz_details.pdf';  // Add your own PDF file path
    }

    // Show the modal
    modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    var modal = document.getElementById('eventModal');
    modal.style.display = 'none';
}

// Close modal when clicked outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('eventModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
