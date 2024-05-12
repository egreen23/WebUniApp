import { TestBed, async, inject } from '@angular/core/testing';

import { SegauthGuard } from './segauth.guard';

describe('SegauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegauthGuard]
    });
  });

  it('should ...', inject([SegauthGuard], (guard: SegauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
