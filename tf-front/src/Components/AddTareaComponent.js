import React, { useState } from "react";

export const AddTareaComponent = () => {

    const [nombre, setNombreTarea] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [duracion, setDuracion] = useState();
    const [estado, setEstado] = useState();
    const [fecha, setFecha] = useState('');
    const [prioridad, setPrioridad] = useState('');

    const saveTarea = (e) => {
        e.preventDefault();
        const tarea = { nombre, descripcion, duracion, estado, fecha, prioridad }
        console.log(tarea)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center"> Registro de Tareas</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nombre Tarea</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre de la Tarea"
                                        name="nom_tarea"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombreTarea(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Descripción</label>
                                    <textarea type="text" placeholder="Descripción Tarea"
                                        name="descripcion"
                                        className="form-control"
                                        value={descripcion}
                                        rows="3"
                                        onChange={(e) => setDescripcion(e.target.value)}>
                                    </textarea>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Duración Tarea</label>
                                    <input
                                        type="number"
                                        placeholder="tiempo en Minutos"
                                        name="duracion"
                                        className="form-control"
                                        value={duracion}
                                        onChange={(e) => setDuracion(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Estado Tarea</label>
                                    <select name="nom_tarea" className="form-control">
                                        <option value={1}>Iniciada</option>
                                        <option value={2}>En Proceso</option>
                                        <option value={3}>Terminada</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Fecha Tarea</label>
                                    <input
                                        type="date"
                                        name="fecha"
                                        className="form-control"
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Estado Tarea</label>
                                    <select name="nom_tarea" className="form-control">
                                        <option value={1}>Urgente</option>
                                        <option value={2}>Normal</option>
                                        <option value={3}>Bajo</option>
                                    </select>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveTarea(e)}>Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTareaComponent