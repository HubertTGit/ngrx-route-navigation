import { createAction, props } from '@ngrx/store';
import { QueryParamCollection } from '../dialog/dialog.model';
import { Book } from '../services/book.model';
import { Product } from '../services/product.service';

export const retrieveBooks = createAction(
  '[collection] retrieve all',
  props<{ books: ReadonlyArray<Book> }>()
);

export const loadAllProducts = createAction(
  '[products] load all products',
  props<{ products: ReadonlyArray<Product> }>()
);

export const setLoadStatus = createAction(
  '[load status] load state',
  props<{ state: 'error' | 'success' | 'pending' }>()
);
