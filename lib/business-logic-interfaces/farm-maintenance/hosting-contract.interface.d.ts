import { ObjectId, Types } from "mongoose";
import { CoinMarketDetails } from "../../business-logic-interfaces/market-info/coin-market-details.interface";
import { Customer } from "./customer.interface";
import { MinerMarketDetails } from "../../business-logic-interfaces/market-info/miner-market-details.interface";
import { HostedMiner } from "./hosted-miner.interface";
import { Pool } from "./pool.interface";
export declare enum MinerHostingConfigurationStage {
    UNKNOWN = 0,
    CLIENT_SETUP_INSTRUCTIONS_SENT = 1,
    CLIENT_SETUP_INFO_RECEIVED = 2,
    MINER_SETUP_COMPLETION_SENT = 3,
    SUCCESSFULLY_HOSTING = 4
}
export declare enum MinerIntakeStage {
    UNKNOWN = 0,
    OWNER_CONTACT_INFO_GATHERED = 1,
    QUOTES_SOURCED = 2,
    CONTRACT_AGREEMENTS_SENT = 3,
    CONTRACT_AGREEMENTS_SIGNED = 4,
    HARDWARE_ORDERS_PLACED = 5,
    SUPPLIER_INVOICES_RECEIVED = 6,
    SHIPMENT_TRACKING_INFO_RECEIVED = 7,
    HARDWARE_REACHED_CUSTOMS = 8,
    HARDWARE_RECEIVED = 9,
    ISOLATED_QA = 10,
    FACILITY_QA = 11,
    RETURNED_TO_SUPPLIER = 12,
    SUCCESSFULLY_INTOOK = 13
}
export declare enum ContractStage {
    UNKNOWN = 0,
    ACTIVE = 1,
    INACTIVE = 2,
    CANCELED = 3,
    COMPANY_ONLY = 4
}
export type ContractDuration = {
    startDateInMillis: number;
    endDateInMillis: number;
};
export type PoolMiningOption = {
    poolId: ObjectId;
    miningDurationInMillis: number;
};
export type MarketInfo = {
    coinMarketInfo: CoinMarketDetails;
    minerMarketInfo: MinerMarketDetails;
};
export type PoolActivity = {
    expectedActivePoolIndex: number;
};
export interface HostingContract {
    _id: Types.ObjectId;
    previousContract: HostingContract;
    customer: Customer;
    contractStage: ContractStage;
    minerIntakeStage: MinerIntakeStage;
    hostedMiner: HostedMiner;
    hostingStage: MinerHostingConfigurationStage;
    contractDuration: ContractDuration;
    finalCompanyPool: Pool;
    poolMiningOptions: Types.Array<PoolMiningOption>;
    historicalPoolMiningOptions: Types.Array<string>;
    poolActivity: PoolActivity;
    marketInfoAtRatification: MarketInfo;
}
export declare const CONTRACT_FIELDS_TO_POPULATE: ({
    path: string;
    populate?: never;
} | {
    path: string;
    populate: {
        path: string;
    };
})[];
//# sourceMappingURL=hosting-contract.interface.d.ts.map