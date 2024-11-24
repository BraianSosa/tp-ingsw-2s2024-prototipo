// Inicializar el mapa
const map = L.map('map').setView([-34.6037, -58.3816], 11);

// Añadir capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir las ubicaciones de los centros por zona
const centrosPorZona = {
    sur: [
        { name: "Centro Lanús", coords: [-34.705, -58.278], direccion: "Av. Hipólito Yrigoyen 2900" },
        { name: "Centro Quilmes", coords: [-34.724, -58.252], direccion: "Calle Mitre 230" },
        { name: "Centro Avellaneda", coords: [-34.663, -58.365], direccion: "Av. Belgrano 1800" }
    ],
    norte: [
        { name: "Centro San Fernando", coords: [-34.455, -58.548], direccion: "Calle Libertador 1020" },
        { name: "Centro Tigre", coords: [-34.426, -58.579], direccion: "Av. Italia 750" },
        { name: "Centro Pilar", coords: [-34.458, -58.914], direccion: "Ruta 8 Km 52" }
    ],
    oeste: [
        { name: "Centro Morón", coords: [-34.654, -58.619], direccion: "Calle Brown 450" },
        { name: "Centro San Justo", coords: [-34.681, -58.562], direccion: "Calle Almafuerte 820" },
        { name: "Centro Merlo", coords: [-34.668, -58.729], direccion: "Av. Real 1500" }
    ],
    caba: [
        { name: "Centro Palermo", coords: [-34.583, -58.421], direccion: "Av. Santa Fe 3400" },
        { name: "Centro Recoleta", coords: [-34.588, -58.396], direccion: "Calle Junín 120" },
        { name: "Centro Belgrano", coords: [-34.563, -58.446], direccion: "Av. Cabildo 1200" }
    ]
};

const bodyTabla = document.getElementById("centros-table-body");

Object.keys(centrosPorZona).forEach(zona => {
    centrosPorZona[zona].forEach(centro => {
        // Agregar marcador en el mapa
        L.marker(centro.coords).addTo(map)
            .bindPopup(`<b>${centro.name}</b><br>Dirección: ${centro.direccion}<br>Zona: ${zona.toUpperCase()}`);

        // Crear una fila en la tabla
        const filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
            <td class="border-b p-2">${centro.name}</td>
            <td class="border-b p-2">${centro.direccion}</td>
            <td class="border-b p-2">${zona.toUpperCase()}</td>
        `;
        bodyTabla.appendChild(filaTabla);
    });
});