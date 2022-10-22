import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { Pop1Component } from './dialog/pop1/pop1.component';
import { Pop2Component } from './dialog/pop2/pop2.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  {
    path: 'dialog1',
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop1Component,
      showCancel: true,
      showBack: true,
      preserveQuery: true,
      title: 'POP 1 TITLE',
    },
  },
  {
    path: 'dialog2',
    component: DialogComponent,
    outlet: 'popup',
    data: {
      component: Pop2Component,
      showCancel: true,
      showBack: true,
      preserveQuery: true,
      title: 'POP 2 TITLE',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
