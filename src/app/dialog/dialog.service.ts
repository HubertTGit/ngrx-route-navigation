import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Params, Router } from '@angular/router';
import { RouteName } from './dialog.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _router: Router, private _dialog: MatDialog) {}

  goto(path: RouteName, queryParams?: Params) {
    this._router.navigate([{ outlets: { popup: [path] } }], { queryParams });
  }

  gotoTree(path: RouteName, queryParams?: Params) {
    return this._router.createUrlTree([{ outlets: { popup: [path] } }], {
      queryParams,
    });
  }
}
