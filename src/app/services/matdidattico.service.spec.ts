import { TestBed } from '@angular/core/testing';

import { MatdidatticoService } from './matdidattico.service';

describe('MatdidatticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatdidatticoService = TestBed.get(MatdidatticoService);
    expect(service).toBeTruthy();
  });
});
