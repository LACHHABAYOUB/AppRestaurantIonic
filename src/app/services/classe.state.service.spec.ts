import { TestBed } from '@angular/core/testing';

import { ClasseStateService } from './classe.state.service';

describe('NaoSeiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasseStateService = TestBed.get(ClasseStateService);
    expect(service).toBeTruthy();
  });
});
