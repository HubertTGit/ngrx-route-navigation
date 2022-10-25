import { createAction, props } from '@ngrx/store';
import { Book } from './../page1/book.model';

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
