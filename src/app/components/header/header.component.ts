import { Component, Input, OnInit, OnDestroy, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "tg-header",
  styleUrls: ["header.component.scss"],
  templateUrl: "header.component.html"
})
export class TgHeaderComponent {
  appName: string = "TalGo";

  constructor(@Inject(Router) private router: Router) {}
}
