function toggleActividades() {
  const opciones = document.getElementById('actividadesOpciones');
  if (opciones.style.display === 'block') {
    opciones.style.display = 'none';
  } else {
    opciones.style.display = 'block';
  }
}