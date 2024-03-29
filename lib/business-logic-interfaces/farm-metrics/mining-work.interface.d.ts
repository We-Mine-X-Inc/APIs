import { Types } from "mongoose";
import { HostedMinerHydrated, Pool } from "../farm-maintenance";
export interface MiningWork {
    _id: Types.ObjectId;
    hostedMinerByFriendlyId: Types.ObjectId;
    poolByFriendlyId: Types.ObjectId;
    time: Date;
    hashRate: Number;
    totalEnergyConsumption: Number;
    isOperational: Boolean;
}
export interface MiningWorkHydrated {
    _id: Types.ObjectId;
    hostedMinerByFriendlyId: HostedMinerHydrated;
    poolByFriendlyId: Pool;
    time: Date;
    hashRate: Number;
    totalEnergyConsumption: Number;
    isOperational: Boolean;
}
//# sourceMappingURL=mining-work.interface.d.ts.map