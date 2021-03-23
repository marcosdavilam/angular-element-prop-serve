import { TestBed, inject } from '@angular/core/testing';

import { LibraryTestService } from './library-test.service';

describe('LibraryTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryTestService]
    });
  });

  it('should be created', inject([LibraryTestService], (service: LibraryTestService) => {
    expect(service).toBeTruthy();
  }));
});
