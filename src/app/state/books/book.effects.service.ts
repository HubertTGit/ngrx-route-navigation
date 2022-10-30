import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { selectQueryParam } from '../../app-routing.module';
import { ParamName } from '../../dialog/dialog.model';
import { routerNavigationAction } from '@ngrx/router-store';
import { catchError, filter, mergeMap, of, switchMap, take, tap } from 'rxjs';
import { retrieveBooks, setLoadStatus } from '../actions';
import { Store } from '@ngrx/store';
import { BookService } from 'src/app/services/book.service';

@Injectable({
  providedIn: 'root',
})
export class BookEffectsService {
  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private _store: Store
  ) {}

  $books = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigationAction),
        take(1),
        mergeMap(() => {
          return this._store.select(selectQueryParam(ParamName.AUTHOR)).pipe(
            switchMap((author) => {
              return this.bookService.getBooksByAuthor(author!).pipe(
                tap((books) => {
                  this._store.dispatch(retrieveBooks({ books }));
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
