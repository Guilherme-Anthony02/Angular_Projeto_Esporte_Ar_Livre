import { TestBed } from '@angular/core/testing';

import { CadastroCorrida } from './cadastro-corrida';

describe('CadastroCorrida', () => {
  let service: CadastroCorrida;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroCorrida);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
