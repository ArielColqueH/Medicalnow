import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionesComponent } from './prescripciones.component';

describe('PrescripcionesComponent', () => {
  let component: PrescripcionesComponent;
  let fixture: ComponentFixture<PrescripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
