import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ResultService } from 'src/app/services/result.service';
import { selectProducts } from 'src/app/state/products/products.selector';
import { selectStatus } from 'src/app/state/status/status.selector';
import {
  SuccessState,
  SuccessStore,
} from 'src/app/state/success/success.store';

import { ParamName, RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop3Component implements OnInit {
  products$ = this._store.select(selectProducts);
  state$ = this._store.select(selectStatus);

  constructor(
    private _store: Store,
    private dialoService: DialogService,
    private readonly _successStore: SuccessStore,
    private _resultService: ResultService
  ) {}

  prevPath = RouteName.POP_2; //will fail because the route param won't match if merged

  ngOnInit(): void {
    // listen to error
    this.state$.pipe(take(1)).subscribe({
      next: (result) => {
        if (result.state === 'error') {
          this.dialoService.gotoNavigation(RouteName.POP_1);
        }
      },
    });
  }

  gotoPage(evt: Event) {
    evt.preventDefault();

    this._resultService
      .getActivity()
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          this._successStore.setState({ result });
          this.dialoService.gotoNavigation(RouteName.POP_4, {
            [ParamName.SUCCESS]: true,
          });
        },
        error: () => {
          this.dialoService.gotoNavigation(RouteName.POP_1);
        },
      });

    //
  }
}
