import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { Empleado } from 'src/app/modelos/empleados';
import { EmpleadosServiceService } from 'src/app/shared/services/empleados-service.service';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  public empleados: Array<Empleado> = [];

  constructor(private empleadoService: EmpleadosServiceService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe((x) => {
      try {
        this.loadInfo();
      } catch (error) {
        window.location.reload();
      }
      
    })
  }

  ngOnInit(): void {
    
  }

  loadInfo() {
    this.empleadoService.getEmpleados().subscribe((e: Array<Empleado>) => {
      this.empleados = e;
    })
  }

  

}
