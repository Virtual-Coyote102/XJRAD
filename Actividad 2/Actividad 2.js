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
    let hayRepetidos = false;

    $("#inputs input").each(function () {
      const val = parseInt($(this).val());
      if (!isNaN(val)) valores.push(val);
    });

    // Comprobar repetidos
    const sinRepetidos = new Set(valores);
    if (sinRepetidos.size !== valores.length) {
      alert("Hay números repetidos. Intenta de nuevo.");
      return;
    }

    // Comprobar si todos los números están incluidos
    if (!numeros.every(n => valores.includes(n))) {
      alert("Debes usar todos los números mostrados.");
      return;
    }

    // Comprobar orden
    const estaOrdenado = valores.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

    $("#inputs input").each(function (i) {
      $(this).removeClass("correcto incorrecto");
      const val = parseInt($(this).val());
      if (val === numeros.slice().sort((a, b) => a - b)[i]) {
        $(this).addClass("correcto");
      } else {
        $(this).addClass("incorrecto");
      }
    });

    if (estaOrdenado) {
      setTimeout(() => {
        alert("¡Muy bien! Has ordenado los números correctamente.");
        window.location.href = "../Tablero_Alumno/tablero_alumno.html";
      }, 100);
    } else {
      alert("Hay un error en el orden. Intenta de nuevo.");
    }
  });
});
