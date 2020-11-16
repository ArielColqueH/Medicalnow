import { TestBed } from '@angular/core/testing';

import { EspecialistaIndividualService } from './especialista-individual.service';

describe('EspecialistaIndividualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspecialistaIndividualService = TestBed.get(EspecialistaIndividualService);
    expect(service).toBeTruthy();
  });
});
