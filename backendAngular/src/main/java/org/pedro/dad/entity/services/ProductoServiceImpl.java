package org.pedro.dad.entity.services;

import java.util.List;

import org.pedro.dad.entity.dao.IProductoDao;
import org.pedro.dad.entity.models.Productos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements IProductoService {
	
	@Autowired
	IProductoDao productoDao;

	@Override
	public List<Productos> getAll() {
		return (List<Productos>) productoDao.findAll();
	}

}
