import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../page1/book.model';
import { retrieveBooks } from './actions';

export const booksReducer = createReducer<ReadonlyArray<Book>, Action>(
  [],
  on(retrieveBooks, (state, { books }) => books)
);
