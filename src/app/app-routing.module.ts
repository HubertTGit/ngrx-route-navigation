import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { Pop1Component } from './dialog/pop1/pop1.component';
import { Pop2Component } from './dialog/pop2/pop2.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { StateGuard } from './state.guard';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  {
    path: 'dialog1',
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop1Component,
      preserveQuery: false,
    },
    canActivate: [StateGuard],
  },
  {
    path: 'dialog2',
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop2Component,
      preserveQuery: false,
    },
    canActivate: [StateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
  selectTitle, // Select the title if available
} = getSelectors();
