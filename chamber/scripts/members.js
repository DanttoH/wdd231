document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.querySelector(".grid"); // Asegúrate de que esta clase existe en tu HTML
    const url = "data/members.json"; // Ruta del JSON

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos cargados:", data); // 🔍 Muestra los datos en la consola

            data.forEach(member => {
                console.log(`Imagen de ${member.name}: ${member.image}`); // 🔍 Muestra la ruta de cada imagen
            });

            const membersContainer = document.querySelector(".grid");
            membersContainer.innerHTML = "";

            data.forEach(member => {
                const section = document.createElement("section");

                section.innerHTML = `
                 <img src="${member.image1}" alt="${member.name} Logo" class="logo">
                <img src="${member.image}" alt="${member.name} alt="citybus">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.description}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership Level: ${member.membership}</p>
                
            `;

                membersContainer.appendChild(section);
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));

});

