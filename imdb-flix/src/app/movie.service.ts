import { Injectable } from '@angular/core';
import { Observable,forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import {Movie} from './movie'
import { MOVIES } from './mock-movies'
import { ImdbService } from './imdb.service'


function imdbObjectToMovie(imdbObject: any): Movie{

  let imdbMovie = {
    id : imdbObject.id,
    fullTitle : imdbObject.fullTitle,
    image : imdbObject.image, 
    plot : imdbObject.plot
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

  	return this.movieApiService.getMostPopularMoviesId().pipe(
      mergeMap(mostPopularMoviesId => forkJoin(mostPopularMoviesId.map(id => this.getMovieDetails(id))))).pipe(
        map(topMovies=> topMovies.map(topMovie=> imdbObjectToMovie(topMovie))));
   }

  getMovieDetails(movieId: string): Observable<any> {

  	return this.movieApiService.getMovieDetail(movieId);
  }
}
