import React, { useEffect, useState } from "react";
import TareaService from '../Service/TareaService'
import { Link } from "react-router-dom";

export const ListTareasComponent = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        TareaService.getAllTareas().then(response => {
            setTareas(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">Listado de Tareas</h2>
            <Link to='/add-tareas' className="btn btn-primary mb-2">Agregar Tarea</Link>
            <table className="table table-border table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nombre Tarea</th>
                    <th>Prioridad</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                    <th>Duración</th>
                </thead>
                <tbody>
                    {
                        tareas.map(
                            tarea =>
                                <tr key={tarea.id}>
                                    <td>{tarea.id}</td>
                                    <td>{tarea.nom_tarea}</td>
                                    <td>{tarea.prioridad}</td>
                                    <td>{tarea.fecha}</td>
                                    <td>{tarea.estado}</td>
                                    <td>{tarea.descripcion}</td>
                                    <td>{tarea.duracion}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTareasComponent;