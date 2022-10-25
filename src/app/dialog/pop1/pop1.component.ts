import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pop1',
  templateUrl: './pop1.component.html',
  styleUrls: ['./pop1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop1Component {
  constructor(private _router: Router, private _dialog: MatDialog) {}

  next() {
    this._dialog.closeAll();
    this._router.navigate([{ outlets: { popup: ['dialog2'] } }]);
  }
}
