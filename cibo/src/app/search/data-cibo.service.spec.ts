import { TestBed } from '@angular/core/testing';

import { DataCiboService } from './data-cibo.service';

describe('DataCiboService', () => {
  let service: DataCiboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCiboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
