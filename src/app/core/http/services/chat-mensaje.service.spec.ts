import { TestBed } from '@angular/core/testing';

import { ChatMensajeService } from './chat-mensaje.service';

describe('ChatMensajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatMensajeService = TestBed.get(ChatMensajeService);
    expect(service).toBeTruthy();
  });
});
