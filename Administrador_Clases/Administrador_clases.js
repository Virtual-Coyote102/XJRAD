function toggleTabla(boton) {
  const contenedor = boton.closest('div'); 
  const tabla = contenedor.querySelector('.tablaAlumnos'); 

  if (tabla) {
    tabla.style.display = (tabla.style.display === 'none') ? 'block' : 'none';
  }
}

function abrirPopup() {
  document.getElementById("crearClase").style.display = "flex";
}

function cerrarPopup() {
  const popup = document.getElementById("crearClase");
  if (popup) popup.style.display = "none";

  // Limpiar los inputs
  document.getElementById("nombreClase").value = "";
  document.getElementById("gradoClase").value = "";
}

function show_value(x) {
    $("#slider_value").text(x);
}

$(document).ready(function() {
    show_value($(".input").val()); // Mostrar el valor inicial al cargar
});