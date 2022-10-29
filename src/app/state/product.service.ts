import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movies {
  products: MoviesProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface MoviesProduct {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getAllMovies(limit: string): Observable<Movies> {
    return this._http.get<Movies>(
      `https://dummyjson.com/products?limit=${limit}&skip=10&select=title,price`
    );
  }
}
