import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/producto';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'applications/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  endpoint: string = "http://localhost:8080/productos";

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable <Producto[]> {
    return this.httpClient.get<Producto[]>(this.endpoint);
  }
  
}
