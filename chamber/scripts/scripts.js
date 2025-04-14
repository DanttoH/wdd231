// Mostrar el año actual
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("theyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Mostrar la última fecha de modificación
const lastModifiedElement = document.getElementById("lastu");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Updated: " + document.lastModified;
}

// Cambiar la imagen al cargar un archivo
const image = document.querySelector("img");
const input = document.querySelector("input[type='file']");

if (input) {
    input.addEventListener("change", () => {
        const file = input.files[0];
        if (file && file.type.startsWith("image/")) {
            image.src = URL.createObjectURL(file);
        } else {
            alert("Por favor, seleccione un archivo de imagen.");
        }
    });
}



document.addEventListener("DOMContentLoaded", () => {
    const visitDisplay = document.getElementById("visit-message");
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");

    let message = "";

    if (!lastVisit) {
        message = "👋 Welcome! Let us know if you have any questions.";
    } else {
        const difference = now - lastVisit;
        const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            message = "👋 Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            message = "⏳ You last visited 1 day ago.";
        } else {
            message = `⏳ You last visited ${daysPassed} days ago.`;
        }
    }

    visitDisplay.textContent = message;
    localStorage.setItem("lastVisit", now);

    // Oculta el mensaje luego de 5 segundos
    setTimeout(() => {
        visitDisplay.style.display = "none";
    }, 5000);
});




