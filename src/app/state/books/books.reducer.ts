import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/services/book.model';
import { retrieveBooks } from '../actions';

export interface BookState {
  books: ReadonlyArray<Book>;
}

const init: BookState = {
  books: [],
};

export const booksReducer = createReducer<BookState, Action>(
  init,
  on(retrieveBooks, (state, { books }) => ({ ...state, ...{ books } }))
);
