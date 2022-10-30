import { createAction, props } from '@ngrx/store';
import { Book } from '../services/book.model';
import { MoviesProduct } from '../services/product.service';

export const addBook = createAction(
  '[collection] add',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[collection] remove',
  props<{ bookId: string }>()
);

export const removeAllBooks = createAction('[collection] remove all');

export const addAllBooks = createAction(
  '[collection] add all',
  props<{ books: ReadonlyArray<string> }>()
);

export const retrieveBooks = createAction(
  '[collection] retrieve all',
  props<{ books: ReadonlyArray<Book> }>()
);

export const loadAllProducts = createAction(
  '[products] load all products',
  props<{ products: ReadonlyArray<MoviesProduct> }>()
);

export const setLoadStatus = createAction(
  '[load status] load state',
  props<{ state: 'error' | 'success' | 'pending' }>()
);
