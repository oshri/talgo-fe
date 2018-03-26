import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { IMarketAuth, IBalance } from "../../../common/models";
import { MarketsAuth } from "../../../common/services/marketAuth/marketAuth.service";
import {
  slideInOutAnimation,
  fadeInAnimation
} from "../../../../utils/routerTransition/routerTransition";

import { LoadingService } from "../../../../modules/loading/services/loading/loading.service";

@Component({
  selector: "tg-binance",
  styleUrls: ["./binance.component.scss"],
  templateUrl: "./binance.component.html"
})
export class TgBinanceComponent {
  balance: IBalance[];

  constructor(
    @Inject(LoadingService) private Loading: LoadingService,
    @Inject(MarketsAuth) private marketsAuth: MarketsAuth
  ) {}

  submit(event: IMarketAuth) {
    this.marketsAuth
      .market("binance", event)
      .subscribe((response: IBalance[]) => {
        this.Loading.setValue(false);
        this.balance = response;
      });
  }
}
