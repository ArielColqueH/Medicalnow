import { TestBed } from '@angular/core/testing';

import { ListaHistorialMedicoHojasService } from './lista-historial-medico-hojas.service';

describe('ListaHistorialMedicoHojasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaHistorialMedicoHojasService = TestBed.get(ListaHistorialMedicoHojasService);
    expect(service).toBeTruthy();
  });
});
