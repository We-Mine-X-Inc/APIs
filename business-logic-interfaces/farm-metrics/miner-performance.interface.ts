import { Miner } from "@farm-maintenance-interfaces/miner.interface";
import { HashRate } from "./performance/hash-rate.interface";
import { EconomicValue } from "./performance/revenue.interface";
import { TimeRange } from "./performance/time.interface";

export type MinerPerformance = {
  miner: Miner;
  timeRange: TimeRange;
  profits: EconomicValue;
  averageHashRate: HashRate;
};

export const MINER_PERFORMANCE_FIELDS_TO_POPULATE = [{ path: "miner" }];
