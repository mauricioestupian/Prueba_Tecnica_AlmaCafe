package com.torrefactora.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "Tareas")

public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nom_tarea")
    private String nom_tarea;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "duracion")
    private long duracion;

    @Column(name = "estado")
    private String estado;

    @Column(name = "prioridad")
    private String prioridad;

    @Column(name = "fecha")
    private Date fecha;
}
