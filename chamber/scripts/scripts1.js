// Function to update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Fetch events from JSON (simulated as an array)
const eventsData = [
    { "title": "Event 1", "details": "Details about Event 1" },
    { "title": "Event 2", "details": "Details about Event 2" },
    { "title": "Event 3", "details": "Details about Event 3" },
    { "title": "Event 4", "details": "Details about Event 4" }
];

function getRandomEvents() {
    const randomEvent1 = eventsData[Math.floor(Math.random() * eventsData.length)];
    const randomEvent2 = eventsData[Math.floor(Math.random() * eventsData.length)];
    return [randomEvent1, randomEvent2];
}

function displayEvents() {
    const [event1, event2] = getRandomEvents();
    document.getElementById('event1').innerHTML = `<h3>${event1.title}</h3><p>${event1.details}</p>`;
    document.getElementById('event2').innerHTML = `<h3>${event2.title}</h3><p>${event2.details}</p>`;
}

// Call the function to display events
displayEvents();

// Fetch weather data from OpenWeatherMap API (replace with your API key)
function getWeather() {
    const apiKey = 'your_api_key';
    const city = 'New York'; // Change to your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather.map(item => item.description).join(', ').toUpperCase();
            const temperature = Math.round(data.main.temp);
            document.getElementById('weather-info').innerHTML = `${temperature}°C - ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = 'Unable to retrieve weather data.';
        });
}

// Call the function to fetch weather
getWeather();

// Simulated member data for spotlight section (replace with actual JSON data)
const membersData = [
    { "name": "Company A", "logo": "company-a-logo.jpg", "phone": "123-456-7890", "address": "123 Main St", "website": "www.companya.com", "level": "Gold" },
    { "name": "Company B", "logo": "company-b-logo.jpg", "phone": "987-654-3210", "address": "456 Elm St", "website": "www.companyb.com", "level": "Silver" },
    { "name": "Company C", "logo": "company-c-logo.jpg", "phone": "555-123-4567", "address": "789 Oak St", "website": "www.companyc.com", "level": "Gold" }
];

function getSpotlights() {
    // Filter for Gold and Silver members
    const spotlightMembers = membersData.filter(member => member.level === 'Gold' || member.level === 'Silver');
    return spotlightMembers.slice(0, 2); // Select up to two members for spotlight
}

function displaySpotlights() {
    const spotlights = getSpotlights();
    spotlights.forEach((spotlight, index) => {
        document.getElementById(`spotlight${index + 1}`).innerHTML = `
            <img src="${spotlight.logo}" alt="${spotlight.name} Logo">
            <h3>${spotlight.name}</h3>
            <p>Phone: ${spotlight.phone}</p>
            <p>Address: ${spotlight.address}</p>
            <p><a href="http://${spotlight.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${spotlight.level}</p>
        `;
    });
}

// Call the function to display spotlights
displaySpotlights();
