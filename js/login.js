const DNI_PACIENTE = "43022672";
const LEGAJO_COORDINADOR = "99999999";
const CONTRASENIA = "123456789";

// Selecciona el formulario y el mensaje de error
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  // Valores ingresados en formulario
  const password = form.password.value;
  const dniLegajo = form.dniLegajo.value;

  // Verificacion DNI y Contraseña, y redirección segun perfil
  if (dniLegajo === DNI_PACIENTE && password === CONTRASENIA) {
    window.location.href = "index-paciente.html";
  } else if (dniLegajo === LEGAJO_COORDINADOR && password === CONTRASENIA) {
    window.location.href = "index-coordinador.html";
  } else {
    // Mostrar mensaje de error en caso de no coincidir contraseña y dni
    errorMessage.classList.remove("hidden");
  }
});
