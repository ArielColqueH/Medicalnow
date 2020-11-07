import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionDetalleComponent } from './prescripcion-detalle.component';

describe('PrescripcionDetalleComponent', () => {
  let component: PrescripcionDetalleComponent;
  let fixture: ComponentFixture<PrescripcionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
