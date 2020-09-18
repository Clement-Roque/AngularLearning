import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JSON_MOVIES, JSON_MOVIES_PLOT } from './mock-movies'
import { environment } from '../environments/environment';
import { Movie } from './movie';

const MOST_POPULAR_MOVIE : string = 'MostPopularMovies/';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private httpClient: HttpClient) { }

  public getMostPopularMovies(): Observable<any[]> {

  	const requestUrl = environment.MOVIE_API_BASE_URL+MOST_POPULAR_MOVIE+environment.MOVIE_API_KEY;

  	// return this.httpClient.get<object[]>(requestUrl).pipe(
   //    map(imdbObject => imdbObject['items']),
  	// 	catchError(this.handleError<object[]>('getMostPopularMovie', [])));

    return of(JSON_MOVIES);

  }

  public getMovieDetail(movieId: string): Observable<any[]> {

    return of(JSON_MOVIES_PLOT.filter(movie=> movie.id===movieId));
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
