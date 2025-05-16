$(document).ready(function () {
  const osoMatriz = [
    [5,5,5,5,1,1,1,5,5,1,1,1,5,5,5,5],
    [5,5,5,1,1,2,2,1,1,2,2,1,1,5,5,5],
    [5,5,1,2,2,2,2,2,2,2,2,2,2,1,5,5],
    [5,1,2,2,2,2,2,2,2,2,2,2,2,2,1,5],
    [1,2,2,6,6,2,2,2,2,2,2,6,6,2,2,1],
    [1,2,2,6,3,2,2,2,2,2,2,3,6,2,2,1],
    [1,2,2,2,2,4,4,4,4,4,4,2,2,2,2,1],
    [1,2,2,2,2,4,3,3,3,3,4,2,2,2,2,1],
    [5,1,2,2,2,4,4,3,3,4,4,2,2,2,1,5],
    [5,5,1,2,2,2,4,4,4,4,2,2,2,1,5,5],
    [5,5,5,1,2,2,2,2,2,2,2,2,1,5,5,5],
    [5,5,5,5,1,2,2,2,2,2,2,1,5,5,5,5],
    [5,5,5,5,5,1,1,1,1,1,1,5,5,5,5,5]
  ];

  const $grid = $("#pixel-grid");

  // Renderizar la cuadrícula del oso
  osoMatriz.forEach((row) => {
    row.forEach((num) => {
      const $pixel = $("<div></div>")
        .addClass("pixel")
        .attr("data-num", num)
        .text(num);
      $grid.append($pixel);
    });
  });

  const colores = {
    1: "#5C4033",  // marrón oscuro
    2: "#D2B48C",  // beige medio
    3: "#000000",  // negro
    4: "#704f3f",  // rosa claro
    5: "#FFF8DC",  // crema
    6: "#FFFFFF"   // blanco
  };

  const respuestas = {
    1: 7,  
    2: 3,   
    3: 0,
    4: 127,
    5: 25,
    6: 49
  };

  let colorActivo = null;

  // Evento para verificar respuestas solo al presionar Enter
  $("input").on("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      const color = $(this).data("color");
      const valor = parseInt($(this).val());

      if (valor === respuestas[color]) {
        const $btn = $(`.color[data-color='${color}']`);
        $btn.prop("disabled", false);
        $btn.addClass("unlocked");
        $btn.css({
          "opacity": "1",
          "cursor": "pointer",
          "background-color": colores[color]
        });
        $btn.text(color);
      } else {
        Swal.fire({
          title: "Ups",
          text: "La respuesta es incorrecta",
          icon: "error",
          confirmButtonText: "Reintentar"
        });
        $(this).val(""); // Limpiar campo
      }
    }
  });

  // Seleccionar color activo
  $(".color").on("click", function () {
    colorActivo = $(this).data("color");
  });

  // Pintar píxeles si el color es correcto
  $("#pixel-grid").on("click", ".pixel", function () {
    const requerido = $(this).data("num");
    if (colorActivo == requerido) {
      const $colorBtn = $(`.color[data-color='${colorActivo}']`);
      const colorCode = $colorBtn.css("background-color");

      $(this).css("background-color", colorCode);
      $(this).addClass("coloreado");
      $(this).text(""); // Eliminar número

      verificarCompletado();
    }
  });

  // Comprobación de si se completó el dibujo
  function verificarCompletado() {
    const total = $(".pixel").not("[data-num='0']").length;
    const coloreados = $(".pixel.coloreado").length;

    if (coloreados === total) {
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
});
