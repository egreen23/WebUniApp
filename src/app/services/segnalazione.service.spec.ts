import { TestBed, inject } from '@angular/core/testing';

import { SegnalazioneService } from './segnalazione.service';

describe('SegnalazioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegnalazioneService]
    });
  });

  it('should be created', inject([SegnalazioneService], (service: SegnalazioneService) => {
    expect(service).toBeTruthy();
  }));
});
