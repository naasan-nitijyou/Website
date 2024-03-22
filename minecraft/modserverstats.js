    // URL of the server status API
    const apiUrl = "https://api.mcsrvstat.us/3/indigovps.naamc.net";

    // Function to fetch data from the API
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to update the status display
    function updateStatus(online) {
        const statusElement = document.getElementById('status');
        statusElement.textContent = online ? 'オンライン' : 'オフライン';
        statusElement.className = online ? 'online' : 'offline';
    }

    // Function to check server status
    async function checkServerStatus() {
        const data = await fetchData(apiUrl);
        if (data && data.online !== undefined) {
            updateStatus(data.online);
        } else {
            console.error('Invalid data format received from the server');
        }
    }

    // Check server status on page load
    checkServerStatus();

    // Check server status periodically (every 30 seconds)
    setInterval(checkServerStatus, 30000);