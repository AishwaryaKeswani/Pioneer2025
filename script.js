// Confirmation for registration buttons
document.querySelectorAll(".event-button").forEach(button => {
  button.addEventListener("click", event => {
    if (button.textContent === "Register") {
      event.preventDefault();
      if (confirm("Are you sure you want to register for this event?")) {
        window.location.href = button.href;
      }
    }
  });
});
