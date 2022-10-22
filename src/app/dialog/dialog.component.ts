import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { retry } from 'rxjs';

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
    private _activated: ActivatedRoute,
    private _view: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this._activated.data.subscribe({
      next: (data) => {
        const ref = this._dialog.open(data?.['component'], {
          closeOnNavigation: true,
          role: 'dialog',
          enterAnimationDuration: '0ms',
          exitAnimationDuration: '0ms',
          data: data,
          id: '12',
        });

        ref.backdropClick().subscribe({
          next: () => {
            if (data?.['preserveQuery']) {
              this._router.navigate([{ outlets: { popup: null } }], {
                queryParamsHandling: 'preserve',
              });
            }
            this._router.navigate([{ outlets: { popup: null } }]);
          },
        });
      },
    });
  }
}
