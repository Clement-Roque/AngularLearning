import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Movie } from './movie';

const MOST_POPULAR_MOVIE : string = 'MostPopularMovies/';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private httpClient: HttpClient) { }

  public getMostPopularMovie(): Observable<object[]> {

  	const requestUrl = environment.MOVIE_API_BASE_URL+MOST_POPULAR_MOVIE+environment.MOVIE_API_KEY;

  	return this.httpClient.get<object[]>(requestUrl).pipe(
      take(3),
      map(imdbObject => imdbObject['items']),
  		catchError(this.handleError<object[]>('getMostPopularMovie', [])));

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
