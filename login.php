<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $usuario = trim($_POST['usuario']);
    $contrasena = trim($_POST['contrasena']);
    $maestro = isset($_POST['maestro']) && $_POST['maestro'] === 'on';

    // Determinar tabla y campo según el tipo de usuario
    $tabla = $maestro ? 'registro_maestro' : 'registro_alumno';
    $campo_usuario = $maestro ? 'correo' : 'usuario';

    // Preparar y ejecutar consulta
    $sql = "SELECT * FROM $tabla WHERE $campo_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $fila = $resultado->fetch_assoc();

        // Verificar contraseña
        if (isset($fila['contrasena']) && password_verify($contrasena, $fila['contrasena'])) {
            // Login exitoso
            echo "Inicio de sesión exitoso. Bienvenido, " . htmlspecialchars($fila[$campo_usuario]) . ".";
            // Aquí podrías iniciar una sesión, redirigir, etc.
        } else {
            // Contraseña incorrecta
            echo "❌ Contraseña incorrecta.";
        }
    } else {
        // Usuario no encontrado
        echo "❌ Usuario no encontrado.";
    }

    $stmt->close();
}
?>
