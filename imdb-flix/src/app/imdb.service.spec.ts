import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  let service: ImdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpClientModule],
        providers: [ImdbService]
    });
  });

  it('should be created', () => {

  	service = TestBed.get(ImdbService);
    expect(service).toBeTruthy();
  });
});
