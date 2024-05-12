import { TestBed } from '@angular/core/testing';

import { SegreteriaService } from './segreteria.service';

describe('SegreteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SegreteriaService = TestBed.get(SegreteriaService);
    expect(service).toBeTruthy();
  });
});
