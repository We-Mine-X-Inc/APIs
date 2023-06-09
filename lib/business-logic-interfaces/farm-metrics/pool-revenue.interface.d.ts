import { Types } from "mongoose";
import { EconomicValue } from "./performance/revenue.interface";
import { TimeRange } from "./performance/time.interface";
export type PoolRevenue = {
  _id: Types.ObjectId;
  timeRange: TimeRange;
  poolUsername: string;
  cummulativeProfits: EconomicValue;
};
export declare const POOL_REVENUE_FIELDS_TO_POPULATE: {
  path: string;
}[];
//# sourceMappingURL=pool-revenue.interface.d.ts.map
