import { Component, OnInit } from '@angular/core';

import {Movie} from '../movie'
import {MOVIES} from '../mock-movies'
import { MovieService } from '../movie.service'

function imdbObjectToMovie(imdbObject: any): Movie{

  let imdbMovie = {
    id : imdbObject.id,
    fullTitle : imdbObject.fullTitle,
    image : imdbObject.image, 
    plot : "Not available"
  };

  const movie: Movie = new Movie(imdbMovie); 

  return movie;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})


export class MoviesListComponent implements OnInit {

	movies: object[];

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {

  	this.getTopMovies();
  }

  getTopMovies():void{

  	this.MovieService.getTopMovies().subscribe(movies => this.movies = movies.map(movie => imdbObjectToMovie(movie)))
  }

}
