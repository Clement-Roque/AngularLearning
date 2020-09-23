import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponent } from './movie-info.component';
import { Movie} from '../movie';
import { MOVIES } from '../mock-movies';

describe('MovieInfoComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ MovieInfoComponent ]
     })
     .compileComponents();
   });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.movie =  new Movie(MOVIES[0]);
    expect(component).toBeTruthy();
  });
});
