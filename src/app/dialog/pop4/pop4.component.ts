import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { share, shareReplay, take } from 'rxjs';

import {
  SuccessState,
  SuccessStore,
} from 'src/app/state/success/success.store';
import { RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop4',
  templateUrl: './pop4.component.html',
  styleUrls: ['./pop4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop4Component implements OnInit {
  readonly success$ = this._successStore.activity$.pipe(shareReplay());

  constructor(
    private readonly _successStore: SuccessStore,
    private _dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.success$.pipe(take(1)).subscribe({
      next: (v) => {
        if (!v) {
          this._dialogService.gotoNavigation(RouteName.POP_1);
        }
      },
    });
  }
}
