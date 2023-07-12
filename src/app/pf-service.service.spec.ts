import { TestBed } from '@angular/core/testing';

import { PfServiceService } from './pf-service.service';

describe('PfServiceService', () => {
  let service: PfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
