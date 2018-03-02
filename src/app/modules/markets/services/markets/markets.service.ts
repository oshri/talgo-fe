import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { IMarket } from "../../models";

const MARKETS = [{ name: "BINANCE" }];

@Injectable()
export class MarketsSrv {
  private markets: BehaviorSubject<IMarket[]> = new BehaviorSubject(MARKETS);

  get(): Observable<IMarket[]> {
    return this.markets;
  }
}
