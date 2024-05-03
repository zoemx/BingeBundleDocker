import { TestBed } from '@angular/core/testing';

import { MovieApiService } from './tmdb-api-service';

describe('WatchModeService', () => {
  let service: MovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //getTitles() when successful, returns an array of titles 
});
