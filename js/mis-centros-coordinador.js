// Datos de los centros de atención
const centros = [
    {
        id: 1,
        nombre: "Centro Tigre",
        direccion: "Av. Principal 100, Tigre",
        coordenadas: [-34.425, -58.579]
    },
    {
        id: 2,
        nombre: "Centro San Isidro",
        direccion: "Calle San Martín 200, San Isidro",
        coordenadas: [-34.472, -58.522]
    },
    {
        id: 3,
        nombre: "Centro Vicente López",
        direccion: "Av. Maipú 3000, Vicente López",
        coordenadas: [-34.526, -58.481]
    }
];

const zonaCoords = [
    [-34.5453075, -58.4932709],
    [-34.5123563, -58.5227966],
    [-34.4993419, -58.5507774],
    [-34.4946732, -58.5564423],
    [-34.469486, -58.5682869],
    [-34.4466978, -58.5775566],
    [-34.4342395, -58.5892296],
    [-34.4260273, -58.5837364],
    [-34.4172479, -58.5784149],
    [-34.4185224, -58.5679436],
    [-34.4250361, -58.5593605],
    [-34.4328236, -58.5435677],
    [-34.444999, -58.5258865],
    [-34.4488212, -58.5054588],
    [-34.4615604, -58.499279],
    [-34.4639664, -58.4941292],
    [-34.479675, -58.4819412],
    [-34.4939658, -58.4778214],
    [-34.5013225, -58.4767914],
    [-34.5143365, -58.4687233],
    [-34.5246615, -58.4654617],
    [-34.530177, -58.4519005],
    [-34.5347023, -58.4649467],
    [-34.5451661, -58.4930992]
];

const zona = {
    id: 1,
    nombre: "Zona Norte",
    coordenadas: zonaCoords,
    centros: centros
};

try {
    const map = L.map('map').setView([-34.472, -58.522], 11);

    // Capa de mapa base de openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Marcadores de los centros
    zona.centros.forEach(centro => {
        L.marker(centro.coordenadas)
            .addTo(map)
            .bindPopup(`<b>Zona:</b> ${zona.nombre}  <br> <b>Centro:</b> ${centro.id} - ${centro.nombre}<br><b>Dirección:</b> ${centro.direccion}`);
    });

    // Polígono para delimitar la zona
    const poligonoZona = L.polygon(zona.coordenadas, {
        color: '#3388ff',
        fillColor: '#3388ff',
        fillOpacity: 0.3
    }).addTo(map);
    poligonoZona.bindPopup(`Zona asignada: ${zona.nombre}`);
    
    //throw new Error("Prueba de error");

} catch (error) {
    // Mostrar datos en una tabla si ocurre un error
    console.error("Error al generar el mapa: ", error);

    const mapaDiv = document.getElementById('map');
    mapaDiv.className = "bg-white";
    mapaDiv.innerHTML = `
        <h2 class="text-xl text-red-600 mb-2">Error al cargar el mapa. Mostrando datos en una tabla:</h2>
        <table class="table-auto w-full bg-white border-collapse border border-gray-300">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-300 px-4 py-2">ID</th>
                    <th class="border border-gray-300 px-4 py-2">Nombre</th>
                    <th class="border border-gray-300 px-4 py-2">Dirección</th>
                </tr>
            </thead>
            <tbody>
                ${zona.centros.map(centro => `
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">${centro.id}</td>
                        <td class="border border-gray-300 px-4 py-2">${centro.nombre}</td>
                        <td class="border border-gray-300 px-4 py-2">${centro.direccion}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}
