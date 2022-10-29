import { Action, createReducer, on } from '@ngrx/store';
import { Book, BookState } from '../services/book.model';
import { retrieveBooks } from './actions';

const init: BookState = {
  books: [],
  status: 'pending',
};

export const booksReducer = createReducer<BookState, Action>(
  init,
  on(retrieveBooks, (state, { books }) => ({ ...state, ...{ books } }))
);
