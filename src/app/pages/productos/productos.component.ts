import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ProductosService } from 'src/app/service/productos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SumarProductoComponent } from 'src/app/modals/sumar-producto/sumar-producto.component';
import { EditarProductoComponent } from 'src/app/modals/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from 'src/app/modals/eliminar-producto/eliminar-producto.component';
import { DetalleProductoComponent } from 'src/app/modals/detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; // Lista completa de productos
  productosFiltrados: any[] = []; // Lista filtrada de productos
  terminoBusqueda: string = ''; // Término de búsqueda
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private productosService: ProductosService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    window.scrollTo(0, 0);
    this.obtenerProductos();
  }

  // Obtener productos desde el backend
  obtenerProductos() {
    this.productosService.getProductos().subscribe(
      (data: any) => {
        this.productos = data;
        this.productosFiltrados = data; // Inicialmente, mostrar todos los productos
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  // Filtrar productos por nombre, precio o descripción
  filtrarProductos() {
    if (!this.terminoBusqueda) {
      this.productosFiltrados = this.productos; // Si no hay término de búsqueda, mostrar todos los productos
      return;
    }

    const termino = this.terminoBusqueda.toLowerCase();
    this.productosFiltrados = this.productos.filter((producto) => {
      return (
        producto.nombre.toLowerCase().includes(termino) || // Filtrar por nombre
        producto.precio.toString().includes(termino) || // Filtrar por precio
        producto.descripcion.toLowerCase().includes(termino) // Filtrar por descripción
      );
    });
  }

  // Métodos para abrir modales
  abrirModalAgregarProducto() {
    const modalRef = this.modalService.open(SumarProductoComponent);
    modalRef.componentInstance.productoAgregado.subscribe(() => {
      this.obtenerProductos();
    });
  }

  abrirModalEditarProducto(producto: any) {
    const modalRef = this.modalService.open(EditarProductoComponent);
    modalRef.componentInstance.producto = producto;
    modalRef.componentInstance.productoEditado.subscribe(() => {
      this.obtenerProductos();
    });
  }

  abrirModalEliminarProducto(producto: any) {
    const modalRef = this.modalService.open(EliminarProductoComponent);
    modalRef.componentInstance.producto = producto;
    modalRef.componentInstance.productoEliminado.subscribe(() => {
      this.obtenerProductos();
    });
  }

  abrirModalDetalleProducto(producto: any) {
    const modalRef = this.modalService.open(DetalleProductoComponent, { size: 'xl' });
    modalRef.componentInstance.producto = producto;
  }
}