import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/service/productos.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent {
  @Input() producto: any; // Recibe el producto a editar
  @Output() productoEditado = new EventEmitter<void>();
  productoForm: FormGroup;
  imagenSeleccionada: File | null = null;

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    public activeModal: NgbActiveModal
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imagen: [null],
    });
  }

  ngOnInit() {
    // Rellena el formulario con los datos del producto
    if (this.producto) {
      this.productoForm.patchValue({
        nombre: this.producto.nombre,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
      });
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imagenSeleccionada = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.productoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.productoForm.get('nombre')?.value);
      formData.append('descripcion', this.productoForm.get('descripcion')?.value);
      formData.append('precio', this.productoForm.get('precio')?.value);

      if (this.imagenSeleccionada) {
        formData.append('imagen', this.imagenSeleccionada);
      }

      this.productosService.editarProducto(this.producto.id, formData).subscribe(
        (response) => {
          this.productoEditado.emit();
          this.activeModal.close();
          alert('Producto editado correctamente');
        },
        (error) => {
          console.error('Error al editar producto:', error);
          alert('Error al editar producto');
        }
      );
    }
  }
}
