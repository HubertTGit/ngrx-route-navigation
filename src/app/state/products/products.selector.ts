import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProducts = createFeatureSelector<ProductState>('products');
