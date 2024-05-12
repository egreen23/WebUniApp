import { TestBed, async, inject } from '@angular/core/testing';

import { DocauthGuard } from './docauth.guard';

describe('DocauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocauthGuard]
    });
  });

  it('should ...', inject([DocauthGuard], (guard: DocauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
