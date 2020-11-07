import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionesBaseComponent } from './prescripciones-base.component';

describe('PrescripcionesBaseComponent', () => {
  let component: PrescripcionesBaseComponent;
  let fixture: ComponentFixture<PrescripcionesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
