import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompraComponent } from './form-compra.component';

describe('FormCompraComponent', () => {
  let component: FormCompraComponent;
  let fixture: ComponentFixture<FormCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCompraComponent]
    });
    fixture = TestBed.createComponent(FormCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
