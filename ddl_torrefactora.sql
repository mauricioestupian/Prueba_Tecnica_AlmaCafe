-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema torrefactora
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema torrefactora
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `torrefactora` DEFAULT CHARACTER SET utf8 ;
USE `torrefactora` ;

-- -----------------------------------------------------
-- Table `torrefactora`.`Tarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `torrefactora`.`Tarea` (
  `idTarea` INT NOT NULL,
  `NomTarea` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(150) NULL,
  `Duracion` SMALLINT(5) NULL,
  `Estado` TINYINT(3) NULL,
  PRIMARY KEY (`idTarea`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `torrefactora`.`Subtarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `torrefactora`.`Subtarea` (
  `idTarea` INT NOT NULL,
  `NomTarea` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(150) NULL,
  `Duracion` SMALLINT(5) NULL,
  `Estado` TINYINT(3) NULL,
  `Tarea_idTarea` INT NOT NULL,
  PRIMARY KEY (`idTarea`),
  INDEX `fk_Subtarea_Tarea_idx` (`Tarea_idTarea` ASC),
  CONSTRAINT `fk_Subtarea_Tarea`
    FOREIGN KEY (`Tarea_idTarea`)
    REFERENCES `torrefactora`.`Tarea` (`idTarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
