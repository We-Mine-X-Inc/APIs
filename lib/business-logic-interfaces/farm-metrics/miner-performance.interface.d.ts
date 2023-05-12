import { Miner } from "../farm-maintenance/miner.interface";
import { HashRate } from "./performance/hash-rate.interface";
import { EconomicValue } from "./performance/revenue.interface";
import { TimeRange } from "./performance/time.interface";
export type MinerPerformance = {
  miner: Miner;
  timeRange: TimeRange;
  profits: EconomicValue;
  averageHashRate: HashRate;
};
export declare const MINER_PERFORMANCE_FIELDS_TO_POPULATE: {
  path: string;
}[];
//# sourceMappingURL=miner-performance.interface.d.ts.map
