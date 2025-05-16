$(document).ready(function () {
  const numeros = [36, 1, 25, 11, 18, 3, 7, 5, 42, 29];
  const $referencia = $("#referencia");
  const $inputs = $("#inputs");

  // Mostrar números mezclados
  const mezclados = [...numeros].sort(() => Math.random() - 0.5);
  mezclados.forEach(num => {
    $referencia.append(`<div>${num}</div>`);
  });

  // Crear cajas de entrada
  for (let i = 0; i < numeros.length; i++) {
    $inputs.append(`<input type="number" min="1" class="numero" />`);
  }

  // Verificar orden y duplicados
  $("#verificar").on("click", function () {
    const valores = [];
    
    $("#inputs input").each(function () {
      const val = parseInt($(this).val());
      if (!isNaN(val)) valores.push(val);
    });

    // Comprobar repetidos
    const sinRepetidos = new Set(valores);
    if (sinRepetidos.size !== valores.length) {
      Swal.fire({
        title: "Espera",
        text: "No debes repetir números",
        icon: "warning",
        confirmButtonText: "Reintentar"
      });
      return;
    }

    // Comprobar si todos los números están incluidos
    const todosPresentes = numeros.every(n => valores.includes(n));
    if (!todosPresentes || valores.length !== numeros.length) {
      Swal.fire({
        title: "Faltan números",
        text: "Debes usar todos los números mostrados",
        icon: "warning",
        confirmButtonText: "Intentar de nuevo"
      });
      return;
    }

    // Comprobar orden
    const ordenCorrecto = [...numeros].sort((a, b) => a - b);
    const estaOrdenado = valores.every((val, i) => val === ordenCorrecto[i]);

    // Estilo visual por caja
    $("#inputs input").each(function (i) {
      $(this).removeClass("correcto incorrecto");
      const val = parseInt($(this).val());
      if (val === ordenCorrecto[i]) {
        $(this).addClass("correcto");
      } else {
        $(this).addClass("incorrecto");
      }
    });

    // Resultado final
    if (estaOrdenado) {
      setTimeout(() => {
        Swal.fire({
          title: "¡Felicidades!",
          text: "Has completado la actividad!",
          icon: "success",
          confirmButtonText: "Volver"
        }).then(() => {
          window.location.href = "../Clases_Alumno/Clases_alumno.html";
        });
      }, 100);
    } else {
      Swal.fire({
        title: "Ups",
        text: "Revisa el orden de los números",
        icon: "error",
        confirmButtonText: "Reintentar"
      });
    }
  });
});
