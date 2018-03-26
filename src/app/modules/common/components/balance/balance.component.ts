import { Component, Input } from "@angular/core";
import { IBalance } from "../../models";

@Component({
  selector: "tg-balance",
  styleUrls: ["./balance.component.scss"],
  templateUrl: "./balance.component.html"
})
export class TgBalanceComponent {
  @Input() list: IBalance
}
