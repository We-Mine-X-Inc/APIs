import { InventoryItemStatus } from "../../business-logic-interfaces/farm-maintenance/inventory-item";
import { ManagementMetadata } from "../../business-logic-interfaces/farm-maintenance/power-controller.interface";
export declare class CreatePowerControllerRequestDto {
    status?: InventoryItemStatus;
    model?: string;
    metadata?: ManagementMetadata;
}
export interface CreatePowerControllerReqeust {
    status: InventoryItemStatus;
    model: string;
    metadata?: ManagementMetadata;
}
//# sourceMappingURL=power-controller.dto.d.ts.map