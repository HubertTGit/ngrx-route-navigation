import { Injectable } from '@angular/core';
import { Activity } from 'src/app/services/result.service';
import { ComponentStore } from '@ngrx/component-store';
import { state } from '@angular/animations';

export interface SuccessState {
  result: Activity | null;
}

@Injectable()
export class SuccessStore extends ComponentStore<SuccessState> {
  constructor() {
    super({ result: null });
  }

  readonly activity$ = this.select((state) => state.result);
}
