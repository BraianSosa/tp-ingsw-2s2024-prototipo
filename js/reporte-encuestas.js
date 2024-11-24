const centrosPorZona = {
    sur: ["Centro Lanús", "Centro Quilmes", "Centro Avellaneda"],
    norte: ["Centro San Fernando", "Centro Tigre", "Centro Pilar"],
    oeste: ["Centro Morón", "Centro San Justo", "Centro Merlo"],
    caba: ["Centro Palermo", "Centro Recoleta", "Centro Belgrano"]
};

function actualizarCentros() {
    const zonaSelect = document.getElementById("zonaSelect").value;
    const centroSelect = document.getElementById("centroSelect");

    // Limpiar las opciones anteriores
    centroSelect.innerHTML = '<option disabled selected>Seleccione</option>';
    centroSelect.disabled = false;

    // Agregar nuevas opciones de centros según la zona seleccionada
    centrosPorZona[zonaSelect].forEach(centro => {
        const option = document.createElement("option");
        option.textContent = centro;
        centroSelect.appendChild(option);
    });
}

function generarPuntaje() {
    const centroSelect = document.getElementById("centroSelect");
    const centroSeleccionado = centroSelect.value;
    const puntajeAleatorio = (Math.random() * 9 + 1).toFixed(1); // Generar puntaje entre 1 y 10

    // Actualizar la tabla con el centro seleccionado y el puntaje
    const resultadosTabla = document.getElementById("resultadosTabla");
    resultadosTabla.innerHTML = `
        <tr>
            <td>${centroSeleccionado}</td>
            <td>${puntajeAleatorio}</td>
        </tr>
    `;
}