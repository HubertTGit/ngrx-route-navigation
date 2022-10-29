import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book.model';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private _http: HttpClient) {}

  getBooksByAuthor(author: string): Observable<Book[]> {
    return this._http
      .get<{ items: Book[] }>(
        `https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=${author}`
      )
      .pipe(map((books) => books.items.map((f) => f) || []));
  }
}
