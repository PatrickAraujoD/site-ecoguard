let map;
let popup = L.popup();
let currentCoords = null;
let markers = [];
let userMarkerAdded = false;

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


    
}

function success(pos) {
    const { latitude, longitude } = pos.coords;

    if (!map) {
        initializeMap(latitude, longitude);
    }

   
        
    if (!userMarkerAdded) {
        userMarker = addCustomMarker(latitude, longitude, 'Você está aqui!', '../assets/images/iconlocaliza.svg' );
        userMarkerAdded = true; // Define a variável como verdadeira para indicar que o marcador foi adicionado
    } else{
        userMarker.setLatLng([latitude, longitude]);
    }
    
     
}

function error(err) {
    console.log(err);
}

document.getElementById('material').addEventListener('change', function(e) {
    const selectedValue = e.target.value;
    userMarkerAdded = false;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    removeMarkers();

    if (selectedValue === 'Reciclaveis') {
        addCustomMarker(-2.531559, -44.233344, 'Ecoponto Angelim', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.551155, -44.235892, 'Ecoponto Anil', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.487345, -44.245516, 'Ecoponto Avenida dos Holandeses', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.544271, -44.265359, 'Ecoponto Barreto', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.528424, -44.248338, 'Ecoponto Bequimão', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.542948, -44.213485, 'Ecoponto Cohab Anil', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.538728, -44.303916, 'Ecoponto Centro - Galpão de Triagem', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.489811, -44.269699, 'Ecoponto Calhau Borborema', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.564427, -44.199892, 'Ecoponto Cidade Operária', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.506985, -44.248177, 'Ecoponto Cohaserma', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.532278, -44.202847, 'Ecoponto Itapiracó', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.581897, -44.193063, 'Ecoponto Jardim América', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.494634, -44.288421, 'Ecoponto Jardim Renascença', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.583532, -44.198534, 'Ecoponto Mata Roma (Cid. Operária 205)', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.550105, -44.284553, 'Ecoponto Parque Amazonas', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.558189, -44.276855, 'Ecoponto Parque dos Nobres', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.540008, -44.19567, 'Ecoponto Primavera', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.520428, -44.260177, 'Ecoponto Recanto do Vinhas', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.520594, -44.240683, 'Ecoponto Residencial Esperança', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.558543, -44.263439, 'Ecoponto Sacavém', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.570917, -44.223549, 'Ecoponto São Cristóvão', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.511553, -44.309165, 'Ecoponto São Francisco', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.59388, -44.231971, 'Ecoponto São Raimundo', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.502539, -44.227186, 'Ecoponto Turu', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.562094, -44.317708, 'Ecoponto Vila Isabel com Galpão de Triagem', '../assets/images/iconrecilceverde.svg');
    } else if (selectedValue === 'Lampadas') {
        addCustomMarker(-2.523842, -44.242308, 'Atacadão', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.519523, -44.245677, 'Centro Elétrico - Cohama', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.557246, -44.22437, 'Centro Elétrico - Guajajaras', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.511055, -44.303768, 'Centro Elétrico - São Francisco', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.52291, -44.225764, 'Fermal comércio Ltda', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.509903, -44.284907, 'Hiper Bom Preço - São Luis Shopping', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.56656, -44.231129, 'Iluminar Materiais Elétricos e Serviços de Engenharia', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.494366, -44.238161, 'Jacaré Home Center', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.518526, -44.246187, 'Potiguar Home Center - Cohama', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.554695, -44.22025, 'Potiguar Home Center Forquilha', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.554299, -44.214181, 'Roque Aço e Cimento', '../assets/images/iconrecilceamarelo.svg');
    } else if (selectedValue === 'Pilhas e Baterias') {
        addCustomMarker(-2.523842, -44.242308, 'Atacadão', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.519523, -44.245677, 'Centro Elétrico - Cohama', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.557246, -44.22437, 'Centro Elétrico - Guajajaras','../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.511055, -44.303768, 'Centro Elétrico - São Francisco', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.530739, -44.300807, 'C&A Modas - Rua Grande, 290', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.530482, -44.29724, 'C&A Modas - Rua Grande, 691', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.53418, -44.225153, 'C&A Modas - Shopping Rio Anil', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.528435, -44.255773, 'C&A Modas -Shopping da Ilha', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.552567, -44.191373, 'C&A Modas - Shopping Pátio Norte', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.509903, -44.284907, 'Hiper Bom Preço - São Luis Shopping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.56656, -44.231129, 'Iluminar Materiais Elétricos e Serviços de Engenharia', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.510136, -44.285073, 'Multicoisas - São Luís Shopping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.527208, -44.255419, 'Multicoisas - Shopping da Ilha', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.49069, -44.26376, 'Multicoisas - Golden Shoping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.518526, -44.246187, 'Potiguar Home Center - Cohama', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.53679, -44.299171, 'Sertemar Eletrônica - Panasonic', '../assets/images/iconrecilcelaranja.svg');
    } else if (selectedValue === 'Celulares') {
        addCustomMarker(-2.530482, -44.29724, 'C&A Modas - Rua Grande', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.530739, -44.300807, 'C&A Modas - Rua Grande, 290', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.53418, -44.225153, 'C&A Modas - Shopping Rio Anil', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.528435, -44.255773, 'C&A Modas -Shopping da Ilha', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.552567, -44.191373, 'C&A Modas - Shopping Pátio Norte', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.527288, -44.25507, 'Vivo - Shopping da Ilha', '../assets/images/iconrecilcevermelho.svg');
    
    }
});
        
window.addEventListener('DOMContentLoaded', (event) => {
    const materialSelect = document.getElementById('material');
    const selectedValue = materialSelect.value;

    if (selectedValue === 'Reciclaveis') {
        addCustomMarker(-2.531559, -44.233344, 'Ecoponto Angelim', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.551155, -44.235892, 'Ecoponto Anil', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.487345, -44.245516, 'Ecoponto Avenida dos Holandeses', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.544271, -44.265359, 'Ecoponto Barreto', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.528424, -44.248338, 'Ecoponto Bequimão', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.542948, -44.213485, 'Ecoponto Cohab Anil', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.538728, -44.303916, 'Ecoponto Centro - Galpão de Triagem', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.489811, -44.269699, 'Ecoponto Calhau Borborema', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.564427, -44.199892, 'Ecoponto Cidade Operária', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.506985, -44.248177, 'Ecoponto Cohaserma', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.532278, -44.202847, 'Ecoponto Itapiracó', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.581897, -44.193063, 'Ecoponto Jardim América', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.494634, -44.288421, 'Ecoponto Jardim Renascença', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.583532, -44.198534, 'Ecoponto Mata Roma (Cid. Operária 205)', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.550105, -44.284553, 'Ecoponto Parque Amazonas', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.558189, -44.276855, 'Ecoponto Parque dos Nobres', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.540008, -44.19567, 'Ecoponto Primavera', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.520428, -44.260177, 'Ecoponto Recanto do Vinhas', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.520594, -44.240683, 'Ecoponto Residencial Esperança', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.558543, -44.263439, 'Ecoponto Sacavém', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.570917, -44.223549, 'Ecoponto São Cristóvão', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.511553, -44.309165, 'Ecoponto São Francisco', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.59388, -44.231971, 'Ecoponto São Raimundo', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.502539, -44.227186, 'Ecoponto Turu', '../assets/images/iconrecilceverde.svg');
        addCustomMarker(-2.562094, -44.317708, 'Ecoponto Vila Isabel com Galpão de Triagem', '../assets/images/iconrecilceverde.svg');
    } else if (selectedValue === 'Lampadas') {
        addCustomMarker(-2.523842, -44.242308, 'Atacadão', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.519523, -44.245677, 'Centro Elétrico - Cohama', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.557246, -44.22437, 'Centro Elétrico - Guajajaras', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.511055, -44.303768, 'Centro Elétrico - São Francisco', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.52291, -44.225764, 'Fermal comércio Ltda', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.509903, -44.284907, 'Hiper Bom Preço - São Luis Shopping', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.56656, -44.231129, 'Iluminar Materiais Elétricos e Serviços de Engenharia', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.494366, -44.238161, 'Jacaré Home Center', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.518526, -44.246187, 'Potiguar Home Center - Cohama', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.554695, -44.22025, 'Potiguar Home Center Forquilha', '../assets/images/iconrecilceamarelo.svg');
        addCustomMarker(-2.554299, -44.214181, 'Roque Aço e Cimento', '../assets/images/iconrecilceamarelo.svg');
    } else if (selectedValue === 'Pilhas e Baterias') {
        addCustomMarker(-2.523842, -44.242308, 'Atacadão', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.519523, -44.245677, 'Centro Elétrico - Cohama', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.557246, -44.22437, 'Centro Elétrico - Guajajaras','../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.511055, -44.303768, 'Centro Elétrico - São Francisco', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.530739, -44.300807, 'C&A Modas - Rua Grande, 290', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.530482, -44.29724, 'C&A Modas - Rua Grande, 691', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.53418, -44.225153, 'C&A Modas - Shopping Rio Anil', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.528435, -44.255773, 'C&A Modas -Shopping da Ilha', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.552567, -44.191373, 'C&A Modas - Shopping Pátio Norte', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.509903, -44.284907, 'Hiper Bom Preço - São Luis Shopping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.56656, -44.231129, 'Iluminar Materiais Elétricos e Serviços de Engenharia', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.510136, -44.285073, 'Multicoisas - São Luís Shopping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.527208, -44.255419, 'Multicoisas - Shopping da Ilha', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.49069, -44.26376, 'Multicoisas - Golden Shoping', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.518526, -44.246187, 'Potiguar Home Center - Cohama', '../assets/images/iconrecilcelaranja.svg');
        addCustomMarker(-2.53679, -44.299171, 'Sertemar Eletrônica - Panasonic', '../assets/images/iconrecilcelaranja.svg');
    } else if (selectedValue === 'Celulares') {
        addCustomMarker(-2.530482, -44.29724, 'C&A Modas - Rua Grande', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.530739, -44.300807, 'C&A Modas - Rua Grande, 290', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.53418, -44.225153, 'C&A Modas - Shopping Rio Anil', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.528435, -44.255773, 'C&A Modas -Shopping da Ilha', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.552567, -44.191373, 'C&A Modas - Shopping Pátio Norte', '../assets/images/iconrecilcevermelho.svg');
        addCustomMarker(-2.527288, -44.25507, 'Vivo - Shopping da Ilha', '../assets/images/iconrecilcevermelho.svg');
    
    }
});


function addCustomMarker(latitude, longitude, message, iconURL) {
    
   
    if (!map) {
           
    initializeMap(latitude, longitude);
    }
    
    
        
   
    
       
    // Crie um ícone personalizado
    const customIcon = L.icon({
        iconUrl: iconURL,  // Caminho para o ícone personalizado
        iconSize: [32, 32],  // Tamanho do ícone (ajuste conforme necessário)
        iconAnchor: [16, 16],  // Âncora do ícone (ajuste conforme necessário)
    });

    const newMarker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
    markers.push(newMarker);
    newMarker.bindPopup(message).openPopup();
    markers.forEach(marker => {
        marker.closePopup();
    });
}

function removeMarkers() {
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
}
