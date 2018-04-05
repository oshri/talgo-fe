import { Component, Input, OnInit, OnDestroy, Inject } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { AuthSrv } from "../../services/auth/auth.service";

import {
  fadeInAnimation,
  slideInOutAnimation
} from "../../utils/routerTransition/routerTransition";

@Component({
  selector: "tg-login",
  styleUrls: ["login.component.scss"],
  templateUrl: "login.component.html"
})
export class TgLoginComponent implements OnInit {
  constructor(
    @Inject(AuthSrv) public authSrv: AuthSrv,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit() {
    // this.authSrv.user.subscribe(res => {
    //   this.router.navigate(["/markets"]);
    // });
  }
}
