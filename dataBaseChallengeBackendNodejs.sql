CREATE DATABASE  IF NOT EXISTS `backendchallengealkemy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `backendchallengealkemy`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: backendchallengealkemy
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `character_movie`
--

DROP TABLE IF EXISTS `character_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `character_movie` (
  `idcharacter_movie` int NOT NULL AUTO_INCREMENT,
  `character_id` int unsigned NOT NULL,
  `movie_id` int unsigned NOT NULL,
  PRIMARY KEY (`idcharacter_movie`),
  CONSTRAINT `character_movie_character_id_foreign` FOREIGN KEY (`idcharacter_movie`) REFERENCES `characters` (`idcharacter`),
  CONSTRAINT `character_movie_movie_id_foreign` FOREIGN KEY (`idcharacter_movie`) REFERENCES `movies` (`idmovies`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character_movie`
--

LOCK TABLES `character_movie` WRITE;
/*!40000 ALTER TABLE `character_movie` DISABLE KEYS */;
/*!40000 ALTER TABLE `character_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `idcharacter` int NOT NULL AUTO_INCREMENT,
  `image` varchar(250) NOT NULL,
  `name` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `weight` int NOT NULL,
  `history` varchar(500) NOT NULL,
  `movies_associate` varchar(200) NOT NULL,
  PRIMARY KEY (`idcharacter`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'vcfgffffffffffff','Bella',18,50,'Bella is the prisioner of the Beast','The Beauty and the Beast'),(2,'efrtryr','Jazmin',18,45,'Jazmin is the Daughter of the King','Alladin'),(3,'wregtrhyt','Sally',25,30,'Sally is the girlfriend of Jack','The Nigthmare Before Christmas'),(4,'wghtyjyj','Nala',10,55,'Nala is the friend of Simba','The Lion King'),(5,'thgnjhgjh','Pocahontas',18,50,'Pocahontas is a native girl','Pocahontas');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `idgenres` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `image` varchar(250) NOT NULL,
  `movies_associate` varchar(250) NOT NULL,
  PRIMARY KEY (`idgenres`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Action','xxcdsfse','The Lion King'),(2,'Romance','cdfgdg','The Beauty and the Beast'),(3,'Fantasy','ereytyhsd','Alladin'),(4,'Terror','zxcsdfsd','The Nightmare Before Christmas'),(5,'History','assefer','Pocahontas');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `idmovies` int NOT NULL AUTO_INCREMENT,
  `image` varchar(250) NOT NULL,
  `title` varchar(100) NOT NULL,
  `creationDate` datetime NOT NULL,
  `ranking` int NOT NULL,
  `character_associate` varchar(100) NOT NULL,
  PRIMARY KEY (`idmovies`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'vfsas','The beauty and the beast','1991-09-19 00:00:00',5,'Bella, Beast '),(2,'sdcvfgg','Aladdin','1992-08-19 00:00:00',5,'Aladdin, Jazmin'),(3,'sadkghdfkj','The Nightmare Before Christmas','1993-09-29 00:00:00',5,'Jack, Sally'),(4,'rfgchbvbn','The Lion King','1994-06-24 00:00:00',5,'Simba, Nala'),(5,'bjhgkhjhf','Pocahontas','1995-04-27 00:00:00',5,'Pocahontas, Jhon Smith ');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-27  2:08:47
