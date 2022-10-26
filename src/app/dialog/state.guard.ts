import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, Observable, of, switchMap, take } from 'rxjs';
import {
  selectCurrentRoute,
  selectRouteParams,
  selectUrl,
  selectFragment,
  selectQueryParams,
} from '../app-routing.module';
import { ParamName, QueryParamCollection, RouteName } from './dialog.model';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class StateGuard implements CanActivate {
  constructor(private _store: Store, private _dialogService: DialogService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const path = route.routeConfig?.path;

    return this._store
      .select<Partial<QueryParamCollection>>(selectQueryParams)
      .pipe(
        take(1),
        switchMap((qry) => {
          const state =
            path === RouteName.POP_2 &&
            Object.keys(qry).some((string) => string === ParamName.LIKENESS);

          if (path === RouteName.POP_1 && !Object.keys(qry).length) {
            return of(true);
          }

          if (state) {
            return of(true);
          }

          if (path === RouteName.POP_3) {
            return of(true);
          }

          this._dialogService.goto(RouteName.POP_3);

          return of(false);
        })
      );
  }
}
