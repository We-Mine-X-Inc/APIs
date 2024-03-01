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
export declare const POWER_CONTROLLER_FIELDS_TO_POPULATE: {
    path: string;
    populate: {
        path: string;
    };
}[];
//# sourceMappingURL=power-controller.interface.d.ts.map