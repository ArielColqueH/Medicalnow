import { TestBed } from '@angular/core/testing';

import { PrescriptionListService } from './prescription-list.service';

describe('PrescriptionListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescriptionListService = TestBed.get(PrescriptionListService);
    expect(service).toBeTruthy();
  });
});
