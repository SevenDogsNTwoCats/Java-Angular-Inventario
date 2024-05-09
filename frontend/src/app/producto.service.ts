import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8080/api/v1/inventario-app/productos';

  constructor(private clienteHttp: HttpClient) {}

  obtenerProductosLista(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(`${this.urlBase}`);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.clienteHttp.post<Producto>(`${this.urlBase}`, producto);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id: number, producto: Producto): Observable<Producto> {
    console.log(producto);
    return this.clienteHttp.put<Producto>(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
