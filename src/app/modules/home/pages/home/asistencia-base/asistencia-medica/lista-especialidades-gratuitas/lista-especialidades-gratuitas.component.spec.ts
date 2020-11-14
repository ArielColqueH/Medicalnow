import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecialidadesGratuitasComponent } from './lista-especialidades-gratuitas.component';

describe('ListaEspecialidadesGratuitasComponent', () => {
  let component: ListaEspecialidadesGratuitasComponent;
  let fixture: ComponentFixture<ListaEspecialidadesGratuitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEspecialidadesGratuitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspecialidadesGratuitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
