import { TestBed } from '@angular/core/testing';

import { DogsServices } from './dogs.services.service';

describe('DogsServices', () => {
  let service: DogsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
