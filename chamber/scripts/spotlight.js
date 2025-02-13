document.addEventListener("DOMContentLoaded", function () {
    const url = "data/members.json"; // Update path if needed

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Filter out gold or silver members
            const spotlights = data.filter(member => member.membership === 2 || member.membership === 3);

            // Randomly select 2-3 members for spotlight
            const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);

            // Get the spotlight section
            const spotlightSection = document.getElementById('spotlights');
            spotlightSection.innerHTML = ''; // Clear previous content

            // Display each spotlight
            randomSpotlights.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('spotlight');
                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="${member.image}" alt="${member.name} Logo" class="logo">
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>${member.description || ''}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p>Membership: ${member.membership === 2 ? 'Silver' : 'Gold'}</p>
                `;
                spotlightSection.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error loading member data:', error));
});
