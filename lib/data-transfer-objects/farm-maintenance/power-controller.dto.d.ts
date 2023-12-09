import { InventoryItemStatus } from "../../business-logic-interfaces/farm-maintenance/inventory-item";
import { PowerControllerMetadata } from "../../business-logic-interfaces/farm-maintenance/power-controller.interface";
export declare class CreatePowerControllerRequestDto {
    status?: InventoryItemStatus;
    model?: string;
    metadata?: PowerControllerMetadata;
}
export interface CreatePowerControllerReqeust {
    status: InventoryItemStatus;
    model: string;
    metadata?: PowerControllerMetadata;
}
//# sourceMappingURL=power-controller.dto.d.ts.map