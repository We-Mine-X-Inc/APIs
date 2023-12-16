import { Types } from "mongoose";
export declare enum CoinType {
    UNKNOWN = 0,
    KDA = 1,
    BTC = 2
}
export type CoinMarketDetails = {
    _id: Types.ObjectId;
    coinType: CoinType;
    symbol: String;
    quantifyCryptoId: String;
    price: Number;
    percentageChange: Number;
};
//# sourceMappingURL=coin-market-details.interface.d.ts.map