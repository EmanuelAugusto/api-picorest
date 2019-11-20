-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Nov-2019 às 10:55
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `picorestdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `cargaHoraria` varchar(255) DEFAULT NULL,
  `dataInicio` datetime DEFAULT NULL,
  `dataConclusao` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcaocursos`
--

CREATE TABLE `funcaocursos` (
  `id` int(11) NOT NULL,
  `funcaoId` int(11) NOT NULL,
  `cursoId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcaos`
--

CREATE TABLE `funcaos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionariocursos`
--

CREATE TABLE `funcionariocursos` (
  `id` int(11) NOT NULL,
  `comprovante` varchar(255) DEFAULT NULL,
  `cargaHoraria` varchar(255) DEFAULT NULL,
  `dataInicio` datetime DEFAULT NULL,
  `dataConclusao` datetime DEFAULT NULL,
  `funcionarioId` int(11) NOT NULL,
  `cursoId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `id` int(11) NOT NULL,
  `matricula` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `ctps` varchar(255) DEFAULT NULL,
  `admissao` datetime DEFAULT NULL,
  `demissao` datetime DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `uf` varchar(255) DEFAULT NULL,
  `usuarioId` int(11) NOT NULL,
  `setorId` int(11) NOT NULL,
  `funcaoId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20191022194454-create-usuario.js'),
('20191022194505-create-setor.js'),
('20191022194519-create-funcao.js'),
('20191022194532-create-curso.js'),
('20191022194556-create-funcao-curso.js'),
('20191022194639-create-funcionario.js'),
('20191022194705-create-funcionario-curso.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `setors`
--

CREATE TABLE `setors` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passWorld` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `funcaocursos`
--
ALTER TABLE `funcaocursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `funcaoId` (`funcaoId`),
  ADD KEY `cursoId` (`cursoId`);

--
-- Índices para tabela `funcaos`
--
ALTER TABLE `funcaos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `funcionariocursos`
--
ALTER TABLE `funcionariocursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `funcionarioId` (`funcionarioId`),
  ADD KEY `cursoId` (`cursoId`);

--
-- Índices para tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `setorId` (`setorId`),
  ADD KEY `funcaoId` (`funcaoId`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `setors`
--
ALTER TABLE `setors`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `funcaocursos`
--
ALTER TABLE `funcaocursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `funcaos`
--
ALTER TABLE `funcaos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `funcionariocursos`
--
ALTER TABLE `funcionariocursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `setors`
--
ALTER TABLE `setors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `funcaocursos`
--
ALTER TABLE `funcaocursos`
  ADD CONSTRAINT `funcaocursos_ibfk_1` FOREIGN KEY (`funcaoId`) REFERENCES `funcaos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `funcaocursos_ibfk_2` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `funcionariocursos`
--
ALTER TABLE `funcionariocursos`
  ADD CONSTRAINT `funcionariocursos_ibfk_1` FOREIGN KEY (`funcionarioId`) REFERENCES `funcionarios` (`id`),
  ADD CONSTRAINT `funcionariocursos_ibfk_2` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`);

--
-- Limitadores para a tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD CONSTRAINT `funcionarios_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `funcionarios_ibfk_2` FOREIGN KEY (`setorId`) REFERENCES `setors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `funcionarios_ibfk_3` FOREIGN KEY (`funcaoId`) REFERENCES `funcaos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
