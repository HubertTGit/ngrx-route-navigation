import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface Movie {
  title: string;
  director: string;
  index?: number;
}

export interface MoviesState {
  movies: Movie[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  private index = 0;
  constructor() {
    super({ movies: [] });
  }

  readonly movies$: Observable<Movie[]> = this.select((state) => state.movies);

  addMovie = this.updater((state, movie: Movie) => {
    movie.index = this.index++;
    return { movies: [...state.movies, movie] };
  });

  removeMovie = this.updater((state, idx: number) => {
    const f = state.movies.filter((d) => d.index !== idx);
    state.movies = f;
    return state;
  });
}
