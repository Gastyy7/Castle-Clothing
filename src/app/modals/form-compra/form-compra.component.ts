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

    @Input() producto: any; 
    nombre: string = '';
    email: string = '';
    direccion: string = '';
    celular: string = '';

    constructor(
        public activeModal: NgbActiveModal,
        private productosService: ProductosService 
    ) {}

    cerrarModal() {
        this.activeModal.dismiss('Cerrado');
    }

    onSubmit() {
      const cantidad = 1;
  
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
            this.toastMessage = '¡Compra exitosa!';
            this.toastClass = 'toast-success';
            setTimeout(() => {
            this.activeModal.close(); 
            }, 2000);
        },
        error => {
            console.error('Error al enviar el correo', error);
            this.toastMessage = 'Error en la compra.';
            this.toastClass = 'toast-error';
            setTimeout(() => {
            this.activeModal.close(); 
            }, 2000);
        }
      );
  }
}