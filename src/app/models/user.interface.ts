import { IMarketAuth } from "../modules/common/models";

export interface IUser {
  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
  emailConfirm: boolean;
  markets?: IUserMarket;
}

export interface IUserMarket {
  marketName: string;
  credentials: IMarketAuth;
}
