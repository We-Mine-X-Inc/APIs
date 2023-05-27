import { Types } from "mongoose";
import { EconomicValue } from "./performance/revenue.interface";
import { TimeRange } from "./performance/time.interface";
export type MiningAccountRevenue = {
    _id: Types.ObjectId;
    timeRange: TimeRange;
    accountAddress: string;
    cummulativeProfits: EconomicValue;
};
//# sourceMappingURL=mining-account-revenue.interface.d.ts.map