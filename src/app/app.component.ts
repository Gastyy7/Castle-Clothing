import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isProductsPage: boolean = false;
  title = 'castle-clothing';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (this.router.url.includes('/productos')) {
        this.isProductsPage = true;
      } else {
        this.isProductsPage = false;
      }
    });
  }
}
