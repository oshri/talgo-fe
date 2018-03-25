import { Component, Inject } from "@angular/core";
import { AuthSrv } from "../../services/auth/auth.service";

@Component({
  selector: "talgo",
  templateUrl: "./talgo.component.html",
  styleUrls: ["./talgo.component.scss"]
})
export class TalGoComponent {
  constructor(@Inject(AuthSrv) public authSrv: AuthSrv) {}
}
