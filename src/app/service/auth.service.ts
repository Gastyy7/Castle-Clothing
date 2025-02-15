import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inicializa el estado en función de si hay un token en localStorage
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor() {}

  /**
   * Realiza el login (usuario hardcodeado en este ejemplo)
   */
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      // Guarda un token ficticio (o cualquier dato que indique que el usuario está logueado)
      localStorage.setItem('token', 'algún-token-falso');
      this.loggedInSubject.next(true);
      return true;
    }
    return false;
  }

  /**
   * Realiza el logout
   */
  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
  }

  /**
   * Devuelve el estado de autenticación como Observable
   */
  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
