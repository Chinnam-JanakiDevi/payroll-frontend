import { TestBed } from '@angular/core/testing';

import { HraServiceService } from './hra-service.service';

describe('HraServiceService', () => {
  let service: HraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
