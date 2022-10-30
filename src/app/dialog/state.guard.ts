import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { QueryParamCollection, RouteName } from './dialog.model';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class StateGuard implements CanActivate {
  constructor(private _dialogService: DialogService) {}

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
