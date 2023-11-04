let map;
let popup = L.popup();
let currentCoords = null;
let markers = [];

initializeMap(-2.534376, -44.251771); // Coordenadas iniciais no centro de São Luís - MA


const watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: Infinity
});

function initializeMap(latitude, longitude) {
    map = L.map('mapid').setView([latitude, longitude], 12.1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    map.on('click', onMapClick);
}

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Você clicou no mapa em ${e.latlng.toString()}`)
        .openOn(map);
}

function success(pos) {
    const { latitude, longitude } = pos.coords;

    if (!map) {
        initializeMap(latitude, longitude);
    } 
        
    addCustomMarker(latitude, longitude, 'Estou aqui!');
}

function error(err) {
    console.log(err);
}

document.getElementById('material').addEventListener('change', function(e) {
    const selectedValue = e.target.value;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    removeMarkers();

    if (selectedValue === 'Reciclaveis') {
        addCustomMarker(-2.534376, -44.251771, 'Marcador Verde');
    } else if (selectedValue === 'Lampadas') {
        addCustomMarker(-2.537784, -44.271641, 'Marcador Amarelo');
    } else if (selectedValue === 'Pilhas e Baterias') {
        addCustomMarker(-2.548824, -44.247351, 'Marcador Laranja');
    } else if (selectedValue === 'Celulares') {
        addCustomMarker(-2.547731, -44.269238, 'Marcador Vermelho');
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const materialSelect = document.getElementById('material');
    const selectedValue = materialSelect.value;

    if (selectedValue === 'Reciclaveis') {
        addCustomMarker(-2.534376, -44.251771, 'Marcador Verde');
    } else if (selectedValue === 'Lampadas') {
        addCustomMarker(-2.537784, -44.271641, 'Marcador Amarelo');
    } else if (selectedValue === 'Pilhas e Baterias') {
        addCustomMarker(-2.548824, -44.247351, 'Marcador Laranja');
    } else if (selectedValue === 'Celulares') {
        addCustomMarker(-2.547731, -44.269238, 'Marcador Vermelho');
    }
});

function addCustomMarker(latitude, longitude, message) {
    if (!map) {
        initializeMap(latitude, longitude);
    }

    const newMarker = L.marker([latitude, longitude]).addTo(map);
    markers.push(newMarker);
    newMarker.bindPopup(message).openPopup();
}

function removeMarkers() {
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
}
