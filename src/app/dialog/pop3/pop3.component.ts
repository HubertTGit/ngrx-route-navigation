import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.component.html',
  styleUrls: ['./pop3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pop3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
