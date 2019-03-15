import { TestBed } from '@angular/core/testing';

import { FetchGuardService } from './fetch-guard.service';

describe('FetchGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchGuardService = TestBed.get(FetchGuardService);
    expect(service).toBeTruthy();
  });
});
