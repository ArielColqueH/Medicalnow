import { TestBed } from '@angular/core/testing';

import { PrescriptionDetailListService } from './prescription-detail-list.service';

describe('PrescriptionDetailListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescriptionDetailListService = TestBed.get(PrescriptionDetailListService);
    expect(service).toBeTruthy();
  });
});
