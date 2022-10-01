import { TestBed } from '@angular/core/testing';

import { DogsServicesService } from './dogs.services.service';

describe('DogsServicesService', () => {
  let service: DogsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
