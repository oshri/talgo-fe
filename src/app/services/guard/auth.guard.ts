import { Injectable, Inject } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

import { AuthSrv } from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthSrv) private authSrv: AuthSrv
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authSrv.user
      .take(1)
      .map(user => !!user)
      .do(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(["/login"]);
        }
      });
  }
}
