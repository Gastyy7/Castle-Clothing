import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  agregarProducto(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/productos`, formData);
  }

  editarProducto(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/productos/${id}`, formData);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/productos/${id}`);
  }
}
