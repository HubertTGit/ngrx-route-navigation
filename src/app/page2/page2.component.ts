import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Movie, MoviesStore } from '../state/movies.state';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component implements OnInit {
  movies$ = this.moviesStore.movies$;

  constructor(private readonly moviesStore: MoviesStore) {}

  ngOnInit(): void {}

  addMovie() {
    const movie: Movie = {
      title: 'Some movie',
      director: 'Hubert',
    };
    this.moviesStore.addMovie(movie);
  }

  remove(idx: number) {
    this.moviesStore.removeMovie(idx);
  }
}
