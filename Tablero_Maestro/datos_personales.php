<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = trim($_POST['nombre']);
    $correo_nuevo = trim($_POST['correo_nuevo']);
    $contrasena = $_POST['contrasena']; // Puede estar vacía
    $correo_original = trim($_POST['correo_original']);

    if (!empty($contrasena)) {
        $contrasena_hashed = password_hash($contrasena, PASSWORD_DEFAULT);
        $sql = "UPDATE registro_maestro SET nombre = ?, correo = ?, contrasena = ? WHERE correo = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $nombre, $correo_nuevo, $contrasena_hashed, $correo_original);
    } else {
        $sql = "UPDATE registro_maestro SET nombre = ?, correo = ? WHERE correo = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $nombre, $correo_nuevo, $correo_original);
    }

    if ($stmt->execute()) {
        echo "<script>
            alert('Datos actualizados correctamente.');
            window.location.href = 'tablero_maestro.php';
        </script>";
    } else {
        echo "Error al actualizar: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    die("Acceso inválido.");
}
?>