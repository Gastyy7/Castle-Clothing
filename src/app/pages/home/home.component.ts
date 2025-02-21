import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: any[] = []; // Lista completa de productos
  productosFiltrados: any[] = []; // Lista filtrada de productos
  terminoBusqueda: string = ''; // Término de búsqueda
  isLoggedIn: boolean = false;

  constructor (
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe(
      (data: any) => {
        this.productos = data;
        this.productosFiltrados = this.productos.slice(-4);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

}
