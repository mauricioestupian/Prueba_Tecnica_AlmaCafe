package com.torrefactora.Controller;

import com.torrefactora.Repository.TareaRepository;
import com.torrefactora.exception.ResourseNotFoundException;
import com.torrefactora.modelo.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TareaController {

    @Autowired
    private TareaRepository tareaRepository;

    @GetMapping("/tareas")
    public List<Tarea> listarTareas(){
        return tareaRepository.findAll();
    }

    @PostMapping("/tareas")
    public Tarea guardarTarea(@RequestBody Tarea tarea){
        return tareaRepository.save(tarea);
    }

    @GetMapping("tareas/{id}")
    public ResponseEntity<Tarea> listarTareaPorId(@PathVariable Long id){
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundException("La tarea con ese ID no existe : " + id));
        return ResponseEntity.ok(tarea);
    }

    @PutMapping("/tareas/{id}")
    public ResponseEntity<Tarea> actualizarTarea(@PathVariable Long id,@RequestBody Tarea tareaRequest ){
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundException("La tarea con ese ID no existe : " + id));

        tarea.setNom_tarea(tareaRequest.getNom_tarea());
        tarea.setDescripcion(tareaRequest.getDescripcion());
        tarea.setDuracion(tareaRequest.getDuracion());
        tarea.setEstado(tareaRequest.getEstado());
        tarea.setFecha(tareaRequest.getFecha());

        Tarea tareaactualizada = tareaRepository.save(tarea);
        return ResponseEntity.ok(tareaactualizada);
    }

    @DeleteMapping("/tareas/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminartarea(@PathVariable long id){
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundException("La tarea con ese ID no existe : " + id));

        tareaRepository.delete(tarea);
        Map<String,Boolean> response = new HashMap<>();
        response.put("delete",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
