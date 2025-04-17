document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("activities-container");

  fetch("data/reserves.json")
    .then(response => response.json())
    .then(activities => {
      activities.forEach(activity => {
        const card = document.createElement("div");
        card.classList.add("activity-item");

        card.innerHTML = `
          <h3>${activity.name}</h3>
          <p>${activity.description}</p>
          <p><strong>Price:</strong> ${activity.price}</p>
          <button class="reserve-button">Reserve</button>
        `;

        // Agrega el evento al botón
        const reserveButton = card.querySelector(".reserve-button");
        reserveButton.addEventListener("click", () => {
          saveToLocalStorage(activity);
          window.location.href = "reservations.html"; // Redirige a la página de reservas
        });

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading activities:", error);
      container.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
    });
});

function saveToLocalStorage(activity) {
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  reservations.push(activity);
  localStorage.setItem("reservations", JSON.stringify(reservations));
}
