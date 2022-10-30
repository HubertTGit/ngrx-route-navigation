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
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import {
  StoreRouterConnectingModule,
  routerReducer,
  NavigationActionTiming,
} from '@ngrx/router-store';
import { Pop3Component } from './dialog/pop3/pop3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffectService } from './state/products/product.effect.service';
import { booksReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/books/collection.reducer';
import { productsReducer } from './state/products/product.reducer';
import { BookEffectsService } from './state/books/book.effects.service';
import { statusReducer } from './state/status/status.reducer';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DialogComponent,
    Pop1Component,
    Pop2Component,
    Pop3Component,
    TitleComponent,
    Pop3Component,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      router: routerReducer,
      products: productsReducer,
      status: statusReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PreActivation,
    }),
    EffectsModule.forRoot([ProductsEffectService, BookEffectsService]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
