import { TestBed } from '@angular/core/testing';

import { ToritoService } from './torito.service';

describe('ToritoService', () => {
  let service: ToritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
