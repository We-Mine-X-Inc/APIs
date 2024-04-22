import { Types } from "mongoose";

export type FacilityInfo = {
  _id: Types.ObjectId;
  name: string;
  address: string;
  estPowerUsageInKiloWatts: number;
  estPowerCapacityInKiloWatts: number;
  estPowerCostInMicros: number; // $0.06 => 600
  farenheitTemp: number;
  isAutoManaged: boolean;
  underMaintenanceConfig: MaintenanceConfig;
};

export type MaintenanceConfig = {
  reminderFreqToReinitAutoMgmt: number;
  maxEndTimeForMaintenance: Date;
}

// Form 1: Toggle for maintenance; 
//    dropdown for reminder freq, defaulted to 30 mins
//    time selector for max end time of maintenace

// Form 2: Button for "Run Diagnostic"
//    Table will display all miners by default
//    Clicking the button will start a one-time monitoring op and send the results
