import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/services/product.service';

export const selectProducts =
  createFeatureSelector<ReadonlyArray<Product>>('products');
