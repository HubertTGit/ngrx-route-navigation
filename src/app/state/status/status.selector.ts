import { createFeatureSelector } from '@ngrx/store';
import { StatusState } from './status.reducer';

export const selectStatus = createFeatureSelector<StatusState>('status');
