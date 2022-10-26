import { Component, OnInit } from '@angular/core';
import { RouteName } from './dialog/dialog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // dummy
  }
  title = 'routing-example';
  ROUTE = RouteName;
}
