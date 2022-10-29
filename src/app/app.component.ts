import { Component, OnInit } from '@angular/core';
import {
  ParamName,
  QueryParamCollection,
  RouteName,
} from './dialog/dialog.model';
import { DialogService } from './dialog/dialog.service';
import { ProductsEffectService } from './state/product.effect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _dialogService: DialogService,
    private movieEffectService: ProductsEffectService
  ) {}
  ngOnInit(): void {}

  title = 'routing-example';
  ROUTE = RouteName;

  goto(e: Event) {
    e.preventDefault();
    this._dialogService.gotoNavigation(RouteName.POP_1);
  }
}
