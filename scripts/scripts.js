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
