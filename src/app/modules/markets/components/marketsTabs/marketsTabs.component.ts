import { Component, Inject } from "@angular/core";
import { Observable, Subscribable } from "rxjs/Observable";
import { MarketsSrv } from "../../services/markets/markets.service";
import { IMarket } from "../../models";

@Component({
  selector: "tg-markets-tabs",
  styleUrls: ["./marketsTabs.component.scss"],
  templateUrl: "./marketsTabs.component.html"
})
export class TgMarketsTabsComponent {
  marketsTabs$: Observable<IMarket[]>;
  activeLinkIndex = 0;
  constructor(@Inject(MarketsSrv) private marketsSrv: MarketsSrv) {
    this.marketsTabs$ = this.marketsSrv.get();
  }
}
