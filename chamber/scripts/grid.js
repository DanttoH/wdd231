const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Asegura que hay una clase por defecto
document.addEventListener("DOMContentLoaded", () => {
    display.classList.add("grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
});
