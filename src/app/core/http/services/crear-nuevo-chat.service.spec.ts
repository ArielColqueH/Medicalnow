import { TestBed } from '@angular/core/testing';

import { CrearNuevoChatService } from './crear-nuevo-chat.service';

describe('CrearNuevoChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearNuevoChatService = TestBed.get(CrearNuevoChatService);
    expect(service).toBeTruthy();
  });
});
