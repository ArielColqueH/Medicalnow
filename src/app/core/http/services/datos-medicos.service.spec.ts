import { TestBed } from '@angular/core/testing';

import { DatosMedicosService } from './datos-medicos.service';

describe('DatosMedicosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosMedicosService = TestBed.get(DatosMedicosService);
    expect(service).toBeTruthy();
  });
});
