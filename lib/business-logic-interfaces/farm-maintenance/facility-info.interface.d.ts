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
    underMaintenanceConfig: MaintenanceConfig;
};
export type MaintenanceConfig = {
    reminderFreqToReinitAutoMgmt: number;
    maxEndTimeForMaintenance: Date;
};
//# sourceMappingURL=facility-info.interface.d.ts.map