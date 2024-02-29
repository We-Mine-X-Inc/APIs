import { Types } from "mongoose";
import { CoinType } from "../market-info";

export type Wallet = {
  _id: Types.ObjectId;
  address: string;
  supportedCoinTypes: CoinType[];
  owner: Types.ObjectId;
};

export type WalletPreference = {
  coinType: CoinType;
  wallet: Types.ObjectId;
};
