import { TestBed } from '@angular/core/testing';

import { InternalComponentService } from './internal-component.service';

describe('InternalComponentService', () => {
  let service: InternalComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
