import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() showCancel = true;
  @Input() prevPath: string | undefined;
  @Input() preserveQuery = false;

  constructor(private router: Router, private _ref: MatDialog) {}

  close() {
    if (this.preserveQuery) {
      this.router.navigate([{ outlets: { popup: null } }], {
        queryParamsHandling: 'merge',
      });
      this._close();
      return;
    }

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
    this._ref.closeAll();
  }
}
