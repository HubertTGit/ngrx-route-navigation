import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-dialog',
  template: '<ng-container></ng-container>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  @HostListener('document:keydown.escape', ['$event']) onEscape() {
    this._router.navigate([{ outlets: { popup: null } }]);
  }

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activated.data.subscribe({
      next: (data) => {
        this._dialog.closeAll();

        const ref = this._dialog.open(data?.['component'], {
          closeOnNavigation: true,
          role: 'dialog',
          enterAnimationDuration: '0ms',
          exitAnimationDuration: '0ms',
          minWidth: '500px',
        });

        ref.backdropClick().subscribe({
          next: () => {
            if (data?.['preserveQuery']) {
              this._router.navigate([{ outlets: { popup: null } }], {
                queryParamsHandling: 'merge',
              });
              return;
            }
            this._router.navigate([{ outlets: { popup: null } }]);
          },
        });
      },
    });
  }
}
