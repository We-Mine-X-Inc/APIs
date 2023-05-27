import { MiningAccountRevenue } from "../../business-logic-interfaces/farm-metrics/mining-account-revenue.interface";
import { EconomicValue } from "../../business-logic-interfaces/farm-metrics/performance/revenue.interface";
import { TimeRange, TimeSingleton } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddMiningAccountRevenueRequestDto {
    accountAddress?: string;
    timeRange?: TimeRange;
    cummulativeProfits?: EconomicValue;
}
export interface AddMiningAccountRevenueRequest {
    accountAddress: string;
    timeRange: TimeRange;
    cummulativeProfits: EconomicValue;
}
export declare class ListMiningAccountRevenueRequestDto {
    accountAddresses: string[];
    timeRange?: TimeRange;
    timeSingleton?: TimeSingleton;
}
export interface ListMiningAccountRevenueRequest {
    accountAddresses: string[];
    timeRange: TimeRange;
    timeSingleton: TimeSingleton;
}
export declare class ListMiningAccountRevenueResponseDto {
    accountRevenues: MiningAccountRevenue[];
}
export interface ListMiningAccountRevenueResponse {
    accountRevenues: MiningAccountRevenue[];
}
//# sourceMappingURL=mining-account-revenue.dto.d.ts.map