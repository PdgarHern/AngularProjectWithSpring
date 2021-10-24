package org.pedro.dad.entity.services;

import java.util.List;

import org.pedro.dad.entity.models.Empleados;

public interface IEmpleadoService {
	List<Empleados> getAll();
	void add(Empleados empleado);
	void delete(long id_empleado);
	void update(Empleados empleado, long id_empleado);

}
