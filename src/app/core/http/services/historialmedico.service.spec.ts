import { TestBed } from '@angular/core/testing';

import { HistorialmedicoService } from './historialmedico.service';

describe('HistorialmedicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialmedicoService = TestBed.get(HistorialmedicoService);
    expect(service).toBeTruthy();
  });
});
