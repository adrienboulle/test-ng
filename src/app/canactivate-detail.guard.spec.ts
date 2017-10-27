import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivateDetailGuard } from './canactivate-detail.guard';

describe('CanactivateDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivateDetailGuard]
    });
  });

  it('should ...', inject([CanactivateDetailGuard], (guard: CanactivateDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
