import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { selectQueryParam } from '../../app-routing.module';
import { ParamName } from '../../dialog/dialog.model';
import { routerNavigationAction } from '@ngrx/router-store';
import { catchError, filter, mergeMap, of, switchMap, take, tap } from 'rxjs';
import { loadAllProducts, setLoadStatus } from '../actions';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffectService {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private _store: Store
  ) {}

  $products = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        take(1),
        mergeMap(() => {
          return this._store.select(selectQueryParam(ParamName.LIMIT)).pipe(
            filter((f) => !!f),
            switchMap((limit) => {
              return this.productService.getAllMovies(limit!).pipe(
                tap((movies) => {
                  this._store.dispatch(
                    loadAllProducts({ products: movies.products })
                  );
                  this._store.dispatch(setLoadStatus({ state: 'success' }));
                }),
                catchError((error) => {
                  this._store.dispatch(setLoadStatus({ state: 'error' }));
                  this._store.dispatch(setLoadStatus({ state: 'pending' }));
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
