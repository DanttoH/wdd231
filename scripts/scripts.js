// Mostrar el año actual
const currentYear = new Date().getFullYear();
document.getElementById("theyear").textContent = currentYear;

// Mostrar la última fecha de modificación
document.getElementById("lastu").textContent = "Last Updated: " + document.lastModified;

// Cambiar la imagen al cargar un archivo
const image = document.querySelector("img");
const input = document.querySelector("input");

input.addEventListener("change", () => {
    if (input.files[0]) {
        image.src = URL.createObjectURL(input.files[0]);
    }
});
