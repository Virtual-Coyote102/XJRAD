<?php
include 'conexion.php';

$correo_maestro = "laura27@outlook.com";

$sql = "SELECT nombre, correo, contrasena FROM registro_maestro WHERE correo = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $correo_maestro);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado && $resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    $nombre = $row['nombre'];
    $correo = $row['correo'];
    $contrasena = $row['contrasena'];
} else {
    $nombre = "";
    $correo = "";
    $contrasena = "";
}
$stmt->close();
$conn->close();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tablero Maestro</title>
    <link rel="stylesheet" href="../estilos.css">
</head>
<body class="math-bg">
    <div class="container">
        <div class="seccion">
            <div class="seccion-header seccion-naranja">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>Tablero Maestro</h2>
                    <a href="../Inicio/inicio.html" style="color: white; text-decoration: none;">✖</a>
                </div>
            </div>
            <div style="padding: 2rem;">
                <form action="editar_datos.php" method="POST">
                    <label>Nombre
                        <input type="text" class="datos" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>" required>
                    </label>
                    <label>Correo electrónico
                        <input type="email" class="datos" name="correo" value="<?php echo htmlspecialchars($correo); ?>" required>
                    </label>
                    <label>Contraseña
                        <input type="password" class="datos" name="contrasena" value="<?php echo htmlspecialchars($contrasena); ?>" required>
                    </label>

                    <br><br>
                    <button type="submit" class="boton blanco">Cambiar Datos Personales</button>
                    <a href="../Clases_Alumno/Clases_Alumno.html" class="boton blanco">Administrar Clases</a>
                    <a href="../Lista_Alumnos/Lista_Alumnos.html" class="boton blanco">Ver Alumnos</a>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
