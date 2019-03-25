import { TestBed, inject } from '@angular/core/testing';

import { CorsodistudioService } from './corsodistudio.service';

describe('CorsodistudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorsodistudioService]
    });
  });

  it('should be created', inject([CorsodistudioService], (service: CorsodistudioService) => {
    expect(service).toBeTruthy();
  }));
});
