import { Types } from "mongoose";
import { WalletPreference } from "../domain/wallet.interface";

export interface Customer {
  _id: Types.ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address?: string;
  isCompanyCustomer: boolean;
  walletPreferences: WalletPreference[];
}
