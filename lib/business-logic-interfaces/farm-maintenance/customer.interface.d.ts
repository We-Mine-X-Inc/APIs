import { Types } from "mongoose";
import { WalletPreference } from "../domain/wallet.interface";
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
export interface Customer {
    _id: Types.ObjectId;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    address?: string;
    iscompanyCustomer: boolean;
    hasSubmittedSignUpInfo: boolean;
    notificationPreferences: NotificationPreferences;
    walletPreferences: WalletPreference[];
}
//# sourceMappingURL=customer.interface.d.ts.map