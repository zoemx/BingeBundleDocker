import { TestBed } from '@angular/core/testing';

import { MoveApiService } from './move-api-service';

describe('WatchModeService', () => {
  let service: MoveApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //getTitles() when successful, returns an array of titles 
});
