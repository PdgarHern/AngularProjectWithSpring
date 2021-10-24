import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../modelos/producto';
import { ProductosServiceService } from '../shared/services/productos-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public search: any = '';
  public productos: Array<Producto> = [];

  constructor(private productoService: ProductosServiceService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo();
    })

  }

  ngOnInit(): void {
    console.log(window.location.pathname.split("/").pop()?.replace("%20", " ").replace("%20", " ").replace("%20", " "));
    this.search = window.location.pathname.split("/").pop()?.replace("%20", " ").replace("%20", " ").replace("%20", " ");
  }

  loadInfo() {
    this.productoService.getProductos().subscribe((p: Array<Producto>) => {
      this.productos = p;
    })
  }

}
