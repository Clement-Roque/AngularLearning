import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import {Movie} from '../movie'
import {MOVIES} from '../mock-movies'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})


export class MoviesListComponent implements OnInit {

	movies: Movie[];

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {

  	this.getTopMovies();
  }

  getTopMovies():void{

  	this.MovieService.getTopMovies().subscribe(movies => this.movies = movies);
  }

}
