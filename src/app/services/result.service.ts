import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Activity {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor(private _http: HttpClient) {}

  getActivity(): Observable<Activity> {
    return this._http.get<Activity>('http://www.boredapi.com/api/activity');
  }
}
