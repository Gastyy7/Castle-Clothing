import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleProductoComponent } from 'src/app/modals/detalle-producto/detalle-producto.component';
import { ProductosService } from 'src/app/service/productos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: any[] = []; 
  productosFiltrados: any[] = []; 
  terminoBusqueda: string = '';
  isLoggedIn: boolean = false;

  constructor (
    private productosService: ProductosService,
    private modalService: NgbModal
  ) {}
  

  ngOnInit(): void {
    this.obtenerProductos();
    window.scrollTo(0, 0);
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

    abrirModalDetalleProducto(producto: any) {
      const modalRef = this.modalService.open(DetalleProductoComponent, { size: 'xl' });
      modalRef.componentInstance.producto = producto;
    }

}
