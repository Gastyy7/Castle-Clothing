import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss'],
})
export class EliminarProductoComponent {
  @Input() producto: any;  // Recibe el producto a eliminar
  @Output() productoEliminado = new EventEmitter<void>();

  toastMessage: string = '';
  toastClass: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private productosService: ProductosService
  ) {}

  eliminarProducto() {
    this.productosService.eliminarProducto(this.producto.id).subscribe(
      (response) => {
        this.productoEliminado.emit();  // Emitir evento para actualizar la lista
        this.toastMessage = 'El producto fue eliminado exitosamente.';
        this.toastClass = 'toast-success';
        setTimeout(() => {
          this.activeModal.close(); 
        }, 3000); 
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
        this.toastMessage = 'Error al eliminar producto.';
        this.toastClass = 'toast-error';
        setTimeout(() => {
          this.activeModal.close();
        }, 3000); 
      }
    );
  }
}
