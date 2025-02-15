import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:5000';
  private aliasEmpresa = 'castleclothing.mp'

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
  enviarCorreo(email: string, producto: any, cantidad: number, nombre: string, direccion: string, celular: string): Observable<any> {
    const body = {
        email: email,
        producto: producto,
        cantidad: cantidad,
        alias: this.aliasEmpresa,
        nombre: nombre,
        direccion: direccion,
        celular: celular 
    };

    return this.http.post(`${this.apiUrl}/enviar-correo`, body);
}
}
