import { TestBed, inject } from '@angular/core/testing';

import { AddSearchService } from './add-search.service';

describe('AddSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSearchService]
    });
  });

  it('should ...', inject([AddSearchService], (service: AddSearchService) => {
    expect(service).toBeTruthy();
  }));
});
