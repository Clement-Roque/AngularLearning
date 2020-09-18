import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Movie} from './movie'
import { MOVIES } from './mock-movies'
import { ImdbService } from './imdb.service'


function imdbObjectToMovie(imdbObject: any): Movie{

  let imdbMovie = {
    id : imdbObject.id,
    fullTitle : imdbObject.fullTitle,
    image : imdbObject.image, 
    plot : "Not avalaible yet"
  };

  const movie: Movie = new Movie(imdbMovie); 

  return movie;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private movieApiService: ImdbService) { }

  getTopMovies(): Observable<Movie[]>{

  	return this.movieApiService.getMostPopularMovies().pipe(
      map(mostPopularMovies => mostPopularMovies.map(movie => imdbObjectToMovie(movie))));
   }

  getMoviePlot(movieId: string): Observable<any> {

  	return this.movieApiService.getMovieDetail(movieId);
  }
}
