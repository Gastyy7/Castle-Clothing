import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
