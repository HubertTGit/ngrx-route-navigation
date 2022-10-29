import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName, QueryParamCollection, ParamName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop1',
  templateUrl: './pop1.component.html',
  styleUrls: ['./pop1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop1Component {
  constructor(private _dialogService: DialogService, private _router: Router) {}

  next() {
    const params: Partial<QueryParamCollection> = {
      [ParamName.AUTHOR]: 'blue',
    };

    this._router.navigateByUrl(
      this._dialogService.gotoTree(RouteName.POP_2, params)
    );
  }
}
