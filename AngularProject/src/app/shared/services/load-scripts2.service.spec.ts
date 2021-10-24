import { TestBed } from '@angular/core/testing';

import { LoadScripts2Service } from './load-scripts2.service';

describe('LoadScripts2Service', () => {
  let service: LoadScripts2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadScripts2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
