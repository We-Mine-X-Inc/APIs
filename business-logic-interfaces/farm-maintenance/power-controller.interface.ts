import { Types } from "mongoose";
import { InventoryItemStatus } from "./inventory-item";

export type ManagementMetadata = {
  friendlyMinerId: string;
  friendlyPowerControllerId: string;
  ipAddress: string;
};

export interface PowerController {
  _id: Types.ObjectId;
  status: InventoryItemStatus;
  model: string;
  managementMetadata: ManagementMetadata;
}

export const POWER_CONTROLLER_FIELDS_TO_POPULATE = [
  {
    path: "metadata",
    populate: { path: "metadata" },
  },
];
