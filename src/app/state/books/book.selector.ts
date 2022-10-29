import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book, BookState } from '../../services/book.model';

export const selectBooks = createFeatureSelector<BookState>('books');
export const collectionsState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  collectionsState,
  (booksState, collections) =>
    collections.map((id) => booksState.books.find((book) => book.id === id))
);

export const loadBookState = createSelector(
  selectBooks,
  (state) => state.status
);
