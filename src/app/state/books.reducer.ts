import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../services/book.model';
import { retrieveBooks } from './actions';

export const booksReducer = createReducer<ReadonlyArray<Book>, Action>(
  [],
  on(retrieveBooks, (state, { books }) => books)
);
