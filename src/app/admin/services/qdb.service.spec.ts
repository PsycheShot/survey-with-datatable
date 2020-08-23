import { TestBed } from '@angular/core/testing';

import { QdbService } from './qdb.service';

describe('QdbService', () => {
  let service: QdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
