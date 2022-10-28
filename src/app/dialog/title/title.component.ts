import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { INIT } from '@ngrx/store';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() showCancel = true;
  @Input() preserveQuery = false;
  @Input() prevPath: string | undefined;

  constructor(private router: Router, private _dialog: MatDialog) {}

  close() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this._close();
  }

  goBack() {
    if (this.preserveQuery) {
      this.router.navigate([{ outlets: { popup: [this.prevPath] } }], {
        queryParamsHandling: 'merge',
      });

      return;
    }

    this.router.navigate([{ outlets: { popup: [this.prevPath] } }]);
  }

  private _close() {
    this._dialog.closeAll();
  }
}
