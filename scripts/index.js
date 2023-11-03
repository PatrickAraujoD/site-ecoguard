let map;
let popup = L.popup();
let currentCoords = null;

function initializeMap(latitude, longitude) {
    map = L.map('mapid').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup('Eu estou aqui!').openPopup();

    map.on('click', onMapClick);
}

function success(pos) {
    const { latitude, longitude } = pos.coords;

    if (!map) {
        initializeMap(latitude, longitude);
    } else {
        currentCoords = { latitude, longitude };
    }
}

function error(err) {
    console.log(err);
}

const watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: Infinity
});

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Você clicou no mapa em ${e.latlng.toString()}`)
        .openOn(map);
}

function checkLocation() {
    if (currentCoords !== null) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;

            const latDiff = Math.abs(latitude - currentCoords.latitude);
            const lngDiff = Math.abs(longitude - currentCoords.longitude);

            // Verificar se a diferença é significativa
            if (latDiff > 0.0001 || lngDiff > 0.0001) {
                map.setView([latitude, longitude], 13);
                const marker = L.marker([latitude, longitude]).addTo(map);
                marker.bindPopup('Eu estou aqui!').openPopup();
                currentCoords = { latitude, longitude };
            }
        }, error, { enableHighAccuracy: true, timeout: 5000 });
    }
}

// Verificar a localização a cada 30 segundos
setInterval(checkLocation, 30000); // Intervalo de 30 segundos
