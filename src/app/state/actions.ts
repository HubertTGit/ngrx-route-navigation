import { createAction, props } from '@ngrx/store';
import { Book } from './../page1/book.model';

export const addBook = createAction(
  'add book to collection',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  'remove book from collection',
  props<{ bookId: string }>()
);

export const retrieveBooks = createAction(
  'retrieve all books from collection',
  props<{ books: ReadonlyArray<Book> }>()
);
