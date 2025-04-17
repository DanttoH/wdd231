// reservations.js

// Set the year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const activity = document.getElementById('activity').value;
    const date = document.getElementById('date').value;
    const comments = document.getElementById('comments').value;

    // Store form data in localStorage
    const reservationData = { fullname, email, activity, date, comments };
    localStorage.setItem('reservationData', JSON.stringify(reservationData));

    // Redirect to thank you page
    window.location.href = 'thankyou.html';
});


function saveToLocalStorage(activityName) {
    const existing = JSON.parse(localStorage.getItem("reservations")) || [];
    existing.push(activityName);
    localStorage.setItem("reservations", JSON.stringify(existing));
}
