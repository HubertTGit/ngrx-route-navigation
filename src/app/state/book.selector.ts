import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../services/book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const collectionsState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  collectionsState,
  (books, collections) =>
    collections.map((id) => books.find((book) => book.id === id))
);
