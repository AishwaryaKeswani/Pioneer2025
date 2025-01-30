// Function to show event details in the modal
function showDetails(event) {
    var modal = document.getElementById('eventModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');

    // Set the title and description for each event
    if (event === 'praklap') {
        modalTitle.innerHTML = 'Praklap - Project Presentations';
        modalDescription.innerHTML = 'Present your innovative projects and ideas to a panel of judges.';
    } else if (event === 'abhivyakti') {
        modalTitle.innerHTML = 'Abhivyakti - Paper Presentations';
        modalDescription.innerHTML = 'Share your research papers and academic insights with experts.';
    } else if (event === 'battleblitz') {
        modalTitle.innerHTML = 'Battle Blitz - Gaming Tournament';
        modalDescription.innerHTML = 'Compete with the best players in an exciting gaming battle.';
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
