import { ApplicationInitStatus, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, from, Observable, of, switchMap, take } from 'rxjs';
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
  constructor(
    private _store: Store,
    private _dialogService: DialogService,
    private _router: Router,
    private _initStatus: ApplicationInitStatus
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const path = route.routeConfig?.path as RouteName;

    const qry: Partial<QueryParamCollection> = route.queryParams;

    if (this._dialogService.checkValidity(path, qry)) {
      return of(true);
    }
    return of(this._dialogService.gotoTree(RouteName.POP_1));
  }
}
