import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-btn-buscar',
  templateUrl: './btn-buscar.component.html',
  styleUrls: ['./btn-buscar.component.scss']
})
export class BtnBuscarComponent implements OnInit {

  public producto: Producto;

  constructor(private router: Router) {
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(['/personal-zone/', this.producto.nombre]).then(() => {window.location.reload()});
  }

}
