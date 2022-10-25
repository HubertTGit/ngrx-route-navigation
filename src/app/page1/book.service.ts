import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addBook } from '../state/actions';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private _http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this._http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items.map((f) => f) || []));
  }
}

@Injectable({ providedIn: 'root' })
export class SideEffectService {
  private count = 0;
  constructor(private actions$: Actions) {}

  //   excellence$ = createEffect(() => this.actions$.pipe(ofType(addBook), map((book) => count++)))
}
