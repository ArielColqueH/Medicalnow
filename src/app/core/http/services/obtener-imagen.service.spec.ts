import { TestBed } from '@angular/core/testing';

import { ObtenerImagenService } from './obtener-imagen.service';

describe('ObtenerImagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerImagenService = TestBed.get(ObtenerImagenService);
    expect(service).toBeTruthy();
  });
});
