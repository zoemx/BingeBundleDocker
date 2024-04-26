import { TestBed } from '@angular/core/testing';

import { WatchModeService } from './watch-mode.service';

describe('WatchModeService', () => {
  let service: WatchModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //getTitles() when successful, returns an array of titles 
});
