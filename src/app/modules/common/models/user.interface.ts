import { IMarketAuth } from './marketAuth.interface';

export interface IUser {
  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
  markets?: IUserMarket;
}

export interface IUserMarket {
  marketName: string;
  credentials: IMarketAuth;
}
