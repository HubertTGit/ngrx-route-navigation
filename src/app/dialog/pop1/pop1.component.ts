import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteName, QueryParamCollection, ParamName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop1',
  templateUrl: './pop1.component.html',
  styleUrls: ['./pop1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop1Component {
  constructor(private _dialogService: DialogService) {}

  next() {
    const params: Partial<QueryParamCollection> = {
      // TODO: change to ORDER
      [ParamName.ORDER]: 'set',
      [ParamName.PRICE]: 12,
    };
    this._dialogService.goto(RouteName.POP_2, params);
  }
}
