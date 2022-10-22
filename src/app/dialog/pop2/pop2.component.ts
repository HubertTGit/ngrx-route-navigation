import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.component.html',
  styleUrls: ['./pop2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop2Component implements OnInit {
  constructor(private _router: Router, private _dialog: MatDialog) {}

  ngOnInit(): void {}

  previous() {
    this._dialog.closeAll();
    this._router.navigate([{ outlets: { popup: ['dialog1'] } }]);
  }
}
