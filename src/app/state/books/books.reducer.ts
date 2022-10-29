import { Action, createReducer, on } from '@ngrx/store';
import { BookState } from 'src/app/services/book.model';
import { loadBooksState, retrieveBooks } from '../actions';

const init: BookState = {
  books: [],
  status: 'pending',
};

export const booksReducer = createReducer<BookState, Action>(
  init,
  on(retrieveBooks, (state, { books }) => ({ ...state, ...{ books } })),
  on(loadBooksState, (all, { state }) => ({ ...all, ...{ status: state } }))
);
