import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBooksState } from 'src/app/state/actions';
import { loadBookState, selectBooks } from 'src/app/state/books/book.selector';
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
  state$ = this._store.select(loadBookState);

  prevPath = RouteName.POP_1;
  constructor(private _dialogService: DialogService, private _store: Store) {}

  ngOnInit(): void {
    this.state$.subscribe({
      next: (result) => {
        console.log(result);
        if (result === 'error') {
          this._dialogService.gotoNavigation(RouteName.POP_1);
          this._store.dispatch(loadBooksState({ state: 'pending' }));
        }
      },
    });
  }

  previous() {
    this._dialogService.gotoNavigation(RouteName.POP_1);
  }

  goto() {
    const queryParams: Partial<QueryParamCollection> = {
      [ParamName.ORDER]: 'Same',
      [ParamName.LIMIT]: 10,
    };
    this._dialogService.gotoNavigation(RouteName.POP_3, queryParams);
  }
}
