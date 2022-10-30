import { Action, createReducer, on } from '@ngrx/store';
import { MoviesProduct } from 'src/app/services/product.service';
import { loadAllProducts } from '../actions';

export interface ProductState {
  products: ReadonlyArray<MoviesProduct>;
}

const init: ProductState = {
  products: [],
};

export const productsReducer = createReducer<ProductState, Action>(
  init,
  on(loadAllProducts, (all, { products }) => {
    const result = {
      ...all,
      ...{ products },
    };
    return result;
  })
);
