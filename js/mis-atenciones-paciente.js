const centroAtencion = {
  idCentro: 1,
  coordenadas: {
    latitud: -34.426943964914486,
    longitud: -58.57035664087726
  },
  direccion: "Av. Italia 750, Tigre, Buenos Aires, Argentina",
  nombreCentro: "Centro Tigre",
  zona: {
    idZona: 1,
    nombre: "Zona Norte"
  }
}

const atencionPaciente = {
  idAtencion: 1,
  fechaAtencion: new Date(),
  paciente: {
    dni: 43022672
  },
  centro: centroAtencion
}

// Función para mostrar el centro de atención en Mapa usando Leaflet con openstreetmaps
function mostrarCentroAtencion() {
  const infoCentroDiv = document.getElementById("centro-atencion-info");
  const datosCentroP = document.getElementById("datos-centro");
  const mapaCentroDiv = document.getElementById("mapa-centro");

  // Mostrar datos del centro de atención
  datosCentroP.innerHTML = `
    <strong> Datos de la atención brindada </strong> <br>
    <strong>Centro:</strong> ${centroAtencion.idCentro} - ${centroAtencion.nombreCentro}<br>
    <strong>Dirección:</strong> ${centroAtencion.direccion}<br>
    <strong>Zona:</strong> ${centroAtencion.zona.nombre}<br>
    <strong>Fecha de atención:</strong> ${atencionPaciente.fechaAtencion}<br>
  `;

  // Fix carga de mapa
  infoCentroDiv.style.display = "block";

  // Cargar el mapa usando Leaflet
  try {
    const lat = centroAtencion.coordenadas.latitud;
    const lng = centroAtencion.coordenadas.longitud;

    // Crear el mapa y establecer su vista en las coordenadas del centro
    const map = L.map(mapaCentroDiv).setView([lat, lng], 15);

    // Añadir una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marcador para centro de atención
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<b>${centroAtencion.nombreCentro}</b><br>${centroAtencion.direccion}<br>Fecha de atención:</strong> ${atencionPaciente.fechaAtencion}<br>`)
      .openPopup();

    // Fix error de capa base 
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

  } catch (e) {
    // Mapa no disponbile
    mapaCentroDiv.innerHTML = "<p>El sistema de mapas no está disponible en este momento.</p>";
  }
}

mostrarCentroAtencion();