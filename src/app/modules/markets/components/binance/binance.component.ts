import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { IMarketAuth } from "../../../common/models";
import { MarketsAuth } from "../../../common/services/marketAuth/marketAuth.service";

@Component({
  selector: "tg-binance",
  styleUrls: ["./binance.component.scss"],
  templateUrl: "./binance.component.html"
})
export class TgBinanceComponent {
  constructor(@Inject(MarketsAuth) private marketsAuth: MarketsAuth) {}

  submit(event: IMarketAuth) {
    this.marketsAuth.market("binance", event).subscribe(res => {
      console.log(res);
    });
  }
}
