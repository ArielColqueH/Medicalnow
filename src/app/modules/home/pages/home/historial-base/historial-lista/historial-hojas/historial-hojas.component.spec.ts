import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialHojasComponent } from './historial-hojas.component';

describe('HistorialHojasComponent', () => {
  let component: HistorialHojasComponent;
  let fixture: ComponentFixture<HistorialHojasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialHojasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialHojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
