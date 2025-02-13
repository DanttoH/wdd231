// Función para cargar los eventos desde el archivo events.json
function fetchEvents() {
    fetch('data/events.json') // Ruta al archivo JSON
        .then(response => response.json())
        .then(events => {
            console.log('Eventos cargados:', events);
            displayEvents(events); // Llamamos a la función para mostrar los eventos
        })
        .catch(error => {
            console.error('Error al cargar los eventos:', error);
        });
}

// Función para mostrar los eventos en la página
function displayEvents(events) {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = ''; // Limpiamos el contenido anterior

    // Iteramos a través de los eventos y creamos elementos HTML para cada uno
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.details}</p>
            <p><strong>Fecha:</strong> ${event.date}</p>
            <a href="${event.website}" target="_blank">Más Información</a>
        `;
        eventsContainer.appendChild(eventElement); // Agregamos el evento al contenedor
    });
}

// Llamamos a la función fetchEvents para cargar los eventos cuando se carga la página
document.addEventListener('DOMContentLoaded', fetchEvents);
