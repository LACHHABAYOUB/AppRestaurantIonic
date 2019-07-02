import { TestBed } from '@angular/core/testing';

import { PassoService } from './passo.service';

describe('PassoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassoService = TestBed.get(PassoService);
    expect(service).toBeTruthy();
  });
});
