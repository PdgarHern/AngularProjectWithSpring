import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/modelos/empleados';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'applications/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  endpoint: string = "http://localhost:8080/empleados";

  constructor(private httpClient: HttpClient) { }

  getEmpleados(): Observable <Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.endpoint);
  }

}
