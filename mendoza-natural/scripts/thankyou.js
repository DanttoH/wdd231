
// Set the year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();

// Retrieve reservation data from localStorage
const reservationData = JSON.parse(localStorage.getItem('reservationData'));

// If reservation data exists, display it
if (reservationData) {
    const reservationDetails = document.getElementById('reservation-details');

    const detailsList = `
    <li><strong>Name:</strong> ${reservationData.fullname}</li>
    <li><strong>Email:</strong> ${reservationData.email}</li>
    <li><strong>Activity:</strong> ${reservationData.activity}</li>
    <li><strong>Date:</strong> ${reservationData.date}</li>
    <li><strong>Comments:</strong> ${reservationData.comments}</li>
  `;

    reservationDetails.innerHTML = detailsList;
} else {
    // If no reservation data, show a message
    document.querySelector('.thank-you p').textContent = 'No reservation data available.';
}