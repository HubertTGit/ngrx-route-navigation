import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  Observable,
  of,
  switchMap,
  from,
  map,
  combineLatest,
  take,
} from 'rxjs';
import {
  selectQueryParams,
  selectCurrentRoute,
  selectQueryParam,
  selectUrl,
} from './app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class StateGuard implements CanActivate {
  constructor(private _store: Store, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._store
      .select(selectCurrentRoute)
      .pipe(take(1))
      .subscribe({
        next: ({ queryParams, routeConfig }) => {
          if (
            queryParams.order === 'banana' &&
            routeConfig.path === 'dialog2'
          ) {
            console.log('BANANA TRUE');
          }

          if (queryParams.order === 'mango' && routeConfig.path === 'dialog1') {
            console.log('MANGO TRUE');
          }

          console.log('ALL WRONG', queryParams);
        },
      });

    return of(true);
  }
}
