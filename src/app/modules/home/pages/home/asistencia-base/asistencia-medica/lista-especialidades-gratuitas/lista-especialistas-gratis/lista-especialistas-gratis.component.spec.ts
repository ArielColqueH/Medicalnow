import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecialistasGratisComponent } from './lista-especialistas-gratis.component';

describe('ListaEspecialistasGratisComponent', () => {
  let component: ListaEspecialistasGratisComponent;
  let fixture: ComponentFixture<ListaEspecialistasGratisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEspecialistasGratisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspecialistasGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
