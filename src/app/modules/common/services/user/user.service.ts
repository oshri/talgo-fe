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
import { IUser, IMarketAuth } from "../../models";

const GUEST_USER: IUser = {
  firstName: "Guest",
  lastName: "User"
};

@Injectable()
export class UserSrv {
  private userMarkets: IMarketAuth[] = [];
  private markets: BehaviorSubject<IMarketAuth[]>;

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.markets = new BehaviorSubject(this.userMarkets);
  }

  getUser(): IUser {
    return GUEST_USER;
  }

  getMarkest(): Observable<IMarketAuth[]> {
    return this.markets;
  }

  pushMarket(market: IMarketAuth): void {
    this.userMarkets.push(market);
    this.markets.next(this.userMarkets);
  }
}
