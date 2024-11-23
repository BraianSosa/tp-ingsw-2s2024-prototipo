  // Elementos principales del DOM
  const tituloForm = document.getElementById("titulo-form");
  const tituloAgradecimiento = document.getElementById("titulo-agradecimiento-encuesta");
  const subtituloAgradecimiento = document.getElementById("subtitulo-agradecimiento-encuesta");
  const inputs = document.querySelectorAll("input, textarea");
  const botonSubmit = document.getElementById("boton-submit-form");
  const formEncuesta = document.getElementById("form-encuesta");

  // Función para manejar el envío de la encuesta
  const completarEncuesta = (event) => {
      event.preventDefault(); // Evitar que el formulario recargue la página

      alert("La encuesta ha sido enviada correctamente");

      // Cambiar visibilidad de los títulos y ocultar boton de enviar
      tituloForm.hidden = true; // Ocultar el título inicial
      tituloAgradecimiento.hidden = false; // Mostrar el agradecimiento
      subtituloAgradecimiento.hidden = false;   
      botonSubmit.hidden = true;

      // Deshabilitar los campos del formulario
      inputs.forEach(input => {
          input.disabled = true; // Deshabilitar cada input y textarea
      });
  };

  // Asociar la función al evento 'submit' del formulario
  formEncuesta.addEventListener("submit", completarEncuesta);