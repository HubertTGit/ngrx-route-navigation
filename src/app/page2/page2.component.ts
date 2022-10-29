import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie, MoviesStore } from '../state/movies.component.state';
import { selectProducts } from '../state/products.selector';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component implements OnInit {
  movies$ = this.moviesStore.movies$;

  constructor(
    private readonly moviesStore: MoviesStore,
    private _store: Store
  ) {}

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
