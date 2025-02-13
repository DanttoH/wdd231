const apiKey = '8217180150e2807938f85880b949793a'; // Reemplaza con tu API Key
const city = 'Mendoza, Argentina'; // Ciudad de Mendoza, Argentina

// Llamada API para clima actual
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const temp = Math.round(data.main.temp); // Temperatura redondeada
        const description = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Descripción capitalizada

        // Mostrar clima actual
        document.getElementById('temperature').textContent = `${temp}°C`;
        document.getElementById('description').textContent = description;
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));

// Llamada API para pronóstico de 3 días
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const forecastDays = {}; // Almacenar el pronóstico por día
        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0]; // Extraer fecha
            if (!forecastDays[date]) {
                forecastDays[date] = [];
            }
            forecastDays[date].push(item);
        });

        const forecastDiv = document.getElementById('forecast-days');
        let dayCount = 0;
        // Limitar el pronóstico a los próximos 3 días
        for (const date in forecastDays) {
            if (dayCount >= 3) break;
            const dayData = forecastDays[date];
            const temps = dayData.map(item => item.main.temp);
            const minTemp = Math.round(Math.min(...temps));  // Obtener temperatura mínima
            const maxTemp = Math.round(Math.max(...temps));  // Obtener temperatura máxima

            const dayDiv = document.createElement('div');
            dayDiv.innerHTML = `
                <p>${date}</p>
                <p>Min: ${minTemp}°C, Max: ${maxTemp}°C</p>
            `;
            forecastDiv.appendChild(dayDiv);
            dayCount++;
        }
    })
    .catch(error => console.error('Error al obtener el pronóstico del clima:', error));
