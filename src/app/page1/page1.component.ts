import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addBook,
  removeBook,
  retrieveBooks,
  removeAllBooks,
  addAllBooks,
} from '../state/actions';
import {
  selectBookCollection,
  selectBooks,
} from '../state/books/book.selector';
import { Book } from '../services/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component implements OnInit {
  bookState$ = this._store.select(selectBooks);
  collection$ = this._store.select(selectBookCollection);

  constructor(private _books: BookService, private _store: Store) {}

  books: Book[] = [];

  ngOnInit(): void {
    this._books.getBooksByAuthor().subscribe({
      next: (books) => {
        this._store.dispatch(retrieveBooks({ books }));
      },
    });
  }

  add(bookId: string) {
    this._store.dispatch(addBook({ bookId }));
  }

  remove(bookId: string) {
    if (bookId) {
      this._store.dispatch(removeBook({ bookId }));
    }
  }

  removeAll() {
    this._store.dispatch(removeAllBooks());
  }

  addAll() {
    let t: readonly Book[] = [];
    this.bookState$.forEach((g) => {
      t = g.books;
    });
    const ee = t.map((j) => j.id);
    this._store.dispatch(addAllBooks({ books: ee }));
  }
}
