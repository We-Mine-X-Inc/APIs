import { Types } from "mongoose";
import { CoinMarketDetails } from "./coin-details.interface";
export type MinerProductDetails = {
  _id: Types.ObjectId;
  model: String;
  coin: CoinMarketDetails;
  description: String;
  efficiency: String;
  expectedHashrate: String;
  wattage: String;
};
//# sourceMappingURL=miner-details.interface.d.ts.map
