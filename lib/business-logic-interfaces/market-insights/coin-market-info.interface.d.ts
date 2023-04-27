import { Types } from "mongoose";
export declare enum CoinType {
    UNKNOWN = 0,
    KDA = 1,
    BTC = 2
}
export type CoinMarketInfo = {
    _id: Types.ObjectId;
    coinType: CoinType;
    coinPrice: number;
};
//# sourceMappingURL=coin-market-info.interface.d.ts.map