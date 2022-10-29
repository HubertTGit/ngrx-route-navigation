import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/state/products.selector';
import { RouteName } from '../dialog.model';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop3Component implements OnInit {
  products$ = this._store.select(selectProducts);

  constructor(private _store: Store) {}

  prevPath = RouteName.POP_2;

  ngOnInit(): void {}
}
