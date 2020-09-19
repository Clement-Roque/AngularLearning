import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JSON_MOVIES } from './mock-movies'
import { environment } from '../environments/environment';
import { Movie } from './movie';

const MOST_POPULAR_MOVIE : string = 'MostPopularMovies/';
const MOVIE_BY_TITLE: string = "Title/"

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private httpClient: HttpClient) { }

  public getMostPopularMoviesId(): Observable<string[]> {

  	const requestUrl = environment.MOVIE_API_BASE_URL+MOST_POPULAR_MOVIE+environment.MOVIE_API_KEY;

  	return this.httpClient.get<object[]>(requestUrl).pipe(
      map(imdbObjects => imdbObjects['items'].slice(0,4)),
  	  catchError(this.handleError<object[]>('getMostPopularMovie', [])))
    .pipe(map(imdbObjects => imdbObjects.map(imdbObject => imdbObject['id'])));

  }

  public getMovieDetail(movieId: string): Observable<any> {

    const requestUrl = environment.MOVIE_API_BASE_URL+MOVIE_BY_TITLE+environment.MOVIE_API_KEY+'/'+movieId;

    return this.httpClient.get<object[]>(requestUrl).pipe(
      map(imdbMovie => imdbMovie),
      catchError(this.handleError<object[]>('getMovieDetail', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

	      // TODO: send the error to remote logging infrastructure
	      console.error('ImdbService::handleError',error); // log to console instead

	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
	}
}
