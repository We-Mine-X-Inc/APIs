import { PoolWorkerHashRateContribution, WorkerMap } from "../../business-logic-interfaces/farm-metrics/pool-worker-hash-rate-contribution.interface";
import { TimeRange } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddPoolWorkerHashRateContributionDto {
    poolUsername?: string;
    timeRange?: TimeRange;
    clientWorkers?: WorkerMap;
    companyWorkers?: WorkerMap;
}
export declare class ListPoolWorkerHashRateContributionRequestDto {
    poolUsernames?: string[];
    timeRange?: TimeRange;
}
export declare class ListPoolWorkerHashRateContributionResponseDto {
    poolWorkerContributions?: PoolWorkerHashRateContribution[];
}
//# sourceMappingURL=pool-worker-hash-rate-contribution.dto.d.ts.map