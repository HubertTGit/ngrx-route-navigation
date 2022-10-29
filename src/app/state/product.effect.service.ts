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
} from 'rxjs';
import { loadAllProducts } from './actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class MovieEffectService {
  constructor(
    private actions$: Actions,
    private moviesService: MovieService,
    private _store: Store
  ) {}

  $movies = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        mergeMap(() => {
          return this._store.select(selectQueryParam(ParamName.PRICE)).pipe(
            take(1),
            filter((f) => !!f),
            switchMap((limit) => {
              return this.moviesService
                .getAllMovies(limit!)
                .pipe(
                  map((movies) =>
                    this._store.dispatch(
                      loadAllProducts({ movies: movies.products })
                    )
                  )
                );
            }),
            catchError((error) => EMPTY)
          );
        })
      ),
    { dispatch: false }
  );

  // return this.moviesService.getAllMovies(5).pipe(
  //   map((v) => loadAllMovies({ movies: v.products })),
  //   catchError((error) => EMPTY)
  // );
}
