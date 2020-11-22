import { TestBed } from '@angular/core/testing';

import { ChatArchivoService } from './chat-archivo.service';

describe('ChatArchivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatArchivoService = TestBed.get(ChatArchivoService);
    expect(service).toBeTruthy();
  });
});
