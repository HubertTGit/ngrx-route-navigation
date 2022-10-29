import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ParamName, QueryParamCollection, RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.component.html',
  styleUrls: ['./pop2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop2Component implements OnInit {
  prevPath = RouteName.POP_1;
  constructor(private _dialogService: DialogService) {}

  ngOnInit(): void {}

  previous() {
    this._dialogService.gotoNavigation(RouteName.POP_1);
  }

  goto() {
    const queryParams: Partial<QueryParamCollection> = {
      [ParamName.ORDER]: 'Same',
      [ParamName.PRICE]: 10,
    };
    this._dialogService.gotoNavigation(RouteName.POP_3, queryParams);
  }
}
