import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/services/book.model';
import { retrieveBooks } from '../actions';

const init: ReadonlyArray<Book> = [];

export const booksReducer = createReducer<ReadonlyArray<Book>, Action>(
  init,
  on(retrieveBooks, (state, { books }) => [...state, ...books])
);
