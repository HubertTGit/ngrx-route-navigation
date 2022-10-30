import { Action, createReducer, on } from '@ngrx/store';
import { setLoadStatus } from '../actions';

export interface StatusState {
  state: 'error' | 'success' | 'pending';
}

const init: StatusState = {
  state: 'pending',
};

export const productsReducer = createReducer<StatusState, Action>(
  init,
  on(setLoadStatus, (all, { state }) => {
    return { state };
  })
);
