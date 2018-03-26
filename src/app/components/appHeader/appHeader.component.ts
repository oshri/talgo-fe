import { Component, Input, OnInit, OnDestroy, Inject } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { AuthSrv } from "../../services/auth/auth.service";
import { IUser } from "../../models";

@Component({
  selector: "tg-app-header",
  styleUrls: ["appHeader.component.scss"],
  templateUrl: "appHeader.component.html",
  animations: [
    trigger("authenticated", [
      state(
        "not-authenticated",
        style({
          backgroundColor: "#F8F8F8"
        })
      ),
      state(
        "authenticated",
        style({
          backgroundColor: "#1d1c1a"
        })
      ),
      transition(
        "not-authenticated <=> authenticated",
        animate("250ms ease-in")
      )
    ]),
    trigger("mode", [
      state(
        "maximize",
        style({
          display: "block"
        })
      ),
      state(
        "minimize",
        style({
          display: "none"
        })
      ),
      transition("maximize <=> minimize", animate("300ms ease-out"))
    ])
  ]
})
export class TgAppHeaderComponent {
  @Input() authenticated: boolean;

  @Input() user: IUser;

  headerMode: string = "minimize";

  constructor(@Inject(AuthSrv) public authSrv: AuthSrv) {}
}
