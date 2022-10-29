import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Params, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ParamName, QueryParamCollection, RouteName } from './dialog.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _router: Router, private _dialog: MatDialog) {}

  gotoNavigation(path: RouteName, queryParams?: Params) {
    this._router.navigate([{ outlets: { popup: [path] } }], { queryParams });
  }

  gotoTree(path: RouteName, queryParams?: Params) {
    return this._router.createUrlTree([{ outlets: { popup: [path] } }], {
      queryParams,
    });
  }

  gotoNotFound() {
    return this._router.createUrlTree(['notfound'], { relativeTo: null });
  }

  checkValidity(path: RouteName, qry: Partial<QueryParamCollection>): boolean {
    const pop2 = [ParamName.LIKENESS];
    const pop3 = [ParamName.ORDER, ParamName.PRICE];

    if (path === RouteName.POP_1 && Object.keys(qry).length === 0) {
      return true;
    }

    if (path === RouteName.POP_2 && this.comparisonHelper(qry, pop2)) {
      return true;
    }

    if (path === RouteName.POP_3 && this.comparisonHelper(qry, pop3)) {
      return true;
    }

    return false;
  }

  private comparisonHelper(
    sourceQry: Partial<QueryParamCollection>,
    allowedQry: ParamName[]
  ): boolean {
    return (
      Object.keys(sourceQry).every((v) =>
        allowedQry.includes(v as ParamName)
      ) && Object.keys(sourceQry).length > 0
    );
  }
}
