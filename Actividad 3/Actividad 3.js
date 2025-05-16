function verificarRespuestas() {
  const respuestas = ["17", "2", "15", "18", "7", "50"];
  const inputs = document.querySelectorAll(".input input");
  let correctas = 0;

  inputs.forEach((input, i) => {
    const valor = input.value.trim().replace(/^0+/, ""); // elimina espacios y ceros iniciales
    if (valor === respuestas[i]) {
      input.style.backgroundColor = "#c8e6c9"; // verde claro
      correctas++;
    } else {
        Swal.fire({
        title: "Ups",
        text: "Los algunos números son incorrectos",
        icon: "error",
        confirmButtonText: "Reintentar"
      });
      input.style.backgroundColor = "#ffcdd2"; // rojo claro
    }
  });

  if (correctas === respuestas.length) {
      setTimeout(() => {
        Swal.fire({
          title: "¡Felicidades!",
          text: "Has completado la actividad!",
          icon: "success",
          confirmButtonText: "Volver"
        }).then(() => {
          window.location.href = "../Tablero_Alumno/tablero_alumno.html";
        });
      }, 100);
  }
}
