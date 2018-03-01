import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { IMarketAuth } from "../../models/marketAuth.interface";
import { IBalance } from "../../models/balance.interface";

const BALANCE: IBalance[] = [
  {
    asset: "BTC",
    free: "0.01340002",
    locked: "0.00000000"
  },
  {
    asset: "LTC",
    free: "0.00122000",
    locked: "0.00000000"
  },
  {
    asset: "ETH",
    free: "0.45577800",
    locked: "0.00000000"
  },
  {
    asset: "NEO",
    free: "39.47825300",
    locked: "0.00000000"
  },
  {
    asset: "BNB",
    free: "0.00002031",
    locked: "0.00000000"
  },
  {
    asset: "EOS",
    free: "207.93760000",
    locked: "0.00000000"
  },
  {
    asset: "BNT",
    free: "0.38900000",
    locked: "0.00000000"
  },
  {
    asset: "GAS",
    free: "0.00025036",
    locked: "0.00000000"
  },
  {
    asset: "IOTA",
    free: "0.49300000",
    locked: "0.00000000"
  },
  {
    asset: "XMR",
    free: "0.00027000",
    locked: "0.00000000"
  },
  {
    asset: "RDN",
    free: "88.86300000",
    locked: "0.00000000"
  },
  {
    asset: "LSK",
    free: "99.97000000",
    locked: "0.00000000"
  },
  {
    asset: "ADA",
    free: "1158.50000000",
    locked: "0.00000000"
  },
  {
    asset: "XLM",
    free: "0.47300000",
    locked: "0.00000000"
  }
];

@Injectable()
export class Auth {
  private fakeBalanceResponse: BehaviorSubject<
    IBalance[]
  > = new BehaviorSubject(BALANCE);

  public market(name: string, IMarketAuth): Observable<IBalance[]> {
    return this.fakeBalanceResponse;
  }
}
