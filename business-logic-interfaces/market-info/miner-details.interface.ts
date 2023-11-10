import { Types } from "mongoose";
import { CoinDetails } from "./coin-details.interface";

export type MinerDetails = {
  _id: Types.ObjectId;
  model: String;
  coin: CoinDetails;
  description: String;
  efficiency: String;
  expectedHashrate: String;
  wattage: String;
};
