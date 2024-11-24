const zonaCoordinador = {
  id: 1,
  nombre: "Zona Norte",
  centros: [
    {
      id: 1,
      nombre: "Centro San Fernando",
      coordenadas: [-34.455, -58.548],
      direccion: "Calle Libertador 1020, San Fernando",
    },
    {
      id: 2,
      nombre: "Centro Tigre",
      coordenadas: [-34.426, -58.579],
      direccion: "Av. Italia 750, Tigre",
    },
    {
      id: 3,
      nombre: "Centro Pilar",
      coordenadas: [-34.458, -58.914],
      direccion: "Ruta 8 Km 52, Pilar",
    },
  ],
  poligono: {
    color: "blue",
    coordenadas: [
      [-34.5475698, -58.4922409],
      [-34.5167411, -58.5173035],
      [-34.4994833, -58.5512924],
      [-34.4904287, -58.5729218],
      [-34.4884478, -58.5969543],
      [-34.5204185, -58.5904312],
      [-34.5512458, -58.6058807],
      [-34.5549217, -58.6244202],
      [-34.5648176, -58.6288834],
      [-34.5699064, -58.6542892],
      [-34.5874322, -58.6793518],
      [-34.6049543, -58.705101],
      [-34.627558, -58.7219238],
      [-34.6312305, -58.7432098],
      [-34.6350441, -58.7650108],
      [-34.636174, -58.7842369],
      [-34.630948, -58.7984848],
      [-34.6049543, -58.8197708],
      [-34.5978893, -58.8192558],
      [-34.5680688, -58.8491249],
      [-34.5139122, -58.8767624],
      [-34.4907117, -58.8898087],
      [-34.4873159, -58.9237976],
      [-34.453634, -58.942337],
      [-34.3955786, -59.0254211],
      [-34.3136663, -58.8705826],
      [-34.2901265, -58.7809753],
      [-34.3423022, -58.704071],
      [-34.4091757, -58.5942078],
      [-34.4533509, -58.5063171],
      [-34.486184, -58.4815979],
      [-34.5325811, -58.4541321],
      [-34.547287, -58.4953308],
    ],
  },
};

const zonaH2 = document.getElementById("zona-asignada");
zonaH2.innerHTML = `Tu zona asignada es: ${zonaCoordinador.nombre}`;

try {
  const map = L.map("map").setView([-34.472, -58.522], 11);

  // Capa de mapa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  // Referencia para los marcadores para centrar en el mapa al presionar "Ver"
  const markers = {};

  // Agregar marcadores para los centros
  zonaCoordinador.centros.forEach((centro) => {
    const marker = L.marker(centro.coordenadas)
      .addTo(map)
      .bindPopup(
        `<b>Zona:</b> ${zonaCoordinador.nombre}  <br> <b>Centro:</b> ${centro.id} - ${centro.nombre}<br><b>Dirección:</b> ${centro.direccion}`
      );

    // Guardar el marcador en la referencia
    markers[centro.nombre] = marker;
  });

  // Polígono para delimitar la zonaCoordinador
  const poligonoZona = L.polygon(zonaCoordinador.poligono.coordenadas, {
    color: zonaCoordinador.poligono.color,
    fillColor: zonaCoordinador.poligono.color,
    fillOpacity: 0.3,
  }).addTo(map);
  poligonoZona.bindPopup(`Zona asignada: ${zonaCoordinador.nombre}`);

  // Crear la tabla de centros con botón "Ver"
  const bodyTabla = document.getElementById("centros-table-body");
  zonaCoordinador.centros.forEach((centro) => {
    const filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
            <td class="border-b p-2">${centro.id}</td>
            <td class="border-b p-2">${centro.nombre}</td>
            <td class="border-b p-2">${centro.direccion}</td>
            <td class="border-b p-2">
                <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                    Ver
                </button>
            </td>
        `;

    // Agregar evento al botón "Ver" para centrar el mapa y mostrar el marcador
    filaTabla.querySelector("button").addEventListener("click", () => {
      map.setView(centro.coordenadas, 14); // Centrar el mapa en el marcador
      markers[centro.nombre].openPopup(); // Abrir el popup del marcador
    });

    // Agregar la fila a la tabla
    bodyTabla.appendChild(filaTabla);
  });

  // FIX error de carga de frames de mapa
  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  //Prueba de error
  //throw new Error("Error de prueba");
} catch (error) {
  // Mostrar datos en una tabla si ocurre un error
  console.error("Error al generar el mapa: ", error);

  //Reemplazo mapa y tabla
  const mapaDiv = document.getElementById("map");
  const tablaCentrosDiv = document.getElementById("div-tabla-centros");

  tablaCentrosDiv.hidden = true;

  mapaDiv.className = "bg-white";
  mapaDiv.innerHTML = `
        <h2 class="text-xl text-red-600 mb-2">Error al cargar el mapa. Mostrando datos en una tabla:</h2>
        <table class="table-auto w-full bg-white border-collapse border border-gray-300">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-300 px-4 py-2">ID</th>
                    <th class="border border-gray-300 px-4 py-2">Nombre</th>
                    <th class="border border-gray-300 px-4 py-2">Dirección</th>
                    <th class="border border-gray-300 px-4 py-2">Coordenadas</th>
                    <th class="border border-gray-300 px-4 py-2">Zona</th>
                </tr>
            </thead>
            <tbody>
                ${zonaCoordinador.centros
                  .map(
                    (centro) => `
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">${centro.id}</td>
                        <td class="border border-gray-300 px-4 py-2">${centro.nombre}</td>
                        <td class="border border-gray-300 px-4 py-2">${centro.direccion}</td>
                        <td class="border border-gray-300 px-4 py-2">${centro.coordenadas[0]+", "+centro.coordenadas[1]}</td>
                        <td class="border border-gray-300 px-4 py-2">${zonaCoordinador.nombre}</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>
    `;
}
