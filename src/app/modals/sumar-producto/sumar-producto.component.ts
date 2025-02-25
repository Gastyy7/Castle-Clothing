import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/service/productos.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sumar-producto',
  templateUrl: './sumar-producto.component.html',
  styleUrls: ['./sumar-producto.component.scss'],
})
export class SumarProductoComponent {
  @Output() productoAgregado = new EventEmitter<void>();
  productoForm: FormGroup;

  toastMessage: string = '';
  toastClass: string = '';

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    public activeModal: NgbActiveModal
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imagen: [null, Validators.required],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productoForm.patchValue({
        imagen: file,
      });
    }
  }

  onSubmit() {
    if (this.productoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.productoForm.get('nombre')?.value);
      formData.append('descripcion', this.productoForm.get('descripcion')?.value);
      formData.append('precio', this.productoForm.get('precio')?.value);
      formData.append('imagen', this.productoForm.get('imagen')?.value);

      this.productosService.agregarProducto(formData).subscribe(
        (response) => {
          this.productoAgregado.emit();
          this.toastMessage = 'El producto fue agregado exitosamente.';
          this.toastClass = 'toast-success';
          setTimeout(() => {
            this.activeModal.close(); 
          }, 2000); 
        },
        (error) => {
          console.error('Error al agregar producto:', error);
          this.toastMessage = 'Error al agregar producto.';
          this.toastClass = 'toast-error';
          setTimeout(() => {
            this.activeModal.close();
          }, 2000); 

        }
      );
    }
  }
}