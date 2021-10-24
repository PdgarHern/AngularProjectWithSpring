package org.pedro.dad.entity.services;

import java.util.List;
import java.util.Optional;

import org.pedro.dad.entity.dao.IEmpleadoDao;
import org.pedro.dad.entity.models.Empleados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoServiceImpl implements IEmpleadoService {
	
	@Autowired
	IEmpleadoDao empleadoDao;

	@Override
	public List<Empleados> getAll() {
		return (List<Empleados>) empleadoDao.findAll();
	}

	@Override
	public void add(Empleados empleado) {
		empleadoDao.save(empleado);
		
	}

	@Override
	public void delete(long id_empleado) {
		empleadoDao.deleteById(id_empleado);
		
	}

	@Override
	public void update(Empleados empleado, long id_empleado) {
		empleadoDao.findById(id_empleado).ifPresent((x) -> {
			empleado.setId_empleado(id_empleado);
			empleadoDao.save(empleado);
		});
		
	}
	
	

}
