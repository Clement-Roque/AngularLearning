import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JSON_MOVIES } from './mock-movies'
import { environment } from '../environments/environment';
import { Movie } from './movie';

const MOST_POPULAR_MOVIE : string = 'MostPopularMovies/';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private httpClient: HttpClient) { }

  public getMostPopularMoviesId(): Observable<string[]> {

  	const requestUrl = environment.MOVIE_API_BASE_URL+MOST_POPULAR_MOVIE+environment.MOVIE_API_KEY;

  	// return this.httpClient.get<object[]>(requestUrl).pipe(
   //    map(imdbObject => imdbObject['items']),
  	// 	catchError(this.handleError<object[]>('getMostPopularMovie', [])));

    return of(JSON_MOVIES.map(imdbObject => imdbObject['id']));

  }

  public getMovieDetail(movieId: string): Observable<any> {

    return from(JSON_MOVIES.filter(movie=> movie.id===movieId).map(movie=> movie));
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
