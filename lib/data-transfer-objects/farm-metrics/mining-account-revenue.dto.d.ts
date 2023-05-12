import { MiningAccountRevenue } from "../../business-logic-interfaces/farm-metrics/mining-account-revenue.interface";
import { EconomicValue } from "../../business-logic-interfaces/farm-metrics/performance/revenue.interface";
import { TimeRange, TimeSingleton } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddMiningAccountRevenueRequestDto {
    poolUsername?: string;
    timeRange?: TimeRange;
    cummulativeProfits?: EconomicValue;
}
export interface AddMiningAccountRevenueRequest {
    poolUsername: string;
    timeRange: TimeRange;
    cummulativeProfits: EconomicValue;
}
export declare class ListMiningAccountRevenueRequestDto {
    accountUsernames: string[];
    timeRange?: TimeRange;
    timeSingleton?: TimeSingleton;
}
export interface ListMiningAccountRevenueRequest {
    accountUsernames: string[];
    timeRange: TimeRange;
    timeSingleton: TimeSingleton;
}
export declare class ListMinerAccountRevenueResponseDto {
    accountRevenues: MiningAccountRevenue[];
}
export interface ListMinerAccountRevenueResponse {
    accountRevenues: MiningAccountRevenue[];
}
//# sourceMappingURL=mining-account-revenue.dto.d.ts.map