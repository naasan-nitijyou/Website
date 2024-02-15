// Function to fetch and display player list
async function fetchAndDisplayPlayerList(url, containerId) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Clear previous content

        if (data.players && data.players.list && data.players.list.length > 0) {
            data.players.list.forEach(player => {
                const playerName = player.name;
                const playerListItem = document.createElement("div");
                playerListItem.className = "line-up";
                playerListItem.innerHTML = `
                    <img src="https://mc-heads.net/avatar/${playerName}/100/nohelm.png" height="30px" alt="">
                    <h3>${playerName}</h3>
                `;
                container.appendChild(playerListItem);
            });
        } else {
            // If no players found
            const noPlayersMessage = document.createElement("h3");
            noPlayersMessage.textContent = "No Player";
            container.appendChild(noPlayersMessage);
        }
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

// Call the function for both public and private servers
fetchAndDisplayPlayerList("https://api.mcsrvstat.us/3/craft.naamc.net", "Public-PlayerList");
fetchAndDisplayPlayerList("https://api.mcsrvstat.us/3/java.naamc.net", "Private-PlayerList");