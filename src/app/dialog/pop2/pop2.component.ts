import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouteName } from '../dialog.model';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.component.html',
  styleUrls: ['./pop2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop2Component implements OnInit {
  constructor(private _dialogService: DialogService) {}

  ngOnInit(): void {}

  previous() {
    this._dialogService.goto(RouteName.POP_1);
  }
}
