import { Component, Inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { AuthSrv } from "../../services/auth/auth.service";
import {
  fadeInAnimation,
  slideInOutAnimation
} from "../../utils/routerTransition/routerTransition";

@Component({
  selector: "talgo",
  templateUrl: "./talgo.component.html",
  styleUrls: ["./talgo.component.scss"],
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" }
})
export class TalGoComponent {
  constructor(
    public authSrv: AuthSrv,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "talgo-white",
      sanitizer.bypassSecurityTrustResourceUrl("assets/logo/talgo-white.svg")
    );

    iconRegistry.addSvgIcon(
      "talgo-gray",
      sanitizer.bypassSecurityTrustResourceUrl("assets/logo/talgo-gray.svg")
    );

    iconRegistry.addSvgIcon(
      "talgo-splash",
      sanitizer.bypassSecurityTrustResourceUrl("assets/logo/talgo-splash.svg")
    );
  }
}
