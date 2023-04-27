import { Types } from "mongoose";
export type FacilityInfo = {
    _id: Types.ObjectId;
    name: string;
    address: string;
    estPowerUsageInKiloWatts: number;
    estPowerCapacityInKiloWatts: number;
    estPowerCostInMicros: number;
    farenheitTemp: number;
    isAutoManaged: boolean;
};
//# sourceMappingURL=facility-info.interface.d.ts.map