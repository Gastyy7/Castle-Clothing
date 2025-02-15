import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isScrolled = false;
  totalItems: number = 0;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.totalItems = this.obtenerTotalDelCarrito();
    // Suscribirse al estado de autenticación
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  obtenerTotalDelCarrito(): number {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    return carrito.length;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  cerrarSesion() {
    this.authService.logout();
    // Después de cerrar sesión, redirige a la página de login (o donde prefieras)
    this.router.navigate(['/login']);
  }
}
