import { TestBed } from '@angular/core/testing';

import { HodServiceService } from './hod-service.service';

describe('HodServiceService', () => {
  let service: HodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
