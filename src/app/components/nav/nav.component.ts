import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isScrolled = false;
  totalItems: number = 0;
  ngOnInit() {
    this.totalItems = this.obtenerTotalDelCarrito();
  }


  obtenerTotalDelCarrito(): number {
    // Lógica ficticia para el ejemplo; actualízalo con tu lógica real de carrito
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    return carrito.length;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Cambia a `true` si scroll > 50px
  }
}
