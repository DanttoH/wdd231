// Hamburger menu toggle
document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('open');
});

// Timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Modal handling
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modal with ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    }
});

// Footer dates
document.getElementById('theyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
