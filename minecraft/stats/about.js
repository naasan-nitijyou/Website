//About
//公開サーバー
fetch('https://api.mcsrvstat.us/3/craft.naamc.net')
    .then(response => response.json())
    .then(data => {
        // Server Status
        document.getElementById('pserver-status').innerText = data.online ? 'Online' : 'Offline';

        // Player Count
        document.getElementById('pplayer-count').innerText = `${data.players.online}/${data.players.max}`;

        // Protocol Version
        const protocolVersion = data.protocol ? data.protocol.name : 'N/A';
        document.getElementById('pprotocol-version').innerText = `${protocolVersion}`;

        // Cache Time
        const cacheTime = new Date(data.debug.cachetime * 1000).toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
        document.getElementById('pcache-time').innerText = `${cacheTime}`;
    })
    .catch(error => console.error('Error fetching data:', error));

//hub
fetch('https://api.mcsrvstat.us/3/java.naamc.net')
    .then(response => response.json())
    .then(data => {
        // Server Status
        document.getElementById('server-status').innerText = data.online ? 'Online' : 'Offline';

        // Player Count
        document.getElementById('player-count').innerText = `${data.players.online}/${data.players.max}`;

        // Protocol Version
        const protocolVersion = data.protocol ? data.protocol.name : 'N/A';
        document.getElementById('protocol-version').innerText = `${protocolVersion}`;

        // Cache Time
        const cacheTime = new Date(data.debug.cachetime * 1000).toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
        document.getElementById('cache-time').innerText = `${cacheTime}`;
    })
    .catch(error => console.error('Error fetching data:', error));

