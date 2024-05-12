import { TestBed, inject } from '@angular/core/testing';

import { InsegnamentoService } from './insegnamento.service';

describe('InsegnamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsegnamentoService]
    });
  });

  it('should be created', inject([InsegnamentoService], (service: InsegnamentoService) => {
    expect(service).toBeTruthy();
  }));
});
