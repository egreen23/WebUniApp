import { TestBed, inject } from '@angular/core/testing';

import { SeganalazioneService } from './seganalazione.service';

describe('SeganalazioneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeganalazioneService]
    });
  });

  it('should be created', inject([SeganalazioneService], (service: SeganalazioneService) => {
    expect(service).toBeTruthy();
  }));
});
