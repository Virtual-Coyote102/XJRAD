<?php
include 'conexion.php'; // Asegúrate de que la ruta sea correcta
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
$nombre = $_POST['nombre'];
$usuario = $_POST['usuario'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // campo sin tilde
$sql = "INSERT INTO registro_alumno (nombre, usuario, contrasena) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nombre, $usuario, $contrasena);
if ($stmt->execute()) {
    echo "Registro exitoso.";
} else {
    echo "Error al registrar: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>
