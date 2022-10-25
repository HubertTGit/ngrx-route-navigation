import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectQueryParam,
  selectUrl,
  selectQueryParams,
} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store, private _router: Router) {}
  ngOnInit(): void {
    this._store.select(selectQueryParam('order')).subscribe({
      next: (r) => {
        // if(r !== "banana")
        // this._router.createUrlTree
      },
    });
  }
  title = 'routing-example';
}
