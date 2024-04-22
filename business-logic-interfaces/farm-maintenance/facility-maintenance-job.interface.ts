import { Types } from "mongoose";

export type FacilityMaintenanceJob = {
  _id: Types.ObjectId;
  reminderFreqToReinitAutoMgmt: number;
  startTime: Date;
  endTime: Date;
};
