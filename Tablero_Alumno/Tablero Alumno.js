function abrirPopup(idx) {
  if(idx === "registroClase")
  {
    document.getElementById("registroClase").style.display = "flex";
  }
  else if (idx === "cambioDatos")
  {
    document.getElementById("cambioDatos").style.display = "flex";
  }
}

function cerrarPopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";

  // Limpieza según el pop-up
  if (id === "registroClase") {
    document.getElementById("codigoClase").value = "";
  } else if (id === "cambioDatos") {
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevaClave").value = "";
  }
}