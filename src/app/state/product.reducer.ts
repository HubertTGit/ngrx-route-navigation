import { Action, createReducer, on } from '@ngrx/store';
import { loadAllProducts } from './actions';
import { Movies, MoviesProduct } from './product.service';

export const productsReducer = createReducer<
  ReadonlyArray<MoviesProduct>,
  Action
>(
  [],
  on(loadAllProducts, (state, { movies }) => [...state, ...movies])
);
