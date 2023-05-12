import { PoolWorkerHashRateContribution, WorkerMap } from "../../business-logic-interfaces/farm-metrics/mining-worker-hash-rate.interface";
import { TimeRange } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddPoolWorkerHashRateContributionDto {
    poolUsername?: string;
    timeRange?: TimeRange;
    clientWorkers?: WorkerMap;
    companyWorkers?: WorkerMap;
}
export declare class ListPoolWorkerHashRateContributionRequestDto {
    poolUsernames: string[];
    timeRange?: TimeRange;
}
export declare class ListPoolWorkerHashRateContributionResponseDto {
    poolWorkerContributions: PoolWorkerHashRateContribution[];
}
//# sourceMappingURL=mining-worker-hash-rate.dto.d.ts.map