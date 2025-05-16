function show_value(x) {
    $("#slider_value").text(x);
}

$(document).ready(function () {

  show_value($(".input").val()); // Mostrar el valor inicial al cargar
  $("form").on("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Obtener los valores de los inputs
    const nombre = $("input[placeholder='Nombre']").val().trim();
    const usuario = $("input[placeholder='Nombre de usuario']").val().trim();
    const contrasena = $("input[placeholder='Contraseña']").val().trim();
    const fechaNacimiento = $("input[type='date']").val();

    // Validación básica
    if (!nombre || !usuario || !contrasena || !fechaNacimiento) {
      Swal.fire({
        icon: "error",
        title: "Faltan datos",
        text: "Por favor completa todos los campos.",
        confirmButtonColor: "#8e44ad"
      });
      return;
    }

    // Simulación de éxito
    Swal.fire({
      icon: "success",
      title: "Cuenta creada",
      text: "Tu cuenta de alumno fue registrada exitosamente.",
      confirmButtonColor: "#8e44ad"
    }).then(() => {
      // Redirigir o limpiar el formulario si deseas
      window.location.href = "../Inicio/inicio.html";
    });
  });
});