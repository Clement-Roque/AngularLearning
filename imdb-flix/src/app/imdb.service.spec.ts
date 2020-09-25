import { TestBed } from '@angular/core/testing';

import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  let service: ImdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {

  	service = TestBed.get(ImdbService);
    expect(service).toBeTruthy();
  });
});
