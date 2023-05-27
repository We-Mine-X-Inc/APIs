import { WorkerHashRateContribution, WorkerMap } from "../../business-logic-interfaces/farm-metrics/mining-worker-hash-rate.interface";
import { TimeRange } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
export declare class AddPoolWorkerHashRateContributionRequestDto {
    accountAddress?: string;
    timeRange?: TimeRange;
    clientWorkers?: WorkerMap;
    companyWorkers?: WorkerMap;
}
export interface AddPoolWorkerHashRateContributionRequest {
    accountAddress: string;
    timeRange: TimeRange;
    clientWorkers?: WorkerMap;
    companyWorkers?: WorkerMap;
}
export declare class ListPoolWorkerHashRateContributionRequestDto {
    accountAddresses: string[];
    timeRange?: TimeRange;
}
export interface ListPoolWorkerHashRateContributionRequest {
    accountAddresses: string[];
    timeRange: TimeRange;
}
export declare class ListPoolWorkerHashRateContributionResponseDto {
    workerContributions: WorkerHashRateContribution[];
}
export interface ListPoolWorkerHashRateContributionResponse {
    workerContributions: WorkerHashRateContribution[];
}
//# sourceMappingURL=mining-worker-hash-rate.dto.d.ts.map