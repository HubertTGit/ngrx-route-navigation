import { createReducer, on } from '@ngrx/store';
import { removeBook, addBook, removeAllBooks, addAllBooks } from '../actions';

export const collectionReducer = createReducer<ReadonlyArray<string>>(
  [],
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) {
      return state;
    }
    return [...state, bookId];
  }),
  on(removeAllBooks, () => []),
  on(addAllBooks, (state, { books }) => {
    return books;
  })
);
