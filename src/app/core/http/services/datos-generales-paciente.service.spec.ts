import { TestBed } from '@angular/core/testing';

import { DatosGeneralesPacienteService } from './datos-generales-paciente.service';

describe('DatosGeneralesPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosGeneralesPacienteService = TestBed.get(DatosGeneralesPacienteService);
    expect(service).toBeTruthy();
  });
});
