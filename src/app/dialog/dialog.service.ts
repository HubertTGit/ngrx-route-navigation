import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Params, Router, UrlTree } from '@angular/router';
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
    const pop1 = [];
    const pop2 = [ParamName.AUTHOR];
    const pop3 = [ParamName.ORDER, ParamName.LIMIT];
    const pop4 = [ParamName.SUCCESS];

    if (path === RouteName.POP_1 && pop1.length === 0) {
      return true;
    }

    if (path === RouteName.POP_2 && this.comparisonHelper(qry, pop2)) {
      return true;
    }

    if (path === RouteName.POP_3 && this.comparisonHelper(qry, pop3)) {
      return true;
    }

    if (path === RouteName.POP_4 && this.comparisonHelper(qry, pop4)) {
      return true;
    }

    return false;
  }

  private comparisonHelper(
    sourceQry: Partial<QueryParamCollection>,
    allowedQry: ParamName[]
  ): boolean {
    const a = Object.keys(sourceQry).sort();
    const b = allowedQry.sort();

    return a.length === b.length && a.every((v, i) => v === b[i]);
  }
}
