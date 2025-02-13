// Function to open modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Set the current date and time in the hidden timestamp field
document.addEventListener("DOMContentLoaded", function () {
    const timestampField = document.getElementById('timestamp');
    const currentDate = new Date();
    timestampField.value = currentDate.toISOString(); // ISO format YYYY-MM-DDTHH:mm:ss.sssZ
});

// Add animation to membership cards when page loads
document.addEventListener("DOMContentLoaded", function () {
    const membershipCards = document.querySelectorAll('.membership-card');

    membershipCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 200); // Staggered animation
    });
});

