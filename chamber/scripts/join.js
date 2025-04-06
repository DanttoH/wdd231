// Hamburger menu toggle
document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('open');
});

// Timestamp
document.getElementById('timestamp').value = new Date().toISOString();


// Footer dates
document.getElementById('theyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
