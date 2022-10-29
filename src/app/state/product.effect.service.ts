import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { selectQueryParam, selectQueryParams } from '../app-routing.module';
import { ParamName } from '../dialog/dialog.model';
import { MovieService } from './product.service';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  catchError,
  EMPTY,
  filter,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
  throwError,
} from 'rxjs';
import { loadAllProducts, loadProductsState } from './actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffectService {
  constructor(
    private actions$: Actions,
    private moviesService: MovieService,
    private _store: Store
  ) {}

  $movies = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        take(1),
        mergeMap(() => {
          return this._store.select(selectQueryParam(ParamName.PRICE)).pipe(
            filter((f) => !!f),
            switchMap((limit) => {
              return this.moviesService.getAllMovies(limit!).pipe(
                tap((movies) => {
                  this._store.dispatch(
                    loadAllProducts({ products: movies.products })
                  );
                  this._store.dispatch(loadProductsState({ state: 'success' }));
                }),
                catchError((error) => {
                  this._store.dispatch(loadProductsState({ state: 'error' }));
                  return of('error');
                })
              );
            })
          );
        })
      ),
    { dispatch: false }
  );
}
