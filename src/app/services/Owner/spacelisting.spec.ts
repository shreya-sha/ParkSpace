import { TestBed } from '@angular/core/testing';

import { Spacelisting } from './spacelisting';

describe('Spacelisting', () => {
  let service: Spacelisting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spacelisting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
