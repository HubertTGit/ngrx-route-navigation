import { createFeatureSelector } from '@ngrx/store';
import { MoviesProduct } from './product.service';

export const selectProducts =
  createFeatureSelector<ReadonlyArray<MoviesProduct>>('products');
