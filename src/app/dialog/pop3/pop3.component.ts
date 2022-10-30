import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductsState } from 'src/app/state/actions';
import {
  selectProducts,
  selectProductState,
} from 'src/app/state/products/products.selector';

import { RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop3Component implements OnInit {
  products$ = this._store.select(selectProducts);
  state$ = this._store.select(selectProductState);

  constructor(private _store: Store, private dialoService: DialogService) {}

  prevPath = RouteName.POP_2;

  ngOnInit(): void {
    this.state$.subscribe({
      next: (result) => {
        if (result === 'error') {
          this.dialoService.gotoNavigation(RouteName.POP_1);
        }
      },
    });
  }
}
