import axios from "axios";

const TAREA_BASE_REST_API_URL = "http://localhost:8080/api/v1/tareas"

class TareaService {

    getAllTareas() {
        return axios.get(TAREA_BASE_REST_API_URL);
    }

}
export default new TareaService();
