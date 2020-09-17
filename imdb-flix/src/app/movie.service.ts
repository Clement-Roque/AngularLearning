import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Movie} from './movie'
import { MOVIES } from './mock-movies'
import { ImdbService } from './imdb.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private movieApiService: ImdbService) { }

  getTopMovies(): Observable<object[]>{

  	return this.movieApiService.getMostPopularMovie();
  }
}
