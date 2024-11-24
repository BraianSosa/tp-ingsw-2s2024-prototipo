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
};

const zonas = [zonaNorte, zonaSur, zonaOeste, zonaCABA];

function inicializarZonaSelect() {
  const zonaSelect = document.getElementById("select-zona");

  // Limpiar las opciones anteriores si existen
  zonaSelect.innerHTML =
    "<option disabled selected>Seleccione una zona</option>";

  // Añadir las opciones de zona desde el array 'zonas'
  zonas.forEach((zona) => {
    const option = document.createElement("option");
    option.textContent = zona.nombre;
    option.value = zona.id; // Utilizamos el ID para identificar la zona
    zonaSelect.appendChild(option);
  });

  // Habilitar el select de zonas
  zonaSelect.disabled = false;
}

function actualizarCentros() {
  const zonaId = parseInt(document.getElementById("select-zona").value);
  const centroSelect = document.getElementById("select-centro");

  // Limpiar las opciones anteriores
  centroSelect.innerHTML =
    "<option disabled selected>Seleccione un centro</option>";
  centroSelect.disabled = false;

  // Encontrar la zona seleccionada en el array de zonas
  const zonaSeleccionada = zonas.find((zona) => zona.id === zonaId);

  // Agregar nuevas opciones de centros según la zona seleccionada
  if (zonaSeleccionada) {
    zonaSeleccionada.centros.forEach((centro) => {
      const option = document.createElement("option");
      option.textContent = centro.nombre;
      option.value = centro.id; // Puedes usar `centro.nombre` si prefieres
      centroSelect.appendChild(option);
    });
  }
}

function generarResultadosCentro() {
  const centroSelect = document.getElementById("select-centro");
  const centroId = parseInt(centroSelect.value);

  // Verificar si se ha seleccionado un centro
  if (!centroId) {
    alert("Por favor, seleccione un centro.");
    return;
  }

  const centroSeleccionado = zonas
    .flatMap((zona) => zona.centros)
    .find((centro) => centro.id === centroId);

  if (!centroSeleccionado) {
    alert("Centro no válido.");
    return;
  }

  // Limpiar la tabla de resultados antes de agregar nuevas filas
  const resultadosTabla = document.getElementById("resultadosTabla");
  resultadosTabla.innerHTML = "";

  // Generar 10 filas con datos aleatorios
  for (let i = 0; i < 10; i++) {
    const respuestaAleatoria = respuestaEncuestaRandom();

    // Crear una fila con 12 columnas: ID, comentario y 10 preguntas
    const fila = document.createElement("tr");

    // Columna 1: ID aleatorio para la encuesta
    const idCelda = document.createElement("td");
    idCelda.textContent = Math.floor(Math.random() * 10000); // ID aleatorio
    fila.appendChild(idCelda);

    // Columna 2: Comentario aleatorio
    const comentarioCelda = document.createElement("td");
    comentarioCelda.textContent = respuestaAleatoria.comentario;
    fila.appendChild(comentarioCelda);

    // Columnas 3 a 12: Puntajes para cada pregunta
    respuestaAleatoria.respuestas.forEach((respuesta) => {
      const puntajeCelda = document.createElement("td");
      puntajeCelda.textContent = respuesta.puntaje;
      fila.appendChild(puntajeCelda);
    });

    // Agregar la fila a la tabla
    resultadosTabla.appendChild(fila);
  }
}

function respuestaEncuestaRandom() {
  const preguntas = [
    {
      id: 1,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan organizado consideras que está el proceso de registro y atención?",
    },
    {
      id: 2,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan eficiente consideras la asignación de turnos?",
    },
    {
      id: 3,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan bien estructurados están los procedimientos dentro del centro de salud?",
    },
    {
      id: 4,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan adecuado fue el tiempo que esperaste para ser atendido?",
    },
    {
      id: 5,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan rápido fue el proceso de atención desde tu llegada al centro?",
    },
    {
      id: 6,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan claro fue el sistema de información sobre los pasos a seguir durante tu visita?",
    },
    {
      id: 7,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan bien organizados estaban las personas y materiales durante tu atención?",
    },
    {
      id: 8,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan accesible y funcional fue la distribución de las áreas dentro del centro?",
    },
    {
      id: 9,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan satisfecho estás con la organización general del centro de salud?",
    },
    {
      id: 10,
      texto:
        "Evalúa con un puntaje del 1 al 10: ¿Qué tan satisfecho estás con los tiempos de atención en cada etapa del proceso?",
    },
  ];

  const opcionesComentarios = [
    "El proceso cumplió mis expectativas.",
    "Fue una experiencia interesante.",
    "La atención fue adecuada.",
    "Todo estuvo dentro de lo esperado.",
    "En general, fue un servicio funcional.",
    "Hay aspectos que podrían revisarse.",
    "El servicio fue aceptable.",
    "El tiempo de espera fue razonable.",
    "El personal fue profesional en su mayoría.",
    "La organización fue suficiente.",
    "Sin comentarios.",
  ];

  // Generar respuestas aleatorias para cada pregunta
  const respuestas = preguntas.map((pregunta) => {
    return {
      pregunta: pregunta.texto,
      puntaje: Math.floor(Math.random() * 10) + 1, // Genera un número aleatorio entre 1 y 10
    };
  });

  return {
    respuestas,
    comentario:
      opcionesComentarios[
        Math.floor(Math.random() * opcionesComentarios.length)
      ],
  };
}

function llenarDivConPreguntas() {
  const preguntas = [
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan organizado consideras que está el proceso de registro y atención?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan eficiente consideras la asignación de turnos?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan bien estructurados están los procedimientos dentro del centro de salud?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan adecuado fue el tiempo que esperaste para ser atendido?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan rápido fue el proceso de atención desde tu llegada al centro?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan claro fue el sistema de información sobre los pasos a seguir durante tu visita?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan bien organizados estaban las personas y materiales durante tu atención?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan accesible y funcional fue la distribución de las áreas dentro del centro?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan satisfecho estás con la organización general del centro de salud?",
    "Evalúa con un puntaje del 1 al 10: ¿Qué tan satisfecho estás con los tiempos de atención en cada etapa del proceso?",
  ];

  // Seleccionar el div de referencia
  const referenciaDiv = document.getElementById("referencia-preguntas");

  // Crear una lista no ordenada (ul) para agregar las preguntas
  const lista = document.createElement("ul");
  lista.classList.add("list-disc", "pl-5"); // Clase para lista estilizada

  preguntas.forEach((pregunta, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${pregunta}`; // Añade un índice antes de cada pregunta
    lista.appendChild(item);
  });

  // Agregar la lista al div
  referenciaDiv.appendChild(lista);
}

// Inicializar datos cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  inicializarZonaSelect();
  llenarDivConPreguntas();
  document
    .getElementById("select-zona")
    .addEventListener("change", actualizarCentros);
  document
    .getElementById("select-centro")
    .addEventListener("change", generarResultadosCentro);
});
