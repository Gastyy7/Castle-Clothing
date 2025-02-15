import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
    selector: 'app-form-compra',
    templateUrl: './form-compra.component.html',
    styleUrls: ['./form-compra.component.scss']
})
export class FormCompraComponent {
  toastMessage: string = '';
  toastClass: string = '';
    @Input() producto: any; // Recibe el producto desde el componente padre
    nombre: string = '';
    email: string = '';
    direccion: string = '';
    celular: string = '';

    constructor(
        public activeModal: NgbActiveModal,
        private productosService: ProductosService // Inyecta el servicio
    ) {}

    // Cierra el modal
    cerrarModal() {
        this.activeModal.dismiss('Cerrado');
    }

    // Envía los datos al backend
    onSubmit() {
      const cantidad = 1; // Puedes ajustar la cantidad según tu lógica
  
      // Usa el servicio para enviar el correo
      this.productosService.enviarCorreo(
          this.email, 
          this.producto, 
          cantidad, 
          this.nombre, 
          this.direccion, 
          this.celular
      ).subscribe(
          response => {
              console.log('Correo enviado correctamente', response);
              this.activeModal.close('Compra confirmada');
              this.toastMessage = '¡Muchas gracias por elegirnos!';
              this.toastClass = 'toast-success';
          },
          error => {
              console.error('Error al enviar el correo', error);
              this.toastMessage = 'Error al intentar realizar la compra.';
              this.toastClass = 'toast-error';
          }
      );
  }
}