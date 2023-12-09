import { Types } from "mongoose";
import { MinerDetails } from "../market-info";
import { InventoryItemStatus } from "./inventory-item";

export enum HashAlgorithmType {
  UNKNOWN = 0,
  BLAKE_2S = 1,
  SHA_256 = 2,
}

export type NumericRange = {
  minimum: number;
  maximum: number;
};

export type MinerOperationsMetadata = {
  hashAlgorithmType: HashAlgorithmType;
  expectedHashRateRange: NumericRange;
  expectedFanSpeedRange: NumericRange;
  expectedInletTempRange: NumericRange;
  expectedOutletTempRange: NumericRange;
};

export interface Miner {
  _id: Types.ObjectId;
  status: InventoryItemStatus;
  model: string;
  details: MinerDetails;
  metadata: MinerOperationsMetadata;
}

export const MINER_FIELDS_TO_POPULATE = [
  {
    path: "metadata",
    populate: { path: "metadata" },
  },
];
