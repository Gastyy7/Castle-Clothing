import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SumarProductoComponent } from './modals/sumar-producto/sumar-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EliminarProductoComponent } from './modals/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './modals/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './modals/detalle-producto/detalle-producto.component';
import { FormCompraComponent } from './modals/form-compra/form-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SumarProductoComponent,
    EliminarProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
    FormCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule // Agregado en la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }