import { PoolRevenue } from "../../business-logic-interfaces/farm-metrics/pool-revenue.interface";
import { Revenue } from "../../business-logic-interfaces/farm-metrics/performance/revenue.interface";
import { TimeRange, TimeSingleton } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddPoolRevenueDto {
    poolUsername?: string;
    timeRange?: TimeRange;
    cummulativeProfits?: Revenue;
}
export declare class ListPoolRevenueRequestDto {
    poolUsernames: string[];
    timeRange?: TimeRange;
    timeSingleton?: TimeSingleton;
}
export declare class ListPoolRevenueResponseDto {
    poolRevenues: PoolRevenue[];
}
//# sourceMappingURL=pool-revenue.dto.d.ts.map