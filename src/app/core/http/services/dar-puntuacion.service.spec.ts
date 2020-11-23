import { TestBed } from '@angular/core/testing';

import { DarPuntuacionService } from './dar-puntuacion.service';

describe('DarPuntuacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarPuntuacionService = TestBed.get(DarPuntuacionService);
    expect(service).toBeTruthy();
  });
});
