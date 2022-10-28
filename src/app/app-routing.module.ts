import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { Pop1Component } from './dialog/pop1/pop1.component';
import { Pop2Component } from './dialog/pop2/pop2.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Pop3Component } from './dialog/pop3/pop3.component';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { StateGuard } from './dialog/state.guard';
import { RouteName } from './dialog/dialog.model';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  {
    path: RouteName.POP_1,
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop1Component,
      preserveQuery: false,
    },
    canActivate: [StateGuard],
  },
  {
    path: RouteName.POP_2,
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop2Component,
      preserveQuery: false,
    },
    canActivate: [StateGuard],
  },
  {
    path: RouteName.POP_3,
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop3Component,
      preserveQuery: false,
    },
    canActivate: [StateGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
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
