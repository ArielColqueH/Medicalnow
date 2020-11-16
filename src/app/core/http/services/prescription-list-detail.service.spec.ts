import { TestBed } from '@angular/core/testing';

import { PrescriptionListDetailService } from './prescription-list-detail.service';

describe('PrescriptionListDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescriptionListDetailService = TestBed.get(PrescriptionListDetailService);
    expect(service).toBeTruthy();
  });
});
