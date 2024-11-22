const centroAtencion = {
  idCentro: 1,
  coordenadas: {
    latitud: -45.000,
    longitud: 34.00
  },
  direccion: "Monteagudo 4977, Jose C. Paz, Buenos Aires, Argentina",
  nombreCentro: "La casita",
  zona: {
    idZona: 1,
    nombre: "Zona Oeste"
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