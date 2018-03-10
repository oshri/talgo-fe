import { IMarketAuth } from "./marketAuth.interface";

export interface IUser {
  firstName: string;
  lastName: string;
  markets?: IUserMarket;
}

export interface IUserMarket {
  marketName: string;
  credentials: IMarketAuth;
}
