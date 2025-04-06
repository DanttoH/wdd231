const modal = document.getElementById("beneficiosModal");
const btn = document.getElementById("verBeneficiosBtn");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
