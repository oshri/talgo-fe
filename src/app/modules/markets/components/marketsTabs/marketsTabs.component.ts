import { Component, Inject } from "@angular/core";
import { Auth } from "../../services/auth/auth.service";
import { IBalance } from "../../models/balance.interface";

@Component({
  selector: "tg-markets-tabs",
  styleUrls: ["./marketsTabs.component.scss"],
  templateUrl: "./marketsTabs.component.html"
})
export class TgMarketsTabsComponent {
  constructor(@Inject(Auth) private auth: Auth) {}

  submit(event) {
    this.auth.market("binance", event).subscribe((balance: IBalance[]) => {
      console.log(balance);
    });
  }
}
