import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  toastMessage: string = '';
  toastClass: string = '';

  constructor(
    private router: Router,
    private authService: AuthService 
  ) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.toastMessage = '¡Ingreso exitoso!';
      this.toastClass = 'toast-success';

      setTimeout(() => {
        this.router.navigate(['/productos']);
      }, 2000); 
    } else {
      this.toastMessage = 'Usuario o contraseña incorrectos';
      this.toastClass = 'toast-error';
    }

    setTimeout(() => {
      this.toastMessage = '';
    }, 2000);
  }
}
