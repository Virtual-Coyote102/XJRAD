$(document).ready(function() {


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
  [5,5,5,5,5,1,1,1,1,1,1,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
];

  // Renderizar cuadrícula del oso
  const $grid = $("#pixel-grid");
  osoMatriz.forEach((row, i) => {
    row.forEach((num, j) => {
      const $pixel = $("<div></div>")
        .addClass("pixel")
        .attr("data-num", num)
        .text(num); //Mostrar el #
      $grid.append($pixel);
    });
  });

  const respuestas = {
    1: 7,  
    2: 3,   
    3: 0,
    4: 127,
    5: 25,
    6: 49
    // Puedes agregar más claves según tus operaciones
  };

  let colorActivo = null;

  // Verifica si la respuesta es correcta y desbloquea el color
  $("input").on("input", function() {
    const color = $(this).data("color");
    const valor = parseInt($(this).val());

    if (valor === respuestas[color]) {
      const $boton = $(`.color[data-color='${color}']`);
      $boton.prop("disabled", false);
      $boton.addClass("unlocked");
    }
  });

  // Selecciona color activo
  $(".color").on("click", function() {
    colorActivo = $(this).data("color");
  });

  // Pintar píxeles si el color es correcto
  $("#pixel-grid").on("click", ".pixel", function() {
    const requerido = $(this).data("num");
    if (colorActivo == requerido) {
      const $colorBtn = $(`.color[data-color='${colorActivo}']`);
      const colorCode = $colorBtn.css("background-color");

      $(this).css("background-color", colorCode);
      $(this).addClass("coloreado");
      $(this).text(""); // elimina número

      verificarCompletado(); //
    }
    });

    function verificarCompletado() {
        const total = $(".pixel").not("[data-num='0']").length;
        const coloreados = $(".pixel.coloreado").length;

        if (coloreados === total) {
        setTimeout(() => {
            alert("¡Muy bien! Has completado el dibujo.");
            window.location.href = "../Tablero_Alumno/tablero_alumno.html"; 
        }, 100);
        }
    }
});


