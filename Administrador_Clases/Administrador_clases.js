function toggleTabla(boton) {
  const contenedor = boton.closest('div'); 
  const tabla = contenedor.querySelector('.tablaAlumnos'); 

  if (tabla) {
    tabla.style.display = (tabla.style.display === 'none') ? 'block' : 'none';
  }
}