import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent {
  @Input() producto: any;

  constructor(public activeModal: NgbActiveModal) {}

  comprarProducto() {
    alert(`Has comprado ${this.producto.nombre} por ${this.producto.precio}`);
    this.activeModal.close();
  }
}