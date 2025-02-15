import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCompraComponent } from '../form-compra/form-compra.component';

@Component({
    selector: 'app-detalle-producto',
    templateUrl: './detalle-producto.component.html',
    styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent {
    @Input() producto: any;

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

    comprarProducto() {
        // Abre el modal de form-compra
        const modalRef = this.modalService.open(FormCompraComponent, { size: 'lg' });
        // Pasa el producto al modal
        modalRef.componentInstance.producto = this.producto;
    }
}