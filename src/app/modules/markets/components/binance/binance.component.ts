import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { IMarketAuth, IBalance } from "../../../common/models";
import { MarketsAuth } from "../../../common/services/marketAuth/marketAuth.service";
import {
  slideInOutAnimation,
  fadeInAnimation
} from "../../../../utils/routerTransition/routerTransition";

import { MarketsSrv } from "../../services/markets/markets.service";
import { LoadingService } from "../../../../modules/loading/services/loading/loading.service";
import { ITickers } from "../../models";
import { ISpreadForm } from "../../../common/models";

@Component({
  selector: "tg-binance",
  styleUrls: ["./binance.component.scss"],
  templateUrl: "./binance.component.html"
})
export class TgBinanceComponent {
  marketAuth: IMarketAuth;
  balance: IBalance[];
  symbols: ITickers[];
  spread: [string];

  constructor(
    @Inject(LoadingService) private Loading: LoadingService,
    @Inject(MarketsSrv) private marketsSrv: MarketsSrv,
    @Inject(MarketsAuth) private marketsAuth: MarketsAuth
  ) {}

  submit(event: IMarketAuth) {
    this.marketAuth = event;

    this.marketsAuth
      .market("binance", event)
      .subscribe((response: IBalance[]) => {
        this.marketsSrv.getTickers("binance", event).subscribe(tickers => {
          this.symbols = tickers;
          this.Loading.setValue(false);
          this.balance = response;
        });
      });
  }

  getSpread(event: ISpreadForm) {
    this.marketsSrv
      .getSpread("binance", this.marketAuth, event)
      .subscribe(res => {
        this.spread = res;
      });
  }
}
