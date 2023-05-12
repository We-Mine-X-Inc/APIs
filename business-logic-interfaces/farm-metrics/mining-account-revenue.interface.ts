import { Types } from "mongoose";
import { EconomicValue } from "./performance/revenue.interface";
import { TimeRange } from "./performance/time.interface";

export type MiningAccountRevenue = {
  _id: Types.ObjectId;
  timeRange: TimeRange;
  miningAccountUsername: string;
  cummulativeProfits: EconomicValue;
};
