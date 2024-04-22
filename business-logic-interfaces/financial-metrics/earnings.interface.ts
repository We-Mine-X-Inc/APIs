import { Types } from "mongoose";

export type Earnings = {
  _id: Types.ObjectId;
  receivingWallet: Types.ObjectId;
  quantityInCoin: number;
  quantityInUSD: number;
};
