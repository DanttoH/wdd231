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



        fetch('members.json')
    .then(response => response.json())
    .then(data => {
        const spotlights = data.filter(member => member.membership === 'gold' || member.membership === 'silver');
        const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightSection = document.getElementById('spotlights');
        randomSpotlights.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('spotlight');
            memberDiv.innerHTML = `
                <h3>${member.companyName}</h3>
                <img src="${member.logo}" alt="${member.companyName}">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership: ${member.membership}</p>
            `;
            spotlightSection.appendChild(memberDiv);
        });
    })
    .catch(error => console.error('Error loading member data:', error));


});

