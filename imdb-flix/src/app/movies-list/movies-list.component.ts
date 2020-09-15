import { Component, OnInit } from '@angular/core';

import {Movie} from '../movie'
import {MOVIES} from '../mock-movies'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

	movies: Movie[] = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

}
