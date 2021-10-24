package org.pedro.dad.entity.dao;

import org.pedro.dad.entity.models.Empleados;
import org.springframework.data.repository.CrudRepository;

public interface IEmpleadoDao extends CrudRepository<Empleados, Long> {

}
