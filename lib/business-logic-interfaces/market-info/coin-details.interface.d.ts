import { Types } from "mongoose";
export declare enum CoinType {
    UNKNOWN = 0,
    KDA = 1,
    BTC = 2
}
export type CoinDetails = {
    _id: Types.ObjectId;
    coinType: CoinType;
    symbol: String;
    quantifyCryptoId: String;
    price: Number;
    percentageChange: Number;
};
//# sourceMappingURL=coin-details.interface.d.ts.map