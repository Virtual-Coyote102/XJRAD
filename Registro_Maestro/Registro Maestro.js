$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault(); // Prevenir envío automático

    // Obtener los valores
    const nombre = $("input[placeholder='Nombre completo']").val().trim();
    const correo = $("input[placeholder='correo@ejemplo.com']").val().trim();
    const contrasena = $("input[placeholder='Contraseña']").val().trim();

    // Validación básica
    if (!nombre || !correo || !contrasena) {
      Swal.fire({
        icon: "error",
        title: "Faltan datos",
        text: "Por favor completa todos los campos.",
        confirmButtonColor: "#e67e22" // naranja
      });
      return;
    }

    // Simulación de éxito
    Swal.fire({
      icon: "success",
      title: "Cuenta creada",
      text: "Tu cuenta de maestro fue registrada exitosamente.",
      confirmButtonColor: "#e67e22"
    }).then(() => {
      // Redirigir si lo deseas
      window.location.href = "../Inicio/inicio.html";
    });
  });
});
