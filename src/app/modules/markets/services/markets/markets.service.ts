import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { RequestOptions, Request, RequestMethod } from "@angular/http";
import { tap, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { IMarket } from "../../models";
import { ISpreadForm, IMarketAuth } from "../../../common/models";

const MARKETS = [{ name: "BINANCE" }];

const TICKERS = [
  {
    price: "0.08947200",
    symbol: "ETHBTC"
  },
  {
    price: "0.02110000",
    symbol: "LTCBTC"
  },
  {
    price: "0.00106960",
    symbol: "BNBBTC"
  },
  {
    price: "0.01241200",
    symbol: "NEOBTC"
  },
  {
    price: "0.14143000",
    symbol: "BCCBTC"
  },
  {
    price: "0.00445400",
    symbol: "GASBTC"
  },
  {
    price: "0.00124500",
    symbol: "HSRBTC"
  },
  {
    price: "0.00089100",
    symbol: "MCOBTC"
  },
  {
    price: "0.00253400",
    symbol: "WTCBTC"
  },
  {
    price: "0.00007025",
    symbol: "LRCBTC"
  },
  {
    price: "0.00300300",
    symbol: "QTUMBTC"
  },
  {
    price: "0.00001685",
    symbol: "YOYOBTC"
  },
  {
    price: "0.00165700",
    symbol: "OMGBTC"
  },
  {
    price: "0.00011857",
    symbol: "ZRXBTC"
  },
  {
    price: "0.00088200",
    symbol: "STRATBTC"
  },
  {
    price: "0.00001375",
    symbol: "SNGLSBTC"
  },
  {
    price: "0.00039933",
    symbol: "BQXBTC"
  },
  {
    price: "0.00026647",
    symbol: "KNCBTC"
  },
  {
    price: "0.00000620",
    symbol: "FUNBTC"
  },
  {
    price: "0.00002302",
    symbol: "SNMBTC"
  },
  {
    price: "0.00020273",
    symbol: "IOTABTC"
  },
  {
    price: "0.00006182",
    symbol: "LINKBTC"
  },
  {
    price: "0.00000823",
    symbol: "XVGBTC"
  },
  {
    price: "0.00009384",
    symbol: "CTRBTC"
  },
  {
    price: "0.00049500",
    symbol: "SALTBTC"
  },
  {
    price: "0.00013712",
    symbol: "MDABTC"
  },
  {
    price: "0.00043700",
    symbol: "MTLBTC"
  },
  {
    price: "0.00007259",
    symbol: "SUBBTC"
  },
  {
    price: "0.00092076",
    symbol: "EOSBTC"
  },
  {
    price: "0.00002093",
    symbol: "SNTBTC"
  },
  {
    price: "0.00320600",
    symbol: "ETCBTC"
  },
  {
    price: "0.00001822",
    symbol: "MTHBTC"
  },
  {
    price: "0.00032249",
    symbol: "ENGBTC"
  },
  {
    price: "0.00001015",
    symbol: "DNTBTC"
  },
  {
    price: "0.04510200",
    symbol: "ZECBTC"
  },
  {
    price: "0.00054144",
    symbol: "BNTBTC"
  },
  {
    price: "0.00006397",
    symbol: "ASTBTC"
  },
  {
    price: "0.06755200",
    symbol: "DASHBTC"
  },
  {
    price: "0.00009225",
    symbol: "OAXBTC"
  },
  {
    price: "0.00017340",
    symbol: "ICNBTC"
  },
  {
    price: "0.01303000",
    symbol: "BTGBTC"
  },
  {
    price: "0.00018770",
    symbol: "EVXBTC"
  },
  {
    price: "0.00003258",
    symbol: "REQBTC"
  },
  {
    price: "0.00002686",
    symbol: "VIBBTC"
  },
  {
    price: "0.00000503",
    symbol: "TRXBTC"
  },
  {
    price: "0.00007699",
    symbol: "POWRBTC"
  },
  {
    price: "0.00046290",
    symbol: "ARKBTC"
  },
  {
    price: "0.00010775",
    symbol: "XRPBTC"
  },
  {
    price: "0.00035410",
    symbol: "MODBTC"
  },
  {
    price: "0.00002052",
    symbol: "ENJBTC"
  },
  {
    price: "0.00011170",
    symbol: "STORJBTC"
  },
  {
    price: "0.00055007",
    symbol: "VENBTC"
  },
  {
    price: "0.00049450",
    symbol: "KMDBTC"
  },
  {
    price: "0.00001842",
    symbol: "RCNBTC"
  },
  {
    price: "0.00031023",
    symbol: "NULSBTC"
  },
  {
    price: "0.00030899",
    symbol: "RDNBTC"
  },
  {
    price: "0.02959800",
    symbol: "XMRBTC"
  },
  {
    price: "0.00004016",
    symbol: "DLTBTC"
  },
  {
    price: "0.00005865",
    symbol: "AMBBTC"
  },
  {
    price: "0.00004424",
    symbol: "BATBTC"
  },
  {
    price: "0.00006300",
    symbol: "BCPTBTC"
  },
  {
    price: "0.00019297",
    symbol: "ARNBTC"
  },
  {
    price: "0.00228090",
    symbol: "GVTBTC"
  },
  {
    price: "0.00000921",
    symbol: "CDTBTC"
  },
  {
    price: "0.00046070",
    symbol: "GXSBTC"
  },
  {
    price: "0.00000780",
    symbol: "POEBTC"
  },
  {
    price: "0.00003386",
    symbol: "QSPBTC"
  },
  {
    price: "0.00002612",
    symbol: "BTSBTC"
  },
  {
    price: "0.00609500",
    symbol: "XZCBTC"
  },
  {
    price: "0.00312880",
    symbol: "LSKBTC"
  },
  {
    price: "0.00001593",
    symbol: "TNTBTC"
  },
  {
    price: "0.00001578",
    symbol: "FUELBTC"
  },
  {
    price: "0.00001285",
    symbol: "MANABTC"
  },
  {
    price: "0.00426700",
    symbol: "BCDBTC"
  },
  {
    price: "0.02240100",
    symbol: "DGDBTC"
  },
  {
    price: "0.00013851",
    symbol: "ADXBTC"
  },
  {
    price: "0.00003800",
    symbol: "ADABTC"
  },
  {
    price: "0.00277280",
    symbol: "PPTBTC"
  },
  {
    price: "0.00001884",
    symbol: "CMTBTC"
  },
  {
    price: "0.00004360",
    symbol: "XLMBTC"
  },
  {
    price: "0.00001778",
    symbol: "CNDBTC"
  },
  {
    price: "0.00001261",
    symbol: "LENDBTC"
  },
  {
    price: "0.00018828",
    symbol: "WABIBTC"
  },
  {
    price: "0.00000784",
    symbol: "TNBBTC"
  },
  {
    price: "0.00071230",
    symbol: "WAVESBTC"
  },
  {
    price: "0.00005460",
    symbol: "GTOBTC"
  },
  {
    price: "0.00050200",
    symbol: "ICXBTC"
  },
  {
    price: "0.00003332",
    symbol: "OSTBTC"
  },
  {
    price: "0.00013596",
    symbol: "ELFBTC"
  },
  {
    price: "0.00036580",
    symbol: "AIONBTC"
  },
  {
    price: "0.00165160",
    symbol: "NEBLBTC"
  },
  {
    price: "0.00010807",
    symbol: "BRDBTC"
  },
  {
    price: "0.00028070",
    symbol: "EDOBTC"
  },
  {
    price: "0.00007662",
    symbol: "WINGSBTC"
  },
  {
    price: "0.00019580",
    symbol: "NAVBTC"
  },
  {
    price: "0.00211800",
    symbol: "LUNBTC"
  },
  {
    price: "0.00020660",
    symbol: "TRIGBTC"
  },
  {
    price: "0.00009441",
    symbol: "APPCBTC"
  },
  {
    price: "0.00005243",
    symbol: "VIBEBTC"
  },
  {
    price: "0.00013590",
    symbol: "RLCBTC"
  },
  {
    price: "0.00028230",
    symbol: "INSBTC"
  },
  {
    price: "0.00059700",
    symbol: "PIVXBTC"
  },
  {
    price: "0.00000482",
    symbol: "IOSTBTC"
  },
  {
    price: "0.00002436",
    symbol: "CHATBTC"
  },
  {
    price: "0.00041050",
    symbol: "STEEMBTC"
  },
  {
    price: "0.00089300",
    symbol: "NANOBTC"
  },
  {
    price: "0.00034730",
    symbol: "VIABTC"
  },
  {
    price: "0.00006199",
    symbol: "BLZBTC"
  },
  {
    price: "0.00024770",
    symbol: "AEBTC"
  },
  {
    price: "0.00002302",
    symbol: "RPXBTC"
  }
];

const SPREAD = [
  "starting run",
  "current market price: 0.00061285",
  "buying 15.0 BNTBTC at MARKET price",
  "buying 35.0 BNTBTC at SPREAD",
  "buying 6.0 BNT at 0.0005822 price",
  "buying 6.0 BNT at 0.0005516 price",
  "buying 6.0 BNT at 0.0005209 price",
  "buying 6.0 BNT at 0.0004903 price",
  "buying 6.0 BNT at 0.0004596 price",
  "buying 5.0 BNT at 0.000429 price"
];

@Injectable()
export class MarketsSrv {
  private url: string = "https://guyt.pythonanywhere.com/";
  private markets: BehaviorSubject<IMarket[]> = new BehaviorSubject(MARKETS);

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  get(): Observable<IMarket[]> {
    return this.markets;
  }

  public getSpread(
    marketName: string,
    marketToken: IMarketAuth,
    spreadForm: ISpreadForm
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };

    const data = { ...marketToken, ...spreadForm };
    const body = JSON.stringify(data);

    const url = `${this.url}${marketName}/spread `;
    // return Observable.of(SPREAD);
    return this.http.post(url, body, httpOptions);
  }

  public getTickers(
    marketName: string,
    marketToken: IMarketAuth
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };

    const body = JSON.stringify(marketToken);

    const url = `${this.url}${marketName}/tickers`;
    // return Observable.of(TICKERS);
    return this.http.post(url, body, httpOptions);
  }
}
