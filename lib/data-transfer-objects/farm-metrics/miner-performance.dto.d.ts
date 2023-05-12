import { Miner } from "../../business-logic-interfaces/farm-maintenance/miner.interface";
import { HashRate } from "../../business-logic-interfaces/farm-metrics/performance/hash-rate.interface";
import { EconomicValue } from "../../business-logic-interfaces/farm-metrics/performance/revenue.interface";
import { TimeRange } from "../../business-logic-interfaces/farm-metrics/performance/time.interface";
import { Types } from "mongoose";
export declare class MinerPerformanceRequestDto {
  minerId?: Types.ObjectId;
  timeRange?: TimeRange;
}
export declare class MinerPerformanceResponseDto {
  miner?: Miner;
  timeRange?: TimeRange;
  profits?: EconomicValue;
  averageHashRate?: HashRate;
  contributionRatios: CalculatedWorkerContribution[];
}
export type CalculatedWorkerContribution = {
  poolUsername?: string;
  workerName?: string;
  hashRate?: HashRate;
  profit?: EconomicValue;
  timeRange?: TimeRange;
};
export type FlattenedWorkerContribution = {
  poolUsername?: string;
  workerName?: string;
  hashRate?: HashRate;
  timeRange?: TimeRange;
};
//# sourceMappingURL=miner-performance.dto.d.ts.map
