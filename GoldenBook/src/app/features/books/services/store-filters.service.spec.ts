import { TestBed } from '@angular/core/testing';

import { StoreFiltersService } from './store-filters.service';

describe('StoreFiltersService', () => {
  let service: StoreFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
