function abrirPopup() {
  document.getElementById("cambioDatos").style.display = "flex";
}

function cerrarPopup() {
  const popup = document.getElementById("cambioDatos");
  if (popup) popup.style.display = "none";

  // Limpiar los inputs
  document.getElementById("nuevoNombre").value = "";
  document.getElementById("nuevaClave").value = "";
  document.getElementById("nuevoCorreo").value = "";
}