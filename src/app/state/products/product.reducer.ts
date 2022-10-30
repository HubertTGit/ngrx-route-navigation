import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/services/product.service';
import { loadAllProducts } from '../actions';

const init: ReadonlyArray<Product> = [];

export const productsReducer = createReducer<ReadonlyArray<Product>, Action>(
  init,
  on(loadAllProducts, (all, { products }) => [...all, ...products])
);
