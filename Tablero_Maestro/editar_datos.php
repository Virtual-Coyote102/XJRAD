<?php
include 'conexion.php';

// Asegurarse de que se reciben los datos por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (
        !isset($_POST['correo']) || empty($_POST['correo']) ||
        !isset($_POST['nombre']) || empty($_POST['nombre']) ||
        !isset($_POST['contrasena']) || empty($_POST['contrasena'])
    ) {
        die("Faltan datos necesarios para editar.");
    }

    $correo = $_POST['correo'];
    $nombre = $_POST['nombre'];
    $contrasena = $_POST['contrasena'];
} else {
    die("Acceso inválido.");
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Datos</title>
    <link rel="stylesheet" href="../estilos.css">
</head>
<body class="math-bg">
    <div class="container">
        <h2>Editar Datos del Maestro</h2>
        <form action="datos_personales.php" method="POST">
            <label>Nombre:
                <input type="text" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>" required>
            </label><br><br>
            <label>Correo electrónico:
                <input type="email" name="correo_nuevo" value="<?php echo htmlspecialchars($correo); ?>" required>
            </label><br><br>
            <label>Contraseña:
                <input type="password" name="contrasena" value="<?php echo htmlspecialchars($contrasena); ?>" required>
            </label><br><br>
            <input type="hidden" name="correo_original" value="<?php echo htmlspecialchars($correo); ?>">
            <button type="submit" class="boton azul">Guardar Cambios</button>
        </form>
    </div>
</body>
</html>
