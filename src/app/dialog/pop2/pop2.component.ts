import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectBooks } from 'src/app/state/books/book.selector';
import { selectStatus } from 'src/app/state/status/status.selector';
import { ParamName, QueryParamCollection, RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.component.html',
  styleUrls: ['./pop2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop2Component implements OnInit {
  books$ = this._store.select(selectBooks);
  state$ = this._store.select(selectStatus);

  prevPath = RouteName.POP_1;

  constructor(private _dialogService: DialogService, private _store: Store) {}

  ngOnInit(): void {
    this.state$.pipe(take(1)).subscribe({
      next: (result) => {
        if (result.state === 'error') {
          this._dialogService.gotoNavigation(RouteName.POP_1);
        }
      },
    });
  }

  goto() {
    const queryParams: Partial<QueryParamCollection> = {
      [ParamName.LIMIT]: 10,
      [ParamName.ORDER]: 'Same',
    };
    this._dialogService.gotoNavigation(RouteName.POP_3, queryParams);
  }
}
