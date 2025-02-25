import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast-test',
  template: `<button (click)="showToast()">Mostrar Toast</button>`,
})
export class ToastTestComponent {
  constructor(private toastr: ToastrService) {}

  showToast() {
    this.toastr.success('Este es un mensaje de prueba', 'Exitoso', {
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
    });
  }
}
