package org.pedro.dad.controllers;

import java.util.List;

import org.pedro.dad.entity.models.Empleados;
import org.pedro.dad.entity.services.IEmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmpleadoController {
	
	@Autowired
	IEmpleadoService empleadoService;
	
	@GetMapping("/empleados")
	List<Empleados> getAll() {
		return empleadoService.getAll();
	}
	
	@PostMapping("/empleados")
	void add(Empleados empleado) {
		empleadoService.add(empleado);
	}
	
	@DeleteMapping("/empleados/{id_empleado}")
	void delete(@PathVariable("id_empleado") long id_empleado) {
		empleadoService.delete(id_empleado);
	}
	
	@PutMapping("/empleados/{id_empleado}")
	void update(@PathVariable("id_empleado") long id_empleado, Empleados empleado) {
		empleadoService.update(empleado, id_empleado);
	}

}
