package org.pedro.dad.controllers;

import java.util.List;

import org.pedro.dad.entity.models.Productos;
import org.pedro.dad.entity.services.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductoController {
	
	@Autowired
	IProductoService productoService;
	
	@GetMapping("/productos")
	List<Productos> getAll() {
		return productoService.getAll();
	}

}
