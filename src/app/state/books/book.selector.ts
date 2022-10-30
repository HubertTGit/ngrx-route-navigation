import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/services/book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const collectionsState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  collectionsState,
  (booksState, collections) =>
    collections.map((id) => booksState.find((book) => book.id === id))
);
