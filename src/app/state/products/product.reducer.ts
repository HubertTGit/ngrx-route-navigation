import { Action, createReducer, on } from '@ngrx/store';
import { MoviesProduct } from 'src/app/services/product.service';
import { loadAllProducts, loadProductsState } from '../actions';

export interface ProductState {
  products: ReadonlyArray<MoviesProduct>;
  state: 'error' | 'success' | 'pending';
}

const init: ProductState = {
  products: [],
  state: 'pending',
};

export const productsReducer = createReducer<ProductState, Action>(
  init,
  on(loadAllProducts, (all, { products }) => {
    const result = {
      ...all,
      ...{ products },
    };
    return result;
  }),
  on(loadProductsState, (all, { state }) => {
    const res = { ...all, ...{ state } };
    return res;
  })
);
