-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2025 a las 01:48:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `xjrad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_alumno`
--

CREATE TABLE `registro_alumno` (
  `nombre` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contrasena` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro_alumno`
--

INSERT INTO `registro_alumno` (`nombre`, `usuario`, `contrasena`) VALUES
('Abelardo', 'Abelardo', '$2y$10$hlThMtevesFt1Wf2CHZm/eWZh8ltplptCNbefxuI0xhqtomOZ8VEe'),
('juan', 'juan23', '$2y$10$OqnAwYuh/B7gbhO.k.HCKuBVD/4WQHDWPAieSAKEUMKQkD3LdAmRe'),
('kiara', 'kiara', '$2y$10$k.7A1lLNXlYEiXCszZJA4ON/5G43R0jcJm9I2IS83ewkyZuHCs6w2'),
('pepe', 'pepe_43', '$2y$10$Pcms50bnTIejuqFThbQ0reYn3tGjVSh2elbtUfPgal0sR/nPX7vfS'),
('emmanuel', 'martinez', '$2y$10$Y7RRd7e5Kxoi2VJPE/Nns.YfpPea0lA/BK.mRI01GX2bv9ntO2Dx.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_maestro`
--

CREATE TABLE `registro_maestro` (
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro_maestro`
--

INSERT INTO `registro_maestro` (`nombre`, `correo`, `contrasena`) VALUES
('Abelardo', 'rivord04@gmail.com', '$2y$10$.mHZa2rb31Mw3'),
('daniela', 'daniela04@gmail.com', '$2y$10$x3N1U1v87Vbn3'),
('juan', 'juan123@gmail', '$2y$10$/pLph5Ab63tNR'),
('laura elena', 'laura27@outlook', '$2y$10$BMmnIMbihVUglpCBNbbxCelDTGnxQPeHgWFDLWF6RnbjljH3qlj6C'),
('laura elena', 'laura27@outlook', '$2y$10$BMmnIMbihVUglpCBNbbxCelDTGnxQPeHgWFDLWF6RnbjljH3qlj6C'),
('maribel', 'maribel123@outlook', '$2y$10$YuXTZrVT4sPScEujVK3AveBupWdAWECI6rpUkN33jXeEKSVZLV6bG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
