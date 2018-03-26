import { Component, Inject } from "@angular/core";
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
  constructor(@Inject(AuthSrv) public authSrv: AuthSrv) {}
}
