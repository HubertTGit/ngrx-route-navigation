import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { Pop1Component } from './dialog/pop1/pop1.component';
import { Pop2Component } from './dialog/pop2/pop2.component';
import { TitleComponent } from './dialog/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DialogComponent,
    Pop1Component,
    Pop2Component,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
