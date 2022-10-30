import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAllproducts(limit: number): Observable<ProductResult> {
    return this._http.get<ProductResult>(
      `https://dummyjson.com/products?limit=${limit}&skip=10&select=title,price`
    );
  }
}
