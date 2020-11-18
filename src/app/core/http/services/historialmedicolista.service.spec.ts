import { TestBed } from '@angular/core/testing';

import { HistorialmedicolistaService } from './historialmedicolista.service';

describe('HistorialmedicolistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialmedicolistaService = TestBed.get(HistorialmedicolistaService);
    expect(service).toBeTruthy();
  });
});
