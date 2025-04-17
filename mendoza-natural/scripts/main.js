// Set the year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();