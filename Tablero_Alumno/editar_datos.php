<?php
include 'conexion.php';
if (!isset($_GET['nombre']) || empty($_GET['nombre'])) {
    die("No se proporcionó el nombre del alumno.");
}
$nombre = $_GET['nombre'];
$sql = "SELECT nombre, usuario, contrasena FROM registro_alumno WHERE nombre = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nombre);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $alumno = $result->fetch_assoc();
} else {
    die("No se encontró el alumno.");
}
$stmt->close();
$conn->close();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Datos Alumno</title>
    <link rel="stylesheet" href="../estilos.css">
</head>
<body class="math-bg">
    <div class="container">
        <h2>Editar Datos del Alumno</h2>
        <form action="datos_personales.php" method="POST">
            <label>Nombre:
                <input type="text" name="nombre_nuevo" value="<?php echo htmlspecialchars($alumno['nombre']); ?>" required>
            </label><br><br>
            <label>Nombre de Usuario:
                <input type="text" name="usuario_nuevo" value="<?php echo htmlspecialchars($alumno['usuario']); ?>" required>
            </label><br><br>
            <label>Contraseña:
                <input type="password" name="contrasena" placeholder="Nueva contraseña (dejar vacío para no cambiar)">
            </label><br><br>
            <input type="hidden" name="nombre_original" value="<?php echo htmlspecialchars($alumno['nombre']); ?>">
            <button type="submit" class="boton indigo">Guardar Cambios</button>
        </form>
    </div>
</body>
</html>