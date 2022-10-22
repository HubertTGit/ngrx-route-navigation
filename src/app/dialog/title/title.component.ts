import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnInit {
  title = '';
  showCancel = true;
  showBack = false;

  constructor(
    private _active: ActivatedRoute,
    private router: Router,
    private _ref: MatDialog
  ) {}

  ngOnInit(): void {
    const re = this._ref.getDialogById('12');

    const data = re?.['_ref'].config.data;
    this.title = data.title;
    this.showBack = data.showBack;
    this.showCancel = data.showCancel;

    // this._active.data.subscribe({
    //   next: (data) => {
    //     this.title = data?.['title'];
    //     this.showCancel = data?.['showCancel'];
    //     this.showBack = data?.['showBack'];

    //     console.log(data);
    //   },
    // });
  }

  goBack() {}

  close() {
    this.router
      .navigate([{ outlets: { popup: null } }])
      .then(() => this._ref.closeAll());
  }
}
