import { Types } from "mongoose";
import { CoinMarketDetails } from "./coin-market-details.interface";
export type MinerMarketDetails = {
    _id: Types.ObjectId;
    model: String;
    coin: CoinMarketDetails;
    description: String;
    efficiency: String;
    expectedHashrate: String;
    wattage: String;
};
//# sourceMappingURL=miner-market-details.interface.d.ts.map