import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarProductoComponent } from './sumar-producto.component';

describe('SumarProductoComponent', () => {
  let component: SumarProductoComponent;
  let fixture: ComponentFixture<SumarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumarProductoComponent]
    });
    fixture = TestBed.createComponent(SumarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
