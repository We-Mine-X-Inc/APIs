import { Types } from "mongoose";
import { HostedMiner } from "./hosted-miner.interface";
import { MinerMarketDetails } from "../market-info";
export declare enum InventoryItemType {
  UNKNOWN = 0,
  MINER = 1,
  ETHERNET_CABLE = 2,
  POWER_CABLE = 3,
  WIFI_ROUTER = 4,
  MINER_FAN = 5,
  POWER_SWITCH = 6,
}
export declare enum InventoryItemStatus {
  UNKNOWN = 0,
  ORDERED = 1,
  NEEDS_TO_BE_ORDERED = 2,
  DECOMMISIONED = 3,
  NOT_IN_USE = 4,
  IN_USE = 5,
}
export declare enum HashAlgorithmType {
  UNKNOWN = 0,
  BLAKE_2S = 1,
  SHA_256 = 2,
}
export type NumericRange = {
  minimum: number;
  maximum: number;
};
export type OperationalMetadata = {
  minerMetadata?: MinerOperationsMetadata;
  powerSwitchMetadata?: PowerSwitchMetadata;
};
export type MinerOperationsMetadata = {
  minerDetails: MinerMarketDetails;
  hashAlgorithmType: HashAlgorithmType;
  expectedHashRateRange: NumericRange;
  expectedFanSpeedRange: NumericRange;
  expectedInletTempRange: NumericRange;
  expectedOutletTempRange: NumericRange;
};
export type PowerSwitchMetadata = {
  clientDeviceName: string;
  ipAddress: string;
};
export type ConcreteItem = {
  miner?: HostedMiner;
};
export interface InventoryItem {
  _id: Types.ObjectId;
  type: InventoryItemType;
  status: InventoryItemStatus;
  model: string;
  concreteItem?: ConcreteItem;
  operationalMetadata: OperationalMetadata;
}
export declare const INVENTORY_ITEM_FIELDS_TO_POPULATE: {
  path: string;
  populate: {
    path: string;
  };
}[];
//# sourceMappingURL=inventory-item.interface.d.ts.map
