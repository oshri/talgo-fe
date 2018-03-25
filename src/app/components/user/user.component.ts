import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tg-user',
  styleUrls: ['user.component.scss'],
  templateUrl: 'user.component.html'
})
export class TgUserComponent {
  constructor(@Inject(Router) private router: Router) {}
}
