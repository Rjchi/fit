-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2023 a las 08:17:38
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `caso_23`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Horario` varchar(255) NOT NULL,
  `Descripcion` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`Id`, `Nombre`, `Horario`, `Descripcion`) VALUES
(1, 'Spinning', 'Los Jueves', 'Clase grupal que combina diferentes ritmos musicales con el fin de\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\nmejorar la coordinación y la expresión cor'),
(2, 'Body Combat y Body Attack', 'Los Viernes', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(3, 'Body Pump', 'Los Martes', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(4, 'Pilates', 'Los Miercoles', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(5, 'GAP', 'Los Lunes', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(6, 'Zumba', 'Los Sabados', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(7, 'Xcore', 'Los Lunes en la mañana', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(8, 'Body Pumper', 'Los Jueves en la tarde', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(9, 'CrossFit', 'Los Viernes en la noche', 'Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y\r\nayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de\r\nmejorar la coordinación y la expresión cor'),
(10, 'Cinta de Correr', 'Lunes en la Tarde', 'Clase grupal que combina diferentes ritmos musicales con el fin de mejorar la coordinación y la expresión corporal. Fortalece el trabajo cardiovascular y ayuda a reducir el porcentaje de grasa.Clase grupal que combina diferentes ritmos musicales con el fin de mejorar la coordinación y la expresión corporal. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(80) NOT NULL,
  `CorreoElectronico` varchar(50) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `Admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`Id`, `Nombre`, `Apellido`, `CorreoElectronico`, `contrasenia`, `Admin`) VALUES
(1, 'Rodolfo', 'Jimenez Riatiba', 'rodolfo@gmail.com', 'rodolfo', 0),
(2, 'Ana', 'Osoria Jaramillo', 'ana@gmail.com', 'ana', 0),
(3, 'Laura', 'Osa Sosa', 'Laura@gmail.com', 'laura', 0),
(4, 'Pedro', 'Catillo Riatiba', 'pedro@gmail.com', 'pedro', 0),
(5, 'Camilo', 'Ochoa Perea', 'camilo@gmail.com', 'camilo', 0),
(6, 'Alberto', 'Castrillon Riatiba', 'alberto@gmail.com', 'alberto', 0),
(7, 'Maria', 'Arcila Alzate', 'maria@gmail.com', 'maria', 0),
(22, 'test', 'test test2', 'TestDos@gmail.com', 'test', 1),
(40, 'admin', 'admin admin', 'admin@gmail.com', 'admin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripcionclase`
--

CREATE TABLE `inscripcionclase` (
  `Id` int(11) NOT NULL,
  `MembresiaId` int(11) NOT NULL,
  `ClaseId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inscripcionclase`
--

INSERT INTO `inscripcionclase` (`Id`, `MembresiaId`, `ClaseId`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 7, 5),
(6, 1, 6),
(7, 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia`
--

CREATE TABLE `membresia` (
  `Id` int(11) NOT NULL,
  `ClienteId` int(11) NOT NULL,
  `PlanMembresiaId` int(11) NOT NULL,
  `FechaInicio` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `membresia`
--

INSERT INTO `membresia` (`Id`, `ClienteId`, `PlanMembresiaId`, `FechaInicio`) VALUES
(1, 1, 3, '2023-06-23'),
(2, 2, 1, '2023-06-23'),
(3, 3, 2, '2023-11-12'),
(4, 4, 4, '2023-05-21'),
(5, 5, 5, '2023-02-17'),
(6, 6, 4, '2023-04-19'),
(7, 22, 1, '2023-06-23'),
(10, 7, 4, '2023-06-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planmembresia`
--

CREATE TABLE `planmembresia` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Duracion` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `planmembresia`
--

INSERT INTO `planmembresia` (`Id`, `Nombre`, `Duracion`) VALUES
(1, 'Plan Black', 12),
(2, 'Plan Smart', 24),
(3, 'Plan Black Sin Permanencia', 6),
(4, 'Plan Superglúteo', 12),
(5, 'Plan Beat training', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `inscripcionclase`
--
ALTER TABLE `inscripcionclase`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `MembresiaId` (`MembresiaId`),
  ADD KEY `ClaseId` (`ClaseId`);

--
-- Indices de la tabla `membresia`
--
ALTER TABLE `membresia`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `ClienteId` (`ClienteId`),
  ADD KEY `PlanMembresiaId` (`PlanMembresiaId`);

--
-- Indices de la tabla `planmembresia`
--
ALTER TABLE `planmembresia`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clase`
--
ALTER TABLE `clase`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `inscripcionclase`
--
ALTER TABLE `inscripcionclase`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `membresia`
--
ALTER TABLE `membresia`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `planmembresia`
--
ALTER TABLE `planmembresia`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inscripcionclase`
--
ALTER TABLE `inscripcionclase`
  ADD CONSTRAINT `inscripcionclase_ibfk_1` FOREIGN KEY (`MembresiaId`) REFERENCES `membresia` (`Id`),
  ADD CONSTRAINT `inscripcionclase_ibfk_2` FOREIGN KEY (`ClaseId`) REFERENCES `clase` (`Id`);

--
-- Filtros para la tabla `membresia`
--
ALTER TABLE `membresia`
  ADD CONSTRAINT `membresia_ibfk_1` FOREIGN KEY (`ClienteId`) REFERENCES `cliente` (`Id`),
  ADD CONSTRAINT `membresia_ibfk_2` FOREIGN KEY (`PlanMembresiaId`) REFERENCES `planmembresia` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
