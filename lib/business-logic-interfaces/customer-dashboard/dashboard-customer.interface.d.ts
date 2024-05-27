import { Types } from "mongoose";
import { Customer } from "../farm-maintenance";
export type MinerStatusChangeNotifPreference = {
    shouldReceiveEmail: boolean;
};
export type PoolChangeNotifPreference = {
    shouldReceiveEmail: boolean;
};
export type RemainingMiningTimeNotifPreference = {
    shouldReceiveEmail: boolean;
};
export type NotificationPreferences = {
    minerStatusChangeNotifPreference: MinerStatusChangeNotifPreference;
    poolChangeNotifPreference: PoolChangeNotifPreference;
    remainingTimeNotifPreference: RemainingMiningTimeNotifPreference;
};
export type DashboardCustomer = {
    _id: Types.ObjectId;
    hasSubmittedSignUpInfo: boolean;
    notificationPreferences: NotificationPreferences;
    farmProfile: Customer;
};
//# sourceMappingURL=dashboard-customer.interface.d.ts.map