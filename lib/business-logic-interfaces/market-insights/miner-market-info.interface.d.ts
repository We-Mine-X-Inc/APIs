import { Types } from "mongoose";
import { CoinType } from "./coin-market-info.interface";
import { InventoryItem } from "../farm-maintenance/inventory-item.interface";
export type MinerMarketInfo = {
    _id: Types.ObjectId;
    coinType: CoinType;
    minerInventoryItem: InventoryItem;
    dailyCoinEarning: number;
};
export declare const MINER_MARKET_INFO_FIELDS_TO_POPULATE: {
    path: string;
    populate: {
        path: string;
    };
}[];
//# sourceMappingURL=miner-market-info.interface.d.ts.map