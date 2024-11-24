const zonaNorte = {
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
      coordenadas: [-34.426943964914486, -58.57035664087726],
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

const zonaSur = {
  id: 2,
  nombre: "Zona Sur",
  centros: [
    {
      id: 4,
      nombre: "Centro Lanús",
      coordenadas: [-34.705, -58.278],
      direccion: "Av. Hipólito Yrigoyen 2900, Lanus",
    },
    {
      id: 5,
      nombre: "Centro Quilmes",
      coordenadas: [-34.724, -58.252],
      direccion: "Calle Mitre 230, Quilmes",
    },
    {
      id: 6,
      nombre: "Centro Avellaneda",
      coordenadas: [-34.663, -58.365],
      direccion: "Av. Belgrano 1800, Avellaneda",
    },
  ],
  poligono: {
    color: "green",
    coordenadas: [
      [-34.6343379, -58.3291626],
      [-34.6329254, -58.349247],
      [-34.6405523, -58.35783],
      [-34.6459189, -58.3564568],
      [-34.6580632, -58.3731079],
      [-34.6597576, -58.3844376],
      [-34.6645582, -58.3931923],
      [-34.6601812, -58.414135],
      [-34.6738763, -58.4340477],
      [-34.7053523, -58.4596252],
      [-34.7396376, -58.4960175],
      [-34.7630507, -58.5255432],
      [-34.7766583, -58.5397911],
      [-34.8138738, -58.570261],
      [-34.8538194, -58.6209869],
      [-34.924223, -58.62854],
      [-35.0108773, -58.5543823],
      [-35.0569804, -58.444519],
      [-35.0209997, -58.2852173],
      [-34.9152147, -58.1739807],
      [-34.851002, -58.0888367],
      [-34.8577636, -58.057251],
      [-34.7991447, -57.9927063],
      [-34.7540248, -58.1121826],
      [-34.7054934, -58.2302856],
      [-34.6558039, -58.326416],
      [-34.6354678, -58.3277893],
    ],
  },
};

const zonaOeste = {
  id: 3,
  nombre: "Zona Oeste",
  centros: [
    {
      id: 7,
      nombre: "Centro Morón",
      coordenadas: [-34.654, -58.619],
      direccion: "Calle Brown 450, Morón",
    },
    {
      id: 8,
      nombre: "Centro San Justo",
      coordenadas: [-34.681, -58.562],
      direccion: "Calle Almafuerte 820, San Justo",
    },
    {
      id: 9,
      nombre: "Centro Merlo",
      coordenadas: [-34.668, -58.729],
      direccion: "Av. Real 1500, Merlo",
    },
  ],
  poligono: {
    color: "red",
    coordenadas: [
      [-34.5744295, -59.0388107],
      [-34.6029761, -58.9031982],
      [-34.6365977, -58.7905884],
      [-34.6289705, -58.7202072],
      [-34.6103232, -58.7147141],
      [-34.6018458, -58.695488],
      [-34.5919544, -58.684845],
      [-34.5701891, -58.6532593],
      [-34.5662312, -58.6275101],
      [-34.5552045, -58.6216736],
      [-34.5532252, -58.607254],
      [-34.5153266, -58.5866547],
      [-34.5108003, -58.5894012],
      [-34.5040103, -58.5887146],
      [-34.4895798, -58.5948944],
      [-34.4918435, -58.5622787],
      [-34.5110832, -58.5251999],
      [-34.5467214, -58.4943008],
      [-34.6154092, -58.5303497],
      [-34.6549567, -58.5282898],
      [-34.7054934, -58.4603119],
      [-34.7396376, -58.4949875],
      [-34.7520502, -58.5251999],
      [-34.8149308, -58.5712051],
      [-34.8081657, -58.6154938],
      [-34.7641789, -58.6772919],
      [-34.7224262, -58.7548828],
      [-34.7074691, -58.7929916],
      [-34.6851695, -58.8183975],
      [-34.6620167, -58.9186478],
      [-34.6456365, -59.0360641],
      [-34.5735814, -59.0394974],
    ],
  },
};

const zonaCABA = {
  id: 4,
  nombre: "Zona CABA",
  centros: [
    {
      id: 10,
      nombre: "Centro Palermo",
      coordenadas: [-34.583, -58.421],
      direccion: "Av. Santa Fe 3400, CABA",
    },
    {
      id: 11,
      nombre: "Centro Recoleta",
      coordenadas: [-34.588, -58.396],
      direccion: "Calle Junín 120, CABA",
    },
    {
      id: 12,
      nombre: "Centro Belgrano",
      coordenadas: [-34.563, -58.446],
      direccion: "Av. Cabildo 1200, CABA",
    },
  ],
  poligono: {
    color: "purple",
    coordenadas: [
      [-34.7057757, -58.4599686],
      [-34.6549567, -58.5279465],
      [-34.616822, -58.5303497],
      [-34.5509631, -58.5004807],
      [-34.5303184, -58.4524155],
      [-34.5574665, -58.4088135],
      [-34.5676447, -58.3683014],
      [-34.6162569, -58.3394623],
      [-34.6278405, -58.3343124],
      [-34.6343379, -58.3490753],
      [-34.6447891, -58.3559418],
      [-34.6589104, -58.3734512],
      [-34.6594752, -58.3834076],
      [-34.6645582, -58.3926773],
      [-34.66004, -58.4119034],
      [-34.6631463, -58.4225464],
      [-34.7049289, -58.4599686],
    ],
  },
};

const zonas = [zonaNorte, zonaSur, zonaOeste, zonaCABA];
try {
  // Iniciar capa y mapa de capa base
  const map = L.map("map").setView([-34.6037, -58.3816], 11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Referencia para los marcadores para centrar en mapa al presionar ver
  const markers = {};

  // Dibujar polígonos y agregar centros al mapa
  zonas.forEach((zona) => {
    // Dibujar el polígono
    L.polygon(zona.poligono.coordenadas, {
      color: zona.poligono.color,
      weight: 2,
      fillOpacity: 0.3,
    })
      .addTo(map)
      .bindPopup(`<b>${zona.nombre}</b>`); // Mostrar el nombre de la zona al tocar el polígono

    // Agregar marcadores para los centros
    zona.centros.forEach((centro) => {
      const marker = L.marker(centro.coordenadas)
        .addTo(map)
        .bindPopup(
          `<b>${centro.nombre}</b><br>Dirección: ${centro.direccion}<br>Zona: ${zona.nombre}`
        );

      // Guardar el marcador en la referencia
      markers[centro.nombre] = marker;
    });
  });
  const bodyTabla = document.getElementById("centros-table-body");

  // Generar la tabla a partir de las zonas
  zonas.forEach((zona) => {
    zona.centros.forEach((centro) => {
      const filaTabla = document.createElement("tr");
      filaTabla.innerHTML = `
                <td class="border-b p-2">${centro.id}</td>
                <td class="border-b p-2">${centro.nombre}</td>
                <td class="border-b p-2">${centro.direccion}</td>
                <td class="border-b p-2">${zona.nombre}</td>
                <td class="border-b p-2">
                    <button class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                        Ver
                    </button>
                </td>
            `;

      // Agregar evento al botón "Ver" para centrar y mostrar el marcador
      filaTabla.querySelector("button").addEventListener("click", () => {
        map.setView(centro.coordenadas, 14); // Centrar mapa en el marcador
        markers[centro.nombre].openPopup(); // Abrir el popup del marcador
      });

      // Agregar fila a la tabla
      bodyTabla.appendChild(filaTabla);
    });
  });

  // Fix error de capa base
  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  //Prueba de error
  //throw new Error("sdadsa");
} catch (error) {
    //Caso de muestra de tabla cuando exista error en mapa
    console.error("Error al generar el mapa: ", error);

    // Reemplazo mapa y oculto tabla
    const mapaDiv = document.getElementById("map");
    const tablaCentrosDiv = document.getElementById("div-tabla-centros");
  
    tablaCentrosDiv.hidden = true;
  
    // String de centros en tabla
    let filasTabla = "";
    zonas.forEach((zona) => {
      zona.centros.forEach((centro) => {
        filasTabla += `
          <tr>
            <td class="border border-gray-300 px-4 py-2">${centro.id}</td>
            <td class="border border-gray-300 px-4 py-2">${centro.nombre}</td>
            <td class="border border-gray-300 px-4 py-2">${centro.direccion}</td>
            <td class="border border-gray-300 px-4 py-2">${centro.coordenadas[0] + ", " + centro.coordenadas[1]}</td>
            <td class="border border-gray-300 px-4 py-2">${zona.nombre}</td>
          </tr>`;
      });
    });
  
    // Muestro tabla de datos de centros
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
                  ${filasTabla}
              </tbody>
          </table>
      `;
}
