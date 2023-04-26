import { Types } from "mongoose";
import { CoinType } from "../market-insights/coin-market-info.interface";
import { Customer } from "./customer.interface";
export declare enum PoolPurposeType {
    UNKNOWN = 0,
    MINING_FEE = 1,
    PURE_COMPANY_REVENUE = 2,
    CLIENT_REVENUE = 3
}
export declare enum PoolType {
    UNKNOWN = 0,
    SLUSH_POOL = 1,
    POOL_MARS = 2
}
export interface Pool {
    _id: Types.ObjectId;
    creator: Customer;
    protocol: string;
    domain: string;
    username: string;
    poolType: PoolType;
    coinType: CoinType;
    apiToken: string;
    purpose: PoolPurposeType;
}
export declare const POOL_FIELDS_TO_POPULATE: string[];
//# sourceMappingURL=pool.interface.d.ts.map