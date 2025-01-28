import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  productos = [
    {
      nombre: 'Conjunto Mood',
      imagen: 'https://placekittens.com/200/301',
      precio: 4990,
    },
    {
      nombre: 'Conjunto Gray',
      imagen: 'https://placekittens.com/200/302',
      precio: 5190,
    },
    {
      nombre: 'Conjunto Fly',
      imagen: 'https://placekittens.com/200/303',
      precio: 2699,
    },
    {
      nombre: 'Conjunto Violet',
      imagen: 'https://placekittens.com/200/304',
      precio: 4499,
    },
    {
      nombre: 'Conjunto Rose',
      imagen: 'https://placekittens.com/200/305',
      precio: 3990,
    },
    {
      nombre: 'Conjunto Mary',
      imagen: 'https://placekittens.com/200/306',
      precio: 1990,
    },
  ];
}
