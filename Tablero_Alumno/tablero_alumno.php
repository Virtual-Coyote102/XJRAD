<?php
include 'conexion.php';
$nombre = "";
$contrasena = "";
$mensaje = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre_alumno = trim($_POST['nombre_alumno']);
    $contrasena_ingresada = trim($_POST['contrasena']);
    if (!empty($nombre_alumno) && !empty($contrasena_ingresada)) {
        $sql = "SELECT nombre, contrasena FROM registro_alumno WHERE nombre = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $nombre_alumno);
        $stmt->execute();
        $resultado = $stmt->get_result();
        if ($resultado && $resultado->num_rows > 0) {
            $row = $resultado->fetch_assoc();
            if (password_verify($contrasena_ingresada, $row['contrasena'])) {
                $nombre = $row['nombre'];
                $contrasena = $contrasena_ingresada;
            } else {
                $mensaje = "Contraseña incorrecta.";
            }
        } else {
            $mensaje = "Alumno no encontrado.";
        }
        $stmt->close();
    } else {
        $mensaje = "Por favor, llena todos los campos.";
    }
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tablero Alumno</title>
    <link rel="stylesheet" href="../estilos.css">
</head>
<body class="math-bg">
    <div class="container">
        <div class="seccion">
            <div class="seccion-header seccion-morado">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>Tablero Alumno</h2>
                    <a href="../Inicio/inicio.html" style="color: white; text-decoration: none;">✖</a>
                </div>
            </div>
            <div style="padding: 2rem;">
                <?php if (empty($nombre)): ?>
                    <?php if (!empty($mensaje)) echo "<p style='color:red;'>$mensaje</p>"; ?>
                    <form method="post">
                        <label>Nombre
                            <input type="text" class="datos" name="nombre_alumno" autocomplete="off" required>
                        </label>
                        <br><br>
                        <label>Contraseña
                            <input type="password" class="datos" name="contrasena" autocomplete="off" required>
                        </label>
                        <br><br>
                        <button type="submit" class="boton indigo">Ingresar</button>
                    </form>
                <?php else: ?>
                    <form method="post" action="#">
                        <label>Nombre
                            <input type="text" class="datos" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>" readonly>
                        </label>
                        <br><br>
                        <label>Contraseña
                            <input type="password" class="datos" name="contrasena" value="<?php echo htmlspecialchars($contrasena); ?>" readonly>
                        </label>
                    </form>
                    <br><br>
                    <a href="editar_datos.php?nombre=<?php echo urlencode($nombre); ?>" class="boton indigo">Cambiar Datos Personales</a>
                    <button type="button" class="boton indigo" onclick="toggleActividades()">Actividades</button>
                    <div id="actividadesOpciones" style="display: none; margin-top: 10px;">
                        <a href="../Actividades/Actividad 1/Actividad 1.html" class="boton indigo">Actividad 1</a>
                        <a href="../Actividades/Actividad 2/Actividad 2.html" class="boton indigo">Actividad 2</a>
                        <a href="../Actividades/Actividad 3/Actividad 3.html" class="boton indigo">Actividad 3</a>
                    </div>
                    <script>
                    function toggleActividades() {
                        const div = document.getElementById('actividadesOpciones');
                        div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
                    }
                    </script>
                    <a href="../" class="boton indigo">Registrar Clases</a>
                    <a href="../Clases_Alumno/Clases_Alumno.html" class="boton indigo">Ver Clases</a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>