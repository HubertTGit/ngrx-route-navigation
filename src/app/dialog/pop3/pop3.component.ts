import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouteName } from '../dialog.model';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pop3Component implements OnInit {
  constructor() {}

  prevPath = RouteName.POP_2;

  ngOnInit(): void {}
}
