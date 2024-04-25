import { Types } from "mongoose";
export type FacilityMaintenanceJob = {
    _id: Types.ObjectId;
    facilityInfo: Types.ObjectId;
    startTime: Date;
    endTime: Date;
    durationBetweenInquiryPrompt: number;
};
//# sourceMappingURL=facility-maintenance-job.interface.d.ts.map