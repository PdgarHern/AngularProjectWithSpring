package org.pedro.dad.entity.dao;

import org.pedro.dad.entity.models.Productos;
import org.springframework.data.repository.CrudRepository;

public interface IProductoDao extends CrudRepository<Productos, Long> {

}
