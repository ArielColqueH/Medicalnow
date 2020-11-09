import { TestBed } from '@angular/core/testing';

import { ChatPacienteService } from './chat-paciente.service';

describe('ChatPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatPacienteService = TestBed.get(ChatPacienteService);
    expect(service).toBeTruthy();
  });
});
