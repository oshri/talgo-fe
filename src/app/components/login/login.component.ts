import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthSrv } from '../../modules/common/services/auth/auth.service';

@Component({
  selector: 'tg-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})
export class TgLoginComponent {
  constructor(@Inject(AuthSrv) public authSrv: AuthSrv) {}
}
