import { TestBed } from '@angular/core/testing';

import { MediaSearchServiceService } from './media-search-service.service';

describe('MediaSearchServiceService', () => {
  let service: MediaSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
