import { Types } from "mongoose";
import { HashRate } from "./performance/hash-rate.interface";
import { TimeRange } from "./performance/time.interface";
export type WorkerMap = {
    [key: string]: HashRate;
};
export type WorkerContribution = {
    clientWorkers: WorkerMap;
    companyWorkers: WorkerMap;
};
export type WorkerHashRateContributionModel = {
    _id: Types.ObjectId;
    timeRange: TimeRange;
    accountAddress: string;
    clientWorkers: string;
    companyWorkers: string;
};
export type WorkerHashRateContribution = {
    _id: Types.ObjectId;
    timeRange: TimeRange;
    accountAddress: string;
    clientWorkers: WorkerMap;
    companyWorkers: WorkerMap;
};
//# sourceMappingURL=mining-worker-hash-rate.interface.d.ts.map