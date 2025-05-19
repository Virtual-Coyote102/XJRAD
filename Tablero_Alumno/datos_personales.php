<?php
include 'conexion.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre_nuevo = trim($_POST['nombre_nuevo']);
    $usuario_nuevo = trim($_POST['usuario_nuevo']);
    $contrasena = $_POST['contrasena'];
    $nombre_original = trim($_POST['nombre_original']);

    if (!empty($contrasena)) {
        $contrasena_hashed = password_hash($contrasena, PASSWORD_DEFAULT);
        $sql = "UPDATE registro_alumno
                    SET nombre = ?, usuario = ?, contrasena = ?
                    WHERE nombre = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $nombre_nuevo, $usuario_nuevo, $contrasena_hashed, $nombre_original);
    } else {
        $sql = "UPDATE registro_alumno
                    SET nombre = ?, usuario = ?
                    WHERE nombre = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $nombre_nuevo, $usuario_nuevo, $nombre_original);
    }

    if ($stmt->execute()) {
        echo "<script>
            alert('Datos actualizados correctamente.');
            window.location.href = 'tablero_alumno.php';
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